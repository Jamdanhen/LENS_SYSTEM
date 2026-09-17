# Range Resonance: Modest and Strong Support

Date: 2026-09-12
Status: Test completed. The user subsequently approved +0.30/+0.60 as
provisional range-support references, without item assignments or a ceiling.

## Direction

The user floated conditional Functional Scale for a sniper rifle, then expressed
a preference for Resonance. Keep Functional Scale parked as an alternative;
do not assign Scale 2 or alter the range frame in this test.

Test the existing 25-meter doubling candidate, one Difficulty Rank per band:
D1 through 25 m, D2 through 50 m, D3 through 100 m, D4 through 200 m,
D5 through 400 m, continuing through D10 at 12,800 m. Inclusive upper bounds.
This remains a candidate calibration, not an adopted universal range rule.

Compare no range support with +0.30 and +0.60 from Medium onward. The onset
and continued applicability are fixtures, not a required equipment design.
Modest/strong are relative descriptions for this comparison, not new universal
valuation tiers or ceilings. No new ordinary equipment multipliers are added.
Test Ratings exclude the particular range contribution under evaluation.

Preserve full-precision multiplication, final floor, the net context pool,
actual reach and Access, independent Effects, ordinary action accounting, and
separate Function Bands. No automatic Scope, Scale, or preparation grants.
Range properties must not duplicate an existing equipment contribution.

## Numerical Results

Use the prior trained signature magnitude, 180.280512 before Difficulty and
the tested range Lens. This preserves a known numeric control, not a claim
that its original firearm can reach every test distance. The test is not a
complete sniper build or an empirical firing trial.

| Distance | No support | +0.30 | +0.60 |
| --- | --- | --- | --- |
| 100 m / D3 | 63 | 82 | 101 |
| 200 m / D4 | 38 | 49 | 61 |
| 400 m / D5 | 22 | 29 | 36 |

These are Final Ratings. Individual success chances equal those values when
below 99; Rating 101 has 99% success under the current 01/00 rules, before
opposition and without a paid reroll. It is not a 99% chance of harming a target.

For raw Rating 100, the corresponding rows are 35/45/56, 21/27/33, and 12/16/20.
Raw 20, 80, and 320 also appear in the script as sensitivity controls; they
do not establish new competence classifications.

## Effects and Other Contributions

The 180.280512 control, ordinary roll 30:

| Distance | No support Effects | +0.30 Effects | +0.60 Effects |
| --- | --- | --- | --- |
| 100 m | 4 | 6 | 8 |
| 200 m | 1 | 2 | 4 |
| 400 m | 0 | 0 | 1 |

Against an illustrative two defensive Effects and one matching mitigation,
the surviving rows are 1/3/5, 0/0/1, and 0/0/0. These are fixed-roll examples,
not expected output or new armor values. Support enhances successful output
as well as probability, but does not ensure cancellation is overcome.

With +0.60 support, adding a genuinely distinct +0.20 preparation gives Ratings
114, 68, and 41 at the three distances. Dissonance 0.30 instead gives 82, 49,
and 29. Two declared actions with support and otherwise neutral context give
50, 30, and 18. Neither equipment nor preparation is counted twice.

## Applicability Boundary

With raw 100 and neutral other context, switching +0.60 on just past 25 meters
changes Rating 98 to 94. The +0.30 version changes 98 to 76. Both preserve a
downward step, and subsequent supported bands also decline.

The onset is not monotonic under every context. With the same Dissonance 0.30
on either side, raw 100 gives 68 at 25 meters and 76 at 26 meters under +0.60
support. With Dissonance 0.20 it gives 78 and 82. Even moderate interference
can produce this inversion; it is not limited to extreme context.

Algebraically, for otherwise neutral raw Ratings and support r starting at
Medium, the farther unrounded Rating exceeds the nearer one when
dissonance > 1 - 1.5r, while the farther context remains positive. Once both
contexts clamp to zero, neither has a numerical advantage. For r=0.60 the
onset threshold is 0.10; rounding can hide small differences. This is the
established net-pooling rule acting on different
applicable benefits, not a defect fixed by changing range cutoffs.

Do not automatically make every range-support property start at Medium, or
pretend that supporting facts cease at Short merely to manufacture a niche.
Equally, do not invent applicability at Short just to remove a mathematical
result. An actual tool's contribution determines the scope. If a genuine
range-conditional benefit produces a preferred engagement distance, that is
an explicit fictional/design consequence to assess rather than silently cap.
No new context channel, selective offset rule, or separate multiplier is added.

## Findings and Recommendation

Both +0.30 and +0.60 are meaningful reference benefits, without extending
ordinary equipment's x1.00-x1.30 ladder. Treat the range benefit separately only
when its function is distinct, as the existing equipment rules allow.

Recommend retaining these as provisional range-support reference values, not
complete weapon profiles, fixed automatic triggers, prices, or upper limits.
The uniform Medium-onward fixture demonstrates the benefit and its onset risk;
do not adopt that fixture universally.

The test does not settle a dedicated sniper rifle's expected performance.
At 400 meters, strong support gives the known trained control 36% individual
success, or 41% with the example additional preparation, before opposition.
If the intended fiction requires substantially better performance, these values
are insufficient for that case. Do not label that solved or introduce more
layers merely because the arithmetic passes. Actual equipment facts, complete
applicable training, and intended shot circumstances must establish the target.

The user accepted the reference-value recommendation with "Agreed." Record
+0.30/+0.60 as provisional references, preserving fictional applicability and
existing pooling. The user did not adopt the Medium-onward fixture, universal
equipment assignments, a bonus ceiling, or the candidate distance ladder.
The baseline now records this bounded acceptance. No more repetitions of the
same arithmetic are needed. Concrete weapon or power profiles can later use
these controls without changing the underlying resolution procedure.

The next substantive decision is provisional use of the 25-meter doubling
distance ladder. Individual equipment/power reach and support stay unresolved.

## Verification

`lens-range-support-strength-test-v0.1.cjs` passed assertions across five Rating
controls, three ranges, three support strengths, ordinary Effect cancellation,
mitigation, success limits, boundary transitions, context inversion, action
division, zero floor, and out-of-table handling. Special-continuation outputs
were not resimulated; fixed-roll Effects are expressly ordinary results.
The subsequent reference-value approval is recorded in the baseline. The
arithmetic fixtures and their outcomes remain unchanged.
