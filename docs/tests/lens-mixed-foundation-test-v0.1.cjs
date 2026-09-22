'use strict';
// Candidate comparison only. Exact final flooring; stdout only; no rule changes.
const assert = require('node:assert/strict');
let checks = 0;
function check(value, message) { assert.ok(value, message); checks++; }
const parents = {
  Strength: 'Might', Toughness: 'Might', Movement: 'Mobility',
  Insight: 'Psyche', Manipulation: 'Influence', Presence: 'Influence',
  Connection: 'Influence', Control: 'Influence',
  Network: 'Leverage', Assets: 'Leverage'
};
const names = ['Might', 'Mobility', 'Psyche', 'Influence', 'Leverage'];
// All fixtures have one applicable T5/F5/S5/P5 line, costing 150.
const trainingCost = 150;
function rating(foundation, band, functionQuarters = 4, axisRank = 0) {
  const numerator = BigInt(foundation) * 81n * 98n * 6n ** BigInt(band - 1)
    * BigInt(functionQuarters) * BigInt(10 + axisRank);
  const denominator = 16n * 100n * 10n ** BigInt(band - 1) * 4n * 10n;
  return Number(numerator / denominator);
}
function describe(foundation) {
  const finals = [1, 2, 3].map(b => rating(foundation, b));
  return { foundation, raw: foundation * 81 / 16, finals,
    permittedUnopposedPercent: finals.map(r => Math.min(99, Math.max(1, r))) };
}
function build(id, attributes, derived) {
  const a = Object.fromEntries(names.map(n => [n, attributes[n] ?? 1]));
  for (const r of Object.values(a)) check(Number.isInteger(r) && r >= 1 && r <= 10, id + ' attribute');
  for (const [n, r] of Object.entries(derived)) {
    check(parents[n] && Number.isInteger(r) && r >= 0 && r <= a[parents[n]], id + ' original cap');
  }
  const attributeCost = Object.values(a).reduce((s, r) => s + (r - 1) * 60, 0);
  const derivedCost = Object.values(derived).reduce((s, r) => s + r * 20, 0);
  return { id, attributes: a, derived, spending: {attributeCost, derivedCost, trainingCost,
    total: attributeCost + derivedCost + trainingCost} };
}
function route(b, a, d) { return describe(b.attributes[a] + (b.derived[d] ?? 0)); }
const builds = [
  build('outward-reader', {Influence: 8, Psyche: 4}, {Insight: 4, Manipulation: 2}),
  build('inward-reader', {Influence: 4, Psyche: 8}, {Insight: 4, Manipulation: 2}),
  build('defiant-performer', {Influence: 8, Might: 4}, {Toughness: 4, Presence: 2}),
  build('mobile-leaper', {Mobility: 8, Might: 4}, {Strength: 4, Movement: 2}),
  build('strong-leaper', {Mobility: 4, Might: 8}, {Strength: 4, Movement: 2}),
  build('connected-advocate', {Influence: 8, Leverage: 4}, {Network: 4, Connection: 2}),
  build('network-organizer', {Leverage: 8, Influence: 4}, {Network: 6, Assets: 0, Control: 4}),
  build('asset-organizer', {Leverage: 8, Influence: 4}, {Network: 0, Assets: 6, Control: 4}),
  build('concentrated-stress', {Influence: 10, Psyche: 2}, {Manipulation: 2, Insight: 2}),
  build('balanced-stress', {Influence: 5, Psyche: 5}, {Manipulation: 5, Insight: 5})
];
const byId = Object.fromEntries(builds.map(b => [b.id, b]));
const probes = [
  ['outward-reader', 'Influence', 'Manipulation', 'Psyche', 'Insight', 'Influence', 'Insight'],
  ['inward-reader', 'Influence', 'Manipulation', 'Psyche', 'Insight', 'Influence', 'Insight'],
  ['defiant-performer', 'Influence', 'Presence', 'Might', 'Toughness', 'Influence', 'Toughness'],
  ['mobile-leaper', 'Mobility', 'Movement', 'Might', 'Strength', 'Mobility', 'Strength'],
  ['strong-leaper', 'Mobility', 'Movement', 'Might', 'Strength', 'Mobility', 'Strength'],
  ['connected-advocate', 'Influence', 'Connection', 'Leverage', 'Network', 'Influence', 'Network'],
  ['network-organizer', 'Leverage', 'Network', 'Influence', 'Control', 'Leverage', 'Control'],
  ['asset-organizer', 'Leverage', 'Network', 'Influence', 'Control', 'Leverage', 'Control']
].map(([id, a, d, a2, d2, ma, md]) => ({id, cost: byId[id].spending.total,
  current: {name: a + '+' + d, ...route(byId[id], a, d)},
  alternative: {name: a2 + '+' + d2, ...route(byId[id], a2, d2)},
  mixed: {name: ma + '+' + md, ...route(byId[id], ma, md)} }));
for (const [x, y] of [[0,1], [3,4], [6,7], [8,9]]) {
  check(builds[x].spending.total === builds[y].spending.total, 'paired budgets equal');
}
check(probes[0].current.finals[0] === 49 && probes[0].mixed.finals[0] === 59, 'persuasion fixture');
check(probes[6].current.finals[0] === 69 && probes[7].current.finals[0] === 39, 'network discrimination');
check(probes[6].mixed.finals[0] === 59 && probes[7].mixed.finals[0] === 59, 'network omission');

const grid = {cases: 0, higher: 0, same: 0, lower: 0, maxGain: 0, maxLoss: 0};
for (let parent = 1; parent <= 10; parent++) for (let d = 0; d <= parent; d++) {
  for (let selected = 1; selected <= 10; selected++) {
    const old = parent + d, mixed = selected + d;
    grid.cases++;
    grid[mixed > old ? 'higher' : mixed < old ? 'lower' : 'same']++;
    grid.maxGain = Math.max(grid.maxGain, mixed - old);
    grid.maxLoss = Math.max(grid.maxLoss, old - mixed);
    check(mixed - old === selected - parent, 'delta independent of derived rank');
    check(mixed >= 1 && mixed <= 20, 'foundation bounds');
    check(mixed * 16 <= 320, 'ordinary maximum unchanged');
  }
}
check(grid.cases === 650, 'all legal numeric triples');

// Lower bound costs for one route from free A1 bases; no training or preinvestment.
const minimumCosts = [4, 8, 12, 16, 20].map(target => {
  let current = Infinity, mixed = Infinity;
  for (let parent = 1; parent <= 10; parent++) for (let d = 0; d <= parent; d++) {
    const base = (parent - 1) * 60 + d * 20;
    if (parent + d >= target) current = Math.min(current, base);
    for (let selected = 1; selected <= 10; selected++) {
      if (selected + d >= target) mixed = Math.min(mixed, base + (selected - 1) * 60);
    }
  }
  check(mixed >= current, 'cross-parent single-route cost not cheaper from scratch');
  return {target, current, mixed};
});
check(minimumCosts[2].current === 420 && minimumCosts[2].mixed === 640, 'foundation twelve costs');

// Deliberately permissive stress bound, NOT a fiction-applicability decision.
let bestCurrent = {minimum: 0}, bestShopping = {minimum: 0};
for (let a = 1; a <= 10; a++) for (let b = 1; b <= 10; b++) {
  for (let da = 0; da <= a; da++) for (let db = 0; db <= b; db++) {
    const cost = (a + b - 2) * 60 + (da + db) * 20;
    if (cost > 680) continue;
    const ordinary = Math.min(a + da, b + db);
    const shopping = Math.max(a, b) + Math.min(da, db);
    if (ordinary > bestCurrent.minimum) bestCurrent = {minimum: ordinary, a, b, da, db, cost};
    if (shopping > bestShopping.minimum) bestShopping = {minimum: shopping, a, b, da, db, cost};
  }
}
check(bestCurrent.minimum === 10 && bestShopping.minimum === 12, 'reuse stress optimum');
const stress = builds.slice(8).map(b => ({id: b.id, cost: b.spending.total,
  ownRoutes: [route(b, 'Influence', 'Manipulation'), route(b, 'Psyche', 'Insight')],
  shoppingRoutes: [route(b, 'Influence', 'Manipulation'), route(b, 'Influence', 'Insight')]}));

function ordinaryEffects(final, roll) {
  assert.ok(roll >= 2 && roll <= 99);
  return roll <= final ? 1 + Math.floor((final - roll) / 10) : 0;
}
const offenseRoll = 45, defenseFinal = 49, defenseRoll = 45;
const defense = ordinaryEffects(defenseFinal, defenseRoll);
const opposition = [49, 59].map(final => ({final, offenseRoll,
  effects: ordinaryEffects(final, offenseRoll), defense,
  offensiveRemainder: Math.max(0, ordinaryEffects(final, offenseRoll) - defense)}));
check(opposition[0].offensiveRemainder === 0 && opposition[1].offensiveRemainder === 1, 'independent cancellation impact');

const impairment = {foundation: 12, full: rating(12, 1),
  selectedMentalFullButPhysicalHalf: rating(12, 1),
  ifRequiredPhysicalFunctionAppliedOnce: rating(12, 1, 2)};
check(impairment.full === 59 && impairment.ifRequiredPhysicalFunctionAppliedOnce === 29, 'function ambiguity magnitude');
check(rating(20, 1, 4, 10) === 198, 'axis common factor control');
check(describe(20).finals[0] === 99, 'fixture maximum training control');
check(10 + 1 === 11 && 1 + 1 === 2 && 10 + 0 === 10, 'rank one shopping versus existing unranked route');

console.log(JSON.stringify({status: 'Unadopted candidate; no character changes', checks,
  controls: {training: 'T5 F5 S5 P5; x81/16; cost150', function: '100% except sensitivity probe',
    context: 'neutral; current support not modeled', scale: 'matched',
    probability: 'permitted required unopposed checks only; no paid spending',
    budgets: 'synthetic purchase ledgers, not protected starting-character allocations'},
  builds, probes, grid, minimumCosts, stress, bestCurrent, bestShopping,
  opposition, impairment}, null, 2));
