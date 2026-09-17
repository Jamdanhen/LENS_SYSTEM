'use strict';
// Experimental controls only; no file writes and no adopted Aspect price.
const assert = require('node:assert/strict');
let checks = 0;
const check = (condition, message) => { assert.ok(condition, message); checks++; };
const eq = (a, b, message) => { assert.deepEqual(a, b, message); checks++; };

// Integer tenths preserve the exact context/Aspect calculation until final floor.
function expression(base, contextTenths, rank, spend, boost) {
  assert.ok(Number.isInteger(spend) && spend >= 0);
  const temporaryRank = Math.min(10, rank + 2 * spend);
  const numerator = BigInt(base) * BigInt(Math.max(0, contextTenths + 2 * Number(boost)))
    * BigInt(10 + temporaryRank);
  const rating = Number(numerator / 100n);
  return { temporaryRank, rating, chance: Math.min(99, Math.max(1, rating)),
    cost: spend + Number(boost) };
}
const toCap = rank => Math.ceil((10 - rank) / 2);
const effects = (rating, roll) => roll <= rating ? 1 + Math.floor((rating - roll) / 10) : 0;
const immediate = [];
for (const base of [20, 40, 80]) {
  for (const context of [-2, 0, 5, 10, 15, 20]) {
    for (let rank = 0; rank <= 10; rank++) {
      for (let spend = 0; spend <= toCap(rank); spend++) {
        const a = expression(base, context, rank, spend, false);
        const b = expression(base, context, rank, spend, true);
        check(a.temporaryRank <= 10, 'Aspect ceiling');
        check(b.rating >= a.rating, 'ordinary boost never reduces output');
        check(a.rating >= expression(base, context, rank, 0, false).rating, 'push monotonic');
        check(a.chance >= 1 && a.chance <= 99, 'permitted required-roll chance bounds');
        immediate.push({ base, context: context / 10, rank, spend, a, b });
      }
    }
  }
}
const neutralRows = Array.from({ length: 6 }, (_, spend) => ({ spend,
  aspectOnly: expression(40, 10, 0, spend, false),
  combined: expression(40, 10, 0, spend, true) }));
eq(neutralRows.map(x => x.combined.rating), [48, 57, 67, 76, 86, 96], 'independent table');
eq(effects(48, 35), 2, 'ordinary boosted Effects');
eq(effects(96, 35), 7, 'full push Effects');
eq(expression(40, 10, 9, 1, true).temporaryRank, 10, 'odd last rank clips at cap');
eq(expression(40, 0, 0, 5, false).rating, 0, 'independent factor cannot lift zero context');
eq(expression(40, 0, 0, 5, true).rating, 16, 'ordinary Resonance can lift zero context');

// Analytical equivalent-value model, NOT a spendable currency or GM scoring rule.
// Quarter-point units permit exact 0%, 75%, 100% recognition controls.
function campaign({ sessions = 12, every = 4, ratioQuarters = 4, proxy = 20,
  eligible = true, initialRank = 1, includeOrdinary = false, award = 19 }) {
  let rank = initialRank, bank = 20, spent = 0, progressQ = 0, recognizedQ = 0;
  let sessionsToCap = null;
  const events = [];
  for (let session = 1; session <= sessions; session++) {
    if (session % every === 0) {
      const aspectSpend = toCap(rank), cost = aspectSpend + 1;
      check(bank >= cost, 'available funds before spending');
      const beforeRank = rank;
      const result = expression(40, 10, rank, aspectSpend, true);
      bank -= cost; spent += cost;
      // Model grants after this result only to isolate recognition feedback.
      // This does not impose between-scenes timing on actual awards.
      const recognized = eligible ? ratioQuarters * (aspectSpend + Number(includeOrdinary)) : 0;
      recognizedQ += recognized; progressQ += recognized;
      while (rank < 10 && progressQ >= 4 * proxy) {
        rank++; progressQ -= 4 * proxy;
      }
      if (rank === 10 && sessionsToCap === null) sessionsToCap = session;
      events.push({ session, beforeRank, aspectSpend, cost, result: result.rating,
        recognizedValue: recognized / 4, afterRank: rank, progress: progressQ / 4 });
    }
    bank += award; // Same session award for every comparison; no deductions/refunds.
  }
  eq(bank + spent, 20 + sessions * award, 'cash conservation, no returned spend');
  eq((rank - initialRank) * proxy * 4 + progressQ, recognizedQ, 'value accounting');
  check(rank >= initialRank && rank <= 10, 'permanent rank bounds');
  return { sessions, every, recognitionPercent: ratioQuarters * 25, proxy,
    eligible, includeOrdinary, award, initialRank, finalRank: rank,
    finalMultiplier: 1 + rank / 10, spent, bank, recognizedValue: recognizedQ / 4,
    remainingEquivalentValue: progressQ / 4,
    rankEquivalentTotal: recognizedQ / (4 * proxy), sessionsToCap, events };
}
const campaigns = [];
for (const sessions of [12, 36]) for (const every of [1, 4]) {
  for (const ratioQuarters of [0, 3, 4]) for (const proxy of [10, 20, 60]) {
    campaigns.push(campaign({ sessions, every, ratioQuarters, proxy }));
  }
}
const recognitionGate = [false, true].map(eligible => campaign({ eligible, every: 1 }));
eq(recognitionGate[0].finalRank, 1, 'mere activation has no assumed permanent award');
check(recognitionGate[1].finalRank > 1, 'recognized aligned expenditure can develop Aspect');
const spendingScopes = [false, true].map(includeOrdinary => campaign({ includeOrdinary, every: 1 }));
const awardSensitivity = [10, 19, 30].map(award => campaign({ award, every: 1 }));
eq(awardSensitivity.map(x => x.finalRank), [3, 3, 3], 'same expenditure evidence, different income');

// Alternative literal interpretations of "same rate", not attributed user rules.
function directRankConversion(perPoint) {
  let rank = 1, spent = 0;
  const events = [];
  while (rank < 10 && events.length < 20) {
    const aspectSpend = toCap(rank), beforeRank = rank;
    spent += aspectSpend + 1;
    rank = Math.min(10, rank + aspectSpend * perPoint);
    events.push({ beforeRank, aspectSpend, ordinaryBoostCost: 1, afterRank: rank });
  }
  check(rank === 10, 'direct-rank control reaches cap');
  return { permanentRanksPerRecognizedPoint: perPoint, events, totalCost: spent };
}
const literalControls = [1, 2].map(directRankConversion);
eq(literalControls.map(x => x.events.length), [4, 1], 'literal-rate acceleration');

// Success versus failure does not alter a separately stipulated GM recognition input.
const success = { result: effects(96, 35), recognizedValue: 5 };
const failure = { result: 0, recognizedValue: 5 }; // natural 00 fixture, no complication simulation
eq(success.recognizedValue, failure.recognizedValue, 'recognition not contingent on success');
// Distinct simultaneous Aspects have independent development, no global award quota.
const twoAspects = [campaign({ every: 4 }), campaign({ every: 4 })];
eq(twoAspects[0].recognizedValue, twoAspects[1].recognizedValue, 'independent Aspect ledgers');
// Same physical expenditure is not silently copied into both: these fixtures use distinct spends.

// Scripted GM decisions, not rules inferring narrative value from event counts.
// Whole-scene awards already include expenditure as evidence: no second spend-credit award.
function narrativeSchedule(label, pushSessions, awardSessions) {
  let rank = 1, spent = 0, bank = 20, firstCap = null;
  const log = [];
  for (let session = 1; session <= 12; session++) {
    const before = rank;
    const cost = pushSessions.includes(session) ? toCap(rank) + 1 : 0;
    check(bank >= cost, 'narrative fixture funds');
    bank -= cost; spent += cost;
    if (awardSessions.includes(session)) rank = Math.min(10, rank + 1);
    if (rank === 10 && firstCap === null) firstCap = session;
    bank += 19;
    log.push({ session, before, cost, after: rank });
  }
  eq(bank + spent, 248, 'narrative fixture conservation');
  return { label, finalRank: rank, finalMultiplier: 1 + rank / 10, spent, bank, firstCap, log };
}
const everySession = Array.from({ length: 12 }, (_, i) => i + 1);
const narrativeSchedules = [
  narrativeSchedule('Quiet alignment; three independently justified whole-scene awards', [], [4, 8, 12]),
  narrativeSchedule('Three significant costly scenes; same three whole-scene awards', [4, 8, 12], [4, 8, 12]),
  narrativeSchedule('Routine enhanced use; no stipulated growth recognition', everySession, []),
  narrativeSchedule('Sensitivity: GM grants a whole rank after every push', everySession, everySession)
];
eq(narrativeSchedules.map(x => x.finalRank), [4, 4, 1, 10], 'whole-scene controls');
eq(narrativeSchedules[1].spent, 16, 'earned development reduces later push costs');
eq(narrativeSchedules[3].firstCap, 9, 'whole rank per event sensitivity');

const output = {
  status: 'Unadopted analytical test; equivalent-value proxies are not Aspect purchase prices or GM tick marks.',
  controls: { permanentRankMaximum: 10, temporaryRankGainPerPoint: 2,
    ordinaryBoostCost: 1, ordinaryBoostResonance: 0.2, startingBank: 20,
    sessionAward: 19, startingPermanentRank: 1, proxyValues: [10, 20, 60],
    currentUnrestrictedAxisRankCost: 20, contextualFloor: 0, exactFinalFloor: true },
  verification: { immediateCases: immediate.length, campaignCases: campaigns.length, checks },
  neutralRows, campaignResults: campaigns, recognitionGate, spendingScopes,
  awardSensitivity, literalControls, narrativeSchedules, narrativeOutcomeControl: { success, failure },
  savingsControl: { sessions: 12, spending: 0, bank: 248 },
  boostRerollControl: { rating: 48, maxCost: 2, eventualSuccessPercent: 72.96,
    policy: 'Reroll only failures; unopposed success, not sufficient Effects for a declared goal.' }
};
const compact = row => Object.fromEntries(Object.entries(row).filter(([key]) => key !== 'events'));
const summary = { verification: output.verification, neutralRows,
  twelveSession20: campaigns.filter(x => x.sessions === 12 && x.proxy === 20).map(compact),
  proxySensitivity: campaigns.filter(x => x.sessions === 12 && x.every === 1 && x.recognitionPercent === 100).map(compact),
  longRun20: campaigns.filter(x => x.sessions === 36 && x.proxy === 20 && x.recognitionPercent === 100).map(compact),
  recognitionGate: recognitionGate.map(compact), spendingScopes: spendingScopes.map(compact),
  literalControls, narrativeSchedules: narrativeSchedules.map(({ log, ...row }) => row) };
process.stdout.write(JSON.stringify(process.argv.includes('--summary') ? summary : output, null, 2) + '\n');
