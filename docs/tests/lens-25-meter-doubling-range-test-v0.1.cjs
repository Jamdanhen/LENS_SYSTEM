const assert = require('node:assert/strict');
const previous = [20, 100, 500];
const doubling = Array.from({ length: 10 }, (_, i) => 25 * 2 ** i);
function rank(distance, limits) {
  assert(distance >= 0);
  const index = limits.findIndex(limit => distance <= limit);
  return index === -1 ? null : index + 1;
}
function rating(raw, difficulty, resonance = 0) {
  return difficulty === null ? null
    : Math.floor(raw * 0.98 * 0.6 ** (difficulty - 1) * (1 + resonance));
}
function effects(final, roll) {
  assert(roll >= 2 && roll <= 99);
  return final === null ? null : roll > final ? 0 : 1 + Math.floor((final - roll) / 10);
}
const ladder = doubling.map((meters, index) => ({ throughMeters: meters,
  difficulty: index + 1, raw100: rating(100, index + 1),
  raw180: rating(180.280512, index + 1),
}));
const comparison = [20, 25, 26, 50, 51, 100, 101, 200, 201, 400, 401, 500, 800, 1600]
  .map(meters => ({ meters,
    previousD: rank(meters, previous), doublingD: rank(meters, doubling),
    previous100: rating(100, rank(meters, previous)),
    doubling100: rating(100, rank(meters, doubling)),
  }));
const sensitivity = [20, 80, 100, 180.280512, 320].map(raw => ({ raw,
  atDistances: [25, 50, 100, 200, 400, 800].map(meters => ({ meters,
    previous: rating(raw, rank(meters, previous)),
    doubling: rating(raw, rank(meters, doubling)),
  })),
}));
// Beyond D3, holding +0.60 constant is a sensitivity, not an adopted property.
const supported = [50, 100, 200, 400, 800].map(meters => {
  const d = rank(meters, doubling);
  const resonance = d === 2 ? 0.3 : 0.6;
  return { meters, difficulty: d, resonance,
    neutral100: rating(100, d), supported100: rating(100, d, resonance),
    neutral180: rating(180.280512, d), supported180: rating(180.280512, d, resonance),
  };
});
const output = [100, 200, 400].map(meters => ({ meters, ordinaryRoll: 30,
  previousEffects: effects(rating(180.280512, rank(meters, previous)), 30),
  doublingEffects: effects(rating(180.280512, rank(meters, doubling)), 30),
}));
assert.deepEqual(doubling, [25, 50, 100, 200, 400, 800, 1600, 3200, 6400, 12800]);
assert.deepEqual(ladder.map(row => row.raw100), [98, 58, 35, 21, 12, 7, 4, 2, 1, 0]);
for (let i = 0; i < doubling.length; i++) {
  assert.equal(rank(doubling[i], doubling), i + 1);
  assert.equal(rank(doubling[i] + 0.01, doubling), i === 9 ? null : i + 2);
}
assert.equal(rank(501, previous), null);
assert.equal(rank(25, previous), 2);
assert.equal(rank(50, previous), rank(50, doubling));
assert.equal(rank(100, doubling), 3);
assert.equal(rank(500, doubling), 6);
assert.deepEqual(supported.map(row => row.supported100), [76, 56, 33, 20, 12]);
assert.deepEqual(output.map(row => [row.previousEffects, row.doublingEffects]),
  [[8, 4], [4, 1], [4, 0]]);
for (const row of sensitivity) {
  const values = row.atDistances.map(entry => entry.doubling);
  for (let i = 1; i < values.length; i++) assert(values[i] <= values[i - 1]);
}
console.log(JSON.stringify({ status: 'All assertions passed; comparison only.',
  assumptions: 'One Difficulty Rank per band remains a test assumption. Actual reach and Access required. Previous table remains unmapped beyond 500 m.',
  ladder, comparison, sensitivity, supported, output }, null, 2));
