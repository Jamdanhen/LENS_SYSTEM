# Immediate Resonance: Twenty Percent

Status: User-requested numerical comparison. One point for x1.20 on one
Expression is the tested candidate, not an adopted expenditure procedure.

## Scope

Compare x1.10 and x1.20 with no expenditure. Ratings already include the same
acting Scale, Difficulty, equipment, applicable training, and Dissonance. No
new generic combat Difficulty or extraordinary permission is introduced.
The isolated comparison has no other Resonance; it does not settle aggregation
with an existing Resonance pool or repeated expenditures.

Use the existing test convention: integer percentile rolls 01-100, success
at or below Final Rating on 01-98, and one baseline Effect Level plus one per
complete ten points of Successful Margin. Floor only the final boosted value.
Higher-rating rows concern cases in which resolution is required; Automatic
actions remain Automatic. These are unopposed arithmetic probes, not combat
hit rates, damage forecasts, or medical outcomes.

## Exact Enumeration

| Original Rating | x1.10 Rating | x1.20 Rating | Original rolled success | x1.20 rolled success | Mean generated Effects/attempt, original -> x1.20 |
|---|---:|---:|---:|---:|---|
| 20 | 22 | 24 | 20% | 24% | 0.30 -> 0.42 |
| 40 | 44 | 48 | 40% | 48% | 1.00 -> 1.40 |
| 60 | 66 | 72 | 60% | 72% | 2.10 -> 2.96 |
| 80 | 88 | 96 | 80% | 96% | 3.60 -> 5.10 |
| 95 | 104 | 114 | 95% | 98% | 5.00 -> 6.86 |
| 120 | 132 | 144 | 98% | 98% | 7.44 -> 9.80 |

Means include failures as zero and are generated Effects before enhancement,
mitigation, or other effect handling. They do not mean a character receives
fractional Effect Levels. At Ratings 20-80 the mean gain is about 40-42%,
because the boost increases both the chance of success and successful margins.
Ten percent instead gives about 20% more mean generated Effects in those rows.
Thus a twenty-percent Rating boost is not a trivial twenty-percent output
increase, nor does it add twenty percentage points to success chance.

Near ordinary certainty, further benefit increasingly appears in margin.
Permission and Scale remain unchanged; a high Rating does not open Closed Access.

## Same-Roll Illustrations

| Original Rating | Roll | With x1.20 | Original Effects | Boosted Effects |
|---:|---:|---:|---:|---:|
| 60 | 50 | 72 | 2 | 3 |
| 60 | 65 | 72 | 0, failure | 1 |
| 80 | 50 | 96 | 4 | 5 |
| 120 | 50 | 144 | 8 | 10 |

These compare counterfactual outcomes of the same die result. They do not
authorize waiting to see the result before deciding to spend. Knowing the
result would change the efficiency of spending, and that timing remains open.

Final-only rounding matters: raw 40.9 x1.20 floors to 49; first truncating 40.9
to 40 and then boosting would incorrectly produce 48.

## Relation to Lasting Development

A Specialty or Precision Rank costs five and changes its factor by +0.1.
That is not always a ten-percent increase to the entire Expression:

| Rank purchase | Factor change | Relative increase when applicable |
|---|---|---:|
| 0 to 1 | 1.0 to 1.1 | 10% |
| 5 to 6 | 1.5 to 1.6 | 6.67% |
| 9 to 10 | 1.9 to 2.0 | 5.26% |

The proposed one-point x1.20 is stronger for a single application and would
not be limited to that one Specialty's subject. The purchased Rank recurs on
every applicable future Expression. Five hypothetical immediate purchases
affect five separate Expressions; the test does not combine them into one
larger boost. No numerical equivalence over a presumed campaign length is claimed.

At the current three-meaningful reference award of 14, spending one such point
leaves 13 for development. This is cost arithmetic, not a recommendation to
spend every session or a finding that the one-point price is balanced.

## Assessment and Next Boundary

Subsequent discussion established the working sequence: boost before rolling,
reroll after seeing the result, preserving the purchased boost on the same
Expression. See `lens-boost-and-reroll-test-v0.1.md` for the continuation.
The earlier timing question below records the test's original stopping point.

Twenty percent is a viable leading magnitude: it noticeably changes both
success and effect and can justify surrendering development currency for a
particular attempt. Its effect uplift deserves explicit recognition rather
than describing it as a small cosmetic bonus. Ten percent is the lower-impact
alternative, not mathematically nonfunctional.

Retain x1.20 as the leading tested candidate. A one-point cost is plausible
but not fully calibrated by this isolated comparison. The next material
question is expenditure timing: choosing before resolution and choosing after
seeing the result buy different certainty. Combination with existing Resonance,
repeat spending, and comparisons to equipment/social declarations also remain
unresolved. None is silently adopted here, and no maximum is invented.

## Verification

`lens-immediate-resonance-20-percent-test-v0.1.ps1` emits results as JSON.
It enumerates 100 die outcomes for six Ratings and three factors, checks
ordering, same-roll examples, and final-only rounding (21 assertions).
No rule, award amount, source character, or paused branch was changed.
