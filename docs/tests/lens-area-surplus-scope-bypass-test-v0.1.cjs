const assert = require('node:assert/strict');

const anchors = [25, 50, 100, 200, 400];
const difficulty = area => anchors.indexOf(area) + 1;
const rating = (raw, area) => Math.floor(raw * 0.98 * 0.6 ** (difficulty(area) - 1));
const successProbability = final => Math.min(99, Math.max(1, final)) / 100;

// Exact conditional CDF for completed natural-01 rolls, including repeated 01.
// After n repeated 01s, terminal c in 2..100 gives c - 99 - 99*n.
function continuationCDF(threshold) {
  let mass = 1;
  let total = 0;
  let n = 0;
  while (mass > 0) {
    if (1 - 99 * n <= threshold) return total + mass;
    const terminalCount = Math.max(0, Math.min(99, Math.floor(threshold + 99 + 99 * n) - 1));
    total += mass * terminalCount / 100;
    mass /= 100;
    n++;
  }
  return total;
}
function probabilityOfExtra(final, extra) {
  if (extra === 0) return successProbability(final);
  const threshold = final - 10 * extra;
  const ordinaryCount = Math.max(0, Math.min(98, Math.floor(threshold) - 1));
  return ordinaryCount / 100 + 0.01 * continuationCDF(threshold);
}
const extraNeeded = (start, target, model) => model === 'plus10'
  ? Math.ceil((target - start) / 10)
  : Math.ceil(Math.log2(target / start));

assert.equal(continuationCDF(1), 1);
assert.ok(Math.abs(continuationCDF(-2) - 0.97) < 1e-12);
assert.ok(Math.abs(continuationCDF(-99) - 0.0099) < 1e-12);
assert.equal(probabilityOfExtra(0, 0), 0.01);
assert.ok(Math.abs(probabilityOfExtra(78, 8) - 0.0097) < 1e-12);

const rows = [80, 160, 320].flatMap(raw => anchors.slice(1).map(target => {
  const options = anchors.filter(start => start <= target).map(start => ({
    start, final: rating(raw, start),
    plus10ExtraRequired: extraNeeded(start, target, 'plus10'),
    plus10: probabilityOfExtra(rating(raw, start), extraNeeded(start, target, 'plus10')),
    doublingExtraRequired: extraNeeded(start, target, 'doubling'),
    doubling: probabilityOfExtra(rating(raw, start), extraNeeded(start, target, 'doubling')),
  }));
  const best = key => options.reduce((a, b) => b[key] > a[key] ? b : a);
  return {
    raw, target, directRating: rating(raw, target), direct: successProbability(rating(raw, target)),
    from25: options[0], bestPlus10: best('plus10'), bestDoubling: best('doubling'), options,
  };
}));
const find = (raw, target) => rows.find(r => r.raw === raw && r.target === target);
assert.equal(find(160, 100).from25.plus10, 0.76);
assert.equal(find(160, 100).direct, 0.56);
assert.equal(find(320, 200).from25.plus10, 0.99);
assert.equal(find(320, 200).direct, 0.67);
assert.equal(find(80, 100).from25.doubling, 0.58);
assert.equal(find(80, 100).direct, 0.28);
assert.ok(find(80, 100).from25.plus10 < find(80, 100).direct);

const effects = (final, roll) => roll <= final ? 1 + Math.floor((final - roll) / 10) : 0;
const fixed = [
  { raw: 160, target: 100, roll: 40 },
  { raw: 320, target: 200, roll: 50 },
].map(({ raw, target, roll }) => {
  const directEffects = effects(rating(raw, target), roll);
  const smallEffects = effects(rating(raw, 25), roll);
  const spentOnExpansion = extraNeeded(25, target, 'plus10');
  return {
    raw, target, roll, directEffects, smallEffects, spentOnExpansion,
    reachedArea: 25 + 10 * spentOnExpansion,
    smallRemainingExtra: smallEffects - 1 - spentOnExpansion,
    directRemainingExtra: Math.max(0, directEffects - 1),
  };
});
assert.deepEqual(fixed.map(r => [r.smallRemainingExtra, r.directRemainingExtra]), [[3, 1], [8, 1]]);

// For ordinary outcomes, the threshold needed to reach the target is the
// small Rating minus ten times the expansion cost. Check all 98 ordinary rolls.
let checked = 0;
for (const row of rows) {
  for (const option of row.options) {
    for (let roll = 2; roll <= 99; roll++) {
      const generated = effects(option.final, roll);
      for (const model of ['plus10', 'doubling']) {
        const needed = extraNeeded(option.start, row.target, model);
        const qualifies = generated >= 1 + needed;
        assert.equal(qualifies, roll <= option.final - 10 * needed);
        checked++;
      }
    }
  }
}

console.log(JSON.stringify({
  status: 'All assertions passed; both surplus conversions remain unadopted.',
  scope: 'Permitted single-contribution attempts, no opposition or paid spending. Exact success/output-threshold probabilities include repeated natural 01; 00 cannot supply successful Effects.',
  assumptions: '25/50/100/200/400 areas mapped to D1-D5 for comparison only. Baseline success pays the declared area; only additional Levels expand it.',
  checkedOrdinaryCases: checked,
  rows: rows.map(({ options, ...rest }) => rest), fixed,
}, null, 2));
