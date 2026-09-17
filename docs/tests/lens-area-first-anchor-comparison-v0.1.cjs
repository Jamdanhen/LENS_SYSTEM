const assert = require('node:assert/strict');
const starts = [5, 10, 25];
function difficulty(area, first) {
  if (area <= 1) return null; // No added area challenge, not an automatic hit.
  let rank = 1;
  let ceiling = first;
  while (area > ceiling) { ceiling *= 2; rank++; }
  return rank;
}
const final = (raw, rank) => rank === null ? raw : Math.floor(raw * 0.98 * 0.6 ** (rank - 1));
const bands = Array.from({ length: 5 }, (_, i) => ({ rank: i + 1,
  ceilings: starts.map(first => first * 2 ** i) }));
const footprints = [1, 2, 5, 7, 10, 19, 25, 37, 50, 100].map(area => ({
  area, candidates: starts.map(first => {
    const rank = difficulty(area, first);
    return { first, rank, ratingFrom100: final(100, rank) };
  })
}));
for (const first of starts) {
  for (let rank = 1; rank <= 10; rank++) {
    const ceiling = first * 2 ** (rank - 1);
    assert.equal(difficulty(ceiling, first), rank);
    assert.equal(difficulty(ceiling + 0.01, first), rank + 1);
    assert.equal(ceiling * (1 + 0.2 * 5), ceiling * 2);
  }
  assert.equal(difficulty(1, first), null);
  assert.equal(difficulty(1.01, first), 1);
}
// Counts of complete hexes in a center-plus-rings footprint. These are area
// equivalents in this fixture, not radii, meters, or guaranteed target counts.
assert.deepEqual([0, 1, 2, 3].map(r => 1 + 3 * r * (r + 1)), [1, 7, 19, 37]);
assert.deepEqual(starts.map(first => difficulty(7, first)), [2, 1, 1]);
assert.deepEqual(starts.map(first => difficulty(19, first)), [3, 2, 1]);
assert.deepEqual(starts.map(first => difficulty(37, first)), [4, 3, 2]);
const growth = starts.map(first => ({ first, perExtra: first * 0.2,
  afterFiveExtra: first * 2 }));
console.log(JSON.stringify({ bands, footprints, growth,
  verification: 'All assertions passed. Fixed area-only Rating comparison; no probabilities or new combined-Difficulty rule.'
}, null, 2));
