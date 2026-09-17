# Resonance Offsetting Dissonance

Status: Completed comparison subsequently adopted by the user, 2026-09-08.
Apply max(0, 1 + Resonance - Dissonance) once, preserving actual contributing
Lenses, existing valuations, independent Function Bands, Access, and paid
spending. Baseline and terminology now carry this working rule. The separate
Dissonance-floor model below is the historical comparison, not current authority.

## Question and Controls

Can helpful contributions offset numerical interference directly, including
when Dissonance reaches a 100% reduction? Compare the same permitted Expressions
without changing contribution magnitudes, Difficulty, Scale, expertise,
equipment, Function Bands, paid-spending prices, or Access.

Sources: baseline Current Roll Budget and paid boost/natural-01 procedures;
`lens-dissonance-zero-floor-test-v0.1.md`; user's request to test offsetting.

Let B contain all unchanged noncontextual factors, r the sum of helpful
contributions above neutral, and d the sum of obstructive reduction amounts.
Neither r nor d includes neutral 1.00.

```text
Separate-pool comparison with proposed zero floor:
B x (1 + r) x max(0, 1 - d)

Direct-offset candidate with proposed zero floor:
B x max(0, 1 + r - d)
```

Both floors are explicit test boundaries, not previously adopted rules. The
net candidate sums all applicable contributions before applying its zero floor.
Do not cap d at 1 first, discard excess interference, or round pools to tenths.
Floor the final numerical Rating only after the full Expression calculation.

## Numerical Findings

For B=60:

| Helpful amount | Reduction amount | Separate Rating | Offset Rating |
| --- | --- | ---: | ---: |
| 0% | 0% | 60 | 60 |
| 20% | 20% | 57 | 60 |
| 50% | 50% | 45 | 60 |
| 90% | 90% | 11 | 60 |
| 20% | 100% | 0 | 12 |
| 50% | 100% | 0 | 30 |
| 100% | 150% | 0 | 30 |
| 50% | 150% | 0 | 0 |

These are Ratings, not probabilities. Separate 20%/20% produces57.6 before
final flooring. The ordinary roll30 generates two Effects at Rating45 and
four at Rating60. At Rating30 it generates one. Effects are not automatically
wounds or permission to expand Scope.

When only one side contributes, the methods agree. For reductions d<=1,
the unfloored Rating difference is B x r x d: separate multiplication includes
the cross-product reduction that direct offsetting removes. Equal r and d
produce baseline under netting, but factor1-r-squared under separate pooling.
For r=d=0.90, this is factor1 versus0.19. That is a substantial change in mixed
contexts, not cosmetic arithmetic simplification.

The net candidate never produces a lower result than the separate-floor
comparison for the nonnegative contributions tested. It does not raise neutral
or one-sided-context outcomes. Large capability values magnify the difference:
at B200, equal50% amounts yield150 separately versus200 net.

## Paid Boost

Keep one point, +0.20, pre-roll timing, one boost, and retention on a replacement
reroll. At B60 with no prior positive contribution:

| Reduction | Separate before/after boost | Net before/after boost |
| --- | --- | --- |
| 50% | 30 -> 36 | 30 -> 42 |
| 100% | 0 -> 0 | 0 -> 12 |
| 150% | 0 -> 0 | 0 -> 0 |

Above the net floor, +0.20 adds0.20B before final rounding. At or below the
floor, some or all of that contribution can be absorbed by remaining excess
interference. It is not always a20% relative increase to the prior Final Rating.
No new boost price or repeat-spending allowance is inferred from these results.

## Narrative Application Checks

| Situation | Interpretation under direct offsetting |
| --- | --- |
| Specific rehearsal helps with a presentation despite distracting surroundings | The genuine helpful and obstructive numerical contributions offset; the distraction still exists |
| Concrete shared interests help persuade a council despite distrust arising from current events | Both may affect the same permitted Expression; offsetting does not erase the distrust or guarantee agreement |
| A helper relays fragments of an audible message through heavy interference | Applicable support may offset interference; information nobody can perceive is not manufactured by the number |
| A social introduction is offered as help lifting a gate, with no supporting fictional relationship | Reject as inapplicable, not as insufficient numerical value |
| Equipment specifically eliminates a relevant source of interference | Remove or reassess the source as its function warrants; do not also grant a duplicate offset for the same benefit |
| A Condition imposes a50% Function Band | Preserve that independent factor; do not import its penalty into the new net total or charge it twice |
| A Condition closes Access to the chosen action | Helpful numerical context does not open it; no forbidden roll follows |

The candidate does not require every numerical Resonance source to be a
specifically matched counter-Lens. Each must genuinely help the current
Expression. A specific counter can alter the source itself; ordinary offsetting
changes the numerical result while the sources and their other consequences
remain real. No separate classification or new track is created.

## Excess, Recovery, and Function

With r=0.50 and actual d=1.30, net factor0.20 gives Rating12 from B60.
Remove a0.20 obstructive source: d becomes1.10 and the factor becomes0.40,
giving24. If d had been capped before netting, the result would be wrong.
Keep the actual applicable Lenses and recompute when they change.

Offsetting a Condition's distinct contextual interference does not erase the
Condition, pay down Load, heal injury, or restore closed Access. In the control
with an independent50% Function Band and equal50% contextual help/interference,
B60 remains reduced to30 even though the contextual net is neutral.

If the final net factor is zero, the existing natural-01 rule still permits a
chance on otherwise permitted attempts. Initial01 then06 gives -93; it does
not receive an unavailable permission. The comparison does not reopen special
results, automatic actions, or Condition recovery rules.

## Verification and Recommendation

`lens-resonance-dissonance-offset-comparison-v0.1.ps1` completed224 numerical
cases and1,124 arithmetic assertions over four B values, seven helpful totals,
and eight obstructive totals. Controls check neutral/one-sided agreement,
equal-value cancellation, the cross-product difference, final-only flooring,
excess preservation, independent Function Bands, and a zero-Rating exceptional
example. This is not an empirical playtest or complete dice-distribution model.

Recommend direct numerical offsetting with a zero minimum on the combined
factor. It provides the intended counterbalance and allows genuine help to
matter beyond100% interference. Adoption would explicitly replace separate
Resonance/Dissonance multiplication, not merely amend the floor proposal.

Keep the sources identifiable, existing contribution valuations and ten-percent
assessment convention, paid-spending rules, and normal applicability. Accept
that mixed-context outcomes, including the paid boost under interference, are
stronger than before. No universal upper ceiling, automatic healing, or new
permission follows. The next decision is whether to adopt that behavioral
change, not another test of the same arithmetic.
