# Natural 01: One-Die Subtractive Continuation

Status: Completed test, subsequently adopted as a one-die working procedure
for permitted attempts, explicitly including Final Rating0. The baseline and
terminology reference record the subtractive result and normal Effect handling.
Repeated-01 behavior remains unresolved. The comparison and recommendation
below preserve the original test reasoning; its zero-Rating question is now
resolved in favor of allowing the continuation without prior ordinary success.

Later change: the user replaced direct subtraction with subtraction of each
continuation roll's distance from100, continuing on additional01s. See
`lens-repeated-01-comparison-v0.1.md` for that adopted rule. The one-die ranges
and means below remain historical and must not be presented as its distribution.

## Proposal and Controls

On natural 01, roll one additional d100 and subtract its numeric value from
the original 1. Compare that adjusted result with the unchanged Final Expression
Rating. Apply the existing successful unopposed Effect formula:

```text
Adjusted roll = 1 - additional d100
Successful margin = Final Expression Rating - adjusted roll
Effect Levels = 1 + complete ten-point steps of successful margin
```

The adjusted result ranges from 0 to -99. Negative rolled results are allowed
in this test; negative Effect quantities are not. A negative die total does not
alter the Character's Rating, Rank, Scale, Classification, or Access.

Use permitted, genuinely uncertain, unopposed attempts. No opposed-combat or
automatic-damage conclusion is inferred. Ordinary 99/00 supply no successful
Effects in the all-roll comparisons; their complication output is outside this
test. Automatic activities do not acquire a mandatory roll for possible luck.

The additional die is numeric data: 00 contributes 100 and 01 contributes 1.
Both end this bounded test. Neither the adopted negative-edge continuation
rule nor a possible repeated-01 rule is imported into this candidate. Paid
rerolls and their strategic use are also excluded from the distribution.

## Conditional Results

These figures apply after the initial natural 01 has occurred:

| Final Rating | Ordinary 01 Effects | With extra 50 | Full one-die range | Mean with continuation |
|---:|---:|---:|---|---:|
| 1 | 1 | 6 | 1-11 | 5.60 |
| 5 | 1 | 6 | 1-11 | 6.00 |
| 10 | 1 | 6 | 2-11 | 6.50 |
| 20 | 2 | 7 | 3-12 | 7.50 |
| 40 | 4 | 9 | 5-14 | 9.50 |
| 60 | 6 | 11 | 7-16 | 11.50 |
| 80 | 8 | 13 | 9-18 | 13.50 |
| 98 | 10 | 15 | 10-20 | 15.30 |
| 120 | 12 | 17 | 13-22 | 17.50 |
| 160 | 16 | 21 | 17-26 | 21.50 |
| 200 | 20 | 25 | 21-30 | 25.50 |
| 320 | 32 | 37 | 33-42 | 37.50 |

The additional die adds 1-100 to successful margin, yielding zero to ten extra
Effect Levels depending on the original remainder within its ten-point step.
For integer Ratings, its mean gain ranges from 4.6 to 5.5 across those remainders.
The tested rows span that range. It does not multiply an already strong output.
The proposal's Rating-80 example is reproduced: 1-50=-49, margin129, Effects13.

## Frequency and Severity

Without paid rerolls, the continuation is triggered on 1% of initial rolls.
Across all initial rolls, mean generated successful Effects change as follows:

| Rating | Ordinary procedure | Candidate continuation |
|---:|---:|---:|
| 1 | 0.010 | 0.056 |
| 20 | 0.300 | 0.355 |
| 80 | 3.600 | 3.655 |

The low aggregate change does not make individual outcomes mild. At Rating1,
11% of initial-01 continuations generate at least ten Effects, or 0.11% of all
initial rolls without paid rerolls. At Rating20, the corresponding values are
30% conditional and 0.30% overall. These are generated Effects before matching
mitigation or other handling, not guaranteed wounds or a universal defeat rule.

This is a rare large result for a low-capability permitted attempt. It can be a
desirable heroic moment; it should not be described as a negligible modifier.
Higher capability retains its ordinary margin advantage in the same circumstances.
Conservation, applicability, Scale, and permission still limit what the Effect
can be and where it can go. No unrelated capability is manufactured by the die.

## Zero-Rating Boundary

Final Rating0 is an analytical boundary representing a permitted attempt with
no ordinary successful face, not a new character class or permission state.
Ordinary roll01 fails against 0. Under literal subtraction, 01 followed by50
becomes -49 and succeeds with margin49, producing five Effects.

Thus the literal candidate also changes success eligibility at this boundary.
An alternative requiring the original 01 to succeed before continuation would
preserve zero success at Rating0, and would leave every positive-Rating row
above unchanged. That prerequisite is not adopted or assumed in the literal
candidate. This is the principal decision exposed by the test; Closed Access
is still Closed in either interpretation and does not receive a roll.

## Assessment and Next Proposal

The one-die mechanism is arithmetically viable and preserves developed capability
while adding a rare substantial windfall. Recommend considering it as the positive
exceptional-result candidate, with explicit acknowledgment of its low-Rating
severity and zero-Rating success implication. This is not a finding of observed
player satisfaction or a finalized combat balance assessment.

Before adoption, settle whether a permitted natural01 can benefit when its
ordinary Rating would not succeed. Repeated-01 behavior remains deliberately
undecided; it should not be settled as a side effect of this one-die test.
No change to awards, prices, Condition tracks, or mandatory action rolls is proposed.

## Verification

`lens-natural-01-continuation-test-v0.1.ps1` enumerated 1,200 conditional cases
across 12 Ratings and 120,000 initial/additional die pairs. Its 3,614 checks
verify adjusted-result range, bounded Effect gains, margin arithmetic, exact
all-roll frequency weighting, the Rating0 boundary, and the Rating80 example.
