# Campaign Profile Starting Development Allowance Test

## Status and Purpose

Authorized diagnostic comparison, not adoption of universal starting amounts or named setting power tiers. The user explicitly distinguishes a narrowly powered character, a powered fantasy adventurer, and a Master with shared Source reinforcement.

Test whether the current prices can construct different starting packages without changing the pricing engine. Compare equal additional allowances for ordinary and extraordinary development. Define the desired Profile package before choosing its budget.

## Controls

- Base: expedition security guide B in `lens-concept-led-25-50-100-rebuild-test-v0.1.json`.
- Base construction remains 25 Attribute / 50 Derived Attribute / 100 Training Points for this comparison only.
- Additional development uses flat advancement prices: Attribute 120; HOLT 80; Derived Attribute 40; Axis 30; Task 30; Field 20; Specialty and Precision 10.
- HOLT acquisition includes Rank 1 and defined Access, but no ranked Axes. Further parent Ranks cost 80 each. Axis Ranks cannot exceed their HOLT Rank.
- All paired examples use unrestricted acquisition prices. The Theme permissions below are hypothetical test definitions, not adopted setting catalogues.
- The 120 / 360 / 720 allowances are diagnostic amounts (one, three, and six Attribute-increase cost equivalents). They are not estimates of actual Heroes, D&D, or MOTU character tiers.
- No currency rescaling, narrative-point spending mechanic, or change to session awards is introduced.

## Complete Additional Spending

| Allowance | Ordinary development | Extraordinary development |
|---|---|---|
| 120 | Mobility 7 to 8: 120 | Narrow Water Travel HOLT 1: 80; Movement Axis 1: 30; Arctic Specialty 6 to 7: 10 |
| 360 | Mobility 7 to 8: 120; Coordination 6 to 8: 80; Awareness 4 to 5: 40; Observation 6 to 8: 60; Firearms 8 to 10: 40; Logistics 4 to 5: 20 | Sea acquisition: 80; parent Rank 1 to 3: 160; Movement Axis 3: 90; Awareness Axis 1: 30 |
| 720 | Mobility 7 to 9: 240; Psyche 5 to 6: 120; Coordination 6 to 9: 120; Awareness 4 to 6: 80; Movement 3 to 5: 80; Discharge 8 to 10: 60; Firearms 8 to 9: 20 | Sea package as above: 360; Strength acquisition: 80; parent Rank 1 to 3: 160; Strength Axis 3: 90; Stability Axis 1: 30 |

All six builds spend their allowance exactly. The script emits complete resulting ordinary ratings alongside the HOLT ledger. Base source data remains unchanged. Attribute increases do not grant free Derived Attribute ranks.

## Permission and Application Probes

### Narrow Ability

The Water Travel fixture permits extraordinary movement over water through its Movement Axis. It does not grant the wider Sea Theme's sensing or control possibilities. Acquisition plus one developed Axis costs 110, with the remaining 10 buying ordinary training in the paired 120-point example.

The ordinary comparator instead improves Mobility across its applicable routes. It gains no permission to walk on water. The extraordinary comparator gains that new option but forgoes the broad Attribute improvement.

This distinction is not evidence that both choices have identical utility. Their value depends on actual play opportunities and the permission's scope.

### Developed Theme

The Sea fixture permits Movement, Awareness, and Control applications. At 360 it develops Movement to Axis 3 and Awareness to Axis 1. Control remains Open but unranked: an eligible attempt is possible without an Axis bonus.

The ordinary alternative improves travel-related capability, observation, firearms expertise, and logistics. It gains broader ordinary competence; it cannot obtain extraordinary Sea permission by improving those ratings alone.

One HOLT is therefore not necessarily one power. Its defined permissions can support several distinct applications even before all Axes receive investment.

### Broader Extraordinary Package

At 720, two Rank-3 HOLTs each carry an Axis at 3 and another at 1. The Strength fixture permits extraordinary Strength and Stability applications. It does not automatically contribute to Sea applications; combined use still requires distinct applicable contributions under the existing compound rules.

The ordinary alternative instead develops two Attributes, three Derived Attributes, a Task, and a Field. It preserves no extraordinary permission but substantially develops its original competencies.

The extraordinary example is not a completed Master. Shared Source reinforcement has not been defined or priced in this test. That common provision must be included explicitly in a future Master package and counted once, whether supplied directly or funded through its allowance.

## Eligibility Stress Case

At the working severe-limitation acquisition price of 20, 120 could purchase six Rank-1 HOLTs with no developed Axes, if all six were genuinely eligible. This is arithmetic, not a proposal to hand out interchangeable severe limitations.

Consequently, a small allowance does not enforce a one-power campaign. Profile eligibility and Theme scope establish that premise. A narrower Theme does not automatically qualify for a limitation discount.

## Findings

1. The current schedule constructs a narrow ability, a developed Theme, and a broader multi-Theme package without requiring different purchase prices for each campaign.
2. Equal additional allowances create concrete ordinary-versus-extraordinary tradeoffs, but these construction probes do not establish combat parity or equal narrative usefulness.
3. Profile design needs both permitted starting capabilities and funding. The amount alone cannot establish the intended character type.
4. A Profile may require extraordinary capability. The ordinary builds here are diagnostic controls, not a requirement that every campaign admit an ordinary alternative.
5. Shared mandatory provisions and discretionary development must be distinguished and counted once. The actual Master reinforcement remains unresolved.
6. More HOLTs buys breadth; higher parent and Axis development buys depth. A strongly powered specialist need not have more HOLTs than a versatile lower-powered character.
7. Base construction is held constant to isolate the comparison, not declared mandatory for all Profiles. Scale, permission scope, and any Profile-specific expression rules remain separate from the allowance.

## Verification

Run `lens-profile-starting-development-allowance-test-v0.1.ps1` from this directory. Result: 180 checks passed, including all six exact budgets, Derived Attribute parent caps, purchased Rank bounds, Axis eligibility and parent caps, the restricted-acquisition arithmetic, and preservation of the base character.

No probability simulation or encounter-balance claim is made. These are construction arithmetic checks and narrative application comparisons.

## Next Design Decision

Use Profile-defined starting packages with the shared prices as the working approach. Before assigning a Master allowance, identify what common Source reinforcement actually grants; then price its ranked elements and add the intended individual Theme development. Do not choose a total first and reverse-fit those provisions to it.
