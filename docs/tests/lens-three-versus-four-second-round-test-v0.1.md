# Three Versus Four Seconds With the D2 Movement Model

Status: Three-second combat rounds subsequently adopted as the working duration.
Date: 2026-09-09.

## Subsequent User Decision

The user agreed to three-second combat rounds and twenty rounds per minute,
preserving movement, push, action and Capacity rules. The baseline and Markdown
terminology reference now record that decision. Pre-decision recommendation
language below is preserved as test history, not an unresolved approval.

## Fixed Inputs

The user asked for a recommendation on round duration after agreeing to the
provisional six/twelve-unit ground model and D2 push. Keep those distances,
one unit per Effect, one ordinary action, and the push/attack tradeoffs fixed.
Do not revive two ordinary actions or change Difficulty to fit a duration.

Rerun `lens-movement-push-difficulty-spread-test-v0.1.ps1`; use its D2 rows.
Divide the resulting distances by three or four seconds, without introducing
these divisions into normal table play. One unit is approximately one meter.

## Results

| Movement case | Units per round | Meters/second at 3 seconds | Meters/second at 4 seconds |
| --- | --- | --- | --- |
| Ordinary movement while acting | 6 | 2.00 | 1.50 |
| Dedicated movement without push | 12 | 4.00 | 3.00 |
| Highly trained fixture, movement-only push median | 13 | 4.33 | 3.25 |
| Highly trained fixture, largest ordinary successful push total | 18 | 6.00 | 4.50 |
| Peak fixture, movement-only push median | 26 | 8.67 | 6.50 |
| Peak fixture, largest ordinary successful push total | 31 | 10.33 | 7.75 |
| Peak fixture, push plus reduced attack median | 11 | 3.67 | 2.75 |
| Peak fixture, largest ordinary push-plus-attack total | 16 | 5.33 | 4.00 |

Highly trained means all six tested entries at7; peak means all at10. Narrow
training must apply. Ordinary successful maxima exclude initial01 and use the
neutral test fixture, not every possible Lens or equipment contribution.
Medians include failed pushes under the allowance convention documented in
the source test. No probability or distance changes when duration changes.

## External Magnitude Check

World Athletics lists Usain Bolt's100m record as9.58 seconds:
https://worldathletics.org/athletes/_/14201847

100/9.58 = approximately10.44 meters/second, averaged over the whole race.
This is NOT instantaneous peak speed. Neither the31-unit combat outcome nor
the median26-unit result is a modeled100m race. Combat includes different
starts, turns, surfaces, equipment and fictional circumstances. Use the record
as a magnitude reference, not a requirement that LENS exactly reproduce it.

The three-second fixture gives a strong ordinary result of10.33m/s at the peak,
within the magnitude of elite sprint performance without adding a speed rule.
Four seconds puts the same outcome at7.75m/s. That is not implausible in combat;
it simply gives the fully invested neutral fixture a more restrained pace.

The existing01,06 special-result example yields41 units for the peak D2
movement-only fixture:13.67m/s over three seconds or10.25 over four. Longer01
chains remain possible. Neither duration establishes a hard biological limit,
and this recommendation does not add an exception or cap for special results.

## Action Timing and Arithmetic

Three seconds gives20 rounds per minute; four gives15. Both convert cleanly
to minutes. Three permits one-third more ordinary action opportunities per
fixed minute than four; it is not consequence-free just because distances
per round and Capacity stay unchanged.

For a fixed sequence of combat rounds, attack counts, movement units and Load
remain identical; only elapsed fictional time changes. This does not prove
faster real-time table play. Effects explicitly measured in real time need
their actual duration respected; this test does not reprice or redefine them.
No universal treatment, recovery or task duration is inferred from round size.

One complete initiative cycle represents the same shared three- or four-second
interval for all participants, not an additional interval for every character.
The recommendation concerns tactical combat time, not forcing all narrative
tasks or scenes onto three-second units.

## Recommendation

Use three seconds as the working combat-round duration. It preserves a useful
spread between ordinary movement while acting, committed movement, and the
fully invested push, with no changes to the recently settled distance model.
The faster end is supported as a reasonable design choice, not established as
an exact human-performance simulation. Four remains viable but is not preferred.

No base movement, D2 benchmark, Effect conversion, action divisor, Capacity,
permission or special-result rule changes. Record the duration in the baseline
and terminology reference only after user agreement.

Validation: the movement spread script passed24 cases and2328 ordinary faces.
All reported speeds are direct distance/time calculations rounded only for
display; exact60/3 and60/4 conversions give20 and15 rounds per minute.
