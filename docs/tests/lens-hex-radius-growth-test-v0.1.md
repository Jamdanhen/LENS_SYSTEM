# Hex Radius Growth Test v0.1

Date: 2026-09-12

Status: experimental comparison, not adoption of radius growth, footprint
shape, or a new Difficulty rule. The current user-authorized lane is to test
actual area growth before returning to complementary-output applications.

## Candidate

- Ordinary successful attack: one hex.
- First additional Effect Level assigned to area: center plus first ring,
  seven affected hexes.
- Each subsequent area expenditure: add 20% of the initial expanded radius,
  not 20% of the growing radius.
- Apply the approved threshold: a hex counts when at least half its actual
  area is covered.
- Preserve the working 25 / 50 / 100 area ladder. This check does not adopt a
  ceiling, price a larger declaration, or resolve Difficulty boundaries.
- Effects assigned to area are not also assigned to damage. No new helper,
  delivery, or power-specific procedure is introduced.

The radius proposal differs from the earlier adopted total-covered-area growth
reference. This record tests that proposed revision without amending the baseline.

## Method

Use regular hexes with one-meter adjacent-center spacing for this fixture.
Each hex has area sqrt(3)/2 square meters. Report continuous coverage in unit-hex
area equivalents, not square meters and not affected-cell count.

Compute polygon intersections with each cell; include fractions at least 0.5.
The first control scales the exact seven-hex outline about its center. The
second uses the previously discussed approximate 1.5-meter circular radius.
Both initially affect seven hexes, but their actual covered areas differ.

## Results

| Additional area Effects | Radius factor | Scaled seven-hex outline: covered area | Affected hexes | Circle radius (m) | Circle covered area | Circle affected hexes |
| --- | --- | --- | --- | --- | --- | --- |
| 0 | Ordinary footprint | 1.00 | 1 | Not used | 1.00 | 1 |
| 1 | 1.0 | 7.00 | 7 | 1.5 | 8.16 | 7 |
| 2 | 1.2 | 10.08 | 7 | 1.8 | 11.75 | 13 |
| 3 | 1.4 | 13.72 | 19 | 2.1 | 16.00 | 19 |
| 4 | 1.6 | 17.92 | 19 | 2.4 | 20.89 | 19 |
| 5 | 1.8 | 22.68 | 19 | 2.7 | 26.45 | 31 |

The earlier conversational 7 / 10 / 14 / 18 / 23 sequence approximated continuous
coverage for the scaled outline. It did not establish those affected-hex counts.

The user's approximate endpoint intuition is supported for covered area:
22.68 or 26.45 is near 25. It is not supported as a literal count of affected
hexes. The outline reaches 19; the circle reaches 31.

Coverage grows continuously, while affected-hex counts change in steps. The
circle's fourth expenditure grows the boundary but does not add a half-covered
hex in this centered fixture. The fifth includes twelve additional hexes.
The user subsequently rejected treating this as a practical defect: narrative
area increases are primary, and each expenditure need not add a map position.

## Validation

The accompanying Python script verifies analytic hex area, identical and
disjoint intersections, an exact half-plane cut, conservation of total covered
area, bounded coverage fractions, nested outline growth, sixty-degree outline
rotation, and rotating both grid and outline into flat-top orientation.

Circle counts agree at 360, 720, and 1,440 polygon vertices. At the highest
resolution, continuous area differs from the analytic circle by less than
0.001 unit-hex areas. All tested inclusion fractions are safely away from the
threshold relative to numerical tolerance. These are geometric checks, not a
simulation of game balance.

Results assume centered footprints and this grid spacing. They are not universal
counts for off-center templates or other shapes. No such extra study is needed
before deciding whether this basic progression matches the intended play.

## Recommendation And Boundary

For further radial-area discussion, the circular template is the clearer
representation of a growing radius. Keep its actual progression visible:
1 ordinary hex, then 7 / 13 / 19 / 19 / 31. Do not advertise each expenditure
as a guaranteed increase in affected-hex count or round a footprint to 25 to
make the ladder fit.

The user rejected making stepped map behavior the next acceptance decision.
Map translation does not govern the value of narrative area growth.
The test does not require a separate procedure for someone spreading another
character's effect. Difficulty integration and any higher-band growth remain
unresolved, as does final adoption of this candidate.

## Reproduction

Run `lens-hex-radius-growth-test-v0.1.py` with Python and Pillow. It prints the
numeric results and validation summary, then generates the adjacent PNG.
The PNG was visually inspected for count labels, rendered footprints, and layout.
