# Defensive Surplus: Short Exchange With Conditions

Date: 2026-09-10
Status: User-approved test lane, not adoption of independent opposed resolution
or automatic retaliation.

## Objective

Show how fictionally supported defensive-surplus Conditions change subsequent
Expressions and pacing. Compare the same short sequence without surplus
Conditions, with them, with matching armor mitigation, and with an active
recovery choice. No statistical claim about average encounter duration follows.

## Scenario and Explicit Test Rulings

Two equally rated sword fighters, A and B, contest close melee on uneven but
usable footing. A acts before B. Both have the means and training for forceful
blade deflections that can redirect an extended opponent's weight. The declared
defensive actions support destabilization; this is not an automatic property
of every Block, Dodge or successful defensive roll.

- Unimpaired attack and defense Ratings are 80 for both. These are final
  pre-Condition fixtures, not newly built starting characters or Rank caps.
- Each has Physical Capacity 10, starting at Load zero.
- One normal action per round; valid open defensive reactions remain available.
- The independent-output candidate supplies one Effect on success, plus complete
  ten-point Margin bands. Subtract successful defensive output from offense.
- In this scenario, qualifying defensive surplus imposes matching Staggered
  levels on the attacker through the same blade/weight interaction. No separate
  attack is granted. Successful offensive remainder produces Wounded levels.
- Both Conditions contribute to Physical Load. Apply the existing Function
  Bands immediately: 0-2 full, 3-5 75%, 6-7 50%, 8-9 25%, 10+ functional loss.
- Do not add the same Staggered or Wounded levels again as numerical Dissonance.
- Continued pressure maintains the stagger until countered; mere passage to
  the next round does not remove it. New destabilizing exchanges can add levels.
  This is a scenario ruling, not a universal duration for a Staggered catalogue.
- Regaining footing is feasible as a dedicated action here. A's unimpaired
  matching Recovery Rating is also 80, with current Function Band applied.
  The recovery removes matching Staggered levels, not Wounded. Existing recovery
  doctrine permits context-dependent action duration and typed removal; no
  universal combat healing is introduced.
- Baseline no mitigation. A separate sensitivity case gives both fighters one
  level of matching Wounded mitigation; it does not mitigate Staggered.
- No 01/99/00, paid rerolls, HOLD/HOLT, accepted consequences, retreat, additional
  actions, or new movement distances enter this bounded sequence.

All attack and defense attempts in the traced sequence succeed individually.
The test therefore isolates Condition feedback rather than failure reflection.

## Fixed Roll Schedule

| Round | Action | Acting roll | Opposing defense roll |
| --- | --- | ---: | ---: |
| 1 | A attacks B | 50 | 20 |
| 1 | B attacks A | 40 | 40 |
| 2 | A attacks B, or recovers footing in the alternative | 40 | 30 if attacked |
| 2 | B attacks A | 50 | 20 |

These are deliberately selected illustrative rolls showing a strong opening
defense. They are not sampled encounters or evidence of typical duration.
The recovery alternative spends A's round-two action instead of attacking;
it does not reroll an attack after seeing its result. B's unused defense roll
on that action is not banked or reused.

## Continue Attacking: Surplus Conditions Enabled

| Step | Ratings and Effects | Immediate outcome | A's Load / Function |
| --- | --- | --- | --- |
| A attacks | A 80, roll 50: 4; B 80, roll 20: 7 | B's deflection imposes Staggered 3 on A | 3 / 75% |
| B attacks | B 80, roll 40: 5; A 60, roll 40: 3 | Two offensive Effects impose Wounded 2 on A | 5 / 75% |
| A attacks again | A 60, roll 40: 3; B 80, roll 30: 6 | Further destabilization adds Staggered 3 | 8 / 25% |
| B attacks | B 80, roll 50: 4; A 20, roll 20: 1 | Three offensive Effects add Wounded 3 | 11 / functional loss |

A ends at Staggered 6 plus Wounded 5. B has no Load. The sequence stops at
affected functional loss, not automatic death, unconsciousness or permanent
incapacity. Named Conditions and the actual fiction govern what happens next.
Crossing Capacity 10 is the relevant result; eleven is not a new Capacity size.

## Same Rolls Without Surplus Conditions

The successful outputs are 4 versus 7, 5 versus 5, 5 versus 6, and 4 versus 7.
No offensive remainder gets through. Both end at Load zero after two rounds.

Thus one defensive Condition in the candidate creates the difference between
several cancelled exchanges and rapidly worsening performance. This control
does not prove that all fights without surplus are stalemates.

## Recovery Choice

After round one A has Staggered 3 and Wounded 2, total Load 5.

1. A spends the round-two action recovering footing. Current Rating 60, roll
   40 gives three matching recovery Effects. Staggered 3 is removed.
2. Wounded 2 remains. Total Load becomes 2, restoring the full Function Band.
3. B attacks with Rating 80, roll 50: four Effects.
4. A defends with restored Rating 80, roll 20: seven Effects.
5. A's qualifying deflection now imposes Staggered 3 on B.

End of round two: A has Load 2 and full Function; B has Load 3 and 75% Function.
The recovery turn changes the outcome without another action, special counter
roll, free wound healing, or reflection of the incoming attack. It is not
guaranteed: the test supplied a successful recovery roll and feasible method.

## Matching Armor Sensitivity

With one level of Wounded mitigation, keeping the all-attack sequence:

- A's first Staggered 3 is unchanged.
- The first two offensive Effects become one Wounded level: Load 4.
- Further Staggered 3 brings A to Load 7 and 50% Function.
- The final attack leaves one offensive Effect, which armor mitigates.

A ends with Staggered 6 plus Wounded 1, total Load 7; B remains at zero.
This shows why a lower wound total can preserve defense and avoid subsequent
harm, while armor that protects only against wounds does not erase lost footing.

## Summary

| Case | A after two rounds | B after two rounds |
| --- | --- | --- |
| No surplus Conditions | Load 0; full Function | Load 0; full Function |
| Surplus Conditions, continued attacks | Load 11; functional loss | Load 0; full Function |
| Same, Wounded mitigation 1 | Load 7; 50% Function | Load 0; full Function |
| Surplus Conditions, A recovers footing | Load 2; full Function | Load 3; 75% Function |

All four traces and nine outcome assertions passed in the companion PowerShell
script. The main sequence spans two existing three-second rounds, but this is
not a prediction that typical encounters last six seconds.

## Assessment

The candidate delivers the proposed turn of advantage: good defense can change
the next exchange, not merely stop an attack. It also substantially accelerates
Condition feedback. Persisting in the same attack while destabilized can be
decisively punished. Existing typed recovery provides a meaningful alternative
when the fiction permits it; matching mitigation also changes the outcome.

The result depends on a strong explicit assumption: the defensive Expression
really can impose persistent physical destabilization at the resolved severity.
Do not generalize this into every defense imposing full surplus as Load. A
momentary opening, a distant dodge, or a defense without leverage over its
opponent may support a different result or none beyond stopping the attack.

Recommendation: this supports continued use of scope-limited surplus Conditions
as a serious candidate, not automatic retaliation. Adoption is a design choice
about how much pressure defense should exert, not a claim that the added output
has no cost. The user has approved testing, not the final opposed model.
