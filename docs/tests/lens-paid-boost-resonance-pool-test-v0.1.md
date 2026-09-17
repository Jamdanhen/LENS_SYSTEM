# Paid Boost Within the Resonance Pool

Status: Completed historical comparison. After reviewing additive versus
multiplicative totals, the user selected additive pooling for simplicity and
confirmed the same principle for Dissonance. The baseline and terminology
reference record the decision. The earlier multiplicative recommendation below
was not adopted; preserve it as the comparison's original reasoning.

## Subsequent Adopted Decision

Add applicable Resonance contributions and apply one resulting multiplier.
Include neutral 1.00 once. The purchased boost contributes +0.20 rather than
multiplying the existing pool by 1.20. Thus +0.10, +0.15, and +0.20 give
x1.45, whereas multiplying x1.10, x1.15, and x1.20 would give x1.518.

Dissonance uses the same additive pooling principle, not a separate stacking
method. Preserve the one assessed environmental value and the prohibition
on counting the same Condition through both its Function Band and a second
numerical penalty. No contribution valuations, Difficulty curve changes,
Function Band changes, or merger of the two pools were adopted.

The additive columns below now describe the chosen boost behavior. Historical
tests with R=1 remain unchanged. Their 20% relative gain must not be generalized
to a boosted Expression that already has additional Resonance.

## Authority and Scope

The baseline's Current Roll Budget and the working reference v0.2 both require
one total Resonance modifier and one total Dissonance modifier. Neither specifies
that contributions must be added or multiplied to produce those totals.
One table-facing modifier does not imply additive arithmetic.

Keep the price at one point, the limit at one purchased boost per Expression,
the pre-roll timing, and the boost's retention on the one paid reroll. Compare
the leading x1.20 magnitude without reopening those settled procedures.

Let B be the unrounded Expression before these two contextual totals, R be the
already-assessed Resonance multiplier, and D be a fixed applicable Dissonance
factor. Stable equipment or other contributions already in B are not counted
again in R. The source valuation and construction of R and D are not decided
here. In particular, D is not a second penalty for a Condition already counted
through its Function Band.

## Two Interpretations

```text
Before purchase:       B x R x D

Additive contribution:
New Resonance = R + 0.20
Final = B x New Resonance x D

Multiplicative contribution:
New Resonance = R x 1.20
Final = B x New Resonance x D
```

Both display one Resonance modifier. Multiplicative inclusion is mathematically
equivalent to applying x1.20 once to the full unrounded result, not a new
independently ranked layer or an additional application of the boost.

## Results

With B=60 and no Dissonance reduction:

| Existing Resonance | Before spending | Add 0.20 to pool | Multiply pool by 1.20 |
|---:|---:|---:|---:|
| x1.00 | 60 | 72 | 72 |
| x1.10 | 66 | 78 | 79 |
| x1.25 | 75 | 87 | 90 |
| x1.50 | 90 | 102 | 108 |
| x2.00 | 120 | 132 | 144 |

These are Final Ratings, floored only at the end, not success percentages.
For example, the last column's second row is 79.2 before flooring.

Adding 0.20 gives a relative gain of 20% when R=1, 16% when R=1.25,
13.33% when R=1.5, and 10% when R=2. Multiplication preserves a 20%
unrounded Rating gain throughout. The additive option is coherent if the
intention is a fixed contribution whose relative benefit falls as other
Resonance grows; it is not the same as always increasing the current Rating
by 20%.

With B=60, R=1.5, and a fixed D=0.75:

```text
Original:       60 x 1.50 x 0.75 = 67.5 -> 67
Additive:       60 x 1.70 x 0.75 = 76.5 -> 76
Multiplicative: 60 x 1.80 x 0.75 = 81.0 -> 81
```

The Dissonance factor remains present under both methods. A higher numerical
result does not remove its originating Condition, recover Load, alter Capacity,
or reopen Closed Access. No Resonance-versus-Dissonance subtraction is introduced.

## Effect and Boundary Checks

Using the existing uncertain unopposed percentile convention, at B=60 and
R=1.5, the original Rating 90 yields mean generated Effects of 4.50. Additive
Rating 102 yields 5.68; multiplicative Rating 108 yields 6.28. Both latter
cases have 98% ordinary first-roll success in that convention, so their
difference appears in margin. These are pre-mitigation Effects, not wounds,
opposed hit rates, or a finalized special-outcome model.

The multiplicative option amplifies already favorable circumstances and gives
a larger absolute increase to larger Expressions. This is the consequence of
retaining a percentage benefit, not evidence that it is inherently balanced.
The additive option is less amplifying but deliberately reduces the relative
benefit in those same circumstances. No maximum pool or diminishing-return
rule is invented to settle this choice.

Other boundary checks:

- R=1 reproduces the isolated x1.20 tests under both options.
- Fixed Dissonance factors 1, 0.75, and 0.5 preserve the same relative distinction.
- Raw 40.9 with R=1 becomes 49.08, floored to 49, not 48 from early truncation.
- On the paid reroll, reuse the purchased pool total; do not multiply by 1.20 again.
- Different descriptions of the same help do not produce extra contributions.
- Narrative help contributes only its applicable established function, not an
  automatic boost in addition to this purchase.
- Automatic actions remain Automatic; unavailable actions remain unavailable.

## Recommendation and Decision

Recommend R x1.20, folded into the single table-facing Resonance multiplier.
This preserves the previously tested 20% boost when other Resonance is present.
It does not decide how every other kind of Resonance is valued or combined.

Adopting R+0.20 would also function, but should be an explicit decision to
make the boost a fixed pool increment rather than a consistent percentage
increase. The numerical comparison is complete; the remaining decision is
which behavior the user wants, not another price or award test.

## Verification

`lens-paid-boost-resonance-pool-test-v0.1.ps1` tests 4 base values, 5 existing
Resonance totals, and 3 fixed Dissonance factors: 60 cases and 242 assertions.
It enumerates 100 ordinary die outcomes for each before/additive/multiplicative
result and checks percentage continuity, additive increments, ordering,
isolated equivalence, reference outputs, and final-only rounding. No user
character allocation or other project was changed.
