const assert = require('node:assert/strict');
const sum = values => values.reduce((total, value) => total + value, 0);

function whole(attacks, defense) {
  return { harm: Math.max(0, sum(attacks) - defense),
    potentialCounter: defense > sum(attacks) ? 1 : 0 };
}

function targeted(attacks, defenses) {
  assert.equal(attacks.length, defenses.length);
  const cancelled = attacks.map((value, i) => Math.min(value, defenses[i]));
  const remaining = attacks.map((value, i) => value - cancelled[i]);
  const unused = defenses.map((value, i) => value - cancelled[i]);
  assert.equal(sum(attacks), sum(cancelled) + sum(remaining));
  assert.equal(sum(defenses), sum(cancelled) + sum(unused));
  return { cancelled, remaining, unused, harm: sum(remaining),
    // Candidate eligibility only: actual defensive method and consequence
    // timing still have to support the counter. No counter is auto-inflicted.
    potentialCounter: unused.some(value => value > 0) ? 1 : 0 };
}

const fixtures = [
  { label: 'Both targeted responses feasible', attacks: [4, 3], defense: 5,
    targeted: [5, 5], expected: [2, 0] },
  { label: 'Only the first response feasible', attacks: [4, 3], defense: 5,
    targeted: [5, 0], expected: [2, 3] },
  { label: 'Second response partially succeeds', attacks: [4, 3], defense: 5,
    targeted: [5, 2], expected: [2, 1] },
  { label: 'One-sided excess cannot spill', attacks: [4, 3], defense: 7,
    targeted: [7, 0], expected: [0, 3] },
  { label: 'Both local responses are weak', attacks: [4, 3], defense: 1,
    targeted: [1, 1], expected: [6, 5] },
  { label: 'All responses have failed', attacks: [4, 3], defense: 0,
    targeted: [0, 0], expected: [7, 7] },
  { label: 'One offensive contribution failed', attacks: [4, 0], defense: 3,
    targeted: [3, 0], expected: [1, 1] },
  { label: 'Three contributors; repeated local responses', attacks: [4, 3, 2], defense: 5,
    targeted: [5, 5, 5], expected: [4, 0] }
].map(item => {
  const combined = whole(item.attacks, item.defense);
  const local = targeted(item.attacks, item.targeted);
  assert.deepEqual([combined.harm, local.harm], item.expected);
  return { ...item, whole: combined, local };
});

// This compares fixed completed Effects, not copied rolls or probabilities.
let equalOutputCases = 0;
let strictLocalAdvantages = 0;
let maximumAdvantage = 0;
for (let a = 0; a <= 10; a++) for (let b = 0; b <= 10; b++) {
  for (let d = 0; d <= 10; d++) {
    const one = whole([a, b], d);
    const two = targeted([a, b], [d, d]);
    assert.ok(two.harm <= one.harm);
    assert.ok(one.harm - two.harm <= d);
    assert.deepEqual(two.harm, targeted([b, a], [d, d]).harm);
    equalOutputCases++;
    if (two.harm < one.harm) strictLocalAdvantages++;
    maximumAdvantage = Math.max(maximumAdvantage, one.harm - two.harm);
  }
}

let scopeCases = 0;
for (let a = 0; a <= 10; a++) for (let b = 0; b <= 10; b++) {
  for (let d = 0; d <= 10; d++) for (let e = 0; e <= 10; e++) {
    const local = targeted([a, b], [d, e]);
    assert.equal(local.remaining[0], Math.max(0, a - d));
    assert.equal(local.remaining[1], Math.max(0, b - e));
    assert.equal(local.harm, targeted([b, a], [e, d]).harm);
    assert.ok(local.potentialCounter <= 1);
    scopeCases++;
  }
}

const mixed = targeted([4, 3], [5, 2]);
assert.equal(mixed.harm, 1);
assert.equal(mixed.potentialCounter, 1);
assert.equal(whole([4, 3], 7).harm, 0); // Wrong for those two local scopes.
assert.equal(targeted([4, 3], [5, 5]).potentialCounter, 1);

function effects(rating, roll, special = null) {
  if (special === '00' || (special !== '01' && roll > rating)) return 0;
  return 1 + Math.floor(Math.max(0, rating - roll) / 10);
}
assert.equal(effects(90, 45), 5);
assert.equal(effects(45, 45), 1);
const unsupportedDivisor = targeted([4, 3], [effects(45, 45), effects(45, 45)]);
assert.equal(unsupportedDivisor.harm, 5);
const exceptionalLocal = targeted([4, 3], [effects(0, -49, '01'), 0]);
assert.equal(exceptionalLocal.harm, 3);
assert.equal(targeted([4, 3], [effects(90, 150, '00'), 2]).harm, 5);

console.log(JSON.stringify({ fixtures, verification: {
  equalOutputCases, strictLocalAdvantages, maximumAdvantage, scopeCases,
  unsupportedNormalActionDivisorHarm: unsupportedDivisor.harm,
  checks: ['per-scope conservation', 'no cancellation spill', 'order invariance',
    'at most one eligible counter in the tested shared exchange',
    'local surplus may coexist with another incoming remainder',
    'special output does not broaden scope']
} }, null, 2));
