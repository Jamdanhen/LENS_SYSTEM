# Radius Declaration Tradeoff Test v0.1

Date: 2026-09-12

Status: bounded numerical test. User requested the test while expressing
comfort with slight overage. No universal growth cap or unlimited-growth rule
is adopted. Narrative coverage, not affected-hex count, is the output measure.

## Fixtures

Continue the circular example from the preceding test: first additional area
Effect gives radius 1.5 meters, covering 8.1621 unit-hex areas. Subsequent
expenditures add 20% of that starting radius, without compounding.

Coverage after k additional area Effects is 8.1621 * [1 + 0.2(k-1)] squared.
Five expenditures yield 26.4452, approximately 5.8% above 25. Reaching 50
requires nine, producing 55.1758; reaching 100 requires fourteen, producing
105.7808. Each expenditure is removed from available Effects once.

Compare raw Expressions 80, 160, and 320 before Difficulty. D1 uses 0.98,
D2 uses 0.588, and D3 uses 0.3528, flooring Final Rating once. The 50 and 100
direct declarations use D2 and D3 respectively. All attempts are permitted;
there is no opposition, paid spending, or additional contextual adjustment.

The larger-area entry procedure is unresolved. Test both a successful direct
declaration establishing its area and a direct declaration needing one
additional area Effect. These are sensitivity fixtures, not adopted rules.

## Probability Of Reaching The Target Area

Includes natural-01 continuations; 00 contributes no successful Effects.

| Raw Expression | Target | D1 expansion | Direct success establishes area | Direct needs one additional area Effect |
| --- | --- | --- | --- | --- |
| 80 | 50 | 0.87% | 47% | 37% |
| 80 | 100 | 0.37% | 28% | 18% |
| 160 | 50 | 66% | 94% | 84% |
| 160 | 100 | 16% | 56% | 46% |
| 320 | 50 | 99% | 99% | 99% |
| 320 | 100 | 99% | 99% | 99% |

Larger declarations remain useful in the low and middle test cases, under
either entry assumption. The small-first option is not universally dominant.

## Remaining Output At High Capability

At raw 320 and ordinary roll 40:

- D1 generates 28 Effects. Expanding beyond 50 costs nine, leaving 19.
- D2 generates 15 Effects, or 14 remaining if its area costs one additional
  Effect. The direct route leaves fewer under either interpretation.
- Expanding beyond 100 from D1 costs fourteen, leaving 14.
- D3 generates eight Effects, or seven after an additional area expenditure.

Remaining Effects retain their ordinary applicability. This is not an automatic
damage award or authority to assign an area contributor's output to harm.

Unlimited expansion can therefore become more efficient at high capability.
This finding concerns extending the same low declaration through much larger
outputs, not whether a slight boundary overage is acceptable. It is a fixture
comparison, not a claim about all character builds or all intervening targets.

## Recommendation

Do not reject the slight overage or add a map-driven correction. The user's
approximately-25 intention works in this fixture. Preserve the distinction
between tolerating that overage and adopting unrestricted growth across any
number of Difficulty bands. The high-output case remains a known boundary for
later larger-area/complementary-output comparisons; no ceiling is imposed here.

The accompanying CJS script checks the required expansion counts, probability
thresholds, and all ordinary rolls 2-99 in each comparison. All assertions pass.
