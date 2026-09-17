# Radius Shared Output Test v0.1

Date: 2026-09-12

Status: approved comparison complete. Uses the experimental radius converter
with adopted Multiple-Source output accounting. Does not adopt the converter,
unlimited growth, a new action cost, or automatic harm across an area.

The user accepted retaining slight overage and proceeding to compare one
character with two contributing to the same area. Map-cell changes are not an
acceptance criterion: fictional coverage is the result being compared.

## Same Declared Objective

Two permitted contributors jointly create a spreading bank of mist. Both can
independently supply the same obscuring area and can feasibly coordinate its
creation. This is one shared output, not a later action modifying an already
completed effect. Each commits an action and rolls their complete Expression
against the same complete D1 challenge in this fixture. No range or separate
resistance is omitted from one participant's challenge.

Each raw Expression of 80 gives Final Rating 78 at D1. Ordinary rolls 40, 60,
and 75 generate four, two, and one Effect respectively; roll 80 fails.

Add compatible Effects before applying the candidate converter once to the
shared result. One Effect establishes the ordinary footprint. The first
additional area Effect gives the first expanded footprint; subsequent area
Effects add 20% of its initial radius. The circular fixture uses radius 1.5 m
for that first expansion. Covered-area figures are unit-hex area equivalents,
not affected-cell counts.

No second Source's earned baseline is discarded. No additional baseline is
created on top of the sum. All output in the shared-area fixture is assigned
to that one function.

## Results

| Case | Actions | Generated Effects | Additional area expenditures | Approximate coverage |
| --- | --- | --- | --- | --- |
| One character rolls 40 | 1 | 4 | 3 | 16.00 |
| Two characters roll 40 and 60 | 2 | 4 + 2 = 6 | 5 | 26.45 |
| Two characters both roll 40 | 2 | 4 + 4 = 8 | 7 | 39.50 |
| First rolls 40, second fails | 2 | 4 + 0 = 4 | 3 | 16.00 |
| Both barely succeed, rolling 75 | 2 | 1 + 1 = 2 | 1 | 8.16 |
| Both fail | 2 | 0 | 0 | None |

The marginal-success case reaches the first expanded footprint, which maps to
the established seven-hex illustration. That is a consequence of combining two
earned Effects with the first-expansion candidate, not an extra teamwork bonus.

Independently placed, nonoverlapping footprints from rolls 40 and 60 would
cover approximately 16.00 and 8.16, totaling 24.16. Shared output gives 26.45
in one larger footprint. Two independent roll-40 footprints total 32.00;
shared output gives 39.50. These comparisons assume separate placement is
feasible; they do not merge unrelated actions automatically.

## Failure, Opposition, And Different Functions

If the second contributor fails, the first result remains because it is
independently viable in this example. A fictionally essential missing means
would instead follow the existing dependency rule. Failure complications are
separate and may actually disrupt the successful contribution.

A defense that can address this entire shared area and cancels two of its six
Effects leaves four, producing approximately 16.00. Its cancellation is used
once. Cancelling all six leaves no area. A component-only defense retains its
actual scope; this fixture does not grant global cancellation to every method.

For distinct functions, four Effects supplying area and two supplying harm
remain four area Effects and two harm Effects. The area converter still yields
approximately 16.00, not 26.45. This uses the same area conversion as the solo
case. It does not require a separate delivery roll or assign the harm to every
occupant. Multi-target application remains a separate unresolved valuation.

## Higher-Output Boundary

Two raw-160 contributors, each rolling 40 at D1, generate twelve Effects each.
Individually each produces approximately 73.46 coverage. Pooled twenty-four
Effects produce approximately 238.01 with unrestricted radius growth.

That is materially beyond a slight overage. It confirms the previously noted
unlimited-growth concern, amplified by the squared relationship between radius
and covered area. It does not invalidate adding earned output or authorize a
cap. Arithmetic consistency is not proof that the full growth curve is balanced.

## Conclusion And Next Boundary

Shared area works with existing compatible-Effect addition and the same output
converter. Extra actions contribute real output; failure and opposition reduce
it normally. No teamwork-specific area procedure is needed.

Keep the high-output growth result visible for final curve evaluation. The next
complementary-output question is what a supplied area permits a distinct effect
to reach, and how that effect is applied among targets. Do not silently copy
the full harm output to each occupant or force an additional delivery roll.

## Verification

The adjacent CJS script verifies the displayed fixed-roll cases and 58,621
pooled-output/cancellation states. It checks contribution-order invariance,
Effect accounting, zero-output handling, preservation when a helper fails,
and nonincreasing coverage under cancellation. All assertions pass. Natural
continuations and paid spending are not retested; they precede earned-output
pooling under the existing procedure.
