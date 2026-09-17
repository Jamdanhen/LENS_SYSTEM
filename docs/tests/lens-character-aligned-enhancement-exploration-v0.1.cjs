'use strict';

// Bounded, read-only calculator for an UNADOPTED character-aligned enhancement.
// Run with node; results go to stdout. No source or result files are modified.
const assert = require('node:assert/strict');
let assertions = 0;
function check(value, message) { assertions++; assert.ok(value, message); }
function gcd(a, b) { while (b) [a, b] = [b, a % b]; return a < 0n ? -a : a; }
class Q {
  constructor(n, d = 1n) {
    n = BigInt(n); d = BigInt(d);
    assert.notEqual(d, 0n);
    if (d < 0n) { n = -n; d = -d; }
    const g = gcd(n, d); this.n = n / g; this.d = d / g;
  }
  static of(value) {
    if (value instanceof Q) return value;
    const [whole, fraction = ''] = String(value).split('.');
    return new Q(BigInt(whole + fraction), 10n ** BigInt(fraction.length));
  }
  add(v) { v = Q.of(v); return new Q(this.n * v.d + v.n * this.d, this.d * v.d); }
  sub(v) { v = Q.of(v); return new Q(this.n * v.d - v.n * this.d, this.d * v.d); }
  mul(v) { v = Q.of(v); return new Q(this.n * v.n, this.d * v.d); }
  cmp(v) { v = Q.of(v); const x = this.n * v.d - v.n * this.d; return x < 0n ? -1 : x > 0n ? 1 : 0; }
  pow(n) { return new Q(this.n ** BigInt(n), this.d ** BigInt(n)); }
  nonnegative() { return this.n < 0n ? Q.of(0) : this; }
  floor() { assert.ok(this.n >= 0n); return Number(this.n / this.d); }
  number() { return Number(this.n) / Number(this.d); }
}
const sum = values => values.reduce((s, v) => s.add(v), Q.of(0));
const product = values => values.reduce((s, v) => s.mul(v), Q.of(1));

function calculate(raw, resonance, dissonance, enhancements = [], mode = 'pooled') {
  const x = Q.of(raw), unclamped = Q.of(1).add(resonance).sub(dissonance);
  const support = sum(enhancements);
  if (mode === 'pooled') return x.mul(unclamped.add(support).nonnegative());
  if (mode === 'independentCollected') return x.mul(unclamped.nonnegative()).mul(Q.of(1).add(support));
  if (mode === 'independentEach') return x.mul(unclamped.nonnegative()).mul(product(enhancements.map(e => Q.of(1).add(e))));
  throw new Error('Unknown comparison model');
}
function display(q) {
  const finalRating = q.floor();
  return {
    exact: `${q.n}/${q.d}`, raw: q.number(), finalRating,
    // Required, permitted, unopposed check; no paid reroll.
    successPercent: Math.min(99, Math.max(1, finalRating)),
    // Ordinary roll only. Not expected Effects, harm, or post-opposition output.
    effectsAtOrdinaryRoll40: finalRating < 40 ? 0 : 1 + Math.floor((finalRating - 40) / 10)
  };
}

const contexts = [
  ['Neutral', 0, 0], ['Other help', 0.5, 0], ['Interference', 0, 0.5],
  ['Equal help and interference', 0.5, 0.5], ['Context reduced to zero', 0, 1],
  ['Excess interference', 0, 1.1], ['Overwhelming interference', 0, 1.5],
  ['Distinct paid boost included', 0.2, 0]
];
const contextRows = contexts.map(([label, r, d]) => ({
  label, otherResonance: r, dissonance: d, enhancement: 0.2,
  baseline: display(calculate(60, r, d)),
  pooled: display(calculate(60, r, d, [0.2])),
  independent: display(calculate(60, r, d, [0.2], 'independentCollected'))
}));
const byLabel = Object.fromEntries(contextRows.map(row => [row.label, row]));
check(byLabel.Neutral.pooled.finalRating === 72, 'neutral pooled');
check(byLabel.Neutral.independent.finalRating === 72, 'neutral independent');
check(byLabel['Other help'].pooled.finalRating === 102, 'help pooled');
check(byLabel['Other help'].independent.finalRating === 108, 'help independent');
check(byLabel.Interference.pooled.finalRating === 42, 'interference pooled');
check(byLabel.Interference.independent.finalRating === 36, 'interference independent');
check(byLabel['Context reduced to zero'].pooled.finalRating === 12, 'zero-context offset');
check(byLabel['Context reduced to zero'].independent.successPercent === 1, 'permitted zero still has natural 01');
check(byLabel['Excess interference'].pooled.finalRating === 6, 'offset before clamp');
check(byLabel['Overwhelming interference'].pooled.finalRating === 0, 'retain excess interference');
check(byLabel['Distinct paid boost included'].independent.finalRating === 86, 'floor at end');

let gridCases = 0;
for (const r of [0, 0.2, 0.5, 1]) for (const d of [0, 0.5, 1, 1.2, 1.5, 2]) for (const c of [0, 0.1, 0.2, 0.5, 1]) {
  gridCases++;
  const b = calculate(60, r, d), p = calculate(60, r, d, [c]);
  const i = calculate(60, r, d, [c], 'independentCollected');
  check(p.cmp(b) >= 0 && i.cmp(b) >= 0, 'nonnegative eligible enhancement cannot reduce numeric output');
  check(p.cmp(0) >= 0 && i.cmp(0) >= 0, 'nonnegative output');
  check(i.cmp(calculate(60, r, d, [c], 'independentEach')) === 0, 'single enhancement independent modes agree');
  if (Q.of(1).add(r).sub(d).cmp(0) >= 0) {
    check(i.sub(p).cmp(Q.of(60).mul(c).mul(Q.of(r).sub(d))) === 0, 'exact difference: X*c*(R-D)');
  }
  if (c === 0) check(p.cmp(b) === 0 && i.cmp(b) === 0, 'zero enhancement is neutral');
}

const stackingRows = [];
for (const [label, r, d] of [['Neutral', 0, 0], ['Other help', 0.5, 0], ['Interference', 0, 0.5]]) {
  for (const count of [1, 2, 3]) {
    const enhancements = Array(count).fill(0.2);
    const p = calculate(60, r, d, enhancements);
    const collected = calculate(60, r, d, enhancements, 'independentCollected');
    const each = calculate(60, r, d, enhancements, 'independentEach');
    check(each.cmp(collected) >= 0, 'per-entry multiplication adds cross terms');
    stackingRows.push({label, distinctContributions: count, pooled: display(p), independentCollected: display(collected), independentEach: display(each)});
  }
check(stackingRows[2].pooled.raw === 96, 'three neutral pooled contributions');
check(stackingRows[2].independentEach.raw === 103.68, 'three neutral independent multipliers');

// IDs represent an ALREADY MADE fictional judgment, not automatic motive detection.
function normalizeAssessedContributions(entries) {
  const unique = new Map();
  for (const entry of entries) {
    if (unique.has(entry.source)) assert.equal(unique.get(entry.source), entry.amount, 'resolve inconsistent valuations before calculation');
    else unique.set(entry.source, entry.amount);
  }
  return [...unique.values()];
}
const duplicate = normalizeAssessedContributions([{source: 'same-family-support', amount: 0.2}, {source: 'same-family-support', amount: 0.2}]);
const distinct = normalizeAssessedContributions([{source: 'family-support', amount: 0.2}, {source: 'distinct-defiance-support', amount: 0.2}]);
check(calculate(60, 0, 0, duplicate).floor() === 72, 'renaming one assessed source does not double it');
check(calculate(60, 0, 0, distinct).floor() === 84, 'no arbitrary single-entry cap');

const difficulty = rank => Q.of(0.98).mul(Q.of(0.6).pow(rank - 1));
function route(a, d, training, axis) {
  assert.ok(a >= 1 && a <= 10 && d >= 0 && d <= a);
  assert.ok([...training, axis].every(rank => rank >= 0 && rank <= 10));
  return Q.of(a + d).mul(product([...training, axis].map(rank => Q.of(1).add(Q.of(rank).mul(0.1)))));
}
const routeRaw = route(8, 8, [8, 8, 8, 8], 5);
check(routeRaw.cmp(251.9424) === 0, 'adopted additive route with fixed Axis 5');
const scopeRows = [];
for (const rank of [3, 5, 6, 9]) for (const c of [0, 0.1, 0.2, 0.5]) {
  const x = routeRaw.mul(difficulty(rank));
  const p = calculate(x, 0, 0, [c]);
  const i = calculate(x, 0, 0, [c], 'independentCollected');
  check(p.cmp(i) === 0, 'neutral scope comparison does not distinguish placement');
  scopeRows.push({difficulty: rank, enhancement: c, result: display(p)});
}
check(scopeRows.find(row => row.difficulty === 5 && row.enhancement === 0).result.finalRating === 31, 'scope D5 baseline');
check(scopeRows.find(row => row.difficulty === 5 && row.enhancement === 0.2).result.finalRating === 38, 'scope D5 enhancement');
check(Q.of(1.2).mul(0.6).cmp(0.72) === 0, 'neutral +20% does not offset one further Difficulty step');

const functionRows = [1, 0.75, 0.5, 0.25, 0].map(f => {
  const x = Q.of(60).mul(f);
  const p = calculate(x, 0, 0, [0.2]), i = calculate(x, 0, 0, [0.2], 'independentCollected');
  check(p.cmp(Q.of(72).mul(f)) === 0 && i.cmp(p) === 0, 'Function still applies to the complete supported Expression');
  return {functionFactor: f, numericOnly: display(p)};
});
function permittedAttempt({accessOpen, functionPermits, automatic}) {
  if (!accessOpen || !functionPermits) return 'unavailable';
  return automatic ? 'automatic' : 'required-check';
}
check(permittedAttempt({accessOpen:false, functionPermits:true}) === 'unavailable', 'enhancement supplies no missing Access');
check(permittedAttempt({accessOpen:true, functionPermits:false}) === 'unavailable', 'no permission through lost Function');
check(permittedAttempt({accessOpen:true, functionPermits:true, automatic:true}) === 'automatic', 'no manufactured roll');

const enhancementAmount = 0.2, illustrativePrice = 20;
const awards = 8 * 19, reservedForImmediateHelp = 32, available = awards - reservedForImmediateHelp;
const acquisitionRows = [];
for (const mode of ['pooled', 'independentCollected']) for (const acquisition of ['purchased', 'story-earned']) {
  const cost = acquisition === 'purchased' ? illustrativePrice : 0;
  acquisitionRows.push({mode, acquisition, enhancementAmount, illustrativePrice,
    pointsAfterEightAwards: awards, reservedForImmediateHelp, spentOnEnhancement: cost,
    remainingForOtherDevelopmentAndSaving: available - cost,
    neutralExpressionWhenHeld: display(calculate(60, 0, 0, [enhancementAmount], mode))});
}
check(acquisitionRows[1].remainingForOtherDevelopmentAndSaving - acquisitionRows[0].remainingForOtherDevelopmentAndSaving === 20, 'story grant does not charge or duplicate currency');
for (const row of acquisitionRows) check(row.neutralExpressionWhenHeld.finalRating === 72, 'acquisition method does not select mechanics or potency');

console.log(JSON.stringify({
  status: 'Unadopted bounded comparison; no campaign record changes',
  controls: {
    enhancementAmounts: 'Analyst-selected sensitivities, not adopted ranks, prices, caps, or user proposals',
    mainComparison: 'One +0.20 contribution, X=60 before context, other factors held fixed',
    independentCollected: 'Separate factor 1+sum(c), multiplied by existing clamped context',
    independentEach: 'Separate multiplication per distinct contribution, a stacking sensitivity only',
    probability: 'Required permitted unopposed checks only; natural 01 succeeds, 00 fails; no rerolls',
    scope: 'A8/D8, T/F/S/P8, Axis5; matched Scale, full Function, no equipment; assigned Difficulty ranks do not adopt scope lookups',
    acquisition: 'Equal conditional benefit when held; one 20-point purchase versus one story grant by the comparison endpoint. Eight reference awards and a 32-point allocation for immediate help, not a mandatory reserve or grant cadence',
    boundaries: 'No automatic detection of meaningful motives, no claim of actual use frequency, player fairness, balance, or expected Effects'
  },
  verification: {assertions, contextGridCases: gridCases, mainContextCases: contextRows.length, stackingCases: stackingRows.length, scopeCases: scopeRows.length, functionCases: functionRows.length, acquisitionCases: acquisitionRows.length},
  contextRows, stackingRows, scopeRows, functionRows, acquisitionRows
}, null, 2));
