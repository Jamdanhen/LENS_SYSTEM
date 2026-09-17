# LENS Precision Layer Expression Impact Test v0.1

Date: 2026-09-05

Status: Experimental arithmetic at user direction. Precision is a working
name for a possible layer beneath Specialty, not an adopted fourth Training
layer. This test does not alter the baseline or construction budgets.

## Question And Controls

What happens to Expressions if narrower expertise beneath Specialty supplies
another multiplier using the existing Rank curve?

Existing route:

    Attribute x Derived multiplier x Task x Field x Specialty

Candidate route:

    Attribute x Derived multiplier x Task x Field x Specialty x Precision

Controls inherited from the prior Training-layer and pool tests:

- Attribute contributes its rating directly.
- Derived and Training multipliers are 1 + Rank / 10.
- Rank 0 is x1.00; Rank 10 is x2.00.
- Precision uses the same curve for this test, not a separately invented curve.
- One Training Point per Rank is assumed for the equal-cost comparison only.
- Precision is narrower than, and applicable within, its parent Specialty.
- Parent must be ranked for the tested Precision; no parent-Rank cap is imposed
  in the added-investment test. Neither requirement is adopted by this test.
- No equipment, HOLT, Scale change, active Resonance, Dissonance, or action
  division is added. Difficulty and other external factors are held at x1
  to isolate the stack; this does not label any actual scene as Difficulty 0.
- Results are Expression Ratings, not percentage chances. Ratings above 100
  are retained. No reserved-roll or automatic-action rules are changed.
- The 100-point working Training budget remains unchanged. These are local
  routes, not full legal character allocations or recommended tier profiles.

Sources: `lens-task-portable-specialization-branch-math-test-v0.1.md` and
`lens-training-pool-75-vs-100-test-v0.1.md`, translated to current Task / Field /
Specialty names. Their historical 75-point controls are not restored.

## Added Investment: Same Existing Expression

All ranks are explicit. Each Precision column adds that many Training Points
under the test cost, leaving every existing rating unchanged.

| Attribute / Derived / Task / Field / Specialty Ranks | No Precision | Precision 1 | Precision 3 | Precision 5 | Precision 10 |
|---|---:|---:|---:|---:|---:|
| 5 / 5 / 4 / 4 / 4 | 20.580000 | 22.638000 | 26.754000 | 30.870000 | 41.160000 |
| 8 / 8 / 6 / 6 / 6 | 58.982400 | 64.880640 | 76.677120 | 88.473600 | 117.964800 |
| 10 / 10 / 10 / 10 / 10 | 160.000000 | 176.000000 | 208.000000 | 240.000000 | 320.000000 |

First row, fully expanded:

    Attribute 5
    x Derived Rank 5: x1.5
    x Task Rank 4: x1.4
    x Field Rank 4: x1.4
    x Specialty Rank 4: x1.4
    = 20.58

    x Precision Rank 5: x1.5
    = 30.87

Thus Precision Rank 1 adds 10% of the no-Precision Expression, Rank 3 adds
30%, Rank 5 adds 50%, and Rank 10 adds 100%. These are relative increases,
not percentile-point additions. Precision 5 adds 10.29 rating points to the
first route, 29.4912 to the second, and 80 to the third.

The third row is a local ceiling diagnostic, not a starting-character build.
It takes 30 Training Points to maximize three Training layers and 40 to
maximize four. Crossing 100 is not evidence of a fault or a change in Scale.

## Equal Investment: Reallocate The Same Points

Enumerate all integer allocations from Rank 0 to Rank 10 across three or four
Training layers, retaining the same total cost. Maximize only the product for
one fully applicable route. All maximizing allocations below have ranked
parents. Attribute and Derived capability are held equal and cancel from
the percentage comparison.

| Training Points | Task / Field / Specialty | Product | Task / Field / Specialty / Precision | Product | Increase |
|---|---|---:|---|---:|---:|
| 12 | 4 / 4 / 4 | 2.7440 | 3 / 3 / 3 / 3 | 2.8561 | 4.09% |
| 20 | 7 / 7 / 6 | 4.6240 | 5 / 5 / 5 / 5 | 5.0625 | 9.48% |
| 24 | 8 / 8 / 8 | 5.8320 | 6 / 6 / 6 / 6 | 6.5536 | 12.37% |
| 30 | 10 / 10 / 10 | 8.0000 | 8 / 8 / 7 / 7 | 9.3636 | 17.05% |

Permutations have the same fully applicable product but different fallback
strength. Displayed permutations favor the broader layers when tied. The
enumeration validates only one-route arithmetic, not optimal whole-character
spending or relative campaign usefulness.

At twelve points with the first row's 7.5 Attribute/Derived core:

    Three layers, 4 / 4 / 4: 20.58
    Four layers, 3 / 3 / 3 / 3: 21.42075

    Outside Precision but inside Specialty:
    Original route: 20.58
    Reallocated route: 7.5 x 1.3 x 1.3 x 1.3 = 16.4775

The reallocation gains 4.09% on the narrow route but loses 19.94% on the
broader Specialty route. It buys depth by reducing broader development.

## Applicability And Fallback

Use the first added-investment route as an illustrative character:

    Task: Discharge 4
    Field: Firearms 4
    Specialty: Handguns 4
    Precision: Revolvers 5

With Attribute/Derived core 7.5 and identical external factors:

| Attempt | Applicable Training | Rating |
|---|---|---:|
| Discharge a revolver | Task, Field, Specialty, Precision | 30.87 |
| Discharge a non-revolver handgun | Task, Field, Specialty | 20.58 |
| Discharge a shotgun | Task, Field | 14.70 |

This demonstrates ordinary narrower expertise, not attachment to one unique
weapon. Equipment differences are deliberately omitted. Revolvers is not
adopted as a universal fourth-tier category by this example.

Whether Precision travels with its Specialty to other Tasks remains open;
that behavior is unnecessary to calculate these Discharge comparisons.

## Effect Sensitivity

For one normalized unopposed control with the same successful roll of 10,
use the existing baseline Effect plus one per complete ten-point margin:

    Without Precision: 20.58 - 10 = 10.58 margin -> 2 Effect Levels
    With Precision 5: 30.87 - 10 = 20.87 margin -> 3 Effect Levels

This is an illustration, not an encounter damage forecast. Actual Difficulty,
opposition, applicable mitigation, and allocation of Effects still matter.
Precision increases the one Expression; it does not add a secondary effect
contest, automatic Condition, or independent effect multiplier.

## Findings And Next Boundary

1. An additional equal-curve layer has a substantial added-investment impact:
   up to doubling the fully applicable Expression at Rank 10.
2. Equal-cost redistribution has a smaller but real narrow-route advantage:
   4.09% to 17.05% in the tested allocations, with weaker broader fallbacks.
3. The all-max local ceiling rises from 160 to 320 before other factors; this
   compares thirty Training Points with forty, not equal spending.
4. No new resolution procedure is necessary for the candidate multiplier.
   That arithmetic compatibility does not establish that another layer is
   desirable, affordable across a whole Character, or ready for adoption.

Recommendation: keep Precision as a viable candidate. The next substantive
comparison is equal-budget whole-character construction with and without it,
not a new curve or an immediate budget increase. Use the existing 100 Training
Points and explicitly identify any assumed nesting and portability rules.

No Precision doctrine, mandatory purchase, new Rank cap, or final naming of
individual deeper subjects is adopted here.
