# Range Delivery Methods and Boundaries

Date: 2026-09-12
Status: Leading-candidate comparison completed; final distances and individual
equipment properties remain unadopted.

## Objective

The user accepted continuation with the rounded range ladder as the leading
candidate. Compare contrasting methods and expose boundary behavior before
proposing a working distance reference. Do not change the Difficulty curve,
ordinary equipment modifier range, HOLT prices, or session awards.

Sources:

- `lens-range-distance-band-comparison-v0.1.md` for the leading distance table.
- `lens-low-rating-build-trace-v0.1.md` for the guide's training magnitudes.
- `lens-fantasy-equipment-package-comparison-test-v0.1.md` and
  `lens-concrete-equipment-placement-opposed-play-test-v0.1.md` for provisional
  knife, shortbow, handgun, and long-gun equipment placements.
- `lens-preparation-means-and-plateau-test-v0.1.md` for established preparation
  procedure and earlier illustrative context assessments.
- Baseline Axis Access, independent Effects, net context, Scale frame,
  declared delivery, and rounding rules.

## Comparable Development

Each route receives an appropriate Attribute 8, Derived Rank 7, Task 9, Field 9,
Specialty 7, and Precision 8. The shared arithmetic is:

```text
8 x 1.7 x 1.9 x 1.9 x 1.7 x 1.8 = 150.23376.
```

These are matched development controls, not one character borrowing Handguns
and Revolvers to improve archery. Each route requires its own genuinely
applicable training and permission. They are not complete new character builds.

Test modifiers:

- Thrown knife: x1.05, from the earlier provisional knife placement.
- Shortbow: x1.10, from the earlier provisional fantasy placement.
- Handgun: x1.20, from the earlier provisional modern placement.
- Long gun: x1.25, from the earlier provisional modern placement.
- Extraordinary delivery: one applicable Rank-5 Axis at x1.50, with Open Access
  and no additional equipment multiplier. This case has additional power
  investment; it is not a same-budget ordinary-versus-extraordinary comparison.

All use the same candidate range Difficulty within the same personal frame.
Whether a method can actually reach the distance must be established first.
The arithmetic table does not grant a knife, bow, firearm, or power a range
maximum and does not validate any real-world weapon's performance.

## Ratings Conditional on Actual Reach

| Distance | Difficulty | Knife | Shortbow | Handgun | Long gun | Extraordinary delivery |
| --- | --- | --- | --- | --- | --- | --- |
| 20 m | D2 | 92 | 97 | 106 | 110 | 132 |
| 50 m | D3 | 55 | 58 | 63 | 66 | 79 |
| 100 m | D4 | 33 | 34 | 38 | 39 | 47 |
| 200 m | D5 | 20 | 20 | 22 | 23 | 28 |
| 500 m | D6 | 12 | 12 | 13 | 14 | 17 |

An unreachable row is not rolled. No numerical result overrides absent means
or Closed Access. The table deliberately shows arithmetic conditional on reach
rather than inventing maximum distances for unspecified equipment or HOLTs.

The small ordinary equipment differences are visible but do not provide a
complete range-performance distinction. That repeats the earlier equipment
finding: use actual permission and applicable supporting Lenses; do not inflate
ordinary equipment modifiers merely to make them do every job.

The extraordinary result demonstrates the same Difficulty calculation with
an additional applicable Axis. It neither bypasses range nor receives a new
Effects-to-distance formula. After success, the adopted declared-delivery
procedure applies while its necessary means and surviving output remain.

## Preparation and Supporting Lenses

Use the long-gun control. Carry forward the earlier context-test assessments
only as scenario assumptions: two genuine impediments assess to Dissonance
0.40, one remaining assesses to 0.20, and neither remaining assesses to zero.
A distinct useful understanding of the target supplies Resonance 0.10.

These must be facts distinct from the range already assessed, such as an
unsteady firing position or obstructed identifying detail. Do not add another
penalty merely because the target is distant, then remove it to pretend the
range was answered. Do not count components again on top of one assessed
environmental contribution.

| Context | R | Dissonance | Rating at 50 m | Rating at 100 m |
| --- | --- | --- | --- | --- |
| Both distinct impediments remain | 0 | 0.40 | 39 | 23 |
| One remains | 0 | 0.20 | 53 | 31 |
| Both resolved | 0 | 0 | 66 | 39 |
| Both resolved, distinct behavioral understanding | 0.10 | 0 | 72 | 43 |
| Separate sensitivity: net helpful contribution 0.50 | 0.50 | 0 | 99 | 59 |

This does not price a scope at 0.50 or grant a bonus each round. Preparation
cost, persistence, and limits follow the existing procedure. Ordinary equipment
use is not automatically charged an additional setup action.

To offset one whole Difficulty step numerically, otherwise neutral context
would need Resonance 0.6667, approximately, because 0.6 x 1.6667 is approximately
one. Offsetting two steps would require approximately 1.7778. These calculations
are sensitivity checks, not a proposed range-support scale or cap. A modest
0.20 benefit is not equivalent to removing a Difficulty Rank.

## Boundary Behavior

Use the handgun control, with no additional context. Candidate bounds are
inclusive; the next meter enters the next band.

| Distances | Ratings | Individual success chances before opposition |
| --- | --- | --- |
| 10 m / 11 m | 176 / 106 | 99% / 99% |
| 20 m / 21 m | 106 / 63 | 99% / 63% |
| 50 m / 51 m | 63 / 38 | 63% / 38% |
| 100 m / 101 m | 38 / 22 | 38% / 22% |

Even where both Ratings exceed 99, output changes. Neither table is an opposed
win probability; a successful attack may still be cancelled or mitigated.
Special results remain unchanged. The discontinuities are real and derive
from the existing per-rank Difficulty multiplier, not the equipment.

The candidate does not interpolate between bands, manufacture context to
smooth their edges, or alter the band for each weapon. Those would be separate
design choices, not concealed assumptions in the test.

## Findings and Recommendation

The arithmetic works consistently across the matched methods. This does not
prove that the table alone models weapon range adequately: concrete reach and
support properties remain necessary, and no empirical ranges were assigned.

Recommendation: provisionally adopt the rounded ladder with explicit inclusive
upper bounds for personal-range playtesting, retaining the known boundary jumps.
That gives tactical use a predictable reference without another calculation.
Do not call it a final universal range system or an equipment catalogue.

The substantive tradeoff is accepting discrete range steps for simplicity.
If that is unacceptable, reconsider range evaluation explicitly rather than
quietly compensating for every boundary with extra Lenses.

The table would remain a common distance reference within its frame. Individual
means, ordinary equipment properties, other Scale frames, and final calibration
stay provisional. Once that reference is accepted, return to complementary
area and duration outputs; do not expand this into pricing every ranged item.

## Verification

`lens-range-delivery-method-test-v0.1.cjs` passed all assertions, including
matched-method Ratings, five context scenarios at two distances, four boundary
comparisons, and the one-rank offset sensitivity. This is deterministic
arithmetic and applicability analysis, not a full encounter simulation.
