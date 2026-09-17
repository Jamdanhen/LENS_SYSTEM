# Movement Floor Plus Expression Contribution

Status: Tested alternatives; no floor, duration, or formula adopted.
Date: 2026-09-08.

## Objective and Authority

The user approved comparing an ordinary movement floor plus an Expression-based
contribution against the direct conversion, reusing the previous builds and
preserving doubled total distance for dedicated movement.

Sources:
- `lens-movement-expression-pace-curve-test-v0.1.md` and its companion script.
- `../system/lens-system-baseline-draft-v0.1.md`, Rank progression, Function Bands,
  Access, and Ordinary Movement and Actions.

This is an exploratory continuation with the earlier adopted movement units set
aside for discussion. No baseline rule is overwritten. Three and four seconds
remain candidate whole-turn intervals with one normal action. Neither additional
actions nor dedicated movement manufacture another interval.

## Controlled Comparison

Keep the previous upper anchor: E = 320 gives 24 meters accompanying another
action and 48 meters for dedicated movement over three seconds. This is the
user's proposed game calibration, not a demonstrated human walking speed or
biological ceiling. The lower mode is movement while retaining another action.

Test starting allowances B = 2, 4, and 6 meters over that same interval. These
are analyst-selected comparison values, not approved floors or Profile standards.
Adjust the Expression contribution to keep the maximum equal:

```text
Three-second ordinary allowance = B + (24 - B) x E / 320
Dedicated movement = twice that TOTAL allowance
Four-second allowance = three-second allowance x 4/3

Direct comparison: B = 0 gives the previous 3E/40 allowance.
```

Do not simply add B to the old curve: that would change the top end as well as
the lower end. The equal-anchor comparison isolates the shape change. B is an
additive baseline, not max(B, old distance). It is also not a protected right to
move when Access is Closed or the relevant function is lost.

Use the same eight movement-focused builds, neutral context/equipment, ordinary
Scale, full physical function, and applicable training. No HOLT, new Difficulty,
or mandatory movement roll. These are not complete equal-budget character sheets.

## Results

Rank order is Mobility / Movement / Traverse / Field / Specialty / Precision.
All columns are meters accompanying another action over three seconds.

| Ranks | E | Direct | B = 2 | B = 4 | B = 6 |
| --- | --- | --- | --- | --- | --- |
| 5/0/0/0/0/0 | 5 | 0.375 | 2.34375 | 4.3125 | 6.28125 |
| 5/5/5/5/0/0 | 16 | 1.2 | 3.1 | 5 | 6.9 |
| 5/5/5/5/5/5 | 37 | 2.775 | 4.54375 | 6.3125 | 8.08125 |
| 7/7/7/7/7/7 | 99 | 7.425 | 8.80625 | 10.1875 | 11.56875 |
| 8/8/8/8/8/8 | 151 | 11.325 | 12.38125 | 13.4375 | 14.49375 |
| 9/9/9/9/9/9 | 222 | 16.65 | 17.2625 | 17.875 | 18.4875 |
| 10/10/10/10/10/5 | 240 | 18 | 18.5 | 19 | 19.5 |
| 10/10/10/10/10/10 | 320 | 24 | 24 | 24 | 24 |

The four-meter candidate simplifies to:

```text
Three seconds, move and act: 4 + E/16 meters
Three seconds, dedicated movement: 8 + E/8 meters
```

| E | 3s move and act | 3s dedicated | 4s move and act | 4s dedicated |
| --- | --- | --- | --- | --- |
| 5 | 4.3125 | 8.625 | 5.75 | 11.5 |
| 16 | 5 | 10 | 6.6667 | 13.3333 |
| 37 | 6.3125 | 12.625 | 8.4167 | 16.8333 |
| 99 | 10.1875 | 20.375 | 13.5833 | 27.1667 |
| 151 | 13.4375 | 26.875 | 17.9167 | 35.8333 |
| 222 | 17.875 | 35.75 | 23.8333 | 47.6667 |
| 240 | 19 | 38 | 25.3333 | 50.6667 |
| 320 | 24 | 48 | 32 | 64 |

Repeating decimals in the second table are displayed to four decimal places;
no travel or grid rounding rule is proposed. Four seconds scales the physical
baseline as well as the contribution, rather than silently changing speeds.

## Tradeoffs

The two-meter baseline improves the low end least. The E = 16 build reaches
3.1 meters with another action, or 6.2 meters dedicating the action. It preserves
more of the original investment spread but remains the slower baseline choice.

The four-meter baseline is the leading comparison candidate. E = 16 reaches
5 or 10 meters over three seconds, instead of 1.2 or 2.4. E = 5 reaches 4.3125
or 8.625. It provides ordinary travel without requiring narrow training to
raise the number into that range. This is a design assessment, not empirical
validation of the relationship between Rank and real-world fitness.

The six-meter baseline supplies more speed before training: E = 5 reaches
6.28125 or 12.5625 meters, and E = 16 reaches 6.9 or 13.8. It therefore compresses
low-end development differences more strongly. That could suit another Profile,
but is not preferred merely because larger outputs avoid slow characters.

All candidates remain strictly increasing in E within the tested horizon.
Training is not removed. For the same Mobility-5 build, adding Specialty 5 and
Precision 5 changes the four-meter allowance from 5 to 6.3125 meters, rather
than multiplying the entire allowance by 2.25. This is intentional compression
of a capability Rating into movement, not a change to those training multipliers
in ordinary Expression resolution.

The same maximum can now coexist with usable lower-build travel. The cost is
an affine conversion instead of a pure divisor and continued fractional output.
A Character can precompute familiar movement, but the additional conversion
still exists. Do not describe it as eliminating arithmetic or giving whole grids.

The number 4 was not derived uniquely from existing doctrine. It is the middle
tested floor and yields a simpler equal-anchor formula than 2 or 6. There are
other viable values; this test recommends a candidate, not a mathematical truth.

## Impairment and Zero Control

A crucial distinction: the tested E values are unimpeded capability Ratings.
Blindly inserting an already impaired Final Rating into 4 + E/16 leaves the
four-meter baseline untouched. At the maximum build:

| Remaining function | Baseline added after reducing E | Entire allowance reduced |
| --- | --- | --- |
| 100% | 24 m | 24 m |
| 75% | 19 m | 18 m |
| 50% | 14 m | 12 m |
| 25% | 9 m | 6 m |
| 0% | 4 m | 0 m |

The second column is not acceptable as an unconditional movement grant. A
fully lost relevant function does not regain four meters by using this formula.
At partial impairment it also changes the severity of the reduction. If this
floor model proceeds, relevant whole-movement reductions must reach the whole
allowance, or the designer must consciously choose a different relationship.
The third column is an illustrative solution, not an adopted universal output
order for every Lens. Never apply the same impairment to E and the full allowance
again. Closed Access remains Closed regardless of either numerical expression.

This comparison does not adopt translations for every contextual Lens, terrain
type, Scale, equipment capability, or action-capacity modification. Nor does it
resolve how divided multiple actions consume movement opportunity. It shows
why a neutral-build formula cannot simply be labeled Final Rating conversion.

## Recommendation and Decision

The baseline-plus-contribution concept passes the narrow low-end comparison.
Prefer the four-meter candidate for continued movement design, with doubled total
distance when dedicating the action. Do not adopt the complete formula yet.

The real decision is whether this additional conversion and compressed movement
benefit from training are acceptable. If so, carry the candidate into explicit
impairment and action-division accounting without protecting the baseline from
their relevant effects. Do not set a floor or change existing engine rules solely
because the neutral table looks better.

## Verification

Companion PowerShell script reconstructs all eight prior build Ratings, checks
128 distance outputs across four curves, two intervals, and two paces, verifies
the shared upper anchor, and calculates five impairment-order comparisons.
No combat simulation, physiological validation, or table playtest is claimed.
No main baseline or terminology rule was changed.
