# Movement Positioning With Disputed D1 Control

Status: Positional comparison completed; D1 remains explicitly disputed and
unadopted as the push default. Distance model remains provisional.
Date: 2026-09-09.

## Scope and Terminology

The user selected units rather than squares, prefers hexes, and accepts one
meter per map unit in this discussion. Do not require square geometry. Test
whether high movement makes positioning irrelevant before changing distances.
The user explicitly permitted this comparison without accepting D1.

Sources: `lens-d1-movement-push-test-v0.1.md`, its executable arithmetic,
`lens-six-meter-base-one-meter-effect-evaluation-v0.1.md`, and current terminology
for multiple actions, action passes, and ordinary movement.

Use six units ordinary movement, one extra unit per movement Effect, a single
push or a push plus an attack, full physical function, and no other modifiers.
The working one-meter output is not multiplied by a second sprint bonus.
No HOLT, paid point, preparation, invented combat Difficulty, or new movement
limit is added. D1 is x0.98 as a comparison control, not a finding of suitability.

Distances below are route lengths to the required destination, not distances
to a target center requiring an unadopted reach/footprint rule. A melee fixture
measures to a legal engagement position. Clear routes and stationary destinations
isolate reach. No diagonal or corner movement rule is created.

The actor declares a push and the action count, not an Effect purchase or a
required distance. The destination thresholds measure how often the rolled
allowance is enough to accomplish a tactical objective. They do not increase
the push Difficulty for longer travel.

## Procedure

Recompute the same raw builds before final-only flooring. For N declared actions:

```text
Push Rating = floor(raw capability x 0.98 / N)
Successful push total movement = 6 + generated Effects
```

Within six units, ordinary travel suffices without a push or an action division
for movement. For farther points, enumerate ordinary initial faces 02-98 and
apply the existing initial01 continuation. Natural99 and00 do not reach the
farther objective through a successful push. A failed push does not by itself
erase ordinary movement; actual consequences still apply.

Exact reach probabilities include repeated01 chains. For a destination d > 6,
required Effects = d - 6. Success reaches it when adjusted roll <= Rating -
10 x (required Effects - 1). Sum terminal continuation faces by prefix probability;
once every remaining continuation succeeds, add the entire remaining prefix
mass. This accounts for the infinite tail without an artificial die cap.

These are probabilities of obtaining enough movement to a fixed position, not
probabilities of landing an attack, avoiding enemy fire, or winning an encounter.
Magnitude and Access still constrain usable generated travel. No new ceiling
is invented to eliminate the special results.

## Case 1: Reaching Cover

Stipulate safe destinations six or twelve units along a clear route. A destination
within six units needs only ordinary movement and leaves the normal action free.
Whether arriving grants cover depends on actual geometry, not the movement roll.

| Build | Single-push chance to reach 12 units | Reach 12 units while reserving an attack as a second action |
| --- | --- | --- |
| Mobility/Movement/Traverse/Field 5; no narrow training | 0.65% | 0.57% |
| All six entries at 5 | 0.86% | 0.67% |
| All six entries at 7 | 47% | 0.97% |
| All six entries at 8 | 98% | 24% |
| All six entries at 10 | 98% | 98% |

The sub-one-percent entries in this table require natural01; ordinary successful
pushes do not generate enough movement. The low-end concern is therefore more
specific than a low generic success chance. A fully Rank-5 movement stack cannot
ordinarily double six units, even when dedicating its action to the push.

This is not automatically a defect if pushing means exceptional extra effort
and the Profile regards six units as ample routine movement. It is a serious
mismatch if the intended action is something such a Character should commonly
accomplish. That remains the disputed push benchmark, not a settled fact.

## Case 2: Closing to Attack

Measure twenty or thirty units to a legal engagement position occupied by a
stationary opponent. Compare dedicating the action to relocation with declaring
both a push and an attack. The latter divides both actions' respective Ratings.
The attack uses its own circumstances and opposition, not a copied D1 penalty.

| Build and intent | Reach 20 units | Reach 30 units |
| --- | --- | --- |
| All-8 build, push only | 18% | 0.17% |
| All-8 build, push plus attack | 0.43% | 0.0042% |
| All-10 build, push only | 98% | 83% |
| All-10 build, push plus attack | 26% | 0.25% |

Thus the maximum build can cross much of an open scene when committing its
action, but does not usually cross that same scene and attack in the turn.
Reaching the position under push-only does not grant a free attack. Its benefit
can still be decisive when relocation itself is the objective.

For the all-10 build's two-action push, Rating156 produces enough movement to
reach twenty units on ordinary rolls02-26 plus all initial01 chains: 26% total.
Thirty units requires an exceptional continuation: 0.25%. These calculations
do not treat the listed ordinary movement range as guaranteed travel.

Existing action passes can make the real opportunity less reliable than the
stationary fixture. The opponent can have its own action between the push and
later attack, change position, or change the relevant Access. Reassess before
the later action. Do not grant an extra interrupting attack, cancel the opponent's
turn merely because someone approached, or assume arrival means a landed hit.

## Case 3: Pursuit and Withdrawal

Holding starting positions and outputs explicit is sufficient to demonstrate
the positional effect without creating a chase subsystem or an extra contest.
Consider two actual movement outputs of 11 units and 33 units, both possible
ordinary results for the all-7 and all-10 single pushes. For illustration these
come from the same ordinary roll50: Ratings97 and313 generate five and
twenty-seven Effects respectively, with the six-unit base added once.

In open travel in the same direction, the faster result closes a gap by 22 units
over the paired movement interval. A thirty-unit starting gap becomes eight.
If the same distances recur with the slower traveler moving first, the faster
traveler can reach their position in the next interval. Equal eleven-unit travel
preserves the gap. These are stipulated outcomes, not expected values or a new
opposed-race protocol. If a pursuit uses an opposed Expression, use that existing
resolution rather than additionally imposing these independent rolls.

Reaching another Character's position is not automatically catching, restraining,
or attacking them. Those require the appropriate activity and action accounting.
Routes, obstacles, held responses, and cover still matter when actually present;
none is invented to penalize the fast Character or conceal long-distance reach.

## Verdict

The high-end distance has tactical consequences, but the tested cases do not
show that it makes distance irrelevant. Six, twelve, twenty, and thirty units
produce meaningfully different choices. The one-action versus two-action
comparison separates rapid relocation from reaching and attacking.

Do not reduce the one-unit Effect merely because the fully developed Character
can cross twenty or thirty units. This is a local finding, not proof that every
encounter size, objective, ranged weapon, or pursuit is balanced. These are
capability slices, not complete same-budget combatants.

The stronger concern in these fixtures is the lower-to-middle push benchmark:
many trained builds struggle to gain enough extra movement to reach the second
cover position. This does not validate D1; it strengthens the need to resolve
the user's objection before accepting the whole movement model. No other
Difficulty is selected or added to bring a desired result into line.

Recommend leaving the distance unit unchanged for now and returning to the
meaning and numerical application of push Difficulty. Do not adopt D1 through
approval of this positional comparison or continue resizing maps to defend it.

Repeated-push action accounting is still unresolved. No per-action time interval,
universal action maximum, creature footprint, or turn duration was adopted here.

## Verification

Companion script evaluates forty build/action/distance cases, enumerates ordinary
faces, verifies the reach threshold independently, includes complete initial01
tail probabilities, and checks the maximum-build twenty- and thirty-unit fixtures.
The tests are deterministic tactical examples, not live-play encounter validation.
No baseline or terminology rule files were changed.
