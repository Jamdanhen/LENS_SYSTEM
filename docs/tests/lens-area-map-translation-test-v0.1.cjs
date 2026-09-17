const assert = require('node:assert/strict');
const affected = fraction => fraction >= 0.5;
assert.equal(affected(0.49), false);
assert.equal(affected(0.5), true);
assert.equal(affected(0.51), true);

// Supplied overlap fractions test hex inclusion, not a generated hex layout.
const hexOverlaps = [1, 1, 1, 1, 0.6, 0.5, 0.4];
assert.equal(hexOverlaps.filter(affected).length, 6);
assert.equal(hexOverlaps.reduce((total, n) => total + n, 0), 5.5);

// Exact rectangle/square intersections isolate edge translation without a
// geometry library or pixel sampling. Square results are a comparison only.
function rectangle(x, y, width, height) {
  let covered = 0;
  let included = 0;
  for (let i = Math.floor(x); i < Math.ceil(x + width); i++) {
    for (let j = Math.floor(y); j < Math.ceil(y + height); j++) {
      const overlapX = Math.max(0, Math.min(i + 1, x + width) - Math.max(i, x));
      const overlapY = Math.max(0, Math.min(j + 1, y + height) - Math.max(j, y));
      const fraction = overlapX * overlapY;
      covered += fraction;
      if (affected(fraction)) included++;
    }
  }
  assert.equal(covered, width * height);
  return { covered, included };
}
const aligned = rectangle(0, 0, 6, 2);
const offset = rectangle(0, 0.5, 6, 2);
assert.deepEqual(aligned, { covered: 12, included: 12 });
assert.deepEqual(offset, { covered: 12, included: 18 });

const start = 10;
const coverageGrowth = n => start * (1 + 0.2 * n);
assert.equal(coverageGrowth(1), 12);
assert.equal(coverageGrowth(5), 20);
assert.equal(coverageGrowth(10), 30);
// Scaling BOTH lengths by 1.2 scales the area by 1.44, not by 1.2.
assert.ok(Math.abs(start * 1.2 ** 2 - 14.4) < 1e-10);
assert.equal(start * 2 ** 2, 40);

console.log(JSON.stringify({ hexOverlapFixture: { overlaps: hexOverlaps,
  covered: 5.5, included: 6 }, squareComparison: { aligned, offset },
  candidateCoverage: [0, 1, 2, 3, 4, 5].map(extra => ({ extra, area: coverageGrowth(extra) })),
  linearDimensionComparison: { oneIncrement: 14.4, doubledDimensions: 40 },
  verification: 'All assertions passed; no hex layout simulation or grid policy extension.'
}, null, 2));
