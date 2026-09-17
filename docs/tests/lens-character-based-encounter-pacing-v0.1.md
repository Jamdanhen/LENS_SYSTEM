# Character-Based Encounter Pacing

Date: 2026-09-10

Status: Completed approved test. Existing allocations, resolution, Capacity,
Effect thresholds, and pricing remain unchanged. No new defense pairing,
complication mapping, or equipment placement is adopted.

## Conclusion

The low-output pacing result survives in an actual character route: two
security guides using their broad firearm training at D3 take a median 15
rounds to reach loss of function. It is not representative of their best
attacks. Their exposed signature-revolver encounter takes a median one round
with Field-supported defense, or two with conditionally applicable narrow
defensive expertise as well.

The corrected concern is therefore a wide pacing range, not universally slow
combat. The equal-rating controls hid the actual attack/defense disparity.
Neither the low nor high extreme justifies changing the core engine by itself.
The high extreme describes an unprotected firearm exchange, not every fight;
the low extreme describes repeatedly persisting with a low-output approach,
not mandatory resolution of routine activities.

## Method and Boundaries

The executable reads the unchanged character snapshot from
`lens-low-rating-build-trace-v0.1.results.json`. These are the repriced
shopkeeper, expedition security guide, and medical specialist within the
accepted protected starting reference, not the obsolete unweighted portfolios.

There are 12 matchup/routing fixtures. Each has an attack policy and a
recover-when-it-could-restore-a-Function-Band policy. A third run is an
output-only diagnostic control. Each has 20,000 trials: 720,000 encounters
total. Persistent initiative is balanced, with each actor going first in
half the trials. This isolates initiative advantage; it does not estimate
each character's chance of winning an actual initiative roll. Identical builds
face copies of themselves in mirror matches, without reallocating points.

Fixed assumptions:

- Physical Capacity 10, with the existing Function Bands. Loss of function,
  not automatic death, ends an encounter. A round count includes the final
  partial round. Complete both Expressions before applying consequences.
- One attack or uncertain recovery action per round and open feasible defense.
  No paid spending, preparation, armor mitigation, cover, movement, surrender,
  additional action splits, or extraordinary permissions are supplied.
- Attacks apply their calculated offensive remainder as Wounded. Ranged
  evasion does not automatically counter-harm the attacker. No equipment
  contribution is added after comparison.
- Defense represents moving out of the developing line of attack in time,
  not reacting to a projectile already in flight. Available room and a
  perceptible developing threat are assumed. No free attack is created.
- D3 x0.3528 represents a separately justified shot difficulty. It affects
  shooting, not the opponent's evasion or the shooter's recovery. No distance
  table or universal D3 assignment is introduced.
- The x1.20 firearm modifier is the existing comparison fixture. Holding it
  fixed isolates training differences; it does not price or classify every gun.
- The primary complication fixture retains the previous test's mapping of
  own00 severity to temporary physical disruption, tracked as Staggered.
  Failed firing, evasive, or recovery maneuvers can lose bodily equilibrium
  in this fixture. It is NOT a requirement that every firearm failure produces
  Staggered, nor a generic rule converting all complications into personal Load.
- Recover is a genuinely uncertain attempt to restore physical equilibrium
  after that disruption, using Might x Resilience x Recover with no applicable
  purchased expertise in this specified route. It removes only Staggered, not
  Wounded. Routine recoveries are not being made mandatory rolls. Clinical
  treatment expertise is not automatically spontaneous self-recovery expertise.
- Function Bands apply to all relevant physical Expressions; the same
  Condition is not charged again as contextual Dissonance.
- Ammunition and continued exposure are held available until function loss.
  Especially in the long civilian controls, these are attrition measurements,
  not literal equipment/reloading or tactical decision simulations.

## Separate Ratings

Full decimals are retained until the final roll rating is floored.

| Actor / approach | Attack | Defense | Recovery |
| --- | ---: | ---: | ---: |
| Shopkeeper, firearm | 6.24 | 4.8 | 3.3 |
| Clinician, firearm | 14.28 | 8.4 | 3.3 |
| Guide, signature revolver, no defensive Field | 180.280512 | 15.68 | 6 |
| Guide, signature revolver, defensive Firearms | 180.280512 | 29.792 | 6 |
| Guide, signature revolver, full relevant narrow defense | 180.280512 | 91.16352 | 6 |
| Guide, other handgun, defensive Firearms | 100.15584 | 29.792 | 6 |
| Guide, broad firearm, defensive Firearms | 58.9152 | 29.792 | 6 |
| Guide, broad firearm at D3 | 20.78528256 | 29.792 | 6 |
| Guide, signature revolver at D3 | 63.6029646336 | 29.792 | 6 |

Field-supported defense assumes the guide's Firearms knowledge actually helps
read the weapon use and evade its developing line of fire. Narrow-supported
defense additionally assumes the enemy has the familiar revolver, and that
Handguns and Revolvers expertise genuinely carry that response:

```text
Mobility 8 x Responsiveness 1.4 x Dodge 1.4
x Firearms 1.9 x Handguns 1.7 x Revolvers 1.8
= 91.16352
```

This is an applicability sensitivity, not automatic entitlement to multiply
all shooting expertise into every defense. Conversely, the no-Field control
is not a prohibition on portable expertise. None of these defenses receives
the attack weapon's x1.20 multiplier just because the defender owns a gun.

## Encounter Results

Primary recoverable-Load fixture, attack policy. Recover-policy median and
90th-percentile round counts were the same in all 12 fixtures. These are
simulation estimates, not exact population probabilities.

| Encounter | Median rounds | 90% resolved by | First mover wins |
| --- | ---: | ---: | ---: |
| Guide mirror, signature, no defensive Field | 1 | 2 | 98.38% |
| Guide mirror, signature, defensive Field | 1 | 2 | 97.98% |
| Guide mirror, signature, full applicable narrow defense | 2 | 2 | 86.85% |
| Guide mirror, other handgun | 2 | 4 | 72.00% |
| Guide mirror, broad firearm | 5 | 9 | 56.97% |
| Guide mirror, broad firearm at D3 | 15 | 35 | 51.17% |
| Guide mirror, signature revolver at D3 | 4 | 8 | 58.88% |
| Guide versus shopkeeper | 1 | 2 | 50.45% |
| Guide versus clinician | 1 | 2 | 50.50% |
| Shopkeeper versus clinician | 15 | 43 | 49.92% |
| Shopkeeper mirror | 16 | 48 | 49.75% |
| Clinician mirror | 15 | 41 | 49.80% |

The guide wins 99.45% against the shopkeeper and 99.39% against the clinician
in this fixture. First-mover percentages near 50% in those mismatched fights
do not mean a balanced contest: the guide wins regardless of which actor
usually acts first. In mirror matches, actor A wins approximately half while
the first mover may still have an overwhelming advantage.

An independently enumerated first-shot check finds an 83.87% chance that the
guide's signature attack generates at least 10 uncancelled Effects against
Field-supported defense. With full relevant narrow defense this is 44.20%.
These figures exclude complications as a cause of crossing the threshold.
Continuation-tail probability omitted from the enumeration is below 2e-12.

For a concrete ordinary-roll example:

```text
Attack 180, roll 50: Margin 130, 14 Effects.
Defense 29, roll 50: failure, 0 Effects.
Remainder: 14 Wounded, exceeding Capacity 10 without mitigation.

With the narrow-supported defense of 91 and the same roll 50:
Margin 41, 5 defensive Effects.
Remainder: 9 Wounded. Still functional, at the 25% Function Band.
```

The second example explains the strong first-mover advantage even when the
first shot does not immediately end the fight.

## Low Output and Complication Sensitivity

In the broad-firearm D3 mirror, 86.60% of attacks produce no offensive
remainder under the attack policy. Own00 complication Load is necessary to
cross the terminal threshold in 61.72% of encounters. This reproduces the
earlier concern with an actual character route, not a generic Rating 20 actor.

The output-only control retains all percentile outcomes and complete special
continuations but does not apply complication consequences. It is deliberately
incomplete as a game procedure: an actual jam, lost position, or other external
consequence must be resolved, not ignored. It isolates how much pace comes
from successful offensive Effects alone.

| Encounter | Primary median / p90 | Output-only median / p90 |
| --- | --- | --- |
| Signature, defensive Field | 1 / 2 | 1 / 2 |
| Signature, narrow defense | 2 / 2 | 2 / 2 |
| Broad firearm | 5 / 9 | 5 / 11 |
| Broad firearm at D3 | 15 / 35 | 31 / 58 |
| Shopkeeper versus clinician | 15 / 43 | 46 / 90 |

Thus the high-output result does not depend on catastrophes, while the
low-output result is highly sensitive to their actual fictional consequences.
Ignoring that distinction would misdescribe ordinary pacing in both directions.

## Recovery

The real guide's untrained Recover route is 6, not its shooting rating of 180.
At the first impaired Function Band it rolls at 4. It cannot reliably clear
temporary Load, and never removes the accumulating Wounded in this test.
In the D3 broad-firearm fixture, the recovery policy averages 0.405 recovery
actions per encounter; only 0.95% of those attempts improve the Function Band.
No median pacing improvement results. This tests an untrained, uncertain
recovery route, not the usefulness of well-developed recovery or automatic
fictional restoration. The simple policy is not claimed to be optimal.

## Recommendation and Decision Boundary

Do not increase low-end output or reduce high-end output on the basis of these
exposed attrition fixtures alone. A gun specialist dominating an unprotected
exchange can be intentional. A difficult, low-output approach can require a
different tactic rather than a universal bonus. However, neither observation
establishes that prolonged low-output exchanges are enjoyable or that a 98%
first-mover advantage is appropriate for every Campaign Profile.

The next concrete comparison is existing protective contributions against the
same guide: cover/preparation expressed through justified existing Lenses and
matching mitigation at already-proposed values. Keep the build fixed. That
tests the missing protection before changing attack, defense, Capacity, or the
10-point Effect threshold. It requires selecting the protective test fixtures;
no new valuation or automatic preparation award has been adopted here.

## Verification

- All 720,000 encounters resolved before the 1,000-round diagnostic guard.
- Deterministic cases verify ordinary99, repeated01/00, baseline success,
  independent cancellation, distinct role ratings, no automatic ranged
  retaliation, and recovery that leaves Wounded intact.
- Exact first-shot enumeration independently checks the high-output result.
- Source allocations are read, not rewritten. Snapshot hash is saved with results.
- Rerunning with the same trial count reproduces the results file exactly.
- Around a 50% proportion, 20,000 trials give roughly +/-0.7 percentage points
  of Monte Carlo uncertainty under the sampling assumptions. Small policy
  differences are not conclusive; changing actions also changes die consumption.

Run `lens-character-based-encounter-pacing-v0.1.cjs` with Node and argument
`20000`. It writes the adjacent `.results.json`. Rules and source attribution
are in `lens-low-rating-build-trace-v0.1.md` and the current baseline's
Independent Opposed Effects section.
