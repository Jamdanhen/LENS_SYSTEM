const assert = require('node:assert/strict');

// Change only the distance anchor; retain the previous rounded band spacing.
const steps = [1, 2, 5, 10, 20, 50, 100, 200, 500, 1000];
const core = 8 * 1.7 * 1.9 * 1.9 * 1.7 * 1.8;
const methods = [
  { name: 'knife', equipment: 1.05, anchor: 10 },
  { name: 'handgun', equipment: 1.20, anchor: 20 },
  { name: 'rifle', equipment: 1.25, anchor: 80 },
];
function rankAt(distance, anchor) {
  assert(distance >= 0 && anchor > 0);
  const index = steps.findIndex(step => distance <= anchor * step);
  return index < 0 ? null : index + 1;
}
function rating(raw, distance, anchor, context = 1, actions = 1) {
  const rank = rankAt(distance, anchor);
  if (rank === null) return null;
  return Math.floor(raw * 0.98 * 0.6 ** (rank - 1)
    * Math.max(0, context) / actions);
}
// Ordinary rolls only; special continuations are outside this deterministic probe.
function effects(final, roll) {
  assert(roll >= 2 && roll <= 99);
  return roll <= final ? 1 + Math.floor((final - roll) / 10) : 0;
}
const matrix = [10, 20, 40, 50, 80, 100, 160, 200, 500].map(meters => ({
  meters,
  methods: methods.map(method => ({ name: method.name,
    sharedD: rankAt(meters, 10), relativeD: rankAt(meters, method.anchor),
    sharedRating: rating(core * method.equipment, meters, 10),
    relativeRating: rating(core * method.equipment, meters, method.anchor),
  })),
}));
const boundaries = methods.map(method => ({ name: method.name,
  edges: [1, 2, 5].map(step => ({ meters: method.anchor * step,
    at: rating(core * method.equipment, method.anchor * step, method.anchor),
    beyond: rating(core * method.equipment, method.anchor * step + 1, method.anchor),
  })),
}));
const output = [20, 80, core * 1.25, 320 * 1.25].map(raw => {
  const shared = rating(raw, 50, 10);
  const relative = rating(raw, 50, 80);
  const sharedEffects = effects(shared, 30);
  const relativeEffects = effects(relative, 30);
  return { raw, shared, relative, ordinaryRoll: 30, sharedEffects, relativeEffects,
    afterDefense4Mitigation2: {
      shared: Math.max(0, sharedEffects - 4 - 2),
      relative: Math.max(0, relativeEffects - 4 - 2),
    },
  };
});
const contexts = [0.6, 1, 1.2].map(context => ({ context,
  shared: rating(core * 1.25, 50, 10, context),
  relative: rating(core * 1.25, 50, 80, context),
  sharedTwoActions: rating(core * 1.25, 50, 10, context, 2),
  relativeTwoActions: rating(core * 1.25, 50, 80, context, 2),
}));
assert.equal(rankAt(10, 10), 1);
assert.equal(rankAt(10.01, 10), 2);
assert.equal(rankAt(20, 20), 1);
assert.equal(rankAt(20.01, 20), 2);
assert.equal(rankAt(160, 80), 2);
assert.equal(rankAt(160.01, 80), 3);
assert.equal(rankAt(10001, 10), null);
for (const row of matrix) {
  const knife = row.methods[0];
  assert.equal(knife.sharedRating, knife.relativeRating);
  for (const result of row.methods) assert(result.relativeRating >= result.sharedRating);
}
const at50 = matrix.find(row => row.meters === 50).methods;
assert.deepEqual(at50.map(row => [row.sharedRating, row.relativeRating]),
  [[55, 55], [63, 63], [66, 184]]);
assert.deepEqual(output[2], { raw: core * 1.25, shared: 66, relative: 184,
  ordinaryRoll: 30, sharedEffects: 4, relativeEffects: 16,
  afterDefense4Mitigation2: { shared: 0, relative: 10 } });
assert.equal(contexts[1].relativeTwoActions, 92);
for (const anchor of [10, 20, 80]) {
  for (let i = 0; i < steps.length; i++) {
    assert.equal(rankAt(anchor * steps[i], anchor), i + 1);
  }
}
console.log(JSON.stringify({ status: 'All assertions passed; candidate only.',
  warning: 'Ratings require actual reach and Access. BRP base ranges are borrowed test anchors, not LENS equipment rules or maximum ranges. Band spacing remains the LENS candidate, not BRP linear increments.',
  core, matrix, boundaries, output, contexts }, null, 2));
