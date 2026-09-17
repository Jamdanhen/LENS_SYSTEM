'use strict';
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const finalRating = (base,resonance=0,dissonance=0) => Math.floor(base*Math.max(0,1+resonance-dissonance));
const success = (rating,die) => die===1 || (die!==100 && die<=rating);
const effects = (rating,ordinaryRoll) => success(rating,ordinaryRoll) ? 1+Math.floor(Math.max(0,rating-ordinaryRoll)/10) : 0;
const probability = rating => Array.from({length:100},(_,i)=>Number(success(rating,i+1))).reduce((a,b)=>a+b,0)/100;
const pct = p => Math.round(p*1000000)/10000;
const rows=[];
for (const lead of [20,80]) {
  for (const help of [0,.2,.5]) {
    const rating=finalRating(lead,help);
    rows.push({lead,assessedHelp:help,rating,successPct:pct(probability(rating)),
      effectsOnOrdinaryRoll10:effects(rating,10)});
  }
}
let independentRequired=0,uncertainPreparation=0;
for (let helperDie=1;helperDie<=100;helperDie++) {
  for (let leadDie=1;leadDie<=100;leadDie++) {
    const helped=success(40,helperDie);
    independentRequired+=Number(helped && success(80,leadDie));
    uncertainPreparation+=Number(success(helped ? finalRating(80,.2) : 80,leadDie));
  }
}
assert.equal(independentRequired,3200);
assert.equal(uncertainPreparation,8640);
assert.equal(finalRating(80,.2,.3),72);
assert.equal(finalRating(80,0,.2),64);
assert.equal(finalRating(80,.2,.2),80);
assert.equal(effects(96,50),5);
assert.equal(effects(80,50),4);
assert.equal(probability(0),.01);
assert.equal(probability(120),.99);
const output={
  status:'Diagnostic candidate comparison; no teamwork formula adopted',
  assumptions:[
    'Ratings are illustrative complete, same-frame applicable Expressions, not new character builds.',
    'Help valuations are fictional fixtures, not derived from helper ranks, Effects, or headcount.',
    'Success enumeration includes guaranteed01 and failing00. Continuation magnitude cannot change individual success status.',
    'Effect examples use ordinary rolls only; no opposed cancellation, special Effect distribution, or encounter model is claimed.',
    'The preparation branch assumes a failure merely fails to establish help; this is not a universal failure consequence.',
    'All uncertainty and required contributions are declared before choosing resolution scope.'
  ],rows,
  lead80Helper40:{
    reliableEstablishedHelp20:96,
    sumFullRatings:{rating:120,successPct:pct(probability(120))},
    meanFullRatings:{rating:60,successPct:pct(probability(60))},
    bothIndependentActivitiesRequiredPct:independentRequired/100,
    uncertainPreparationThenLeadAttemptPct:uncertainPreparation/100,
    leadUnassistedPct:pct(probability(80)),
  },
  duplicateDescriptionControl:{
    oneEstablishedBenefit20:finalRating(80,.2),
    sameBenefitDescribedTwice:finalRating(80,.2),
    distinctAdditionalBenefit10:finalRating(80,.2+.1),
  },
  scopeCounterexample:{
    description:'One operator must reset a local control while another independently crosses a hazardous shaft to reach the second control.',
    leadRating:80,secondRating:40,
    requiredSuccessPct:32,
    wronglySubstitutedLeadPlusHelpPct:96,
    conclusion:'Lead-plus-help cannot stand in for every independently consequential required activity.'
  }
};
fs.writeFileSync(path.join(__dirname,'lens-teamwork-assistance-versus-joint-effort-test-v0.1.results.json'),JSON.stringify(output,null,2)+'\n');
console.log(JSON.stringify(output,null,2));
