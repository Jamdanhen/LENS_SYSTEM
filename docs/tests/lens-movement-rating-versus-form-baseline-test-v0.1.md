# Movement Rating Versus Movement-Form Baseline

Status: User-approved working travel-frame approach, adopted 2026-09-08.
Date: 2026-09-08.

## Objective

Compare a Movement-Rating-based ordinary allowance with a movement-form baseline
modified by applicable Lenses. Test running, permitted personal flight, and
vehicle travel without adopting distances, turn duration, or a speed formula.

This is an architectural comparison with arithmetic sensitivity examples, not
a simulation of real travel, a population study, or a complete movement system.

## Existing Authority

Sources:
- `../system/lens-system-baseline-draft-v0.1.md`: Movement, Classification, Scale,
  ordinary movement and actions, ordinary Rank progression, and applicability.
- `../design/lens-task-landscape-working-map-v0.1.md`: Traversing, Piloting,
  Navigation, and the same-backpack/different-relationship example.
- `lens-character-creation-vertical-slice-v0.3.md`: unresolved translation from
  movement Expressions to distance, positioning, or movement per turn.

Movement means physical relocation through an available movement form.
Maneuverability changes course or configuration; Stability maintains position
or trajectory; Responsiveness adjusts to developing circumstances. These are
not being redefined by this comparison.

Ordinary movement is available once per turn and is shared across that turn's
actions. More independent actions do not multiply the allowance. Additional
movement activities use ordinary action accounting. Routine movement can be
Automatic; a computed Rating is not a reason to roll for an ordinary journey.

Traverse describes the Character's own available locomotion. Piloting describes
guiding a vehicle or apparatus. The actual relationship determines routing.
Neither training nor Scale alone creates a missing movement permission.

## Candidates

### A: Rating Sets the Allowance

Convert the relevant Movement Rating directly into an ordinary travel allowance.
No conversion factor or units are adopted for this test.

Two plausible readings need separate checks:
- Stable Movement Rating: Mobility with developed Movement, before Task, Field,
  Specialty, and situational contributions.
- Full relevant relocation Expression: include applicable training and context
  before translating its Final Rating into the allowance.

The first provides a stable character-facing value with less contextual churn.
The second recognizes trained application and existing Lens contributions.
Neither is a rolled result or a requirement to roll movement every turn.

### B: Available Movement Form Establishes the Travel Frame

The Campaign Profile or relevant capability/equipment description establishes
ordinary travel for the actual available form and means. Apply Lenses that
genuinely change that travel. Use a relevant Expression when the actual activity
is uncertain or contested, rather than treating every effectiveness multiplier
as an automatic increase in distance.

This is not a universal speed for all things called flight or all vehicles.
The actual capability or apparatus must supply its scope. Nor is it a new
purchased Speed Rank or a separate movement subsystem. The question is what
the existing Lenses mean in the current Expression, not an independent point pool.

## Running

| Case | Candidate A | Candidate B |
| --- | --- | --- |
| Two ordinary runners differ in Mobility and developed Movement. | Stable Rating naturally distinguishes them. | The ordinary movement frame can also recognize their developed relocation capability. B must not make Movement development irrelevant. |
| Same underlying capability, but one has more running-related training. | Stable Rating alone leaves allowance unchanged. Full-Expression translation increases it automatically whenever training applies. | Training may improve actual pace or performance when that is its contribution. The amount is not automatically identical to its probability multiplier. |
| The task is keeping balance on an unstable route, not maximizing travel. | Full-Expression-to-distance risks treating better stability as proportionally greater speed. | Use the actual route and capability. Better balance may enable progress or avoid loss without being an intrinsic speed increase. |
| Ordinary clear-ground travel is routine. | Can use a static allowance without rolling. | Can use the established travel frame without rolling. Automatic resolution does not favor either candidate by itself. |

Finding: A has a credible, simple case for personal locomotion. B remains
preferable only if it preserves meaningful physical development rather than
substituting an identical allowance for everyone in a broad category.

## Permitted Personal Flight

| Case | Candidate A | Candidate B |
| --- | --- | --- |
| Same Character, now with flight Access, unchanged Movement Rating. | Rating alone supplies no reason for ordinary ground travel and flight to have different reach. Equal reach could be correct in a particular setting, but is not established merely by equal Rating. | The flight capability defines what its permission enables; the travel frame can differ without altering the Character's competence. |
| Two flight capabilities permit different ordinary travel while using the same character ratings. | Needs an additional form or capability adjustment. Without it, the difference disappears. | The relevant capability supplies the difference directly. |
| One Character is more practiced at a difficult flight maneuver. | Full Rating conversion increases travel even if the trained contribution primarily concerns control. | Training improves that maneuver. A speed benefit requires an applicable contribution to travel, not merely a higher number. |
| A speed-enhancing device is removed from an innate flyer. | Can represent loss through an applicable modifier, provided it identified that speed function. | Remove the device's contribution; retain innate flight Access. |
| The same device supplies all flight Access to another Character. | An allowance number cannot substitute for Access when the device is removed. | Loss closes that route to flight; no amount of remaining Piloting or Movement training restores the missing means. |

Finding: flight needs a capability-defined frame regardless of how a personal
Movement Rating might eventually enter the calculation. Access to a form is
not itself a complete statement of that form's ordinary travel magnitude.

## Vehicle Travel

| Case | Candidate A | Candidate B |
| --- | --- | --- |
| Same pilot changes between two craft with different travel capabilities. | Personal Movement Rating is unchanged. Full Piloting Rating also needs the craft's actual contribution to distinguish them. | The craft supplies the travel capability; the pilot supplies applicable operation and control. |
| Two pilots use the same craft on the same routine route. | Direct full-Rating translation mechanically changes allowance with training, even where no additional travel capability has been established. | Both can use the craft's ordinary capability when routine and permitted. Better training need not change the craft itself. |
| The route becomes difficult or contested. | A larger Rating may reasonably yield better progress, but distance-equals-Rating hardwires one meaning for that improvement. | Better piloting can produce better actual progress through the ordinary resolution of the stated objective. No new margin-to-distance formula is adopted here. |
| A propulsion enhancement changes the craft's actual travel capability. | Works if the equipment contribution is explicitly identified; personal Rating alone is insufficient. | Apply the relevant equipment Lens to the travel frame without improving unrelated personal competence. |

This does not mean expert pilots can never travel farther in the same time.
It means better operation, successful progress, and intrinsic capability are
different contributions, even when all can affect the journey's outcome.

## Arithmetic Sensitivity Check

Use legal partial character fixtures, not full creation builds. All examples
are at the same Scale and before Difficulty or contextual factors. Attribute
ratings enter directly; developed layers use 1 + Rank/10. These are illustrative
applicable routes, not fixed Task ownership or adopted movement allowances.

| Fixture | Calculation | Raw Rating | Final-only floor |
| --- | --- | ---: | ---: |
| Mobility 5, Movement 4, unranked Task and Field | 5 x 1.4 | 7 | 7 |
| Same capability, applicable Traverse 5 and Field 5 | 5 x 1.4 x 1.5 x 1.5 | 15.75 | 15 |
| Mobility 6, Movement 6, unranked Task and Field | 6 x 1.6 | 9.6 | 9 |
| Same developed capability, applicable Traverse 5 and Field 5 | 6 x 1.6 x 1.5 x 1.5 | 21.6 | 21 |
| Pilot: Mobility 5, Responsiveness 4, Piloting 5, relevant Field 5 | 5 x 1.4 x 1.5 x 1.5 | 15.75 | 15 |

The first runner's training increases raw effectiveness by x2.25 while the
stable Movement component remains 7. If a future rule made raw Rating directly
proportional to distance, that training would also multiply distance by x2.25.
If it instead mapped the floored Rating, the increase here would be 15/7.
Those are implications of such hypothetical mappings, not adopted speed rules.

The pilot fixture can have the same effectiveness as the trained runner while
using entirely different travel means. Equal effectiveness numbers do not
establish equal physical travel. No number here becomes meters, zones, velocity,
or a real-world athletic benchmark.

All five raw calculations and final floors were checked with decimal arithmetic.
The checks establish arithmetic consistency only, not the correct speed model.

## Scale, Costs, and Applicability Checks

- Keep Scale as the natural frame, distinct from competence and permission.
  This comparison does not declare that every Scale step must multiply speed
  by 1.6. Whether and how that factor translates into travel remains open.
- A relevant restriction can limit travel or close Access. Do not automatically
  turn every numerical impediment to a different aspect of the action into an
  equal percentage reduction in ordinary distance.
- Do not count the same vehicle or capability magnitude once in its baseline
  and again as an additional modifier for the identical contribution.
- Candidate B does not multiply the Character's free allowance by number of
  actions, movement modes, or equipment items. Mode changes cannot be used to
  claim a new free allowance; their detailed accounting is not settled here.
- Neither candidate settles sprint quantity, travel time, chase resolution,
  environmental costs, or a map-versus-theater-of-the-mind presentation.

## Recommendation and Real Tradeoff

Adopted B: establish ordinary travel through the actual movement form and
means, then apply distinct Lenses relevant to that travel. Retain Movement
development where it genuinely supplies personal relocation; do not derive
all travel from a single universal effectiveness-to-distance conversion.

A is simpler for one kind of ordinary personal movement. Across running,
flight, and vehicles it needs form-specific information anyway. A full Rating
also measures contributions that do not always mean greater distance.

B's cost is that movement capability must be stated in the Profile, capability,
or equipment description. That is real provisioning work, not a complete answer
to how far someone moves. A universal catalogue of speeds is not required, but
some usable frame must exist for the active campaign.

The next substantive choice is how to express that frame for
play and how personal Movement development modifies it. Both remain open here.
Do not read this recommendation as adopting distances, turn duration, a new
speed statistic, or any particular numerical modifier.
