const assert = require('node:assert/strict');
const effects = (rating, roll) => roll <= rating ? 1 + Math.floor((rating - roll) / 10) : 0;
const net = (incoming, defense, mitigation = 0) =>
  Math.max(0, incoming - defense - mitigation);

// Candidate comparison only: one fixed budget versus strength per exposure.
const areaEffects = effects(78, 40);
const harmEffects = effects(78, 60);
assert.equal(areaEffects, 4);
assert.equal(harmEffects, 2);
const defenses = [effects(40, 50), effects(40, 35), effects(40, 25)];
assert.deepEqual(defenses, [0, 1, 2]);
const assigned = [1, 1, 0];
assert.equal(assigned.reduce((a, b) => a + b, 0), harmEffects);
const fixedBudget = assigned.map((value, i) => net(value, defenses[i]));
const areaStrength = defenses.map(value => net(harmEffects, value));
assert.deepEqual(fixedBudget, [1, 0, 0]);
assert.deepEqual(areaStrength, [2, 1, 0]);

const allocations = [];
for (let a = 0; a <= harmEffects; a++) {
  for (let b = 0; b <= harmEffects - a; b++) {
    const c = harmEffects - a - b;
    const output = [a, b, c].map((value, i) => net(value, defenses[i]));
    assert.ok(output.reduce((x, y) => x + y, 0) <= harmEffects);
    allocations.push({assigned: [a, b, c], output});
  }
}
const zeroDefenseCrowds = [1, 3, 10].map(occupants => ({occupants,
  fixedBudgetMaximum: harmEffects,
  areaStrengthTotal: occupants * harmEffects}));

// An earlier, applicable intervention against the whole effect changes its
// strength before local exposures. This is not a personal defense copied out.
const afterGlobalOne = defenses.map(value => net(harmEffects - 1, value));
assert.deepEqual(afterGlobalOne, [1, 0, 0]);
const afterLocalOne = defenses.map((value, i) => net(harmEffects, value, i === 0 ? 1 : 0));
assert.deepEqual(afterLocalOne, [1, 1, 0]);

let checked = 0;
for (let strength = 0; strength <= 20; strength++) {
  for (let a = 0; a <= 20; a++) for (let b = 0; b <= 20; b++) {
    const orderAB = [net(strength, a), net(strength, b)];
    const orderBA = [net(strength, b), net(strength, a)];
    assert.deepEqual(orderAB, orderBA.reverse());
    assert.equal(orderAB[0], net(strength, a));
    assert.ok(orderAB.every(value => value >= 0 && value <= strength));
    checked++;
  }
}
console.log(JSON.stringify({areaEffects, harmEffects, defenses, assigned,
  fixedBudget, areaStrength, allocations, zeroDefenseCrowds,
  afterGlobalOne, afterLocalOne, checked,
  status: 'Candidate comparison only. Per-occupant strength requires an explicit area-application rule; current conservation does not grant it automatically.',
}, null, 2));
