'use strict';

const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const trials = Number(process.argv[2] || 20000);
const maxRounds = 500;
assert(Number.isInteger(trials) && trials > 0);

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
function band(load) {
  return load < 3 ? 1 : load < 6 ? 0.75 : load < 8 ? 0.5 : load < 10 ? 0.25 : 0;
}
function load(actor) { return actor.wounded + actor.staggered; }
function rating(actor) { return Math.floor(actor.base * band(load(actor))); }
function resolve(value, die) {
  const initial = die();
  let completed = initial;
  if (initial === 1) {
    let next;
    do { next = die(); completed -= 100 - next; } while (next === 1);
  } else if (initial === 100) {
    let next;
    do { next = die(); completed += next; } while (next === 100);
  }
  const margin = value - completed;
  const success = initial === 1 || (initial !== 100 && margin >= 0);
  return {
    initial, completed, success,
    effects: success ? 1 + Math.floor(Math.max(0, margin) / 10) : 0,
    severity: initial === 100 ? Math.floor(Math.max(0, -margin) / 10) : 0,
  };
}
function fixed(value, dice) {
  let i = 0;
  const result = resolve(value, () => {
    assert(i < dice.length, 'Missing continuation');
    return dice[i++];
  });
  assert.equal(i, dice.length);
  return result;
}
assert.equal(fixed(0, [1,100]).effects, 1);
assert.equal(fixed(80, [1,1,6]).effects, 28);
assert.equal(fixed(80, [100,100,6]).severity, 12);
assert.equal(fixed(160, [100,50]).success, false);
assert.equal(fixed(160, [100,50]).severity, 0);
assert.equal(fixed(99, [99]).effects, 1);
assert.equal(fixed(98, [99]).effects, 0);
assert.deepEqual([0,2,3,5,6,7,8,9,10].map(band), [1,1,.75,.75,.5,.5,.25,.25,0]);

function recover(actor, effects) {
  const removed = Math.min(actor.staggered, effects);
  actor.staggered -= removed;
  return removed;
}
const recoveryFixture = {base:80, wounded:2, staggered:3};
assert.equal(recover(recoveryFixture, 3), 3);
assert.equal(recoveryFixture.wounded, 2);
assert.equal(rating(recoveryFixture), 80);

function wantsRecovery(actor, policy) {
  return policy === 'recover-band' && actor.staggered > 0 &&
    band(actor.wounded) > band(load(actor));
}
const scenarios = [];
for (const bases of [[80,80], [80,20], [20,20]]) {
  for (const policies of [['attack','attack'], ['recover-band','recover-band'],
    ['recover-band','attack'], ['attack','recover-band']]) {
    scenarios.push({bases, policies, counters:'contact', complication:'staggered', dice:'full'});
  }
}
for (const bases of [[80,80],[20,20]]) {
  for (const policy of ['attack','recover-band']) {
    scenarios.push({bases, policies:[policy,policy], counters:'none', complication:'staggered', dice:'full'});
  }
}
for (const bases of [[80,80],[80,20]]) {
  scenarios.push({bases, policies:['recover-band','recover-band'], counters:'contact', complication:'wounded', dice:'full'});
}
for (const bases of [[80,80],[80,20],[20,20]]) {
  scenarios.push({bases, policies:['recover-band','recover-band'], counters:'contact', complication:'staggered', dice:'ordinary'});
}
for (const firstChoice of ['attack','recover']) {
  scenarios.push({bases:[80,80], policies:['attack','attack'], counters:'contact',
    complication:'staggered', dice:'full', startA:{wounded:2,staggered:3}, firstChoice});
}

function trial(config, index) {
  const random = rng((0x17c0ffee ^ Math.imul(index + 1, 0x9e3779b1) ^
    (config.bases[0] << 16) ^ config.bases[1]) >>> 0);
  const die = () => config.dice === 'ordinary' ? 2 + Math.floor(random()*98) : 1 + Math.floor(random()*100);
  const actors = config.bases.map(base => ({base, wounded:0, staggered:0}));
  if (config.startA) Object.assign(actors[0],config.startA);
  // Half the trials use each persistent initiative order, without extra rolls.
  const order = config.startA || index % 2 === 0 ? [0,1] : [1,0];
  const m = {actions:0, attacks:0, recoveries:0, recoverySuccess:0, recoveryBandGains:0,
    removed:0, woundAdded:0, counterAdded:0, complicationAdded:0, zeroRemainder:0,
    bandTransitions:0, terminal01:0, terminal00:0, terminalCounter:0, terminal00Threshold:0,
    recoveryBy:[0,0], woundBy:[0,0], counterBy:[0,0], complicationBy:[0,0]};
  for (let round=1; round<=maxRounds; round++) {
    for (const i of order) {
      const j = 1-i, a = actors[i], b = actors[j];
      const before = actors.map(x => band(load(x)));
      const isRecovery = (config.firstChoice === 'recover' && round === 1 && i === 0) ||
        wantsRecovery(a, config.policies[i]);
      const ar = resolve(rating(a), die);
      let dr = null, counter = 0;
      m.actions++;
      if (isRecovery) {
        m.recoveries++;
        m.recoveryBy[i]++;
        if (ar.success) m.recoverySuccess++;
        m.removed += recover(a, ar.effects);
      } else {
        m.attacks++;
        dr = resolve(rating(b), die);
        const damage = Math.max(0, ar.effects-dr.effects);
        // Scene fixture: a successfully delivered blow permits contact-based
        // deflection. Misses do not automatically create counter opportunities.
        const eligible = config.counters === 'contact' && ar.success;
        counter = eligible ? Math.min(1, Math.max(0, dr.effects-ar.effects)) : 0;
        assert(counter <= 1 && !(counter && damage));
        b.wounded += damage;
        a.staggered += counter;
        m.woundAdded += damage;
        m.woundBy[j] += damage;
        m.counterAdded += counter;
        m.counterBy[i] += counter;
        if (damage === 0) m.zeroRemainder++;
      }
      // Own failed maneuvers have a separate, preselected fictional consequence.
      const addedComplication = [0,0];
      for (const [who, result] of [[i,ar],[j,dr]]) {
        if (result && result.severity) {
          actors[who][config.complication] += result.severity;
          m.complicationAdded += result.severity;
          m.complicationBy[who] += result.severity;
          addedComplication[who] = result.severity;
        }
      }
      actors.forEach((actor,k) => {
        assert(actor.wounded >= 0 && actor.staggered >= 0);
        if (band(load(actor)) !== before[k]) m.bandTransitions++;
      });
      if (isRecovery && band(load(a)) > before[i]) m.recoveryBandGains++;
      // Apply this complete exchange before determining loss of function.
      const down = actors.map(x => load(x) >= 10);
      if (down[0] || down[1]) {
        m.terminal01 = Number(ar.initial === 1 || dr?.initial === 1);
        m.terminal00 = Number(ar.initial === 100 || dr?.initial === 100);
        m.terminal00Threshold = Number(actors.some((actor,k) => addedComplication[k] > 0 &&
          load(actor) >= 10 && load(actor)-addedComplication[k] < 10));
        m.terminalCounter = Number(counter > 0 && load(a)-counter < 10 && load(a) >= 10);
        return {round, outcome:down[0] && down[1] ? 'both' : down[1] ? 'A' : 'B', actors, ...m};
      }
    }
  }
  return {round:maxRounds, outcome:'censored', actors, ...m};
}
const r3 = x => Math.round(x*1000)/1000;
const pct = (n,d) => d ? Math.round(n/d*10000)/100 : null;
const results = scenarios.map(config => {
  const outcomes = {A:0,B:0,both:0,censored:0};
  const rounds = [], terminalWounds = [], terminalStagger = [];
  const totals = {}, actorTotals = {recoveryBy:[0,0],woundBy:[0,0],counterBy:[0,0],complicationBy:[0,0]};
  const byFive = {resolved:0}, byTen = {resolved:0};
  for (let n=0;n<trials;n++) {
    const t = trial(config,n);
    outcomes[t.outcome]++;
    if (t.outcome !== 'censored') {
      rounds.push(t.round);
      if (t.round <= 5) byFive.resolved++;
      if (t.round <= 10) byTen.resolved++;
    }
    for (const [key,value] of Object.entries(t)) {
      if (typeof value === 'number') totals[key] = (totals[key] || 0) + value;
      if (key in actorTotals) value.forEach((v,i) => actorTotals[key][i] += v);
    }
    for (const a of t.actors) {
      if (load(a)>=10) {terminalWounds.push(a.wounded); terminalStagger.push(a.staggered);}
    }
  }
  rounds.sort((a,b) => a-b);
  const quantile = q => rounds.length ? rounds[Math.max(0,Math.ceil(q*rounds.length)-1)] : null;
  const mean = xs => xs.length ? r3(xs.reduce((a,b)=>a+b,0)/xs.length) : null;
  const applied = totals.woundAdded + totals.counterAdded + totals.complicationAdded;
  return {config,trials,outcomes, resolvedPct:pct(rounds.length,trials),
    aWinPct:pct(outcomes.A,trials), bothDownPct:pct(outcomes.both,trials),
    medianResolvedRounds:quantile(.5), p90ResolvedRounds:quantile(.9),
    meanResolvedRounds:mean(rounds), restrictedMeanRounds:r3(totals.round/trials),
    byFivePct:pct(byFive.resolved,trials), byTenPct:pct(byTen.resolved,trials),
    meanActions:r3(totals.actions/trials), meanRecoveryActions:r3(totals.recoveries/trials),
    recoverySuccessPct:pct(totals.recoverySuccess,totals.recoveries),
    recoveryImprovesBandPct:pct(totals.recoveryBandGains,totals.recoveries),
    meanStaggerRemoved:r3(totals.removed/trials),
    meanWoundedAdded:r3(totals.woundAdded/trials), meanCounterStagger:r3(totals.counterAdded/trials),
    meanComplicationLevels:r3(totals.complicationAdded/trials), counterShareAddedPct:pct(totals.counterAdded,applied),
    attackNoRemainderPct:pct(totals.zeroRemainder,totals.attacks),
    terminalExchange01Pct:pct(totals.terminal01,rounds.length),
    terminalExchange00Pct:pct(totals.terminal00,rounds.length),
    terminal00NeededForThresholdPct:pct(totals.terminal00Threshold,rounds.length),
    counterCrossedThresholdPct:pct(totals.terminalCounter,rounds.length),
    meanDisabledWounded:mean(terminalWounds),meanDisabledStaggered:mean(terminalStagger),
    meanByActor:Object.fromEntries(Object.entries(actorTotals).map(([k,v])=>[k,v.map(x=>r3(x/trials))]))};
});
const output = {seed:'0x17c0ffee mixed with trial index and Rating pair',trialsPerScenario:trials,
  maxRounds, totalEncounters:trials*scenarios.length, scenarios:results};
const destination = path.join(__dirname,'lens-independent-effects-encounter-pacing-v0.1.results.json');
fs.writeFileSync(destination, JSON.stringify(output,null,2)+'\n');
console.log(JSON.stringify(output,null,2));
