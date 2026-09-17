# Broader Universal Range Bands With Built-In Resonance

Date: 2026-09-12
Status: User-approved comparison completed. All distances, band-to-Difficulty
assignments, and range-property values remain candidates. No baseline changes.

## Direction and Controls

The user prefers a universal Short/Medium/Long distance reference, with
equipment or other applicable Lenses supplying range-specific Resonance.
This supersedes the previous recommendation to adopt weapon-relative anchors;
that recommendation was not approved. The user also requested broader bands.

Compare two layouts, with inclusive upper bounds:

| Band | Test Difficulty | Layout A | Layout B |
| --- | --- | --- | --- |
| Short | D1 | Through 20 m | Through 50 m |
| Medium | D2 | Over 20 through 100 m | Over 50 through 200 m |
| Long | D3 | Over 100 through 500 m | Over 200 through 1,000 m |

Both layouts are illustrative design candidates, not peer-derived calibration.
The labels do not inherently require D1/D2/D3; that assignment is an explicit
test assumption. Distances above Long remain unmapped, not impossible, automatic,
or permanently D3. This comparison is within one personal reference frame; it
does not override existing Scale doctrine or establish universal limits across
all Scales. Within the frame, the same distance band applies to every method.

Retain 0.98 x 0.6^(D-1), final-only floor, ordinary Effects, actual reach and
Access, normal action division, separate Function Bands, and the existing
max(0, 1 + Resonance - Dissonance) context pool. No smoothing, range-relative
reclassification, additional roll, or Effects-to-distance conversion is added.
Routine activities do not acquire mandatory rolls from this range table.

Main probes use pre-Difficulty Ratings 20, 80, 100, 180.280512, and 320, excluding
the range benefit being tested. These are sensitivity controls, not character
competence labels or new complete builds. The 180.280512 value matches the
earlier signature route's magnitude; support must actually apply before use.

For the clean Rating-100 control, equipment is neutral x1.00, an existing
allowed equipment value. This isolates the proposed range property rather than
stacking it automatically on old weapon placements whose functional scope has
not been finalized. A separate x1.20/x1.25/x1.30 sensitivity is conditional on
that ordinary modifier describing a genuinely distinct contribution.

## Broader Bands Without Equipment Support

| Distance | Previous universal ladder | Layout A | Layout B |
| --- | --- | --- | --- |
| 20 m | D2 / 58 | D1 / 98 | D1 / 98 |
| 40 m | D3 / 35 | D2 / 58 | D1 / 98 |
| 100 m | D4 / 21 | D2 / 58 | D2 / 58 |
| 200 m | D5 / 12 | D3 / 35 | D2 / 58 |
| 500 m | D6 / 7 | D3 / 35 | D3 / 35 |
| 1,000 m | D7 / 4 | Unmapped | D3 / 35 |

Each number is a Final Rating for the same raw 100, not an opposed win chance.
Most of the improvement at 500 meters comes from the broader D3 band, before
any range Resonance is introduced. That must not be attributed to equipment.

Layout A already moves 100 meters from D4 to D2 and 500 meters from D6 to D3.
Layout B additionally treats 21-50 meters as Short and 101-200 meters as Medium,
and extends Long to 1,000 meters. Arithmetic alone cannot establish which is
the desired encounter feel. Layout B makes distance less discriminating across
those intervals; it is not an accuracy-validated rifle table.

## Built-In Range Property Fixtures

These are illustrative property profiles, not final pistol/rifle statistics:

| Property profile | Short Resonance | Medium Resonance | Long Resonance |
| --- | --- | --- | --- |
| No range support | 0 | 0 | 0 |
| Close-range support | +0.20 | 0 | 0 |
| Distance support | 0 | +0.30 | +0.60 |

Use only the current band's contribution, not the sum of all three entries.
The equipment/power must establish actual reach before any numeric support
applies. A built-in range Lens could supply its listed value automatically
when its supporting facts hold; it does not necessarily require preparation.
Any actual setup follows existing action accounting and persistence.

| Profile, raw Rating 100 | Short Final | Medium Final | Long Final |
| --- | --- | --- | --- |
| No range support | 98 | 58 | 35 |
| Close support | 117 | 58 | 35 |
| Distance support | 98 | 76 | 56 |

These values work in either layout; only the physical extent of each band
changes. Ratings above 99 retain ordinary output significance, not guaranteed
victory. Neutral-context output declines as distance increases for every tested
profile. No universal cap on Resonance is introduced.

Long-range raw-100 sensitivity: +0.10 -> 38, +0.20 -> 42, +0.30 -> 45,
+0.50 -> 52, +0.60 -> 56, +0.70 -> 59, +1.00 -> 70.
A +0.60 contribution roughly approaches, but does not fully recover, the
unsupported Medium Rating of 58. It is not automatically a one-rank reduction.

On ordinary roll 30, raw 100 produces one unsupported Long Effect and three
with +0.60. Raw 180.280512 produces four versus eight; raw 320 produces nine
versus sixteen. This changes output as well as success probability under the
existing engine. It is not newly separated accuracy and damage mechanics.

## Context, Actions, and a Real Edge Case

For raw 100 at Long:

- +0.60 range support plus distinct +0.20 preparation: Final Rating 63.
- Add distinct Dissonance 0.30: Final Rating 52.
- +0.60 range support, neutral other context, two declared actions: Rating 28.

Preparation does not charge again for existing equipment or repeat its range
property. An ordinary x1.25 modifier plus +0.60 range support yields Long 70
only if the two modifiers genuinely describe different contributions.

The neutral-context monotonic result does not hold under every pooled context:

| Dissonance, same across bands | Short | Medium | Long |
| --- | --- | --- | --- |
| 0 | 98 | 76 | 56 |
| 0.30 | 68 | 58 | 45 |
| 0.60 | 39 | 41 | 35 |
| 1.00 | 0 | 17 | 21 |

All rows use the distance-support profile. Its larger distant-range bonuses
offset more Dissonance, so a farther supported attempt can outperform a nearer
unsupported attempt. This is existing net-pooling behavior, not a coding error.
Zero Rating still permits the existing natural-01 success where Access exists.

Actual applicability may distinguish real situations, but cannot be invented
merely to hide this mathematical result. Do not silently restrict range
Resonance to offsetting only range, cap the resulting Rating, or apply it in
a separate multiplication stage: those would change the adopted pooling rule.
Treat this as a tradeoff to evaluate when defining a concrete range property,
not evidence that every possible equipment profile exhibits the same inversion.

## Recommendation

The user's universal-band plus supporting-Lens architecture is numerically
viable without changing equipment's ordinary modifier band or the Difficulty
curve. Preserve it as the active design direction, not an adopted final rule.

Use Layout A (20/100/500 meters) as the recommended initial calibration: it
already broadens the previous bands considerably while distinguishing 40-meter
delivery from very close delivery. Retain B (50/200/1,000) as the broader option
if the intended personal-scale play should preserve close-range output longer.
This is design judgment, not a mathematical proof that A is correct.

Do not approve the example Resonances as universal item values. The meaningful
next decision is the intended breadth of the common range bands. Concrete range
property design must retain the demonstrated output and pooled-context behavior
in its evaluation, without another exhaustive weapon catalogue.

## Verification

`lens-universal-range-resonance-test-v0.1.cjs` passed assertions for inclusive
and fractional boundaries, out-of-table handling, raw-100 results, neutral
monotonicity, pooled-context inversion, zero floor, and action division.
The script prints five capability controls, eight Resonance values, five
Dissonance levels, deterministic ordinary-roll Effects, and four ordinary
equipment sensitivities. This is not empirical range validation or a full
encounter simulation. Special-result procedures were preserved, not resimulated.
