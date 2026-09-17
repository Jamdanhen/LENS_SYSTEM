# Movement Output Interpretation Check

Status: Diagnostic check completed; no new output rule adopted.
Date: 2026-09-08.

## Active Question

Following the user's objection to accumulating exceptions, the additive floor
and its compensating divisor are set aside. Check whether the earlier movement
work misinterpreted Expression output before proposing another conversion.
The earlier floor test remains historical evidence, not a recommended rule for
adoption. No changes are made to the baseline or terminology reference.

Sources in `../system/lens-system-baseline-draft-v0.1.md`:
- Core Vocabulary: Base Expression, Expression Rating, Final Rating.
- Percentile Resolution; Effect Resolution and Conservation.
- Automatic and Trivial; Natural 01 Continuation.
- Ordinary Movement and Actions; Scale Reference Frame.

## Findings From Current Rules

The Base Expression describes stable capability. The Final Rating is the
roll-facing number after current Lenses. It is not inherently a speed, a
distance, or an Effect count.

A successful unopposed Expression generates one baseline Effect plus one per
complete ten points of successful margin. Opposed success uses net margin.
The amount, form, target, and application time determine the actual Effect.
There is no universal conversion of each Effect into one meter, one second,
or a speed increment.

Treating E/20 as speed was an explicit experimental candidate, not a prohibited
use of the Rating. Its unsuccessful lower-end calibration does not establish
that capability-derived automatic output is inherently invalid. Likewise,
using Effects instead would not supply a missing distance unit by itself.

## Numerical Check of Existing Effect Handling

These are stipulated FINAL Ratings, with no new Difficulty assumption. Use a
fixed ordinary roll of 10 solely to show arithmetic. It is neither an average
roll nor a prediction of likely performance. No special-result continuation is
involved. These rows are not recalculated character builds after Difficulty.

| Final Rating | Roll | Successful margin | Effects |
| --- | --- | --- | --- |
| 16 | 10 | 6 | 1 |
| 37 | 10 | 27 | 3 |
| 99 | 10 | 89 | 9 |
| 320 | 10 | 310 | 32 |

With the existing two-action division applied to these pre-division inputs,
the resulting Ratings are 8, 18, 49, and 160. Against the same roll, outcomes
are failure, one Effect, four Effects, and sixteen Effects respectively.
This shows how action division already affects uncertain movement resolution.
It does not establish the distance of either successful or failed travel.

Even at Rating 320, ordinary successful rolls 2 through 98 produce 23 through
32 Effects, not one fixed speed. Natural special results have their own rules
and are not ceilings on ordinary capability. Do not use a percentile roll to
simulate a runner's speed every turn solely to generate these quantities.

## What the Check Does Not Solve

Automatic means the intended outcome is not in doubt; it does not mean every
Character has equal capability or that training is irrelevant. But the current
rules do not assign an automatic margin or fixed Effect count to all routine
movement. Treating no roll as roll zero, selecting a standard substitute roll,
or awarding an assumed number of Effects would be additional design choices.

Scale supplies the frame, not a currently specified universal meters-per-Effect
table. Invoking Scale does not fill that missing table. The earlier fixed ground
reference is explicitly set aside in this discussion and is not silently
reinstated as the solution.

The equal-travel-ratio issue in a direct proportional curve remains. Dividing
every Rating by a new constant cannot change the relative spread. No second
offset, compensating divisor, or protected minimum is proposed here.

## Decision Boundary

Keep the one-action choice in view: ordinary movement alongside another action,
or doubled TOTAL movement when dedicating that action. This check does not
adopt the choice, duration, or a numerical allowance.

The next substantive distinction is whether movement resolution confirms a
declared amount of travel, or generates an amount of travel through Effects.
The former needs an established capability and challenge reference. The latter
needs an Effect-to-travel meaning and an Automatic-output procedure. Existing
rules permit ordinary and uncertain movement but do not decide this entire
output relationship. A hybrid is possible, but is not introduced as a patch.

Recommend defining the job of movement Effects before another numerical curve.
Do not claim that this alone restores a complete movement system. Preserve
training's contribution, ordinary Automatic outcomes, and existing action
division rather than bypassing any of them to force a chosen maximum speed.

Verification: calculated four ordinary Effect outcomes and their four divided
counterparts, plus the two ordinary-success Effect endpoints at Rating 320.
This is a rules interpretation and arithmetic check, not a movement playtest.
