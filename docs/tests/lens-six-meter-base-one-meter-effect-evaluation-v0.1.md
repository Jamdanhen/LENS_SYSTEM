# Six-Meter Base and One-Meter Effects

Status: Evaluated working proposal. One-meter map squares selected; six-meter
base and D1 push Difficulty remain provisional. No turn duration adopted.
Date: 2026-09-09.

## Scope and Controls

Evaluate the current proposal following the user's choice of one meter per map
square. Use six meters of ordinary movement and one additional meter for each
successful movement Effect. These are activity outputs, not conversions of the
full Rating directly into speed. Routine feasible ordinary movement needs no
roll. No desired number of extra meters is declared in advance of the push.

Reuse `lens-d1-movement-push-test-v0.1.ps1` with the same eight builds and one-
or two-action counts. The prior ten-foot-per-Effect outputs are divided by ten
to recover Effect counts, then each Effect is assigned one meter and six meters
is added once. This is a new output-unit assumption, not a feet-to-meters
conversion. D1 is only the test control. Neutral ordinary Scale, equipment,
context, and full physical function are unchanged. No HOLT or new modifiers.

Ordinary successful initial rolls 02-98 supply the ranges below. Natural01
continuations can exceed them; 99 and00 fail. Overall success probabilities
retain those special-result rules. Refer to the source test for exact success
conventions and full-precision Rating calculation.

## Total Movement

Rank order: Mobility / Movement / Traverse / Field / Specialty / Precision.
Each meter equals one square. The base is available once per turn, not once
per action. Ranges are TOTAL distance on an ordinary successful push, not extra
distance and not distance guaranteed every turn.

| Ranks | Push success | Push alone: total squares | Push + attack success | Push + attack: total squares |
| --- | --- | --- | --- | --- |
| 5/0/0/0/0/0 | 4% | 7 | 2% | 7 |
| 5/5/5/5/0/0 | 16% | 7-8 | 8% | 7 |
| 5/5/5/5/5/5 | 37% | 7-10 | 18% | 7-8 |
| 7/7/7/7/7/7 | 97% | 7-16 | 48% | 7-11 |
| 8/8/8/8/8/8 | 98% | 12-21 | 74% | 7-14 |
| 9/9/9/9/9/9 | 98% | 19-28 | 98% | 8-17 |
| 10/10/10/10/10/5 | 98% | 20-30 | 98% | 8-18 |
| 10/10/10/10/10/10 | 98% | 28-38 | 98% | 12-22 |

On an ordinary failed push, no extra distance is gained; otherwise feasible
ordinary travel remains available. Actual interruptions, Access changes, and
fictionally justified complications can still affect what movement is completed.
The attack receives its own action divisor and opposition, not the movement
Rating or an invented copy of the push Difficulty.

## What Works

The untrained fixture no longer barely moves. Its ordinary travel is six squares,
not a small fraction obtained by dividing its Rating. Additional training affects
the push through the existing success and Effect mechanisms. Characters with
equal base movement can differ substantially when attempting extra movement.

The tested output uses whole squares and preserves the baseline Effect for a
successful push. There is no square root, compensating divisor, fixed extra
allowance per declared action, or separate movement roll after Effect generation.
It does not also double the result under the superseded fixed-sprint proposal.

The one-meter increment avoids the hundreds of feet produced by the earlier
ten-foot fixture. Successful peak ordinary output is 28-38 meters instead of
240-340 feet. Both tables use the same underlying Ratings and Effects. This is
evidence about the output-unit choice, not evidence that D1 itself changed.

The two-action comparison shows both kinds of pressure: at low or middle Ratings,
push success becomes less frequent; at high Ratings, ordinary success may remain
98% while the additional distance falls substantially.

## Remaining Judgment

A broad Rank-5 build has only a 16% chance to add one or two squares when spending
its action on a push. The untrained fixture has 4% for one square. These choices
may matter when one square determines reaching safety, but have low ordinary
payoff when another useful action is available. The current grid makes that
payoff easier to understand; it does not increase its probability.

D1 multiplies the Expression by 0.98, so the low probabilities are principally
from the capability stack, not a substantial Difficulty penalty. This remains
the unresolved fiction question: is pushing here intended as an uncertain
extra effort, or as something most characters should routinely accomplish?
Do not conceal that distinction by declaring every push automatically D1.

The six-square allowance stays subject to relevant capability and circumstance
Lenses; it is not immunity to lost function, obstruction, or Closed Access.
Exact translations of those Lenses and fractional baseline adjustments have
not been settled by a neutral-build test. One-meter Effects alone do not prove
that every modified base will always land on a whole square.

Repeated independent pushes remain a separate action-accounting check. This
evaluation does not grant a new time interval or another base allowance for
each push, impose a new action cap, or claim that all repeated-action cases
have been solved by the push-plus-attack comparison.

## Timing Comparison

No duration is required to use the table in squares per turn. For a physical
benchmark only, compare three- and four-second intervals:

| Output | Three seconds | Four seconds |
| --- | --- | --- |
| Ordinary 6 meters | 2 m/s | 1.5 m/s |
| All-5 ordinary successful push: 7-10 meters | 2.33-3.33 m/s | 1.75-2.5 m/s |
| All-10 ordinary successful push: 28-38 meters | 9.33-12.67 m/s | 7-9.5 m/s |

Three seconds yields the faster sprint benchmark; four seconds is slower for
every build. Neither proves a realistic universal pace, acceleration model,
or correct duration for attacks and other activities. The lower mode need not
be named as a literal gait. Do not force all action timing to fit one runner.

Special example: the all-10 push has Rating313. Initial01 then06 generates
41 Effects, hence 47 meters total under this proposal. That is about 15.67 m/s
over three seconds, but longer special chains can exceed it. This is not an
adopted ceiling, expected performance, or permission to ignore movement scope.

## Recommendation

Prefer this six-meter plus one-meter-per-Effect arrangement to the discarded
Rating-to-speed conversions for continued playtesting. It gives clear ordinary
travel and uses the existing roll and Effect structure for uncertain extra
travel. Recommend retaining the output arrangement as working, while leaving
D1 and turn duration explicitly provisional. This is a recommendation awaiting
user judgment, not a core-rule adoption by this report.

The biggest open issue is the reliability and reward of the push at lower
investment, followed by repeated-push accounting. No new floor, shifted die,
automatic success bonus, or difficulty surcharge is proposed to mask it.

## Verification

Reran the source script (eight builds, sixteen action cases, 1,552 ordinary
faces), transformed its Effect ranges into one-meter increments, and checked
totals and speed equivalents for both candidate intervals. This is a deterministic
mechanical evaluation, not a complete table playtest or physiological validation.
No baseline or terminology rule was modified.
