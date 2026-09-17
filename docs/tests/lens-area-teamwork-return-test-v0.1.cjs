const assert = require('node:assert/strict');
const sum = values => values.reduce((total, value) => total + value, 0);
function area(start, output, rate) {
  return output === 0 ? 0 : start * (100 + rate * (output - 1)) / 100;
}
function shared(start, contributions, cancellation, rate) {
  const earned = sum(contributions);
  const cancelled = Math.min(earned, cancellation);
  const remaining = earned - cancelled;
  assert.equal(earned, cancelled + remaining);
  return { earned, cancelled, remaining, extra: Math.max(0, remaining - 1),
    coverage: area(start, remaining, rate) };
}
const rows = [];
for (const rate of [10, 20]) {
  const together = shared(100, [3, 2], 0, rate);
  assert.equal(together.extra, 4);
  assert.equal(together.coverage, rate === 10 ? 140 : 180);
  rows.push({ rate, kind: 'two shared area contributions', ...together });
  const cancelled = shared(100, [3, 2], 2, rate);
  assert.equal(cancelled.coverage, rate === 10 ? 120 : 140);
  rows.push({ rate, kind: 'two area Effects cancelled', ...cancelled });
  const separateArea = area(100, 3, rate);
  assert.equal(separateArea, rate === 10 ? 120 : 140);
  rows.push({ rate, kind: 'three area Effects plus four distinct harm Effects',
    areaOutput: 3, harmOutput: 4, coverage: separateArea });
  assert.equal(shared(100, [3, 2], 5, rate).coverage, 0);
  assert.equal(shared(100, [3, 0], 0, rate).coverage, separateArea);
  assert.equal(shared(100, [1, 1], 0, rate).extra, 1);
  assert.equal(area(100, 11, rate), rate === 10 ? 200 : 300);
}
const effects = (rating, roll) => roll > rating ? 0 : 1 + Math.floor((rating - roll) / 10);
const sameRoll = [];
for (const start of [25, 50, 100, 200]) {
  const difficulty = 1 + Math.log2(start / 25);
  const rating = Math.floor(160 * 0.98 * 0.6 ** (difficulty - 1));
  const each = effects(rating, 40);
  sameRoll.push({ start, difficulty, rating, each,
    at10: shared(start, [each, each], 0, 10).coverage,
    at20: shared(start, [each, each], 0, 20).coverage });
}
assert.deepEqual(sameRoll.map(row => row.at10), [82.5, 105, 130, 0]);
assert.deepEqual(sameRoll.map(row => row.at20), [140, 160, 160, 0]);

let states = 0;
for (const rate of [10, 20]) for (const start of [1, 25, 50, 100, 200]) {
  for (let a = 0; a <= 10; a++) for (let b = 0; b <= 10; b++) {
    for (let cancellation = 0; cancellation <= 20; cancellation++) {
      const result = shared(start, [a, b], cancellation, rate);
      assert.deepEqual(result, shared(start, [b, a], cancellation, rate));
      if (result.remaining === 0) assert.equal(result.coverage, 0);
      else assert.ok(result.coverage >= start);
      states++;
    }
  }
}
console.log(JSON.stringify({ rows, sameRoll, states,
  assumptions: ['coverage, not radius', 'same declared area for shared contributions',
    'complete area-capable output supplied', 'no new Difficulty composition',
    'no automatic harm per covered unit', 'no rounding rule adopted',
    'fixed ordinary rolls, not a probability comparison'] }, null, 2));
