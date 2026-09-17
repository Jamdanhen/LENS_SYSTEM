'use strict';
// Unadopted comparison. stdout only; no character or rule-file writes.
const assert = require('node:assert/strict');
let assertions = 0;
function check(value, label) { assert.ok(value, label); assertions++; }
function ratio(n, d = 1) { return {n: BigInt(n), d: BigInt(d)}; }
function times(x, y) { return {n: x.n * y.n, d: x.d * y.d}; }
function equal(x, y) { return x.n * y.d === y.n * x.d; }
function floor(x) { assert.ok(x.n >= 0n); return Number(x.n / x.d); }
function number(x) { return Number(x.n) / Number(x.d); }
function expression(foundation, training, axis, difficulty, modifier = ratio(1)) {
  let result = ratio(foundation);
  for (const rank of [...training, axis]) result = times(result, ratio(10 + rank, 10));
  if (difficulty !== null) result = times(result, {
    n: 98n * 3n ** BigInt(difficulty - 1), d: 100n * 5n ** BigInt(difficulty - 1)
  });
  return times(result, modifier);
}
const profiles = [
  [0, 0, 0, 0], [5, 5, 0, 0], [8, 8, 8, 8], [10, 10, 10, 10], [2, 9, 1, 0]
];
const modifiers = [ratio(1), ratio(3, 2), ratio(1, 2), ratio(3, 4), ratio(8, 5), ratio(0)];
let pairs = 0, expressionCases = 0;
const reached = new Set();
for (let a = 1; a <= 10; a++) for (let d = 0; d <= a; d++) {
  pairs++; const capability = a + d; reached.add(capability);
  check(capability >= 1 && capability <= 20, 'mapped range');
  for (const training of profiles) for (const axis of [0, 5, 10]) {
    for (let difficulty = 1; difficulty <= 10; difficulty++) for (const modifier of modifiers) {
      const oldResult = expression(a + d, training, axis, difficulty, modifier);
      const newResult = expression(capability, training, axis, difficulty, modifier);
      check(equal(oldResult, newResult), 'exact mapped output');
      check(floor(oldResult) === floor(newResult), 'same final-only floor');
      expressionCases++;
    }
  }
}
check(pairs === 65 && reached.size === 20, 'all legal pairs and all standalone ratings');
check(expressionCases === 58500, 'comparison coverage');
const maxOrdinary = number(expression(20, [10, 10, 10, 10], 0, null));
const maxAxis = number(expression(20, [10, 10, 10, 10], 10, null));
check(maxOrdinary === 320 && maxAxis === 640, 'maxima preserved');

function reconstructParents(values) {
  const parents = [];
  for (let a = 1; a <= 10; a++) if (values.every(v => v >= a && v <= 2 * a)) parents.push(a);
  return parents;
}
const groupCases = [
  [7, 7, 7, 7, 7], [20, 10, 10, 10, 10], [20, 6, 6, 6, 6],
  [20, 1, 1, 1, 1], [8, 8, 8, 8, 8], [2, 1, 1, 1, 1]
].map(values => ({values, possibleOldParents: reconstructParents(values)}));
check(groupCases[1].possibleOldParents.join(',') === '10', 'twenty requires sibling floor ten in old group');
check(groupCases[2].possibleOldParents.length === 0, 'new asymmetric group');
check(groupCases[3].possibleOldParents.length === 0, 'new extreme group');
// Check the closed-form group criterion against a direct parent search.
let groupChecks = 0;
for (let low = 1; low <= 20; low++) for (let high = low; high <= 20; high++) {
  const values = [low, low, high, high, high];
  const criterion = Math.ceil(high / 2) <= Math.min(low, 10);
  check(criterion === (reconstructParents(values).length > 0), 'shared-parent feasibility');
  groupChecks++;
}

const builds = [
  {name: 'Balanced protected reference', a: [5, 5, 5, 5, 5], d: Array.from({length: 5}, () => [2, 2, 2, 2, 2])},
  {name: 'Concentrated protected reference', a: [8, 6, 5, 4, 2], d: [[8, 8, 8, 8, 8], [2, 2, 2, 2, 2], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0]]}
].map(build => {
  const sumA = build.a.reduce((s, x) => s + x, 0);
  const sumD = build.d.flat().reduce((s, x) => s + x, 0);
  check(sumA === 25 && sumD === 50, 'protected allocations');
  build.d.forEach((group, i) => group.forEach(d => check(d >= 0 && d <= build.a[i], 'legal child')));
  const standalone = build.d.flatMap((group, i) => group.map(d => d + build.a[i]));
  const sum = standalone.reduce((s, x) => s + x, 0);
  check(sum === 175, 'mapped total foundations');
  return {...build, standalone, sum};
});
const newSpecialist = [20, ...Array(13).fill(6), ...Array(11).fill(7)];
const newExtreme = [...Array(7).fill(20), 18, ...Array(17).fill(1)];
check(newSpecialist.length === 25 && newSpecialist.reduce((s, x) => s + x, 0) === 175, 'same-total independent specialist');
check(newExtreme.length === 25 && newExtreme.reduce((s, x) => s + x, 0) === 175, 'same-total extreme allocation');

const originalFoundationCost = 20 * 60 + 50 * 20;
const originalTotal = originalFoundationCost + 750 + 125;
const paidStandaloneSteps = 175 - 25; // Trial floor one per capability, not adopted construction.
const prices = [12, 15, 20].map(price => ({
  price, oneStep: price, fiveSteps: 5 * price,
  costOfMatched175: paidStandaloneSteps * price,
  fullMatchedPackage: paidStandaloneSteps * price + 750 + 125,
  foundationTotalAtOld2200: 25 + Math.floor(originalFoundationCost / price),
  remainderAtOld2200: originalFoundationCost % price,
  isolatedOneToTwenty: 19 * price
}));
check(originalFoundationCost === 2200 && originalTotal === 3075, 'current protected valuation');
check(prices[2].fullMatchedPackage === 3875, 'twenty-price conversion warning');
check(prices[1].foundationTotalAtOld2200 === 171, 'fifteen-price budget control');
const parityPrice = originalFoundationCost / paidStandaloneSteps;
check(parityPrice > 14 && parityPrice < 15, 'total-value parity price');
check(60 / 5 !== 20, 'no single flat price preserves broad and focused marginal costs');

const concentration = [5, 10, 15, 20].map(b => ({
  foundation: b,
  raw: number(expression(b, [5, 5, 5, 5], 0, null)),
  d3Final: floor(expression(b, [5, 5, 5, 5], 0, 3))
}));
// Resolutions for fixed initial rolls and fixed natural-01 continuation.
function effects(final, roll, continuation = 50) {
  if (roll === 100) return 0;
  if (roll === 1) return 1 + Math.floor(Math.max(0, final - (1 - (100 - continuation))) / 10);
  return roll <= final ? 1 + Math.floor((final - roll) / 10) : 0;
}
let resolutionChecks = 0;
for (const fixture of [[3, 3], [5, 2], [8, 8], [10, 10]]) {
  const [a, d] = fixture;
  const oldFinal = floor(expression(a + d, [5, 5, 5, 5], 5, 3));
  const newFinal = floor(expression(a + d, [5, 5, 5, 5], 5, 3));
  for (let roll = 1; roll <= 100; roll++) {
    check(effects(oldFinal, roll) === effects(newFinal, roll), 'matched successful output including fixed natural results');
    resolutionChecks++;
  }
}
console.log(JSON.stringify({
  status: 'Unadopted standalone 1-20 capability comparison', assertions, pairs, expressionCases,
  resolutionChecks, groupChecks, maxOrdinary, maxAxis, groupCases, builds, newSpecialist, newExtreme,
  originalFoundationCost, originalTotal, paidStandaloneSteps, parityPrice, prices, concentration,
  limitations: 'Algebraic equivalence and controlled construction arithmetic, not encounter simulation or observed balance. No independent pricing, grouping, scope, Capacity, or character conversion adopted.'
}, null, 2));
