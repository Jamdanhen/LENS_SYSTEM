'use strict';

const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const crypto = require('node:crypto');
const { effectDistribution } = require('./lens-character-based-encounter-pacing-v0.1.cjs');
const inputPath = path.join(__dirname, 'lens-additive-foundation-review-v0.1.results.json');
const bytes = fs.readFileSync(inputPath);
const package1 = JSON.parse(bytes);
const models = ['current', 'accessOnly'];
const cost = (axes, model, acquisition = 40) => acquisition +
  15 * axes.reduce((sum, rank) => sum + rank, 0) +
  (model === 'current' ? 40 * (Math.max(1, ...axes) - 1) : 0);
const costRows = [[0],[1],[5],[10],[5,5,5],[5,5,5,5,5],Array(5).fill(10),Array(20).fill(10)]
  .map(axes => ({ axes, current:cost(axes,'current'), candidate:cost(axes,'accessOnly'),
    savings:cost(axes,'current') - cost(axes,'accessOnly'),
    currentSessions14:Math.ceil(cost(axes,'current') / 14),
    candidateSessions14:Math.ceil(cost(axes,'accessOnly') / 14) }));
assert.deepEqual(costRows.slice(1,6).map(row=>[row.current,row.candidate]),
  [[55,55],[275,115],[550,190],[425,265],[575,415]]);
assert.equal(Math.ceil(190 / 10),19);
const singleAtBudget = (budget, model, acquisition = 40) => {
  if (budget < acquisition) return null;
  let rank = 0;
  for (let r = 0; r <= 10; r++) if (cost([r],model,acquisition) <= budget) rank = r;
  return { rank, spent:cost([rank],model,acquisition), remaining:budget-cost([rank],model,acquisition),
    multiplier:1+rank/10 };
};
const budgetRows = [40,55,80,110,115,125,190,275,550].map(budget => ({ budget,
  current:singleAtBudget(budget,'current'), candidate:singleAtBudget(budget,'accessOnly') }));
assert.equal(singleAtBudget(125,'current').rank,2);
assert.equal(singleAtBudget(125,'accessOnly').rank,5);

// Ranks, equipment, Difficulty, Function and the Axis modifier are all rational.
// Apply the single final floor only after assembling the complete Expression.
function expression(ranks, additive, axis = 0, difficulty = null, equipment = 10, fn = 100) {
  const [a,d,...training] = ranks;
  assert(a >= 1 && a <= 10 && d >= 0 && d <= a && axis >= 0 && axis <= 10);
  let n = BigInt(additive ? a+d : a*(10+d));
  let q = additive ? 1n : 10n;
  for (const rank of training) { assert(rank >= 0 && rank <= 10); n *= BigInt(10+rank); q *= 10n; }
  n *= BigInt(10+axis) * BigInt(equipment) * BigInt(fn); q *= 10000n;
  if (difficulty !== null) { n *= 98n * 3n ** BigInt(difficulty-1); q *= 100n * 5n ** BigInt(difficulty-1); }
  return { exact:Number(n)/Number(q), rating:Number(n/q) };
}
const metrics = rating => {
  let effects = 0;
  for (const [e,p] of effectDistribution(rating)) effects += e*p;
  return { rating, chance:Math.max(1,Math.min(99,rating)), meanEffects:effects };
};
const controlledRoutes = [
  {id:'low', ranks:[3,3,3,3,3,3], equipment:10},
  {id:'middle', ranks:[5,5,5,5,5,5], equipment:10},
  {id:'middle-broad', ranks:[5,5,5,5,0,0], equipment:10},
  ...package1.buildRoutes.filter(r=>['guide-signature','guide-broad','shop-ledger','medical-narrow'].includes(r.id)),
];
const factorial = controlledRoutes.map(route => ({ id:route.id, ranks:route.ranks, equipment:route.equipment,
  variants:[
    ['current',false,2],['package1Only',true,2],['package2Only',false,5],['both',true,5],
  ].map(([id,additive,axis]) => ({ id, axis, raw:expression(route.ranks,additive,axis,null,route.equipment).exact,
    difficulties:[1,2,3].map(difficulty=>({difficulty,...metrics(expression(route.ranks,additive,axis,difficulty,route.equipment).rating)})) })) }));
assert.equal(factorial.find(r=>r.id==='middle').variants[0].difficulties[0].rating,44);
assert.equal(factorial.find(r=>r.id==='middle').variants[3].difficulties[0].rating,74);
for (let rank=1;rank<10;rank++) {
  assert.equal(cost([rank+1],'current')-cost([rank],'current'),55);
  assert.equal(cost([rank+1],'accessOnly')-cost([rank],'accessOnly'),15);
}
for (const model of models) assert.equal(cost([10,1],model)-cost([10],model),15);
assert.equal(expression([10,10,10,10,10,10],false,10).exact,640);
assert.equal(expression([10,10,10,10,10,10],true,10).exact,640);

// Enumerate upgrades on an existing route using only the additional eligible
// budget. Existing ranks, protected spending, and permissions are not exchanged.
function bestAllocation(initial, equipment, additive, model, budget, acquire, ceilings = Array(6).fill(10)) {
  const prices = [60,20,10,10,5,5];
  let best = null, alternatives = 0;
  const consider = (ranks,spent) => {
    for (let axis=0;axis<=(acquire ? 10 : 0);axis++) {
      const total = spent + (acquire ? cost([axis],model) : 0);
      if (total > budget) continue;
      const raw = expression(ranks,additive,axis,null,equipment).exact;
      alternatives++;
      if (!best || raw > best.raw + 1e-9 || (Math.abs(raw-best.raw)<1e-9 && total<best.spent)) {
        best = { ranks:[...ranks], axis, spent:total, remaining:budget-total, raw,
          d1:metrics(expression(ranks,additive,axis,1,equipment).rating),
          d3:metrics(expression(ranks,additive,axis,3,equipment).rating) };
      }
    }
  };
  function visit(index,ranks,spent) {
    if (index===6) { consider(ranks,spent); return; }
    const ceiling = Math.min(ceilings[index],index===1 ? ranks[0] : 10);
    for (let rank=initial[index];rank<=ceiling;rank++) {
      const next = spent + (rank-initial[index])*prices[index];
      if (next > budget) break;
      ranks[index]=rank;
      visit(index+1,ranks,next);
    }
  }
  visit(0,[...initial],0);
  return {best,alternatives};
}
const optimization = controlledRoutes.filter(r=>['middle','guide-signature','guide-broad'].includes(r.id))
  .map(route=>({id:route.id, initial:route.ranks, budget:125,
    narrowLayersAvailable:route.id!=='guide-broad',
    variants:[false,true].flatMap(additive=>[
      {additive,mode:'ordinaryOnly',...bestAllocation(route.ranks,route.equipment,additive,'current',125,false,
        route.id==='guide-broad' ? [10,10,10,10,0,0] : undefined)},
      ...models.map(model=>({additive,mode:model,...bestAllocation(route.ranks,route.equipment,additive,model,125,true,
        route.id==='guide-broad' ? [10,10,10,10,0,0] : undefined)})),
    ])}));

const compounds = models.map(model=>{
  const feasible = [];
  for (let a=0;a<=10;a++) for (let b=0;b<=10;b++) {
    if (cost([a,b],model)<=125) feasible.push({axes:[a,b],spent:cost([a,b],model),mean:1+(a+b)/20});
  }
  const maximum = Math.max(...feasible.map(f=>f.mean));
  return {model,maximum,ties:feasible.filter(f=>f.mean===maximum)};
});
assert.equal(compounds[0].maximum,1.15);
assert.equal(compounds[1].maximum,1.25);
const limitations = [40,30,20,10].map(acquisition=>({acquisition,
  current:singleAtBudget(125,'current',acquisition),candidate:singleAtBudget(125,'accessOnly',acquisition),
  buyoffToUnrestricted:40-acquisition}));
const replacementPrices = [1,3,5,20].map(count=>({axes:count,
  atRank5:15+40*4/(5*count), atRank10:15+40*9/(10*count)}));

// Existing guide's mundane defensive knowledge is not granted a HOLT bonus.
function remainder(attack,defense) {
  let hit=0,ten=0,mean=0;
  for (const [a,pa] of effectDistribution(attack)) for (const [d,pd] of effectDistribution(defense)) {
    const n=Math.max(0,a-d); const p=pa*pd;
    hit+=(n>0)*p; ten+=(n>=10)*p; mean+=n*p;
  }
  return {attack,defense,hitPct:hit*100,tenEffectsPct:ten*100,mean};
}
const signature = controlledRoutes.find(r=>r.id==='guide-signature');
const dodge = package1.buildRoutes.find(r=>r.id==='guide-dodge-field');
const opposition = [
  ['current',false,2],['package1Only',true,2],['package2Only',false,5],['both',true,5],
].map(([id,additive,axis])=>({id,...remainder(
  expression(signature.ranks,additive,axis,3,signature.equipment).rating,
  expression(dodge.ranks,additive,0,null,dodge.equipment).rating)}));
const impairment = [100,75,50,25].map(fn=>({fn,
  current:metrics(expression([5,5,5,5,5,5],false,2,3,10,fn).rating),
  both:metrics(expression([5,5,5,5,5,5],true,5,3,10,fn).rating)}));
const output={status:'Package 2 independent and factorial review; no adoption, refunds, repricing or award changes.',
  input:path.basename(inputPath),hash:crypto.createHash('sha256').update(bytes).digest('hex'),
  costRows,budgetRows,factorial,optimization,compounds,limitations,replacementPrices,opposition,impairment,
  assumptions:[
    'Default baseline horizon 10. Acquisition 40, Axis ranks 15. No discount except labelled limitation controls.',
    '125 is additional HOLT-eligible funding; protected creation points are never spent on HOLTs.',
    'Axis development is on a defined Open route. It grants no new permission, automatic Scale or duration change.',
    'Synthetic and existing routes assume the HOLT actually applies; no universal theme or automatic Field applicability is adopted.',
    'Factorial comparison spends only on acquisition and one Axis; optimization separately permits ordinary upgrades from the same 125.',
    'Optimization maximizes one known applicable route, not whole-character value; new themes and other routes are not assigned artificial numerical utility.',
    'The broad-firearm optimization excludes Specialty and Precision, preserving coverage outside narrower expertise rather than turning it into another specialized shot.',
    'Counter output and complication consequences are not encounter-simulated here. Initial 00 contributes zero successful output; 01 distribution tail omission is 1e-12 per actor.',
    'D3 is a distinct challenge fixture, not an extra charge for active opposition.',
    'No Scope prices, compensation credits, paid rerolls, or invented training requirements are used.',
  ]};
fs.writeFileSync(path.join(__dirname,'lens-access-only-holt-review-v0.1.results.json'),JSON.stringify(output,null,2)+'\n');
console.log(JSON.stringify({costRows,budgetRows,
  factorial:factorial.map(r=>({id:r.id,variants:r.variants.map(v=>({id:v.id,axis:v.axis,raw:v.raw,
    chances:v.difficulties.map(d=>d.chance)}))})),
  optimization,compounds,limitations,replacementPrices,opposition,impairment},null,2));
