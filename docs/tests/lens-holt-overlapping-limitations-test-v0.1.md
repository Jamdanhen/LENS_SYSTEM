# Overlapping HOLT Limitations

Status: Comparison completed. The user approved overall combined burden for
overlapping limitation estimates, counting each affected area once, as
provisional guidance without automatic percentage stacking or a universal
adjustment ceiling. Area count x 5 remains provisional; the three bands and
25% / 50% / 75% remain approved test candidates. Actual prices and compensation
are not established by this decision.

## Main Fixture

Use the prior four-physical-area package with raw scope reference 20.
Compare two meaningful restrictions in an ongoing-adventure context:

- Suit dependence, assessed alone as Substantial for this fixture: the suit
  can be lost or damaged, and restoration requires meaningful effort.
- Depletion, assessed alone as Severe for this fixture: each invoking
  Expression adds six Physical Load afterward, with no automatic scene reset.

Both affect use of all four areas. The suit's absence prevents invocation;
it therefore also prevents generating new activation depletion while absent.
Accumulated depletion does not disappear when the suit is removed or repaired.
Matching recovery does not retrieve or repair the suit. These are distinct
burdens with interacting circumstances, not duplicate descriptions.

Retain the prior recovery and functional-loss boundaries. This does not
change the fixture into an unavoidable damage rule or price its consequences.

## Arithmetic Comparison

| Approach | Calculation | Adjusted reference | Finding |
| --- | --- | ---: | --- |
| Add individual adjustments | 20 - (20 x .50) - (20 x .75) | -5 | Invalid negative estimate for a still-useful package |
| Multiply remaining fractions | 20 x .50 x .25 | 2.5 | An 87.5% reduction, but no independent justification for that burden estimate |
| Assess the combined burden as Severe | 20 - (20 x .75) | 5 | Usable rough estimate if Severe describes the combined package |

The third row is not a rule to take the highest individual band. Its band is
a narrative assessment of the combination. The arithmetic does not prove that
assessment, nor imply the suit adds no burden. It shows what the existing
coarse estimate can express without another combination formula.

The percentages are not independent probabilities of availability. There is
no basis for multiplying them as if a suit had 50% uptime and depletion had
25% uptime. Multiplication is numerically possible, but invents precision not
supplied by the tested bands.

## Scenario Walkthrough

With the suit and while fresh, the Character can use the package normally;
after one activation, Physical Load reaches six and applicable later physical
Expressions use the 50% Function Band. Losing the suit now removes its Access
but leaves depletion in place. Retrieving the suit restores that dependency,
not the Character's physical function. Resting or receiving matching recovery
addresses depletion, not the missing suit.

The combination is meaningfully worse than either restriction alone under
these circumstances. The coarse Severe band may nevertheless return the same
estimate as Severe depletion alone. That is lost resolution in an estimate,
not proof of equal value or a reason to silently award 125% compensation.

If Severe no longer describes a package fairly, flag the comparison as outside
the current bands' useful resolution. Do not declare 75% an absolute cap, ban
the package, or invent a fourth band merely to make this example fit.

## Duplicate Description Control

"Requires the suit" and "cannot use suit powers without the suit" describe
the same dependency. A Substantial assessment applied once leaves 10 from
20, not zero through two 50% adjustments. Actual distinct restrictions must
still be described; different wording alone does not create another burden.

## Disjoint and Partially Overlapping Scope

These additional fixtures use Access restrictions, not the prior physical
depletion. Depletion affects later ordinary physical function too and must
not be misrepresented as neatly confined to only one Axis.

For the estimate, count each area's contribution once. Areas receiving the
same overall assessment can be grouped for arithmetic; this grouping is not
a new character-sheet layer.

| Fixture | Area groups after overall assessment | Adjustment | Adjusted reference |
| --- | --- | ---: | ---: |
| Two areas with Substantial dependency; two other areas with Severe timing restriction | 2 at 50%; 2 at 75% | 10 x .50 + 10 x .75 = 12.5 | 7.5 |
| Substantial suit dependency across all four; one area also has a timing restriction whose combined burden is assessed Severe | 3 at 50%; 1 at 75% | 15 x .50 + 5 x .75 = 11.25 | 8.75 |

These are conditional results given the stated assessments. The labels alone
do not establish their severity. The one overlapping area in the second row
does not receive a second full adjustment in addition to its overall band.

Partial overlap is where the arithmetic becomes less immediate. Fractions
are preserved as test output; no rounding convention is adopted.

## Verification

JavaScript evaluated the six displayed method, partition, and duplication
results. An additional 3,680 checks covered every two-part division of 1-20
areas with each part assigned 0%, 25%, 50%, or 75%. Checks confirmed preservation
of the unaffected reference and invariance when equal-band areas are grouped
together. The resulting bounds follow those chosen inputs, not a new universal
adjustment cap. These checks do not validate narrative severity or gameplay
prices.

## Recommendation and Decision Boundary

Use one overall burden assessment for the same affected scope rather than
automatically adding or multiplying separate limitation percentages. Where
different portions genuinely have different burdens, count each portion once.
Do not use "highest individual band wins" as a substitute for evaluating the
combination, and do not multiply this model into a universal pricing system.

The user approved this guidance for provisional comparisons. It preserves
simple estimates for whole-HOLT limitations and handles partial scope when
needed, without pretending to finely distinguish every Severe package.
Actual prices, compensation, rounding, Leverage, and packages beyond the bands
remain unresolved.

The bounded limitation-estimation pass is complete. Return to the concrete
HOLD/HOLT and Classification package work; the estimator is available when a
defined package supplies enough information to use it. Do not extend the
estimation procedure merely to create additional tests or approval steps.
