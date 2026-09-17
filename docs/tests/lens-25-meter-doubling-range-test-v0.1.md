# Universal Range: 25-Meter Doubling Comparison

Date: 2026-09-12
Status: Requested comparison completed; no range rule adopted.

## User Request and Controls

The user proposed 25, 50, 100 meters, continuing to double for longer ranges.
Compare against the previous 20/100/500-meter universal candidate, not against
weapon-relative ranges. Preserve equipment/power support through applicable
Lenses, rather than changing the distance classification by delivery method.

Continue the explicit test assumption of one Difficulty Rank per band, starting
at D1. The existing multiplier is 0.98 x 0.6^(D-1), with final-only floor.
This test assigns no new names beyond Short, Medium, and Long for D1-D3.
The numeric extension through D10 does not independently adopt those labels,
Difficulty assignments, maximum reach, or Scale conversions.

All upper bounds are inclusive. Actual reach and Access remain necessary;
the table cannot give an ordinary projectile or power a listed distance.
Routine automatic actions stay automatic. No Effects-to-distance conversion.
The former candidate remains unmapped beyond 500 meters; do not invent a
continuation or treat every farther attempt as D3 for comparison purposes.

## Full Proposed Ladder

| Difficulty | Upper distance | Final Rating from raw 100 | From raw 180.280512 |
| --- | --- | --- | --- |
| D1 | 25 m | 98 | 176 |
| D2 | 50 m | 58 | 106 |
| D3 | 100 m | 35 | 63 |
| D4 | 200 m | 21 | 38 |
| D5 | 400 m | 12 | 22 |
| D6 | 800 m | 7 | 13 |
| D7 | 1,600 m | 4 | 8 |
| D8 | 3,200 m | 2 | 4 |
| D9 | 6,400 m | 1 | 2 |
| D10 | 12,800 m | 0 | 1 |

Ratings are not opposed win chances. Rating zero retains natural-01 success
for permitted attempts. The higher control is the prior signature route's
numeric magnitude, not permission to use that character's weapon at all ranges.
Beyond D10 is unmapped in this test, not automatically Closed Access.

## Comparison at the Same Distances

| Distance | Previous D | Doubling D | Previous raw-100 Rating | Doubling raw-100 Rating |
| --- | --- | --- | --- | --- |
| 20 m | D1 | D1 | 98 | 98 |
| 25 m | D2 | D1 | 58 | 98 |
| 50 m | D2 | D2 | 58 | 58 |
| 100 m | D2 | D3 | 58 | 35 |
| 200 m | D3 | D4 | 35 | 21 |
| 400 m | D3 | D5 | 35 | 12 |
| 500 m | D3 | D6 | 35 | 7 |

Through 20 meters the candidates agree; over 20 through 25 the new candidate
is easier; over 25 through 50 they agree. Beyond 50, through the old table's
500-meter endpoint, the new candidate is stricter.

The old candidate assigned the same D3 to 101 and 500 meters. The doubling
candidate distinguishes D4 at 101, D5 at 201, and D6 at 401 meters.
Its uniform rule is one additional Difficulty Rank per doubling after the
initial band. It is still discrete: 50 to 51 meters changes raw-100 Rating
58 to 35, and 100 to 101 changes 35 to 21. It improves regularity, not continuity.

## Equipment or Power Support

Retain the previous illustrative +0.30 Medium and +0.60 Long support. For
longer bands, hold +0.60 constant only as a sensitivity assumption: no property
has been adopted that supplies this at every distance, and bonuses do not
automatically grow with each band.

| Distance | Assumed Resonance | Raw 100 without / with | Raw 180.280512 without / with |
| --- | --- | --- | --- |
| 50 m | +0.30 | 58 / 76 | 106 / 137 |
| 100 m | +0.60 | 35 / 56 | 63 / 101 |
| 200 m | +0.60 | 21 / 33 | 38 / 61 |
| 400 m | +0.60 | 12 / 20 | 22 / 36 |
| 800 m | +0.60 | 7 / 12 | 13 / 21 |

Support is useful without erasing the downward progression. The price of more
frequent Difficulty steps is substantially reduced effectiveness at several
hundred meters unless the Expression or genuinely applicable support is strong.
Do not describe +0.60 as six guaranteed Effect Levels or sixty percentage points.
The same equipment contribution is not counted again under another modifier.

Existing net-context pooling and its range-profile inversion under heavy
Dissonance remain as documented in `lens-universal-range-resonance-test-v0.1.md`.
Changing distance cutoffs does not alter that algebra or justify an exception.

## Output and Recommendation

With the 180.280512 control and ordinary roll 30, without additional support:

- At 100 meters: previous eight Effects, doubling four.
- At 200 meters: previous four Effects, doubling one.
- At 400 meters: previous four Effects, doubling failure and zero Effects.

These are before defense or mitigation, not encounter simulation results.
The test also checks raw 20, 80, and 320 without assigning new competence labels.

Recommendation: prefer the user's 25-meter doubling progression as the leading
universal distance candidate. It supplies a memorable extension and avoids a
single Long band treating 101 and 500 meters identically. This is a design
preference for regularity and stronger distance differentiation, not proof that
its numbers reproduce real-world accuracy. Its clear cost is harsher distant
performance than the previous broad-band candidate.

The next substantive decision is whether to use this progression provisionally.
If accepted, concrete equipment/power support remains to be calibrated; no
weapon-relative anchor, bonus ladder, or additional pricing system is implied.

## Verification

`lens-25-meter-doubling-range-test-v0.1.cjs` passed all assertions: D1-D10 bounds,
fractional transitions, unchanged comparison points, out-of-table handling,
five capability controls, fixed-support sensitivity, and ordinary Effect output.
No baseline or terminology rules were changed.
