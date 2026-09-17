const assert = require('node:assert/strict');
const minute = 60, hour = 3600, day = 86400, year = 365 * day;
const ladders = {
  threeSecond: Array.from({length: 10}, (_, i) => 3 * 10 ** i),
  sixSecond: Array.from({length: 10}, (_, i) => 6 * 10 ** i),
  familiar: [6, minute, 10 * minute, hour, day, 7 * day, 30 * day,
    year, 10 * year, 100 * year],
};
const stepFor = (span, ladder) => {
  if (span === 0) return 0;
  const index = ladder.findIndex(value => value >= span);
  return index < 0 ? null : index + 1;
};
const rating = (raw, d) => Math.floor(raw * 0.98 * 0.6 ** (d - 1));
const chance = (raw, d) => Math.max(1, Math.min(99, rating(raw, d)));
const requests = [
  ['One round', 3], ['Two rounds', 6], ['Thirty seconds', 30],
  ['One minute', minute], ['Five minutes', 5 * minute],
  ['Ten minutes', 10 * minute], ['One hour', hour], ['One day', day],
  ['One week', 7 * day], ['Thirty days', 30 * day], ['One year', year],
];
const rows = Array.from({length: 10}, (_, i) => ({step: i + 1,
  threeSecondSeconds: ladders.threeSecond[i], sixSecondSeconds: ladders.sixSecond[i],
  familiarSeconds: ladders.familiar[i],
  threeSecondDays: ladders.threeSecond[i] / day,
  sixSecondDays: ladders.sixSecond[i] / day,
  threeSecondYears: ladders.threeSecond[i] / year,
  sixSecondYears: ladders.sixSecond[i] / year,
  familiarJump: i === 0 ? null : ladders.familiar[i] / ladders.familiar[i - 1],
}));
const comparisons = requests.map(([request, seconds]) => ({request, seconds,
  models: Object.entries(ladders).map(([model, ladder]) => {
    const step = stepFor(seconds, ladder);
    return {model, step, grantedSeconds: ladder[step - 1],
      successPercentAtRaw80: chance(80, step),
      successPercentAtRaw160: chance(160, step),
      successPercentAtRaw320: chance(320, step)};
  })}));

for (const [name, ladder] of Object.entries(ladders)) {
  assert.equal(stepFor(0, ladder), 0);
  assert.equal(stepFor(Infinity, ladder), null);
  for (let i = 0; i < ladder.length; i++) {
    assert.equal(stepFor(ladder[i], ladder), i + 1);
    assert.equal(stepFor(ladder[i] + 1, ladder), i === 9 ? null : i + 2);
    if (i > 0) {
      assert.ok(ladder[i] > ladder[i - 1]);
      if (name !== 'familiar') assert.equal(ladder[i] / ladder[i - 1], 10);
    }
  }
}
for (let i = 0; i < 10; i++) assert.equal(ladders.sixSecond[i], 2 * ladders.threeSecond[i]);
assert.equal(stepFor(minute, ladders.threeSecond), 3);
assert.equal(stepFor(minute, ladders.sixSecond), 2);
assert.equal(stepFor(day, ladders.familiar), 5);
assert.equal(stepFor(7 * day, ladders.sixSecond), 7);
assert.equal(stepFor(7 * day, ladders.familiar), 6);

let percentileCases = 0;
for (const raw of [80, 160, 320]) for (let d = 1; d <= 10; d++) {
  let successes = 1;
  for (let roll = 2; roll <= 99; roll++) if (roll <= rating(raw, d)) successes++;
  assert.equal(successes, chance(raw, d));
  percentileCases++;
}
console.log(JSON.stringify({
  status: 'Three candidate ladders; no adoption.',
  assumptions: 'Fixed granted-duration references. Strict first sufficient step used solely for comparison; no separate rounding or overage policy adopted. Familiar intervals selected by assistant for testing; month=30 days, year=365 days. Same permitted independent manifestation. Probabilities isolate duration as the only changing Difficulty; no rule for combining challenge dimensions is added. Instantaneous has no added duration contribution, not automatic manifestation success.',
  rows, comparisons, percentileCases,
}, null, 2));
