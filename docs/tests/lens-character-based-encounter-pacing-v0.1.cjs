'use strict';

const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const crypto = require('node:crypto');
const inputPath = path.join(__dirname, 'lens-low-rating-build-trace-v0.1.results.json');
const bytes = fs.readFileSync(inputPath);
const trace = JSON.parse(bytes);
const trials = Number(process.argv[2] || 20000);
assert(Number.isInteger(trials) && trials > 0 && trials % 2 === 0);
const maxRounds = 1000;
const get = id => trace.builds.find(b => b.id === id);
const actor = (id, attack, defense, difficulty = 1) => ({
  id, attack: attack ?? get(id).familiarHandgun.exact,
  defense: defense ?? get(id).dodgeWithoutApplicableField.exact,
  recovery: get(id).recoverPhysicalFunctionWithoutApplicableField.exact,
  difficulty,
});
const fieldDefense = trace.conditionalDodgeWithFirearms.exact;
const c = trace.inputRows.find(r => r.Core === 'B150').Character;
const narrowDefense = fieldDefense * (1 + c.specialties.find(s => s.name === 'Handguns').rank / 10) *
  (1 + c.precisions.find(p => p.name === 'Revolvers').rank / 10);
const guide = (route = 'signature', defense = 'field', difficulty = 1) => actor('B',
  route === 'signature' ? get('B').familiarHandgun.exact : route === 'handgun' ?
    trace.guideOtherHandgun.exact : trace.guideBroadFirearm.exact,
  defense === 'none' ? get('B').dodgeWithoutApplicableField.exact :
    defense === 'narrow' ? narrowDefense : fieldDefense, difficulty);
const fixtures = [
  {id:'guide-signature-no-field', pair:[guide('signature','none'),guide('signature','none')]},
  {id:'guide-signature-field', pair:[guide(),guide()]},
  {id:'guide-signature-narrow-defense', pair:[guide('signature','narrow'),guide('signature','narrow')]},
  {id:'guide-other-handgun', pair:[guide('handgun'),guide('handgun')]},
  {id:'guide-broad-firearm', pair:[guide('broad'),guide('broad')]},
  {id:'guide-broad-firearm-D3', pair:[guide('broad','field',.3528),guide('broad','field',.3528)]},
  {id:'guide-signature-D3', pair:[guide('signature','field',.3528),guide('signature','field',.3528)]},
  {id:'guide-v-shopkeeper', pair:[guide(),actor('A')]},
  {id:'guide-v-clinician', pair:[guide(),actor('C')]},
  {id:'shopkeeper-v-clinician', pair:[actor('A'),actor('C')]},
  {id:'shopkeeper-v-shopkeeper', pair:[actor('A'),actor('A')]},
  {id:'clinician-v-clinician', pair:[actor('C'),actor('C')]},
];
function rng(seed) {
  let state = seed >>> 0;
  return () => {
    state = (state + 0x6d2b79f5) >>> 0;
    let t = state;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
const band = load => load < 3 ? 1 : load < 6 ? .75 : load < 8 ? .5 : load < 10 ? .25 : 0;
const load = a => a.wounded + a.staggered;
const rating = (a, kind, opponent = null) => {
  const context = kind === 'attack' ? Math.max(0,1+(a.attackResonance || 0)-(opponent?.cover || 0)) :
    kind === 'defense' ? 1+(a.defenseResonance || 0) : 1;
  return Math.floor(a[kind] * (kind === 'attack' ? a.difficulty : 1) * context * band(load(a)));
};
function resolve(value, die) {
  const initial = die();
  let completed = initial, next;
  if (initial === 1) {
    do { next = die(); completed -= 100 - next; } while (next === 1);
  } else if (initial === 100) {
    do { next = die(); completed += next; } while (next === 100);
  }
  const margin = value - completed;
  const success = initial === 1 || (initial !== 100 && margin >= 0);
  return {initial, completed, success,
    effects: success ? 1 + Math.floor(Math.max(0,margin) / 10) : 0,
    severity: initial === 100 ? Math.floor(Math.max(0,-margin) / 10) : 0};
}
function fixed(value, dice) {
  let i = 0;
  const r = resolve(value, () => { assert(i < dice.length); return dice[i++]; });
  assert.equal(i,dice.length);
  return r;
}
assert.equal(fixed(0,[1,100]).effects,1);
assert.equal(fixed(80,[1,1,6]).effects,28);
assert.equal(fixed(80,[100,100,6]).severity,12);
assert.equal(fixed(160,[100,50]).success,false);
assert.equal(fixed(160,[100,50]).severity,0);
assert.equal(fixed(99,[99]).effects,1);
assert.equal(fixed(98,[99]).effects,0);
assert.deepEqual([0,2,3,5,6,7,8,9,10].map(band),[1,1,.75,.75,.5,.5,.25,.25,0]);
const example = {...guide(), wounded:2, staggered:3};
assert.deepEqual(['attack','defense','recovery'].map(k => rating(example,k)),[135,22,4]);
example.staggered = 0;
assert.deepEqual(['attack','defense','recovery'].map(k => rating(example,k)),[180,29,6]);
const atD3 = {...guide('broad','field',.3528), wounded:0, staggered:0};
assert.equal(rating(atD3,'attack'),20);
assert.equal(rating(atD3,'defense'),29);
assert.equal(rating(atD3,'recovery'),6);
assert(Math.abs(narrowDefense - 91.16352) < 1e-8);

function exchange(a,b,die,isRecovery,complication) {
  const beforeBand = band(load(a));
  const ar = resolve(rating(a,isRecovery ? 'recovery' : 'attack',b),die);
  const dr = isRecovery ? null : resolve(rating(b,'defense',a),die);
  const removed = isRecovery ? Math.min(a.staggered,ar.effects) : 0;
  a.staggered -= removed;
  const damage = dr ? Math.max(0,ar.effects-dr.effects-(b.mitigation || 0)) : 0;
  b.wounded += damage;
  const added = [0,0];
  if (complication === 'recoverable-load') {
    added[0] = ar.severity;
    added[1] = dr?.severity || 0;
    a.staggered += added[0]; b.staggered += added[1];
    for (const [who,amount] of [[a,added[0]],[b,added[1]]]) {
      if (amount > 0 && who.disruptPreparation) {
        who.attackResonance = 0;
        who.defenseResonance = 0;
      }
    }
  }
  return { damage, removed, initial01: ar.initial === 1 || dr?.initial === 1,
    initial00: ar.initial === 100 || dr?.initial === 100,
    complicationLevels: added[0]+added[1],
    bandGain: isRecovery && band(load(a)) > beforeBand,
    compNeeded: [a,b].some((x,i) => added[i] > 0 && load(x) >= 10 && load(x)-added[i] < 10) };
}
// Reproducible exchanges verify ordinary cancellation, no ranged retaliation,
// distinct attack/defense ratings, and recovery that cannot remove Wounded.
function fixedExchange(a,b,dice,recover=false) {
  let i = 0;
  const r = exchange(a,b,()=>{ assert(i < dice.length); return dice[i++]; },recover,'recoverable-load');
  assert.equal(i,dice.length);
  return r;
}
const fresh = spec => ({...spec,wounded:0,staggered:0});
let a = fresh(guide()), b = fresh(guide());
assert.equal(fixedExchange(a,b,[50,50]).damage,14);
assert.equal(load(a),0);
assert.equal(load(b),14);
a = fresh(guide()); b = fresh(guide());
assert.equal(fixedExchange(a,b,[99,1,6]).damage,0);
assert.equal(load(a),0);
a = {...fresh(guide()),wounded:2,staggered:3}; b = fresh(guide());
assert.equal(fixedExchange(a,b,[1,6],true).removed,3);
assert.equal(a.wounded,2);
assert.equal(a.staggered,0);

function effectDistribution(value) {
  const weights = new Map();
  const add = (effects,weight) => weights.set(effects,(weights.get(effects) || 0)+weight);
  for (let roll=2;roll<=99;roll++) add(value >= roll ? 1+Math.floor((value-roll)/10) : 0,.01);
  add(0,.01); // Every initial 00 has zero successful output, whatever its continuation.
  for (let repeats=0;repeats<5;repeats++) {
    for (let terminal=2;terminal<=100;terminal++) {
      const completed = 1-99*repeats-(100-terminal);
      add(1+Math.floor(Math.max(0,value-completed)/10),.01**(repeats+2));
    }
  }
  const mass = [...weights.values()].reduce((a,b)=>a+b,0);
  assert(Math.abs(mass-(1-.01**6)) < 1e-12);
  return weights;
}
const firstShotChecks = fixtures.slice(0,3).map(f => {
  const attacker = fresh(f.pair[0]), defender = fresh(f.pair[1]);
  const attacks = effectDistribution(rating(attacker,'attack'));
  const defenses = effectDistribution(rating(defender,'defense'));
  let p = 0;
  for (const [ae,aw] of attacks) for (const [de,dw] of defenses) if (ae-de >= 10) p += aw*dw;
  return {id:f.id,offensiveFirstShotDownPct:p*100,omittedProbabilityBound:2*.01**6};
});

function trial(config, fixtureIndex, index) {
  const random = rng((0x21ba5401 ^ Math.imul(index+1,0x9e3779b1) ^ Math.imul(fixtureIndex+1,0x85ebca6b)) >>> 0);
  const die = () => 1 + Math.floor(random()*100);
  const actors = config.pair.map(fresh);
  const order = index % 2 ? [1,0] : [0,1];
  const m = {attacks:0, recoveryActions:0, removed:0, bandGains:0,
    damage:0, complications:0, noRemainder:0, terminal00:0, terminal01:0, compNeeded:0,
    firstAttackDown:0};
  let actions = 0;
  for (let round=1;round<=maxRounds;round++) {
    for (const i of order) {
      const a = actors[i], b = actors[1-i];
      const recover = config.policy === 'recover-band' && a.staggered > 0 && band(a.wounded) > band(load(a));
      const r = exchange(a,b,die,recover,config.complication);
      actions++;
      if (recover) { m.recoveryActions++; m.bandGains += Number(r.bandGain); }
      else { m.attacks++; m.noRemainder += Number(r.damage === 0); }
      m.removed += r.removed; m.damage += r.damage; m.complications += r.complicationLevels;
      const down = actors.map(x => load(x) >= 10);
      if (down.some(Boolean)) {
        m.terminal00 = Number(r.initial00); m.terminal01 = Number(r.initial01);
        m.compNeeded = Number(r.compNeeded);
        m.firstAttackDown = Number(actions === 1 && r.damage >= 10);
        const winner = down[0] && down[1] ? 'both' : down[1] ? 'A' : 'B';
        return {round,winner,firstWon:(winner === 'A' ? 0 : winner === 'B' ? 1 : -1) === order[0],...m};
      }
    }
  }
  return {round:maxRounds,winner:'censored',firstWon:false,...m};
}
const round3 = n => Math.round(n*1000)/1000;
const pct = (n,d) => d ? Math.round(n/d*10000)/100 : null;
if (require.main === module) {
const results = [];
fixtures.forEach((fixture, fixtureIndex) => {
  // The second mode isolates successful output, retaining 01/00 rolls but
  // omitting complication consequences. It is NOT a playable alternative rule.
  for (const complication of ['recoverable-load','output-only-control']) {
    for (const policy of complication === 'recoverable-load' ? ['attack','recover-band'] : ['attack']) {
      const config = {...fixture,complication,policy};
      const outcomes = {A:0,B:0,both:0,censored:0};
      const rounds = [], totals = {};
      let firstWins=0, completedByFive=0;
      for (let i=0;i<trials;i++) {
        const t = trial(config,fixtureIndex,i);
        outcomes[t.winner]++;
        if (t.winner !== 'censored') { rounds.push(t.round); completedByFive += Number(t.round <= 5); }
        firstWins += Number(t.firstWon);
        for (const [k,v] of Object.entries(t)) if (typeof v === 'number') totals[k] = (totals[k] || 0) + v;
      }
      rounds.sort((a,b)=>a-b);
      const q = fraction => rounds.length ? rounds[Math.ceil(rounds.length*fraction)-1] : null;
      results.push({config,trials,outcomes,median:q(.5),p90:q(.9),
        meanResolved:round3(rounds.reduce((a,b)=>a+b,0)/rounds.length),
        restrictedMean:round3(totals.round/trials),
        firstMoverWinPct:pct(firstWins,trials),aWinPct:pct(outcomes.A,trials),
        resolvedByFivePct:pct(completedByFive,trials),
        firstAttackDownPct:pct(totals.firstAttackDown,trials),
        noRemainderPct:pct(totals.noRemainder,totals.attacks),
        terminal00Pct:pct(totals.terminal00,rounds.length),
        terminal01Pct:pct(totals.terminal01,rounds.length),
        compNeededPct:pct(totals.compNeeded,rounds.length),
        meanRecoveryActions:round3(totals.recoveryActions/trials),
        recoveryBandGainPct:pct(totals.bandGains,totals.recoveryActions),
        meanRecovered:round3(totals.removed/trials),
        meanDamage:round3(totals.damage/trials),meanComplications:round3(totals.complications/trials)});
    }
  }
});
const output = {
  status:'Character-based diagnostic; unchanged allocations and rules',
  source:inputPath, sourceHash:crypto.createHash('sha256').update(bytes).digest('hex'),
  trialsPerScenario:trials,totalEncounters:results.length*trials,maxRounds,
  seed:'0x21ba5401 mixed with fixture index and trial index; balanced persistent initiative',
  caveats:[
    'Ranged exposed exchanges, no armor or mitigation, no cover, no paid spending, one attack action and open feasible defense.',
    'Firearms expertise on defense is conditional on evading the observed weapon use; no permission to dodge a fired bullet.',
    'Narrow defense additionally assumes the opposing weapon is the familiar revolver and those recognitions genuinely help.',
    'D3 is distinct shot difficulty only, not a repeated penalty for opposition or a distance table.',
    'Recoverable-load mode maps own complications to temporary physical disruption; not every actual 00 must impose Load.',
    'Output-only control retains special rolls but ignores complication consequences; it is not an adopted or complete encounter model.',
    'No automatic ranged counter-effects, no instant wound recovery, no routine mandatory recovery roll.',
    'Unlimited ammunition and exposure until function loss isolate attrition; long civilian fights are not literal equipment simulations.'
  ],firstShotChecks,results,
};
fs.writeFileSync(path.join(__dirname,'lens-character-based-encounter-pacing-v0.1.results.json'),JSON.stringify(output,null,2)+'\n');
console.log(JSON.stringify({totalEncounters:output.totalEncounters,results:results.map(r=>({
  id:r.config.id,mode:r.config.complication,policy:r.config.policy,median:r.median,p90:r.p90,
  firstWin:r.firstMoverWinPct,Awin:r.aWinPct,firstAttackDown:r.firstAttackDownPct,
  compNeeded:r.compNeededPct,recoveries:r.meanRecoveryActions,recoveryBandGain:r.recoveryBandGainPct,
  censored:r.outcomes.censored
}))},null,2));
}
module.exports = {trial,guide,actor,resolve,band,rating,exchange,fresh,effectDistribution,maxRounds};
