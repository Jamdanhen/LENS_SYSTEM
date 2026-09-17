# Advancement Pacing Target Comparison

Date: 2026-09-06
Status: User-authorized diagnostic test. No advancement prices or awards adopted.

Subsequent decision: the user selected calibrated flat pricing for simplicity
on 2026-09-06. The working baseline now records 120 / 40 / 30 / 30 / 20 / 20.
The original test status and candidate comparisons below describe the experiment
before that decision, not competing active rules.

The user also clarified that 25/session is the recommended reference pace;
deliberately higher or lower awards are table prerogatives. Award sensitivity
below describes the resulting pace, not a defect that needs a compensating rule.

## Objective and Controls

Compare flat and progressive prices against proposed pacing targets:

- Useful early training development within 1-2 sessions.
- Specialty 0 -> 10 within 8-12 sessions of dedicated spending.
- Mid-to-high Attribute improvement within 4-6 sessions.

Use 25 points awarded after each session, zero initial savings, no other spending,
and no milestones. Funding session = ceiling(total cost / 25). Targets concern
funding dates, not automatic permission or elapsed fictional training time.
Early training means acquiring a permitted Task, Field, Specialty, or Precision.
Attribute probes cover 6 -> 7 through 9 -> 10. Early Attribute development is
also reported, but the early-training target does not require cheap Attributes.

Retain current Rank horizon, Derived parent caps, permitted unranked defaults,
and the flat first-rank buy-in. No construction budget, Expression multiplier,
Difficulty, Scale, Access, or narrative advancement requirement is changed.

## Candidate Prices

| Layer | Original flat | Original progressive coefficient | Calibrated flat | Calibrated progressive coefficient |
|---|---:|---:|---:|---:|
| Attribute | 12 | 12 | 120 | 16 |
| Derived Attribute | 4 | 4 | 40 | 8 |
| Task | 3 | 3 | 30 | 6 |
| Field | 3 | 3 | 30 | 6 |
| Specialty | 2 | 2 | 20 | 4 |
| Precision | 2 | 2 | 20 | 4 |

Flat prices apply to each added Rank. Progressive prices are coefficient times
max(1, current Rank), preserving equal prices for 0 -> 1 and 1 -> 2.

Flat calibration multiplies every old price by ten, preserving all relative
prices. Progressive calibration is NOT just a denomination change: Attribute
coefficient rises from 12 to 16, while other coefficients double. Derived cost
becomes half Attribute cost at equal Rank, rather than one-third. Intermediate
layer prices are comparison candidates, not proven exchange values.

Calibration is deliberate, not independent evidence of balance. Specialty
mastery costs 10c flat or 46c progressive. At 25/session, integer flat prices
18-30 and progressive coefficients 4-6 meet the 8-12-session target. Attribute
coefficients 13-16 satisfy all four progressive Attribute probes. The chosen
values are simple representatives, not uniquely correct solutions.

## Specialty Progression

Every row starts from zero; funding dates include saved change.

| Target Rank | Calibrated flat cost / sessions | Calibrated progressive cost / sessions |
|---|---:|---:|
| 1 | 20 / 1 | 4 / 1 |
| 3 | 60 / 3 | 16 / 1 |
| 5 | 100 / 4 | 44 / 2 |
| 8 | 160 / 7 | 116 / 5 |
| 10 | 200 / 8 | 184 / 8 |

Original flat completes 0 -> 10 for 20 points in one session. Original
progressive completes it for 92 in four. Both fail the mastery pacing target.

Calibrated flat permits new Task/Field training in two sessions and a new
Specialty/Precision in one. Progressive permits each in one session. Both pass
early training, but progressive allows several low ranks immediately.

## Attribute Probes

| Increase | Calibrated flat cost / sessions | Calibrated progressive cost / sessions |
|---|---:|---:|
| 6 -> 7 | 120 / 5 | 96 / 4 |
| 7 -> 8 | 120 / 5 | 112 / 5 |
| 8 -> 9 | 120 / 5 | 128 / 6 |
| 9 -> 10 | 120 / 5 | 144 / 6 |

Both pass. At low Rank the distinction is larger: Attribute 1 -> 2 costs 120
flat (five sessions) or 16 progressive (one session). The actual Attribute
improvement is identical, with its proportional Expression impact depending on
starting Rank. This test does not prove low-rank Attribute purchases balanced.

## Existing Character Portfolios

Reuse the unchanged guide and clinician portfolios in
`lens-flat-versus-current-rank-advancement-test-v0.1.md`, based on the saved
concept-led 25/50/100 character builds. Each portfolio is funded independently.

| Portfolio | Calibrated flat cost / sessions | Calibrated progressive cost / sessions |
|---|---:|---:|
| Guide: Mobility 7 -> 8 | 120 / 5 | 112 / 5 |
| Guide: Coordination 6 -> 7, Discharge 8 -> 9, Firearms 8 -> 9, Handguns 6 -> 8 | 140 / 6 | 196 / 8 |
| Guide: Handguns 6 -> 10 and Revolvers 8 -> 10 | 120 / 5 | 188 / 8 |
| Clinician: Mobility 6 -> 7, then Coordination 6 -> 7 | 160 / 7 | 144 / 6 |
| Guide: all six aligned entries raised to Rank 10 | 760 / 31 | 1016 / 41 |

The full guide line begins at 7/6/8/8/6/8 and requires 17 increases. It is not
a whole-character maximum. Parent increases precede any otherwise capped child
increase. Final ratings and gains are identical between models; only prices and
funding dates differ. Portfolio totals above 100 are permitted because this is
advancement, not a new 100-point construction allocation.

## Sensitivity and Limits

| Repeated session award | Flat Specialty 0 -> 10 | Progressive Specialty 0 -> 10 | Flat Attribute 7 -> 8 | Progressive Attribute 7 -> 8 |
|---|---:|---:|---:|---:|
| 15 | 14 | 13 | 8 | 8 |
| 25 | 8 | 8 | 5 | 5 |
| 35 | 6 | 6 | 4 | 4 |
| 50 | 4 | 4 | 3 | 3 |

These targets therefore require a reasonably representative 25-point pace;
they are not guaranteed across the proposed 10-50 award range. Sustained maximum
awards recreate four-session Specialty mastery in both calibrated candidates.
No actual play data establishes the average award. Spending across several
entries lengthens mastery; banked starting XP or milestones can shorten it.

An additional progressive sensitivity raises Specialty/Precision coefficient
to 5, leaving other coefficients unchanged. It gives Rank 5 in three sessions,
Rank 10 for 230 points in ten sessions, and the guide narrow portfolio for 235
in ten sessions. This further compresses the Field-to-Specialty price gap and
is not adopted merely because it hits the middle of the target range.

## Verification and Decision

JavaScript summed each sequential purchase, retained fractional-session savings
through cumulative costs, checked the early-training/mastery/Attribute targets,
and calculated independent portfolio totals and award-rate sensitivity. No
random simulation was needed. This is a pacing test, not an exhaustive utility,
character optimization, or narrative training test.

Both calibrated models pass at 25/session. Flat pricing meets the targets with
the existing relative prices and steadier rank progression. Progressive pricing
allows faster low-rank development, then increasingly favors breadth over further
investment in already-high ranks. The targets alone do not select the winner.

Recommendation for discussion: calibrated flat is the simpler leading candidate
if steady growth is desired. Retain progressive if faster novice acquisition and
slower late refinement are intentional. Decide that experiential difference
before adopting the table; do not change prices merely to produce more tests.
