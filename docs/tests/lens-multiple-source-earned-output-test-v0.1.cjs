const assert = require('node:assert/strict');

// Completed-roll fixtures isolate output assembly, not continuation generation.
function resolve(rating, completedRoll, special = null) {
  const success = special === '01' || (special !== '00' && completedRoll <= rating);
  return {
    rating, completedRoll, special, success,
    effects: success ? 1 + Math.floor(Math.max(0, rating - completedRoll) / 10) : 0,
    complication: special === '00'
      ? Math.floor(Math.max(0, completedRoll - rating) / 10) : 0,
  };
}

const fixtures = [
  ['Unequal contributors', [80, 50], [40, 20], [4, 3]],
  ['Equal contributors', [80, 50], [80, 50], [4, 4]],
  ['Two marginal successes', [80, 79], [40, 39], [1, 1]],
  ['One ordinary failure', [80, 50], [40, 60], [4, 0]],
  ['Both ordinary failures', [80, 90], [40, 60], [0, 0]],
  ['01 followed by 50', [80, -49, '01'], [40, 20], [13, 3]],
  ['00 followed by 50', [80, 50], [40, 150, '00'], [4, 0]],
  ['Rating-zero 01 followed by 00', [0, 1, '01'], [40, 20], [1, 3]],
];

const rows = fixtures.map(([name, a, b, expected]) => {
  const sources = [resolve(...a), resolve(...b)];
  assert.deepEqual(sources.map(source => source.effects), expected);
  const compatibleCombined = sources.reduce((sum, source) => sum + source.effects, 0);
  assert.equal(compatibleCombined, expected[0] + expected[1]);
  return { name, actions: 2, sources, separateOutput: expected, compatibleCombined };
});
assert.equal(rows[6].sources[1].complication, 11);
assert.equal(rows[6].compatibleCombined, 4);

// Alternative cancellation boundaries, not adopted team-defense rules.
const opposition = [0, 3, 7, 8].map(defense => {
  const separate = [4, 3].map(output => Math.max(0, output - defense));
  const combined = Math.max(0, 4 + 3 - defense);
  const possibleSeparateCounters = [4, 3]
    .reduce((sum, output) => sum + Math.min(1, Math.max(0, defense - output)), 0);
  const possibleCombinedCounter = Math.min(1, Math.max(0, defense - 7));
  return {
    defensePerResolvedExchange: defense,
    separateRemainders: separate,
    separateTotal: separate[0] + separate[1],
    combinedRemainder: combined,
    possibleSeparateCounters,
    possibleCombinedCounter,
  };
});
assert.deepEqual(opposition.map(row => row.separateTotal), [7, 1, 0, 0]);
assert.deepEqual(opposition.map(row => row.combinedRemainder), [7, 4, 0, 0]);
assert.equal(opposition[3].possibleCombinedCounter, 1);
assert.equal(opposition[3].possibleSeparateCounters, 2);

console.log(JSON.stringify({
  status: 'All fixture assertions passed; candidate assembly only, no adopted team rule.',
  scope: 'Two committed actions; compatible Effects in the same frame; no extra team roll.',
  exclusions: 'No probability or encounter-pacing estimate; no cross-type conversion or Scale formula.',
  rows,
  opposition,
}, null, 2));
