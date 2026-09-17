# One Versus Two Ordinary Actions: Movement and Attack Tests

Status: Comparison only. No rule adoption.
Date: 2026-09-09.

## Authority and Assumptions

Requested: run both tests following the tactical peer comparison. Compare
movement and attack-side output under the previous and proposed action budgets.
Keep the six-unit movement allowance provisional. One unit is approximately
one meter; neither square nor hex geometry is mandated.

Previous fixture: one ordinary action with six units accompanying movement,
or twelve units when the action is exchanged for further movement. Two attacks
are possible through the existing candidate divisor, each at half Rating,
sharing the six-unit accompanying allowance.

Proposed fixture: two ordinary action slots, each allowing move plus attack or
move plus move. Treat both ordinary attacks as full-strength FOR THIS TEST,
not as an adopted interpretation. Further actions beyond these two are outside
the test. Do not silently carry the old divisor into the new ordinary slots.

Use clear routes, adequate permitted movement, unchanged targets and full
function. Exclude pushes, HOLT speed, preparation and paid spending. Push
Difficulty remains disputed. Three- and four-second durations are candidates.

The baseline has no adopted final opposed-roll formula. Attack-side execution
is therefore isolated from defense, mitigation, wounds and incapacitation.
Ratings below are controlled final inputs before an action divisor, not a new
combat Difficulty or claims about particular character builds.

## Test 1: Travel and Positioning

| Model | Attack opportunities | Movement portions | Total units |
| --- | --- | --- | --- |
| Previous | 1 | 1 | 6 |
| Previous | 0 | 2 | 12 |
| Proposed | 2 | 2 | 12 |
| Proposed | 1 | 3 | 18 |
| Proposed | 0 | 4 | 24 |

Total travel is not automatically approach distance before every attack.
For this sequential probe, each slot's movement remains paired with that slot.
Measure distance to a legal melee engagement position, not to a target center.
Assume the stationary target remains available and no interruption changes play.

| Initial approach distance | Previous melee opportunities | Proposed melee opportunities |
| --- | --- | --- |
| 6 | 1 ordinary; alternatively 2 divided | 2 full under test assumption |
| 12 | Reach, no attack | 1 |
| 18 | Not reached | 1 |
| 24 | Not reached | Reach, no attack |
| 30 | Not reached | Not reached |

At twelve units, move six plus attack cannot deliver the first melee attack.
Instead, spend the first slot moving up to twelve, then attack in the second.
At eighteen, add the second slot's accompanying movement before that attack.
Ranged attacks can use the twelve-unit/two-attack allocation when both firing
positions have valid range and line of sight. Likewise, moving between nearby
targets can use both attacks if the actual sequence permits it.

If movement can instead be pooled ahead of both attacks, the closing result
changes. This record does not adopt such pooling or settle within-turn timing.

The previous all-movement twelve units imply 4 units/second over three seconds
or 3 over four. Proposed twenty-four units imply 8 or 6 respectively. These are
arithmetic translations, not physiological validation or adopted durations.

Finding: the proposal preserves a distance-versus-attack tradeoff. Relative to
the previous fixture, it doubles unpushed total travel and triples maximum
approach distance while preserving one attack. It does not erase positioning.

## Test 2: Attack-Side Execution

Enumerate initial faces 01-00 at Ratings 40, 80, 120 and 160. Follow the existing
executable movement-test convention: a roll equal to Rating succeeds. Older
baseline prose says 'under'; this comparison does not silently resolve that
wording difference. Special 01 succeeds at every tested positive Rating;
natural 99 and 00 fail. Continuation Effect magnitudes are not averaged.

For two attempts enumerate all 10,000 initial-roll pairs. Hold Ratings constant
to isolate the action budget: no first-result change, interrupted second action,
target defeat, changing Function Band, or adaptive spending is modeled.

| Input Rating | One full: expected successful Expressions | Two divided | Two full |
| --- | --- | --- | --- |
| 40 | 0.40 | 0.40 | 0.80 |
| 80 | 0.80 | 0.80 | 1.60 |
| 120 | 0.98 | 1.20 | 1.96 |
| 160 | 0.98 | 1.60 | 1.96 |

At Rating80, chance of at least one successful execution is 80% for one full
attempt, 64% for two divided attempts and 96% for two full attempts. Chance of
both succeeding is 16% divided or 64% full. These are NOT defended-hit chances.

An ordinary fixed-roll margin probe, using roll30 on each attempt:

| Input Rating | One full: generated Effects | Two divided: total Effects | Two full: total Effects |
| --- | --- | --- | --- |
| 40 | 2 | 0 | 4 |
| 80 | 6 | 4 | 12 |
| 120 | 10 | 8 | 20 |
| 160 | 14 | 12 | 28 |

This table illustrates ordinary unopposed margin generation, not average
Effects, one combined attack, net opposed Effects or delivered damage. Each
attempt resolves separately. Under identical circumstances, adding an identical
full-strength attempt doubles expected attack-side successful executions and
generated output, but cannot establish a doubled final wound rate.

## Assessment and Next Decision

Both movement budgets are coherent candidates with different tactical reach.
Two full-strength ordinary actions are a substantial change to the entire
action economy, not merely a movement convenience. More attack rolls also
create more opportunities for natural special results and defense resolution.
If both sides receive the change, equal action counts preserve symmetry but
do not establish unchanged lethality, encounter length or table workload.

Recommendation: do not reduce distances or add push Difficulty to compensate
for the second attack. First settle whether two full-strength independent
actions are the desired universal baseline. If yes, retain this as the test
fixture for subsequent combat/Capacity work; if no, keep the one-action fixture.
Attack ordering, further-action division and final opposition remain explicit
open boundaries. No main rule or previously approved file was changed.

Reproduction: run `lens-one-versus-two-action-budget-test-v0.1.ps1` in this folder.
