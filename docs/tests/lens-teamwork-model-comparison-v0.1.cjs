const assert = require('node:assert/strict');

// Candidate arithmetic only. No source rules or output-conversion tables change.
const rating = (raw, difficulty) => Math.floor(raw * 0.98 * 0.6 ** (difficulty - 1));
function resolve(final, completedRoll, special = null) {
  const success = special === '01' || (special !== '00' && completedRoll <= final);
  return {
    success,
    effects: success ? 1 + Math.floor(Math.max(0, final - completedRoll) / 10) : 0,
    complication: special === '00'
      ? Math.floor(Math.max(0, completedRoll - final) / 10) : 0,
  };
}
const source = (raw, difficulty, roll, special = null) => ({
  rating: rating(raw, difficulty),
  ...resolve(rating(raw, difficulty), roll, special),
});
// Exact success probability for a permitted rolled attempt, including 01/00.
// Continuations change output but not the initial success/failure classification.
const probability = final => Math.min(99, Math.max(1, final)) / 100;
const shared = sources => ({
  success: sources.some(s => s.success),
  effects: sources.reduce((n, s) => n + s.effects, 0),
  complications: sources.reduce((n, s) => n + s.complication, 0),
});
const dependent = (primary, enhancement) => ({
  complete: primary.success && enhancement.success,
  primaryEffects: primary.effects,
  enhancementEffects: enhancement.effects,
  residualPrimaryPossible: primary.success && !enhancement.success,
});
function assist(helperRaw, leadRaw, difficulty, helperRoll, leadRoll, special = null) {
  const helper = source(helperRaw, difficulty, helperRoll, special);
  const proposedDifficulty = difficulty - helper.effects;
  // Do not invent a D0 or negative-Difficulty rule, or silently clamp to D1.
  if (proposedDifficulty < 1) return { helper, proposedDifficulty, unresolvedBelowD1: true };
  return { helper, proposedDifficulty, lead: source(leadRaw, proposedDifficulty, leadRoll) };
}

const probabilityRows = [80, 160, 320].map(raw => {
  const final = rating(raw, 5);
  const p = probability(final);
  return {
    raw, difficulty: 5, final,
    solo: p,
    twoShared: 1 - (1 - p) ** 2,
    threeShared: 1 - (1 - p) ** 3,
    twoRequiredAtFullDifficulty: p * p,
    twoRequiredAtSeparateD3D2: probability(rating(raw, 3)) * probability(rating(raw, 2)),
  };
});
assert.deepEqual(probabilityRows.map(r => r.final), [10, 20, 40]);
assert.ok(Math.abs(probabilityRows[2].twoShared - 0.64) < 1e-12);
assert.ok(Math.abs(probabilityRows[2].twoRequiredAtFullDifficulty - 0.16) < 1e-12);

const fixtureSpecs = [
  ['Both supply output', 25, 10, null, null],
  ['Primary fails, helper succeeds', 50, 25, null, null],
  ['Primary succeeds, helper fails', 25, 50, null, null],
  ['Both fail', 50, 60, null, null],
  ['Primary 00, helper succeeds', 150, 25, '00', null],
  ['Primary succeeds, helper 01 then 50', 25, -49, null, '01'],
];
const fixtures = fixtureSpecs.map(([name, a, b, sa, sb]) => {
  const primary = source(320, 5, a, sa);
  const helper = source(320, 5, b, sb);
  return { name, primary, helper, shared: shared([primary, helper]), dependent: dependent(primary, helper) };
});
assert.equal(fixtures[0].shared.effects, 6);
assert.equal(fixtures[1].shared.success, true);
assert.equal(fixtures[1].dependent.complete, false);
assert.equal(fixtures[2].dependent.residualPrimaryPossible, true);
assert.equal(fixtures[3].shared.effects, 0);
assert.equal(fixtures[4].shared.complications, 11);
assert.equal(fixtures[4].shared.success, true);
assert.equal(fixtures[4].dependent.complete, false);
assert.equal(fixtures[5].shared.effects, 11);

const reductionFixture = assist(320, 320, 5, 25, 50);
assert.equal(reductionFixture.helper.effects, 2);
assert.equal(reductionFixture.proposedDifficulty, 3);
assert.equal(reductionFixture.lead.rating, 112);
assert.equal(reductionFixture.lead.effects, 7);
const roles = {
  strongerHelps: assist(320, 100, 5, 25, 10),
  weakerHelps: assist(100, 320, 5, 10, 25),
  pooled: shared([source(320, 5, 25), source(100, 5, 10)]),
};
assert.equal(roles.strongerHelps.lead.effects, 3);
assert.equal(roles.weakerHelps.lead.effects, 5);
assert.equal(roles.pooled.effects, 3);
const underflow = assist(320, 320, 5, -49, 50, '01');
assert.equal(underflow.unresolvedBelowD1, true);
assert.equal(underflow.proposedDifficulty, -4);

const neutralControl = {
  primary: source(320, 5, 50),
  helperAtD1: source(100, 1, 10),
  helperAtD5: source(100, 5, 10),
};
assert.equal(neutralControl.helperAtD1.effects, 9);
assert.equal(neutralControl.helperAtD5.effects, 1);

// Exhaustive ordinary-roll checks, not a simulation of natural continuations.
let checkedPairs = 0;
for (let a = 2; a <= 99; a++) {
  for (let b = 2; b <= 99; b++) {
    const first = source(320, 5, a);
    const second = source(320, 5, b);
    const pool = shared([first, second]);
    assert.deepEqual(pool, shared([second, first]));
    assert.ok(pool.effects >= first.effects && pool.effects >= second.effects);
    assert.equal(dependent(first, second).complete, first.success && second.success);
    checkedPairs++;
  }
}
// Existing cancellation: one opposing pool is not duplicated per contributor.
assert.equal(Math.max(0, 4 + 3 - 5), 2);
assert.equal(Math.max(0, 4 - 5) + Math.max(0, 3 - 5), 0);
assert.equal(rating(320, 1), 313);
assert.equal(rating(320, 1 + 1), 188);

console.log(JSON.stringify({
  status: 'All assertions passed; all compared models remain candidates.',
  probabilityScope: 'Independent permitted attempts; no opposition, paid spending, or disruptive complications. Success probabilities include natural 01/00; outcome fixtures use completed continuations.',
  checkedOrdinaryPairs: checkedPairs,
  probabilityRows, fixtures, reductionFixture, roles, underflow, neutralControl,
  difficultyCompositionWarning: 'D3 + D2 = D5 is a candidate construction. Adding ordinary D1 baselines also changes D1 to D2; participant count itself must not add Difficulty.',
}, null, 2));
