'use strict';
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const crypto = require('node:crypto');
const engine = require('./lens-character-based-encounter-pacing-v0.1.cjs');
const {guide,trial,fresh,rating,exchange,effectDistribution} = engine;
const trials = Number(process.argv[2] || 20000);
assert(Number.isInteger(trials) && trials > 0 && trials % 2 === 0);
const specs = [
  {id:'exposed'},
  {id:'mitigation-1',mitigation:1},
  {id:'mitigation-2',mitigation:2},
  {id:'defense-preparation-20',defenseResonance:.2},
  {id:'cover-20',cover:.2},
  {id:'cover-30',cover:.3},
  {id:'cover-50',cover:.5},
  {id:'cover-30-armor-2',cover:.3,mitigation:2},
  {id:'cover-30-armor-2-prepared',cover:.3,mitigation:2,defenseResonance:.2},
  {id:'cover-50-armor-2-prepared',cover:.5,mitigation:2,defenseResonance:.2},
  {id:'cover-30-armor-2-both-preparations',cover:.3,mitigation:2,defenseResonance:.2,attackResonance:.2},
  {id:'cover-50-armor-2-both-preparations',cover:.5,mitigation:2,defenseResonance:.2,attackResonance:.2},
  {id:'narrow-defense-cover-30-armor-2',defense:'narrow',cover:.3,mitigation:2},
  {id:'broad-D3-armor-2',route:'broad',difficulty:.3528,mitigation:2},
  {id:'broad-D3-cover-30-armor-2',route:'broad',difficulty:.3528,cover:.3,mitigation:2},
];
const make = s => ({...guide(s.route || 'signature',s.defense || 'field',s.difficulty || 1),
  cover:s.cover || 0,mitigation:s.mitigation || 0,
  defenseResonance:s.defenseResonance || 0,attackResonance:s.attackResonance || 0,
  disruptPreparation:true});
const fixtures = specs.map(s => ({id:s.id,pair:[make(s),make(s)]}));
fixtures.push({id:'exposed-v-protected',pair:[make({}),make({cover:.3,mitigation:2,defenseResonance:.2})]});
assert.equal(rating(fresh(make({attackResonance:.2})),'attack',fresh(make({cover:.3}))),162);
assert.equal(rating(fresh(make({defenseResonance:.2})),'defense'),35);
let a=fresh(make({})),b=fresh(make({mitigation:2}));
let dice=[50,50],i=0;
assert.equal(exchange(a,b,()=>dice[i++],false,'recoverable-load').damage,12);
assert.equal(b.wounded,12);
assert.equal(i,2);
a=fresh(make({attackResonance:.2,defenseResonance:.2,mitigation:2}));
b=fresh(make({}));
dice=[100,100,99,50];i=0;
exchange(a,b,()=>dice[i++],false,'recoverable-load');
assert.equal(a.staggered,8);
assert.equal(a.attackResonance,0);
assert.equal(a.defenseResonance,0);
assert.equal(a.wounded,0);
for (let roll=2;roll<=99;roll++) {
  const output=engine.resolve(20,()=>roll).effects;
  assert.equal(Math.max(0,output-2),0,'Ordinary Rating 20 output cannot exceed mitigation 2');
}

const round3 = n => Math.round(n*1000)/1000;
const pct = (n,d) => d ? Math.round(n/d*10000)/100 : null;
const results=[];
fixtures.forEach((fixture,index) => {
  const opening = fixture.pair.map((spec,k) => {
    const a=fresh(spec),b=fresh(fixture.pair[1-k]);
    const ar=rating(a,'attack',b),dr=rating(b,'defense',a);
    let incapacitate=0,injure=0,meanWounded=0;
    for (const [ae,aw] of effectDistribution(ar)) for (const [de,dw] of effectDistribution(dr)) {
      const damage=Math.max(0,ae-de-b.mitigation),p=aw*dw;
      if (damage>=10) incapacitate+=p;
      if (damage>0) injure+=p;
      meanWounded+=damage*p;
    }
    return {attacker:k,attackRating:ar,opposingDefenseRating:dr,mitigation:b.mitigation,
      offensiveFirstShotDownPct:incapacitate*100,anyWoundPct:injure*100,meanWounded};
  });
  for (const complication of ['recoverable-load','output-only-control']) {
    for (const policy of complication === 'recoverable-load' ? ['attack','recover-band'] : ['attack']) {
      const config={...fixture,complication,policy},outcomes={A:0,B:0,both:0,censored:0},rounds=[],totals={};
      let firstWins=0;
      for (let n=0;n<trials;n++) {
        // Exposed control uses the same seed stream as the previous Field-supported fixture.
        const t=trial(config,index === 0 ? 1 : index+20,n);
        outcomes[t.winner]++;
        if (t.winner !== 'censored') rounds.push(t.round);
        firstWins+=Number(t.firstWon);
        for (const [k,v] of Object.entries(t)) if(typeof v==='number') totals[k]=(totals[k] || 0)+v;
      }
      rounds.sort((a,b)=>a-b);
      const quantile=q=>rounds.length ? rounds[Math.ceil(rounds.length*q)-1] : null;
      results.push({config,opening,trials,outcomes,median:quantile(.5),p90:quantile(.9),
        meanResolved:round3(rounds.reduce((a,b)=>a+b,0)/rounds.length),
        firstMoverWinPct:pct(firstWins,trials),aWinPct:pct(outcomes.A,trials),
        compNeededPct:pct(totals.compNeeded,rounds.length),noWoundPct:pct(totals.noRemainder,totals.attacks),
        meanRecoveryActions:round3(totals.recoveryActions/trials),recoveryBandGainPct:pct(totals.bandGains,totals.recoveryActions),
        meanRecovered:round3(totals.removed/trials),meanWounded:round3(totals.damage/trials)});
    }
  }
});
const old=JSON.parse(fs.readFileSync(path.join(__dirname,'lens-character-based-encounter-pacing-v0.1.results.json')));
for (const r of results.filter(r=>r.config.id==='exposed')) {
  const control=old.results.find(o=>o.config.id==='guide-signature-field' && o.config.policy===r.config.policy && o.config.complication===r.config.complication);
  assert.equal(r.median,control.median);assert.equal(r.p90,control.p90);
  assert.deepEqual(r.outcomes,control.outcomes);
  assert.equal(r.firstMoverWinPct,control.firstMoverWinPct);
}
const source=path.join(__dirname,'lens-low-rating-build-trace-v0.1.results.json');
const output={status:'Protection sensitivity, no new rules or valuations adopted',
  sourceHash:crypto.createHash('sha256').update(fs.readFileSync(source)).digest('hex'),
  trialsPerScenario:trials,totalEncounters:results.length*trials,maxRounds:engine.maxRounds,
  seed:'Shared engine seed; fixture 1 for exposed regression, fixture index +20 otherwise',
  results};
fs.writeFileSync(path.join(__dirname,'lens-protected-guide-encounter-test-v0.1.results.json'),JSON.stringify(output,null,2)+'\n');
console.log(JSON.stringify({encounters:output.totalEncounters,results:results.filter(r=>r.config.policy==='attack').map(r=>({
  id:r.config.id,mode:r.config.complication,attack:r.opening[0].attackRating,defense:r.opening[0].opposingDefenseRating,
  firstShotDown:round3(r.opening[0].offensiveFirstShotDownPct),median:r.median,p90:r.p90,
  firstWin:r.firstMoverWinPct,Awin:r.aWinPct,compNeeded:r.compNeededPct,censored:r.outcomes.censored
}))},null,2));
