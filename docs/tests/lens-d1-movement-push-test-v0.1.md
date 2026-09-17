# D1 Movement Push Test

Status: Tested candidate; user explicitly has not agreed to D1 as the default.
Date: 2026-09-09.

## Approved Test and Current Proposal

Test an uncertain push beyond an ordinary movement allowance at D1, using the
existing full Expression and Effect rules. Compare the same build slices alone
and when also attacking. Do not adopt a base distance, per-Effect increment,
Difficulty, or turn duration.

The user proposes a standard ordinary allowance, modified by relevant Lenses,
without a roll for routine feasible travel. Declare a push, not a desired
number of extra feet. Its success and Effect Levels determine additional travel.
Pushing plus attacking uses independent Expressions and ordinary action division.
Declare the action count before the first action roll, not before the turn begins.

This supersedes the preceding direct-speed, additive-floor, and square-root
experiments as the active discussion lane. Those records remain history.
The new push proposal is not also multiplied by the previous fixed sprint-double
candidate. It does not grant multiple ordinary allowances or extra time.

Sources:
- `../system/lens-system-baseline-draft-v0.1.md`, Rank progression, Difficulty,
  Effect resolution, contextual pooling, Automatic, and special results.
- `../system/lens-terminology-quick-reference-v0.1.md`, multiple-action divisor.
- `lens-concept-led-25-50-100-rebuild-test-v0.1.md`, D1 x0.98 convention.
- `lens-preparation-assessment-versus-effects-test-v0.1.ps1`, inclusive success.
- `lens-movement-expression-pace-curve-test-v0.1.md`, build allocations.

## Numerical Controls

```text
Raw capability = Mobility x all five applicable Rank multipliers
Push Final Rating = floor(raw capability x 0.98 / declared action count)
Successful push Effects = 1 + floor((Final Rating - adjusted roll) / 10)

Illustrative ordinary allowance = 20 feet
Illustrative additional distance = 10 feet per generated movement Effect
Total = ordinary allowance + additional distance actually usable in the scene
```

The ordinary allowance and ten-foot increment are fixtures, not adopted values.
They do not change the success percentages. No prior display rounding occurs
before D1 or the action divisor. All selected expertise must apply. No HOLT,
equipment, paid spending, impairment, environmental penalty, or extra Difficulty
is invented. Use neutral ordinary Scale and available clear ground.

Use the inclusive roll <= Final Rating convention of the current executable
resolution tests. Some preceding movement interpretation notes used a strict
under comparison; those notes are not the source for this calculation. At exact
equality a successful result has zero margin and one baseline Effect here.

The ordinary-face distance range includes successful rolls 02-98 only. Initial
01 follows the adopted distance-from-100 continuation and can exceed that range.
Natural 99 and 00 fail. Every fixture's Rating is at least 1, so every initial01
chain succeeds, including a terminal00 leaving adjusted result1. Thus total
success probability is exactly min(Final Rating,98) percent for these fixtures.
No truncation of a repeated01 tail is required for that success probability.

## Single Push

Ranks: Mobility / Movement / Traverse / Field / Specialty / Precision.

| Ranks | Raw capability | D1 Final Rating | Push success | Extra feet on ordinary success |
| --- | --- | --- | --- | --- |
| 5/0/0/0/0/0 | 5 | 4 | 4% | 10 |
| 5/5/5/5/0/0 | 16.875 | 16 | 16% | 10-20 |
| 5/5/5/5/5/5 | 37.96875 | 37 | 37% | 10-40 |
| 7/7/7/7/7/7 | 99.38999 | 97 | 97% | 10-100 |
| 8/8/8/8/8/8 | 151.16544 | 148 | 98% | 60-150 |
| 9/9/9/9/9/9 | 222.84891 | 218 | 98% | 130-220 |
| 10/10/10/10/10/5 | 240 | 235 | 98% | 140-240 |
| 10/10/10/10/10/10 | 320 | 313 | 98% | 220-320 |

These are movement allocation slices, not whole equal-budget characters or
assertions about which Ranks represent average human fitness. The known maximum
fixture still generates 22-32 ordinary Effects, giving 240-340 total feet with
the illustrative twenty-foot allowance. This is not a claim about permitted
human speed: duration, movement magnitude, and the distance increment remain open.

## Push Plus Attack

Both activities have their own Rating divided by two. Do not apply D1 to the
attack merely because D1 is the push test fixture; resolve its own circumstances
and opposition normally. The table evaluates the push only.

| Ranks | Push Rating after /2 | Push success | Extra feet on ordinary success |
| --- | --- | --- | --- |
| 5/0/0/0/0/0 | 2 | 2% | 10 |
| 5/5/5/5/0/0 | 8 | 8% | 10 |
| 5/5/5/5/5/5 | 18 | 18% | 10-20 |
| 7/7/7/7/7/7 | 48 | 48% | 10-50 |
| 8/8/8/8/8/8 | 74 | 74% | 10-80 |
| 9/9/9/9/9/9 | 109 | 98% | 20-110 |
| 10/10/10/10/10/5 | 117 | 98% | 20-120 |
| 10/10/10/10/10/10 | 156 | 98% | 60-160 |

For an all-5 build, a push alone succeeds 37% of the time. A push while also
attacking succeeds 18%. At fixed roll20, the single push generates two Effects
(20 extra feet) and the divided push fails. These are example outcomes, not
average results. The attack's success rate cannot be inferred from the movement
build. Even where success remains at 98%, division reduces generated Effects.

The base allowance is available once. Ordinary failure generates no extra
distance; failure alone does not erase otherwise feasible ordinary travel.
An actual interruption, access change, or justified complication may affect what
movement can be completed. This is not a protected minimum under all conditions.

## What D1 Actually Changes

D1 is x0.98, not a flat 98% chance for every Character. With neutral x1 instead,
the single-push Ratings would be 5,16,37,99,151,222,240,320. The corresponding
success rates are 5%,16%,37%,98%,98%,98%,98%,98%. D1 changes those probabilities
by at most one percentage point in this sample. High Ratings can lose Effects
without losing ordinary success faces.

Therefore low success on the low-investment and broad-training fixtures is
chiefly a result of the existing Expression, not a large D1 penalty. Raising
Difficulty would further reduce reliability. Whether those pushes should be
this uncertain is a fictional benchmark decision, not proved by arithmetic.

## Special Results

The current special rules remain; no movement-only critical rule or cap is added.
At Rating4, initial01 then06 produces adjusted roll -93, margin97, ten Effects,
and 100 extra feet if the illustrative unit applies. The prefix 01,06 has
probability 1/10,000. At Rating313 it generates 41 Effects, or 410 extra feet.
Additional01s can produce more; these are not finite maxima.

Natural00 still fails. A following50 yields cumulative150. Rating4 gives
fourteen complication severity steps; Rating313 gives zero margin-based steps
but still fails the push. Do not automatically call those Wounded or assign
injury without appropriate fiction. Existing permission, magnitude, conservation,
and consequence rules still apply. No new cap or reroll spending was tested.

The special-result check matters when defining the distance unit and ordinary
movement frame. Do not disguise exceptional distance as an ordinary success
range, or fix its magnitude by inventing unrelated movement penalties.

## Findings and Recommendation

The mechanism distinguishes routine travel from uncertain additional output
without making ordinary travel depend on low training Ratings. Traverse and
expertise improve the push; action division affects its chance and Effect output.
This is operationally different from the abandoned full-Rating-as-speed formula.

The two remaining decisions are distinct:
1. Does an ordinary push actually warrant this rolled uncertainty? D1 is a
   low-resistance test benchmark, not adopted merely because it is the first
   rolled band. Low builds can frequently gain no extra movement while still
   moving their ordinary allowance.
2. How many feet should one movement Effect supply? The illustrative ten-foot
   value produces hundreds of extra feet at high development. Do not raise
   Difficulty solely to conceal an overly large output unit.

Recommend retaining D1 only as the current comparison benchmark and comparing
five-foot with ten-foot Effect increments next, with no change in success rules
or artificial per-push penalty. This is a proposed next comparison, not an
adoption of either distance or D1. No turn duration is necessary to report feet
per push; a duration is necessary before asserting real-world speed equivalence.

## Verification

Companion script recomputes eight builds before final-only flooring, evaluates
both one- and two-action cases, enumerates 1,552 ordinary initial faces, checks
the inclusive success boundary, and evaluates specified positive/negative
special-result chains. Overall success probabilities include initial01 and
exclude unconditional failure faces. No simulated sample, average-distance
claim, universal action-count maximum, or core-rule change is introduced.
