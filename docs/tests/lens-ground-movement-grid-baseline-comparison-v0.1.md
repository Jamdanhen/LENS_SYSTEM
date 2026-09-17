# Ground Movement Baseline and Grid Comparison

Status: User-approved working 10-meter ground baseline and optional 1-meter reference grid spacing, 2026-09-08.
Date: 2026-09-08.

## Objective and Authority

Compare ordinary ground-movement baseline candidates against the user's
preference for whole distances and whole grid spaces. Preserve ten-percent
Movement Rank increments, optional grids, and ordinary action accounting.

Sources: baseline Ordinary Movement and Actions; terminology Ordinary Movement
Allowance; `lens-movement-only-versus-mobility-contribution-test-v0.1.md`.

The approved personal contribution is 1 + Movement Rank/10. Mobility caps the
Derived Rank and remains the Attribute base in relevant Expressions; it does
not also multiply this ordinary allowance. Baseline quantities remain open.

This is an arithmetic and scene-reach comparison, not a real-world speed study.
No seconds per turn, sprint distance, diagonal rule, creature footprint,
universal ground speed, or required map grid is inferred.

## Clean Increment Requirement

Let B be the proposed baseline distance and G the distance represented by one
grid space. Each Movement Rank adds B/10 distance, or B/(10 x G) grid spaces.

For every Rank from 0 through 10 to give whole grid spaces without rounding,
B/(10 x G) must be a whole number. A baseline of ten spaces is the smallest
positive whole-space-per-Rank solution; twenty or thirty spaces also work.

This is a compatibility condition, not a decision that ten spaces is the right
amount of movement. A smaller allowance may still be desirable, but then these
exact ten-percent steps need finer spacing or fractional positions.

## Metric Candidate Comparison

| Baseline | Rank 0 | Rank 5 | Rank 10 | Increase per Rank |
| --- | ---: | ---: | ---: | ---: |
| 5 m | 5 m | 7.5 m | 10 m | 0.5 m |
| 10 m | 10 m | 15 m | 20 m | 1 m |
| 15 m | 15 m | 22.5 m | 30 m | 1.5 m |
| 20 m | 20 m | 30 m | 40 m | 2 m |

| Baseline | Grid spacing | Ranks producing fractional spaces, out of 11 |
| --- | --- | ---: |
| 5 m | 1 m | 5 |
| 5 m | 2 m | 8 |
| 10 m | 1 m | 0 |
| 10 m | 2 m | 5 |
| 15 m | 1 m | 5 |
| 15 m | 2 m | 8 |
| 20 m | 1 m | 0 |
| 20 m | 2 m | 0 |

The two clean paired candidates are 10 m with 1 m spacing and 20 m with 2 m
spacing. Both produce 10, 11, 12, ... 20 spaces across Ranks 0-10, but they do
not describe the same physical allowance. Twenty meters on a one-meter grid
is also exact, but produces 20-40 spaces rather than a smaller movement count.

A half-meter grid makes the 5 m candidate exact in grid spaces, but retains
fractional meter distances and uses twice as many cells to show a given span.
A 1.5 m grid makes the 15 m candidate exact in spaces but likewise retains
fractional unit values. These do not fully meet the preference for simple whole
numbers in both the distance reference and the grid.

## Same Physical Scenes

Use unobstructed, stipulated route lengths rather than different-sized scenes
for different baselines. The question is whether ordinary movement alone reaches
the destination while retaining the Character's normal action. Where it does
not, additional movement is needed; its output and cost beyond existing action
accounting are not invented here.

| Stipulated route | 5 m baseline | 10 m baseline | 15 m baseline | 20 m baseline |
| --- | --- | --- | --- | --- |
| 12 m to a doorway across a room | Beyond all ordinary allowances | Movement 2+ reaches | Movement 0+ reaches | Movement 0+ reaches |
| 24 m across a courtyard | Beyond all ordinary allowances | Beyond all ordinary allowances | Movement 6+ reaches | Movement 2+ reaches |
| 40 m along an open approach | Beyond all ordinary allowances | Beyond all ordinary allowances | Beyond all ordinary allowances | Movement 10 reaches |

These are test scenes, not universal room, courtyard, or encounter sizes. They
expose thresholds; they do not independently prove a balanced baseline. All
candidates cross a clear 5 m route, and none crosses an 80 m route with only the
tested personal factors. At 10 m baseline, a 20 m route becomes reachable at
Movement 10; increasing the stated courtyard length to 24 m changes that answer.

The 5 m baseline reserves more relocations for additional movement but has the
fractional-increment problem on the tested metric grids. The 20 m baseline is
arithmetically clean on 2 m spacing, but makes considerably more physical ground
available while performing another action. Ten meters sits between those effects.

## Practical Grid Tradeoff

A 24 m span uses 24 spaces on a 1 m grid and 12 spaces on a 2 m grid. The finer
grid preserves the one-meter development steps at a cost of more spaces to
count or draw. This does not prescribe that a Character occupies exactly one
cell or require the same printed cell size for every map.

The underlying route length, not merely straight-line separation, governs the
comparison. For example, a clear route comprising an 8 m leg and a 4 m leg is
12 m. No special diagonal metric is adopted through that example.

Rounding 10 m-baseline movement to whole 2 m spaces would suppress some invested
increments. Ranks 0 and 1 would both become five spaces if rounded down, even
though the original allowances are 10 m and 11 m. The 1 m reference avoids this
loss for the unmodified Movement progression. No grid-rounding rule is adopted.

## Imperial Alternative

A proposed 50-foot baseline on 5-foot spacing also gives ten baseline spaces
and one additional space per Movement Rank, reaching 100 feet at Movement 10.
The baseline is exactly 15.24 m, not another notation for 10 m or 20 m.

That is a viable clean arithmetic alternative if that physical travel range
and unit convention are wanted. Do not silently call it equivalent to the
metric proposal or change physical reach merely because a map uses another unit.

## Limits of the Whole-Number Result

The clean result covers the baseline and Movement Rank multiplier, not every
possible additional Lens. If a distinct, permitted travel contribution later
multiplies an 11 m allowance by 1.10, it becomes 12.1 m. A convenient baseline
cannot guarantee whole spaces for all future modifiers.

Do not silently round every layer, remove invested differences, or restrict
otherwise applicable Lenses to preserve clean grid numbers. That conditional
example does not adopt a new movement modifier or decide how all contextual
Resonance, Dissonance, Scale, or Function Bands translate into travel.

## Verification and Recommendation

Evaluated 88 metric baseline/grid/Rank combinations and 11 imperial combinations
with decimal arithmetic. Calculated the 12 scene-reach thresholds. Checked the
imperial series against the expected 10 + Rank spaces. The calculations support
the compatibility findings, not a claim about realistic velocity or encounter
balance.

Adopted 10 m as the first working ordinary personal ground-movement baseline,
with optional 1 m reference grid spacing. This yields
10-20 m across Movement Ranks 0-10, with one meter per Rank and no mandatory grid.

The reason to prefer it over 20 m / 2 m is not prettier arithmetic; both are
equally exact. It provides the smaller clean allowance in the paired comparison,
leaving more room for additional movement to matter in the stipulated scenes.
The cost is finer map granularity. This is a working design choice, not a
claim that ten meters is physiologically correct without a turn duration.

The adoption concerns the ordinary ground-movement reference, not every species,
movement form, vehicle, or Scale. Profile and capability differences remain.
The user approved the baseline and optional reference spacing. Additional-movement
output remains unresolved and is the next substantive question; no rounding or
sprint formula is smuggled in by this comparison.
