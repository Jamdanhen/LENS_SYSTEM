const assert = require('node:assert/strict');

function effects(final, roll, special = null) {
  if (special === '00') return 0;
  if (special !== '01' && roll > final) return 0;
  return 1 + Math.floor(Math.max(0, final - roll) / 10);
}
const add = (map, value, p) => map.set(value, (map.get(value) || 0) + p);
function distribution(final) {
  const out = new Map();
  for (let roll = 2; roll <= 99; roll++) add(out, effects(final, roll), 0.01);
  add(out, 0, 0.01); // Natural 00: failure; separate complications are not erased.
  let mass = 0.01;
  for (let repeats = 0; repeats <= 4; repeats++) {
    for (let terminal = 2; terminal <= 100; terminal++) {
      add(out, effects(final, terminal - 99 - 99 * repeats, '01'), mass / 100);
    }
    mass /= 100;
  }
  // Retain the 1e-12 tail probability, censoring only its additional output.
  // Event-probability error is bounded by tail mass per participating roll.
  add(out, effects(final, 1 - 99 * 5, '01'), mass);
  assert.ok(Math.abs([...out.values()].reduce((a, b) => a + b, 0) - 1) < 1e-12);
  return out;
}
function convolve(a, b) {
  const out = new Map();
  for (const [x, px] of a) for (const [y, py] of b) add(out, x + y, px * py);
  return out;
}
function opposed(attacks, defense) {
  let pass = 0;
  let mean = 0;
  let counter = 0;
  for (const [a, pa] of attacks) {
    for (const [d, pd] of defense) {
      const weight = pa * pd;
      const remainder = Math.max(0, a - d);
      if (remainder > 0) pass += weight;
      mean += weight * remainder;
      // Eligible defensive surplus only; not automatic damage or retaliation.
      if (d > a) counter += weight;
    }
  }
  return { pass, mean, counter };
}
function compare(label, ratings, defenderRating) {
  const defense = distribution(defenderRating);
  let pool = new Map([[0, 1]]);
  const individual = ratings.map(r => {
    const attack = distribution(r);
    pool = convolve(pool, attack);
    return opposed(attack, defense);
  });
  return {
    label, ratings, defenderRating,
    separate: {
      defenseRolls: ratings.length,
      anyHarm: 1 - individual.reduce((p, row) => p * (1 - row.pass), 1),
      expectedHarm: individual.reduce((n, row) => n + row.mean, 0),
      expectedEligibleCounters: individual.reduce((n, row) => n + row.counter, 0),
    },
    combined: { defenseRolls: 1, ...opposed(pool, defense) },
  };
}

const rows = [
  compare('Two ordinary attackers, weaker defender', [60, 60], 30),
  compare('Two ordinary attackers, stronger defender', [60, 60], 120),
  compare('Three ordinary attackers, stronger defender', [60, 60, 60], 120),
  compare('Five ordinary attackers, stronger defender', [60, 60, 60, 60, 60], 120),
  compare('Three ordinary attackers, much stronger defender', [60, 60, 60], 200),
  compare('Three high-output beams, stronger defender', [120, 120, 120], 250),
  compare('Unequal attackers', [40, 80], 120),
];

// Changing the attack's narrative instrument alone must not change the math.
const swords = compare('Swords', [60, 60], 120);
const beams = compare('Beams', [60, 60], 120);
assert.deepEqual(swords.separate, beams.separate);
assert.deepEqual(swords.combined, beams.combined);
assert.ok(rows[1].combined.mean > rows[1].separate.expectedHarm);
assert.ok(rows[3].combined.mean > rows[2].combined.mean);

const fixture = (attacks, defense) => ({
  attacks, defenseEachOrWhole: defense,
  separate: attacks.reduce((n, a) => n + Math.max(0, a - defense), 0),
  combined: Math.max(0, attacks.reduce((n, a) => n + a, 0) - defense),
});
const fixed = [fixture([4, 3], 1), fixture([4, 3], 5), fixture([4, 3, 2], 5), fixture([4, 3, 2], 10)];
assert.deepEqual(fixed.map(r => [r.separate, r.combined]), [[5, 6], [0, 2], [0, 4], [0, 0]]);

// If the first separate hit already resolves this target's participation,
// a later, not-yet-committed action retains its ordinary available choices.
const weakTarget = {
  fixtureHarmNeeded: 3,
  firstSeparateHarm: 4 - 1,
  combinedHarm: 4 + 3 - 1,
  separateActionsCommittedBeforeTargetResolved: 1,
  jointActionsCommitted: 2,
};
assert.ok(weakTarget.firstSeparateHarm >= weakTarget.fixtureHarmNeeded);
assert.equal(weakTarget.combinedHarm, 6);

const disruption = {
  original: Math.max(0, 4 + 3 - 5),
  secondContributionPrevented: Math.max(0, 4 - 5),
  secondContributionPartlyCancelled: Math.max(0, 4 + (3 - 2) - 5),
  failedContributorAgainstWeakerDefense: Math.max(0, 4 + 0 - 1),
};
assert.deepEqual(disruption, { original: 2, secondContributionPrevented: 0, secondContributionPartlyCancelled: 0, failedContributorAgainstWeakerDefense: 3 });

// The declared method limits which contribution its cancellation can reach.
const defenseScope = {
  wholeAttackDefense: Math.max(0, 4 + 3 - 5),
  firstSwordOnly: Math.max(0, 4 - 5) + 3,
};
assert.equal(defenseScope.wholeAttackDefense, 2);
assert.equal(defenseScope.firstSwordOnly, 3);

// Pooled opposition does not answer which individual hits remain afterward.
// Show all valid source allocations, not a secretly selected favorable one.
const protectionAllocations = [];
for (let a = 0; a <= 4; a++) {
  const b = 4 - a; // Seven earned Effects minus three defensive Effects.
  if (b >= 0 && b <= 3) {
    protectionAllocations.push({
      remaining: [a, b],
      afterOneMitigationPerActualHit: Math.max(0, a - 1) + Math.max(0, b - 1),
    });
  }
}
assert.deepEqual([...new Set(protectionAllocations.map(r => r.afterOneMitigationPerActualHit))].sort(), [2, 3]);

console.log(JSON.stringify({
  status: 'All assertions passed; predeclared one-defense exchange remains a candidate.',
  scope: 'Static complete Final Ratings, no mitigation in probability rows, no passive Difficulty reassignment, no paid spending, and no in-exchange rating changes. Defender has a feasible whole-attack response in combined probability rows; separate defenses are independent.',
  naturalResults: 'Natural 01/00 included. Five repeated-continuation levels expanded; remaining 1e-12 mass retained with censored output. At most ten relevant rolls: probability error <= 1e-11; output-mean truncation error <= 6e-11. Complication consequences are not simulated.',
  rows, fixed, weakTarget, disruption, defenseScope, protectionAllocations,
}, null, 2));
