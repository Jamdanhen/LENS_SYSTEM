const assert = require('node:assert/strict');
const limits = Array.from({ length: 10 }, (_, i) => 25 * 2 ** i);
function rank(meters) {
  assert(meters >= 0);
  const i = limits.findIndex(limit => meters <= limit);
  return i < 0 ? null : i + 1;
}
function rate(raw, meters, support = 0, otherR = 0, dissonance = 0, actions = 1) {
  const d = rank(meters);
  if (d === null) return null;
  const rangeR = d >= 2 ? support : 0;
  return Math.floor(raw * 0.98 * 0.6 ** (d - 1)
    * Math.max(0, 1 + rangeR + otherR - dissonance) / actions);
}
function ordinaryEffects(final, roll = 30) {
  assert(roll >= 2 && roll <= 99);
  return roll <= final ? 1 + Math.floor((final - roll) / 10) : 0;
}
const matrix = [20, 80, 100, 180.280512, 320].map(raw => ({ raw,
  distances: [100, 200, 400].map(meters => ({ meters,
    cases: [0, 0.3, 0.6].map(support => {
      const final = rate(raw, meters, support);
      const effects = ordinaryEffects(final);
      return { support, final,
        individualSuccessPercent: Math.max(1, Math.min(99, final)),
        effectsOn30: effects,
        afterDefense2AndMitigation1: Math.max(0, effects - 2 - 1),
      };
    }),
  })),
}));
const boundaries = [0, 0.3, 0.6].map(support => ({ support,
  cases: [25, 50, 100, 200, 400].map(edge => ({ edge,
    at: rate(100, edge, support), after: rate(100, edge + 0.01, support),
  })),
}));
const contextualOnset = [0, 0.1, 0.2, 0.3, 0.6, 1].map(dissonance => ({
  dissonance, short: rate(100, 25, 0.6, 0, dissonance),
  medium: rate(100, 26, 0.6, 0, dissonance),
}));
const mixed = [100, 200, 400].map(meters => ({ meters,
  strong: rate(180.280512, meters, 0.6),
  strongPlusPrep02: rate(180.280512, meters, 0.6, 0.2),
  strongWithDissonance03: rate(180.280512, meters, 0.6, 0, 0.3),
  strongTwoActions: rate(180.280512, meters, 0.6, 0, 0, 2),
}));
assert.deepEqual(matrix[3].distances.map(row => row.cases.map(c => c.final)),
  [[63, 82, 101], [38, 49, 61], [22, 29, 36]]);
assert.deepEqual(matrix[3].distances.map(row => row.cases.map(c => c.effectsOn30)),
  [[4, 6, 8], [1, 2, 4], [0, 0, 1]]);
assert.deepEqual(matrix[2].distances.map(row => row.cases.map(c => c.final)),
  [[35, 45, 56], [21, 27, 33], [12, 16, 20]]);
assert.equal(matrix[3].distances[0].cases[2].individualSuccessPercent, 99);
assert.deepEqual(contextualOnset[3], { dissonance: 0.3, short: 68, medium: 76 });
assert.deepEqual(boundaries[2].cases[0], { edge: 25, at: 98, after: 94 });
assert.equal(rate(100, 12800.01), null);
assert.equal(rate(100, 100, 0.6, 0, 1.6), 0);
assert.equal(mixed[2].strongTwoActions, 18);
for (const row of boundaries) for (const edge of row.cases) assert(edge.after <= edge.at);
console.log(JSON.stringify({ status: 'All assertions passed; provisional property fixtures only.',
  note: 'Permitted attempts only. Success percentages include 01/00 outcome rules but no paid reroll. Effects are deterministic ordinary-roll probes, not average output. No opposition probabilities are implied.',
  matrix, boundaries, contextualOnset, mixed }, null, 2));
