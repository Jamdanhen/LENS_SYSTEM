# Movement-Only Versus Mobility-Plus-Movement Contribution

Status: Movement-only personal contribution adopted as a working rule, 2026-09-08;
baseline quantities and additional-movement output remain unresolved.
Date: 2026-09-08.

## Objective and Controls

Compare contributions to the same ordinary personal-travel baseline. The old
contextual-pooling paste was explicitly withdrawn and is not part of this work.

The adopted approach lets the movement form and means establish ordinary travel,
modified by applicable Lenses, while retaining meaningful Movement development.
Ordinary movement is available once per turn, not once per action. No distance,
turn duration, sprint multiplier, or final travel formula is adopted here.

Sources: baseline Ordinary Movement and Actions, Rank progression, parent caps,
and latent use; `lens-movement-rating-versus-form-baseline-test-v0.1.md`.

Use the same permitted, self-powered movement form, Scale, environment, current
function, and equipment throughout. No Tasks, Fields, Specialties, contextual
modifiers, or HOLT contributions enter this isolated comparison. Routine movement
is not rolled merely because these coefficients are calculated.

Attribute ratings are direct numerical bases from 1 to 10. Movement Rank ranges
from 0 to its parent Mobility, with multiplier 1 + Rank/10. Rank 0 is a neutral
multiplier, not lack of movement Access. These are legal partial allocations,
not complete characters or claims about population-average performance.

## Two Candidate Contributions

```text
A: Movement-only contribution = 1 + Movement Rank/10

B: Combined contribution = Mobility x (1 + Movement Rank/10)
```

The second uses the existing Attribute role directly. Recasting Mobility as
another 1 + Rank/10 multiplier would be a different candidate, not the current
comparison. Neither expression above is adopted as a distance equation.

## Raw Comparison

| Mobility | Movement Rank | A: Movement only | B: Mobility plus Movement |
| ---: | ---: | ---: | ---: |
| 1 | 0 | 1.00 | 1.00 |
| 2 | 2 | 1.20 | 2.40 |
| 5 | 0 | 1.00 | 5.00 |
| 5 | 2 | 1.20 | 6.00 |
| 5 | 5 | 1.50 | 7.50 |
| 8 | 2 | 1.20 | 9.60 |
| 10 | 0 | 1.00 | 10.00 |
| 10 | 10 | 2.00 | 20.00 |

All 65 legal Mobility/Movement combinations were evaluated using decimal
arithmetic. A ranges from 1 to 2; B ranges from 1 to 20. The coefficients remain
at full precision because final travel units and their rounding are not defined.

## Equal Reference Comparison

The same literal baseline multiplied by A or B does not mean the same reference
travel. A Mobility 5 / Movement 0 character receives 1 baseline under A and 5
under B. Comparing those absolute numbers alone exaggerates the choice by
mixing baseline calibration with character variation.

For comparison only, anchor both to that same legal reference character. Divide
B's coefficients by 5, its reference coefficient; A's reference is already 1.
This is analytical normalization, not a proposed divisor, a new price, or a
claim that Mobility 5 is the average person.

| Mobility | Movement Rank | A: relative to reference | B: relative to reference |
| ---: | ---: | ---: | ---: |
| 1 | 0 | 1.00 | 0.20 |
| 2 | 2 | 1.20 | 0.48 |
| 5 | 0 | 1.00 | 1.00 |
| 5 | 2 | 1.20 | 1.20 |
| 5 | 5 | 1.50 | 1.50 |
| 8 | 2 | 1.20 | 1.92 |
| 10 | 0 | 1.00 | 2.00 |
| 10 | 10 | 2.00 | 4.00 |

Changing the baseline calibration does not change the extremes' relative spread:
A still spans twofold and B twentyfold. A different common reference changes the
displayed factors but not those pairwise ratios.

## What Each Choice Means

### Same Movement, Different Mobility

Mobility 5 / Movement 2 and Mobility 8 / Movement 2 get the same ordinary
allowance under A. B gives the second 1.6 times the first's contribution.

A is therefore making a substantive choice: broad Mobility does not directly
increase the ordinary allowance at a fixed Movement Rank. Its roles remain the
parent cap and the broad base of relevant Expressions. This is not the same as
removing Mobility from the character, but it must be deliberate.

### Same Mobility, Different Movement

At Mobility 5, raising Movement from 0 to 5 gives a 50-percent increase under
either candidate. Movement development matters in both. It cannot exceed its
parent under either approach; Movement 10 is unavailable at Mobility 5.

### Broad Capability Versus Focused Development

Compare Mobility 5 / Movement 5 with Mobility 8 / Movement 2:

- A gives the first a 25-percent larger ordinary contribution: 1.50 versus 1.20.
- B gives the second a 28-percent larger contribution: 9.60 versus 7.50.

This is not merely a different unit scale. The candidates can reverse which
Character receives more ordinary movement.

### Parent Development Without Child Investment

Moving from Mobility 5 to 6 with Movement 5 unchanged increases B by 20 percent;
A remains unchanged. The higher parent also permits future Movement 6 in both
models. A separates raising the development ceiling from purchasing increased
ordinary movement; B rewards the parent increase immediately as well.

### Ordinary Allowance Versus Exerted Performance

The ordinary allowance is movement accompanying the turn, not an adopted maximum
speed or a result of a race. A character receiving the same ordinary allowance
can still have a stronger applicable Mobility-led Expression when sprinting,
pursuing, or handling genuinely difficult relocation. How successful additional
movement translates into travel remains to be decided, not assumed here.

Under B, personal baseline capability and focused development both directly
shape the allowance. This closely follows normal Expression construction, but
also carries the Attribute's full numerical spread into this particular output.
That is a design consequence, not a mathematical error or evidence of realism.

### Baseline Ownership and Other Travel Forms

In either candidate, the baseline must not already include the identical
personal contribution and then multiply it again. For example, calling a
character-specific figure their fully adjusted movement and applying their
Movement multiplier again would duplicate that contribution.

This test does not extend a personal multiplier to vehicle travel merely because
the pilot possesses it. The adopted form-and-means rule still determines what
actually supplies travel. Nor does a high coefficient supply flight Access or
automatically cross a Scale boundary.

## Recommendation

The user adopted A as the working ordinary personal-movement contribution. Its
twofold development range is easier to place around an ordinary form baseline,
without importing the entire effectiveness spread into movement accompanying
other actions. This is a simplicity and design preference, not a proven speed
balance or a claim that B cannot fit a campaign.

Preserve Mobility as the parent ceiling and direct Attribute base of relevant
movement Expressions. The price of A's simplicity is explicit: characters with
the same Movement Rank and otherwise identical applicable travel factors have
the same ordinary allowance despite different Mobility ratings.

If broad Mobility must directly change ordinary allowance even at equal Movement
Rank, B better expresses that intent. Recalibrating the common baseline alone
will not compress B's twentyfold variation; changing that variation would require
another proposed mapping, which this comparison does not invent.

## Decision Boundary

The personal-contribution decision is resolved in favor of A. Mobility retains
its parent cap and role in relevant movement Expressions, rather than also
directly multiplying ordinary allowance. No baseline distance, turn duration,
sprint rule, or new modifier curve is adopted. Baseline quantities and
additional-movement output remain the next substantive work.
