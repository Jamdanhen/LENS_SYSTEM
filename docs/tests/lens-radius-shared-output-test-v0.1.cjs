const assert = require('node:assert/strict');
const unitArea = Math.sqrt(3) / 2;
const initialArea = Math.PI * 1.5 ** 2 / unitArea;
const rating = raw => Math.floor(raw * 0.98);
const effects = (final, roll) => roll <= final ? 1 + Math.floor((final - roll) / 10) : 0;

// All available output in this fixture is assigned to the same area function.
// One Effect supplies the ordinary footprint; additional Effects expand it.
function areaOutput(available) {
  assert.ok(Number.isInteger(available) && available >= 0);
  if (available < 2) return {available, baseline: available,
    areaSpent: 0, radius: null, coverage: available};
  const areaSpent = available - 1;
  const radius = 1.5 * (1 + 0.2 * (areaSpent - 1));
  return {available, baseline: 1, areaSpent, radius,
    coverage: Math.PI * radius ** 2 / unitArea};
}
function shared(contributions, cancellation = 0) {
  const generated = contributions.reduce((a, b) => a + b, 0);
  const cancelled = Math.min(generated, cancellation);
  const available = generated - cancelled;
  assert.equal(generated, cancelled + available);
  const output = areaOutput(available);
  assert.equal(available, output.baseline + output.areaSpent);
  return {contributions, generated, cancelled, ...output};
}

const rows = [
  {name: 'One contributor', raw: [80], rolls: [40]},
  {name: 'Shared result, moderate second success', raw: [80, 80], rolls: [40, 60]},
  {name: 'Shared result, equal successful rolls', raw: [80, 80], rolls: [40, 40]},
  {name: 'Second contributor fails', raw: [80, 80], rolls: [40, 80]},
  {name: 'Both contribute marginal successes', raw: [80, 80], rolls: [75, 75]},
  {name: 'Both fail', raw: [80, 80], rolls: [80, 90]},
  {name: 'Higher output stress fixture', raw: [160, 160], rolls: [40, 40]},
].map(({name, raw, rolls}) => {
  const ratings = raw.map(rating);
  const contributions = ratings.map((value, i) => effects(value, rolls[i]));
  return {name, raw, ratings, rolls, actions: raw.length,
    independentFootprints: contributions.map(areaOutput), ...shared(contributions)};
});

assert.equal(rows[0].generated, 4);
assert.equal(rows[1].generated, 6);
assert.equal(rows[1].areaSpent, 5);
assert.ok(Math.abs(rows[1].coverage - 26.445194730534897) < 1e-9);
assert.equal(rows[3].coverage, rows[0].coverage);
assert.equal(rows[4].generated, 2);
assert.ok(Math.abs(rows[4].coverage - initialArea) < 1e-9);
assert.equal(rows[5].coverage, 0);
const opposed = shared([4, 2], 2);
assert.equal(opposed.coverage, rows[0].coverage);
assert.equal(shared([4, 2], 6).coverage, 0);

const complementary = {areaEffects: 4, harmEffects: 2,
  areaOutput: areaOutput(4), harmOutput: 2};
assert.equal(complementary.areaOutput.coverage, rows[0].coverage);
assert.ok(complementary.areaOutput.coverage < rows[1].coverage);

let states = 0;
for (let a = 0; a <= 30; a++) for (let b = 0; b <= 30; b++) {
  for (let cancellation = 0; cancellation <= 60; cancellation++) {
    const result = shared([a, b], cancellation);
    assert.equal(result.coverage, shared([b, a], cancellation).coverage);
    assert.equal(shared([a, 0]).coverage, areaOutput(a).coverage);
    assert.ok(result.coverage <= shared([a, b]).coverage);
    assert.ok(shared([a, b]).coverage >= areaOutput(a).coverage);
    states++;
  }
}

console.log(JSON.stringify({
  assumptions: 'Candidate radius conversion, not adopted. Same feasible shared area and complete D1 challenge; each participant commits an action. Fixed ordinary rolls, not probability estimates. Compatible area output only; no automatic harm per target.',
  rows, opposed, complementary, checkedStates: states,
}, null, 2));
