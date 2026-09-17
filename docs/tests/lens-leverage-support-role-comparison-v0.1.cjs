'use strict';
// Exploratory arithmetic only. No adoption, character conversion, or file writes.
const assert = require('node:assert/strict');
let checks = 0;
const check = (condition, message) => { assert.ok(condition, message); checks++; };
const gcd = (a, b) => b === 0n ? (a < 0n ? -a : a) : gcd(b, a % b);
class Q {
  constructor(n, d = 1n) {
    n = BigInt(n); d = BigInt(d);
    assert.notEqual(d, 0n);
    if (d < 0n) { n = -n; d = -d; }
    const g = gcd(n, d); this.n = n / g; this.d = d / g;
  }
  add(q) { return new Q(this.n * q.d + q.n * this.d, this.d * q.d); }
  mul(q) { return new Q(this.n * q.n, this.d * q.d); }
  cmp(q) { const x = this.n * q.d - q.n * this.d; return x < 0n ? -1 : x > 0n ? 1 : 0; }
  floor() { assert.ok(this.n >= 0n); return Number(this.n / this.d); }
  value() { return Number(this.n) / Number(this.d); }
  exact() { return `${this.n}/${this.d}`; }
}
const q = (n, d = 1) => new Q(n, d);
const training = q(9, 4); // Task 5, Field 5; Specialty/Precision 0.
const factor = (rank, remaining = q(1)) => q(1).add(q(rank, 10).mul(remaining));
const difficulty = band => new Q(98n * 6n ** BigInt(band - 1), 100n * 10n ** BigInt(band - 1));
const describe = (raw, band = 3) => {
  const final = raw.mul(difficulty(band)).floor();
  return {raw: raw.value(), exact: raw.exact(), difficulty: band, final,
    permittedUnopposedSuccessPercent: Math.min(99, Math.max(1, final))};
};
const current = (l, n) => q(l + n).mul(training);
const supportOnly = (a, d, n) => q(a + d).mul(training).mul(factor(n));
const fixtures = [
  {name: 'Strong position, modest personal application', l: 8, n: 8, a: 3, d: 3},
  {name: 'Strong position, strong personal application', l: 8, n: 8, a: 8, d: 8},
  {name: 'Small position, strong personal application', l: 2, n: 2, a: 8, d: 8},
  {name: 'Strong position, minimally developed application', l: 8, n: 8, a: 1, d: 0}
].map(x => ({...x, current: describe(current(x.l, x.n)), supportOnly: describe(supportOnly(x.a, x.d, x.n))}));
check(fixtures[0].current.raw === 36 && fixtures[0].supportOnly.raw === 24.3, 'modest application control');
check(fixtures[1].supportOnly.raw === 64.8, 'strong application control');
check(fixtures[2].supportOnly.raw === 43.2, 'small position control');
check(fixtures[3].supportOnly.raw === 4.05, 'minimal application control');

// B covers each possible positive personal foundation, 1 through 20.
// The existing L/N pair remains legal. This is not an equal-price build grid.
const grid = {cases: 0, candidateHigher: 0, candidateEqual: 0, candidateLower: 0};
for (let l = 1; l <= 10; l++) for (let n = 0; n <= l; n++) for (let b = 1; b <= 20; b++) {
  const existing = current(l, n);
  const candidate = q(b).mul(training).mul(factor(n));
  const difference = candidate.cmp(existing);
  grid.cases++;
  grid[difference > 0 ? 'candidateHigher' : difference < 0 ? 'candidateLower' : 'candidateEqual']++;
  check(candidate.cmp(q(b).mul(training)) >= 0, 'optional positive support cannot lower personal base');
  check(candidate.cmp(q(b).mul(training).mul(q(2))) <= 0, 'single rank-ten support no greater than x2');
  const thresholdComparison = q(b * (10 + n)).cmp(q(10 * (l + n)));
  check(difference === thresholdComparison, 'exact crossing condition');
}
check(grid.cases === 1300, 'grid coverage');

// Scope-sensitive impairment is a candidate, not the current Framework rule.
const impairment = [4, 3, 2, 1, 0].map(units => {
  const f = q(units, 4);
  const reducedBonus = q(40).mul(factor(10, f));
  const reducedWhole = q(40).mul(factor(10)).mul(f);
  check(reducedBonus.cmp(q(40)) >= 0, 'loss of optional help preserves otherwise available base');
  return {remaining: f.value(), wholeExpression: reducedWhole.value(), optionalBonusOnly: reducedBonus.value()};
});
check(impairment[3].optionalBonusOnly === 50 && impairment[3].wholeExpression === 20, 'quarter-function contrast');
check(impairment[4].optionalBonusOnly === 40, 'zero support is not zero personal capability');

function resolveGate({otherwisePermitted, supportAvailable, supportRequired}) {
  if (!otherwisePermitted || (supportRequired && !supportAvailable)) return {roll: false, factor: null};
  return {roll: true, factor: supportAvailable ? 2 : 1};
}
check(resolveGate({otherwisePermitted: true, supportAvailable: false, supportRequired: false}).factor === 1, 'optional loss fallback');
check(!resolveGate({otherwisePermitted: true, supportAvailable: false, supportRequired: true}).roll, 'required means unavailable');
check(!resolveGate({otherwisePermitted: false, supportAvailable: true, supportRequired: false}).roll, 'enhancement grants no permission');

// Distinct contributions assumed, not adjudicated by the calculator.
const stacking = [1, 2, 3, 5].map(count => {
  let product = q(1);
  for (let i = 0; i < count; i++) product = product.mul(q(3, 2));
  const pooled = q(1).add(q(count, 2));
  check(product.cmp(pooled) >= 0, 'positive cross terms');
  return {count, each: 1.5, product: product.value(), pooled: pooled.value(),
    atD5Product: describe(q(160).mul(product), 5), atD5Pooled: describe(q(160).mul(pooled), 5)};
});
const mixed = {support: 1.8, aspect: 1.5,
  independentProduct: q(9, 5).mul(q(3, 2)).value(),
  collectedBonus: q(1).add(q(8, 10)).add(q(5, 10)).value()};
check(mixed.independentProduct === 2.7 && mixed.collectedBonus === 2.3, 'mixed support and identity control');
const sameSource = [{id: 'existing-relationship', rank: 5}, {id: 'existing-relationship', rank: 5}];
check(new Map(sameSource.map(x => [x.id, x])).size === 1, 'same declared source recorded once');

const result = {status: 'Exploratory; no rule changes', assumptions: {
  training: 'Task5 Field5 Specialty0 Precision0; x2.25',
  candidate: '(personal Attribute + Derived) x Training x (1 + relevant position rank / 10)',
  exclusion: 'No price parity, allocation conversion, new Attribute, new Scale, or automatic access inferred',
  permission: 'Chance columns only for permitted required unopposed rolls; no rerolls',
  method: 'Exact rational arithmetic; final-only floor; no encounter simulation'
}, checks, fixtures, grid, impairment, stacking, mixed};
console.log(JSON.stringify(result, null, 2));
