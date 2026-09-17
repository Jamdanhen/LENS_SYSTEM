const assert = require('node:assert/strict');

// Inputs are already earned Effects, including all pre-roll modifiers.
function oppose(output, defense) {
  return {
    remainder: Math.max(0, output - defense),
    potentialCounter: Math.min(1, Math.max(0, defense - output)),
  };
}

const rows = [];
for (const defense of [0, 3, 7, 9]) {
  const result = oppose(7, defense);
  assert.equal(result.remainder, [7, 4, 0, 0][[0, 3, 7, 9].indexOf(defense)]);
  rows.push({ target: 'Combined compatible output 4 + 3', defense, ...result });
}
assert.equal(oppose(7, 9).potentialCounter, 1);

for (const defense of [1, 3, 5]) {
  const component = oppose(3, defense);
  const result = { target: 'B only; A remains independently viable', defense,
    a: 4, b: component.remainder, total: 4 + component.remainder,
    potentialCounter: component.potentialCounter };
  assert.equal(result.total, defense === 1 ? 6 : 4);
  rows.push(result);
}

// A single three-Effect defense may not be copied across both contributors.
for (let againstA = 0; againstA <= 3; againstA++) {
  const againstB = 3 - againstA;
  const remaining = oppose(4, againstA).remainder + oppose(3, againstB).remainder;
  assert.equal(remaining, 4);
}
const separateExchanges = oppose(4, 3).remainder + oppose(3, 3).remainder;
assert.equal(separateExchanges, 1);

// These inputs stipulate established fictional states, not how to earn disruption.
function delivery({ linkIntact, deliveryEffects }) {
  if (!linkIntact || deliveryEffects === 0) {
    return { remoteBurning: 0, independentlyViableLocalBurning: 4 };
  }
  return { remoteBurning: 'Reassess surviving delivery against the declared route',
    generatedBurning: 4 };
}
assert.equal(delivery({ linkIntact: true, deliveryEffects: 0 }).remoteBurning, 0);
assert.equal(delivery({ linkIntact: false, deliveryEffects: 3 }).remoteBurning, 0);
assert.equal(delivery({ linkIntact: false, deliveryEffects: 3 })
  .independentlyViableLocalBurning, 4);
assert.equal(typeof delivery({ linkIntact: true, deliveryEffects: 2 }).remoteBurning, 'string');

function launchSurvives({ released, sourceDisabled, requiresOngoingSource }) {
  return !sourceDisabled || (released && !requiresOngoingSource);
}
assert.equal(launchSurvives({ released: false, sourceDisabled: true,
  requiresOngoingSource: false }), false);
assert.equal(launchSurvives({ released: true, sourceDisabled: true,
  requiresOngoingSource: false }), true);
assert.equal(launchSurvives({ released: true, sourceDisabled: true,
  requiresOngoingSource: true }), false);

console.log(JSON.stringify({ status: 'All assertions passed', rows,
  allocationChecks: 4,
  separateExchangesControl: separateExchanges,
  scope: 'Candidate arithmetic and stipulated dependency/timing fixtures; not combat pacing.',
  unresolved: 'Connection resistance, partial-delivery valuation, and mitigation frequency.',
}, null, 2));
