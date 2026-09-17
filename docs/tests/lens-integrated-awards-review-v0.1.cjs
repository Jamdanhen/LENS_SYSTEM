'use strict';

const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

// Conditional review baseline: Packages 1 and 2 together, not main-rule adoption.
const targets = [
  ['Specialty or Precision +1', 5],
  ['Task or Field +1', 10],
  ['Owned HOLT Axis +1', 15],
  ['Derived +1', 20],
  ['New Task or Field 0-3', 30],
  ['New unrestricted HOLT, no Axis ranks', 40],
  ['Specialty 0-10, eligible Field already held', 50],
  ['Attribute +1', 60],
  ['Another Axis 0-5 in owned HOLT', 75],
  ['Task or Field 0-10', 100],
  ['New HOLT and Axis 5', 115],
  ['Owned HOLT Axis 0-10', 150],
  ['New HOLT and Axis 10', 190],
  ['New HOLT and three Axes 5', 265],
  ['New HOLT and five Axes 5', 415],
];
const scenarios = [10, 14, 17, 25].flatMap(gross => [0, 4, 8].map(spend => ({
  gross, spend, net: gross-spend,
  savedFraction: (gross-spend)/gross,
  timeFactorAgainstNoSpend: gross/(gross-spend),
  targets: targets.map(([target, cost]) => ({ target, cost, sessions: Math.ceil(cost/(gross-spend)) })),
})));
const acquisitions = [40, 30, 20, 10];
function holtCost(axes, acquisition, oldParent = false) {
  return acquisition + 15*axes.reduce((sum, rank) => sum+rank, 0) +
    (oldParent ? 40*(Math.max(1, ...axes)-1) : 0);
}
const limitations = [[], [5], [10], [5,5,5], [10,10,10,10,10]].map(axes => ({
  axes,
  variants: acquisitions.map(acquisition => {
    const saved = 40-acquisition;
    const current = holtCost(axes, acquisition, true);
    const candidate = holtCost(axes, acquisition);
    assert.equal(holtCost(axes, 40, true)-current, saved);
    assert.equal(holtCost(axes, 40)-candidate, saved);
    return { acquisition, saved, current, candidate,
      currentDiscountFraction: saved/holtCost(axes,40,true),
      candidateDiscountFraction: saved/holtCost(axes,40),
      sessionsAtNet10: Math.ceil(candidate/10),
      sessionsAtNet14: Math.ceil(candidate/14) };
  }),
}));
const limitedBudgets = [125,190].map(budget => ({budget, variants: acquisitions.map(acquisition => {
  const axis = Math.min(10, Math.floor((budget-acquisition)/15));
  const spent = holtCost([axis], acquisition);
  assert(spent <= budget);
  return {acquisition, axis, spent, remaining:budget-spent, multiplier:1+axis/10};
})}));

// Milestones are credited only when reached; no borrowing from future awards.
function affordability(cost, net, milestoneEvery = null) {
  let balance = 0;
  for (let session=1; session<=1000; session++) {
    balance += net;
    if (milestoneEvery !== null && session % milestoneEvery === 0) balance += 12.5;
    if (balance >= cost) return {session, balance, remaining:balance-cost};
  }
  throw new Error('Unreached target');
}
const milestones = [null,4,6].map(every => ({every, net:10,
  targets:targets.map(([target,cost])=>({target,cost,...affordability(cost,10,every)}))}));
const opportunityGap = {sessions:10, sharedPerSession:11,
  individualNone:110, individualOneMeaningful:140, individualTwoMeaningful:170};
assert.equal(opportunityGap.individualTwoMeaningful-opportunityGap.individualNone,60);

// An ordinary fixture with headroom: same route, purchases differing in coverage.
const raw = (a,d,training,axis=0) => (a+d)*training.reduce((m,r)=>m*(1+r/10),1)*(1+axis/10);
const base = raw(5,3,[5,5,5,5]);
const purchases = [
  ['Attribute +1',60,raw(6,3,[5,5,5,5])],
  ['Derived +1',20,raw(5,4,[5,5,5,5])],
  ['Task +1',10,raw(5,3,[6,5,5,5])],
  ['Field +1',10,raw(5,3,[5,6,5,5])],
  ['Specialty +1',5,raw(5,3,[5,5,6,5])],
  ['Owned HOLT Axis 0-1',15,raw(5,3,[5,5,5,5],1)],
].map(([purchase,cost,output])=>({purchase,cost,output,relativeIncrease:output/base-1}));
assert.equal(base,40.5);
assert.equal(raw(10,10,[10,10,10,10]),320);
assert.equal(holtCost([10],40),190);
assert.equal(holtCost([10],20),170);
assert.equal(holtCost([10],20,true),530);
assert.deepEqual(limitedBudgets[0].variants.map(v=>v.axis),[5,6,7,7]);
assert.equal(affordability(190,10,4).session,16);
assert.equal(affordability(190,10,6).session,17);
assert.equal(affordability(190,10).session,19);
for (const scenario of scenarios) {
  for (const row of scenario.targets) {
    assert(row.sessions*scenario.net >= row.cost);
    assert((row.sessions-1)*scenario.net < row.cost);
  }
}
const results = {
  status:'Discussion control only; no adoption or balance changes',
  assumptions:'Additive A+D, Access-only HOLT 40, Axis 15, ordinary flat prices unchanged',
  scenarios, limitations, limitedBudgets, milestones, opportunityGap,
  ordinaryFixture:{ranks:[5,3,5,5,5,5],base,purchases},
};
fs.writeFileSync(path.join(__dirname,'lens-integrated-awards-review-v0.1.results.json'),JSON.stringify(results,null,2)+'\n');
console.log(JSON.stringify({checks:'passed',scenarios:scenarios.length,targets:targets.length,
  limitationRows:limitations.length*acquisitions.length,limitedBudgets,milestones,
  ordinaryFixture:results.ordinaryFixture},null,2));
