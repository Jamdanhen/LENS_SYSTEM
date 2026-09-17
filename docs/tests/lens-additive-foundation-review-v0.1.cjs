'use strict';

const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const crypto = require('node:crypto');
const { effectDistribution, trial } = require('./lens-character-based-encounter-pacing-v0.1.cjs');
const inputPath = path.join(__dirname, 'lens-low-rating-build-trace-v0.1.results.json');
const bytes = fs.readFileSync(inputPath);
const source = JSON.parse(bytes);
const models = ['current', 'additive'];
const sum = object => Object.values(object).reduce((a, b) => a + b, 0);
const children = {
  Might: ['Strength', 'Toughness', 'Resistance', 'Vigor', 'Resilience'],
  Mobility: ['Movement', 'Maneuverability', 'Stability', 'Coordination', 'Responsiveness'],
  Psyche: ['Cognition', 'Learning', 'Awareness', 'Insight', 'Resolve'],
  Influence: ['Presence', 'Projection', 'Connection', 'Manipulation', 'Control'],
  Leverage: ['Assets', 'Network', 'Authority', 'Reputation', 'Background'],
};
const characters = source.inputRows.map(row => row.Character);
const budgets = characters.map(c => {
  for (const [parent, entries] of Object.entries(children)) {
    for (const entry of entries) assert(c.derived[entry] <= c.attributes[parent]);
  }
  const costs = { attribute: (sum(c.attributes) - 5) * 60,
    derived: sum(c.derived) * 20,
    training: (sum(c.tasks) + sum(c.fields)) * 10 +
      [...c.specialties, ...c.precisions].reduce((total, x) => total + x.rank * 5, 0) };
  assert(costs.attribute >= 1200 && costs.derived >= 1000 && costs.training >= 750);
  assert(sum(costs) <= 3075);
  return { id: c.id, name: c.name, ...costs, total: sum(costs), unspent: 3075 - sum(costs) };
});

// Integer ratios preserve exact decimal factors through the single final floor.
function value(ranks, model, difficulty = null, fn = 100, equipmentTenths = 10) {
  const [a, d, ...training] = ranks;
  assert(a >= 1 && a <= 10 && d >= 0 && d <= a);
  assert(training.length === 4 && training.every(r => r >= 0 && r <= 10));
  let n = BigInt(model === 'current' ? a * (10 + d) : a + d);
  let q = model === 'current' ? 10n : 1n;
  for (const rank of training) { n *= BigInt(10 + rank); q *= 10n; }
  n *= BigInt(equipmentTenths) * BigInt(fn); q *= 1000n;
  if (difficulty !== null) {
    n *= 98n * 3n ** BigInt(difficulty - 1);
    q *= 100n * 5n ** BigInt(difficulty - 1);
  }
  return { exact: Number(n) / Number(q), final: Number(n / q) };
}
const chance = rating => Math.max(1, Math.min(99, rating));
const statistics = rating => {
  const distribution = effectDistribution(rating);
  let mean = 0, three = 0, ten = 0;
  for (const [effects, probability] of distribution) {
    mean += effects * probability;
    if (effects >= 3) three += probability;
    if (effects >= 10) ten += probability;
  }
  return { rating, successPct: chance(rating), meanEffects: mean,
    meanEffectsOnSuccess: mean / (chance(rating) / 100),
    atLeast3Pct: three * 100, atLeast10Pct: ten * 100 };
};
const pairs = [];
for (let a = 1; a <= 10; a++) for (let d = 0; d <= a; d++) {
  const old = a * (1 + d / 10), proposed = a + d;
  assert(Math.abs(proposed - old - d * (1 - a / 10)) < 1e-10);
  assert(proposed >= old - 1e-10);
  pairs.push({ a, d, old, proposed, gain: proposed - old,
    ratio: proposed / old, equivalentDifficultySteps: Math.log(proposed / old) / Math.log(1 / .6) });
}
assert.equal(pairs.length, 65);
assert.equal(pairs.filter(p => p.gain > 1e-10).length, 45);
assert.equal(pairs.filter(p => p.gain <= 1e-10).length, 20);
assert.equal(Math.max(...pairs.map(p => p.gain)), 2.5);
for (const model of models) assert.equal(value([10,10,10,10,10,10], model).exact, 320);
const controlled = [
  { name: 'All ranks 1', ranks: [1,1,1,1,1,1] },
  { name: 'All ranks 3', ranks: [3,3,3,3,3,3] },
  { name: 'All ranks 5', ranks: [5,5,5,5,5,5] },
  { name: 'Rank-5 foundation, Task and Field only', ranks: [5,5,5,5,0,0] },
  { name: 'All ranks 8', ranks: [8,8,8,8,8,8] },
  { name: 'All ranks 10', ranks: [10,10,10,10,10,10] },
].map(row => ({ ...row, models: Object.fromEntries(models.map(model => [model,
  [1,2,3,4,5].map(difficulty => ({ difficulty, ...statistics(value(row.ranks, model, difficulty).final) }))])) }));
assert.deepEqual(controlled[2].models.current.slice(0,3).map(x => x.successPct), [37,22,13]);
assert.deepEqual(controlled[2].models.additive.slice(0,3).map(x => x.successPct), [49,29,17]);

const routes = [
  ['shop-ledger','A','Psyche','Cognition','Inference','Bookkeeping',null,null,11],
  ['shop-retail','A','Psyche','Cognition','Planning','Retail commerce',null,null,11],
  ['shop-assets','A','Leverage','Assets','Planning','Retail commerce'],
  ['shop-persuade','A','Influence','Manipulation','Persuade','Retail commerce'],
  ['shop-firearm','A','Mobility','Coordination','Discharge','Firearms',null,null,12],
  ['guide-signature','B','Mobility','Coordination','Discharge','Firearms','Handguns','Revolvers',12],
  ['guide-handgun','B','Mobility','Coordination','Discharge','Firearms','Handguns',null,12],
  ['guide-broad','B','Mobility','Coordination','Discharge','Firearms',null,null,12],
  ['guide-dodge','B','Mobility','Responsiveness','Dodge'],
  ['guide-dodge-field','B','Mobility','Responsiveness','Dodge','Firearms'],
  ['guide-recover','B','Might','Resilience','Recover'],
  ['medical-narrow','C','Mobility','Coordination','Treat','Medicine','Surgery','Neurosurgery',12],
  ['medical-broad','C','Mobility','Coordination','Treat','Medicine',null,null,12],
  ['medical-firearm','C','Mobility','Coordination','Discharge','Firearms',null,null,12],
  ['medical-dodge','C','Mobility','Responsiveness','Dodge'],
  ['medical-recover','C','Might','Resilience','Recover'],
  ['shop-dodge','A','Mobility','Responsiveness','Dodge'],
  ['shop-recover','A','Might','Resilience','Recover'],
];
const buildRoutes = routes.map(([id, person, attribute, derived, task, field, specialty, precision, equipment = 10]) => {
  const c = characters.find(x => x.id === person);
  const ranks = [c.attributes[attribute], c.derived[derived], c.tasks[task] || 0, c.fields[field] || 0,
    c.specialties.find(s => s.name === specialty)?.rank || 0,
    c.precisions.find(p => p.name === precision)?.rank || 0];
  return { id, person, route: { attribute, derived, task, field, specialty, precision }, ranks, equipment,
    models: Object.fromEntries(models.map(model => [model, {
      raw: value(ranks, model, null, 100, equipment).exact,
      probes: [null,1,2,3].map(difficulty => ({ difficulty,
        ...statistics(value(ranks, model, difficulty, 100, equipment).final) })),
    }])) };
});
const get = id => buildRoutes.find(row => row.id === id);
assert(Math.abs(get('guide-signature').models.current.raw - 180.280512) < 1e-9);
assert(Math.abs(get('guide-broad').models.current.raw - 58.9152) < 1e-9);
for (const [id, core, probe] of [['shop-ledger','A150','A1'], ['shop-retail','A150','A2'],
  ['guide-signature','B150','B1'], ['medical-narrow','C150','C1']]) {
  const original = source.inputRows.find(row => row.Core === core).OrdinaryProbes.find(p => p.Id === probe);
  assert(Math.abs(get(id).models.current.raw * .98 - original.Rating) < 1e-9);
}
const impairment = [100,75,50,25,0].map(fn => ({ fn,
  models: Object.fromEntries(models.map(model => [model,
    [1,3].map(difficulty => ({ difficulty, ...statistics(value([5,5,5,5,5,5], model, difficulty, fn).final) }))])) }));

function opposed(attackRating, defenseRating, mitigation = 0) {
  let hit = 0, harm = 0, counter = 0, down = 0, canceled = 0;
  for (const [a, pa] of effectDistribution(attackRating)) {
    for (const [d, pd] of effectDistribution(defenseRating)) {
      const probability = pa * pd;
      const remainder = Math.max(0, a - d - mitigation);
      hit += (remainder > 0) * probability;
      harm += remainder * probability;
      counter += (d > a) * probability;
      down += (remainder >= 10) * probability;
      canceled += (a > 0 && a <= d) * probability;
    }
  }
  return { attackRating, defenseRating, mitigation, remainderPct: hit * 100,
    meanRemainder: harm, potentialCounterPct: counter * 100,
    atLeast10RemainderPct: down * 100, successfulAttackCanceledPct: canceled * 100 };
}
const opposedFixtures = [
  { id: 'mid-mirror-D1', attack: [5,5,5,5,5,5], defense: [5,5,5,5,5,5], difficulty: 1 },
  { id: 'mid-mirror-D3', attack: [5,5,5,5,5,5], defense: [5,5,5,5,5,5], difficulty: 3 },
  { id: 'mid-mirror-neutral-mitigation2', attack: [5,5,5,5,5,5], defense: [5,5,5,5,5,5], mitigation: 2 },
  { id: 'peak-v-mid-max-training', attack: [10,10,10,10,10,10], defense: [5,5,10,10,10,10] },
  { id: 'guide-signature-field-defense', attackRoute: 'guide-signature', defenseRoute: 'guide-dodge-field' },
  { id: 'guide-broad-D3-field-defense', attackRoute: 'guide-broad', defenseRoute: 'guide-dodge-field', attackDifficulty: 3 },
];
const opposedResults = opposedFixtures.map(f => ({ id: f.id,
  models: Object.fromEntries(models.map(model => {
    const ar = f.attackRoute ? get(f.attackRoute) : null;
    const dr = f.defenseRoute ? get(f.defenseRoute) : null;
    return [model, opposed(
      value(ar?.ranks || f.attack, model, f.attackDifficulty ?? f.difficulty ?? null, 100, ar?.equipment || 10).final,
      value(dr?.ranks || f.defense, model, f.difficulty ?? null, 100, dr?.equipment || 10).final,
      f.mitigation || 0)];
  })) }));

const marginal = [];
for (const a of [3,6,9]) {
  const d = a === 3 ? 2 : 3;
  for (const model of models) {
    const ranks = [a,d,5,5,3,3];
    const before = value(ranks, model).exact;
    for (const [purchase,index,amount,cost] of [['Attribute',0,1,60],['Derived',1,1,20],
      ['Task',2,2,20],['Field',3,2,20],['Specialty',4,4,20],['Precision',5,4,20]]) {
      const next = [...ranks]; next[index] += amount;
      marginal.push({ a,d,model,purchase,cost,gainPct: (value(next,model).exact / before - 1) * 100 });
    }
  }
}

// Reuse the existing bounded attrition harness; its Load-complication policy is
// a sensitivity fixture, not a claim that all 00 results cause personal Load.
const encounterFixtures = [
  { id: 'guide-signature-mirror', attack: 'guide-signature', defense: 'guide-dodge-field', recovery: 'guide-recover' },
  { id: 'guide-broad-D3-mirror', attack: 'guide-broad', defense: 'guide-dodge-field', recovery: 'guide-recover', difficulty: .3528 },
  { id: 'shopkeeper-firearm-mirror', attack: 'shop-firearm', defense: 'shop-dodge', recovery: 'shop-recover' },
];
const trials = 10000;
const encounters = [];
for (const [fixtureIndex, fixture] of encounterFixtures.entries()) for (const model of models) {
  const actor = { id: fixture.id, attack: get(fixture.attack).models[model].raw,
    defense: get(fixture.defense).models[model].raw, recovery: get(fixture.recovery).models[model].raw,
    difficulty: fixture.difficulty || 1 };
  for (const complication of ['recoverable-load','output-only-control']) {
    const config = { pair: [actor,actor], complication, policy: 'attack' };
    const rounds = []; let censored = 0, complicationNeeded = 0, firstDown = 0;
    for (let i = 0; i < trials; i++) {
      const result = trial(config,fixtureIndex,i);
      if (result.winner === 'censored') censored++;
      else rounds.push(result.round);
      complicationNeeded += result.compNeeded;
      firstDown += result.firstAttackDown;
    }
    rounds.sort((a,b) => a-b);
    encounters.push({ id: fixture.id, model, complication, trials, censored,
      medianCompletedRounds: rounds[Math.ceil(rounds.length / 2) - 1],
      p90CompletedRounds: rounds[Math.ceil(rounds.length * .9) - 1],
      complicationNeededPct: complicationNeeded / trials * 100,
      firstAttackDownPct: firstDown / trials * 100 });
  }
}
const result = { status: 'Package 1 review only; no adoption or repricing.',
  input: path.basename(inputPath), sourceHash: crypto.createHash('sha256').update(bytes).digest('hex'),
  budgets, pairs, controlled, buildRoutes, impairment, opposedResults, marginal, encounters,
  distributionOmittedMassPerActor: 1e-12,
  notes: ['Only foundation changes. Same input ranks and costs in both models.',
    'None of the controlled all-equal-rank routes is asserted to be a complete character.',
    'Opposed neutral tests do not charge D1 merely for active opposition.',
    'Effect distributions include repeated 01 through five terminal depths; initial 00 always supplies zero successful Effects.',
    'Potential counter frequency is not automatic retaliation; actual fiction and matching mitigation remain necessary.',
    'Encounter control omits complication consequences but retains special rolls; it is not an alternative playable rule.',
    'No awarded-point or HOLT-system changes evaluated.'],
};
fs.writeFileSync(path.join(__dirname, 'lens-additive-foundation-review-v0.1.results.json'), JSON.stringify(result, null, 2) + '\n');
console.log(JSON.stringify({ status: result.status, pairs: pairs.length, budgets,
  controlled: controlled.map(r => ({ name:r.name, old:r.models.current.map(x=>x.successPct),
    proposed:r.models.additive.map(x=>x.successPct) })),
  buildRoutes:buildRoutes.map(r=>({id:r.id,old:r.models.current.probes.map(p=>p.rating),
    proposed:r.models.additive.probes.map(p=>p.rating)})),
  opposedResults, encounters }, null, 2));
