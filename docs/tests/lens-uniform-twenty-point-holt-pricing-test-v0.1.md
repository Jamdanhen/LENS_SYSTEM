# Uniform Twenty-Point HOLT Pricing Comparison

Date: 2026-09-15
Status: tested candidate, not adopted pricing.

Subsequent decision, 2026-09-15: the user adopted the 20/20 base prices and
uniform ten-percent limitation treatment after comparative review. See
`docs/design/lens-uniform-holt-pricing-adoption-v0.1.md`. The report and script
below preserve the original comparison inputs; extreme reductions, buyoff,
and existing-character conversion remain unresolved.

## Candidate And Controls

The user's reason for 20 is clean percentage arithmetic, not recovery of the
old acquisition fee. Purchase defined HOLT Access once for 20 (the user's
Rank-0 purchase language), then buy each Axis rank for 20. No parent HOLT
rank is restored and no separate Rank-0 purchase is charged per Axis.
All permission, Axis multipliers, Rank horizons, other development prices,
awards, and protected creation allocations remain unchanged for comparison.

Assess actual combined limitation burden through GM negotiation, express it
in ten-percent bands, and discount each affected purchase once. A whole-HOLT
restriction can affect Access and its Axis development; a one-Axis restriction
does not automatically discount the entire Access purchase or other Axes.
Discounting all affected expenditures once is mathematically equivalent to
discounting their sum once, not compounding the reduction.

Current controls: Access 40 once; Axis 15/rank. Current whole-HOLT acquisition
discounts are 25/50/75%, without automatic Axis discounts. The candidate would
replace that price treatment if adopted; neither schedule has changed here.

## Execution

Run `lens-uniform-twenty-point-holt-pricing-test-v0.1.cjs` with Node.
Passed 550 uniform-package cases and 1,210 mixed-scope cases. These verify
integer costs, declining prices with increased negotiated reductions, and
correct targeting of discounts. They do not establish fictional burden,
player behavior, or complete character balance.

## Results

| Purchase | Current | Candidate |
| --- | ---: | ---: |
| Access only | 40 | 20 |
| Access plus one Axis at Rank 1 | 55 | 40 |
| Access plus one Axis at Rank 4 | 100 | 100 |
| Access plus one Axis at Rank 5 | 115 | 120 |
| Access plus one Axis at Rank 10 | 190 | 220 |
| Access plus three Axes at Rank 5 | 265 | 320 |
| Access plus five Axes at Rank 5 | 415 | 520 |

At 125 eligible points both schedules afford Access and one Axis at Rank 5,
leaving 10 versus 5. At 200, current pricing affords Rank 10, candidate Rank 9.
These are focused affordability comparisons, not full optimized characters.

| Whole-package reduction | Unit cost | Access + one Axis 10 | Access + five Axes 10 |
| --- | ---: | ---: | ---: |
| None | 20 | 220 | 1020 |
| 20% | 16 | 176 | 816 |
| 50% | 10 | 110 | 510 |
| 80% | 4 | 44 | 204 |
| 90% | 2 | 22 | 102 |

Every ten-percent reduction saves two points per affected purchase. Mixed
scope example: full Access 20, five ranks of one 20%-restricted Axis 80,
and five unrestricted ranks of another Axis 100, total 200.

From zero savings, net 19 or 15 per session affords Access or one unrestricted
Axis rank after two awards; Access plus one Rank-10 Axis takes 12 or 15 awards.
These are saving references, not new gates or award schedules. The first
purchase timing does not mean exactly one rank every two sessions forever;
unspent currency carries forward where normally allowed.

## Assessment And Boundaries

The arithmetic and uniform treatment work. Unrestricted entry is cheaper;
deep and especially broad development are more expensive. Access remains
qualitatively useful at Axis 0, so cheaper acquisition can encourage acquiring
several themes instead of developing one. It does not create additional
permissions beyond each purchased HOLT's defined Access.

Large discounts produce highly developed but restricted capability cheaply.
That is not inherently a failure. It becomes a problem if the agreed restriction
is nominal, readily bypassed, or priced from calendar frequency while most
important uses can be scheduled or stored. No particular fictional limitation
has been assigned 80% or 90% by this test.

At 100% the formula gives free purchases. This is a boundary observation,
not an adopted ceiling or authorization for unlimited free development.
Existing acquisition-only buyoff wording does not settle buyoff of discounted
Axis development. That treatment, conversion, and refunds remain unresolved.

Recommendation: advance the uniform 20-point base and ten-percent negotiation
bands as a working pricing candidate for approval, without automatically
approving extreme reductions, changing awards, or revising existing characters.
