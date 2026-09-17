# Flat Versus Current-Rank Advancement Test

Date: 2026-09-06
Status: User-requested comparison; neither pricing model or award rate adopted.

## Controls

Flat prices per added Rank: Attribute 12, Derived 4, Task/Field 3,
Specialty/Precision 2. Compare the user's current-Rank schedule with the same
coefficients. Both use the agreed flat buy-in for a permitted unranked purchase.
Starting budgets, Rank 10 horizon, Derived parent caps, and Access remain intact.

Use the saved concept-led guide and clinician from
`lens-concept-led-25-50-100-rebuild-test-v0.1.json`. Their existing ratings are
not reallocated. Match the preceding current-Rank pricing test's portfolios.
All other Expression factors are held constant. No new Difficulty or roll is
assigned. Percentage gains describe Rating, not success probability or Effects.

## Identical Improvements, Different Prices

| Portfolio | Flat cost | Current-Rank cost | Signature Rating gain |
|---|---:|---:|---:|
| Guide: Mobility 7 -> 8 | 12 | 84 | 14.29% |
| Guide: Coordination 6 -> 7; Discharge 8 -> 9; Firearms 8 -> 9; Handguns 6 -> 8 | 14 | 98 | 33.18% |
| Guide: Handguns 6 -> 10; Revolvers 8 -> 10 | 12 | 94 | 38.89% |
| Clinician: Mobility 6 -> 7, then Coordination 6 -> 7 | 16 | 96 | 23.96% |

The gains are identical between price models because the resulting ranks are
identical. Their breadth differs between portfolios, as recorded in the earlier
test. No claim that signature improvement alone establishes purchase value.

## Six-Layer Ceiling Test

Guide starts Mobility 7, Coordination 6, Discharge 8, Firearms 8,
Handguns 6, Revolvers 8. Raise all six entries to 10, with the parent raised
before any otherwise capped child increase.

| Layer | Increases | Flat cost | Current-Rank cost |
|---|---:|---:|---:|
| Mobility | 3 | 36 | 288 |
| Coordination | 4 | 16 | 120 |
| Discharge | 2 | 6 | 51 |
| Firearms | 2 | 6 | 51 |
| Handguns | 4 | 8 | 60 |
| Revolvers | 2 | 4 | 34 |
| Total | 17 | 76 | 604 |

This develops one complete aligned line, NOT every capability on the character.
Its Base Expression grows from 104.50944 to 320: approximately +206.19%, or
3.062 times the initial Rating. No HOLT or Scale change is supplied.

## Pacing Sensitivity

With zero initial savings, no other spending, and 20 points awarded after each
session: the flat model funds each smaller portfolio after one session and
the complete line after four; current-Rank pricing funds each smaller portfolio
after five sessions and the complete line after 31.

This matched-award comparison does NOT prove flat pricing is inherently too fast.
At an illustrative three points per session, flat pricing funds:

- Guide Attribute portfolio: four sessions.
- Guide mixed portfolio: five sessions.
- Guide narrow portfolio: four sessions.
- Clinician portfolio: six sessions.
- Full guide line: 26 sessions.

Three is a sensitivity fixture, not an award recommendation. One award-rate
rescaling cannot match every starting Rank. For example, an Attribute increase
always takes four sessions from zero savings at flat price 12 and award 3.
Under current-Rank pricing and award 20, 1 -> 2 takes one session, 3 -> 4 two,
5 -> 6 three, and 9 -> 10 six. Other purchases or prerequisites can lengthen
these waits; these are funding dates, not narrative training permissions.

## Findings

JavaScript summed every purchase, checked the Derived endpoint cap, calculated
relative gains, and compared funding dates using ceiling(total cost / award).
No random simulation or exhaustive optimization across all character entries
was needed for the requested comparison.

Flat pricing offers constant purchase pacing within a layer. Current-Rank pricing
offers cheaper low-rank growth and progressively more expensive mastery. Both
retain the same flat buy-in for the first Rank. A stronger narrow multiplier
stack is not made equally useful to broad development merely by matching its cost.

The current-Rank candidate is worth retaining if the desired progression is
quicker early development with slower high-rank refinement. Flat pricing is a
viable alternative if constant Rank prices are preferred, but it needs its own
award calibration. Neither test settles fair awards, complete layer balance,
new Lens acquisition, or higher-Horizon costs.
