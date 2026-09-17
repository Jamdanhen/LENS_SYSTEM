# Boost and Reroll Comparison

Status: Continued user-authorized test. Working sequence accepted in discussion:
boost before the roll, reroll after seeing the result, and retain the already
purchased boost on that same Expression. A reroll does not apply the boost again.
Subsequently, the user explicitly approved replacement: the new roll stands,
even if worse, and the purchased boost remains. The comparison below preserves
both tested alternatives as evidence. The user subsequently limited each
Expression to one purchased boost and one paid reroll, allowing both together.
One-point prices were subsequently retained provisionally after the completed
`lens-one-point-spending-pacing-test-v0.1.md` comparison. Special-result
eligibility remains open. The baseline
records the working procedure; the limit is a user decision following these
tests, not a conclusion imposed by their one-reroll comparison scope.

## Test Controls

Use x1.20 as the leading boost candidate and compare original Ratings 40, 60,
and 80. Hold Difficulty, Scale, permission, and other contributions fixed.
These are uncertain unopposed percentile probes, not opposed combat hit rates.
Routine Automatic actions remain Automatic. The existing test convention counts
01-98 at or below Rating as success, then one Effect plus one per complete ten
points of margin, before mitigation.

Enumerate both independent die results for each case. The failure-recovery
strategy buys a reroll only after failure; it does not spend after success.
One reroll is isolated for comparison, not adopted as a universal cap. One
point per purchase is the pricing fixture, not a concluded equivalence.

## Failure-Recovery Results

Assuming every failed first roll is eligible for the paid retry:

| Original Rating | No spend | Boost only | Reroll failure only | Boost, then reroll failure |
|---|---:|---:|---:|---:|
| 40 | 40% | 48% | 64% | 72.96% |
| 60 | 60% | 72% | 84% | 92.16% |
| 80 | 80% | 96% | 96% | 99.84% |

These are eventual success probabilities across attempts. The second roll
still uses the same success window: 60 becomes 72 once, not 86.4 on retry.
Each individual roll retains its 98-face success ceiling. Two attempts can
produce a higher eventual success probability without changing either die.

The script also brackets a stricter case in which first-roll 99/100 cannot be
rerolled. Combined probabilities then become 72%, 90.72%, and 97.92% respectively.
Reroll-only becomes 63.2%, 82.8%, and 94.4%. Neither treatment settles the
unresolved special-face/complication procedure. No catastrophe is silently erased.

## Different Reasons to Spend

The reroll is selective failure insurance, whereas the boost improves the
Rating and attainable margin from the first roll onward. At original Rating
60, mean generated Effects per attempt are 2.10 without spending, 2.96 with
boost alone, 2.94 with failure reroll alone, and 3.7888 with both under the
fully eligible retry fixture. These include failures as zero; they are not
fractional Effects awarded in play, and matching numbers do not prove equal
value in other contexts.

At a trial price of one each, Rating-60 failure rerolls average 0.4 points per
attempt because the initial roll often succeeds. Boost costs one on every
boosted attempt. The combined strategy averages 1.28: one beforehand, another
only in the 28% of boosted attempts that fail. These are averages, not
fractional purchase costs. The combined successful-boosted attempt costs one;
an actual boosted retry costs two.

Equal-cost options need not have identical probabilities or expected output.
Selective timing is a real advantage of rerolls, not something the comparison
should conceal. It does not make boosting redundant, because a reroll cannot
increase the underlying Rating or its maximum margin by itself.

## Replacement Versus Keeping the Better Result

For failed first rolls, both treatments give the same ordinary success and
Effect results in this fixture: there is no prior success to protect. Special
consequences and degrees of failure are not modeled in that statement.

The material difference appears when attempting to improve a successful result:

```text
Original Rating 60, boosted to 72.
First roll 50: margin 22, producing 3 Effects.

Paid second roll 70: margin 2, producing 1 Effect.
Replacement: keep 1 Effect.
Keep-better: retain the original 3 Effects.

Paid second roll 30: margin 42, producing 5 Effects.
Both treatments yield 5 Effects.
```

Across all 100 possible second rolls for that first-roll fixture:

- Replacement has a 28% failure chance, 48% chance of fewer than three Effects
  including failures, and 42% chance of more than three Effects.
- Keeping the better result protects all three initial Effects and has the
  same 42% chance of improving them.
- Replacement averages 2.96 Effects; keep-better averages 4.10.

Thus keep-better purchases protection as well as another chance. It is not
automatically unacceptable or required to have a different price; the choice
is whether the desired experience is a replacement attempt or protected improvement.

## Recommendation and Subsequent Decision

Recommend replacement as the first working reroll rule: the new die result
replaces the original while retaining the Expression's already purchased boost.
A player retrying failure receives another chance; a player retrying success
risks the existing result. Keep-better remains a meaningful alternative.

Do not adopt a universal number of retries, eligibility for special results,
pooling rules, equipment/social declaration prices, or the final price of
either numerical option merely from this comparison. The next user decision
was replacement versus keep-better, not forced mathematical price equivalence.
The user selected replacement, then disallowed repeated paid rerolls and
repeated boosting on the same Expression. Remaining substantive decisions
concern pricing, special-result eligibility, and other spending applications.

## Verification

`lens-boost-and-reroll-test-v0.1.ps1` enumerates 10,000 die pairs per case
(three Ratings, two boost states, two special-face eligibility assumptions),
plus 100 second rolls for the successful-first-roll fixture. Twenty-five
assertions passed, including closed-form probability agreement and equality
of ordinary failure-only replacement/keep-better outcomes. No source character,
current price, or paused experiment was modified.
