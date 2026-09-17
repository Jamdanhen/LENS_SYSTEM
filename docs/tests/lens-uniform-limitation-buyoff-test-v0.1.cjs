'use strict';
const assert = require('node:assert/strict');
const unit = bands => 20 - 2 * bands;
const cost = (count, bands) => count * unit(bands);
const easing = (count, before, after) => {
  assert.ok(after >= 0 && after <= before && before <= 9);
  return cost(count, after) - cost(count, before);
};
let transitions = 0, paths = 0;
// 1-51 purchases spans Access alone through Access plus five Rank-10 Axes.
for (let n = 1; n <= 51; n++) {
  for (let before = 0; before <= 9; before++) {
    for (let after = 0; after <= before; after++) {
      const payment = easing(n, before, after);
      assert.ok(Number.isInteger(payment) && payment >= 0);
      assert.equal(cost(n, before) + payment, cost(n, after));
      assert.ok(payment <= n * 20 - cost(n, before));
      transitions++;
      for (let middle = after; middle <= before; middle++) {
        assert.equal(easing(n, before, middle) + easing(n, middle, after), payment);
        paths++;
      }
    }
  }
}
// Credits include money already paid through earlier buyoff steps.
const settle = (count, credited, finalBands) => Math.max(0, cost(count, finalBands) - credited);
const earlierSix = cost(6, 2);
const partialPayment = settle(6, earlierSix, 1);
const laterFive = cost(5, 1);
const credited = earlierSix + partialPayment + laterFive;
const finalPayment = settle(11, credited, 0);
assert.equal(partialPayment, 12);
assert.equal(credited, 198);
assert.equal(finalPayment, 22);
assert.equal(settle(11, credited + finalPayment, 0), 0);
// One restricted Axis: Access and the second Axis remain full-price and untouched.
const scopedPayment = easing(5, 5, 2);
assert.equal(scopedPayment, 30);
assert.equal(20 + cost(5, 5) + cost(5, 0) + scopedPayment, 20 + cost(5, 2) + cost(5, 0));
const rows = [
  {name: 'Access only; 20% to none', purchases: 1, before: 2, after: 0},
  {name: 'Access + Axis 5; 20% to none', purchases: 6, before: 2, after: 0},
  {name: 'Access + Axis 5; 20% to 10%', purchases: 6, before: 2, after: 1},
  {name: 'Access + Axis 10; 50% to 20%', purchases: 11, before: 5, after: 2},
  {name: 'Access + five Axes 5; 20% to none', purchases: 26, before: 2, after: 0}
].map(x => ({name: x.name, paidBefore: cost(x.purchases, x.before), buyoff: easing(x.purchases, x.before, x.after), totalAfter: cost(x.purchases, x.after)}));
console.log(JSON.stringify({
  status: 'Unadopted buyoff comparison under adopted uniform 20-point pricing',
  verified: {transitions, stagedPaths: paths}, examples: rows,
  mixedHistory: {earlierSix, partialPayment, laterFive, creditedBeforeFinalRemoval: credited, finalPayment, totalPaid: credited + finalPayment},
  oneRestrictedAxis: {rank: 5, beforePercent: 50, afterPercent: 20, payment: scopedPayment, unaffectedAccessAndOtherAxis: 120},
  oldAcquisitionOnlyCounterexample: {accessAndAxis5At20PercentPaid: 96, acquisitionOnlyRepayment: 4, totalAfter: 100, unrestrictedEquivalent: 120, unreturnedAxisSavings: 20},
  boundaries: 'Assumes eligible permanent easing and GM reassessment of combined burden. No automatic sum of named restrictions. No story grants, legacy conversion, stronger-limit refunds, new permissions, temporary-condition fees, award changes, or discount-ceiling adoption.'
}, null, 2));
