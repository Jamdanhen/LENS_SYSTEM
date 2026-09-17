const assert = require('node:assert/strict');
const bands = [10, 20, 50, 100, 200, 500, 1000, 2000, 5000, 10000];
const core = 8 * 1.7 * 1.9 * 1.9 * 1.7 * 1.8;
const rankAt = distance => bands.findIndex(limit => distance <= limit) + 1;
function rate(multiplier, distance, resonance = 0, dissonance = 0) {
  const rank = rankAt(distance);
  assert(rank > 0);
  return Math.floor(core * multiplier * 0.98 * 0.6 ** (rank - 1)
    * Math.max(0, 1 + resonance - dissonance));
}
const methods = {
  thrownKnifeCandidate: 1.05,
  shortbowCandidate: 1.10,
  handgunCandidate: 1.20,
  longGunCandidate: 1.25,
  extraordinarySingleAxisRank5: 1.50,
};
const matrix = [20, 50, 100, 200, 500].map(meters => ({ meters,
  difficulty: rankAt(meters),
  ratingsConditionalOnAccess: Object.fromEntries(Object.entries(methods)
    .map(([name, modifier]) => [name, rate(modifier, meters)])),
}));
assert.equal(matrix[1].ratingsConditionalOnAccess.handgunCandidate, 63);
assert.equal(matrix[1].ratingsConditionalOnAccess.longGunCandidate, 66);

const support = [
  ['Two distinct contextual impediments remain', 0, 0.4],
  ['One impediment remains', 0, 0.2],
  ['Both resolved', 0, 0],
  ['Both resolved; distinct behavioral understanding', 0.1, 0],
  ['Additional support sensitivity only', 0.5, 0],
].map(([label, resonance, dissonance]) => ({ label, resonance, dissonance,
  at50m: rate(1.25, 50, resonance, dissonance),
  at100m: rate(1.25, 100, resonance, dissonance),
}));
assert.deepEqual(support.map(row => row.at50m), [39, 53, 66, 72, 99]);
assert.deepEqual(support.map(row => row.at100m), [23, 31, 39, 43, 59]);

const boundaries = [10, 20, 50, 100].map(edge => ({
  edge, atEdge: rate(1.2, edge),
  nextMeter: edge + 1, beyondEdge: rate(1.2, edge + 1),
  individualSuccessBefore: Math.min(99, Math.max(1, rate(1.2, edge))),
  individualSuccessAfter: Math.min(99, Math.max(1, rate(1.2, edge + 1))),
}));
assert.equal(boundaries[1].atEdge, 106);
assert.equal(boundaries[1].beyondEdge, 63);
assert.equal(boundaries[2].atEdge, 63);
assert.equal(boundaries[2].beyondEdge, 38);

const rankOffsetSensitivity = [1, 2, 3].map(ranks => ({ ranks,
  requiredResonanceAlone: 1 / (0.6 ** ranks) - 1,
}));
assert(Math.abs(rankOffsetSensitivity[0].requiredResonanceAlone - 2 / 3) < 1e-12);

console.log(JSON.stringify({ status: 'All assertions passed; no final range or equipment values adopted.',
  core, matrix, support, boundaries, rankOffsetSensitivity,
  warning: 'All numeric method rows require actual reach and permission. Matched training is not one character reusing unrelated Specialties. The power case has additional Axis investment.',
}, null, 2));
