'use strict';

const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const price = steps => 15 - 3 * steps;
const multiplier = rank => 1 + rank / 10;
const prices = Array.from({ length: 6 }, (_, steps) => ({
  reductionPercent: steps * 20, pricePerRank: price(steps), rank10Cost: price(steps) * 10,
}));
assert.deepEqual(prices.map(p => p.pricePerRank), [15, 12, 9, 6, 3, 0]);

// Demand classes are deliberately uniform synthetic opportunities, not rules or estimates of actual play.
const demands = [];
for (let duration = 1; duration <= 5; duration++)
for (let area = 1; area <= 5; area++)
for (let distance = 1; distance <= 5; distance++)
for (let intensity = 1; intensity <= 5; intensity++)
for (let target = 1; target <= 5; target++) demands.push([duration, area, distance, intensity, target]);
const concentrated = demands.filter(d => d[4] === 1).length;
const independentFour = demands.filter(d => d.slice(0, 4).every(level => level <= 4)).length;
const independentFive = demands.filter(d => d.every(level => level <= 4)).length;
assert.equal(demands.length, 3125);
assert.equal(concentrated, 625);
assert.equal(independentFour, 1280);
assert.equal(independentFive, 1024);

const correlated = Array.from({ length: 5 }, (_, i) => [i + 1, i + 1, i + 1, i + 1]);
const overlapFour = correlated.filter(d => d.every(level => level <= 4)).length;
assert.equal(overlapFour, 4);
const disjoint = Array.from({ length: 5 }, (_, i) => Array.from({ length: 4 }, (_, j) => i === j ? 5 : 1));
const disjointFour = disjoint.filter(d => d.every(level => level <= 4)).length;
assert.equal(disjointFour, 1);
for (let j = 0; j < 4; j++) {
  assert.equal(correlated.filter(d => d[j] <= 4).length, 4);
  assert.equal(disjoint.filter(d => d[j] <= 4).length, 4);
}
const scenarios = [
  { name: 'One target class of five, uniform opportunities', total: 3125, retained: concentrated, additiveDiscount: 80 },
  { name: 'Four 20% restrictions, independent demands', total: 3125, retained: independentFour, additiveDiscount: 80 },
  { name: 'Four 20% restrictions, same demanding situations', total: 5, retained: overlapFour, additiveDiscount: 80 },
  { name: 'Four 20% restrictions, disjoint demanding situations', total: 5, retained: disjointFour, additiveDiscount: 80 },
  { name: 'Five 20% restrictions, independent demands', total: 3125, retained: independentFive, additiveDiscount: 100 },
].map(r => ({ ...r, retainedPercent: r.retained / r.total * 100,
  unavailablePercent: (r.total - r.retained) / r.total * 100 }));

const rankCap = {
  maxRank: 6, reduction: 40, perRank: price(2),
  sameSixRanksOrdinary: 6 * 15, sameSixRanksDiscounted: 6 * price(2),
  actualDiscountOnSix: 6 * (15 - price(2)),
  unrestrictedTen: 10 * 15,
  restrictedMaxMultiplier: multiplier(6), unrestrictedMaxMultiplier: multiplier(10),
};
assert.equal(rankCap.sameSixRanksDiscounted, 54);
assert.equal(rankCap.actualDiscountOnSix, 36);
assert.equal(rankCap.restrictedMaxMultiplier / rankCap.unrestrictedMaxMultiplier, .8);
const fixedBudget = Array.from({ length: 5 }, (_, steps) => {
  const budget = 150, p = price(steps), rank = Math.min(10, Math.floor(budget / p));
  return { reductionPercent: steps * 20, eligibleAxisBudget: budget, rank, spent: rank * p,
    unspent: budget - rank * p, applicableMultiplier: multiplier(rank) };
});
assert.equal(fixedBudget[4].spent, 30);
assert.equal(fixedBudget[4].unspent, 120);
const targetMix = [20, 60, 80].map(eligibleSharePercent => ({
  eligibleSharePercent, targetClassesAllowed: 1, targetClassesTotal: 5,
  excludedClassPercent: 80, unavailableOpportunityPercent: 100 - eligibleSharePercent,
}));
assert.deepEqual(targetMix.map(r => r.unavailableOpportunityPercent), [80, 40, 20]);

const result = {
  status: 'Test candidate only. No Axis discount, sub-rank schedule, cap, refund, or reinvestment rule adopted.',
  controls: 'HOLT acquisition stays 40 and is outside the 150-point Axis-only comparison. No whole-HOLT limitation discount stacked. Restricted route modeled as unavailable when a test demand is excluded; other ordinary or HOLT routes may remain. Synthetic opportunity counts are not Effect output, probability penalties, or automatic compensation. The rank-six fixture is a development ceiling, not a target-rating ceiling.',
  prices, scenarios, rankCap, fixedBudget, targetMix,
};
fs.writeFileSync(path.join(__dirname, 'lens-axis-limitation-twenty-percent-test-v0.1.results.json'),
  JSON.stringify(result, null, 2) + '\n');
console.table(scenarios.map(r => ({ scenario: r.name, additiveDiscount: r.additiveDiscount,
  unavailablePercent: r.unavailablePercent, retainedPercent: r.retainedPercent })));
console.log(JSON.stringify(rankCap));
console.log('PASS: six price steps including zero-cost stress case, 3,125 independent demand combinations, overlap/disjoint controls, three campaign mixes, five equal-budget purchases, and Rank-6 accounting.');
