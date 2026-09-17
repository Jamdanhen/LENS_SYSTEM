# HOLT Rank Advancement: 80-Point Test

Status: User-authorized cost test. HOLT advancement at 80 is the user's agreed
working test number. Axis 35 remains an assistant-proposed price used as a
control, not a separately adopted final price. No initial Access price adopted.

## Inputs And Current Decisions

- Initial HOLT acquisition includes Rank 1 and defined thematic Access, but
  no Axis Ranks. This follows the user's latest explicit clarification, not
  the earlier baseline option to include Axis allocation at acquisition.
- Open unranked Axes permit applicable attempts through existing capability,
  without a HOLT-derived numerical bonus. This is not an empty acquisition.
- Axis Rank cannot exceed parent HOLT Rank. Raising the parent does not itself
  multiply Expressions or automatically raise Axes.
- Test prices: Attribute 120, Derived Attribute 40, HOLT 80, Axis 35,
  Task/Field 30, Specialty/Precision 20, all per added Rank.
- Test horizon 10. All proposed purchases must be narratively eligible.
- No free Axis allocation on parent advancement in this comparison. No
  limitation rebates, different Scale, or newly granted permission on Rank-up
  is assumed. Initial acquisition cost is excluded throughout.
- 25 points per session is a reference, not a mandatory award. Session counts
  assume zero savings and all subsequent awards devoted to the stated goal.
  Leftover points carry forward; these are not fixed waiting periods per Rank.

## Purchase Results

| Purchase | Points | Sessions from zero |
| --- | ---: | ---: |
| First Axis Rank after acquisition | 35 | 2 |
| Axis increase below an existing ceiling | 35 | 2 |
| HOLT ceiling increase alone | 80 | 4 |
| Raise ceiling and one capped Axis | 115 | 5 |
| Raise ceiling and three capped Axes | 185 | 8 |
| Raise ceiling and five capped Axes | 255 | 11 |

The ceiling-only purchase supplies development room, not an immediate Expression
increase. With a HOLT at 3 and an Axis at 3, raising the HOLT to 4 leaves that
Axis at 3 until the further 35-point purchase. An Axis at 2 beneath HOLT 5 can
reach 3 for 35 without paying another parent increase.

## Ordinary Advancement Comparison

| Purchase | Points | What changes |
| --- | ---: | --- |
| Derived Attribute below its ceiling | 40 | That Derived Attribute improves |
| Attribute alone | 120 | Broad supplying capability improves and Derived development ceiling rises |
| Attribute plus one capped Derived Attribute | 160 | Both parent and selected Derived improve |
| HOLT plus one capped Axis | 115 | The parent ceiling rises; only the purchased Axis adds numerical development |

The 115 versus 120 proximity is useful pacing information, not equality of
benefit. An Attribute directly contributes across its applications; a HOLT
ceiling does not. Likewise the 115 versus 160 comparison is not a comparison
of equal Expression increases. No effect curve, Difficulty, or roll outcome
has been altered or simulated to manufacture equivalence.

## Long Development From Newly Acquired HOLT Rank 1

Start with no ranked Axes. Initial Access and Rank 1 are already acquired at
an unspecified cost. The remaining development costs are:

| Goal | Parent cost | Axis cost | Total | Sessions from zero |
| --- | ---: | ---: | ---: | ---: |
| HOLT 5, one Axis 5 | 320 | 175 | 495 | 20 |
| HOLT 10, one Axis 10 | 720 | 350 | 1,070 | 43 |
| HOLT 10, three Axes 10 | 720 | 1,050 | 1,770 | 71 |

These are completion horizons, not periods without useful powers. Access works
from acquisition and intermediate Axis purchases improve the Character along
the way. Ordinary creation pools remain 25 / 50 / 100; no conversion to these
advancement prices is implied.

## Breadth And Opportunity Cost

One ceiling increase plus n capped Axis increases costs 80 + 35n. The effective
cost per improved Axis is therefore 115 for one, about 61.67 for three, 51 for
five, and 39 for twenty. Every Axis still requires its own purchase and valid
Access. Twenty is a breadth stress case, not assignment of twenty Axes to a
particular HOLT or resolution of Leverage scope treatment.

At a hypothetical budget of 240, the Character could instead purchase two
Attribute increases, six Derived increases, or eight Task/Field increases,
where the relevant caps and eligibility permit. Three parent HOLT increases
also cost 240 but improve no Axis by themselves. Six Axis increases cost 210
with 30 left if existing ceilings provide room. Those Axis increases could
be spread across multiple Axes; this does not bypass any cap.

Finding: the flat parent cost rewards developing breadth beneath an acquired
ceiling, while a narrow specialist pays the whole ceiling cost for one route.
This is an architectural consequence worth retaining in the comparison, not
evidence that a broad HOLT should receive free Access or every Axis for 80.
Acquisition scope and limitations remain important to the initial price.

## Result And Next Decision

80 is a viable working advancement candidate at the tested Axis price of 35.
It keeps parent-plus-Axis improvement near the existing Attribute purchase
cadence, permits cheaper development beneath an already purchased ceiling,
and requires substantial investment to reach the tested horizon.

The residual risk is burden on narrow development versus shared parent cost
across many Axes. These cost tests do not establish equal combat or narrative
value. No evidence here requires changing either candidate amount now.

Recommendation: retain 80 for continued HOLT advancement comparisons and move
to initial acquisition, where buying new thematic Access creates value beyond
raising an already owned development ceiling. Keep Axis 35 explicitly
provisional. Do not assume Rank 1 Access acquisition costs 80 or add 80 to an
Access estimate without first defining whether that estimate covers the
complete acquisition.

Verification: companion PowerShell script passed 46 checks: nine purchase
cases, 36 flat-cost checks across starting Ranks 1-9 and breadths 1/3/5/20,
and rejection of an Axis increase above its parent ceiling.

Sources: current main-task acquisition/Rank decisions;
`../system/lens-system-baseline-draft-v0.1.md` (Flat Advancement Pricing and
HOLD/HOLT/Axis architecture); `lens-holt-rank-80-advancement-test-v0.1.ps1`.
