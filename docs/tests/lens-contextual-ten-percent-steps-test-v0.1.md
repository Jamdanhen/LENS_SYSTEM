# Contextual Valuation in Ten-Percent Steps

Status: Tested candidate subsequently adopted when the user said "Let's
proceed." Ten-percent increments apply to otherwise unassigned contextual
values; existing pooling, paid spending, Function Bands, equipment values,
and Access rules remain unchanged. The zero-floor proposal is a separate test,
not an adopted consequence of this valuation decision.

## Candidate

Assess otherwise unassigned contextual contributions in increments of 0.10.
Test 0.10 through 1.00, plus a neutral zero control. A helpful contribution adds
to the Resonance factor; an obstructive contribution reduces the remaining
Dissonance factor. Do not confuse the reduction amount with the remaining factor.

This is a step size, not ten new named categories. The tested upper endpoint
does not adopt a universal Resonance ceiling or solve overfull Dissonance pools.

Sources: current baseline Current Roll Budget and natural-01 procedure;
`lens-contextual-contribution-band-comparison-v0.1.md`; current user request.

## Numerical Comparison

Each B already contains the unchanged noncontextual Expression factors. Test
B=20, 60, 120, and 200 with neutral initial pools. No new generic Difficulty,
Scale, opposition, or Condition is assigned to produce these controls.

| Contribution | Helpful Rating from 60 | Obstructed Rating from 60 |
| --- | ---: | ---: |
| 0% | 60 | 60 |
| 10% | 66 | 54 |
| 20% | 72 | 48 |
| 30% | 78 | 42 |
| 40% | 84 | 36 |
| 50% | 90 | 30 |
| 60% | 96 | 24 |
| 70% | 102 | 18 |
| 80% | 108 | 12 |
| 90% | 114 | 6 |
| 100% | 120 | 0 |

These are Ratings, not success percentages. For the ordinary roll 30, helpful
20% and 30% both generate five Effects, but the Ratings still differ. Helpful
40% produces six, 50% seven, and 100% ten. Not every step must cross an Effect
threshold. Effects keep their existing applicability and permission limits.

One isolated ten-percent step changes B=20/60/120/200 by 2/6/12/20 Rating
points respectively. Established nonneutral context can change the relative
impact, as already demonstrated by the additive-pool comparison.

## Comparison with Five Anchors

The prior candidates were 0.10, 0.25, 0.50, 0.75, and 0.90. Ten-percent steps
retain 0.10, 0.50, and 0.90 exactly, and offer 0.20/0.30 around 0.25 and
0.70/0.80 around 0.75. The maximum displacement from these old candidate
anchors is 0.05: one Rating point at B=20, three at 60, six at 120, ten at 200.

The alternative removes the need to memorize irregular gaps and allows
intermediate judgments rather than jumping from 25% to 50% or 50% to 75%.
It supplies more numerical choices, not proof that different GMs will agree
more consistently. That remains a table-facing usability question.

## Scene Application

Apply the same three scene types used in the preceding comparison:

| Scene | Ten-percent-step application | Boundary |
| --- | --- | --- |
| Rehearsed presentation | Choose a step reflecting how specifically the preparation answers this challenge; roughly quarter-strength assistance can be assessed at 20% or 30% | No automatic ten percent per round, hour, or document; no new Prepare Task |
| Proposal aligned with a council's interests | Intermediate values such as 40% or 60% are available when the actual advantage warrants them | Do not duplicate Reputation, Authority, or the resistance already represented by opposition; no compulsory agreement |
| Interference obscuring a spoken message | Assess total relevant interference once, in ten-percent steps | No separate charge for each noise source already included, and no penalty for interference already priced into Difficulty |

Use a few examples to orient judgment, not a separate definition for every
decile. When precision between neighboring steps is not meaningful to the
scene, make one reasonable assessment rather than decomposing the fiction into
additional modifiers. These are illustrative adjudication judgments, not
empirical demonstrations that any specific scene objectively equals a number.

## Existing Values and Endpoints

Do not round an established value merely to conform to this new assessment
convention. A fixed 0.25 contribution plus paid 0.20 and contextual 0.10 yields
R=1.55. A separate 0.25 and 0.20 reduction yields D=0.55. At B=60 the full
product is 51.15, floored once to 51; neither pool is rounded to tenths.
Function Bands and equipment increments are not repriced by this test.

At 100% helpful context the isolated Rating doubles. At a 100% reduction it
reaches zero, without automatically closing Access. The existing natural-01
procedure explicitly permits an otherwise permitted zero-Rating attempt:
01 followed by 06 gives adjusted result -93. This example is not an overall
success-probability calculation. Closed Access still receives no roll, and
Automatic actions are not made uncertain because a modifier exists.

Two distinct reductions of 60% and 50% still give an algebraic D=-0.10.
The script flags that boundary and does not apply negative effectiveness,
invent a cap, merge the pools, or replace the additive rule. A zero floor is
a possible next proposal, not adopted by this comparison.

## Verification and Recommendation

`lens-contextual-ten-percent-steps-test-v0.1.ps1` completed 44 neutral-context
cases and 142 arithmetic assertions, including anchor-distance checks,
preservation of existing non-tenth values, endpoint examples, and the negative
pool flag. No new complete dice-distribution or opposed-combat simulation.

Recommend ten-percent increments for otherwise unassigned contextual valuation,
with sparse teaching examples rather than ten mandatory names. Keep all
established values and aggregation rules intact. This is preferable to the
five-anchor candidate as a regular numerical convention, not demonstrated
objective precision in narrative judgment.

Next real decision after the step convention: treatment of total Dissonance
at or beyond a 100% reduction. Evaluate a zero remaining-factor floor while
preserving the distinction between numerical effectiveness and Access.
