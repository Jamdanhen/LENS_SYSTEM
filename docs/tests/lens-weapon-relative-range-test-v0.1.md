# Shared Versus Weapon-Relative Range Anchors

Date: 2026-09-12
Status: Approved comparison completed. Neither alternative nor equipment ranges
adopted. Baseline and terminology unchanged.

## Question and Controls

Compare the previous shared 10-meter D1 anchor with weapon-relative anchors.
Preserve the Difficulty curve, equipment modifier range, training, context,
action accounting, Access, Scale, and independent Effects.

Prior control: `lens-range-delivery-method-test-v0.1.md` and its script.
Matched applicable training yields 150.23376 before equipment. Retain the
previous candidate knife x1.05, handgun x1.20, and long-gun x1.25 modifiers.
This is not one character applying firearm expertise to unrelated weapons.

Borrow only the BRP SRD's base ranges as test anchors:

- Thrown knife: 10 meters.
- Handgun: 20 meters.
- Rifle: 80 meters.

Source inspected in the preceding peer comparison:
https://brp.chaosium.com/basic-roleplaying/5-0-combat/5-9-weapons-and-damage/

These are published game abstractions, not measured real-world performance or
recommended final LENS equipment values. Do not transfer BRP's skill halving,
linear increments, or three-increment maximum into this comparison.

Retain the LENS candidate's relative upper bounds:
1, 2, 5, 10, 20, 50, 100, 200, 500, 1000 times the starting distance.
Thus only the distance anchor changes. All upper bounds are inclusive.

| Method | D1 ends | D2 ends | D3 ends | D4 ends |
| --- | --- | --- | --- | --- |
| Shared table, every method | 10 m | 20 m | 50 m | 100 m |
| Relative knife | 10 m | 20 m | 50 m | 100 m |
| Relative handgun | 20 m | 40 m | 100 m | 200 m |
| Relative rifle | 80 m | 160 m | 400 m | 800 m |

Difficulty multiplier remains 0.98 x 0.6^(D-1), with final floor only.
Routine activities remain automatic where appropriate. The test concerns
uncertain delivery, not a mandate to roll everything within these distances.
Neither table supplies actual reach, permission, or an equipment maximum.
Out-of-table distances are unmapped rather than automatically prohibited.

## Ratings

Each cell shows shared-table Rating -> relative-table Rating. These are not
percentages or opposed win probabilities; values above 99 still affect output.
Every row is conditional on actual means and permission to reach the distance.

| Distance | Knife | Handgun | Rifle |
| --- | --- | --- | --- |
| 20 m | 92 -> 92 | 106 -> 176 | 110 -> 184 |
| 40 m | 55 -> 55 | 63 -> 106 | 66 -> 184 |
| 50 m | 55 -> 55 | 63 -> 63 | 66 -> 184 |
| 100 m | 33 -> 33 | 38 -> 63 | 39 -> 110 |
| 200 m | 20 -> 20 | 22 -> 38 | 23 -> 66 |

The handgun does not improve at every distance: at 50 meters both tables assign
D3. Moving the anchors does not create a constant bonus or guaranteed separation
between all weapons. The knife is an unchanged control, not a claim that an
ordinary knife can achieve every listed distance.

## Output and Pacing

Use 50 meters, an ordinary roll of 30, and the same rifle control:

- Shared: Rating 66, success, four Effects.
- Relative: Rating 184, success, sixteen Effects.
- Against four defensive Effects and two applicable mitigation: zero versus
  ten surviving offensive Effects. These opposition values are fixtures, not
  new defense or armor values.

This is not newly created close-range power. Rating 184 was already this
control's D1 output; the relative model retains it through 80 meters. That
expands the distances over which high output occurs and can materially shorten
encounters. More accurate delivery also preserves more output under the current
unified procedure; the test does not decouple accuracy and harm.

Lower pre-Difficulty controls of 20 and 80 yield Ratings 7 -> 19 and 28 -> 78
at 50 meters. On roll 30 they generate zero -> zero and zero -> five Effects.
These are sensitivity ratings, not newly labeled character competence tiers.

Net context 0.60 yields rifle Ratings 39 -> 110; context 1.20 yields 79 -> 220.
With two declared actions and neutral context, the rifle yields 33 -> 92.
Normal penalties still apply; the relative model does not bypass them.

## Boundaries and Cost

The 40% step remains. Handgun at 40/41 meters yields 106/63. Rifle at 160/161
meters yields 110/66. No interpolation or compensating Resonance was added.

The design cost is recording a starting range for the delivery method, ideally
with its bands already printed. This is an additional equipment/power property,
not a new character Rank, purchase layer, or roll. A rifle modifier already
assessed for this exact range advantage cannot also earn duplicate Resonance.
Distinct support still applies normally.

Extraordinary delivery would need a setting-defined range basis for its actual
means. Do not derive one from HOLT Rank, personal Scale, or earned Effects by
default. A universal range value for every extraordinary capability was not
tested. Complementary teamwork still uses the delivering contribution's actual
means and normal cancellation; one surviving delivery Effect completes the
permitted delivery while those means remain.

## Recommendation and Decision Boundary

Prefer delivery-relative starting ranges for further working use over one
universal personal-distance Difficulty table. This directly distinguishes
equipment reach/effectiveness without expanding the ordinary multiplier band.
It changes the earlier candidate's assumption that all methods assign the same
range Difficulty within the personal frame. It does not change scene distance
or the Difficulty curve.

Do not adopt the borrowed 10/20/80-meter anchors as final values. The user must
decide whether this equipment-dependent Difficulty approach, including its
retention of strong output farther away, is the desired working model. The
test supports the distinction, not realistic calibration or encounter balance.
Maximum reach, concrete equipment/power profiles, and other Scale frames remain
unresolved. No broad equipment catalogue or pricing review is needed here.

## Verification

`lens-weapon-relative-range-test-v0.1.cjs` passes all assertions: inclusive and
fractional boundary probes, unchanged knife control, expected Rating pairs,
ordinary Effects/cancellation/mitigation, action division, and unmapped distance.
The first run caught an incorrect expected handgun result at 50 meters; the
expectation was corrected to D3/63, leaving the calculation unchanged.
This is deterministic arithmetic and application testing, not an encounter
simulation or empirical firearms study.
