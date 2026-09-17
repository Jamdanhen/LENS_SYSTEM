# Proportional Area Growth Test v0.1

Status: User-authorized test, 2026-09-12. Area growth is explicitly retained for
exploration. No percentage, rounding rule, area band, or scope limit is adopted.
Earlier recommendations to abandon area growth are not the active direction.

## Candidate Relationship

Successful output establishes the declared area. Each additional Effect Level
allocated to expansion adds a fixed percentage of that ORIGINAL area:

```text
Coverage = declared area x (1 + growth fraction x additional Levels)
```

Growth is linear in additional Levels. It is not successive percentage
compounding, and an increased area does not increase the value of the next
Level. No band cap is applied in this test.

Compare 10%, 20%, 25%, and a 50% stress control. Candidate area anchors are
25 / 50 / 100 / ... / 12,800, assigned D1-D10 solely for comparison. The one-unit
ordinary baseline's connection to this ladder remains unresolved.

## Method

Apply the existing Difficulty multiplier and final-only Rating floor. Success
generates one baseline Level plus complete ten-point margin bands. For expansion,
only Levels beyond that baseline are counted. No damage or other benefit is
awarded from the same allocated Levels.

The scan tests integer pre-Difficulty Expressions 1-640 and every pair of
different full-band anchors, 28,800 comparisons per rate (115,200 total).
Raw 640 is an output stress probe, not a newly adopted character construction.

Exact threshold probabilities include initial natural 01 success, repeated-01
continuations, and natural 00 failure. Attempts are permitted and uncertain.
Opposition, paid spending, disruptive consequences, and repeated attempts are
not modeled. Tests calculate opportunity to reach at least the target area,
not necessarily exact coverage with identical ancillary results.

Final coverage is floored to whole units for the display fixtures, once after
all allocated Levels. Fractional improvement is not independently discarded
per Level. This is a test assumption, not an adopted rounding rule.

## Full-Band Shortcut Comparison

Measure the largest advantage in success probability from declaring a smaller
anchor and growing to a larger anchor instead of declaring that larger one:

| Growth per additional Level | Greatest smaller-declaration advantage in scan |
|---|---:|
| 10% | None found |
| 20% | 10 percentage points |
| 25% | 21 percentage points |
| 50% | 48 percentage points |

For 20%, raw 255 declaring 25 and growing to 100 succeeds 99% versus 89% when
declaring 100 directly. Thus the remaining advantage is not exclusively a
one-band event. It is much smaller than the fixed-increment and doubling
failures, but it is real.

For 25%, raw 373 declaring 50 and growing to 200 succeeds 99% versus 78%
directly. The 50% control reaches a 99%-versus-51% comparison for raw 244,
25 growing to 200.

These maxima concern only the stated full-band, bounded-capability scan.
They are not universal bounds for arbitrary declarations, output, or contexts.

## Same-Roll Coverage

Raw Expression 160; completed ordinary roll 40; all additional Levels assigned
to area growth. With 20%:

| Declared area | Difficulty | Effects | Final area |
|---:|---:|---:|---:|
| 25 | D1 | 12 | 80 |
| 50 | D2 | 6 | 100 |
| 100 | D3 | 2 | 120 |
| 200 | D4 | 0 | 0 |

The more ambitious successful declaration produces greater coverage despite
earning fewer Levels. The overambitious declaration still fails. This restores
the desired relationship in this fixture without forbidding growth.

For raw 320 and roll 50, 20% yields coverage 155 / 180 / 220 / 240 from the
same declarations 25 / 50 / 100 / 200. With 10%, it yields 90 / 115 / 160 / 220.

At 50%, the raw-160 fixture instead yields 162 / 175 / 150 / 0. The smaller
declarations can again outperform the harder successful declaration in actual
coverage. Do not recommend this rate.

## Practical Growth References

Each entry is the added coverage per additional Effect Level, based on the
original declaration:

| Declared area | 10% | 20% | 25% |
|---:|---:|---:|---:|
| 25 | 2.5 | 5 | 6.25 |
| 50 | 5 | 10 | 12.5 |
| 100 | 10 | 20 | 25 |
| 200 | 20 | 40 | 50 |

At 20%, starting from 25 gives 25 / 30 / 35 / 40 / 45 / 50 for zero through
five additional Levels. Starting from 100 gives 100 / 120 / 140 / 160 / 180 / 200.
Five additional Levels double the ORIGINAL area; ten triple it, not quadruple it.

At 10%, the whole-unit display for a starting area of 25 is 25 / 27 / 30 / 32 /
35 / 37. A reference row can avoid repeated percentage calculation, but rounding
and presentation still require a decision. At non-anchor declarations even 20%
can produce fractions; its clean arithmetic at anchors is not universal.

## Band Boundary Residual

All tested percentages retain the earlier immediate-edge issue:

- Raw 80, declare 26 at D2: Rating 47, 47% success.
- Declare 25 at D1 and earn one additional Level: roll threshold 68.
- Even 10% reaches at least 26, so that route succeeds 68% of the time.

Do not call proportional growth a complete mathematical elimination of
declaration advantages. Coarse Difficulty steps still create sharp boundaries.
The improvement demonstrated is control of whole-band escalation while
preserving worthwhile output from more ambitious successful declarations.

Declaring a larger permitted desired area within the SAME band remains a
better coverage choice than declaring smaller solely to grow toward it. This
test does not reintroduce a mandatory within-band purchasing rule. A smaller
area can still be appropriate for the actual objective and collateral effects.

## Recommendation and Decision

Keep proportional area growth as a viable candidate. Do not recommend 25% or
50% over the two lower rates given the tested declaration advantages.

10% is the strongest numerical candidate if preserving the incentive to declare
larger scope is the overriding criterion: no full-anchor probability shortcut
appeared within the scan. This is not a claim of perfect balance at boundaries.

20% is the stronger usability compromise at the current anchor values: simple
whole-number improvements and noticeable growth, with a measured residual
advantage up to ten percentage points in the full-anchor scan. Accepting that
tradeoff is a design decision, not something the arithmetic can decide.

The next real decision is between tighter growth at 10% and simpler, stronger
growth at 20%, with the remaining boundary behavior disclosed. No return to
abandoning area growth or to a universal band ceiling is recommended here.

## Verification

`lens-area-proportional-growth-test-v0.1.cjs` passed all assertions, including
115,200 full-anchor comparisons, minimum required-Level checks, boundary
fixtures, same-roll output, and non-compounding growth checks. This is not an
encounter simulation, empirical playtest, or a proof beyond the tested domain.

No source baseline, terminology reference, or other project was modified.
