'use strict';
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const probability = rating => (Math.max(1,Math.min(99,Math.floor(rating))))/100;
const ordinaryEffects = (rating,roll) => roll <= rating ? 1+Math.floor((rating-roll)/10) : 0;
const comparisons = [[80,40],[80,80],[40,80],[20,16]].map(([a,b])=>({
  a,b,mean:(a+b)/2,bottleneck:Math.min(a,b),sum:a+b,
  meanSuccessPct:100*probability((a+b)/2),
  meanEffectsAt30:ordinaryEffects((a+b)/2,30),
  bottleneckEffectsAt30:ordinaryEffects(Math.min(a,b),30),
  sumEffectsAt30:ordinaryEffects(a+b,30),
}));
const physical=[10,2,1,1,1,1];
const practiced=[1,1,2,2,2,2];
const product=xs=>xs.reduce((a,b)=>a*b,1);
const meanIntact=(product(physical)+product(practiced))/2;
const mixedLayerMean=product(physical.map((x,i)=>(x+practiced[i])/2));
const bestLayerMix=product(physical.map((x,i)=>Math.max(x,practiced[i])));
assert.equal(product(physical),20);
assert.equal(product(practiced),16);
assert.equal(meanIntact,18);
assert.equal(mixedLayerMean,41.765625);
assert.equal(bestLayerMix,320);
assert.equal(comparisons[0].mean,comparisons[2].mean);
assert.equal(comparisons[1].mean,80);
assert.equal(comparisons[0].meanEffectsAt30,4);
const sharedLift={soloExecution:80,equalPartnersMean:80,unequalPartnersMean:60,
  finding:'A mean alone does not quantify the added physical support or reduced burden of a shared load.'};
const output={status:'Unadopted cross-character formula comparison, not a team rule',
  assumptions:[
    'Same-frame applicable participant calculations; shared context is not included twice.',
    'Mean of full contributions is an experimental extension, not the adopted two-Axis modifier mean.',
    'Probability concerns individual success only; Effects illustrated with ordinary roll30.',
    'Physical layer arrays are synthetic legal-rank arithmetic controls, not repriced complete characters.',
    'No lifting-capacity, team Scale, or shared Difficulty formula is established.'
  ],comparisons,layerMixing:{physical,practiced,meanIntact,mixedLayerMean,bestLayerMix},sharedLift};
fs.writeFileSync(path.join(__dirname,'lens-cross-character-compound-assembly-v0.1.results.json'),JSON.stringify(output,null,2)+'\n');
console.log(JSON.stringify(output,null,2));
