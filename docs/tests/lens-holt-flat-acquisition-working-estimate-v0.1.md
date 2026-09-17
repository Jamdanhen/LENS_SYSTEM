# HOLT Acquisition: Flat Reference And Limitation Estimates

Subsequent decision: after reviewing the initial-only versus recurring tests,
the user approved limiting reductions to initial HOLT acquisition. Later HOLT
and Axis Rank purchases do not receive those reductions. Historical open
questions and comparison reasoning below are preserved as development history.
HOLT 80 remains the working advancement test price; Axis 35 remains a candidate.

Status: User-approved working acquisition estimate. Development comparisons
use HOLT 80 and candidate Axis 35. No final balance claim or new creation pool.

## Decision

The user clarified that 80 is the starting estimate for complete HOLT
acquisition, including Rank 1 and defined Access, with no Axis Ranks. It is
not an 80-point initial Rank charge plus another charge for Access.

The user's approximate average of twenty out of twenty-five Derived Attribute
areas is a calibration thought, not a counted scope rule, measured average,
or four-points-per-Axis tariff. Some HOLTs naturally have narrower scope
without accepting a separate limitation. Do not reconstruct the abandoned
counting exercise to derive individual acquisition costs.

Apply the overall whole-HOLT limitation to the 80-point reference:

| Limitation estimate | Initial acquisition | With one purchased Axis Rank |
| --- | ---: | ---: |
| None | 80 | 115 |
| Modest, 25% | 60 | 95 |
| Substantial, 50% | 40 | 75 |
| Severe, 75% | 20 | 55 |

All four purchases include the same initial Rank ceiling of 1 and no free
Axis development. Restrictions differ; the discounted capability is not the
unrestricted one at a bargain price. Open unranked permission can already be
effective through the Character's existing construction.

## Follow-Through

Using unchanged later development prices for the test, HOLT Rank 2 with one
Axis at Rank 2 costs acquisition + 80 + 70. Totals are 230, 210, 190, and
170 respectively. After the first Axis purchase, each path needs a further
115 to buy the parent increase and the next Axis Rank. Access restrictions
remain; advancing Rank does not remove them.

These calculations do not decide whether limitations should adjust future
advancement. They isolate the accepted acquisition estimate from that still
unresolved question. Changing an acquisition estimate is not a refund or a
grant of extra Axis Ranks.

## Applicability

- Use the actual overall combined burden. Do not add or multiply several
  discount percentages describing the same affected capability.
- Band percentages are estimates, not probabilities of availability.
- A limitation already included in this overall assessment does not produce
  a second rebate merely because it is also recorded as an Access Condition.
- A limited individual Axis does not automatically justify a discount on all
  the HOLT's permissions. Partial limitation treatment remains open.
- Narrow thematic scope alone is not automatically a limitation. No new
  individual scope surcharge or discount schedule is introduced.
- Meaningful countermeasures and favorable timing can legitimately make a
  restricted capability useful. Assess actual campaign burden without
  inventing penalties to negate successful planning.

## Assessment And Next Question

The model supplies a simple whole-purchase estimate and preserves separate
Axis development. It does not require an Axis census or a separate fee for
Access. The low-cost Severe option intentionally makes a restricted HOLT
accessible; it is not valueless until developed.

The next real cost question is whether accepted limitations affect only the
initial purchase or also future development. The displayed calculations hold
advancement unchanged as a control, not as an adopted answer. Raising this
question must not reopen the 80-point acquisition reference or its contents.

Verification: JavaScript computed four acquisition rows and checked both
development increments for each. Initial reductions are 0/20/40/60; adding
Axis Rank 1 always adds 35, and the next parent-plus-Axis step always adds
115 under the test controls. This is arithmetic, not a probability or play test.

Earlier records: `lens-holt-rank-80-advancement-test-v0.1.md` and
`lens-holt-acquisition-adjustment-comparison-v0.1.md`. The latter's split
80-plus-premium proposal is superseded, not the current pricing method.

## Follow-Up: Initial-Only Versus Recurring Reductions

Status: The user authorized both tests and expressed a preference for the
reduction applying at initial acquisition. Preference is not recorded as final
adoption. Base acquisition and its 80/60/40/20 estimates remain unchanged.

### Comparison Controls

Start before acquiring the HOLT. Both routes purchase Rank 1 with defined
Access and no Axis Ranks. The same whole-HOLT limitation persists in both.
All development is narratively eligible and respects the parent ceiling.

A: initial-only reduction. Later HOLT Ranks cost 80 and Axis Ranks cost the
candidate 35, including the first purchased Axis Rank.

B: recurring reduction. The same percentage reduces acquisition, each added
HOLT Rank, and each purchased Axis Rank. This explicitly tests discounting
both development layers; it does not claim to test a third, parent-only method.

For target HOLT Rank h and one Axis at Rank a, with 0 <= a <= h:

```text
Initial acquisition = 80 x remaining fraction
Undiscounted development = (h - 1) x 80 + a x 35

A = initial acquisition + undiscounted development
B = initial acquisition + undiscounted development x remaining fraction
```

The comparison changes price, not permission, output, Rank ceilings, or the
limitation's fictional operation. Percentages are not uptime probabilities.
No new rounding rule or advancement currency is introduced.

### Development Prices

| Reduction | A: later HOLT / Axis | B: later HOLT / Axis |
| --- | --- | --- |
| None | 80 / 35 | 80 / 35 |
| 25% | 80 / 35 | 60 / 26.25 |
| 50% | 80 / 35 | 40 / 17.5 |
| 75% | 80 / 35 | 20 / 8.75 |

### Complete Purchase And Development Costs

| Reduction | A: HOLT 5, Axis 5 | B: HOLT 5, Axis 5 | A: HOLT 10, Axis 10 | B: HOLT 10, Axis 10 |
| --- | ---: | ---: | ---: | ---: |
| None | 575 | 575 | 1,150 | 1,150 |
| 25% | 555 | 431.25 | 1,130 | 862.5 |
| 50% | 535 | 287.5 | 1,110 | 575 |
| 75% | 515 | 143.75 | 1,090 | 287.5 |

These totals include initial acquisition, unlike the earlier advancement-only
1,070-point example. At 25 points per session from zero savings, investing
all awards in the HOLT 10 / Axis 10 goal takes 46/46/45/44 sessions under A
and 46/35/23/12 under B. Partial capabilities remain useful during development.
Session counts are illustrative reference pacing, not mandatory waiting periods.

### Tradeoffs

- A compensates accepting the restricted capability at entry, then keeps
  equal Rank purchases at equal prices. Its largest total saving remains 60.
  It preserves simple whole-number development prices at the tested values.
- B continually recognizes that developed capability remains restricted.
  At 75%, the same development budget purchases four times as many eligible
  Rank increments within that HOLT, until caps intervene. That is a real
  pacing difference, not proof that the restriction is fake or the build
  is automatically overpowered.
- A's drawback is that compensation becomes proportionally small over a
  long development path: 60 off the 1,150 unrestricted total is about 5.22%,
  while the limitation still applies. That is the explicit tradeoff of a
  one-time acquisition concession rather than lifelong discounted development.
- B creates a stronger advancement incentive to accept restrictions. When
  Access is available, purchased Ranks remain fully effective unless the
  actual limitation also affects execution. No invented weaker output is
  added to compensate for the cheaper prices.
- A does not require refusing legitimate countermeasures; B does not require
  inventing encounters to keep a limitation painful. Both depend on assessing
  the real package in its campaign rather than treating the percentage as a
  measured loss of utility.

### Recommendation And Decision Boundary

Recommend A for the current simple, shared advancement model: discount the
initial HOLT acquisition only, while keeping later Rank prices unchanged.
It reflects the user's stated inclination and the desire to set campaign
pace through session awards rather than limitation-specific development
rates. This is a design recommendation, not an empirically proven balance.

The remaining choice is to accept the one-time compensation model. Do not
silently adopt it from authorization to compare. Axis 35 remains a candidate,
and limitation removal, partial-Axis valuation, and starting funding are not
decided by choosing between these two approaches.

Verification: JavaScript calculated four displayed reduction cases. It also
checked every target HOLT Rank 1-10 and one Axis Rank from 0 to its parent,
under all four reductions: 260 combinations and 1,560 assertions. Checks
covered positive costs, equality without reductions or later purchases,
ordering of models, and A minus B equaling the reduction times later
undiscounted development. No resolution probabilities or play outcomes were
simulated.

## Adopted One-Time Reduction And Eligible Buyoff

The user approved the initial-only model after asking why the recommendation
changed. The deciding design consideration was advancement incentives, not
that recurring reductions were mathematically invalid. Recurring reductions
make restricted HOLTs develop faster per point; the one-time model reduces
entry cost and retains common subsequent Rank prices. The persistent burden
with diminishing proportional financial compensation was disclosed.

Subsequently approved by the user: if the setting and narrative permit permanently
reducing a limitation, estimate the additional acquisition cost as the
difference between the old and new complete acquisition estimates. Examples:
Severe 20 to Substantial 40 would add 20; Substantial 40 to unrestricted 80
would add 40; Severe 20 to unrestricted 80 would add 60. This does not
reprice prior Axis or HOLT advancement or add another surcharge.

The acquisition difference does not itself grant permission to remove a defining
restriction. A non-negotiable implementation limit remains non-negotiable.
Ordinary satisfaction of an Access Condition or a situational countermeasure
is not automatically permanent removal and should not trigger a new charge.
The user explicitly excluded non-negotiable restrictions such as Heralds
Sorcery's defining one-manifestation limit. Eligible buyoff is now a working
rule; no refund policy or automatic charge for unrelated story events is
established by it. Past acquisition and advancement comparisons remain
historical rather than being retroactively rewritten.
