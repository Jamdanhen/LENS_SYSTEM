# Training-Tier Advancement Cost Test

Date: 2026-09-06
Status: Requested comparison; all differentiated Training prices remain candidates.

## Controls

Keep the shared pool, flat layer costs, Attribute = five Derived increases,
and Derived = two Task/Field increases as working test controls. The prior
undifferentiated Training reference is held fixed at Task/Field price while
narrow-layer prices vary. No currency name, award schedule, construction-budget
change, new permission, or Heralds domain price is adopted.

Task and Field remain equally priced for isolation, not because this test proves
their scope equivalent. Specialty and Precision can be bought under their existing
Field relationships, including the already permitted direct Precision selection
without buying a Specialty. No new parent-Rank cap is introduced for those layers.

Compare spending equal to ONE Derived increase:

| Model | Task / Field price | Specialty price | Precision price |
|---|---:|---:|---:|
| Equal Training | 100% | 100% | 100% |
| Moderate paired discount | 100% | 66.67% (exactly two-thirds) | 66.67% (exactly two-thirds) |
| Half-price pair | 100% | 50% | 50% |
| Further Precision discount | 100% | 50% | 25% |

These percentages refer to the Task/Field price, not Rating modifiers. Use
integer arithmetic units for exact cost comparisons; no fractional purchases.

## Builds and Method

Source for existing characters:
`lens-concept-led-25-50-100-rebuild-test-v0.1.json`.

- Developing firearms control: Discharge, Firearms, Handguns, and Revolvers all
  Rank 4. This synthetic control avoids starting near the ceiling. Coordination
  4 under Mobility 5 permits a Derived increase for comparison. Not a new full
  character or a replacement for the saved builds.
- Existing guide: Discharge 8, Firearms 8, Handguns 6, Revolvers 8.
- Existing clinician: Treat 8, Medicine 9, Surgery 9, Neurosurgery 10.

Enumerate every nonnegative allocation to the four existing relevant Training
entries within the spending limit and Rank 10 horizon. Select greatest signature
Rating gain. Resolve exact ties by preferring Task, Field, Specialty, then
Precision as a declared comparison preference, not a universal breadth law.
The search does not price or optimize every possible new expertise purchase.

All other Expression factors remain fixed. Gains below are relative Rating
changes, not percentage points of success probability or proportional Effects.
No new Difficulty, dice roll, or automatic-action requirement is introduced.
JavaScript computed and enumerated the options, using integer cost units.

## Results

| Model | Developing control | Existing guide | Existing clinician |
|---|---:|---:|---:|
| Equal Training | +14.80% | +12.50% | +11.11% |
| Moderate paired discount | +22.45% | +18.75% | +11.11% |
| Half-price pair | +30.61% | +25.35% | +11.11% |
| Further Precision discount | +53.06% | +31.94% | +11.11% |

Selected resulting ranks, ordered Task / Field / Specialty / Precision:

| Model | Developing control | Guide | Clinician |
|---|---|---|---|
| Equal Training | 5 / 5 / 4 / 4 | 8 / 8 / 8 / 8 | 10 / 9 / 9 / 10 |
| Moderate paired discount | 4 / 4 / 6 / 5 | 8 / 8 / 9 / 8 | 10 / 9 / 9 / 10 |
| Half-price pair | 4 / 4 / 6 / 6 | 8 / 8 / 9 / 9 | 10 / 9 / 9 / 10 |
| Further Precision discount | 4 / 4 / 5 / 10 | 8 / 8 / 9 / 10 | 10 / 9 / 9 / 10 |

The clinician's equal outcome reflects the existing near-ceiling allocation:
in these comparisons two Treat increases maximize the signature result. It is
not proof that the price models are interchangeable throughout advancement.

## Breadth and Fallback Check

For the developing firearms control:

| Model | Signature revolver use | Other handgun use | Other firearm use |
|---|---:|---:|---:|
| Equal Training | +14.80% | +14.80% | +14.80% |
| Moderate paired discount | +22.45% | +14.29% | 0% |
| Half-price pair | +30.61% | +14.29% | 0% |
| Further Precision discount | +53.06% | +7.14% | 0% |

The moderate pair offers additional signature improvement while leaving other
firearms unchanged. The separate Precision discount strongly rewards narrowing
in this control: six Precision ranks plus one Specialty rank fit the budget.
That is not inherently invalid for a deliberately narrow character, but it is
a substantial pacing choice, not a minor price adjustment.

For the same expenditure a legal Coordination increase gives +7.14% in the
developing control or +6.25% for the guide across applicable Coordination routes.
It also helps non-firearm activities. The clinician is already at Coordination's
parent cap and cannot buy another Rank there without first raising Mobility.
These differences are retained rather than bypassed for symmetry.

## Specialty / Precision Equal-Price Check

Equal prices do not prevent Precision from adding its distinct applicable
multiplier alongside Specialty. The half-price paired developing control buys
both; the moderate paired control also buys both. No independent Precision
discount is required for a numerical incentive to develop an existing deep line.

When choosing only one new narrow entry at the same Rank and cost, an otherwise
equivalent broader Specialty generally covers more uses than a contained
Precision. Choosing the narrower one directly sacrifices breadth; this is the
user's existing permitted option, not a reason to force Specialty as a prerequisite
or invent a compensation bonus. Additional Precision can later add depth where
both layers are justified, rather than duplicate the same named contribution.

## Recommendation

Keep Specialty and Precision at the same price. Prefer the moderate paired
discount for the next whole-pool test over halving both or adding an extra
Precision discount. The choice is a design recommendation, not statistically
proven balance or a final rule. A campaign intentionally favoring rapid narrow
development could prefer the stronger alternatives.

The moderate relationship has an integer representation:

```text
Attribute          30
Derived Attribute   6
Task                3
Field               3
Specialty           2
Precision           2
```

These are relative flat per-Rank costs, not an adopted experience denomination,
award rate, or change to the 25/50/100 creation pools. The Attribute/Derived
one-fifth relationship and Derived/two-broad-Training relationship are preserved.
Task/Field equality remains a test control. New Lens acquisition, setting
permissions, Background provisions, ranked domains, and higher horizons remain
outside this test. User judgment is needed before adopting this table as the
working whole-pool advancement schedule.
