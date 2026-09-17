# Contextual Contribution Bands: Narrow and Broad Candidates

Status: Completed numerical sensitivity and qualitative scene comparison.
No valuation ladder, ceiling, floor, or change to pooling adopted.

## Scope and Interpretation

Compare 0.10 / 0.20 / 0.30 with the user's tentative
0.10 / 0.25 / 0.50 / 0.75 / 0.90. Include zero as a control.
The user's numbers are candidates, not final values to reverse-fit examples.

For this test, a value is a contribution magnitude: helpful c adds to the
Resonance factor; obstructive c subtracts from the remaining Dissonance factor.
Thus isolated 0.75 Dissonance means a remaining factor of 0.25, not 0.75.
This interpretation is explicit so the term cannot quietly switch between
amount removed and amount remaining.

Use B x R x D. B already contains fixed noncontextual factors, including any
applicable Difficulty, Scale, or Function Band. Do not add generic Difficulty
for these comparisons, assign new Conditions, or count a Condition twice.
R and D remain separate pools; distinct contributions add within each pool.

Sources: baseline Current Roll Budget and ordinary Effect procedure;
`lens-paid-boost-resonance-pool-test-v0.1.md`; user-approved comparison scope.

## Numerical Results

From B=60 with neutral context:

| Contribution | Helpful Final Rating | Obstructed Final Rating |
| --- | ---: | ---: |
| 0 | 60 | 60 |
| 0.10 | 66 | 54 |
| 0.20 | 72 | 48 |
| 0.25 | 75 | 45 |
| 0.30 | 78 | 42 |
| 0.50 | 90 | 30 |
| 0.75 | 105 | 15 |
| 0.90 | 114 | 6 |

These are Ratings, not success percentages. Special-face rules remain intact.
Values above 100 can still affect ordinary success margin and Effects.
On the same ordinary roll of 30, baseline 60 generates four Effects; helpful
0.25 generates five, 0.50 seven, and 0.90 nine. Obstructive 0.25 gives two,
0.50 one, and 0.75 fails that particular roll. These are normal unopposed
Effect quantities, not automatic Wounded Conditions or expanded permissions.

Across B=20 / 60 / 120 / 200, isolated 0.50 yields helpful Ratings
30 / 90 / 180 / 300 and obstructed Ratings 10 / 30 / 60 / 100.
The impact scales with the Expression; high values are not merely cosmetic.

The narrow candidates distinguish modest changes but cannot represent anything
beyond a 30% isolated adjustment. The broad candidates provide greater severity
coverage without requiring several artificial contributing Lenses. The existing
paid +0.20 remains valid even if it is not a contextual anchor in the broader set.

## Three Scene Comparisons

Each scene was considered across all seven nonzero candidate values. Descriptions
below illustrate how to judge leverage, not factual calibration of a universal
number. Automatic and unavailable cases are excluded before numerical comparison.

### Preparation

The Character has rehearsed a presentation against the known questions of an
upcoming review. Uncertainty remains in delivery and the panel's response.

- A general rehearsal that offers limited help could demonstrate 0.10.
- Rehearsal accurately matched to this review could demonstrate 0.25.
- Extensive, specifically applicable preparation that changes the Character's
  position substantially could demonstrate 0.50.
- Merely spending more time or describing more documents does not establish
  0.75 or 0.90. Those need correspondingly exceptional practical influence on
  the current Expression. They are not forbidden for ordinary Characters.

Any value from the narrow set is usable for modest preparation, but calling
0.30 universally maximal would be unsupported. If preparation resolves the
uncertainty completely, use Automatic resolution instead. No prepare Task,
per-round accumulation, timing bonus, or action-economy rule is established.

### Social Context

The Character asks a council to support a proposal that addresses its immediate
concerns. The contextual contribution is the proposal's established fit to the
current situation, not a second purchase of the Character's Reputation or skill.

- Limited shared interest could illustrate 0.10.
- Clear alignment with the council's current priorities could illustrate 0.25.
- A compelling concrete benefit central to the decision could illustrate 0.50.
- An overwhelmingly favorable negotiating position may justify considering
  0.75 or 0.90 if meaningful uncertainty still remains.

Reverse cases use actual conflicting interests or distrust arising from current
events, not merely a label such as hostile. Significant opposition can justify
stronger reductions than 0.30. Do not rate the same objection both as a separate
contextual penalty and as opposition already representing that objection.
Neither approval nor refusal becomes compulsory because of a number alone.

### Environmental Interference

The Character attempts to understand a spoken message through intrusive ambient
noise. The signal remains perceivable and the attempt is permitted.

- Minor distraction could illustrate 0.10.
- Noticeable disruption could illustrate 0.25.
- Major interference could illustrate 0.50.
- Only intermittent intelligible fragments could justify examining 0.75 or
  0.90, depending on what information remains available to this Character.

Assess the environment once; do not stack separate values for every noise
source already included. If the same interference was priced into Difficulty,
do not count it again. Where no relevant signal is available through the chosen
route, assess Access rather than treating 0.90 as a substitute for impossibility.
Reduced Function is not itself Closed Access. A clean environment is normally
neutral, not automatically positive Resonance.

## Asymmetry and Pool Boundaries

At neutral pools, +0.90 Resonance multiplies by 1.90, while a 0.90 Dissonance
reduction multiplies by 0.10. The common magnitude labels are not claims of
reciprocal numerical force. Equal helpful and obstructive amounts do not cancel:

```text
0.25 each: 1.25 x 0.75 = 0.9375
0.50 each: 1.50 x 0.50 = 0.75
0.90 each: 1.90 x 0.10 = 0.19
```

This follows the separate-pool arithmetic; no net-pool replacement is proposed.
Existing R=1.50 plus c=0.25 becomes R=1.75, a 16.67% increase over that prior
pool, not another independent x1.25. Existing D=0.75 minus c=0.50 leaves D=0.25.

Two genuinely distinct reductions of 0.50 and 0.75 produce an algebraic
remaining D of -0.25. This is an unresolved boundary, not a negative capability
result silently adopted by this test. A 0.75 reduction added to existing D=0.75
reaches zero. No clamp, adjustment ceiling, highest-only rule, or automatic
Access closure was inserted. The boundary also exists for repeated smaller
contributions; large anchors simply expose it sooner.

## Verification

Script: `lens-contextual-contribution-band-comparison-v0.1.ps1`.

128 cases across four B values, two existing R factors, two existing D factors,
and eight contribution magnitudes. 408 arithmetic assertions passed. The grid
identified eight zero-pool and eight negative-pool cases. Negative cases are
flagged without inventing a valid Final Rating. Full precision is retained
through calculation, then floored. The fixed roll of 30 avoids pretending that
this is a complete percentile-edge probability simulation.

Scene valuations are qualitative design judgments, not empirical playtests.

## Recommendation

Prefer the broader candidate set as a working guidance range:
0.10 minor; 0.25 substantial; 0.50 major; 0.75 dominant; 0.90 extreme.
The labels remain candidates. Use them as examples rather than mandatory slots
or a ceiling; other established values, including the paid +0.20, remain intact.

Rate how strongly the relevant circumstance actually helps or interferes with
this Expression, not narrative word count, number of details, or mere presence
of preparation. Preserve Automatic outcomes, Access, and distinct contribution.

Before presenting a complete Dissonance procedure, settle what happens when
the additive total reduction reaches or exceeds 1.00. That is the next real
decision exposed by this test. It does not require reopening the candidate
values, changing Function Bands, or merging the two pools.
