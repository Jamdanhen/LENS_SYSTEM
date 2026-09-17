'use strict';

const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const prices = {a:60,d:20,d2:20,t:10,f:10,s:5,p:5,newField:10,x:15,y:15,h:40,h2:40};
const labels = {a:'Attribute',d:'Primary Derived',d2:'Second Derived',t:'Task',f:'Field',
  s:'Specialty',p:'Precision',newField:'New Field',x:'Primary Axis',y:'Second Axis',
  h:'HOLT Access',h2:'Second HOLT Access'};
const initial = {a:5,d:3,d2:3,t:5,f:5,s:5,p:5,newField:0,x:0,y:0,h:0,h2:0};
const plans = {
  ordinary:['t','d','s','f','d2','a','newField','newField','newField','s','d','p','a','t','d2','f','a'],
  focusedHOLT:['t','h','x','d','s','x','f','x','p','x','d','x','s','x','a','x','x','x','x','f','a'],
  broadHOLT:['h','x','t','y','d2','s','x','y','newField','newField','newField','h2','x','y','a','x','y','d','a'],
};
const patterns = {
  reference:Array(12).fill(9),
  varied:[9,6,12,0,9,15,3,9,20,6,12,9],
};
const attainable = new Set();
for (const a of [0,3,5]) for (const b of [0,3,5])
  for (const c of [0,3,5]) for (const d of [0,3,5]) attainable.add(a+b+c+d);
for (const pattern of Object.values(patterns)) pattern.forEach(v=>assert(attainable.has(v)));

// Exact rational arithmetic for the additive foundation and one applicable Axis.
function output(s, signature=true) {
  const factors = signature ? [s.t,s.f,s.s,s.p,s.x] : [s.t,s.f,s.x];
  let n = BigInt(s.a+s.d), q=1n;
  for (const rank of factors) {n*=BigInt(10+rank);q*=10n;}
  return {raw:Number(n)/Number(q), d1:Number(n*98n/(q*100n)),
    d2:Number(n*98n*3n/(q*100n*5n))};
}
function simulate(planName, participation, requestedSpend, patternName='reference', opening=8) {
  let balance=opening, development=0, help=0, earned=0, index=0, unmet=0;
  const reserve=8, state={...initial}, timeline=[];
  for (let session=1;session<=12;session++) {
    const startingBalance=balance;
    const spent=Math.min(balance,requestedSpend);
    balance-=spent;help+=spent;unmet+=requestedSpend-spent;
    const award=participation+patterns[patternName][session-1];
    balance+=award;earned+=award;
    const purchases=[];
    while (index<plans[planName].length) {
      const key=plans[planName][index], cost=prices[key];
      if (balance-cost<reserve) break;
      if (key==='x'||key==='y') assert.equal(state.h,1);
      if (key==='h'||key==='h2') assert.equal(state[key],0);
      state[key]++;
      assert(state.d<=state.a && state.d2<=state.a);
      for (const [k,r] of Object.entries(state)) assert(r<=((k==='h'||k==='h2')?1:10));
      balance-=cost;development+=cost;index++;
      purchases.push({key,description:labels[key],
        ...((key==='h'||key==='h2')?{acquired:true}:{newRank:state[key]}),cost});
    }
    assert(balance>=0);
    assert.equal(opening+earned,help+development+balance);
    timeline.push({session,startingBalance,spent,unfundedHelp:requestedSpend-spent,
      award,purchases,balance,state:{...state},signature:output(state),broad:output(state,false)});
  }
  const milestones = {};
  for (const [name,key,rank] of [['attribute6','a',6],['access','h',1],['axis5','x',5],
    ['twoAxes2','y',2],['newField3','newField',3],['secondAccess','h2',1]]) {
    const row=timeline.find(row=>row.state[key]>=rank && (name!=='twoAxes2'||row.state.x>=2));
    milestones[name]=row?.session??null;
  }
  return {planName,participation,requestedSpend,patternName,opening,reserve,
    earned,help,unmet,development,balance,unspentAboveReserve:Math.max(0,balance-reserve),
    state,signature:output(state),broad:output(state,false),milestones,timeline};
}
const runs = [];
for (const pattern of Object.keys(patterns)) for (const plan of Object.keys(plans))
  for (const spend of [0,4,8]) for (const participation of [5,10])
    runs.push(simulate(plan,participation,spend,pattern));
for (const plan of Object.keys(plans)) for (const spend of [0,4,8]) {
  const pair=runs.filter(r=>r.patternName==='reference'&&r.planName===plan&&r.requestedSpend===spend);
  assert.equal(pair[1].earned-pair[0].earned,60);
  assert.equal(pair[1].help,pair[0].help);
  assert.equal(pair[1].development+pair[1].balance-pair[0].development-pair[0].balance,60);
  assert.equal(pair[0].unmet+pair[1].unmet,0);
}
assert.equal(output(initial).raw,40.5);
const noOpening = [5,10].map(p=>simulate('ordinary',p,4,'reference',0));
assert(noOpening.every(r=>r.timeline[0].spent===0 && r.timeline[0].unfundedHelp===4));
const isolated = [5,10].map(participation=>({participation,
  cases:[0,4,8].map(spend=>({spend,net:participation+9-spend,
    specialty10:Math.ceil(50/(participation+9-spend)),attribute1:Math.ceil(60/(participation+9-spend)),
    accessAxis10:Math.ceil(190/(participation+9-spend))}))}));
const results = {status:'Test only; Participation 10 not adopted',
  assumptions:'Packages 1 and 2 together; same flat prices; no milestones or story grants',
  initial,initialSignature:output(initial),initialBroad:output(initial,false),prices,plans,patterns,
  runs,noOpening,isolated};
fs.writeFileSync(path.join(__dirname,'lens-participation-ten-mixed-development-test-v0.1.results.json'),JSON.stringify(results,null,2)+'\n');
console.log(JSON.stringify({checks:'passed',runs:runs.length,
  reference:runs.filter(r=>r.patternName==='reference').map(({timeline,...r})=>r),
  variedHeavy:runs.filter(r=>r.patternName==='varied'&&r.requestedSpend===8)
    .map(({planName,participation,earned,help,unmet,development,balance})=>
      ({planName,participation,earned,help,unmet,development,balance})),isolated},null,2));
