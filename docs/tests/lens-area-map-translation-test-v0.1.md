# Area Growth and Map Translation v0.1

Date: 2026-09-12.
Status: Half-hex threshold approved; measurement and 20% growth remain candidates.

Subsequent decision, 2026-09-12: the user's "Yep, okay" approved total covered
footprint as the growth quantity, retaining the original footprint as reference
and applying the half-hex threshold afterward without cell-count feedback.
The baseline and terminology reference now record that measurement. The original
comparison below remains evidence; final area bands and rate remain separate.

## Current Authority

The user clarified that a hex is affected when at least half its actual area is
covered, then instructed continuation. Exactly 50% counts; less than half does
not. This is now in the baseline and terminology reference. The correction
from "unaffected" to "affected" is honored.

The user favors 20% growth for the relationship between fives and twenties and
whole-unit map increments. This is the leading candidate, not the earlier 10%
recommendation. The conversation has not separately adopted a final growth rate
or a universal area-measurement procedure.

## Concrete Measurement Comparison

At proposed 20% growth, starting coverage ten gains two area units per additional
Effect Level: 10, 12, 14, 16, 18, 20. Five additional Levels double original
coverage. The first successful area Effect establishes the declared ten;
these increments concern the additional Levels allocated to growth.

This relationship measures total covered area. Increasing a circle's radius by
20%, or both dimensions of a similar rectangle by 20%, instead multiplies area
by 1.2 squared: ten becomes 14.4, not twelve. Doubling those dimensions makes
the area forty, not twenty. These are geometric comparisons, not new formulas
players must use or adopted radius limits. Range remains a separate question.

Recommendation: use total covered footprint for the growth candidate. Shape
and permissible placement still follow the manifestation's actual means;
coverage alone does not grant arbitrary tendrils, remote patches, or allied
target exclusion.

## Edge Classification Is Not the Footprint's Numeric Size

A supplied overlap example has four fully covered hexes, then edge hexes covered
60%, 50%, and 40%. The rule counts six affected hexes: the four full ones plus
the 60% and 50% hexes. The summed actual coverage is 5.5 hex-area equivalents.
The 40% hex is unaffected even though some footprint lies within it.

This example supplies overlap fractions to demonstrate the rule; it is not a
computed hex template or a geometric proof that a particular shape has those
intersections.

The script also computes an exact SQUARE-grid comparison to show why the two
quantities should not be assumed equal. A 6-by-2 rectangle on unit cell borders
covers twelve area units and includes twelve cells under a half-cell threshold.
Moving it half a cell vertically preserves its area but covers six cells fully
and twelve half-way, including eighteen cells at the same threshold.

That is a sensitivity example on squares, not an adoption of the hex rule for
every grid or a hex simulation. It establishes that a half-cell inclusion rule
does not guarantee a fixed affected-cell count from a continuous area budget.
Actual hex footprints also need placement to determine their intersections;
no exact hex-template counts are asserted here.

The user approved an inclusion abstraction. There is no need to reverse that
decision merely because inclusion and continuous area differ. However, using
the count of affected cells as a new base for growth would change the amount
of later growth according to map placement, contrary to the original-area
candidate. Do not silently substitute one quantity for the other.

## Proposed Play Procedure

1. Establish the declared footprint's coverage and permitted shape.
2. Calculate any earned growth from its ORIGINAL declared coverage.
3. Place the resulting footprint, then include each hex covered at least halfway.
4. Resolve actual Effects on included targets through existing rules.

Steps one and two use a proposed total-coverage measure; step three uses the
approved threshold. Step four does not grant full harm copied onto every target
or bypass ordinary opposition. Physical templates or a map tool can show the
footprint without demanding area calculations for every edge at the table.
This record neither builds such a tool nor establishes precision requirements
for judging near-half intersections.

There is no feedback from affected-cell count into the area budget or subsequent
growth in this proposed procedure. No numeric rounding rule is substituted for
the user's geometric test. This remains a recommendation for adoption, not an
additional decision silently included in the half-hex approval.

## Next Decision

Use total covered footprint, rather than radius/diameter or the rounded count
of included hexes, as the quantity increased by the candidate area-growth rule.
Then the preferred 20% relationship consistently means five additional Levels
double the original coverage, with the half-hex rule determining map inclusion.
Final area Difficulty bands and the one-unit starting reference remain open.

## Verification

`lens-area-map-translation-test-v0.1.cjs` passed exact threshold checks, supplied
hex-overlap accounting, exact rectangle/square intersections, and candidate
20% additive-area versus linear-dimension growth comparisons. It performs no
hex geometry simulation or probabilistic area-balance test.
