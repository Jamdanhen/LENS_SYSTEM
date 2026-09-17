# Dwarf Package: Numerical Trait Comparison

Status: Completed numerical comparison. The user approved x1.10 for each
applicable Resonance trait and x0.90 for Dense Build as working test values.
Jumping is included by user direction. No final trait values, universal
Resonance/Dissonance ladder, actual prices, or package-balance claim adopted.

## Test Assumptions

Compare a neutral control with two candidate modifier sizes:

| Candidate | Applicable Resonance | Applicable Dense Build Dissonance |
| --- | ---: | ---: |
| Control | x1.00 | x1.00 |
| Smaller | x1.10 | x0.90 |
| Larger | x1.20 | x0.80 |

These isolated factors test trait strength, not a new rule for aggregating
multiple Resonance or Dissonance contributions. Matching percentage changes
were chosen for comparison, not because their gameplay values are necessarily
equal. They are unrelated to the 25%/50%/75% limitation-estimation candidates.

Positive applications are the two distinct trait contexts: Resistance against
naturally occurring poisons, and Observation involving stone, stonework, gems,
or precious metals. Neither trait automatically supplies the other's bonus.

Negative applications are jumping, buoyancy, and weight-sensitive crossings
where Dense Build applies. Jumping can qualify on solid takeoff/landing
surfaces. Other actions use their genuinely applicable Lenses; this is not a
general Mobility or movement-rate penalty.

## Resolution Control

Use diagnostic ratings 30, 60, and 90 immediately before the isolated trait
factor. These are mathematical checkpoints, not three constructed Characters
or a claim about the default competence of a citizen or adventurer. All other
factors, including whatever Difficulty and Scale produced that checkpoint,
are held constant. No default D0 or arbitrary additional combat Difficulty is
introduced.

Enumerate rolls 1-100 with the existing test convention: at or below Final
Rating succeeds, except 99 and 100. On an unopposed success, generated Effects
are 1 + floor((Final Rating - roll)/10). Failure contributes zero generated
Effects. Full-precision ratings are retained; these particular outputs are
integers. Ratings above 98 can increase margin while success remains capped.

All cases are already uncertain, permitted, unopposed Expressions. Routine
automatic activities are not forced to roll. These results do not stand in
for an active opposed poison attack, a poison-damage schedule, or a complete
combat simulation. Generated Effects have no automatic injury or healing type;
their use follows the declared Expression and existing rules.

## Exact Success Chances

| Pre-trait rating | Control | Smaller Resonance | Smaller Dissonance | Larger Resonance | Larger Dissonance |
| --- | ---: | ---: | ---: | ---: | ---: |
| 30 | 30% | 33% | 27% | 36% | 24% |
| 60 | 60% | 66% | 54% | 72% | 48% |
| 90 | 90% | 98% | 81% | 98% | 72% |

For example, the x1.10 factor changes 60% to 66%: six percentage points,
not ten percentage points. Neutral contexts remain at their pre-trait rating.

## Expected Generated Effects Per Attempt

Including failures as zero, rather than averaging successful rolls alone:

| Pre-trait rating | Control | Smaller Resonance | Smaller Dissonance | Larger Resonance | Larger Dissonance |
| --- | ---: | ---: | ---: | ---: | ---: |
| 30 | 0.60 | 0.72 | 0.51 | 0.84 | 0.42 |
| 60 | 2.10 | 2.52 | 1.74 | 2.96 | 1.40 |
| 90 | 4.50 | 5.39 | 3.69 | 6.28 | 2.96 |

At the middle checkpoint the smaller bonus raises expected generated Effects
by 20%; the smaller penalty reduces them by about 17%. The larger changes are
about +41% and -33%. Symmetric rating changes do not produce symmetric changes
in expected Effects because both success and margin contribute.

At the upper checkpoint both bonuses reach 98% success, but x1.20 still
produces more margin and generated Effects than x1.10. Neither grants poison
immunity, automatic observation success, or new sensory Access.

## Whole-Package Application

At the 60 checkpoint, the smaller candidate gives these matched outputs:

| Expression | Trait applied | Success chance |
| --- | --- | ---: |
| Resist an applicable natural toxin | Poison Resonance | 66% |
| Inspect relevant stonework | Stone Observation Resonance | 66% |
| Jump a gap | Dense Build | 54% |
| Swim while maintaining buoyancy | Dense Build | 54% |
| Cross a weight-sensitive surface where density matters | Dense Build | 54% |
| Ordinary permitted unrelated Expression | None of these traits | 60% |

These rows are not equally weighted campaign encounters. Do not add positive
and negative percentages across different actions to claim package balance.
Darkvision remains an additional permission benefit, not another automatically
multiplied factor. The expanded stone sense also remains outside this numeric
bonus comparison; it adds Access under its test definition.

## Verification and Recommendation

The companion PowerShell script enumerated 2,700 roll evaluations across nine
configuration/checkpoint rows and three roles per row. Success-count and
direction checks passed. The enumeration is exact for these specified inputs,
not empirical playtesting or proof of cross-species equivalence.

Recommendation: use x1.10 for each applicable Resonance and x0.90 for Dense
Build as the next working test package. They make the traits noticeable in
chance and Effect output without the larger candidate's sharper reductions
to trained physical performance. This is a starting recommendation, not proof
that x1.20/x0.80 is unsuitable for a more pronounced setting implementation.

Decision: the user approved the smaller modifiers for continued package
testing. The larger candidate remains comparison data, not an adopted value.
The assembled reference is
`../design/lens-dwarf-starting-package-working-reference-v0.1.md`.
Complete package balance, final Resonance aggregation, prices, starting
provision level, and extra-purchase funding remain open.
