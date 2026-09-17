# Signed Opposed Margin Test

Date: 2026-09-10
Status: User-requested diagnostic. No opposed-resolution rule adopted.

## Question

Does one subtraction work consistently when opposing rolls succeed or fail?

```text
Margin = Final Rating - roll
Net Margin = acting Margin - opposing Margin
Effects on a contest win = 1 + floor(Net Margin / 10)
```

The existing baseline adopts Expression versus Expression and the ten-point
Net Margin Effect progression, but explicitly leaves the final opposed-roll
formula unresolved. Earlier bargain tests required individual success and used
no successful concession for both failures or equal margins. These were test
controls, not independent adoption of a complete opposed procedure.

## Method

The companion PowerShell script enumerates 103,499 pairs: all 97 x 97 ordinary
faces (02 through 98) at eleven Rating pairings. Percentages below are
conditional on both rolls being ordinary, not full-percentile probabilities.
Natural 01, 99 and 00, continuations, paid rerolls and their opposed eligibility
are excluded. No special-result rule is changed by this test.

All attempts have Access, the same Scale, final integer Ratings, and no extra
Difficulty duplicating active opposition. Generated Effects precede mitigation
and do not imply a universal damage, Load, discount or social-control outcome.
No-difference ties produce no decisive result as a test control.

Three comparisons isolate different changes:

- Previous proposal: actor must succeed; subtract only a successful opposing
  margin, treating a failed opposing margin as zero.
- Signed, success required: retain the same winner eligibility, but subtract
  the actual opposing margin, including a negative one.
- Fully relative: subtract signed margins; a positive Net Margin wins even if
  both rolls failed their individual Ratings.

An opposing defensive victory prevents the declared effect; it does not grant
a free counterattack or an undeclared offensive consequence.

Checks cover the user examples, algebraic equivalence, antisymmetry, invariance
when both Ratings increase equally, agreement when both succeed, and the fact
that including failed opposition cannot reduce generated Effects.

## Concrete Outcomes

| Actor / opponent margins | Signed Net Margin | Generated Effects |
| --- | ---: | ---: |
| +50 / +20 | 30 | 4 |
| +50 / -30 | 80 | 9 |
| +18 / -78 | 96 | 10 |
| -50 / -80 | 30 | 4, only under fully relative eligibility |
| +20 / +20 | 0 | No decisive result, test control |

The +18 / -78 case is Rating 20 rolling 02 against Rating 20 rolling 98.
The previous proposal yields two Effects. Signed subtraction yields ten.
This is a genuine output change, not a mathematical error.

## Amplification With Winner Eligibility Held Constant

| Acting/opposing Ratings | Actor win % | Previous mean Effects per win | Signed mean Effects per win | Previous / signed chance of 10+ Effects per exchange |
| --- | ---: | ---: | ---: | ---: |
| 20 / 20 | 17.57 | 1.45 | 4.97 | 0 / 0.30% |
| 40 / 40 | 31.92 | 2.32 | 4.54 | 0 / 0.30% |
| 80 / 80 | 47.86 | 3.61 | 3.91 | 0 / 0.30% |
| 80 / 60 | 62.63 | 3.92 | 4.91 | 0 / 4.02% |
| 80 / 20 | 79.42 | 4.39 | 7.64 | 0 / 24.21% |
| 160 / 160 | 49.48 | 3.82 | 3.82 | 0.30 / 0.30% |
| 320 / 320 | 49.48 | 3.82 | 3.82 | 0.30 / 0.30% |
| 320 / 80 | 100.00 | 24.37 | 24.55 | 100 / 100% |

Failed-defense amplification is not mainly a high-Rating problem. At equal low
Ratings it greatly increases severity conditional on winning. With a success
requirement, successful low-Rating exchanges select unusually good acting rolls
against often-failed opposing rolls. Consequently, mean Effects per win can be
higher at 20/20 than at 80/80; the low-Rating actor still wins much less often.

## Fully Relative Outcomes

| Ratings | Actor win % | Mean Effects per win |
| --- | ---: | ---: |
| 0 / 0 | 49.48 | 3.82 |
| 20 / 20 | 49.48 | 3.82 |
| 80 / 80 | 49.48 | 3.82 |
| 320 / 320 | 49.48 | 3.82 |
| 80 / 60 | 68.08 | 4.68 |
| 80 / 20 | 92.53 | 7.13 |
| 20 / 80 | 7.08 | 1.84 |

Equal Ratings cancel:

```text
Net Margin = (acting Rating - opposing Rating)
           + (opposing roll - acting roll)
```

With ordinary rolls, fully relative resolution depends on the Rating difference,
not absolute competence. Equal Rating 20 and equal Rating 320 contests therefore
have identical outcomes before other Effect modifiers. Equal Rating zero is an
intentional boundary probe: it cannot be adopted as ordinary successful output
without addressing the existing zero-Rating/natural-01 distinction.

At 20/20, allowing both-failure wins increases the actor's victory probability
from 17.57% to 49.48%. The increase is 31.92 percentage points before rounding.
At 80/80 the increase is only 1.63 percentage points. This is a substantive
winner-eligibility decision, not merely alternate Effect arithmetic.

## Fictional Checks

- Strike versus Block: a failed Block can amplify a successful Strike, but
  defensive victory alone does not inflict a retaliatory Strike.
- Persuade versus opposition: the same subtraction applies, with actual stakes
  and agency rules governing what the Effects mean. Nine Effects do not create
  nine unrelated concessions or unrestricted control.
- Discharge versus Dodge: failure can represent moving into the shot or failing
  to evade it. The arithmetic does not require a different Task-specific rule.
- Equal poor performance: a relative winner can make sense in a contest whose
  only question is who does better. It is not automatically equivalent to
  accomplishing an action that neither could execute successfully.
- No opposition: the existing unopposed rule uses the actor's own successful
  margin. A failed defense can therefore produce more Effects than no defense.
  This is part of the proposed amplification, not hidden by this comparison.

## Conclusion and Next Decision

Signed subtraction is algebraically consistent, applies across Task families,
and needs no special arithmetic branch for failed opposition. It remains a
viable candidate. Its meaningful tradeoff is that opponents' mistakes can supply
substantial Effect, especially when ordinary competence is low.

Do not adopt a ceiling or restore the earlier branch merely to remove that
tradeoff. First decide whether an opposed win requires individual success or
whether outperforming the opponent is sufficient. The full relative rule
answers the latter question and changes the earlier both-failure control.

Recommendation: retain signed subtraction for the next decision, explicitly
resolve both-failure eligibility, then handle special results. This test does
not settle either unresolved question or modify the baseline.
