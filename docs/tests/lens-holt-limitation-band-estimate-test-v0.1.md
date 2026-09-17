# HOLT Limitation Band Estimate Test

Status: Modest / Substantial / Severe accepted as working assumptions.
The user subsequently approved the 25% / 50% / 75% adjustments as test
candidates. Final rates, actual prices, and compensation remain unresolved.

## Purpose

Explore an easy estimate rather than exact pricing. Use the approved area
count x 5 scope aid, with Leverage still unresolved. The original twenty-area
reference is used here. These are reference units, not spendable points,
Expression multipliers, or changes to which Axes exist.

## Working Bands

- Modest: meaningful inconvenience the Character can usually manage.
- Substantial: regularly denies important options or imposes significant
  consequences.
- Severe: makes the affected capability unreliable, unavailable for substantial
  portions of play, or costly to use.

The user agreed to proceed with those broad assumptions. The assistant then
selected 25%, 50%, and 75%, respectively, for this experiment, and the user
approved retaining those test candidates. Negligible restrictions need not
qualify for any band.

## Candidate Arithmetic

```text
Raw scope estimate = total permitted areas x 5
Limitation adjustment = affected areas x 5 x candidate band fraction
Adjusted reference = raw scope estimate - limitation adjustment
```

An adjusted reference is not reduced permission, an actual price, or an award
of development points. How an estimate informs HOLD-defined compensation is
still unresolved. No field, Axis, or HOLT Rank changes through this arithmetic.

| Affected areas | Affected reference | Modest adjustment | Substantial adjustment | Severe adjustment |
| --- | ---: | ---: | ---: | ---: |
| 1 | 5 | 1.25 | 2.5 | 3.75 |
| 2 | 10 | 2.5 | 5 | 7.5 |
| 4 | 20 | 5 | 10 | 15 |
| 10 | 50 | 12.5 | 25 | 37.5 |
| 20 | 100 | 25 | 50 | 75 |

## Four-Area Package Comparison

Hold permission and development assumptions constant, except as stated.
Each band assignment below is a narrative test fixture, not a universal
classification for an artifact or time restriction.

| Fixture | Affected areas | Candidate band | Adjustment | Adjusted reference |
| --- | ---: | --- | ---: | ---: |
| No additional restriction | 0 | None | 0 | 20 |
| Enabling item can be lost, but usually recovered promptly; occasional meaningful disruption | 4 | Modest | 5 | 15 |
| Removable/damageable suit; disruption is recurring and restoration needs significant work | 4 | Substantial | 10 | 10 |
| Same substantial disruption, but helmet enables only one area; other three stay available | 1 | Substantial | 2.5 | 17.5 |
| Full-moon-only capability in an ongoing campaign with important events outside that window | 4 | Severe | 15 | 5 |

The helmet case demonstrates why a limitation affecting one Axis must not
receive the same whole-package adjustment as loss of the entire suit.

If all important adventures occur during the full moon and waiting carries
no meaningful loss, that fixture no longer supports the Severe classification.
Calendar frequency alone does not determine its value in play.

A power that remains usable but imposes accumulating fatigue can also fit a
band, depending on the actual Load, applicability, recovery, and resulting
choices. No fatigue rate was supplied here, so it receives no invented number.
If its consequence reaches other capabilities, the affected-area estimate
does not by itself capture that additional burden.

## Simplicity and Failure Checks

The fractions are easy to state as quarter / half / three-quarters. However,
one-area adjustments produce quarter units. No rounding rule is adopted.
Nearest-five rounding would be particularly coarse at this size: it can erase
a real modest adjustment or make a severe one equal the entire area's value.

Blindly adding two 50% adjustments against the same 20-unit scope gives zero.
This is a failure control, not an approved stacking method. The proposed bands
describe overall burden; several descriptions of one dependency should not
automatically generate several adjustments. Independent limitations and
partly overlapping affected areas remain to be worked through if needed.

Already excluded areas must not be removed from the scope count and then
claimed again as an additional scope reduction in this same estimate.

## Verification

Calculated in JavaScript using the explicit formulas above. Checked 1-20
total areas, every affected count from 1 to the total, and all three candidate
fractions: 650 arithmetic assertions passed. Checks covered increasing
adjustments with severity and preservation of the unaffected portion.

These are formula checks, not evidence of equivalent gameplay value or actual
purchase balance. Narrative fixtures were compared conceptually, not simulated.

## Assessment and Return Point

The candidate fractions produce useful separation without weighting each
limitation characteristic. They are suitable for further estimate comparisons,
but their compensation magnitude is not validated against actual HOLT prices.

The sharpest open usability question is how to present small fractional
estimates. Preserve exact test values for now rather than invent a new
currency, rounding rule, or mandatory pricing schedule.

The candidate adjustments are approved for continued testing. The severe case
below examines retained capability while Access is available.

## Severe Case: Full-Moon-Only Access

Status: Fictional scenario walkthrough and arithmetic illustration, not a
probability simulation or adopted species package.

Use the same four-area Strength package: Strength, Movement, Stability, and
Projection. Its extraordinary manifestations can be initiated only during
the setting-defined full-moon window. Ordinary construction remains usable
outside that window. This fixture does not grant stored or deferred powers.
It does not decide a universal rule for ongoing manifestations after Access
closes, nor erase completed consequences when the window ends.

```text
Raw scope reference: 4 x 5 = 20
All four areas affected by the Severe limitation
Candidate adjustment: 20 x 75% = 15
Adjusted reference: 20 - 15 = 5
```

Hold Axis development and all ordinary ratings constant. This comparison
does not spend the 15 reference units as advancement or assume cheaper Axis
Ranks. The power receives no additional output penalty while Access is open.

### Ongoing Adventure

| Situation | Access | Practical consequence |
| --- | --- | --- |
| A planned prison breakout during the full moon | Available | The Character can bring the full developed package to bear. Planning around the limitation is legitimate. |
| Pursuers catch the group several days later | Unavailable | The Character must respond through ordinary capability, equipment, allies, or another independently available Lens. |
| A captive will be moved before the next full moon | Unavailable | Waiting for the power would forfeit this opportunity; the group needs another approach. |

This fixture supports a Severe classification: losing the package changes
important decisions and available responses. Its effectiveness in the planned
breakout does not refute the limitation. The adjustment concerns dependable
availability across play, not reduced competence every time the power works.
The three scenes are not a statistical sample; do not equate their count to
an availability percentage or infer that 75% was measured from them.

### Counterexample: Adventure Only During Full Moons

If meaningful challenges are routinely scheduled inside the window, or every
challenge can safely wait, the same calendar wording does not establish a
Severe burden. Under those facts the 75% candidate adjustment is unsupported.
That does not justify the GM manufacturing penalties for clever planning;
the package should be assessed against the intended campaign before play.

Similarly, a package that explicitly permits useful stockpiling or sustained
effects outside the window needs its actual restriction evaluated. Do not
assume either permission or a prohibition merely to preserve the estimate.

### Finding and Next Case

The Severe candidate survives this narrative check for the ongoing-adventure
fixture. It fails when the campaign routinely avoids the restriction. This
supports keeping 75% as a candidate, not asserting a calibrated final value.

The severe consequence-of-use comparison is now recorded in
`lens-holt-severe-use-consequence-test-v0.1.md`. It uses a six-Physical-Load
activation cost solely as a test fixture, checks existing Function Bands and
recovery counterexamples, and adopts no new consequence or Load amount.
