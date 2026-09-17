# Special Failure Opposition: Zero Contribution Candidate

Date: 2026-09-10
Status: Tested candidates only. No new rule adopted; preference for uncertainty
is not approval or rejection of either percentile-edge alternative.

## Scope

Test the proposed uncertainty-retaining treatment of failed opposition:

```text
Raw Margin = Rating - completed roll
Failed contribution = min(0, Raw Margin)
Successful contribution = Raw Margin
```

Natural 99 and initial 00 remain automatic failures within this candidate.
Complete existing 00 continuations before assessing the Margin. Complete 01
normally; it does not provide automatic victory. Ordinary signed subtraction,
actual accomplishment and comparative stakes remain the controls.

The user corrected the assistant for treating a preference as a lock. The
numerical-only percentile candidate is still open. Its report now reflects that
correction. Neither existing baseline rules nor terminology were changed here.

## Method

The companion PowerShell script checks fifteen fixed cases, 13,482 combinations
of successful acting Margin and special failed opposition, and sixteen
complication comparisons. This is a boundary and arithmetic test, not a
probability estimate or a playtest of encounter pacing.

The sweep uses acting Margins 0, 1, 9, 10, 50, 100 and 200; completed special
failure results 99, 101, 150, 199, 250 and 350; opposing Ratings 0 through 320.
It verifies that increasing capability cannot worsen the same failed defense,
and that a nonnegative raw failed Margin contributes zero rather than positive
resistance. Rating-equality success follows the existing executable convention.

## Literal Candidate Results

| Successful acting Margin | Failed opposing raw Margin | Contribution | Attack Effects |
| ---: | ---: | ---: | ---: |
| 50 | +61 (Rating 160, natural 99) | 0 | 6 |
| 50 | -19 (Rating 80, natural 99) | -19 | 7 |
| 50 | +10 (Rating 160, 00 then 50) | 0 | 6 |
| 50 | -70 (Rating 80, 00 then 50) | -70 | 13 |
| 0 | +61 (Rating 160, natural 99) | 0 | No win under a strict numerical tie rule |

Ordinary cases remain unchanged: +50 against successful +20 gives four Effects;
+50 against failed -30 gives nine. A special failed attack never generates
successful attack Effects even when its raw Margin is positive.

## Zero-Margin Conflict and Repair Candidate

A success exactly at its Rating has Margin zero under the executable convention.
Replacing a special failed defense with zero makes both numeric contributions
equal. Blindly applying the ordinary tie rule lets an automatic failure prevent
that success, contrary to the purpose of the proposal.

Tested repair, NOT adopted:

1. An individually successful result takes precedence over an automatic failure.
2. Use the normalized signed Net Margin for the successful outcome's Effects.
3. With success against failure and Net Margin zero, use the one baseline Effect.
4. Equal Margins between two successful results remain tied.

This passed all fifteen fixtures and 13,482 sweep checks. It changes no ordinary
case where a failed Margin is already negative. It does introduce outcome-status
priority for the special-result case; it must not be described as pure numeric
subtraction or as already authorized by the ordinary tie decision.

## Both Fail and 01

Neither of two failed attacks acquires successful Effects. Lesser failure can
still be relevant to declared comparative stakes.

Normalizing both failed raw Margins can erase comparative distinctions:
Rating 160 rolling 99 has raw +61; Rating 120 rolling 99 has raw +21. Both
normalize to zero. This candidate treats them as tied failures if normalized
Margins also determine their comparative ranking. Retaining raw values solely
for comparative ranking would be another choice, not a result of this test.

Negative failed Margins remain distinguishable: -40 versus -90 retains a
comparative difference of 50 but does not produce successful action Effects.

Rating 20 rolling 01,50 completes at -49, giving Margin +69. It beats the
normalized zero contribution of an automatic failure but loses to a successful
Margin +130. Rating zero rolling 01,00 still fails at completed result one.

## 00 Complication Interaction

For attack Margin +50 against defense Margin -70 from a failed 00:

```text
Attack without failed-defense amplification: 6 Effects
Attack after signed opposition:             13 Effects
Existing 00 complication calculation:       7 Effects
```

Applying both full amounts could yield thirteen attack Effects plus seven
complication Effects. If both are imposed as injury from that same failed block,
this risks counting the same mishap twice. Distinct effects are not necessarily
duplicates merely because their numbers match; the intended relationship must
be decided, not inferred from this arithmetic.

Rounding also matters: acting Margin +55 and opposing Margin -75 add eight
attack Effects above the six-Effect unopposed result, while the 00 severity
calculation produces seven. Do not assume the two quantities always match or
silently subtract a fixed complication credit.

This test does not create an additional complication on 99, impose automatic
self-harm on 00, override mitigation, or settle allocation of complication
Effects. Existing conservation and fictional applicability remain constraints.

## Recommendation and Decision Boundary

The literal zero-contribution proposal is incomplete at zero-margin success.
The success-priority variant makes it usable while preserving the fixed failure
floor, at the cost of an explicit outcome-status check. It also compresses
some both-failure comparisons into ties.

Keep that variant available alongside the numerical-only alternative. Neither
is adopted or eliminated. Before final special-opposition adoption, decide how
00 amplification and complication interact; do not apply duplicate consequences
automatically or claim the matter was resolved by a mathematical test.
