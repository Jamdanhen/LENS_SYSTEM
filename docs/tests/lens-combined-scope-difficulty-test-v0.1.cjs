'use strict';

const assert = require('node:assert/strict');

// Exact rational arithmetic keeps Difficulty and foundation rounding final-only.
function rating(rank, difficulty, additive = true, axisRank = rank) {
  const r = BigInt(rank);
  const d = BigInt(difficulty - 1);
  const foundationNumerator = additive ? 20n * r : r * (10n + r);
  const numerator = foundationNumerator * (10n + r) ** 4n * (10n + BigInt(axisRank)) * 98n * 3n ** d;
  const denominator = 10n ** 6n * 100n * 5n ** d;
  return Number(numerator / denominator);
}
const chance = final => Math.max(1, Math.min(99, final));
const ordinaryEffects = (final, roll) => final >= roll ? 1 + Math.floor((final - roll) / 10) : 0;
const scenarios = [
  { name: 'Single target, 100 distance increments, instantaneous', components: [3, 0, 0] },
  { name: '25 coverage units, same distance, instantaneous', components: [3, 1, 0] },
  { name: 'Same area and distance, one independent time increment', components: [3, 1, 1] },
  { name: 'Same area and distance, ten time increments', components: [3, 1, 2] },
  { name: 'Same area and distance, one hundred time increments', components: [3, 1, 3] },
  { name: '100 coverage units, same distance, one hundred time increments', components: [3, 3, 3] },
];
assert.equal(rating(10, 1), 627);
const rows = scenarios.map(scenario => {
  const difficulty = scenario.components.reduce((sum, value) => sum + value, 0);
  return { ...scenario, difficulty, routes: [3, 5, 8, 10].map(rank => {
    const final = rating(rank, difficulty);
    const oldFinal = rating(rank, difficulty, false);
    assert(final >= oldFinal);
    if (rank === 10) assert.equal(final, oldFinal);
    return { rank, raw: 2 * rank * (1 + rank / 10) ** 5, final,
      successPercent: chance(final), oldSuccessPercent: chance(oldFinal),
      effectsAtOrdinaryRoll40: ordinaryEffects(final, 40) };
  }) };
});
for (let rank = 1; rank <= 10; rank++) {
  for (let d = 2; d <= 10; d++) assert(rating(rank, d) <= rating(rank, d - 1));
}
assert.equal(rows[2].routes[1].successPercent, 9);
assert.equal(rows[5].routes[3].successPercent, 10);
console.log(JSON.stringify(rows, null, 2));
console.log('PASS: exact final-only flooring; monotonic Difficulty; unchanged maximum route; adopted foundation comparison.');

const axisRows = [];
for (const rank of [3, 5, 8, 10]) {
  for (const difficulty of [3, 4, 5, 6, 7, 9]) {
    const values = [0, 1, 5, 10].map(axis => {
      const final = rating(rank, difficulty, true, axis);
      return { axis, final, chance: chance(final), effectsAt40: ordinaryEffects(final, 40) };
    });
    for (let axis = 1; axis <= 10; axis++) {
      assert(rating(rank, difficulty, true, axis) >= rating(rank, difficulty, true, axis - 1));
    }
    const base = values[0].final;
    assert([2 * base, 2 * base + 1].includes(values[3].final));
    axisRows.push({ ordinaryRank: rank, difficulty,
      finalRatings: values.map(v => v.final).join('/'),
      successPercents: values.map(v => v.chance).join('/'),
      effectsAtRoll40: values.map(v => v.effectsAt40).join('/') });
  }
}
assert.equal(rating(8, 5, true, 0), 21);
assert.equal(rating(8, 5, true, 10), 42);
assert.equal(rating(5, 5, true, 10), 12);
console.log('AXIS FOLLOW-UP: columns are Axis 0 / 1 / 5 / 10.');
console.table(axisRows);
console.log('PASS: fixed ordinary ratings; every Axis step monotonic; Rank 10 doubles the unrounded Axis-0 output.');
