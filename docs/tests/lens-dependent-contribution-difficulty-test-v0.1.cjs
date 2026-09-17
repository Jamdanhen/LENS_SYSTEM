const assert = require('node:assert/strict');

const rating = (raw, difficulty) => Math.floor(raw * 0.98 * 0.6 ** (difficulty - 1));
const pSuccess = final => Math.min(99, Math.max(1, final)) / 100;
const product = values => values.reduce((a, b) => a * b, 1);
function outcomes(probabilities) {
  const primary = probabilities[0];
  const enhancements = product(probabilities.slice(1));
  return {
    complete: primary * enhancements,
    viablePrimaryOnly: primary * (1 - enhancements),
    noPrimary: 1 - primary,
  };
}
function compare(name, raws, difficulties) {
  const total = difficulties.reduce((a, b) => a + b, 0);
  const fullRatings = raws.map(raw => rating(raw, total));
  const ownRatings = raws.map((raw, i) => rating(raw, difficulties[i]));
  const whole = outcomes(fullRatings.map(pSuccess));
  const own = outcomes(ownRatings.map(pSuccess));
  assert.ok(own.complete >= whole.complete);
  for (const row of [whole, own]) {
    assert.ok(Math.abs(row.complete + row.viablePrimaryOnly + row.noPrimary - 1) < 1e-12);
  }
  return { name, raws, difficulties, total, fullRatings, ownRatings, whole, own };
}

const rows = [
  ...[40, 80, 160, 320].map(raw => compare(`D3 + D2, equal ${raw}`, [raw, raw], [3, 2])),
  compare('D4 + D3, equal 160', [160, 160], [4, 3]),
  compare('D4 + D3, equal 320', [320, 320], [4, 3]),
  compare('Weaker primary, stronger enhancement', [80, 320], [3, 2]),
  compare('Stronger primary, weaker enhancement', [320, 80], [3, 2]),
  compare('Three necessary functions, equal 160', [160, 160, 160], [3, 2, 2]),
];
assert.ok(Math.abs(rows[2].whole.complete - 0.04) < 1e-12);
assert.ok(Math.abs(rows[2].own.complete - 0.5264) < 1e-12);
assert.ok(Math.abs(rows[6].own.complete - 0.2772) < 1e-12);
assert.ok(Math.abs(rows[7].own.complete - 0.4653) < 1e-12);
assert.ok(Math.abs(rows[8].whole.complete - 0.000343) < 1e-12);
assert.ok(Math.abs(rows[8].own.complete - 0.494816) < 1e-12);

function resolve(final, completedRoll, special = null) {
  const success = special === '01' || (special !== '00' && completedRoll <= final);
  return {
    effects: success ? 1 + Math.floor(Math.max(0, final - completedRoll) / 10) : 0,
    complication: special === '00' ? Math.floor(Math.max(0, completedRoll - final) / 10) : 0,
  };
}
function exchange(model, primaryRoll, enhancementRoll, cancellation = 0,
  meansRemain = true, primarySpecial = null, enhancementSpecial = null) {
  const ds = model === 'whole' ? [5, 5] : [3, 2];
  const primary = resolve(rating(160, ds[0]), primaryRoll, primarySpecial);
  const enhancement = resolve(rating(160, ds[1]), enhancementRoll, enhancementSpecial);
  const survivingEnhancement = Math.max(0, enhancement.effects - cancellation);
  return {
    primary, enhancement, survivingEnhancement,
    complete: primary.effects > 0 && survivingEnhancement > 0 && meansRemain,
    // This fixture explicitly permits the primary to remain useful locally.
    localPrimaryEffects: primary.effects,
  };
}
const fixtureInputs = [
  ['Both complete their own functions', 50, 50],
  ['Primary fails', 80, 50],
  ['Enhancement fails', 50, 99],
  ['Enhancement reduced but survives', 50, 50, 4],
  ['Enhancement cancelled', 50, 50, 5],
  ['Connecting means removed', 50, 50, 0, false],
  ['Primary 00, enhancement succeeds', 150, 50, 0, true, '00'],
  ['Primary fails, enhancement 01 then 50', 80, -49, 0, true, null, '01'],
];
const fixtures = fixtureInputs.map(([name, ...args]) => ({
  name, whole: exchange('whole', ...args), own: exchange('own', ...args),
}));
assert.equal(fixtures[0].own.primary.effects, 1);
assert.equal(fixtures[0].own.enhancement.effects, 5);
assert.equal(fixtures[0].own.complete, true);
assert.equal(fixtures[0].whole.complete, false);
assert.equal(fixtures[1].own.complete, false);
assert.equal(fixtures[2].own.localPrimaryEffects, 1);
assert.equal(fixtures[3].own.complete, true);
assert.equal(fixtures[4].own.complete, false);
assert.equal(fixtures[4].own.localPrimaryEffects, 1);
assert.equal(fixtures[5].own.complete, false);
assert.equal(fixtures[6].own.primary.complication, 9);
assert.equal(fixtures[7].own.enhancement.effects, 15);
assert.equal(fixtures[7].own.complete, false);

// Enumerate initial percentile success classifications, not continuation output.
const initialSuccess = (final, roll) => roll === 1 || (roll !== 100 && roll <= final);
let checkedPairs = 0;
for (const row of rows.filter(r => r.raws.length === 2)) {
  let fullComplete = 0;
  let ownComplete = 0;
  for (let a = 1; a <= 100; a++) {
    for (let b = 1; b <= 100; b++) {
      const full = initialSuccess(row.fullRatings[0], a) && initialSuccess(row.fullRatings[1], b);
      const own = initialSuccess(row.ownRatings[0], a) && initialSuccess(row.ownRatings[1], b);
      assert.ok(!full || own);
      fullComplete += Number(full);
      ownComplete += Number(own);
      checkedPairs++;
    }
  }
  assert.ok(Math.abs(fullComplete / 10000 - row.whole.complete) < 1e-12);
  assert.ok(Math.abs(ownComplete / 10000 - row.own.complete) < 1e-12);
}

// A genuinely shared function is not divided into easier invented subtasks.
const sharedSameChallenge = {
  rawEach: 320, difficultyEach: 5, ratings: [rating(320, 5), rating(320, 5)],
  atLeastOne: 1 - (1 - pSuccess(rating(320, 5))) ** 2,
};
assert.ok(Math.abs(sharedSameChallenge.atLeastOne - 0.64) < 1e-12);

console.log(JSON.stringify({
  status: 'All assertions passed; Difficulty assignment remains a candidate.',
  scope: 'Independent permitted rolls. Probability tables include natural 01/00 classification but exclude opposition, paid spending, and disruptive consequences. Separate fixtures test targeted cancellation and completed special results.',
  assumptions: 'Difficulties and their sum are illustrative. No new universal addition rule, neutral roll, output conversion, or automatic coordination penalty.',
  checkedInitialRollPairs: checkedPairs,
  rows, fixtures, sharedSameChallenge,
}, null, 2));
