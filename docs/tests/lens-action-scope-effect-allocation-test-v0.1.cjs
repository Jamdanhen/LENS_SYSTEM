const assert = require('node:assert/strict');

function resolve(final, completedRoll, special = null) {
  const success = special === '01' || (special !== '00' && completedRoll <= final);
  return {
    success,
    effects: success ? 1 + Math.floor(Math.max(0, final - completedRoll) / 10) : 0,
  };
}
const surviving = (effects, cancellation = 0, matchingMitigation = 0) =>
  Math.max(0, Math.max(0, effects - cancellation) - matchingMitigation);

// These allocations are candidate accounting illustrations, not Condition prices.
function allocated(levels, assignments) {
  const spent = assignments.reduce((sum, row) => sum + row.levels, 0);
  return { levels, spent, conserved: spent <= levels, assignments };
}
const marginal = resolve(80, 79);
const strong = resolve(80, 50);
assert.equal(marginal.effects, 1);
assert.equal(strong.effects, 4);

const ordinaryAttacks = ['Gunshot', 'Wave impact'].map(name => ({
  name, rolls: 1, generated: marginal.effects,
  // No extra roll or payment solely for ordinary delivery within the attack.
  survivingHarm: surviving(marginal.effects),
  afterOneCancellation: surviving(marginal.effects, 1),
}));
assert.ok(ordinaryAttacks.every(row => row.survivingHarm === 1));
assert.ok(ordinaryAttacks.every(row => row.afterOneCancellation === 0));

const creatureContribution = resolve(60, 35);
assert.equal(creatureContribution.effects, 3);
const singleHarm = allocated(3, [{ form: 'Declared biting-and-stinging harm', levels: 3 }]);
const splitHarm = allocated(3, [
  { form: 'Wounding', levels: 1 },
  { form: 'Poisoning', levels: 2 },
]);
const duplicatedHarm = allocated(3, [
  { form: 'Wounding', levels: 3 },
  { form: 'Poisoning', levels: 3 },
]);
assert.equal(singleHarm.conserved, true);
assert.equal(splitHarm.conserved, true);
assert.equal(duplicatedHarm.conserved, false);

// A genuinely reinforced shared harm application retains both earned sources.
const sharedHarm = strong.effects + creatureContribution.effects;
assert.equal(sharedHarm, 7);
assert.equal(surviving(sharedHarm, 2, 1), 4);

// Distinct forms encounter only matching protection, not an invented generic pool.
const typedApplications = [
  { form: 'Wave impact', earned: 4, matchingMitigation: 2 },
  { form: 'Wounding', earned: 1, matchingMitigation: 0 },
  { form: 'Poisoning', earned: 2, matchingMitigation: 1 },
];
assert.equal(typedApplications.reduce((sum, x) => sum + x.earned, 0), 7);
assert.equal(typedApplications.reduce((sum, x) => sum + surviving(x.earned, 0, x.matchingMitigation), 0), 4);

const dependencyCases = [
  { wave: 4, creatures: 3, deliveryAvailable: true, atTarget: { wave: 4, creatures: 3 } },
  { wave: 4, creatures: 0, deliveryAvailable: true, atTarget: { wave: 4, creatures: 0 } },
  // In this specific fixture the creatures cannot reach the target independently.
  { wave: 0, creatures: 3, deliveryAvailable: false, atTarget: { wave: 0, creatures: 0 } },
];
for (const row of dependencyCases) {
  assert.equal(row.atTarget.wave, row.wave);
  assert.equal(row.atTarget.creatures, row.deliveryAvailable ? row.creatures : 0);
}

const areaContribution = { generated: 3, baselineAccomplishment: 1, additional: 2 };
assert.equal(areaContribution.baselineAccomplishment + areaContribution.additional, areaContribution.generated);

console.log(JSON.stringify({
  status: 'All arithmetic assertions passed. Scope and split allocations remain tested interpretations/candidates, not adopted new permissions.',
  ordinaryAttacks, strong, creatureContribution,
  singleHarm, splitHarm, duplicatedHarm,
  sharedHarm, typedApplications, dependencyCases, areaContribution,
  exclusions: 'No new Conditions, per-Condition prices, Effects-to-area/distance conversion, automatic recurring harm, or independent delivery roll.',
}, null, 2));
