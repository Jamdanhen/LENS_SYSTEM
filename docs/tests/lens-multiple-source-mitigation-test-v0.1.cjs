const assert = require('node:assert/strict');

// Effect amounts are already earned; mitigation is a distinct established function.
const mitigate = (amount, strength) => Math.max(0, amount - strength);
const rows = [0, 1, 2, 4, 7].map(strength => ({
  mitigation: strength,
  separate: mitigate(4, strength) + mitigate(3, strength),
  combined: mitigate(7, strength),
}));
assert.deepEqual(rows.map(row => row.separate), [7, 5, 3, 0, 0]);
assert.deepEqual(rows.map(row => row.combined), [7, 6, 5, 3, 0]);

const afterDefense = mitigate(Math.max(0, 7 - 3), 2);
assert.equal(afterDefense, 2);

// One delivery carries different forms; a matching lens only stops its stated form.
const mixed = { burning: mitigate(4, 2), impact: 3 };
assert.deepEqual(mixed, { burning: 2, impact: 3 });
const deliveryAndFire = { burning: mitigate(4, 2), delivery: 3 };
assert.equal(deliveryAndFire.burning, 2);
assert.equal(deliveryAndFire.delivery, 3);

// Independent targets each retain their own protection. Distribution is stipulated.
const twoTargets = [mitigate(4, 2), mitigate(3, 2)];
assert.deepEqual(twoTargets, [2, 1]);

console.log(JSON.stringify({
  status: 'All assertions passed; mitigation-scope candidate, not adopted.',
  rows, afterDefense, mixed, deliveryAndFire, twoTargets,
  scope: 'Same action investment. Genuine shared effect versus separate applications.',
  exclusions: 'No new armor values, mixed-form general mitigation allocation, or combat pacing.',
}, null, 2));
