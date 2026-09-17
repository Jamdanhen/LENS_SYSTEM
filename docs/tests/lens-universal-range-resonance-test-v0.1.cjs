const assert = require('node:assert/strict');

const layouts = { A: [20, 100, 500], B: [50, 200, 1000] };
const old = [10, 20, 50, 100, 200, 500, 1000, 2000, 5000, 10000];
const difficulty = rank => 0.98 * 0.6 ** (rank - 1);
function band(distance, limits) {
  assert(distance >= 0);
  const index = limits.findIndex(limit => distance <= limit);
  return index < 0 ? null : index + 1;
}
function rate(raw, rank, resonance = 0, dissonance = 0, actions = 1) {
  return rank === null ? null : Math.floor(raw * difficulty(rank)
    * Math.max(0, 1 + resonance - dissonance) / actions);
}
function effects(rating, roll) {
  assert(roll >= 2 && roll <= 99);
  return roll <= rating ? 1 + Math.floor((rating - roll) / 10) : 0;
}
const profiles = {
  neutral: [0, 0, 0],
  closeSupport: [0.2, 0, 0],
  distanceSupport: [0, 0.3, 0.6],
};
const layoutComparison = [10, 20, 21, 40, 50, 51, 100, 101, 200, 201, 500, 501, 1000]
  .map(meters => ({ meters,
    oldD: band(meters, old), A: band(meters, layouts.A), B: band(meters, layouts.B),
    oldRating: rate(100, band(meters, old)),
    ARating: rate(100, band(meters, layouts.A)),
    BRating: rate(100, band(meters, layouts.B)),
  }));
const matrix = [20, 80, 100, 180.280512, 320].map(raw => ({ raw,
  profiles: Object.fromEntries(Object.entries(profiles).map(([name, bonuses]) =>
    [name, bonuses.map((bonus, index) => rate(raw, index + 1, bonus))])),
}));
const resonanceSweep = [0, 0.1, 0.2, 0.3, 0.5, 0.6, 0.7, 1].map(resonance => ({
  resonance, ratingsAtRaw100: [1, 2, 3].map(rank => rate(100, rank, resonance)),
}));
const contextChecks = [0, 0.3, 0.6, 1, 1.6].map(dissonance => ({ dissonance,
  ratings: profiles.distanceSupport.map((r, index) => rate(100, index + 1, r, dissonance)),
}));
const output = [20, 80, 100, 180.280512, 320].map(raw => ({ raw,
  neutralLong: rate(raw, 3), supportedLong: rate(raw, 3, 0.6),
  ordinaryRoll: 30,
  neutralEffects: effects(rate(raw, 3), 30),
  supportedEffects: effects(rate(raw, 3, 0.6), 30),
}));
const supportPooling = {
  longPlusDistinctPrep: rate(100, 3, 0.6 + 0.2),
  longPlusPrepAgainstDissonance: rate(100, 3, 0.6 + 0.2, 0.3),
  longTwoActions: rate(100, 3, 0.6, 0, 2),
};
const existingEquipmentSensitivity = [1, 1.2, 1.25, 1.3].map(equipment => ({
  equipment, neutralLong: rate(100 * equipment, 3),
  distinctSupportedLong: rate(100 * equipment, 3, 0.6),
}));
for (const limits of Object.values(layouts)) {
  limits.forEach((limit, index) => {
    assert.equal(band(limit, limits), index + 1);
    assert.equal(band(limit + 0.01, limits), index === 2 ? null : index + 2);
  });
}
assert.deepEqual(matrix[2].profiles.neutral, [98, 58, 35]);
assert.deepEqual(matrix[2].profiles.closeSupport, [117, 58, 35]);
assert.deepEqual(matrix[2].profiles.distanceSupport, [98, 76, 56]);
assert.deepEqual(contextChecks[2].ratings, [39, 41, 35]);
assert.deepEqual(contextChecks[4].ratings, [0, 0, 0]);
assert.deepEqual(supportPooling, { longPlusDistinctPrep: 63,
  longPlusPrepAgainstDissonance: 52, longTwoActions: 28 });
for (const row of matrix) {
  for (const ratings of Object.values(row.profiles)) {
    assert(ratings[0] >= ratings[1] && ratings[1] >= ratings[2]);
  }
}
assert.equal(layoutComparison.find(row => row.meters === 500).ARating, 35);
assert.equal(layoutComparison.find(row => row.meters === 501).ARating, null);
console.log(JSON.stringify({ status: 'All assertions passed; no range or property adopted.',
  assumptions: 'D1/D2/D3 mapping is a candidate. Raw ratings exclude the tested range benefit; main comparison uses neutral x1 equipment. Real reach and Access remain necessary.',
  layouts, profiles, layoutComparison, matrix, resonanceSweep, contextChecks,
  output, supportPooling, existingEquipmentSensitivity }, null, 2));
