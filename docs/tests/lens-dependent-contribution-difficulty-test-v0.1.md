# Dependent Contribution Difficulty Test v0.1

Status: Authorized comparison, 2026-09-12. Neither Difficulty assignment is
adopted by this record. The shared-effect / dependent-enhancement distinction
is the selected direction for this test, following the user's instruction to
continue. No baseline or terminology reference is changed here.

## Models

Whole-undertaking Difficulty: each indispensable contributor faces the entire
combined challenge. In the user's illustrative D3 effect plus D2 enhancement,
both roll against D5.

Contribution-specific Difficulty: each contributor faces the challenge of the
actual function they perform. In the same illustration, the primary faces D3
and the enhancement faces D2.

Both models preserve committed actions, independent Expressions, necessary
functions, partial results, and actual disruption. Neither combines Final
Ratings or awards free Effects. The complete enhanced result requires both
necessary functions to succeed and remain applicable.

The component assignments and their sum are test fixtures, not a new universal
Difficulty-addition rule. More actors do not automatically create more
Difficulty components. No new area, weight, distance, or duration values are
established.

## Probability Results

Raw values are complete pre-Difficulty numerical probes, not newly constructed
characters. Ratings use the existing Difficulty curve and final flooring.
Probabilities include natural 01 success and 00 failure. They concern initial
successful output, before active cancellation, paid spending, or complications
that disrupt the undertaking. All these attempts are permitted and uncertain;
routine contributions are not forced to roll.

| Raw Expression each | Required functions | Whole Difficulty for each | Each function's Difficulty |
|---:|---|---:|---:|
| 40 | D3 and D2 | 0.25% | 3.22% |
| 80 | D3 and D2 | 1% | 13.16% |
| 160 | D3 and D2 | 4% | 52.64% |
| 320 | D3 and D2 | 16% | 98.01% |
| 160 | D4 and D3 | 0.49% | 18.48% |
| 320 | D4 and D3 | 1.96% | 66.33% |

For a given full Difficulty, requiring n independent indispensable successes
produces p^n for equal probabilities. This is additional to the reduction in
each Rating caused by assigning the entire challenge to every contributor.

In a three-function D3 / D2 / D2 fixture with raw 160 each:

- All three at D7: approximately 0.0343% complete success.
- Each at their own function's Difficulty: approximately 49.48%.

The separately assessed model still distinguishes capability and challenge.
It is not automatically near-certain: the near-98% fixture occurs when both
contributors individually exceed Rating 100 against their respective tasks.
Harder functions reduce the chance again. No timing, magnitude, or output
limits follow from this probability comparison alone.

## Unequal Contributors

Use D3 for the primary function and D2 for the enhancement.

| Raw primary / enhancement | Whole Difficulty each | Contribution-specific |
|---|---:|---:|
| 80 / 320 | 4% | 27.72% |
| 320 / 80 | 4% | 46.53% |

Contribution-specific assessment makes the actual assignment matter: placing
the stronger contributor on the harder function is more reliable. A strong
enhancement cannot create a missing primary effect.

With raw 320 primary and raw 80 enhancement, separately assessed:

- Complete enhanced result: 46.53%.
- Successful primary without successful enhancement: 52.47%.
- Primary fails: 1%.

The residual result is useful only where the primary is independently viable.
If successful delivery is necessary to reach the target, a local primary
effect is not a successful remote attack.

## Concrete Exchange and Opposition

Use raw 160 each, primary D3 and enhancement D2, with completed rolls 50 / 50.

- Whole model: Rating 20 each; both fail.
- Contribution-specific: Rating 56 primary produces one Effect; Rating 94
  enhancement produces five Effects. Both declared functions succeed.

Keep those Effects typed. One primary Effect plus five enhancement Effects
does not become six damage Effects or damage copied across an area.

An opposition fixture addresses the enhancement only:

- Four matching cancellation Effects leave one enhancement Effect. Under the
  fixed-declared-function test assumption, the enhancement still operates.
- Five cancel the enhancement completely. The primary can remain locally.
- Removing necessary connecting means prevents the combination even if
  enhancement Effects remain numerically.

The assumption that a surviving Effect accomplishes the declared enhancement
tests the proposed model; it does not independently adopt an area-output rule.
No new coordination roll or connection statistic is introduced.

## Special Results

The primary's natural 00 followed by 50 at Rating 56 supplies no successful
Effects and nine complication Effects. A successful helper does not replace
the failed primary or erase the complication.

A helper's natural 01 followed by 50 at Rating 94 produces fifteen enhancement
Effects. If the primary fails, those fifteen do not manufacture the missing
primary. Any independently useful residual remains subject to its fiction.

## Shared-Effect Control

Two contributors lifting the same declared load still face that same load's
Difficulty. They are not automatically assigned easier fractions of it.
At raw 320 each and D5, each has Rating 40; at least one succeeds 64% of the
time before opposition or disruptive complications. Compatible Effects pool.

Dividing one function into different verbal descriptions does not establish
different mechanical contributions. Conversely, genuinely different functions
do not become interchangeable merely because the characters share an objective.

## Recommendation

Prefer contribution-specific Difficulty for dependent enhancement. It charges
each action for what it does while the dependency itself preserves the risk of
an incomplete result. Do not use the entire summed Difficulty for everyone as
the universal default: under the tested curve it strongly suppresses necessary
multi-character contributions.

This is a recommendation based on the chosen narrative objective and observed
pacing, not proof that higher success rates are inherently better. A campaign
could deliberately make intricate collaboration rare; that is not the user's
stated aim for this engine.

Assess the actual contribution, including every burden it genuinely bears.
If directing an enhancement remotely itself requires reaching the destination,
that range remains relevant; another character's successful roll does not
erase it. If the primary provides delivery and the helper supplies a local
enhancement, assess that actual arrangement instead. No automatic surcharge
or exception is needed solely for combining actions.

Decision proposal: contributors to the same shared effect face the same
applicable challenge; contributors supplying distinct dependent functions face
their actual functions' Difficulties. Preserve dependencies, residual effects,
and existing targeted opposition. Leave universal Difficulty composition and
surplus-output allocation unresolved.

## Verification

`lens-dependent-contribution-difficulty-test-v0.1.cjs` passed all assertions.
It exhaustively checked 80,000 initial percentile pairs across eight two-person
fixtures against exact probability formulas, plus the three-person formula,
completed special results, cancellation, and necessary-means checks.

This is not an encounter simulation or an exhaustive continuation-output
distribution. It does not evaluate resource depletion over time, repeated
attempts, or the valuation of particular area and range bands.
