'use strict';

// Review controls, not adopted encounter targets, award schedules, or Aspect rules.
// Writes only to stdout. Retains exact rational arithmetic through final flooring.
const assert = require('node:assert/strict');
let checks = 0;
function check(value, message) { assert.ok(value, message); checks++; }

function rating({ a = 5, d = 3, training = [5, 5, 5, 5], axis = null,
  difficulty = 1, aspectRank = 0, spend = 0, contextTenths = 10,
  boost = false }) {
  assert.ok(d <= a && a <= 10 && d >= 0);
  assert.ok(difficulty >= 1 && Number.isInteger(difficulty));
  assert.ok(Number.isInteger(spend) && spend >= 0);
  assert.ok(aspectRank >= 0 && aspectRank <= 10);
  let numerator = BigInt(a + d), denominator = 1n;
  for (const rank of training) {
    numerator *= BigInt(10 + rank); denominator *= 10n;
  }
  if (axis !== null) { numerator *= BigInt(10 + axis); denominator *= 10n; }
  numerator *= BigInt(10 + Math.min(10, aspectRank + 2 * spend));
  denominator *= 10n;
  numerator *= BigInt(Math.max(0, contextTenths + (boost ? 2 : 0)));
  denominator *= 10n;
  numerator *= 98n * 6n ** BigInt(difficulty - 1);
  denominator *= 100n * 10n ** BigInt(difficulty - 1);
  return Number(numerator / denominator);
}

function effects(finalRating, roll, forcedSuccess = false) {
  if (!forcedSuccess && roll > finalRating) return 0;
  return 1 + Math.floor(Math.max(0, finalRating - roll) / 10);
}

function distribution(finalRating) {
  const result = new Map();
  const add = (e, p) => result.set(e, (result.get(e) || 0) + p);
  add(0, 0.01); // Natural 00: separate complication is not offensive output.
  for (let roll = 2; roll <= 99; roll++) add(effects(finalRating, roll), 0.01);
  // Initial 01, then zero through five repeated continuation 01s before 02-00.
  // Excluded probability per actor: 0.01^7 = 1e-14. Not a game continuation cap.
  for (let repeats = 0; repeats <= 5; repeats++) {
    const probability = 0.01 ** (repeats + 2);
    for (let terminal = 2; terminal <= 100; terminal++) {
      const adjusted = 1 - 99 * repeats - (100 - terminal);
      add(effects(finalRating, adjusted, true), probability);
    }
  }
  check(Math.abs([...result.values()].reduce((a, b) => a + b, 0) - 1) < 1e-12,
    'distribution accounts for all but the stated continuation tail');
  return result;
}

function opposed(attackRating, defenseRating) {
  let hit = 0, equal = 0, surplus = 0, meanRemainder = 0;
  for (const [a, pa] of distribution(attackRating)) {
    for (const [d, pd] of distribution(defenseRating)) {
      const p = pa * pd;
      if (a > d) { hit += p; meanRemainder += (a - d) * p; }
      else if (a === d) equal += p;
      else surplus += p;
    }
  }
  check(Math.abs(hit + equal + surplus - 1) < 1e-11, 'opposed probability conservation');
  return { attackRating, defenseRating, offensiveRemainderPercent: hit * 100,
    equalEffectsPercent: equal * 100, defensiveSurplusPercent: surplus * 100,
    meanOffensiveRemainderBeforeMitigation: meanRemainder };
}

const modes = [
  { label: 'No Aspect; no spending', options: {} },
  { label: 'Rank-1 Aspect; no spending', options: { aspectRank: 1 } },
  { label: 'Access-only Aspect; five-point push', options: { spend: 5 } },
  { label: 'Access-only Aspect; five-point push and ordinary boost',
    options: { spend: 5, boost: true } }
];
const completeExpressions = [1, 2, 3].map(difficulty => ({ difficulty,
  ordinary: modes.map(m => ({ label: m.label, rating: rating({ difficulty, ...m.options }) })),
  axis5: modes.map(m => ({ label: m.label, rating: rating({ difficulty, axis: 5, ...m.options }) }))
}));
assert.deepEqual(completeExpressions[0].ordinary.map(x => x.rating), [39, 43, 79, 95]); checks++;

const opposedCases = [
  ['Neither actor uses an Aspect', {}, {}],
  ['Only attacker has starting Rank 1', { aspectRank: 1 }, {}],
  ['Both actors have starting Rank 1', { aspectRank: 1 }, { aspectRank: 1 }],
  ['Only attacker buys ordinary boost', { boost: true }, {}],
  ['Only attacker uses full Aspect push plus boost', { spend: 5, boost: true }, {}],
  ['Full attacker push against ordinary boosted defense', { spend: 5, boost: true }, { boost: true }],
  ['Both actors use full Aspect push plus boost', { spend: 5, boost: true }, { spend: 5, boost: true }],
  ['Attacker has permanent Rank 8; defender Rank 2', { aspectRank: 8 }, { aspectRank: 2 }]
].map(([label, attack, defense]) => ({ label, ...opposed(rating(attack), rating(defense)) }));
check(opposedCases[4].offensiveRemainderPercent > opposedCases[3].offensiveRemainderPercent,
  'full push has greater opposed-output impact than one ordinary boost');

const peakCost = [0, 1, 2, 5, 8, 9, 10].map(rank => ({ permanentRank: rank,
  unspentFactor: 1 + rank / 10, pointsToReach2: Math.ceil((10 - rank) / 2) }));
const sessionSpending = [1, 2, 3].map(pushes => ({ pushes,
  aspectAndBoostCost: 6 * pushes, retainedFrom19: 19 - 6 * pushes,
  retainedIfEveryPushAlsoUsesOneReroll: 19 - 7 * pushes }));

const maximum = { a: 10, d: 10, training: [10, 10, 10, 10], aspectRank: 10 };
const maxima = { ordinaryRawWithoutAspect: 320, ordinaryRawWithAspect: 640,
  rawWithAxis10AndAspect10: 1280,
  ordinaryD1WithAspect: rating(maximum),
  axis10D1WithAspect: rating({ ...maximum, axis: 10 }),
  axis10D1WithAspectAndOrdinaryBoost: rating({ ...maximum, axis: 10, boost: true }) };
check(maxima.axis10D1WithAspect === 1254, 'maximum extra multiplier with final-only floor');
check(rating({ contextTenths: 0, spend: 5 }) === 0, 'Aspect does not reopen zero context');

process.stdout.write(JSON.stringify({ status: 'Review evidence; no adoption or rule changes',
  controls: { base: 'A5/D3/T5/F5/S5/P5; raw 40.5 before other factors',
    scale: 'matched', function: '100%', equipment: 'neutral',
    context: 'neutral unless one ordinary +0.20 boost is specified',
    opposed: 'independent Effects, full cancellation, no mitigation, no paid rerolls',
    natural01TailOmittedPerActor: 1e-14,
    natural00: 'zero successful Effects; separate complications not simulated',
    session: '19 is an illustration; all spending requires funds already held',
    excluded: 'automatic actions, target permissions, scene pacing, GM awards, player behavior' },
  completeExpressions, opposedCases, peakCost, sessionSpending, maxima, checks }, null, 2) + '\n');
