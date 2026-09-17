const assert = require('node:assert/strict');

const sum = values => values.reduce((total, value) => total + value, 0);

// Enumerate legal allocations for verification, not as a proposed table procedure.
function allocations(attacks, defense, scope) {
  const budget = Math.min(defense, sum(attacks.filter((_, i) => scope[i])));
  const out = [];
  function visit(i, left, chosen) {
    if (i === attacks.length) {
      if (left === 0) out.push(chosen);
      return;
    }
    const maximum = scope[i] ? Math.min(attacks[i], left) : 0;
    for (let amount = 0; amount <= maximum; amount++) {
      visit(i + 1, left - amount, [...chosen, amount]);
    }
  }
  visit(0, budget, []);
  return out;
}

function resolve(attacks, cancellation, mitigation, scope) {
  assert.equal(attacks.length, cancellation.length);
  assert.equal(attacks.length, mitigation.length);
  assert.equal(attacks.length, scope.length);
  const remaining = attacks.map((value, i) => {
    assert.ok(Number.isInteger(cancellation[i]) && cancellation[i] >= 0);
    assert.ok(cancellation[i] <= value);
    assert.ok(scope[i] || cancellation[i] === 0);
    return value - cancellation[i];
  });
  const removed = remaining.map((value, i) => Math.min(value, mitigation[i]));
  const harm = remaining.map((value, i) => value - removed[i]);
  assert.equal(sum(attacks), sum(cancellation) + sum(removed) + sum(harm));
  return { cancellation, remaining, mitigated: removed, harm, total: sum(harm) };
}

function examine(attacks, defense, mitigation, scope) {
  const rows = allocations(attacks, defense, scope)
    .map(allocation => resolve(attacks, allocation, mitigation, scope));
  assert.ok(rows.length > 0);
  const minimum = Math.min(...rows.map(row => row.total));
  const maximum = Math.max(...rows.map(row => row.total));
  const coveredHarm = sum(attacks.map((value, i) =>
    scope[i] ? Math.max(0, value - mitigation[i]) : 0));
  const uncoveredHarm = sum(attacks.map((value, i) =>
    scope[i] ? 0 : Math.max(0, value - mitigation[i])));
  // An independent minimum-harm oracle for fixed per-hit mitigation only.
  // This does not reorder the game's resolution or generate defensive surplus.
  assert.equal(minimum, uncoveredHarm + Math.max(0, coveredHarm - defense));
  assert.equal(sum(rows[0].cancellation),
    Math.min(defense, sum(attacks.filter((_, i) => scope[i]))));
  return { rows, minimum, maximum };
}

const fixtures = [];
function fixture(label, attacks, defense, mitigation, scope, expected) {
  const result = examine(attacks, defense, mitigation, scope);
  assert.deepEqual([result.minimum, result.maximum], expected);
  fixtures.push({ label, attacks, defense, mitigation, scope, ...result });
  return result;
}

fixture('Identical forms; no separate mitigation', [4, 3], 3, [0, 0], [true, true], [4, 4]);
fixture('Two hits; one mitigation each', [4, 3], 3, [1, 1], [true, true], [2, 3]);
fixture('Two hits; two mitigation each', [4, 3], 3, [2, 2], [true, true], [0, 2]);
fixture('Defense reaches first hit only', [4, 3], 5, [0, 0], [true, false], [3, 3]);
fixture('Impact protected; electricity unprotected; both reachable', [4, 3], 3, [2, 0], [true, true], [2, 3]);
fixture('Same protection; defense reaches impact only', [4, 3], 3, [2, 0], [true, false], [3, 3]);
fixture('A genuinely single merged application', [7], 3, [1], [true], [3, 3]);
fixture('Interrupted second contribution', [4, 0], 5, [0, 0], [true, true], [0, 0]);
fixture('Failed second contribution; surviving first still succeeds', [4, 0], 1, [0, 0], [true, true], [3, 3]);
fixture('No defensive reach', [4, 3], 5, [0, 0], [false, false], [7, 7]);
fixture('Three distinct hits', [4, 3, 2], 4, [1, 1, 1], [true, true, true], [2, 3]);

// A single defined protection reserve is spent once across the matching result.
for (const allocation of allocations([4, 3], 3, [true, true])) {
  const row = resolve([4, 3], allocation, [0, 0], [true, true]);
  assert.equal(Math.max(0, row.total - 2), 2);
}

// Complete individual outcomes precede allocation; special failure creates no Effects.
function effects(rating, completedRoll, special = null) {
  if (special === '00' || (special !== '01' && completedRoll > rating)) return 0;
  return 1 + Math.floor(Math.max(0, rating - completedRoll) / 10);
}
const naturalOne = effects(0, -49, '01'); // Initial 01, continuation 50.
assert.equal(naturalOne, 5);
assert.equal(effects(80, 150, '00'), 0);
fixture('Completed natural 01 and natural 00 contributions', [naturalOne, 0], 3,
  [0, 0], [true, true], [2, 2]);

// Only eligible whole-exchange defensive surplus is considered here.
const eligibleCounter = (attacks, defense, fictionalPermission) =>
  fictionalPermission && defense > sum(attacks) ? 1 : 0;
assert.equal(eligibleCounter([4, 3, 2], 12, true), 1);
assert.equal(eligibleCounter([4, 3, 2], 12, false), 0);
assert.equal(eligibleCounter([4, 3], 3, true), 0);
assert.equal(examine([4, 3], 3, [2, 2], [true, true]).minimum, 0);
// The last fixture's zero harm from protection does not create a counter.

let states = 0;
let choices = 0;
let differingStates = 0;
let largestSpread = 0;
function sweep(attacks, mitigation, scope, maximumDefense) {
  let previous = Infinity;
  for (let defense = 0; defense <= maximumDefense; defense++) {
    const result = examine(attacks, defense, mitigation, scope);
    assert.ok(result.minimum <= previous);
    if (previous !== Infinity) assert.ok(previous - result.minimum <= 1);
    previous = result.minimum;
    const reversed = examine([...attacks].reverse(), defense,
      [...mitigation].reverse(), [...scope].reverse());
    assert.deepEqual([result.minimum, result.maximum], [reversed.minimum, reversed.maximum]);
    if (mitigation.every(value => value === 0)) assert.equal(result.minimum, result.maximum);
    states++;
    choices += result.rows.length;
    if (result.minimum !== result.maximum) differingStates++;
    largestSpread = Math.max(largestSpread, result.maximum - result.minimum);
  }
}

for (let a = 0; a <= 8; a++) for (let b = 0; b <= 8; b++) {
  for (let m = 0; m <= 3; m++) for (let n = 0; n <= 3; n++) {
    for (let mask = 0; mask < 4; mask++) {
      sweep([a, b], [m, n], [Boolean(mask & 1), Boolean(mask & 2)], 16);
    }
  }
}
for (let a = 0; a <= 4; a++) for (let b = 0; b <= 4; b++) for (let c = 0; c <= 4; c++) {
  for (const mitigation of [[0, 0, 0], [1, 1, 1], [2, 2, 2], [0, 1, 2]]) {
    for (let mask = 0; mask < 8; mask++) {
      sweep([a, b, c], mitigation,
        [Boolean(mask & 1), Boolean(mask & 2), Boolean(mask & 4)], 12);
    }
  }
}

console.log(JSON.stringify({ fixtures, sweep: {
  states, allocations: choices, differingStates, largestSpread,
  passed: ['Effect conservation', 'scope restrictions', 'bounded cancellation',
    'minimum-harm oracle', 'monotonic defense', 'order invariance',
    'no-protection total invariance', 'shared protection reserve',
    'completed special-result fixtures', 'counter is not created by mitigation']
} }, null, 2));
