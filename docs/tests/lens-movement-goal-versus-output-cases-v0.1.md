# Movement Goal and Output Cases

Status: Diagnostic comparison; no rule adopted.
Date: 2026-09-09.

## Scope

The user authorized checking whether movement resolution completes declared
travel or generates travel, while expressing concern that the distinction was
delaying substantive progress. Apply both interpretations to concrete cases.
Also calculate one explicitly new nonlinear conversion to identify an actual
alternative to the unsuccessful additive floor patch. No core files change.

Sources: baseline Core Vocabulary, Effect Resolution and Conservation, Automatic
and Trivial, and `lens-movement-output-interpretation-check-v0.1.md`.
The baseline-plus-divisor patch remains set aside. Neither old fixed ground
units nor a new universal movement roll are reinstated.

## Cases

### Routine Travel

An unimpaired Character crosses an ordinary room, with no time pressure or
obstacle. Declared-outcome resolution completes the crossing automatically.
Generated-distance resolution needs either an automatic Effect allotment or a
distance reference before it can assign a quantity. The current rules supply
neither from the label Automatic alone. Rolling for this solely to generate
meters creates unnecessary uncertainty. Neither interpretation establishes how
much farther that Character could travel in a time-limited action.

### A Race

Suppose the normal assessment has already produced Final Ratings of 37 and 99.
Stipulate rolls of 12 and 82: successful margins are 25 and 17. The first
Character wins the opposed comparison by 8 and generates one Effect. These
are input fixtures, not guessed Difficulty values or a probability forecast.

Declared-outcome resolution can identify who wins the established race. The
single winning Effect is not automatically a one-meter lead. Generated-distance
resolution still needs a travel unit, and a net opposed Effect is not itself
each participant's traveled distance. The normal contest works, but neither
interpretation defines an ordinary allowance for future turns.

### A Timed Escape

A Character attempts to cross a ten-meter space before a door closes in three
seconds. This is a stipulated scene, not a universal movement benchmark.
Declared-outcome resolution needs the GM to assess whether that timed distance
is routine, uncertain, or unavailable. Doing so requires some capability frame.
Generated-distance resolution can compare achieved distance with ten meters,
but only after a conversion is supplied. Assigning an unexplained Difficulty
or Effect-to-meter ratio would merely hide the missing calibration.

## Verdict on the Distinction

The distinction is useful descriptive language, not a solution to the active
movement problem. Do not create another adoption step around it. Existing
opposition can answer who wins an uncertain contest; it does not independently
provide the missing automatic travel allowance. The prior recommendation to
settle this distinction before further arithmetic did not advance calibration.

## Effect-Output Check

For ordinary faces 2-98, excluding special results, successful unopposed outputs
are as follows. These are stipulated Final Ratings, not recomputed builds after
an unstated Difficulty. Success uses roll below Rating. Counts are not overall
success percentages because the special faces were intentionally excluded.

| Rating | Successful ordinary faces | Effect range on those successes |
| --- | --- | --- |
| 16 | 14 | 1-2 |
| 37 | 35 | 1-4 |
| 99 | 97 | 1-10 |
| 320 | 97 | 23-32 |

Adding an arbitrary meters-per-Effect value does not demonstrate plausible
travel across these builds and would not solve Automatic output. Special
continuations also mean 32 Effects is not an absolute Effect ceiling. Do not
calibrate a universal movement maximum by treating one chosen roll as fixed.

## Actual Numerical Alternative

The direct conversion inherits every ratio in the Rating. E = 320 travels
twenty times as fast as E = 16, regardless of the constant divisor or interval.
Improving that lower-to-upper relationship while retaining the full Expression
requires a different mapping, a different capability reference, or accepting
the existing spread. Another universal constant cannot change it.

For an explicitly new nonlinear diagnostic, calculate:

```text
Full movement speed in meters per second = sqrt(E)
Move-and-act speed = half that speed
```

This is not an existing LENS rule, an adopted physical law, or the only possible
conversion. It is a single function with no additive floor or compensating
divisor. It does not preserve the proposed 16 m/s upper anchor exactly: the
ranked maximum becomes about 17.89 m/s. No coefficient is added to force it back.

| E | Old sprint m/s, E/20 | Diagnostic sprint m/s | 3s move and act | 3s dedicated movement |
| --- | --- | --- | --- | --- |
| 5 | 0.25 | 2.24 | 3.35 m | 6.71 m |
| 16 | 0.8 | 4 | 6 m | 12 m |
| 37 | 1.85 | 6.08 | 9.12 m | 18.25 m |
| 99 | 4.95 | 9.95 | 14.92 m | 29.85 m |
| 151 | 7.55 | 12.29 | 18.43 m | 36.86 m |
| 222 | 11.1 | 14.90 | 22.35 m | 44.70 m |
| 320 | 16 | 17.89 | 26.83 m | 53.67 m |

The E values come from the previously tested allocation slices. Three seconds
is only the comparison interval; dedicated movement is doubled TOTAL travel.
Numbers are rounded for display, not a grid or game rounding rule.

This narrows the 320-to-16 speed ratio from 20 to about 4.47 without making any
positive training contribution irrelevant. Zero maps to zero. However, it adds
a square-root operation, still yields fractional distances, and changes how
Rating reductions translate to speed: halving E leaves about 70.71% speed,
not 50%; quartering E leaves 50%. Existing Function Bands reduce Expressions;
whether they must reduce movement distance by the same fraction remains an
output-design question. Do not silently correct those consequences with more
post-conversion rules or apply the same reduction twice.

Repeated actions do not create repeated time intervals. This numerical check
does not grant a full interval to each divided movement action or settle that
action-accounting issue. Nor does it change Access, contextual pooling, or Scale
doctrine. It is not physiological validation or a complete movement system.

## Recommendation and Boundary

Stop treating the declared-goal versus generated-distance distinction as a
calibration fix. The square-root example is a concrete candidate for compressing
the full Expression spread, not a recommendation to adopt it immediately.
The substantive choice is whether a new nonlinear output conversion is acceptable
given the user's preference for simple math. Precomputation reduces table work
but does not erase the new mathematical operation. Do not conceal that tradeoff.

Verification: enumerated 97 ordinary faces for each of four Final Ratings,
checked the opposed fixture, calculated seven speed/distance comparisons, and
checked zero, half-Rating, and quarter-Rating consequences. No baseline or
terminology files were modified.
