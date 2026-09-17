# First Area Difficulty Anchor Comparison v0.1

Date: 2026-09-12.
Status: Candidate area-band comparison. No anchor or growth rate adopted.

## Current Position

The user accepted total covered footprint as the growth measure, using the
original declared area as reference and applying the half-hex threshold only
for map inclusion. The baseline and terminology reference now record that rule.

Twenty-percent growth remains the user's preferred candidate. The next question
is the first area Difficulty band above the conversational ordinary one-unit
reference. Earlier tests used twenty-five as a fixture, not an adopted anchor.

## Candidates

Compare a first ceiling of five, ten, or twenty-five area units, doubling each
subsequent band. All are candidates; D1 is the first area challenge above one
unit in this comparison. The one-unit reference adds no area challenge, but
does not make the entire attack or other uncertain activity automatic.

| Area Difficulty | Start at 5 | Start at 10 | Start at 25 |
| --- | --- | --- | --- |
| D1 | Up to 5 | Up to 10 | Up to 25 |
| D2 | Up to 10 | Up to 20 | Up to 50 |
| D3 | Up to 20 | Up to 40 | Up to 100 |
| D4 | Up to 40 | Up to 80 | Up to 200 |
| D5 | Up to 80 | Up to 160 | Up to 400 |

Each band starts above the preceding ceiling. Doubling can continue in the
same comparison frame. This is total area, not radius, range, or target count.

## Hex Footprint Comparison

For these illustrations only, normalize one complete hex to one unit of area.
Use footprints made of whole hexes so border inclusion does not obscure the
anchor comparison. A center and successive complete rings contain 1, 7, 19,
and 37 hexes. These counts are not radii or universal templates for all powers.
The chosen shape still needs to be permitted by the actual manifestation.

| Complete footprint | Start at 5 | Start at 10 | Start at 25 |
| --- | --- | --- | --- |
| Center only: 1 | No added area challenge | Same | Same |
| Center plus first ring: 7 | D2 | D1 | D1 |
| Center plus two rings: 19 | D3 | D2 | D1 |
| Center plus three rings: 37 | D4 | D3 | D2 |

At five, a full first ring already crosses the first area band. At ten, the
first ring fits D1, with the next two footprints increasing one band each.
At twenty-five, both the seven-unit and nineteen-unit footprints remain D1.
This is the actual scope tradeoff; the arithmetic cannot decide the desired
default alone.

## Mechanical Significance

Use a pre-Difficulty Rating of 100 to isolate the AREA-ONLY assessment. No
other Difficulty burden, opposition, paid spending, or Function Band enters
this fixture. Apply the existing Difficulty curve and floor once at the end.

| Coverage requested | Start at 5: Final Rating | Start at 10 | Start at 25 |
| --- | --- | --- | --- |
| 7 | 58 | 98 | 98 |
| 19 | 35 | 58 | 98 |
| 37 | 21 | 35 | 58 |

These are illustrative complete Ratings for this isolated assessment, not
automatic success percentages or character benchmarks. A complete ranged or
otherwise constrained manifestation must still assess its actual full challenge.
This record does not adopt adding area ranks to range ranks, independently
multiplying separate Difficulty factors, or granting a helper free reach.

The difference between first anchors is mechanically substantial. Twenty-five
is markedly more generous for small and medium footprints; five is stricter.
Ten offers an intermediate playtest baseline, not a mathematically proven optimum.

## Relationship to the Preferred 20% Growth Candidate

| Original declared coverage at the first anchor | Each additional area Effect | Five additional Effects |
| --- | --- | --- |
| 5 | Adds 1 | Reaches 10 |
| 10 | Adds 2 | Reaches 20 |
| 25 | Adds 5 | Reaches 50 |

All retain the five-Effect doubling relationship. Ten matches the user's
two-area-unit increment at that anchor. The increase is based on the actual
original declaration: a declaration of seven would add 1.4 per additional
Level, not automatically two. Apply the approved footprint measurement and
half-hex inclusion rather than changing the declaration to its band's ceiling.

Starting at an anchor, five additional Levels reach the next anchor. Starting
somewhere inside a band, five double that actual starting coverage; they do not
necessarily reach the next band's ceiling. Growth above a band is not capped
by this comparison, and no additional damage is copied onto newly covered units.

## Recommendation and Next Decision

Use ten area units as the first working anchor, followed by twenty, forty,
eighty, and continued doubling. This puts one full surrounding hex ring in the
first area band while distinguishing broader footprints, and supplies the clean
two-unit growth increment at the first anchor under the preferred 20% candidate.

Five remains a stricter alternative; twenty-five remains a more generous one.
This recommendation concerns the first anchor and ladder, not silent adoption
of the growth percentage, radius rules, or a new method of combining Difficulty
burdens. Keep those boundaries explicit when continuing the complete Expression
tests after the user chooses the anchor.

## Verification

`lens-area-first-anchor-comparison-v0.1.cjs` passes exact threshold checks at
and immediately above D1-D10 for all three candidates, the ordinary one-unit
reference, complete hex-ring counts, the fixed Rating fixtures, and the 20%
five-additional-Level doubling relationship. No simulated encounter outcomes,
empirical playtest evidence, or probability claims are produced.
