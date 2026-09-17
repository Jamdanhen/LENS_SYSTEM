const assert = require('node:assert/strict');

const profile = { defaultSeconds: 6 };
const effects = [
  { name: 'Ordinary ward', increment: profile.defaultSeconds },
  { name: 'Enduring ward', increment: 3600 },
];
const scenes = ['voyage summary', 'conversation', 'combat'];
const requests = [0, 6, 600, 3600, 36000, 86400];
const durationStep = (seconds, increment) => {
  if (seconds === 0) return 0;
  for (let step = 1; step <= 10; step++) {
    if (seconds <= increment * 10 ** (step - 1)) return step;
  }
  return null;
};
const success = (raw, step) => step === 0 || step === null ? null
  : Math.max(1, Math.min(99, Math.floor(raw * 0.98 * 0.6 ** (step - 1))));
const rows = requests.map(seconds => ({ seconds,
  effects: effects.map(effect => {
    const step = durationStep(seconds, effect.increment);
    return { name: effect.name, step, chanceAtRaw160: success(160, step) };
  }),
}));
assert.deepEqual(rows.map(row => row.effects.map(effect => effect.step)),
  [[0, 0], [1, 1], [3, 1], [4, 1], [5, 2], [6, 3]]);

// Scene labels are deliberately not inputs to a duration challenge.
let sceneChecks = 0;
for (const effect of effects) for (const seconds of requests) {
  const expected = durationStep(seconds, effect.increment);
  for (const scene of scenes) {
    assert.equal(durationStep(seconds, effect.increment), expected, scene);
    sceneChecks++;
  }
  assert.ok(durationStep(seconds, effects[1].increment)
    <= durationStep(seconds, effects[0].increment));
}
for (const effect of effects) assert.equal(durationStep(Infinity, effect.increment), null);
const expiresAt = 0 + 3600;
assert.equal(expiresAt - 1800, 1800);
assert.equal(expiresAt - 3600, 0);
assert.equal(durationStep(3600, effects[1].increment), 1);

console.log(JSON.stringify({
  status: 'Assertions passed; candidates only.', rows, sceneChecks,
  assumptions: 'One Profile. Same ward protection, footprint, range, creation method, raw Expression and independent persistence; only the established duration reference differs. Scene changes no underlying facts. Strict first sufficient x10 reference is a fixture. Step 0 means no added duration modifier, not automatic success. Probabilities isolate duration and do not combine other Difficulty components. No new rating or prices.',
}, null, 2));
