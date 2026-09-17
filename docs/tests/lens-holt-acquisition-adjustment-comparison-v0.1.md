# Initial HOLT Acquisition: Limitation Adjustment Comparison

Subsequent decision: the user rejected the split between an 80-point initial
Rank charge and a counted Access premium. Current acquisition starts at 80
for the complete HOLT, with whole-HOLT limitation estimates of 60/40/20.
No area tally is required. See `lens-holt-flat-acquisition-working-estimate-v0.1.md`.
The original calculations below are historical, not the active proposal.

Status: User-approved numerical test, not an adopted acquisition formula,
discount schedule, rounding rule, or final price. No core reference changed.

## Purchase And Controls

Both methods purchase the same HOLT: Rank 1, its defined thematic Access,
and no Axis Ranks. Open unranked Axes remain usable through the Character's
existing capabilities, without a HOLT-derived numerical bonus. Buying Access
can therefore be valuable before any Axis development.

The trial unadjusted acquisition price is 80 + 5n, where n is the number of
distinct permitted Derived Attribute areas. Using the previous scope estimate
as actual points and adding 80 for initial Rank 1 are authorized test
assumptions, not consequences of the earlier scope-estimator approval.

Use illustrative scopes of 4, 10, and 20 areas. These are not fixed counts
for named Domains; Leverage treatment remains unresolved. All counted areas
are genuinely permitted, including conditional or undeveloped ones.

The limitation affects the entire HOLT in the primary comparison. The band
is its overall combined practical burden: Modest 25%, Substantial 50%,
Severe 75%, all still candidate adjustments, not measured availability.
Neither method restricts the power's output a second time while Access is
available unless the actual limitation says so.

## Formulas

```text
Unadjusted acquisition = 80 + (areas x 5)

A. Adjust Access premium only
80 + (areas x 5 x remaining fraction)

B. Adjust whole acquisition
(80 + areas x 5) x remaining fraction
```

Remaining fraction is 1 minus the candidate adjustment. Neither calculation
refunds points, grants additional Ranks, or reduces later advancement prices.
The 80 in A is a mathematical floor of that candidate, not a separately
adopted minimum purchase price. No such floor is imposed on B.

## Results

| Areas | Unadjusted | Band | A: premium only | B: whole acquisition |
| --- | ---: | --- | ---: | ---: |
| 4 | 100 | Modest 25% | 95 | 75 |
| 4 | 100 | Substantial 50% | 90 | 50 |
| 4 | 100 | Severe 75% | 85 | 25 |
| 10 | 130 | Modest 25% | 117.5 | 97.5 |
| 10 | 130 | Substantial 50% | 105 | 65 |
| 10 | 130 | Severe 75% | 92.5 | 32.5 |
| 20 | 180 | Modest 25% | 155 | 135 |
| 20 | 180 | Substantial 50% | 130 | 90 |
| 20 | 180 | Severe 75% | 105 | 45 |

Both methods return 100/130/180 with no adjustment. Fractional prices are
preserved; rounding has not been selected.

At the same scope and band, A exceeds B by exactly 80 times the adjustment:
20 for Modest, 40 for Substantial, 60 for Severe. The difference is entirely
whether the 80-point base participates in the adjustment.

## What The Two Approaches Mean

### A: Protect The Base Rank Cost

The initial ceiling retains an 80-point cost even if all its applications
are restricted. This restrains cheap acquisition of many conditional HOLTs
and makes first-Rank accounting resemble the price of later HOLT Ranks.

However, a Severe four-area limitation saves only 15% of the full acquisition
price (100 to 85), while the same band on twenty areas saves about 41.67%
(180 to 105). The formulas deliberately value the burden only against the
premium. They do not apply the same percentage reduction to complete packages.

### B: Value The Restricted Acquisition As A Whole

The overall burden reduces the complete purchased capability. The Rank is
still 1, but the opportunity to benefit from its Access and developed Axes
is restricted. This is consistent with treating the package as an integrated
acquisition rather than protecting a separately useful universal Rank.

Severe cases become much cheaper: 25 for four areas, 45 for twenty. These
prices are not inherently invalid merely because later unrestricted-price
Rank advancement costs 80. Initial acquisition and later advancement have
different jobs. But existing ordinary capability makes this cheap Access
usable immediately; it must not be dismissed as powerless because no Axis
Ranks are included.

## Development Follow-Through

Hold subsequent HOLT advancement at the working test price of 80 and Axis
development at the candidate 35. The limitation remains on the HOLT; Rank
advancement does not buy it away.

| Severe fixture | A: initial / plus Axis 1 / through HOLT 2 and Axis 2 | B: same stages |
| --- | --- | --- |
| Four areas | 85 / 120 / 235 | 25 / 60 / 175 |
| Twenty areas | 105 / 140 / 255 | 45 / 80 / 195 |

The acquisition difference remains 60 through these stages. Neither method
supplies a recurring 75% reduction on Axis or HOLT advancement. Whether some
future advancement model accounts for limitations is outside this test.

## Applicability And Misuse Checks

- A full-HOLT suit dependency can qualify for the full-HOLT comparison if
  its actual disruption and recovery burden justify the chosen band.
- A restriction affecting only one Axis must not use B to discount all
  unaffected permissions. The global formulas here do not solve partial
  allocation of the base 80; that allocation remains unresolved.
- A permanently absent area is excluded from n, not also discounted as a
  limitation. A conditional area stays in n and receives its applicable
  overall assessment.
- Do not stack separate percentages for the same affected area. Assess the
  combined burden once, using the existing provisional guidance.
- A full-moon condition is not automatically Severe. If all relevant play
  occurs in that window, the asserted severe burden is unsupported.
- Buying several cheaper HOLTs whose restrictions cover each other's gaps
  is a relevant future portfolio comparison. These numbers alone neither
  authorize duplicate purchases nor establish an exploit. Real complementary
  capabilities have value and should not be forbidden merely for being useful.
- Removing a limitation later does not follow from purchasing another Rank.
  Its eligibility and any additional acquisition cost are not established here.
- Fractions and the coarse severity bands remain estimate issues, not grounds
  for silently adding a minimum cost, rounding convention, or universal cap.

## Assessment

For a limitation that genuinely burdens the entire HOLT, whole-acquisition
adjustment is the stronger conceptual fit for the next working estimate:
the Rank 1 ceiling is not independent of the limited Theme it develops.
Premium-only adjustment protects an accounting component but can make a
severe restriction on a narrow HOLT barely affect its complete price.

The practical risk of B is inexpensive, immediately useful Access. That is
the consequence to evaluate when choosing the estimate, not an excuse to
pretend unranked Access has little value. These results do not establish that
25/50/75 are calibrated prices or that every limited HOLT is equally useful.

Recommendation for user judgment: prefer B for further whole-HOLT limitation
estimates, preserving A as comparison evidence. Do not adopt a final formula
or generalize B to partial-Axis restrictions through this test.

## Verification

JavaScript evaluated all areas 1-20 at adjustments 0, .25, .50, .75.
Six assertions per combination passed, totaling 480 checks: A retains its
formula's base; B remains positive for these inputs; neither exceeds the
unadjusted price; B is no greater than A; their difference equals 80 times
the adjustment; and both decrease monotonically across the tested bands.
The four-area and twenty-area development examples were calculated separately.
These are arithmetic checks and conceptual comparisons, not playtest data.

Sources: current user-approved acquisition test; the HOLT Rank 80 test;
`lens-holt-simple-scope-estimate-test-v0.1.md`;
`lens-holt-limitation-band-estimate-test-v0.1.md`;
`lens-holt-overlapping-limitations-test-v0.1.md`.
