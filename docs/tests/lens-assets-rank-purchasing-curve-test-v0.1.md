# Assets Rank Purchasing Curve Comparison

Date: 2026-09-06
Status: Exploratory deterministic comparison. No curve adopted.

## Approved Test Lane

The user approved proceeding with the Assets Rank progression test after
clarifying that acquisition Scale affects purchase price, not the buyer's
Assets budget. This record compares three progressions while holding
acquisition Scale at M1. It does not assign item Magnitudes, alter Expression
ratings, price HOLTs or limitations, or establish upkeep rules.

Sources:
- `lens-acquisition-price-scale-relationship-test-v0.1.md`
- `lens-assets-whole-provision-test-v0.1.md`

## Controls

Let B be the Campaign Profile starting-package value, r the purchased Assets
Rank, T the total starting provision value, and A the additional Assets budget.

```text
B = 200 for displayed examples
T(0) = B
A(r) = T(r) - B
Illustrative T(10) target = 50 B = 10,000
First-rank reference: A(1) = B, hence T(1) = 400
```

These endpoints are test controls, not new locks. The 10,000 target includes
the free package in this comparison. Only A is available for extras if the
guaranteed package is already provided in kind. This resolves the accounting
for this test; it does not decide the final treatment of starting provision.

The earlier relationship test used 10,000 as available acquisition funding.
Here 10,000 is total starting provision, so the corresponding exact-fit extra
budget is 9,800. The two quantities must not be interchanged.

## Candidate Formulas

### A: Equal Additions

```text
T(r) = B x (1 + 4.9 r)
```

Every Rank adds 980. It reaches the high endpoint but fails the first-rank
reference: Assets 1 provides 980 extra rather than 200. This is a comparison
control, not an equal fit to all three anchors. A single equal increment
cannot preserve both the first-rank reference and the chosen high endpoint.

### B: Geometrically Growing Additions

```text
T(r) = B x [1 + sum(q^i, i = 0 through r-1)]
q = approximately 1.3281500357489686
```

The empty sum at r = 0 is zero. Bisection solved sum(q^i, i=0..9) = 49.
The first Rank adds B. Every subsequent Rank's new addition is q times the
previous Rank's addition. This does NOT multiply the entire accumulated total
by q each Rank.

### C: Evenly Increasing Additions

```text
T(r) = B x [1 + r + (13/30) r(r-1)]
```

The first Rank adds 200. Each following Rank adds 173.333... more than the
previous Rank's addition. This also fits all three endpoints but distributes
more purchasing power into the middle Ranks than Candidate B.

## Exact-Endpoint Results

Displayed values rounded to nearest whole unit after full calculation.

| Assets Rank | A: Equal additions | B: Growing additions | C: Evenly increasing additions |
|---:|---:|---:|---:|
| 0 | 200 | 200 | 200 |
| 1 | 1,180 | 400 | 400 |
| 2 | 2,160 | 666 | 773 |
| 3 | 3,140 | 1,018 | 1,320 |
| 4 | 4,120 | 1,487 | 2,040 |
| 5 | 5,100 | 2,109 | 2,933 |
| 6 | 6,080 | 2,936 | 4,000 |
| 7 | 7,060 | 4,034 | 5,240 |
| 8 | 8,040 | 5,492 | 6,653 |
| 9 | 9,020 | 7,428 | 8,240 |
| 10 | 10,000 | 10,000 | 10,000 |

## Simpler Candidate B Parameter

Because the endpoint is illustrative, there is no demonstrated need to use
the fitted long decimal. Testing q = 1.33 produces:

| Rank | Total provision | Additional budget | Extra package equivalents |
|---:|---:|---:|---:|
| 0 | 200 | 0 | 0.00 |
| 1 | 400 | 200 | 1.00 |
| 2 | 666 | 466 | 2.33 |
| 3 | 1,020 | 820 | 4.10 |
| 4 | 1,490 | 1,290 | 6.45 |
| 5 | 2,116 | 1,916 | 9.58 |
| 6 | 2,948 | 2,748 | 13.74 |
| 7 | 4,055 | 3,855 | 19.28 |
| 8 | 5,528 | 5,328 | 26.64 |
| 9 | 7,486 | 7,286 | 36.43 |
| 10 | 10,090 | 9,890 | 49.45 |

Rank 10 total is 10,090.148289744462, 0.9015% above the illustrative target.
This parameter is distinct from the x1.6 Scale candidate and does not replace
any existing Rank-to-Expression multiplier.

Nearby controls, holding the first addition at B:

| Addition growth | Rank 10 total |
|---:|---:|
| x1.30 | 8,724 |
| x1.33 | 10,090 |
| x4/3 | 10,255 |
| x1.35 | 11,118 |
| x1.40 | 14,163 |
| x1.60 | 36,517 |

## Relationship Tests

### Concentrated Versus Distributed Development

Under q = 1.33, excluding every Character's free package:

```text
One Character at Assets 10:     9,890.15
Two Characters at Assets 5:     3,832.22 combined
Ten Characters at Assets 1:     2,000.00 combined
```

This isolates ten purchased Assets Ranks, not equal full-character construction
costs: parent Attribute requirements and other build choices are not tested.
Concentration supplies increasing returns. Whether that is desirable depends
on the intended financial difference between moderate and highly developed
Assets. It is not proof of balanced character utility.

Actual contributions pool as resources; their Ranks do not combine into a
higher Rank and get revalued. Buying several items spends the established
budget. It does not recalculate the budget separately for each item.

### Relationship to Earlier Provision Points

The earlier five-point workshop and ten-point manor were whole-provision
construction references. Their old point costs cannot silently coexist with
an assumption that every provision point now equals one fixed package unit.

Under this new candidate, Assets Rank generates a material budget; purchases
consume that budget, not persistent Rank. Adopting this translation would
require rechecking the earlier provisions against their Profile prices. No
earlier price is changed in this record, and no automatic manor at Rank 10
is assumed.

### Profile Translation

The calculation was repeated with B = 50,000 and B = 125,000. All normalized
Rank values T/B remain unchanged. This verifies currency translation, not
equal relative prices for every item in every setting.

### Acquisition Scale

For q = 1.33 at Rank 10, the extra budget is 49.4507414487 B. The previous
40 B test acquisition costs 40 B at M1, 64 B at M2, and 102.4 B at M3.
The M1 purchase fits; M2 and M3 do not. The curve does not increase available
funding when the Character selects a higher-magnitude purchase.

### Non-Renewability

This is an initial provision-value calculation. It does not regenerate spent
funds monthly or grant the full cumulative total again on advancement. Neither
an advancement grant nor a recurring-income procedure is adopted here.

## Verification

JavaScript calculations checked all exact-fit endpoints within 1e-6, strictly
increasing totals across Ranks 0 through 10, and normalized Profile translation
within 1e-8. The first-rank failure of Candidate A is intentional and reported.
All table rounding occurs after calculation. No dice simulations were needed.

## Recommendation and Decision Boundary

Candidate B with q = 1.33 is recommended as the next provisional purchasing
curve: it preserves the first-rank reference, stays close to the illustrative
high endpoint, and gives lower and middle Ranks less wealth than Candidate C.
It continues the user's earlier cumulative-growing-addition approach without
requiring acquisition price growth to share Scale's numeric factor.

Candidate C remains a valid alternative if Assets 5 should command roughly
13.67 extra packages instead of Candidate B's 9.58. Neither is proven correct
by fitting the endpoint. Selecting intended middle-rank wealth is the real
owner decision. No baseline, existing provision reference, or character build
is modified by this recommendation.
