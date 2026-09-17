'use strict';

const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const crypto = require('node:crypto');
const source = process.argv[2] || 'C:/Users/MrJam/.codex/worktrees/628d/LENS-SYSTEM/docs/tests/lens-five-group-starting-band-experiment-v0.1.json';
const snapshotPath = path.join(__dirname, 'lens-low-rating-build-trace-v0.1.results.json');
// A saved input snapshot permits rerunning this trace after the source worktree disappears.
const sourceBytes = fs.existsSync(source) ? fs.readFileSync(source) : null;
const previous = sourceBytes ? null : JSON.parse(fs.readFileSync(snapshotPath, 'utf8'));
const rows = sourceBytes ? JSON.parse(sourceBytes).Results.filter(r =>
  r.Group === 1 && r.Band === 175 && r.Strategy === 'Ordinary') : previous.inputRows;
assert.equal(rows.length, 3);
const multiplier = rank => 1 + (rank || 0) / 10;
const sum = object => Object.values(object).reduce((a, b) => a + b, 0);
const close = (a, b) => assert(Math.abs(a - b) < 1e-8, `${a} != ${b}`);
const parents = {
  Might: ['Strength', 'Toughness', 'Resistance', 'Vigor', 'Resilience'],
  Mobility: ['Movement', 'Maneuverability', 'Stability', 'Coordination', 'Responsiveness'],
  Psyche: ['Cognition', 'Learning', 'Awareness', 'Insight', 'Resolve'],
  Influence: ['Presence', 'Projection', 'Connection', 'Manipulation', 'Control'],
  Leverage: ['Assets', 'Network', 'Authority', 'Reputation', 'Background'],
};
function expression(c, attribute, derived, task, field, specialty, precision, equipment = 1) {
  const factors = {
    attribute: c.attributes[attribute],
    derived: multiplier(c.derived[derived]), task: multiplier(c.tasks[task]),
    field: multiplier(c.fields[field]),
    specialty: multiplier(c.specialties.find(s => s.name === specialty)?.rank),
    precision: multiplier(c.precisions.find(p => p.name === precision)?.rank),
    equipment, scale: 1, difficulty: 1, context: 1, functionBand: 1, actions: 1,
  };
  const exact = Object.values(factors).reduce((a, b) => a * b, 1);
  return { route: {attribute, derived, task, field: field || null,
    specialty: specialty || null, precision: precision || null}, factors, exact, final: Math.floor(exact) };
}
const builds = rows.map(r => {
  const c = r.Character;
  for (const [parent, children] of Object.entries(parents)) {
    for (const child of children) assert(c.derived[child] <= c.attributes[parent]);
  }
  const cost = {
    attributes: (sum(c.attributes) - 5) * 60,
    derived: sum(c.derived) * 20,
    training: (sum(c.tasks) + sum(c.fields)) * 10 +
      [...c.specialties, ...c.precisions].reduce((a, b) => a + b.rank, 0) * 5,
  };
  cost.total = sum(cost);
  close(cost.total, r.TotalAllocated * 5);
  assert(cost.attributes >= 1200 && cost.derived >= 1000 && cost.training >= 750);
  assert(cost.total <= 3075);
  const familiarHandgun = expression(c, 'Mobility', 'Coordination', 'Discharge', 'Firearms', 'Handguns', 'Revolvers', 1.2);
  return {
    id: c.id, name: c.name, cost, unusedFlexible: 3075 - cost.total,
    familiarHandgun,
    dodgeWithoutApplicableField: expression(c, 'Mobility', 'Responsiveness', 'Dodge'),
    recoverPhysicalFunctionWithoutApplicableField: expression(c, 'Might', 'Resilience', 'Recover'),
  };
});
const guide = rows.find(r => r.Core === 'B150').Character;
const guideBuild = builds.find(b => b.id === 'B');
close(guideBuild.familiarHandgun.exact * .98, rows.find(r => r.Core === 'B150').OrdinaryProbes.find(p => p.Id === 'B1').Rating);
const guideOtherHandgun = expression(guide, 'Mobility', 'Coordination', 'Discharge', 'Firearms', 'Handguns', null, 1.2);
close(guideOtherHandgun.exact * .98, rows.find(r => r.Core === 'B150').OrdinaryProbes.find(p => p.Id === 'B2').Rating);
const guideBroadFirearm = expression(guide, 'Mobility', 'Coordination', 'Discharge', 'Firearms', null, null, 1.2);
const conditionalDodgeWithFirearms = expression(guide, 'Mobility', 'Responsiveness', 'Dodge', 'Firearms');
const sensitivity = [];
for (const [label, base] of [['signature revolver', guideBuild.familiarHandgun], ['other handgun', guideOtherHandgun], ['broad firearm', guideBroadFirearm]]) {
  for (const [condition, difficulty, context, functionBand, actions] of [
    ['neutral opposition', 1, 1, 1, 1],
    ['distinct D1', .98, 1, 1, 1],
    ['distinct D2', .588, 1, 1, 1],
    ['distinct D3', .3528, 1, 1, 1],
    ['two actions only', 1, 1, 1, 2],
    ['50% Function Band only', 1, 1, .5, 1],
    ['distinct D3 and two actions', .3528, 1, 1, 2],
    ['distinct D3 and 50% Function Band', .3528, 1, .5, 1],
  ]) {
    const exact = base.exact * difficulty * context * functionBand / actions;
    sensitivity.push({label, condition, difficulty, context, functionBand, actions, exact, final: Math.floor(exact)});
  }
}
const rankFiveBroadExample = { status: 'Illustrative route, not a replacement character allocation',
  factors: [5, 1.5, 1.5, 1.5, 1, 1, 1.2], exact: 5 * 1.5 ** 3 * 1.2 };
close(rankFiveBroadExample.exact, 20.25);
const result = {
  status: 'Diagnostic only; no changes to rules, allocations, permissions, or Field applicability',
  source: sourceBytes ? source : previous.source,
  sourceHash: sourceBytes ? crypto.createHash('sha256').update(sourceBytes).digest('hex') : previous.sourceHash,
  inputRows: rows, builds, guideOtherHandgun, guideBroadFirearm, conditionalDodgeWithFirearms,
  sensitivity, rankFiveBroadExample,
  legacyMaximum: 10 * 2 ** 3, expandedTrainingMaximumBeforeEquipment: 10 * 2 ** 5,
};
fs.writeFileSync(snapshotPath, JSON.stringify(result, null, 2) + '\n');
console.log(JSON.stringify({ builds, guideOtherHandgun, guideBroadFirearm, conditionalDodgeWithFirearms, sensitivity }, null, 2));
