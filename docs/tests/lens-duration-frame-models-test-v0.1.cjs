const assert = require('node:assert/strict');

const hour = 3600;
const year = 365 * 86400;
const units = { personal: 6, voyage: hour, divine: year };
const steps = Array.from({ length: 10 }, (_, index) => 10 ** index);
const stepFor = (seconds, unit) => {
  if (seconds === 0) return 0;
  const index = steps.findIndex(count => unit * count >= seconds);
  return index === -1 ? null : index + 1;
};
const success = (raw, step) => Math.max(1, Math.min(99,
  Math.floor(raw * 0.98 * 0.6 ** (step - 1))));

// These models differ only in who supplies the time reference, not roll rules.
const selectUnit = (model, effectUnit, sceneUnit) => {
  if (model === 'fixed') return units.personal;
  if (model === 'scene') return sceneUnit;
  if (model === 'permission') return effectUnit;
  throw new Error('Unknown model');
};
const models = ['fixed', 'scene', 'permission'];
const requests = [
  { name: 'Ordinary ward for an hour in a brief scene', duration: hour,
    effect: units.personal, scene: units.personal },
  { name: 'Same ordinary ward in a voyage scene', duration: hour,
    effect: units.personal, scene: units.voyage },
  { name: 'Voyage-capable ward for an hour during boarding combat', duration: hour,
    effect: units.voyage, scene: units.personal },
  { name: 'Year-scale blessing for one year', duration: year,
    effect: units.divine, scene: units.divine },
  { name: 'Same year-scale blessing in a brief audience', duration: year,
    effect: units.divine, scene: units.personal },
  { name: 'Personal-duration illusion used by a god in an era scene', duration: year,
    effect: units.personal, scene: units.divine },
  { name: 'Voyage-capable ward extended for one year', duration: year,
    effect: units.voyage, scene: units.voyage },
];
const results = requests.map(request => ({
  name: request.name,
  models: Object.fromEntries(models.map(model => {
    const step = stepFor(request.duration,
      selectUnit(model, request.effect, request.scene));
    return [model, { step, chanceAtRaw160: success(160, step) }];
  })),
}));
assert.equal(results[0].models.scene.step, 4);
assert.equal(results[1].models.scene.step, 1);
assert.equal(results[0].models.permission.step, 4);
assert.equal(results[1].models.permission.step, 4);
assert.equal(results[2].models.permission.step, 1);
assert.equal(results[2].models.scene.step, 4);
assert.equal(results[3].models.permission.step, 1);
assert.equal(results[4].models.permission.step, 1);
assert.equal(results[4].models.scene.step, 8);
assert.equal(results[5].models.permission.step, 8);
assert.equal(results[5].models.scene.step, 1);
assert.equal(results[6].models.permission.step, 5);

let invarianceChecks = 0;
for (const unit of Object.values(units)) {
  assert.equal(stepFor(0, unit), 0);
  assert.equal(stepFor(Infinity, unit), null);
  for (let i = 0; i < steps.length; i++) {
    assert.equal(stepFor(unit * steps[i], unit), i + 1);
    if (i < steps.length - 1) {
      assert.equal(stepFor(unit * steps[i] + 1, unit), i + 2);
    }
    for (const scene of Object.values(units)) {
      assert.equal(selectUnit('permission', unit, scene), unit);
      invarianceChecks++;
    }
  }
}
// A completed duration is an elapsed-time commitment, not a moving scene label.
const expiration = (start, unit, step) => start + unit * steps[step - 1];
assert.equal(expiration(0, units.personal, 4), 6000);
assert.equal(expiration(0, units.voyage, 1), 3600);

console.log(JSON.stringify({
  status: 'Candidate comparison only; assertions passed.',
  assumptions: '6-second, 1-hour and 1-year increments are fixtures, not adopted packages. Exact x10 finite progression; first sufficient step for comparison. Identical raw Expression 160 isolates duration Difficulty, not complete multi-component Difficulty or package balance. Instantaneous has no added duration contribution; infinity is not a finite step.',
  durationReferences: [1, 2, 3, 4].map(step => ({ step,
    increments: steps[step - 1],
    personalSeconds: units.personal * steps[step - 1],
    voyageHours: steps[step - 1], divineYears: steps[step - 1] })),
  results, invarianceChecks,
}, null, 2));
