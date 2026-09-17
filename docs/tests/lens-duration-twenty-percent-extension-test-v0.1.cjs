'use strict';

const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const { effectDistribution } = require('./lens-character-based-encounter-pacing-v0.1.cjs');

function rating(decimal, difficulty) {
  const [whole, fraction = ''] = decimal.split('.');
  return Number(BigInt(whole + fraction) * 98n * 3n ** BigInt(difficulty - 1) /
    (10n ** BigInt(fraction.length) * 100n * 5n ** BigInt(difficulty - 1)));
}
// Time is expressed in fifths of a Profile/Lens increment to avoid boundary rounding.
function durationBand(fifths) {
  assert(fifths > 0);
  let band = 1, upper = 5;
  while (fifths > upper) { band++; upper *= 10; }
  return band;
}
const duration = (initialFifths, spent) => initialFifths * (5 + spent) / 5;
const needed = (initialFifths, targetFifths) => Math.max(0, Math.ceil(5 * (targetFifths - initialFifths) / initialFifths));
const effects = (final, roll) => roll <= final ? 1 + Math.floor((final - roll) / 10) : 0;

// Natural-01 continuation CDF, retaining repeated-01 tails until IEEE underflow.
function continuationCDF(threshold) {
  let mass = 1, total = 0, repeats = 0;
  while (mass > 0) {
    if (1 - 99 * repeats <= threshold) return total + mass;
    const count = Math.max(0, Math.min(99, Math.floor(threshold + 98 + 99 * repeats)));
    total += mass * count / 100;
    mass /= 100;
    repeats++;
  }
  return total;
}
function probability(final, spent) {
  const threshold = final - 10 * spent;
  return Math.max(0, Math.min(98, threshold - 1)) / 100 +
    0.01 * (spent === 0 ? 1 : continuationCDF(threshold));
}
const distributions = new Map();
function truncatedCheck(final, spent) {
  if (!distributions.has(final)) distributions.set(final, effectDistribution(final));
  let p = 0;
  for (const [count, weight] of distributions.get(final)) if (count >= spent + 1) p += weight;
  return p;
}
assert.deepEqual([1, 5, 20, 45, 495].map(k => duration(5, k) / 5), [1.2, 2, 5, 10, 100]);
assert.deepEqual([6, 10, 25, 50, 500].map(target => needed(5, target)), [1, 5, 20, 45, 495]);
assert.deepEqual([5, 6, 25, 50, 51, 500].map(durationBand), [1, 2, 2, 2, 3, 3]);
assert.throws(() => durationBand(0));
assert.equal(probability(0, 0), 0.01);
assert.equal(continuationCDF(-98), 0.01);

const rows = [];
for (const raw of ['22.27758', '50.625', '75.9375', '302.33088', '320', '640']) {
  for (const sharedBands of [0, 3, 4]) for (const initialFifths of [5, 25, 50, 250, 500]) {
    for (const targetFifths of [initialFifths * 6 / 5, initialFifths * 2, initialFifths * 5, initialFifths * 10, initialFifths * 100]) {
      const spent = needed(initialFifths, targetFifths);
      const smallDifficulty = sharedBands + durationBand(initialFifths);
      const directDifficulty = sharedBands + durationBand(targetFifths);
      assert(directDifficulty <= 10);
      const smallRating = rating(raw, smallDifficulty), directRating = rating(raw, directDifficulty);
      const expansionProbability = probability(smallRating, spent);
      assert(Math.abs(expansionProbability - truncatedCheck(smallRating, spent)) < 1.1e-12);
      assert(duration(initialFifths, spent) >= targetFifths);
      assert(duration(initialFifths, spent - 1) < targetFifths);
      let directAtLeastAsGoodOrdinary = true;
      for (let roll = 2; roll <= 99; roll++) {
        const small = effects(smallRating, roll), direct = effects(directRating, roll);
        assert.equal(small >= spent + 1, roll <= smallRating - 10 * spent);
        if (small >= spent + 1 && direct < small - spent) directAtLeastAsGoodOrdinary = false;
      }
      const small40 = effects(smallRating, 40), direct40 = effects(directRating, 40);
      rows.push({ raw, sharedBands, initial: initialFifths / 5, target: targetFifths / 5,
        spent, smallDifficulty, directDifficulty, smallRating, directRating,
        expansionProbability, directProbability: probability(directRating, 0),
        expansionRemainingAt40: small40 >= spent + 1 ? small40 - spent : null,
        directRemainingAt40: direct40 > 0 ? direct40 : null, directAtLeastAsGoodOrdinary });
    }
  }
}
assert.equal(rows.length, 450);
const fullBands = rows.filter(r => [1, 10, 100].includes(r.initial) && r.target >= 10 * r.initial);
for (const row of fullBands) {
  assert(row.directProbability + 1e-12 >= row.expansionProbability);
  assert(row.directAtLeastAsGoodOrdinary);
}
const pick = (raw, sharedBands, target) => rows.find(r => r.raw === raw && r.sharedBands === sharedBands && r.initial === 1 && r.target === target);
assert.equal(pick('640', 0, 10).expansionRemainingAt40, 14);
assert.equal(pick('640', 0, 10).directRemainingAt40, 34);
assert(Math.abs(pick('75.9375', 0, 2).expansionProbability - .24) < 1e-12);
assert(Math.abs(pick('75.9375', 0, 2).directProbability - .44) < 1e-12);

const results = {
  status: 'Test only; no conversion, duration-entry procedure, boundary rounding, unit, or ceiling adopted.',
  controls: 'Independent permitted durations only. Success establishes declared duration for this comparison, no extra entry expenditure. Duration grows by 20% of original declared time per additional Effect; keep baseline Effect. D1/D2/D3 reference 1/10/100 increments. Next-covering-band classification for intermediate durations is a test assumption. Shared challenge bands 0/3/4 identical on both routes. Matched Scale, full Function, no equipment/context/opposition/spending. Axis0 has Access. No automatic switch from maintained to independent persistence.',
  rows,
};
fs.writeFileSync(path.join(__dirname, 'lens-duration-twenty-percent-extension-test-v0.1.results.json'), JSON.stringify(results, null, 2) + '\n');
for (const sharedBands of [0, 3, 4]) {
  console.log(`Shared bands ${sharedBands}, start at 1 time increment`);
  console.table(rows.filter(r => r.sharedBands === sharedBands && r.initial === 1 && ['75.9375', '302.33088', '640'].includes(r.raw)).map(r => ({
    raw: r.raw, target: r.target, spent: r.spent,
    extensionPct: +(r.expansionProbability * 100).toPrecision(6),
    directPct: +(r.directProbability * 100).toPrecision(6),
    extensionLeft40: r.expansionRemainingAt40, directLeft40: r.directRemainingAt40,
  })));
}
console.log('PASS: 450 comparisons, exact Final Ratings, fixed-reference growth, ordinary Effect accounting, independently checked 01 tails, and full-band direct-declaration comparisons.');
