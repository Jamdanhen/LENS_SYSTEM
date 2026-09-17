const assert = require('node:assert/strict');

const anchors = Array.from({ length: 10 }, (_, i) => 25 * 2 ** i);
const rates = [10, 20, 25, 50];
function difficulty(area) {
  const index = anchors.findIndex(a => area <= a);
  assert.ok(area > 0 && index >= 0);
  return index + 1;
}
const rating = (raw, area) => Math.floor(raw * 0.98 * 0.6 ** (difficulty(area) - 1));
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
  const threshold = final - 10 * extra;
  return Math.max(0, Math.min(98, Math.floor(threshold) - 1)) / 100
    + 0.01 * continuationCDF(threshold);
}
// Every increase is based on the ORIGINAL declared area, not the enlarged area.
// Whole-unit floor is a test display assumption, applied once to total coverage.
const coverage = (start, extra, percent) => Math.floor(start * (100 + percent * extra) / 100);
const extraNeeded = (start, target, percent) => Math.max(0, Math.ceil((target - start) * 100 / (start * percent)));
const effects = (final, roll) => roll <= final ? 1 + Math.floor((final - roll) / 10) : 0;

assert.equal(coverage(25, 5, 20), 50);
assert.equal(coverage(25, 10, 20), 75);
assert.deepEqual([0, 1, 2, 3, 4].map(n => coverage(25, n, 10)), [25, 27, 30, 32, 35]);

const probabilityRows = [80, 160, 320, 640].flatMap(raw => [50, 100, 200, 400].map(target => ({
  raw, start: 25, target, direct: successProbability(rating(raw, target)),
  growth: rates.map(percent => ({
    percent,
    extraRequired: extraNeeded(25, target, percent),
    chance: probabilityOfExtra(rating(raw, 25), extraNeeded(25, target, percent)),
  })),
})));

const scans = rates.map(percent => {
  let checked = 0;
  let positiveGaps = 0;
  let worst = { gap: 0 };
  let worstMultiBand = { gap: 0 };
  for (let raw = 1; raw <= 640; raw++) {
    for (let i = 0; i < anchors.length - 1; i++) {
      for (let j = i + 1; j < anchors.length; j++) {
        const start = anchors[i];
        const target = anchors[j];
        const needed = extraNeeded(start, target, percent);
        const achieved = coverage(start, needed, percent);
        assert.ok(achieved >= target);
        assert.ok(needed === 0 || coverage(start, needed - 1, percent) < target);
        const grown = probabilityOfExtra(rating(raw, start), needed);
        const direct = successProbability(rating(raw, target));
        const gap = grown - direct;
        const row = { raw, start, target, bands: j - i, needed, grown, direct, gap };
        if (gap > 1e-12) positiveGaps++;
        if (gap > worst.gap + 1e-12) worst = row;
        if (j - i >= 2 && gap > worstMultiBand.gap + 1e-12) worstMultiBand = row;
        checked++;
      }
    }
  }
  return { percent, checked, positiveGaps, worst, worstMultiBand };
});
assert.equal(scans[0].positiveGaps, 0);
assert.ok(scans[1].worst.gap > 0.09);
assert.ok(scans[2].worst.gap > scans[1].worst.gap);
assert.ok(scans[3].worst.gap > scans[2].worst.gap);

const boundary = rates.map(percent => ({
  percent, raw: 80, start: 25, target: 26,
  direct: successProbability(rating(80, 26)),
  required: extraNeeded(25, 26, percent),
  grown: probabilityOfExtra(rating(80, 25), extraNeeded(25, 26, percent)),
}));
assert.ok(boundary.every(r => r.grown === 0.68 && r.direct === 0.47));

const fixedRolls = [
  { raw: 160, roll: 40 },
  { raw: 320, roll: 50 },
].map(({ raw, roll }) => ({
  raw, roll,
  declarations: [25, 50, 100, 200].map(start => {
    const output = effects(rating(raw, start), roll);
    return {
      start, final: rating(raw, start), effects: output,
      coverage: rates.map(percent => ({ percent, area: output ? coverage(start, output - 1, percent) : 0 })),
    };
  }),
}));
const raw160 = fixedRolls[0];
assert.equal(raw160.declarations[0].coverage.find(x => x.percent === 20).area, 80);
assert.equal(raw160.declarations[2].coverage.find(x => x.percent === 20).area, 120);

const practicalTable = [25, 50, 100, 200].map(start => ({
  start,
  values: rates.filter(p => p !== 50).map(percent => ({
    percent, increment: start * percent / 100,
    atExtra0to5: [0, 1, 2, 3, 4, 5].map(n => coverage(start, n, percent)),
  })),
}));

console.log(JSON.stringify({
  status: 'All assertions passed; proportional area growth retained as a candidate, not adopted.',
  assumptions: 'Declared area sets Difficulty and baseline success; additional Levels add a constant fraction of original declared area. No compounding or band cap. Integer floor only on final coverage for this test.',
  probabilityScope: 'Permitted independent single-contribution attempts, no paid spending or opposition. Repeated natural 01 included exactly; natural 00 fails. Raw 640 is a higher-output stress probe, not an adopted ordinary-character budget.',
  scans, boundary, probabilityRows, fixedRolls, practicalTable,
}, null, 2));
