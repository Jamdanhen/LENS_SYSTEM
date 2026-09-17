'use strict';

const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const root = path.resolve(__dirname,'../..');
const read = file => fs.readFileSync(path.join(root,file),'utf8').replace(/\r\n/g,'\n');
const baseline = read('docs/system/lens-system-baseline-draft-v0.1.md');
const glossary = read('docs/system/lens-terminology-quick-reference-v0.1.md');
const adoption = read('docs/design/lens-core-three-package-adoption-v0.1.md');
const pricing = read('docs/design/lens-unified-pricing-adoption-v0.1.md');
const awards = read('docs/design/lens-session-awards-working-proposal-v0.1.md');
const flat = text => text.replace(/\s+/g,' ');
function contains(text, phrase) {assert(flat(text).includes(phrase),`Missing: ${phrase}`);}
function section(text,start,end) {
  const a=text.indexOf(start), b=text.indexOf(end,a+start.length);
  assert(a>=0&&b>a,`Missing section ${start}`);
  return text.slice(a,b);
}
const formula='(A + D) x (1 + T/10) x (1 + F/10) x (1 + S/10) x (1 + P/10)';
for (const text of [baseline,glossary,adoption]) contains(text,formula);
for (const text of [baseline,glossary]) {
  for (const stale of ['The HOLT Rank caps Axis Rank','No Axis Rank may exceed its parent HOLT Rank',
    'HOLT acquisition / later parent Rank','Initial acquisition includes HOLT Rank 1',
    'An unranked Derived Attribute remains available through its parent at x1.0.']) {
    assert(!flat(text).includes(stale),`Stale current doctrine: ${stale}`);
  }
  contains(text,'no free first Derived rank');
  contains(text,'320');
  contains(text,'12.5');
}
const priceSection=section(baseline,'### Unified Flat Pricing','### Narrative Eligibility');
const expected = {Attribute:60,'HOLT acquisition / defined Access, once':40,
  'Derived Attribute':20,'HOLT Axis':15,Task:10,Field:10,Specialty:5,Precision:5};
for (const [key,value] of Object.entries(expected)) {
  contains(priceSection,`| ${key} | ${value} |`);
}
const awardSection=section(baseline,'### Session Awards','### Working Boost and Reroll Sequence');
const awardDesign=section(awards,'## Adopted Working Award Card','### Additional Story Awards');
for (const text of [awardSection,awardDesign]) {
  contains(text,'| Participation | 10 |');
  for (const c of ['Progress','Discovery','Character Expression','Narrative Engagement']) {
    contains(text,`| ${c} | 0 / 3 / 5 |`);
  }
  assert(!text.includes('| Participation | 5 |'));
  contains(text,'10-30');
  contains(text,'19');contains(text,'22');
}
contains(glossary,'Participation: 10');
contains(glossary,'Three-meaningful session reference: 19; all meaningful: 22');
contains(pricing,'| HOLT acquisition / defined Access, once | 40 |');
contains(baseline,'no parent HOLT Rank and no Axis Ranks');
contains(baseline,'no parent HOLT Rank must be bought first');
contains(baseline,'without a replacement cap tied to Derived Attribute Rank');
contains(glossary,'It is not capped by Derived Rank');
contains(baseline,'The ordinary Derived-to-Attribute cap remains');
contains(baseline,'this adoption authorizes neither refunds nor free Axes');
contains(baseline,'their replacement requires a specific decision');
contains(baseline,'Exact returns and the replacement for the former parent-rank reinvestment ceiling remain unresolved');
const limitations=section(baseline,'### Working HOLT Acquisition Estimate','### Earlier HOLT Scope-Estimation Aid');
for (const [label,value] of [['None',40],['Modest: 25% reduction',30],
  ['Substantial: 50% reduction',20],['Severe: 75% reduction',10]]) {
  contains(limitations,`| ${label} | ${value} |`);
}
contains(limitations,'Limitation reductions apply only to initial acquisition, not Axis development');

function expression(a,d,t,f,s,p,axis=0,difficulty=null) {
  assert(Number.isInteger(a)&&a>=1&&a<=10);
  assert(Number.isInteger(d)&&d>=0&&d<=a);
  let n=BigInt(a+d),q=1n;
  for (const rank of [t,f,s,p,axis]) {
    assert(Number.isInteger(rank)&&rank>=0&&rank<=10);
    n*=BigInt(10+rank);q*=10n;
  }
  if (difficulty!==null) {
    assert(Number.isInteger(difficulty)&&difficulty>=1);
    n*=98n*3n**BigInt(difficulty-1);q*=100n*5n**BigInt(difficulty-1);
  }
  return {raw:Number(n)/Number(q),rating:Number(n/q)};
}
let pairs=0,increased=0,unchanged=0;
for (let a=1;a<=10;a++) for (let d=0;d<=a;d++) {
  pairs++;
  const oldTimes10=a*(10+d),newTimes10=10*(a+d);
  assert(newTimes10>=oldTimes10);
  if (newTimes10===oldTimes10) unchanged++; else increased++;
  assert.equal(expression(a,d,0,0,0,0).raw,a+d);
}
assert.deepEqual([pairs,increased,unchanged],[65,45,20]);
assert.equal(expression(10,10,10,10,10,10).raw,320);
assert.equal(expression(10,10,10,10,10,10,10).raw,640);
assert.deepEqual([1,2,3].map(d=>expression(5,5,5,5,5,5,0,d).rating),[49,29,17]);
assert.equal(expression(2,1,0,0,0,0,10).raw,6); // Axis may exceed Derived.
assert.throws(()=>expression(2,3,0,0,0,0));
assert.throws(()=>expression(2,1,0,0,0,0,11));
const cost = (acquisition,axes) => acquisition+15*axes.reduce((s,r)=>s+r,0);
assert.deepEqual([40,30,20,10].map(a=>cost(a,[10])),[190,180,170,160]);
assert.equal(cost(40,[5,5,5]),265);
assert.equal(cost(40,[10,1])-cost(40,[10]),15);
assert.equal(20+20,40); // Substantial acquisition plus eligible buyoff.
assert.deepEqual([10,10+3*3,10+4*3,10+4*5],[10,19,22,30]);
assert.deepEqual([50,60,190].map(c=>Math.ceil(c/19)),[3,4,10]);
assert.deepEqual([50,60,190].map(c=>Math.ceil(c/15)),[4,4,13]);
assert.equal(20*60+50*20+750+125,3075);
assert.equal((19-4)*12-(14-4)*12,60);
for (const name of ['lens-additive-foundation-review','lens-access-only-holt-review',
  'lens-integrated-awards-review','lens-participation-ten-mixed-development-test']) {
  const text=read(`docs/tests/${name}-v0.1.md`);
  contains(text,'Subsequent decision:');
  contains(text,'lens-core-three-package-adoption-v0.1.md');
  assert(fs.existsSync(path.join(root,`docs/tests/${name}-v0.1.results.json`)));
}
contains(read('NEXT_STEPS.md'),'## Current Core Adoption - 2026-09-13');
contains(read('README.md'),'The baseline and terminology Markdown reference carry the current core rules.');
contains(read('docs/system/lens-system-working-reference-v0.2.md'),'## Subsequent Core Adoption');
console.log(JSON.stringify({status:'passed',legalFoundationPairs:pairs,increased,unchanged,
  ordinaryMaximum:320,oneAxisMaximum:640,prices:expected,
  awards:{participation:10,threeMeaningful:19,allMeaningful:22,range:[10,30],optionalMilestone:12.5},
  protectedPricedAllocation:3075,
  coverage:'Current document agreement, formula and cap checks, acquisition-only discounts, pacing, history notices, reserved conversion'},null,2));
