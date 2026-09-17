# LENS Opposed Bargain: 25 / 50 / 100

Status: Diagnostic test, not a new character tier or adopted social subsystem.
Date: 2026-09-05

## Question and Stakes

Can a bargaining specialist outperform the existing experienced local
shopkeeper without treating routine shop work as a low-probability roll?

The customer negotiates for a specific modest discount on a used tool set.
Both parties are willing to negotiate; the price is negotiable, but the
merchant prefers the stated price. The concession is possible and meaningful,
not a demand that creates permission merely by being spoken.

The customer's successful Expression secures the declared concession.
Successful merchant opposition defeats that request. If neither succeeds,
the request has not been secured: the merchant's offer remains unchanged,
without either side having won a further concession. This is not a free
repeat-until-success procedure. Neither outcome forces an unwanted purchase.

No universal Effect-Level-to-discount conversion, compulsory mind control,
financial Load, or negotiated price table is introduced.

## Controls and Sources

- Existing merchant A is unchanged from
  `lens-concept-led-25-50-100-rebuild-test-v0.1.json`.
- The new specialist also spends exactly 25 / 50 / 100. Its allocations are
  a diagnostic concept, not the definition of an adventurer or veteran.
- Both operate at Scale 1. No HOLT, equipment modifier, preparation bonus,
  personal connection, condition penalty, or generic merchant bonus applies.
- The opposing Expression supplies resistance. No generic Difficulty is added
  for the same resistance. No extra language multiplier is stacked on commerce.
- Use the successful-margin opposition procedure recorded in
  `lens-concrete-equipment-placement-opposed-play-test-v0.1.md`: one successful
  roll defeats one failed roll; when both succeed, compare successful margins.
  Both failures or equal margins yield no successful concession. The inherited
  one-success branch and tie handling remain test controls where not otherwise
  adopted; this record does not independently lock them.
- Retain the current ordinary-roll 98 ceiling and no exceptional-result rule.
  Neither rating reaches 98, so that ceiling changes none of these counts.
- Exact enumeration of all 100 x 100 independent percentile pairs, not random
  simulation. Full decimal ratings are retained before comparing margins.

## Complete Specialist Spending

Concept: Traveling secondhand-goods negotiator with ordinary travel and life
competence. Strong interpersonal bargaining, less developed scholarly and
physical capability. Not a fully developed combat adventurer.

```text
ATTRIBUTES: 25
Might 3 | Mobility 4 | Psyche 5 | Influence 8 | Leverage 5

DERIVED ATTRIBUTES: 50
Strength 1, Toughness 1, Resistance 1, Vigor 2, Resilience 1 = 6
Movement 2, Maneuverability 1, Stability 1,
  Coordination 2, Responsiveness 2 = 8
Cognition 3, Learning 2, Awareness 3, Insight 3, Resolve 2 = 13
Presence 3, Projection 3, Connection 3, Manipulation 6, Control 2 = 17
Assets 1, Network 2, Authority 1, Reputation 1, Background 1 = 6

TASKS: 52
Persuade 8, Convey 6, Observation 5, Inference 4, Planning 4,
Deceive 4, Command 3, Pilot 3, Navigate 2, Traverse 3,
Block 3, Dodge 3, Research 2, Teaching 2

FIELDS: 40
Retail commerce 8, English 6, Music 4, Passenger vehicles 4,
Local geography 4, Bookkeeping 4, Survival 4, Medicine 3, Cooking 3

SPECIALTY: 8
Secondhand goods 8, under Retail commerce

PRECISION: 0
None purchased. This layer remains optional.

TRAINING: 52 + 40 + 8 = 100
```

All Derived Ranks fit their parents. All purchased ranks fit the current
Rank 10 horizon. Unlisted Training entries are unranked, not closed Access.
Field and Specialty names are test choices subject to existing scope guidance.

The merchant's existing complete spending remains in the source JSON and
companion rebuild record: 25 Attributes, 50 Derived, 60 Tasks, 40 Fields,
no Specialty or Precision. Nothing was removed or added for this contest.

## Complete Relevant Stacks

The merchant explains the costs, comparable value, and why the present price
is reasonable. Cognition supplies that reasoning; Persuade supplies practiced
argument; Retail commerce supplies relevant expertise. Cognition is not an
automatic defense stat or a free substitution for every social encounter.

```text
MERCHANT
Psyche 6                         6
Cognition 6                    x1.6
Persuade 6                     x1.6
Retail commerce 9              x1.9
Specialty / Precision          x1 / x1
Other modifiers               x1
FINAL                         29.184
```

The specialist adjusts incentives and frames a mutually acceptable exchange
to change the seller's decision. Manipulation supplies that external change;
Persuade supplies the practiced approach. Secondhand-goods expertise addresses
wear, resale value, and used-market tradeoffs, without requiring deception.

```text
SPECIALIST
Influence 8                      8
Manipulation 6                 x1.6
Persuade 8                     x1.8
Retail commerce 8              x1.8
Secondhand goods 8             x1.8
Precision                     x1
Other modifiers               x1
FINAL                         74.6496
```

## Exact Outcomes

| Branch | Pairs out of 10,000 | Probability |
|---|---:|---:|
| Specialist succeeds, merchant fails | 5,254 | 52.54% |
| Both succeed, specialist has higher margin | 1,740 | 17.40% |
| Merchant succeeds, specialist fails | 754 | 7.54% |
| Both succeed, merchant has higher margin | 406 | 4.06% |
| Both fail | 1,846 | 18.46% |
| Equal successful margins | 0 | 0% |

The requested concession succeeds in **69.94%** of exchanges. The merchant
actively wins in **11.60%**. Neither succeeds in **18.46%**. Thus the concession
is not secured in **30.06%**, which is not the same as a 30.06% active merchant
victory. Unequal fractional rating parts prevent exact successful-margin ties
in this particular pairing.

### Concrete Rolls

```text
Specialist 40: margin 34.6496
Merchant   10: margin 19.184
Specialist wins; net margin 15.4656 -> 2 Effect Levels.

Specialist 65: margin 9.6496
Merchant   10: margin 19.184
Merchant wins the opposition; the requested concession fails.

Specialist 80: fails
Merchant   50: fails
No successful concession; no new negotiated agreement is established.
```

Two Effect Levels do not automatically mean twice the discount, two wounds,
or an invented Background Condition. This probe establishes who wins the
declared bargain; numerical conversion of additional effects is not settled
by importing combat consequences into it.

## Narrow Applicability Control

Hold every rank and other control fixed, but negotiate factory-new goods
where secondhand expertise makes no distinct contribution. This is a
comparison scene, not removal of purchased ranks or a worse merchant.

```text
Specialist: 8 x 1.6 x 1.8 x 1.8 = 41.472
Merchant:                         29.184

Specialist wins:                  36.94%
Merchant actively wins:           21.17%
Neither succeeds:                41.89%
```

The specialist remains capable outside the Specialty, but loses its narrow
advantage. These are contested outcomes, not success rates for ordinary sales.

## Finding and Next Step

This test supports the user's distinction: routine livelihood competence and
competitive bargaining superiority are different demands. Purchased depth and
concept-led allocations provide a substantial advantage using existing rules.
No merchant bonus, mandatory Precision, or larger universal budget is needed
to produce that pattern. One pairing does not establish universal balance.

The specialist sacrifices the merchant's stronger Bookkeeping, Planning,
Inference, Cognition, and broader Leverage rating. The purchase is not a free
upgrade to every aspect of life. More experienced merchant countermeasures
remain possible through the existing construction architecture, not a tier
invented by this test.

Keep 25 / 50 / 100 as the working construction budget. The next useful step
is a completeness check of one existing character: identify the remaining
unpriced starting possessions, Access, and stable character elements before
another broad budget revision. Do not reopen completed routine-work tests.

## Verification

Companion PowerShell script validates the specialist's spending and parent
caps, reads the unchanged merchant ranks, and enumerates both comparisons.
Independent JavaScript arithmetic produced the same ratings and branch counts.
No baseline doctrine, previous character allocation, or price rule is changed.
