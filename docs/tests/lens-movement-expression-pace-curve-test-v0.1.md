# Movement Expression Pace Curve Test

Status: Tested discussion candidate; no new movement output or duration adopted.
Date: 2026-09-08.

## Authority and Scope

The user set aside the previously adopted movement units for discussion, then
proposed converting the full Movement Expression to sprint speed by dividing
by 20, with half that speed for movement accompanying another action. Compare
three- and four-second intervals. The latest request is to test this curve per
action. This record does not erase the earlier working baseline or adopt the
separate two-actions-per-turn alternative.

Sources: `../system/lens-system-baseline-draft-v0.1.md`, current Rank progression,
parent cap, Training applicability, and ordinary movement; and
`../system/lens-terminology-quick-reference-v0.1.md`, action accounting.

## Model

```text
E = floor(Mobility x (1 + Movement/10) x (1 + Traverse/10)
    x (1 + Field/10) x (1 + Specialty/10) x (1 + Precision/10))

Movement accompanying another action = E x seconds / 40 meters
Dedicated movement action = E x seconds / 20 meters TOTAL
```

Use ordinary Scale, full physical function, one normal action, clear available
ground travel, and neutral equipment and context. There are no HOLTs, added
Difficulty penalties, required movement rolls, or distance rounding rules.
All selected expertise must actually apply to the particular route and movement.
Optional, unranked layers contribute x1, not zero.

These are movement-focused allocation slices, not complete characters built to
equal budgets. Their labels indicate investment, not validated physiological
fitness categories. This isolates the proposed number-to-distance conversion.
It does not adopt Field, Specialty, or Precision names for locomotion.

The same applicable Expression is used for both pace modes as proposed. A literal
walking activity does not automatically inherit sprint-only expertise. The
lower-pace mode is better treated descriptively as movement accompanying another
action until actual gait and expertise applicability are settled.

## Builds and Results

Rank order: Mobility / Movement / Traverse / Field / Specialty / Precision.
Distances below are meters. Displayed decimals are the actual calculated values.

| Build | Ranks | Raw Expression | Final E |
| --- | --- | --- | --- |
| Mobility only | 5/0/0/0/0/0 | 5 | 5 |
| Broad training at 5 | 5/5/5/5/0/0 | 16.875 | 16 |
| Same build with narrow training at 5 | 5/5/5/5/5/5 | 37.96875 | 37 |
| All six entries at 7 | 7/7/7/7/7/7 | 99.38999 | 99 |
| All six entries at 8 | 8/8/8/8/8/8 | 151.16544 | 151 |
| All six entries at 9 | 9/9/9/9/9/9 | 222.84891 | 222 |
| Five at 10, Precision at 5 | 10/10/10/10/10/5 | 240 | 240 |
| Ranked maximum | 10/10/10/10/10/10 | 320 | 320 |

| E | 3s: move and act | 3s: dedicated move | 4s: move and act | 4s: dedicated move |
| --- | --- | --- | --- | --- |
| 5 | 0.375 | 0.75 | 0.5 | 1 |
| 16 | 1.2 | 2.4 | 1.6 | 3.2 |
| 37 | 2.775 | 5.55 | 3.7 | 7.4 |
| 99 | 7.425 | 14.85 | 9.9 | 19.8 |
| 151 | 11.325 | 22.65 | 15.1 | 30.2 |
| 222 | 16.65 | 33.3 | 22.2 | 44.4 |
| 240 | 18 | 36 | 24 | 48 |
| 320 | 24 | 48 | 32 | 64 |

## Findings

The action relationship is consistent: dedicating the action doubles total
movement in every case. It does not add the sprint distance on top of the
ordinary distance. Traverse and applicable expertise affect both options
without making routine travel require a roll.

The calibration problem is the lower end. A Mobility-5 character without ranked
locomotion training gets only 0.25 m/s at the proposed full sprint. Giving
Mobility, Movement, Traverse, and Field all Rank 5 still produces only 0.8 m/s.
That is a poor default portrayal of ordinary clear-ground running by an otherwise
unimpaired character. This is a design plausibility judgment, not a claim that a
particular Rank allocation has been established as an average real-world adult.

Adding Specialty 5 and Precision 5 to the same broad Rank-5 build multiplies raw
output by 2.25. The resulting E = 37 gives 1.85 m/s sprinting. Under this model,
narrow training has substantial influence over basic locomotion distance, not
just specialized performance. That consequence needs deliberate acceptance.

Rounding is not the cause. With raw E = 16.875, sprint speed would be 0.84375 m/s
instead of 0.8. With raw E = 37.96875 it would be 1.8984375 instead of 1.85.

Changing the interval from three seconds to four multiplies all distances by
4/3 and leaves every build-to-build ratio and speed unchanged. The ranked maximum
is 64 times the Mobility-only fixture and 20 times the rounded broad-training
fixture. A different universal divisor cannot change those relative spreads.

Four seconds simplifies arithmetic to E/10 and E/5, but does not guarantee whole
meters or grid spaces. E = 37 still gives 3.7 and 7.4 meters. No rounding is
introduced to conceal the fractional output.

These intervals are compared as one turn with one normal action, as in the
latest proposal. Additional actions do not each create another three or four
seconds. Multiple-action interaction is not resolved by this single-action test.

## Recommendation

Keep the move-and-act versus doubled dedicated-movement relationship as the
leading action-economy candidate. Do not adopt the direct proportional conversion
as a general ordinary movement rule on these results alone. The upper-end match
does not establish the lower or middle range.

Next substantive comparison: an ordinary movement floor plus an Expression-based
development contribution, against this direct conversion. Test it on these same
allocations before setting either the floor or its multiplier. This is a proposed
test, not an adoption or a return to mandatory fixed movement for every character.

## Verification

The companion PowerShell script verifies eight build Ratings and sixteen
duration/pace pairs, yielding thirty-two distance outputs. It checks the parent
cap and doubled-output relationship. These are deterministic calculations, not
an opposed-roll simulation or table playtest. No core rule files were changed.
