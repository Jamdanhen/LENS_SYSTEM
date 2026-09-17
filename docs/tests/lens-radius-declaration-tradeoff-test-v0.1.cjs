const assert = require('node:assert/strict');

// Fixture retained from the radius check; coverage is continuous, not hex count.
const initialArea = Math.PI * 1.5 ** 2 / (Math.sqrt(3) / 2);
const coverage = spent => initialArea * (1 + 0.2 * (spent - 1)) ** 2;
const needed = target => {
  let spent = 1;
  while (coverage(spent) < target) spent++;
  return spent;
};
const rating = (raw, difficulty) => Math.floor(raw * 0.98 * 0.6 ** (difficulty - 1));
const effects = (final, roll) => roll <= final ? 1 + Math.floor((final - roll) / 10) : 0;

// Conditional distribution of the completed natural-01 result, including repeats.
function continuationCDF(threshold) {
  let mass = 1, total = 0, repeats = 0;
  while (mass > 0) {
    if (1 - 99 * repeats <= threshold) return total + mass;
    const count = Math.max(0, Math.min(99, Math.floor(threshold + 99 + 99 * repeats) - 1));
    total += mass * count / 100;
    mass /= 100;
    repeats++;
  }
  return total;
}
function probability(final, additionalEffects) {
  const threshold = final - 10 * additionalEffects;
  const ordinary = Math.max(0, Math.min(98, threshold - 1)) / 100;
  return ordinary + 0.01 * (additionalEffects === 0 ? 1 : continuationCDF(threshold));
}

assert.equal(needed(25), 5);
assert.equal(needed(50), 9);
assert.equal(needed(100), 14);
assert.ok(Math.abs(coverage(5) - 26.4451947303) < 1e-8);
assert.equal(probability(156, 9), 0.66);
assert.equal(probability(156, 14), 0.16);

const rows = [80, 160, 320].flatMap(raw => [50, 100].map(target => {
  const difficulty = target === 50 ? 2 : 3;
  const small = rating(raw, 1), direct = rating(raw, difficulty);
  const spend = needed(target);
  return {raw, target, smallRating: small, directRating: direct,
    expansionEffects: spend, resultingCoverage: coverage(spend),
    expansionProbability: probability(small, spend),
    directProbability: probability(direct, 0),
    directWithOneAreaEffectProbability: probability(direct, 1),
    atRoll40: {
      smallGenerated: effects(small, 40),
      smallRemainingIfReached: effects(small, 40) >= 1 + spend
        ? effects(small, 40) - spend : null,
      directGenerated: effects(direct, 40),
      directRemainingWithOneAreaEffect: effects(direct, 40) >= 2
        ? effects(direct, 40) - 1 : null,
    }};
}));
for (const row of rows) {
  for (let roll = 2; roll <= 99; roll++) {
    assert.equal(effects(row.smallRating, roll) >= row.expansionEffects + 1,
      roll <= row.smallRating - 10 * row.expansionEffects);
  }
}
console.log(JSON.stringify({initialArea, slightOverage: coverage(5),
  assumptions: 'Permitted attempts, no opposition. D1 small expansion versus direct D2=50 or D3=100. Direct declaration tested both with and without one additional area Effect; neither larger-area entry rule is adopted here.',
  rows}, null, 2));
