const assert = require('node:assert/strict');
const multiplier = d => 0.98 * 0.6 ** (d - 1);
const finalRating = (raw, d) => Math.floor(raw * multiplier(d));
const probability = final => Math.max(1, Math.min(99, final)) / 100;
const ordinaryEffects = (final, roll) => roll <= final
  ? 1 + Math.floor((final - roll) / 10) : 0;
const spans = ['Two rounds', 'One hour', 'No inherent expiration'];
const models = {shallow: [1, 2, 3], wider: [1, 3, 5]};
const rows = Object.entries(models).flatMap(([model, difficulties]) =>
  [80, 160, 320, 640].map(raw => ({model, raw,
    cases: difficulties.map((difficulty, i) => {
      const final = finalRating(raw, difficulty);
      let successes = 1; // Natural 01 succeeds for these explicitly permitted attempts.
      for (let roll = 2; roll <= 99; roll++) if (roll <= final) successes++;
      // Natural 00 fails; continuation affects complications, not success count.
      assert.ok(Math.abs(successes / 100 - probability(final)) < 1e-12);
      return {span: spans[i], difficulty, multiplier: multiplier(difficulty),
        finalRating: final, successPercent: successes,
        effectsAtOrdinary40: ordinaryEffects(final, 40)};
    })})));
assert.deepEqual(rows.find(r => r.model === 'shallow' && r.raw === 320)
  .cases.map(c => c.successPercent), [99, 99, 99]);
assert.deepEqual(rows.find(r => r.model === 'wider' && r.raw === 160)
  .cases.map(c => c.successPercent), [99, 56, 20]);
assert.deepEqual(rows.find(r => r.model === 'wider' && r.raw === 320)
  .cases.map(c => c.successPercent), [99, 99, 40]);
let scanCases = 0;
for (let raw = 0; raw <= 640; raw++) {
  for (const difficulties of Object.values(models)) {
    let previous = 1;
    for (const d of difficulties) {
      const p = probability(finalRating(raw, d));
      assert.ok(p <= previous);
      previous = p;
      let actual = 1;
      for (let roll = 2; roll <= 99; roll++) if (roll <= finalRating(raw, d)) actual++;
      assert.ok(Math.abs(p - actual / 100) < 1e-12);
      scanCases++;
    }
  }
}
console.log(JSON.stringify({
  status: 'Difficulty sensitivity fixtures, not adopted duration bands.',
  assumptions: 'Same stationary non-sentient phantasm, same size/fidelity/location/form. All three durations permitted. Only independent persistence varies. Raw is the complete Expression before Difficulty; no opposition or paid spending. Difficulties are final comparison values, not additive duration fees.',
  rows, checkedCases: scanCases,
}, null, 2));
