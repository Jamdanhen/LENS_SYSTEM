# Two-Action Combat Pace and Capacity Pressure

Status: Experiment closed; user retained one ordinary action per round.
Date: 2026-09-09.

## User Disposition

After reviewing the comparison, the user rejected alternating two ordinary
actions as unnecessary repackaging and directed a return to one ordinary action
per round for simplicity. This supersedes the recommendation below, which is
preserved as test history rather than a pending proposal.

Retain accompanying ordinary movement and the existing candidate procedure for
additional actions at reduced capability. Do not infer a ban on additional
actions, adoption of consecutive double turns, or new action-pass requirements.
The six-unit accompanying and twelve-unit full-movement fixtures remain
provisional; this decision does not settle their distances, push Difficulty,
push accounting, or round duration. Capacity is unchanged.

## Scope and Authority

The user requested testing the proposed two full-strength ordinary actions,
following the one-versus-two movement and attack-budget comparison. This gives
authority to test, not to amend the baseline. Read local AGENTS, inherited
continuation guidance, the current Capacity rules, and the previous test first.

Current ordinary Capacity is ten Condition Levels. Function Bands are 100% at
Load0-2, 75% at3-5, 50% at6-7, 25% at8-9, and affected function loss at10+.
Full-strength means no multiple-action divisor for the two ordinary actions
under test. It does not freeze Ratings or cancel Function Bands.

The opposed-roll formula is still unresolved. This test therefore feeds in
ALREADY RESOLVED net Load of 1, 2, 3 or 5 per landed hit, after defense and
mitigation. These are conditional pressure scenarios, not a claim that every
attack lands or deals fixed damage. No new hit, armor or damage formula is
created. Output probability and average encounter length remain unmeasured.

For the conditional duel, both combatants start within legal melee engagement,
remain there, and carry their attacks through Physical Attributes. A acts
first. No recovery, escape, Accepted Consequence, interruption, paid spending
or changed Access intervenes. Stop on first physical function loss, not death.
Other Capacity loci and any permitted nonphysical routes are not erased.

## Test 1: Same Net Hits, Different Round Budgets

| Net Load per landed hit | Hits to reach Capacity10 | One attack per round | Two attacks per round |
| --- | --- | --- | --- |
| 1 | 10 | 10 rounds | 5 rounds |
| 2 | 5 | 5 rounds | 3 rounds |
| 3 | 4 | 4 rounds | 2 rounds |
| 5 | 2 | 2 rounds | 1 round |

These round counts require the listed hits to be delivered on successive
available attack opportunities. Misses, defense, mitigation, movement, changing
Ratings or recovery can change actual pace. The test does not average them away.

No increase to Capacity is necessary merely to execute the new action budget.
Whether the compressed pressure is desirable is a design judgment, not proven
balance. Do not automatically double Capacity to preserve old round counts.

## Test 2: Function Changes Between Actions

Use the existing action-pass candidate A1, B1, A2, B2. Both begin with an
illustrative uninjured Rating80. Stipulate three net physical Load per hit:

| Event | Actor's current Rating | Resulting target Load | Target Function Band |
| --- | --- | --- | --- |
| A1 | 80 | B3 | 75% |
| B1 | 60 | A3 | 75% |
| A2 | 60 | B6 | 50% |
| B2 | 40 | A6 | 50% |

The delivered three Load is a controlled input, not computed from these
Ratings. Their changing values show where actual resolution must re-evaluate
the attack and any applicable defensive Expression. The two actions are not
both permanently Rating80 just because the character began the round there.

For comparison, the one-action round ends after A1 and B1: both have Load3
and 75% function. The two-action round includes another exchange and ends at
Load6 and 50% function. This is greater pressure per round, not a second
Dissonance charge for the same Conditions.

## Test 3: Passes Versus Consecutive Actions

Compare one action A,B; two passes A,B,A,B; and two consecutive actions A,A,B,B.
Every scheduled attack in this conditional trace delivers the specified net
Load while its actor and target retain the needed physical function.

| Net Load per hit | One-action rounds | Two-pass rounds | Two-consecutive rounds | B's attacks: one / passes / consecutive |
| --- | --- | --- | --- | --- |
| 1 | 10 | 5 | 5 | 9 / 9 / 8 |
| 2 | 5 | 3 | 3 | 4 / 4 / 4 |
| 3 | 4 | 2 | 2 | 3 / 3 / 2 |
| 5 | 2 | 1 | 1 | 1 / 1 / 0 |

The five-Load case shows the timing difference particularly clearly:

```text
Passes:
A hits B: B reaches5, 75% function.
B acts at current function and hits A: A reaches5.
A hits B again: B reaches10; B's later physical attack cannot proceed.

Consecutive:
A hits B: B reaches5, 75% function.
A hits B again: B reaches10 before B's own ordinary action.
```

B retains existing open defensive reactions against BOTH attacks in either
schedule. The consecutive case is not defenselessness; its risk is losing the
chance to take an ordinary action between successful hits. A single sufficiently
strong hit can prevent that chance under either schedule.

Passes preserve the same alternating sequence as one-action rounds in this
isolated duel, compressing two exchanges into one round. They do not guarantee
equivalent outcomes when there are round-timed effects, additional participants,
movement, recovery choices, Delay or other changing circumstances.

## Test 4: Table Workload and Mixed Turns

With passes and fixed delivered outcomes, total completed attack resolutions
are identical to the one-action case: 19, 9, 7 or 3 for net Load1,2,3 or5.
Fewer rounds do not prove faster real-time play. Passes revisit initiative,
and actual attacks still need ordinary defense and Effect handling.

The prior movement fixture remains applicable without pushes:

```text
Two attack slots:     up to12 units total travel.
One attack slot:      up to18 units total travel.
No attack slots:      up to24 units total travel.
```

These are complete-allocation totals, not guaranteed approach or pursuit
distances. With passes, opponents can move or affect Access before the next
slot. Spending one slot entirely on movement leaves only one attack, so the
two-hit-in-one-round pressure case does not apply to that allocation. Spending
an action on treatment likewise does not automatically erase Wounded levels;
the normal recovery and permission rules still govern its effect.

No movement-based fix, new push Difficulty, automatic recovery, universal
reaction charge, or Capacity increase is introduced.

## Recommendation and Remaining Decision

Retain two ordinary actions as a playtest candidate, using the EXISTING
action-pass candidate for the next fixture. Assess function at execution and
retain open defensive reactions. Do not adopt consecutive double turns by
implication. This preserves an ordinary response opportunity between two hits
when function, Access and the actual circumstances permit it.

The test supports running that candidate; it does not certify defended combat
balance or average encounter length. A full probabilistic combat test needs
an agreed opposed-resolution procedure, which this lane does not supply.
Push output/Difficulty, further actions beyond the two ordinary slots, and
round duration also remain unresolved.

Reproduction: `lens-two-action-capacity-pressure-test-v0.1.ps1`. Assertions
cover four Load packets, twelve conditional traces, ten Function Band boundary
cases, round compression, current Ratings and the five-Load initiative case.
