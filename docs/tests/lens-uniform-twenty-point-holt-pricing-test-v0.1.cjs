'use strict';
const assert = require('node:assert/strict');
let cases = 0;
// Reduction is a count of ten-percent bands, not automatically counted limitations.
const unit = reduction => 20 - 2 * reduction;
const candidate = (ranks, reductions = ranks.map(() => 0), accessReduction = 0) =>
  unit(accessReduction) + ranks.reduce((total, rank, i) => total + rank * unit(reductions[i]), 0);
const current = ranks => 40 + ranks.reduce((sum, rank) => sum + 15 * rank, 0);
for (let axes = 1; axes <= 5; axes++) {
  for (let rank = 0; rank <= 10; rank++) {
    for (let reduction = 0; reduction <= 9; reduction++) {
      const ranks = Array(axes).fill(rank);
      const price = candidate(ranks, Array(axes).fill(reduction), reduction);
      assert.equal(price, (1 + axes * rank) * unit(reduction));
      assert.ok(Number.isInteger(price) && price > 0);
      if (reduction < 9) assert.ok(price > candidate(ranks, Array(axes).fill(reduction + 1), reduction + 1));
      cases++;
    }
  }
}
let mixedCases = 0;
for (let r1 = 0; r1 <= 10; r1++) {
  for (let r2 = 0; r2 <= 10; r2++) {
    for (let reduction = 0; reduction <= 9; reduction++) {
      assert.equal(candidate([r1, r2], [reduction, 0]), 20 + r1 * unit(reduction) + 20 * r2);
      mixedCases++;
    }
  }
}
assert.equal(candidate([10], [8], 8), 44);
assert.equal(candidate(Array(5).fill(10), Array(5).fill(8), 8), 204);
assert.equal(candidate([5, 5], [2, 0]), 200);
const affordability = (budget, price, access) => Math.min(10, Math.floor((budget - access) / price));
const output = {
  status: 'Unadopted pricing comparison; no ranks, permissions, awards, or balances changed',
  verified: {uniformPackages: cases, mixedScopePackages: mixedCases},
  units: Array.from({length: 10}, (_, d) => ({reductionPercent: 10 * d, cost: unit(d)})),
  oneAxis: [0, 1, 4, 5, 10].map(r => ({rank: r, current: current([r]), candidate: candidate([r])})),
  breadth: [1, 3, 5].map(n => ({axes: n, rankEach: 5, current: current(Array(n).fill(5)), candidate: candidate(Array(n).fill(5))})),
  restricted: [0, 2, 5, 8, 9].map(d => ({reductionPercent: d * 10, accessAndOneAxis10: candidate([10], [d], d), accessAndFiveAxes10: candidate(Array(5).fill(10), Array(5).fill(d), d)})),
  budgets: [125, 200].map(b => ({budget: b, currentOneAxis: affordability(b, 15, 40), candidateOneAxis: affordability(b, 20, 20)})),
  mixedExample: {accessFullPrice: 20, firstAxis5At20PercentReduction: 80, secondAxis5FullPrice: 100, total: candidate([5, 5], [2, 0])},
  pacing: [19, 15].map(net => ({netPerSession: net, accessOrOneAxisRank: Math.ceil(20 / net), accessAndOneAxis10: Math.ceil(220 / net)})),
  hundredPercentBoundary: {cost: unit(10), note: 'Zero price; no ceiling or free-purchase rule adopted'},
  limits: 'No inference that any restriction deserves a particular percentage. Affordability fixtures are not optimized full characters or observed campaign balance. Rank modifiers are unchanged; HOLT Access is purchased once, not once per Axis. No replacement parent rank. Protected funds remain protected.'
};
console.log(JSON.stringify(output, null, 2));
