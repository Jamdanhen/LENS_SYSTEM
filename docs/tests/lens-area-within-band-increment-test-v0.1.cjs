const assert = require('node:assert/strict');

const anchors = [25, 50, 100, 200, 400];
function band(area) {
  const index = anchors.findIndex(limit => area <= limit);
  assert.ok(area > 0 && index >= 0);
  return { difficulty: index + 1, limit: anchors[index] };
}
const rating = (raw, area) => Math.floor(raw * 0.98 * 0.6 ** (band(area).difficulty - 1));
const successProbability = final => Math.min(99, Math.max(1, final)) / 100;
function continuationCDF(threshold) {
  let mass = 1;
  let total = 0;
  let repeats = 0;
  while (mass > 0) {
    if (1 - 99 * repeats <= threshold) return total + mass;
    const terminalCount = Math.max(0, Math.min(99, Math.floor(threshold + 99 + 99 * repeats) - 1));
    total += mass * terminalCount / 100;
    mass /= 100;
    repeats++;
  }
  return total;
}
function probabilityOfExtra(final, extra) {
  if (extra === 0) return successProbability(final);
  const threshold = final - extra * 10;
  return Math.max(0, Math.min(98, Math.floor(threshold) - 1)) / 100
    + 0.01 * continuationCDF(threshold);
}
const effects = (final, roll) => roll <= final ? 1 + Math.floor((final - roll) / 10) : 0;
const expand = (start, extra, increment) => Math.min(band(start).limit, start + extra * increment);

const rows = [80, 160, 320].flatMap(raw => [[30, 50], [60, 100], [140, 200]].map(([start, target]) => {
  const final = rating(raw, start);
  assert.equal(final, rating(raw, target));
  const plus5Cost = Math.ceil((target - start) / 5);
  const plus10Cost = Math.ceil((target - start) / 10);
  const direct = successProbability(final);
  const plus5 = probabilityOfExtra(final, plus5Cost);
  const plus10 = probabilityOfExtra(final, plus10Cost);
  assert.ok(direct >= plus10 && plus10 >= plus5);
  return { raw, start, target, difficulty: band(start).difficulty, final, direct, plus5Cost, plus5, plus10Cost, plus10 };
}));
const middle = rows.find(r => r.raw === 160 && r.start === 30);
assert.equal(middle.direct, 0.94);
assert.equal(middle.plus5, 0.54);
assert.equal(middle.plus10, 0.74);

const fixedFinal = rating(160, 30);
const generated = effects(fixedFinal, 40);
const fixed = {
  raw: 160, roll: 40, final: fixedFinal, generated,
  direct50: { area: 50, additionalRemaining: generated - 1 },
  start30Plus5: { area: expand(30, 4, 5), additionalRemaining: generated - 1 - 4 },
  start30Plus10: { area: expand(30, 2, 10), additionalRemaining: generated - 1 - 2 },
};
assert.equal(generated, 6);
assert.equal(fixed.direct50.additionalRemaining, 5);
assert.equal(fixed.start30Plus5.additionalRemaining, 1);
assert.equal(fixed.start30Plus10.additionalRemaining, 3);

let checked = 0;
for (const row of rows) {
  for (let roll = 2; roll <= 99; roll++) {
    const output = effects(row.final, roll);
    for (const increment of [5, 10]) {
      const cost = Math.ceil((row.target - row.start) / increment);
      const qualifies = output >= 1 + cost;
      if (qualifies) {
        assert.equal(expand(row.start, cost, increment), row.target);
        assert.ok(output > 0);
        assert.ok(output - 1 - cost <= output - 1);
      }
      checked++;
    }
  }
}

// Test the proposed band boundary, including a partial final increment.
assert.equal(expand(45, 1, 5), 50);
assert.equal(expand(45, 1, 10), 50);
assert.equal(expand(50, 1000, 10), 50);
assert.equal(expand(30, 1000, 10), 50);
assert.equal(band(26).difficulty, 2);
assert.equal(band(50).difficulty, 2);
assert.equal(band(51).difficulty, 3);

console.log(JSON.stringify({
  status: 'All assertions passed; within-band expansion and its limit remain unadopted candidates.',
  scope: 'Same permitted desired coverage, same circumstances and Difficulty within each band. No opposition, paid spending, dynamic retargeting, or new magnitude permissions. Exact threshold probabilities include repeated natural 01.',
  checkedOrdinaryComparisons: checked,
  rows, fixed,
  result: 'Directly declaring the desired coverage in the same band is never less reliable and never consumes more output than purchasing it through surplus. The band limit prevents cross-band bypass but leaves optional area expansion redundant for this objective.',
}, null, 2));
