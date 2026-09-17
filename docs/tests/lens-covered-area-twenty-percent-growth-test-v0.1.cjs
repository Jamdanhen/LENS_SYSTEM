'use strict';

const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const { effectDistribution } = require('./lens-character-based-encounter-pacing-v0.1.cjs');

function rating(decimal, difficulty) {
  const [whole, fraction = ''] = decimal.split('.');
  const numerator = BigInt(whole + fraction) * 98n * 3n ** BigInt(difficulty - 1);
  const denominator = 10n ** BigInt(fraction.length) * 100n * 5n ** BigInt(difficulty - 1);
  return Number(numerator / denominator);
}
const areaBand = area => {
  let band = 1, upper = 25;
  while (area > upper) { band++; upper *= 2; }
  return band;
};
const coverage = (initial, spent) => initial * (5 + spent) / 5;
const needed = (initial, target) => Math.max(0, Math.ceil(5 * (target - initial) / initial));
const effects = (final, roll) => roll <= final ? 1 + Math.floor((final - roll) / 10) : 0;
const cache = new Map();
const distribution = final => {
  if (!cache.has(final)) cache.set(final, effectDistribution(final));
  return cache.get(final);
};
function outcome(final, spent) {
  let probability = 0, remainingWeighted = 0;
  for (const [count, weight] of distribution(final)) {
    if (count >= spent + 1) {
      probability += weight;
      remainingWeighted += weight * (count - spent);
    }
  }
  return { probability, expectedRemainingAtTarget: remainingWeighted,
    remainingAtRoll40: effects(final, 40) >= spent + 1 ? effects(final, 40) - spent : null };
}
const fixtures = [
  { name: 'Ordinary ratings 3, Axis 3', raw: '22.27758' },
  { name: 'Ordinary ratings 5, Axis 0', raw: '50.625' },
  { name: 'Ordinary ratings 5, Axis 5', raw: '75.9375' },
  { name: 'Ordinary ratings 8, Axis 8', raw: '302.33088' },
  { name: 'Ordinary ratings 10, Axis 0', raw: '320' },
  { name: 'Ordinary ratings 10, Axis 10', raw: '640' },
];
assert.deepEqual([0, 1, 2, 3, 4, 5].map(k => coverage(25, k)), [25, 30, 35, 40, 45, 50]);
assert.deepEqual([50, 100, 200, 400].map(target => needed(25, target)), [5, 15, 35, 75]);
assert.equal(rating('640', 1), 627);

const rows = [];
for (const fixture of fixtures) for (const sharedBands of [0, 3, 4]) {
  for (const initial of [25, 50, 100]) for (const target of [initial * 6 / 5, initial * 2, initial * 4, initial * 8, initial * 16]) {
    const spent = needed(initial, target);
    const smallDifficulty = sharedBands + areaBand(initial);
    const directDifficulty = sharedBands + areaBand(target);
    if (directDifficulty > 10) continue;
    const smallRating = rating(fixture.raw, smallDifficulty);
    const directRating = rating(fixture.raw, directDifficulty);
    assert(coverage(initial, spent) >= target);
    assert(coverage(initial, spent - 1) < target);
    for (let roll = 2; roll <= 99; roll++) {
      assert.equal(effects(smallRating, roll) >= spent + 1, roll <= smallRating - spent * 10);
      if (effects(smallRating, roll) >= spent + 1) assert(effects(smallRating, roll) - spent >= 1);
    }
    rows.push({ fixture: fixture.name, raw: fixture.raw, sharedBands, initial, target, spent,
      smallDifficulty, directDifficulty, smallRating, directRating,
      expansion: outcome(smallRating, spent), direct: outcome(directRating, 0) });
  }
}
const pick = (raw, sharedBands, target, initial = 25) => rows.find(r => r.raw === raw && r.sharedBands === sharedBands && r.target === target && r.initial === initial);
assert.equal(pick('640', 0, 50).expansion.remainingAtRoll40, 54);
assert.equal(pick('640', 0, 50).direct.remainingAtRoll40, 34);
assert.equal(pick('640', 0, 200).expansion.remainingAtRoll40, 24);
assert.equal(pick('640', 0, 400).expansion.remainingAtRoll40, null);
assert(pick('75.9375', 0, 50).direct.probability > pick('75.9375', 0, 50).expansion.probability);
assert(pick('302.33088', 3, 50).direct.probability > pick('302.33088', 3, 50).expansion.probability);
assert.equal(rows.length, 264);

const result = {
  status: 'Experimental conversion only; no growth ceiling or area thresholds adopted.',
  assumptions: 'Covered area A*(1+0.2*k), additional Effects only; success already establishes declaration. Candidate area bands 25/50/100 doubling. Shared bands 0, 3 (distance), or 4 (distance plus independent duration). Final-only floor. Open permission, matched Scale, full Function, no context/equipment/opposition/spending. Failed expansion leaves smaller attained coverage; target-only metrics do not erase it.',
  specialResults: 'Existing effectDistribution includes 01 continuation through five terminal depths; omitted probability 1e-12. 00 always has zero successful Effects. No probability floor applied to meeting expanded target.',
  rows,
};
fs.writeFileSync(path.join(__dirname, 'lens-covered-area-twenty-percent-growth-test-v0.1.results.json'), JSON.stringify(result, null, 2) + '\n');
for (const shared of [0, 3, 4]) {
  console.log(`Shared Difficulty bands: ${shared}; starting covered area 25`);
  console.table(rows.filter(r => r.sharedBands === shared && r.initial === 25 && ['75.9375', '302.33088', '640'].includes(r.raw)).map(r => ({
    raw: r.raw, target: r.target, cost: r.spent,
    ratings: `${r.smallRating}/${r.directRating}`,
    expandPct: +(100 * r.expansion.probability).toFixed(6), directPct: +(100 * r.direct.probability).toFixed(6),
    expandLeft40: r.expansion.remainingAtRoll40, directLeft40: r.direct.remainingAtRoll40,
  })));
}
console.log('PASS: 264 comparisons within D1-D10, final-only exact ratings, linear footprint growth, Effect conservation, ordinary-roll thresholds, and high/low crossover checks.');
