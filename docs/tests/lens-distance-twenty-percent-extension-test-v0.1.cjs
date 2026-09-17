'use strict';

const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const { spawnSync } = require('node:child_process');

// Reuse the identical doubling-ladder calculation, not a second probability engine.
const prior = spawnSync(process.execPath,
  [path.join(__dirname, 'lens-covered-area-twenty-percent-growth-test-v0.1.cjs')],
  { encoding: 'utf8' });
assert.equal(prior.status, 0, prior.stderr);
const area = JSON.parse(fs.readFileSync(path.join(__dirname,
  'lens-covered-area-twenty-percent-growth-test-v0.1.results.json'), 'utf8'));
function rangeBand(distance) {
  assert(distance > 0);
  let d = 1, upper = 25;
  while (distance > upper) { d++; upper *= 2; }
  return d;
}
const range = (original, allocated) => original * (1 + allocated / 5);
const cost = (original, target) => Math.max(0, Math.ceil(5 * (target - original) / original));
const rows = area.rows.map(r => {
  assert.equal(rangeBand(r.initial) + r.sharedBands, r.smallDifficulty);
  assert.equal(rangeBand(r.target) + r.sharedBands, r.directDifficulty);
  assert.equal(cost(r.initial, r.target), r.spent);
  assert(range(r.initial, r.spent) >= r.target);
  return { ...r, sharedDemand: r.sharedBands === 0 ? 'none' :
    r.sharedBands === 3 ? 'area D3' : 'area D3 plus independent duration D1' };
});
assert.equal(rows.length, 264);
assert.deepEqual([0, 1, 2, 3, 4, 5].map(k => range(25, k)), [25, 30, 35, 40, 45, 50]);
assert.deepEqual([50, 100, 200, 400].map(t => cost(25, t)), [5, 15, 35, 75]);

// Fictional fixtures: incoming impact defense and early carrier disruption are distinct.
function probe({ earned, original = 25, target = 50, permission = true,
  hardReach = Infinity, carrierIntact = true, earlyCancellation = 0,
  targetDefense = 0, mitigation = 0, dependentPayload = 0 }) {
  const available = Math.max(0, earned - earlyCancellation);
  const spent = cost(original, target);
  const feasible = permission && carrierIntact && target <= hardReach;
  const reached = feasible && available >= spent + 1;
  const impactBeforeDefense = reached ? available - spent : 0;
  return { available, needed: spent, reached,
    impactBeforeDefense,
    netImpact: Math.max(0, impactBeforeDefense - targetDefense - mitigation),
    payloadArrives: reached ? dependentPayload : 0 };
}
const fixtures = {
  sixEffects: probe({ earned: 6 }),
  fiveEffects: probe({ earned: 5 }),
  blockedAtTarget: probe({ earned: 6, targetDefense: 1 }),
  earlyCarrierCancellation: probe({ earned: 6, earlyCancellation: 2, dependentPayload: 4 }),
  brokenCarrier: probe({ earned: 20, carrierIntact: false, dependentPayload: 4 }),
  hardReachLimit: probe({ earned: 20, hardReach: 40 }),
  absentAccess: probe({ earned: 20, permission: false }),
  sameFormOpposition: probe({ earned: 8, targetDefense: 1, mitigation: 1 }),
  successfulCarrier: probe({ earned: 6, dependentPayload: 4 }),
  compatibleSharedCarrier: probe({ earned: 3 + 3 }),
};
assert.equal(fixtures.sixEffects.netImpact, 1);
assert.equal(fixtures.fiveEffects.reached, false);
assert.equal(range(25, 4), 45);
assert.equal(fixtures.blockedAtTarget.reached, true);
assert.equal(fixtures.blockedAtTarget.netImpact, 0);
assert.equal(fixtures.earlyCarrierCancellation.payloadArrives, 0);
assert.equal(fixtures.brokenCarrier.reached, false);
assert.equal(fixtures.hardReachLimit.reached, false);
assert.equal(fixtures.absentAccess.reached, false);
assert.equal(fixtures.sameFormOpposition.netImpact, 1);
assert.equal(fixtures.successfulCarrier.payloadArrives, 4);
assert.equal(fixtures.compatibleSharedCarrier.reached, true);
for (const f of Object.values(fixtures)) {
  if (f.reached) assert.equal(f.needed + f.impactBeforeDefense, f.available);
  else assert.equal(f.netImpact, 0);
}

fs.writeFileSync(path.join(__dirname, 'lens-distance-twenty-percent-extension-test-v0.1.results.json'),
  JSON.stringify({ status: 'Comparison only; no distance conversion, ceiling, or range lookup adopted.',
    controls: '25/50/100 increment doubling references; inclusive upper bounds; identical doubling arithmetic reused from area. Full Function, matched Scale, defined Access, no equipment/context/spending in probability rows. Existing truncated natural-01 distribution retained. Intended endpoint and reliance on variable reach explicit, not concealed as a nearer target. Fictional opposition fixtures are not a universal ordering rule.',
    rows, fixtures }, null, 2) + '\n');
console.log('PASS: reused 264 verified doubling comparisons; checked distance mapping and 10 reach, dependency, opposition, and permission fixtures.');
for (const raw of ['75.9375', '640']) {
  const r = rows.find(r => r.raw === raw && r.initial === 25 && r.target === 50 && r.sharedBands === 0);
  console.log(JSON.stringify({ raw, extension: r.expansion, direct: r.direct }));
}
