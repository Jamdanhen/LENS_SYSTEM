# Independent Opposed Effects

Date: 2026-09-10
Status: Consolidated independent-Effects procedure adopted as the working
opposed-resolution model, 2026-09-10. Baseline and terminology updated.

## Full-Model Adoption

The user approved replacing Net-Margin-based opposed Effect generation with the
consolidated independent-Effects procedure. Preserve full defensive cancellation,
ordinary offensive remainder, one eligible counter-effect per exchange, separate
own00 complications and outcome-first comparative placement. Equipment enters
the Final Expression once before rolling. Natural01 guarantees individual success
on a permitted attempt, including Rating zero. The user's subsequent clarification
removes automatic failure on99: it resolves normally against Final Rating.
Only01 and00 retain special natural-result rules. Existing permission, mitigation
and action rules remain; the D1 benchmark is unchanged.

Historical candidate descriptions and tests below preserve the development
sequence. The current baseline and terminology now carry the adopted procedure;
older Net-Margin tests are comparisons, not competing current rules.

Adoption verification: `lens-independent-effects-adoption-regression-v0.1.ps1`
passed 32 arithmetic and active-reference assertions. The equipment suite passed
65,863 ordinary paired cases plus its equal-equipment and special-failure checks.
The short-exchange suite also passed, including 961 counter arithmetic checks
and its retained historical controls. These do not establish full continuation
probabilities or general campaign pacing. Baseline and Markdown terminology
were updated; the separate Word export was not regenerated in this adoption pass.

## Confirmed Candidate Premises

The user proposed independently resolving Expressions into ten-point Effect
bands, then comparing the generated Effects rather than subtracting raw Margins.
The user confirmed that success below a ten-point Margin still produces one
baseline Effect.

The user then stated the special-result handling:

```text
01: Success; continuation determines successful output.
00: Failure; continuation determines complication severity.

Neither automatically determines the entire opposed outcome.
```

These premises were first confirmed within the alternative under discussion.
Full-model adoption now supersedes the earlier Rating-zero,01-then-00 failure
interpretation: that permitted attempt succeeds with one baseline Effect.

The original comparison retained99 failure as a historical test control. The
user subsequently clarified that99 should resolve ordinarily. Original test
results below keep their recorded assumptions; the adoption regression now
checks ordinary99 behavior. No new retain/remove comparison was required.

## Candidate Calculation

Resolve each side's own success or failure first, completing continuations.

```text
Successful output = 1 + complete ten-point steps of positive successful Margin
Failed output = 0 successful Effects
Remaining offensive Effects = max(0, offensive output - defensive output)
```

For guaranteed 01 success, a negative calculated Margin adds no bonus bands;
the baseline Effect remains. No second baseline Effect is added after comparing
outputs. A failed defense neither supplies negative defensive Effects nor
increases the attacker's output. Defensive surplus is recorded but has no
assumed counterattack or reflection in the original numerical comparison.

## Approved Counter Limit Within the Candidate

User-approved 2026-09-10: limit defensive-surplus counter-effects to one per
resolved exchange. Preserve full defensive cancellation and ordinary offensive
remainder without applying this counter limit to committed attacks.

```text
Potential counter output = min(1, max(0, defensive output - offensive output))
```

Apply it only where the defensive Expression itself supports the consequence.
The limit does not create reflection permission, a new attack, banked output,
another baseline Effect, or immunity to matching mitigation. Ordinary action
accounting, fictional applicability and Effect conservation remain in force.
Multiple legitimate exchanges may each produce a counter; the limit is not a
one-level ceiling on a Condition or an entire round. It applies to an exceptional
defense's counter as well, without reducing that defense's full protective output.

Rationale: the character committed to defense, not a full offensive action.
Supporting test: `lens-one-effect-defensive-counter-test-v0.1.md`.

## Approved Complication Boundary Within the Candidate

Existing additive 00 severity remains complete ten-point steps of positive
cumulative failure Margin, without an automatic baseline complication Effect.
It is not added to the attacker's output. User-approved 2026-09-10: resolve the
complication separately, requiring a fictionally supported additional consequence
rather than duplicate accounting. Preserve potentially cumulative consequences,
matching mitigation, and the distinction between own-failure complications and
capped defensive counters. Different consequences may affect the same Capacity
or Condition; a second label does not justify charging the same consequence twice.
See `lens-independent-effects-00-complication-test-v0.1.md` for the tested cases.

## Approved Ordinary Comparative Placement

User-approved 2026-09-10: use signed Margin for ordinary comparative placement
while retaining independent Effects for successful output and cancellation.
A closer failed attempt may win a declared comparison but gains no successful
Effects. Equal opposing Effects still cancel despite different raw Margins.
Do not regenerate successful Effects from Net Margin. See
`lens-independent-effects-comparative-placement-test-v0.1.md`.

### Special-Result Comparative Placement

User-approved 2026-09-10: determine comparative placement by success or failure
first, then signed Margin within the same outcome. Equal outcome and Margin
tie. Include special results without granting 01 automatic first place,
manufacturing successful Effects from failure, or changing Effect cancellation
and separate complications. A 00 failure can still be comparatively better than
another failure; its own complication remains applicable. See
`lens-independent-effects-special-placement-test-v0.1.md`.

## Checked Examples

- Offense Margin 30 yields four Effects; defense Margin 20 yields three; one
  offensive Effect remains.
- Margin 29 versus Margin 21 yields three versus three, cancelling the
  opposed output despite different raw Margins.
- Rating 80, 01 then 50 completes at -49 and produces thirteen Effects.
- Rating zero, 01 then 00 produces the candidate's guaranteed one Effect.
- Rating 160, 00 then 50 produces no successful Effects and no additional
  margin-based complication severity.
- Rating 80, 00 then 50 produces no successful Effects and seven complication
  Effects, not seven extra Effects for the opponent.
- Rating 90 rolling 60 produces four attack Effects. Rating 60 rolling 00 then
  50 produces zero defensive Effects. Four offensive Effects remain; the nine
  complication Effects are not inserted into that subtraction.
- Rating 80, 01 then 50 and Rating 60, 01 then 30 each produce thirteen Effects:
  equal successful output, no offensive remainder.

## Ordinary-Roll Comparison

The script enumerates 47,045 ordinary paired rolls at five Rating pairings.
Percentages are conditional on both initial dice being 02-98. They exclude
special-result probabilities; nine example/special assertions are separate.
All assertions passed. No mitigation, enhancement, special equipment, Scale
difference, paid spending or defensive counter-effect is included.

| Ratings | Signed-margin chance of offensive Effects | Independent chance | Signed mean Effects per win | Independent mean |
| --- | ---: | ---: | ---: | ---: |
| 20 / 20 | 17.57% | 16.71% | 4.97 | 1.45 |
| 80 / 80 | 47.86% | 44.13% | 3.91 | 3.48 |
| 80 / 20 | 79.42% | 78.47% | 7.64 | 4.34 |
| 160 / 160 | 49.48% | 44.98% | 3.82 | 3.58 |
| 320 / 320 | 49.48% | 44.98% | 3.82 | 3.58 |

The candidate lowers offensive throughput in these comparisons, particularly
where failed defenses previously increased output. Distinct successful raw
Margins within one band cancel, creating more tied outputs. This is a mechanical
tradeoff, not a failed test or permission to infer overall encounter pacing.

Checks also confirm that failed actions generate no successful output and that
opposition never increases independently generated attacking Effects.

## Assessment and Next Decision

The independent model is coherent and resolves the positive-margin automatic
failure problem through individual outcome determination. It does not require
turning a failed Margin into zero solely for opposed arithmetic: failed actions
simply produce no successful Effects.

The counter limit is now approved within this candidate, subject to the scope
above. No reflection permission, free attack, new reaction cost, or universal
defensive consequence follows. Equipment enters the final Expression before
rolling; the user's subsequent correction rejects re-adding equipment after
Effect comparison. The bounded check is recorded in
`lens-independent-effects-equipment-test-v0.1.md`.
Ordinary and special-result comparative placement are now recorded separately
above. Full special-result probability distributions and broad campaign pacing
are not established by the bounded tests. Existing matching mitigation remains
preserved; this candidate does not silently rewrite other distinct Lens functions.

The user subsequently approved replacing Net-Margin-based opposed Effect
generation with this consolidated procedure. Comparative Margin generates no
Effects. The approved counter and complication boundaries apply, and permitted
natural-01 attempts have guaranteed baseline success even at Rating zero.
The user's subsequent clarification removes the automatic99 failure exception.
The tradeoff is more equal-Effect cancellations and lower offensive throughput
in the tested cases, especially against badly failed defenses. Adoption is a
working rule for continued playtesting, not a claim of proven campaign pacing.
