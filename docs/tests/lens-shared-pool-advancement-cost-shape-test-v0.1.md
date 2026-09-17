# Shared-Pool Advancement Cost Shape Test

Date: 2026-09-06
Status: Shared-pool, point-buy direction accepted by the user. Cost ratios,
progression, award rate, and currency name remain candidates.

## User Direction

- Advancement uses one shared point pool, not level thresholds.
- Attributes and Derived Attributes should cost more than Fields or Specialties.
- Simplicity is preferred. Flat versus increasing per-Rank costs needs comparison.
- A Derived Attribute costing 20% of an Attribute is a proposed relationship,
  not an adopted price. The user's five/one and ten/two examples explain the
  ratio; they are not point-price fixtures.
- Buying new Lenses outside narrative acquisition remains unresolved.
- Ranked domains under discussion in Heralds are acknowledged, not imported as
  adopted LENS mechanics or assigned prices here.

## Existing Authority

The baseline's advancement implication says broader Lenses should normally cost
more, while explicitly leaving currency, prices, and progression unresolved.
The five-child architecture does not itself establish an advancement-cost ratio
(see the derivative-attribute survey). The current file review did not locate
an adopted 20% cost rule; retain the user's recalled relationship as a candidate.

Increasing a parent raises its broad capability and its children's ceilings,
but grants no free Derived ranks. Construction pools remain unchanged.
This test covers the current Rank horizon only, not the separate higher-rank work.

## Numerical Check Without Assigning Prices

Hold every other applicable Expression factor constant. Attribute A enters
directly; Derived Rank D contributes (1 + D/10). Increasing either by one gives:

- Attribute increase: relative Expression gain = 1/A.
- Derived increase: relative Expression gain = 1/(10 + D).

| Starting A / D | Raise Attribute once | Raise Derived once |
|---|---:|---:|
| 3 / 1 | +33.33% | +9.09% |
| 5 / 3 | +20.00% | +7.69% |
| 9 / 8 | +11.11% | +5.56% |

All three Derived increases stay within the existing parent cap. JavaScript
calculated the percentages. These are proportional Final Rating changes, not
percentage-point changes in success probability or proportional Effect counts.

The Attribute change affects all applicable routes through its family, including
unranked child defaults. A Derived change affects its own applicable routes.
Five different child increases do not multiply together on one ordinary route.
Consequently, five children explain breadth but do not establish equal numerical
value between one parent increase and one increase in each child.

## Cost Shapes

Flat by layer: each added Rank has the same cost within that layer. Higher-rank
purchases already produce a smaller relative gain under the current curve.
This does not mean a smaller absolute Rating increment with all other factors
fixed, nor does it remove the value of concentrating multiplicative layers.

Increasing by destination Rank: layer base cost times the Rank being purchased.
For example, the move to Rank 10 costs five times the move to Rank 2, regardless
of the eventual currency denomination. This slows deep development in addition
to the smaller relative gain. It may suit a deliberate pacing goal but is not
required to make point-buy work and does not require character levels.

If both layers use destination-Rank pricing, a base-price ratio of 20% remains
an actual purchase-price ratio of 20% only when buying the same destination Rank.
Different parent/child Ranks would change that exchange ratio. Flat layer prices
preserve it directly.

## Recommendation and Next Boundary

Test flat per-Rank costs that differ by layer before introducing escalation.
Retain Derived = 20% of Attribute as a candidate, not a balance finding.
Do not assign a new price to Tasks, Fields, Specialties, or Precision from their
construction costs alone. Their advancement relationships require explicit tests.

The next cost comparison should hold the candidate Attribute/Derived relationship
constant and compare the Derived-to-Training exchange rate, using existing builds
to contrast broad improvement with narrow improvement. No awards-per-session,
Lens-acquisition entitlement, domain pricing, or additional horizon is decided here.
