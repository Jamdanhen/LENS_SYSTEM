# Current-Rank Advancement Pricing Test

Date: 2026-09-06
Status: Exploratory tests requested by the user; no price or award adoption.

## Exact Candidate

Use the latest displayed table, not the earlier flat 30/6/3/3/2/2 proposal:

```text
Cost to buy the next Rank = CURRENT Rank x layer coefficient

Attribute:         12
Derived Attribute:  4
Task / Field:       3
Specialty / Precision: 2
```

This changes both cost shape and earlier ratios. At equal current ranks,
Derived costs one-third of Attribute, not one-fifth. Task and Field are equal;
Specialty and Precision are equal. No compounding of prices between successive
Ranks: each new purchase uses its current Rank and the relevant coefficient.

Existing Rank 10 horizon and Derived parent caps remain controls. Construction
budgets, permission rules, new Lens acquisition, and higher Horizons are unchanged.

Sources: the user's latest table and
`lens-concept-led-25-50-100-rebuild-test-v0.1.json`.

## Timing Control

Illustrate 20 advancement points after each session, zero initial savings, and
banking permitted. This is an arbitrary pacing fixture, not an award recommendation
or an adopted rule about when training becomes narratively available. Five
sessions provide 100 points. Changing the award rate changes waiting time.

| Increase | Attribute cost / sessions saving | Derived cost / sessions saving | Task or Field cost / sessions saving | Specialty or Precision cost / sessions saving |
|---|---|---|---|---|
| 3 -> 4 | 36 / 2 | 12 / 1 | 9 / 1 | 6 / 1 |
| 5 -> 6 | 60 / 3 | 20 / 1 | 15 / 1 | 10 / 1 |
| 9 -> 10 | 108 / 6 | 36 / 2 | 27 / 2 | 18 / 1 |

Each cell assumes independently saving from zero without other purchases.

## Guide: Three 100-Point Portfolios

Saved starting line: Mobility 7, Coordination 6, Discharge 8, Firearms 8,
Handguns 6, Revolvers 8. All other Expression factors remain unchanged.
These are deliberately selected strategies, not exhaustive whole-character
optimizations. Unspent points remain banked and are shown.

### Attribute First

- Mobility 7 -> 8: 84 points, affordable after session 5.
- Bank: 16 points.
- Every applicable Mobility-carried Expression gains 14.29%.
- Its five child ceilings rise, but no free Derived ranks are granted.

### Mixed Development

- Coordination 6 -> 7: 24, after session 2.
- Discharge 8 -> 9: 24, after session 3.
- Firearms 8 -> 9: 24, after session 4.
- Handguns 6 -> 7 -> 8: 12 + 14, both affordable by session 5.
- Total 98; bank 2.

### Narrow Development

- Handguns 6 -> 10: 12 + 14 + 16 + 18 = 60.
- Revolvers 8 -> 10: 16 + 18 = 34.
- Total 94; bank 6.
- Following that order, Handguns increases occur in sessions 1, 2, 3, and 3;
  Revolvers increases occur in sessions 4 and 5.

| Portfolio | Signature revolver Rating gain | Other handgun gain | Other firearm gain | Unrelated Coordination-carried gain |
|---|---:|---:|---:|---:|
| Attribute first | 14.29% | 14.29% | 14.29% | 14.29% |
| Mixed | 33.18% | 33.18% | 18.38% | 6.25% |
| Narrow | 38.89% | 25.00% | 0% | 0% |

The mixed portfolio retains most of the signature improvement while improving
more alternatives. The Attribute's additional benefit to non-Coordination
Mobility routes is not captured by the last table column. Training can also
apply through valid routes outside Mobility; neither type universally subsumes
the other. Rating gains are not percentage-point success gains or proportional
Effect gains. No new roll, Difficulty, or ordinary-activity failure rate is added.

## Clinician: Parent Ceiling

Saved clinician has Mobility 6 and Coordination 6. Buy Mobility 6 -> 7 for 72,
then Coordination 6 -> 7 for 24. Total 96, bank 4, both affordable by session 5
under the pacing fixture. Coordination-carried Expressions improve 23.96%;
other applicable Mobility routes improve 16.67%. The parent purchase is a real
broad improvement, not merely an unlock fee. No character level is required.

## Findings and Limits

JavaScript read the saved builds, summed each sequential current-Rank price,
checked the 100-point limits, Rank horizon and parent cap, and recalculated
relative gains and cumulative award timing. No dice simulation was needed.

The candidate produces meaningful alternatives in these cases. Attribute saving
is substantial but finite at the sample pace. Narrow advancement remains faster;
the guide can add six narrow ranks while saving for one Attribute increase would
take five sessions. This is a visible tradeoff, not proof of balanced player utility.

Compared with flat prices, later narrow ranks also cost more. Low-current-Rank
development is cheaper, potentially encouraging breadth. That is not a guarantee
against optimization or runaway compounding in different builds.

An actual missing entry is acquiring Rank 1 from an unranked entry: directly
applying current Rank zero would charge zero. These tests only advance existing
Rank 1+ entries. First-rank cost needs a separate explicit decision; do not silently
make it free, use destination Rank, or change the full table to repair it.

Retain as a promising exploratory candidate, not an adopted advancement economy.
If pursued, settle the first-rank entry price before using it as a complete
purchasing procedure. Awards, training requirements, permissions, new Lenses,
and post-10 availability remain unresolved.

## Subsequent User Decision: First-Rank Buy-In

The user supplied the missing entry rule: use the flat layer rate to acquire
Rank 1. Specialty/Precision buy-in is 2, Task/Field 3, Derived 4, Attribute 12.
For any permitted unranked purchase, do not charge zero. Subsequent increases
continue to use current Rank times the layer rate. Consequently 0 -> 1 and
1 -> 2 cost the same. This records the candidate's entry procedure, not new
permission to buy otherwise unavailable capabilities or an adoption of awards.
