const assert = require('node:assert/strict');
const sum = values => values.reduce((total, value) => total + value, 0);

// Exactly one defensive output against the already-declared response scope.
function resolve(attacks, defense, scope, supportsCounter, meansRemain) {
  const reached = sum(attacks.filter((_, i) => scope[i]));
  const unreached = sum(attacks.filter((_, i) => !scope[i]));
  const cancelled = Math.min(reached, defense);
  const reachedRemainder = reached - cancelled;
  const surplus = defense - cancelled;
  const counter = scope.some(Boolean) && supportsCounter && meansRemain && surplus > 0 ? 1 : 0;
  assert.equal(sum(attacks), cancelled + reachedRemainder + unreached);
  assert.equal(defense, cancelled + surplus);
  assert.ok(counter >= 0 && counter <= 1);
  assert.ok(!(reachedRemainder > 0 && counter > 0));
  return { reached, unreached, cancelled, reachedRemainder,
    incoming: reachedRemainder + unreached, surplus, counter };
}

const fixtures = [];
function check(label, attacks, defense, scope, supports, means, expected) {
  const result = resolve(attacks, defense, scope, supports, means);
  assert.deepEqual([result.incoming, result.counter], expected);
  fixtures.push({ label, attacks, defense, scope, supports, means, ...result });
}
check('Whole assault: no surplus', [4, 3], 5, [true, true], true, true, [2, 0]);
check('First contribution only: local opening, other hit lands', [4, 3], 5,
  [true, false], true, true, [3, 1]);
check('First contribution exactly stopped', [4, 3], 4,
  [true, false], true, true, [3, 0]);
check('First contribution not stopped', [4, 3], 3,
  [true, false], true, true, [4, 0]);
check('No counter supported by the defensive act', [4, 3], 5,
  [true, false], false, true, [3, 0]);
check('Prior consequence removed counter means', [4, 3], 5,
  [true, false], true, false, [3, 0]);
check('Large local surplus remains one counter', [4, 3], 100,
  [true, false], true, true, [3, 1]);
check('Whole assault stopped with surplus', [4, 3], 10,
  [true, true], true, true, [0, 1]);
check('Three reachable contributors do not multiply counter', [4, 3, 2], 15,
  [true, true, true], true, true, [0, 1]);
check('Missed attack without relevant contact', [0, 3], 5,
  [true, false], false, true, [3, 0]);
check('Failed grab with actual overextension', [0, 3], 5,
  [true, false], true, true, [3, 1]);
check('No reachable target', [4, 3], 5,
  [false, false], true, true, [7, 0]);
check('Failed defensive Expression', [4, 3], 0,
  [true, false], true, true, [7, 0]);

// Natural 01 at Rating zero with continuation 50 gives five successful Effects.
const exceptionalOutput = 1 + Math.floor((0 - (1 - (100 - 50))) / 10);
assert.equal(exceptionalOutput, 5);
check('Completed natural 01 retains scope and counter cap', [4, 3], exceptionalOutput,
  [true, false], true, true, [3, 1]);

let states = 0;
let coexistence = 0;
for (let a = 0; a <= 10; a++) for (let b = 0; b <= 10; b++) {
  for (let defense = 0; defense <= 20; defense++) for (let mask = 1; mask < 4; mask++) {
    const scope = [Boolean(mask & 1), Boolean(mask & 2)];
    const result = resolve([a, b], defense, scope, true, true);
    const reversed = resolve([b, a], defense, [...scope].reverse(), true, true);
    assert.deepEqual(result, reversed);
    if (scope.every(Boolean)) assert.ok(!(result.counter && result.incoming));
    if (result.counter && result.incoming) {
      assert.equal(result.reachedRemainder, 0);
      assert.equal(result.incoming, result.unreached);
      coexistence++;
    }
    assert.equal(resolve([a, b], defense, scope, false, true).counter, 0);
    assert.equal(resolve([a, b], defense, scope, true, false).counter, 0);
    states++;
  }
}

// Protection is a subsequent defined function, not a source of defensive output.
const fullyReached = resolve([4, 3], 5, [true, true], true, true);
assert.equal(Math.max(0, fullyReached.incoming - 2), 0);
assert.equal(fullyReached.counter, 0);
const partial = resolve([4, 3], 5, [true, false], true, true);
assert.equal(Math.max(0, partial.counter - 1), 0); // Matching counter mitigation.
assert.equal(partial.incoming, 3); // Counter does not retroactively cancel another hit.

console.log(JSON.stringify({ fixtures, verification: { states, coexistence,
  checks: ['single defensive pool', 'Effect conservation', 'no scope spill',
    'one-counter cap', 'whole-scope result unchanged', 'order invariance',
    'fictional support and necessary means required',
    'mitigation neither creates surplus nor refunds cancellation'] } }, null, 2));
