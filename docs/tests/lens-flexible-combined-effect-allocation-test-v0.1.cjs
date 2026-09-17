'use strict';

const assert = require('node:assert/strict');
const { resolve } = require('./lens-character-based-encounter-pacing-v0.1.cjs');
const result = (rating, roll) => resolve(rating, () => roll);
const wave = result(96, 43);
const partner = result(78, 43);
const wind = result(72, 43);
assert.deepEqual([wave.effects, partner.effects, wind.effects], [6, 4, 3]);

// These allowed uses represent the agreed fiction of these fixtures, not a universal action map.
function allocate(source, available, amounts, supported) {
  assert(Object.keys(amounts).every(use => supported.includes(use)), 'Unsupported fixture use');
  assert(Object.values(amounts).every(n => Number.isInteger(n) && n >= 0));
  assert(Object.values(amounts).reduce((a, b) => a + b, 0) <= available, 'Effect counted twice');
  let index = 0;
  return Object.entries(amounts).flatMap(([use, count]) => Array.from({ length: count }, () => ({
    id: `${source}-${++index}`, source, use,
  })));
}
const waveUses = ['impact', 'sweeping', 'obscuring', 'areaGrowth'];
const balanced = allocate('wave', wave.effects, { impact: 3, sweeping: 2, obscuring: 1 }, waveUses);
const impactOnly = allocate('wave', wave.effects, { impact: 6 }, waveUses);
const expansion = allocate('wave', wave.effects, { impact: 3, obscuring: 1, areaGrowth: 2 }, waveUses);
const partnerEffects = allocate('partner', partner.effects, { stinging: 4 }, ['stinging']);
assert.equal(balanced.length, 6);
assert.equal(impactOnly.length, 6);
assert.equal(expansion.length, 6);
assert.throws(() => allocate('wave', 6, { impact: 6, obscuring: 1 }, waveUses));
assert.throws(() => allocate('wave', 6, { freezing: 1 }, waveUses));

const count = tokens => Object.fromEntries([...new Set(tokens.map(t => t.use))].map(use => [use, tokens.filter(t => t.use === use).length]));
function partition(tokens, cancelledIds, mitigatedIds) {
  const all = new Set(tokens.map(t => t.id));
  assert.equal(all.size, tokens.length);
  const cancelled = new Set(cancelledIds), mitigated = new Set(mitigatedIds);
  assert(cancelledIds.every(id => all.has(id)));
  assert(mitigatedIds.every(id => all.has(id) && !cancelled.has(id)));
  const applied = tokens.filter(t => !cancelled.has(t.id) && !mitigated.has(t.id));
  assert.equal(applied.length + cancelled.size + mitigated.size, tokens.length);
  return { applied: count(applied), appliedCount: applied.length,
    cancelledCount: cancelled.size, mitigatedCount: mitigated.size };
}
const incoming = [...balanced, ...partnerEffects];
const guard = partition(incoming, ['partner-1', 'partner-2'], ['wave-1']);
assert.deepEqual(guard.applied, { impact: 2, sweeping: 2, obscuring: 1, stinging: 2 });
assert.equal(guard.appliedCount, 7);
assert.throws(() => partition(incoming, ['partner-1'], ['partner-1']));

function atTarget(waveSucceeded, partnerSucceeded, waveMeansRemain = true) {
  if (!waveSucceeded || !waveMeansRemain) return [];
  return [...balanced, ...(partnerSucceeded ? partnerEffects : [])];
}
assert.equal(atTarget(true, true).length, 10);
assert.equal(atTarget(true, false).length, 6);
assert.equal(atTarget(false, true).length, 0);
assert.equal(atTarget(true, true, false).length, 0);
// Target delivery failure does not assert that the partner's creatures vanish at their source.
assert.equal(partnerEffects.length, 4);

const fire = allocate('fire', 4, { burning: 4 }, ['burning']);
const windEffects = allocate('wind', wind.effects, { areaGrowth: 1, burningEnhancement: 1, obscuring: 1 },
  ['areaGrowth', 'burningEnhancement', 'obscuring']);
const burning = fire.length + windEffects.filter(t => t.use === 'burningEnhancement').length;
assert.equal(burning, 5);
assert.equal(fire.length + windEffects.length, 7);
assert.equal(burning + 1 + 1, 7);
const noFire = []; // This fixture has no independent fuel, flame, smoke, or embers after fire is removed.
assert.equal(noFire.length, 0);

console.log(JSON.stringify({
  status: 'Worked fixture test, not universal Condition costs or automatic allocation permissions.',
  waveRoll: wave, partnerRoll: partner, waveBalanced: count(balanced),
  waveImpactOnly: count(impactOnly), waveWithGrowth: count(expansion),
  combinedIncoming: count(incoming), guardOutcome: guard,
  survivingWaveWithoutPartner: count(atTarget(true, false)),
  targetOutputWithoutCarrier: count(atTarget(false, true)),
  windAndFire: { burning: 5, areaGrowthAllocation: 1, obscuringAllocation: 1 },
}, null, 2));
console.log('PASS: roll-to-Effect arithmetic, alternate supported allocations, no double spending, bounded opposition/mitigation, and delivery dependencies.');
