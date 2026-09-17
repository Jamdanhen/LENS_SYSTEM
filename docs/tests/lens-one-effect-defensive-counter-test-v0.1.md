# One-Effect Defensive Counter Limit

Date: 2026-09-10
Status: Completed test; user subsequently approved the one-Effect counter limit
within the independent-Effects candidate on 2026-09-10. Full-model adoption is
not implied.

## Subsequent Decision

The user explicitly approved at most one defensive-surplus counter-effect per
resolved exchange, preserving full defensive cancellation, ordinary offensive
remainder without this cap, fictional applicability, matching mitigation and
normal action accounting. This is recorded in the independent-Effects candidate
reference. The test and concluding recommendation below preserve the evidence
presented before that approval, not an unresolved counter-limit decision.

## User Rationale

The defender is not the attacker: the benefit is a good counter, not another
full offensive action. Preserve full defensive output when opposing the attack,
but limit the consequence of surplus defense to one net counter-effect.

## Candidate Tested

```text
Offensive remainder = max(0, offensive Effects - defensive Effects)
Counter output = min(1, max(0, defensive Effects - offensive Effects))
```

The counter output is eligible only where the resolved defensive Expression
itself supports a consequence. An unused remainder is not banked, converted
automatically to Resonance, or spent on a new attack. No additional baseline
Effect follows subtraction or the limit.

The limit is per resolved defensive exchange, not a one-level cap on a Condition
or all activity during a round. Existing action accounting still applies to
multiple attacking actions and separate follow-up attacks. The numerical checks
do not grant new defensive opportunities or guarantee contact on a failed attack.

## Test Method

Extended `lens-defensive-surplus-short-exchange-test-v0.1.ps1` while preserving
its original four scenarios and their expected results. Added:

- Four rounds with the one-Effect counter limit.
- The same capped sequence, with A recovering footing instead of attacking in
  round four.
- Four rounds without surplus Conditions as a control.
- 961 offense/defense output pairs from zero through thirty.
- Exceptional 01 defense, uncapped offensive remainder and matching mitigation
  assertions.

The scripted fighters, Conditions and fictional eligibility are unchanged:
equal unimpaired Rating 80, Physical Capacity 10, A before B, one normal action
each, open defenses, qualifying blade deflections causing Staggered and attack
remainders causing Wounded. Load immediately changes subsequent Ratings through
the existing Function Bands. Staggered is not charged again as separate Dissonance.

Rounds three and four repeat the original two-round roll schedule, with all
Ratings recalculated from current Load. This is a deliberately selected trace,
not an estimate of average duration or a random simulation.

## Capped Sequence

| Round | What happens | A Load / Function | B Load / Function |
| --- | --- | --- | --- |
| 1 | A's attack is opposed; B's counter adds Staggered 1. B's attack and A's defense cancel. | 1 / 100% | 0 / 100% |
| 2 | B counters A for another Staggered 1. A counters B for Staggered 1. | 2 / 100% | 1 / 100% |
| 3 | Another counter puts A at Load 3. B's five attack Effects then beat A's reduced three defensive Effects, adding Wounded 2. | 5 / 75% | 1 / 100% |
| 4 | Another counter puts A at Load 6. B's four attack Effects then beat A's reduced three defensive Effects, adding Wounded 1. | 7 / 50% | 1 / 100% |

End: A has Staggered 4 and Wounded 3. B has Staggered 1.

The uncapped version of the same opening caused A to reach Load 11 by the end
of round two. With the cap A is still functioning after round four. The
counter still matters: accumulated positional pressure opens the way for
actual attacks to wound A, rather than the counter directly becoming a large
offensive result.

## Recovery Alternative

After round three A has Staggered 3 plus Wounded 2. In round four:

1. A spends the action recovering footing. Rating 60 and roll 40 produce three
   matching recovery Effects, removing Staggered 3 but leaving Wounded 2.
2. At restored Rating 80, A's defense roll of 20 produces seven Effects against
   B's four offensive Effects.
3. The three surplus permit only one supported counter-effect, adding Staggered
   1 to B's existing level.

End: A has Wounded 2; B has Staggered 2. Both retain full Function, but neither
has had their Condition history erased. Recovery is a meaningful action choice,
not guaranteed success or a mandatory maintenance action after every defense.

## Boundary Results

- Attack 4, defense 7: all four offensive Effects are opposed; at most one
  counter-effect, not three.
- Attack 7, defense 4: three offensive Effects remain. The defensive limit
  does not reduce the committed attack to one.
- Attack 4, exceptional defense 13: all four are opposed; the potential counter
  is still one. Initial 01 does not silently remove the role-based limit.
- Equal successful output: no surplus and no counter.
- Failed defense: no successful output and no counter. Its 00 complication
  does not purchase counter-effects.
- A one-Effect counter subject to one matching mitigation level is prevented;
  the cap is not a guarantee of unavoidable consequence. No equipment
  enhancement or redirection exchange rate is introduced by this check.
- Separate valid exchanges may each permit one counter. Three separate
  attackers receiving one each do not automatically give any one of them three
  Load. A single attacker incurring counters over successive exchanges can
  accumulate pressure under the existing Condition rules.
- A separate riposte or reflected attack is not granted merely by surplus.
  The already-required fiction, Access and Effect conservation still apply.

All original and added outcome assertions passed, as did the 961 output-pair
checks. The number of check pairs is not a count of probabilistic encounters.

## Assessment

The one-Effect limit supports the user's stated distinction between defense
and committed offense. Strong defense retains its protective value, while a
counter creates a bounded setback. In the selected sequence this preserves
back-and-forth pressure and a useful recovery choice without the uncapped
two-round collapse.

A cap does not make every possible one-Effect consequence equally appropriate
or harmless. Actual Condition meaning, affected Access, persistence, matching
mitigation and recovery still matter. The test supports the limited counter as
a working candidate, not automatic retaliation or a universal one-Effect cap
on independently committed offensive actions.

Recommendation: use at most one fictionally supported counter-effect per
defensive exchange if this candidate is selected. Adoption remains the user's
decision; the baseline signed-margin model is unchanged by this test.
