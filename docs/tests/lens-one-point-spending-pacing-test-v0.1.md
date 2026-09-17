# One-Point Boost and Reroll: Spending and Advancement

Status: Completed bounded price comparison. User agreed to the one-point
recommendation and requested completion of its tests. Retain one point per
boost and one point per paid reroll as provisional working prices.

## Controls

- One boost before rolling and one paid reroll per Expression; both permitted.
- Replacement reroll retains the original boost, even when the new result is worse.
- x1.20 is the tested boost magnitude. No further boost is applied to the reroll.
- Current flat development prices: Specialty/Precision 5, Task/Field 10,
  Axis 15, Derived Attribute 20, HOLT 40, Attribute 60.
- Award sensitivities: 5, 14, 17, 25, and 50. These are not mandatory totals.
- No new session cap, replenishment grant, compensation award, or separate pool.
- Existing story-delivered development and optional milestones remain additional;
  neither is needed to make the base comparison work.
- Routine Automatic actions remain Automatic. No extra rolls are manufactured
  to create spending opportunities.

## Fixed-Spending Comparison

At the current three-meaningful-category reference of 14 points per session:

| Spent per session | Retained for advancement | Retained over 10 sessions | Sessions to save 60 for an Attribute Rank |
|---:|---:|---:|---:|
| 0 | 14 | 140 | 5 |
| 1 | 13 | 130 | 5 |
| 2 | 12 | 120 | 5 |
| 4 | 10 | 100 | 6 |
| 8 | 6 | 60 | 10 |
| 14 | 0 | 0 | No new savings |

These are affordability illustrations, not guaranteed advancement dates.
They assume funds are available for the chosen immediate spending and that
the remainder is saved for the named purchase. Narrative eligibility still
applies. An existing reserve can also finance spending above the current
award, but that reserve then declines.

Over ten sessions, spending two each session trades 20 potential advancement
points for immediate help: the cost of one Derived Attribute Rank, two
Task/Field Ranks, or four Specialty/Precision Ranks. These are alternatives,
not simultaneous losses. The cost does not disappear simply because rounded
session counts sometimes remain unchanged.

At an award of 5, spending two leaves 3 and spending four leaves 1. At 25,
the same spending leaves 23 or 21. Slower-award tables make immediate help
more expensive relative to growth; faster-award tables make it easier to
afford. This is campaign pacing discretion, not a defect requiring an
automatic award adjustment.

## Frequent-Use Stress Case

Reuse the exhaustive independent-die comparison at unboosted Rating 60.
The strategy below buys rerolls after failure only. It does not describe
every possible player decision, especially retries seeking a better margin.

| Strategy | Uncertain Expressions per session | Expected spending | Expected remainder from 14 |
|---|---:|---:|---:|
| Reroll failures only | 5 | 2.0 | 12.0 |
| Reroll failures only | 10 | 4.0 | 10.0 |
| Boost each, reroll failures | 5 | 6.4 | 7.6 |
| Boost each, reroll failures | 10 | 12.8 | 1.2 |

These rows use the control allowing all initial failed faces to be rerolled;
they do not adopt special-result eligibility. Excluding initial 99/100 lowers
the corresponding spending to 1.9, 3.8, 6.3, and 12.6. Fractional numbers
are expectations across rolls, not fractional prices or guaranteed budgets.
The expectations assume sufficient previously earned funds.

At Rating 60, ordinary success in the all-failed-faces control is 60% without
spending, 72% with the boost, 84% with failure-only reroll, and 92.16% with
both. Boost also changes the available Effect margin; it is not merely a
less efficient reroll. At high Ratings, boosts can retain value through
Effects even after success probability approaches its ceiling. Neither
option needs identical returns to justify the same simple price.

Maximum expenditure remains two points per Expression. Across ten Expressions,
a player choosing both every time could spend 20, including rerolling successes.
That is not the 12.8-point failure-only strategy above. No repeat purchase on
one Expression can increase this maximum.

## Bank Safety

Nine twelve-session ledgers test awards of 5/14/25 against desired spending
of 2/8/20. Each begins with 20 previously earned points solely as a fixture,
not a starting grant or creation-carryover rule. Expenditure occurs before
the end-session award. Unaffordable purchases cannot be made; no negative
balance or borrowing from future awards is permitted in these fixtures.

For example, at award 14 and desired spending 20, only 174 of the requested
240 points can be spent over twelve sessions. The remaining 14 arrives at
the end of the final session. Saving cannot fund unlimited help, and the
existence of an eventual session award does not make it available early.

## Conclusion and Stopping Boundary

Retain one point for either option, two when both are used. Light use offers
meaningful help while preserving advancement. Heavy use deliberately trades
long-term development for immediate outcomes. Do not increase awards to
refund that choice, require equal mathematical returns, or introduce another
session cap merely because frequent spending is possible.

This completes the numerical pricing pass. The evidence supports a working
price, not a claim of observed player satisfaction or final campaign balance.
Reopen it if actual play reveals a concrete problem, not to generate another
equivalent comparison. Special-result eligibility and combination with other
Resonance remain separate unresolved rules, not reasons to repeat this pass.

## Verification

`lens-one-point-spending-pacing-test-v0.1.ps1` completed 35 pacing cases,
9 bank-ledger cases, and 24 expected-use cases with 342 checks. It reuses the
prior 120,000 die-pair enumeration and replacement-outcome fixture. Checks
cover affordability thresholds, bank conservation, no borrowing, bounded
per-Expression spending, and the prior outcome mathematics.
