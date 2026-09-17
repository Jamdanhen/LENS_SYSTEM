const assert = require('node:assert/strict');

const models = {
  scaleNumber: Array.from({ length: 10 }, (_, i) => 10 * 1.6 ** i),
  doubling: Array.from({ length: 10 }, (_, i) => 10 * 2 ** i),
  rounded: [10, 20, 50, 100, 200, 500, 1000, 2000, 5000, 10000],
};
const inputs = {
  guideBroadFirearm: 58.9152,
  guideOtherHandgun: 100.15584,
  guideSignature: 180.280512,
  developmentCeilingControl: 320,
};
const factor = rank => 0.98 * 0.6 ** (rank - 1);
function rankAt(distance, bands) {
  assert(distance > 0);
  const index = bands.findIndex(limit => distance <= limit);
  return index < 0 ? null : index + 1;
}
function ratingAt(base, rank, context = 1, actions = 1) {
  return Math.floor(base * factor(rank) * context / actions);
}

for (const bands of Object.values(models)) {
  assert.equal(bands.length, 10);
  bands.forEach((limit, i) => {
    assert.equal(rankAt(limit, bands), i + 1);
    assert.equal(rankAt(limit + 0.001, bands), i === 9 ? null : i + 2);
  });
}

const sampleDistances = [10, 20, 50, 100, 200, 500, 1000, 5000, 10000];
const comparison = sampleDistances.map(meters => ({ meters,
  models: Object.fromEntries(Object.entries(models).map(([name, bands]) => {
    const rank = rankAt(meters, bands);
    return [name, rank === null ? { status: 'Outside this candidate table; not an Access ruling' }
      : { rank, guideSignatureRating: ratingAt(inputs.guideSignature, rank) }];
  })),
}));

const roundedRows = models.rounded.map((meters, i) => ({
  rank: i + 1, upperMetersInclusive: meters,
  ratings: Object.fromEntries(Object.entries(inputs)
    .map(([name, base]) => [name, ratingAt(base, i + 1)])),
  signatureWithDistinctResonance50: ratingAt(inputs.guideSignature, i + 1, 1.5),
  signatureTwoActions: ratingAt(inputs.guideSignature, i + 1, 1, 2),
}));
assert.deepEqual(roundedRows.map(row => row.ratings.guideSignature),
  [176, 106, 63, 38, 22, 13, 8, 4, 2, 1]);
assert.equal(roundedRows[2].signatureWithDistinctResonance50, 95);
assert.equal(roundedRows[2].signatureTwoActions, 31);
assert.equal(roundedRows[3].signatureWithDistinctResonance50, 57);

const shortAnchor = models.rounded.map(meters => meters / 2);
const anchorSensitivity = [10, 20, 50, 100, 200].map(meters => ({ meters,
  fiveMeterAnchor: ratingAt(inputs.guideSignature, rankAt(meters, shortAnchor)),
  tenMeterAnchor: ratingAt(inputs.guideSignature, rankAt(meters, models.rounded)),
}));
assert.equal(anchorSensitivity[2].fiveMeterAnchor, 38);
assert.equal(anchorSensitivity[2].tenMeterAnchor, 63);

console.log(JSON.stringify({ status: 'All assertions passed; no distance bands adopted.',
  models, comparison, roundedRows, anchorSensitivity,
  controls: 'Scale-one personal-delivery frame; permission required; neutral context unless labeled.',
  limitations: 'Numerical calibration, not empirical weapon ranges or a full opposed combat simulation.',
}, null, 2));
