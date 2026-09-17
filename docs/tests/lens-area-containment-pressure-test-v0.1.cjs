'use strict';

const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const { effectDistribution } = require('./lens-character-based-encounter-pacing-v0.1.cjs');
const prior = JSON.parse(fs.readFileSync(path.join(__dirname, 'lens-covered-area-twenty-percent-growth-test-v0.1.results.json'), 'utf8'));
const effects = (rating, roll) => roll <= rating ? 1 + Math.floor((rating - roll) / 10) : 0;

// Sensitivity probes, not an adopted power-density rating or user-specified values.
const rows = [];
for (const raw of ['75.9375', '302.33088', '640']) {
  for (const sharedBands of [0, 3, 4]) for (const area of [25, 50, 100]) {
    const source = prior.rows.find(r => r.raw === raw && r.sharedBands === sharedBands && r.initial === area);
    assert(source);
    for (const allowancePer25 of [5, 10, 20]) {
      const allowance = allowancePer25 * area / 25;
      let success = 0, overload = 0;
      for (const [count, probability] of effectDistribution(source.smallRating)) {
        if (count > 0) success += probability;
        if (count > allowance) overload += probability;
      }
      const generatedAt40 = effects(source.smallRating, 40);
      const row = { raw, sharedBands, area, difficulty: source.smallDifficulty,
        finalRating: source.smallRating, allowancePer25, allowance,
        generatedAt40, excessAt40: Math.max(0, generatedAt40 - allowance),
        successProbability: success, overloadProbability: overload,
        overloadGivenSuccess: overload / success };
      assert(row.overloadProbability <= row.successProbability);
      assert.equal(Math.min(generatedAt40, allowance) + row.excessAt40, generatedAt40);
      rows.push(row);
    }
  }
}
assert.equal(rows.length, 81);
const example = rows.filter(r => r.raw === '640' && r.sharedBands === 0 && r.allowancePer25 === 10);
assert.deepEqual(example.map(r => r.generatedAt40), [59, 34, 19]);
assert.deepEqual(example.map(r => r.excessAt40), [49, 14, 0]);

// Same unrounded output from different allocations; the total alone cannot identify its source.
const factorBase = 16n * 18n ** 3n;
const powerRoute = factorBase * 20n * 11n;
const precisionRoute = factorBase * 11n * 20n;
assert.equal(powerRoute, precisionRoute);
const matchedRating = Number(powerRoute * 98n / (100000n * 100n));
assert.equal(matchedRating, 201);
assert.equal(effects(matchedRating, 40), 17);
assert.deepEqual([70, 40, 2].map(roll => effects(74, roll)), [1, 4, 8]);

const output = {
  status: 'Exploratory containment test only. No threshold, forced-spill rule, ceiling, or power density adopted.',
  assumptions: 'Generated Effects interpreted as emitted power only for testing this candidate. Allowances 5/10/20 per 25 covered-area units are assistant-selected sensitivity probes, not existing doctrine or user-proposed values. Exceeding allowance flags containment pressure, not guaranteed outward coverage, extra damage, or a fixed spill geometry. Existing Effects and successful declared-area application remain unchanged outside this experiment.',
  omittedProbability: 1e-12,
  rows,
  identicalOutputCounterexample: { raw: '205.2864', finalRating: matchedRating,
    first: 'A8 D8 T8 F8 S8 Precision1 Axis10', second: 'A8 D8 T8 F8 S8 Precision10 Axis1',
    effectsAt40: 17 },
};
fs.writeFileSync(path.join(__dirname, 'lens-area-containment-pressure-test-v0.1.results.json'), JSON.stringify(output, null, 2) + '\n');
console.table(rows.filter(r => r.sharedBands === 0 && r.allowancePer25 === 10).map(r => ({
  raw: r.raw, area: r.area, final: r.finalRating, generated40: r.generatedAt40,
  allowance: r.allowance, excess40: r.excessAt40,
  overloadPct: +(100 * r.overloadProbability).toFixed(6),
})));
console.log('Sensitivity at raw640, roll40:');
console.table(rows.filter(r => r.sharedBands === 0 && r.raw === '640').map(r => ({
  area: r.area, allowancePer25: r.allowancePer25, generated: r.generatedAt40, excess: r.excessAt40,
})));
console.log('PASS: 81 sensitivity probes, output accounting, outcome probabilities, better-roll pressure, and equal-output/different-source counterexample.');
