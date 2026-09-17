const assert = require('node:assert/strict');
function band(amount, anchor) {
  const index = Array.from({ length: 10 }, (_, i) => anchor * 2 ** i)
    .findIndex(limit => amount <= limit);
  return index < 0 ? null : index + 1;
}
function rating(raw, d) {
  return d === null ? null : Math.floor(raw * 0.98 * 0.6 ** (d - 1));
}
function effects(final, roll = 30) {
  return final === null ? null : roll > final ? 0 : 1 + Math.floor((final - roll) / 10);
}
function patch(width, length, raw = 100) {
  const area = width * length;
  const across = Math.max(width, length);
  const areaD = band(area, 25);
  const spanD = band(across, 5);
  return { width, length, area, areaD, spanD,
    areaRating: rating(raw, areaD), spanRating: rating(raw, spanD),
    areaEffectsOn30: effects(rating(raw, areaD)),
    spanEffectsOn30: effects(rating(raw, spanD)),
  };
}
const squares = [5, 10, 20, 40].map(side => patch(side, side));
const shapes = [[5, 20], [10, 10], [2, 50]].map(([w, l]) => patch(w, l));
const controls = [20, 80, 100, 180.280512, 320].map(raw => ({ raw,
  patches: [5, 10, 20].map(side => patch(side, side, raw)),
}));
assert.deepEqual(squares.map(p => p.areaD), [1, 3, 5, 7]);
assert.deepEqual(squares.map(p => p.spanD), [1, 2, 3, 4]);
assert.deepEqual(squares.map(p => p.areaRating), [98, 35, 12, 4]);
assert.deepEqual(squares.map(p => p.spanRating), [98, 58, 35, 21]);
assert(shapes.every(p => p.areaD === 3));
assert.deepEqual(shapes.map(p => p.spanD), [3, 2, 5]);
assert.equal(band(25, 25), 1);
assert.equal(band(25.01, 25), 2);
assert.equal(band(50, 25), 2);
assert.equal(band(50.01, 25), 3);
assert.equal(band(12800.01, 25), null);
console.log(JSON.stringify({ status: 'All assertions passed; area measurement candidates only.',
  assumptions: 'Equal 5-by-5 D1 fixture, not an adopted area allowance. Single Source, permitted contiguous surface effect, fixed reach/context. Effects are not copied per cell or target.',
  squares, shapes, controls }, null, 2));
