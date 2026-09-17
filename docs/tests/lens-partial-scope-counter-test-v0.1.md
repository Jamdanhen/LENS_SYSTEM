# Partial-Scope Defensive Counter Test v0.1

Date: 2026-09-12.
Status: Candidate test. Partial-scope counter eligibility is not adopted.

Subsequent decision, 2026-09-12: the user's "I agree" accepted the recommendation.
The baseline and terminology reference now permit a supported partial-scope
counter while other incoming output survives, with the one-counter limit,
declared scope, conservation, and actual timing preserved. The original test
below remains the supporting evidence rather than an unresolved alternative.

## Active Question

The user accepted one defensive Expression per genuine combined assault,
including multiple feasible motions within that response. The baseline and
terminology reference now record that rule. Separate attacks retain their
ordinary responses; this is not one defense per round or one attack roll for
all contributors. Mere simultaneous timing does not establish a combination.

The remaining question is whether surplus from a response directed at only
part of that assault can support a counter-effect when another part gets through.
This test uses ONE defensive output, not the two local responses compared in
the preceding `lens-combined-limited-defense-test-v0.1.md`.

## Candidate

Evaluate surplus against the offensive output the declared defensive Expression
actually opposes. That surplus may support at most one counter-effect for the
resolved exchange, if the defensive act itself supports it and necessary means
and timing remain. Unopposed incoming output does not automatically erase a
different successful defensive interaction.

This applies the existing scope, conservation, and one-counter boundaries; the
extension allowing an incoming remainder and partial counter to coexist still
requires a user decision. No universal counter Condition or new offensive
permission is supplied.

## Same Attack, Two Defensive Scopes

The already-completed offensive contributions generate four and three Effects.
The completed defensive Expression generates five. All applicable prior Lens
calculations have already occurred; equipment is not added again.

| Declared response | Cancellation | Incoming remainder | Defensive surplus | Candidate counter |
| --- | --- | --- | --- | --- |
| Covers the entire assault | Five of seven | Two | Zero | None |
| Reaches only the first contribution | All four of that contribution | Three from the other | One | At most one, if supported |

There is no arithmetic contradiction. In the second row, the response never
opposed the other three Effects. Its surplus cannot cancel them. Conversely,
their survival need not erase what happened in the first interaction.

For example, a defender turns one attacker's blade aside and leaves that
attacker out of position while a second contribution lands. The counter would
represent the opening actually produced by that deflection, not a free return
strike, reflected damage, or a newly summoned effect.

The first row cannot be relabeled as the second after seeing rolls. Scope is
declared before rolling. Nor may a whole-assault defense cancel only four,
withhold one Effect, and call it surplus while three reachable offensive Effects
remain. Its five Effects oppose the reachable seven, leaving no surplus.

## Boundary Cases

| Case | Incoming Effects | Candidate counter |
| --- | --- | --- |
| Four-Effect response exactly stops the first four | Three | None: no surplus |
| Three-Effect response fails to stop the first four | Four | None: no surplus |
| Five-Effect response stops first four, but its act supports no counter | Three | None |
| Five-Effect response stops first four and supports an opening | Three | At most one |
| One hundred defensive Effects reach only first four | Three | Still at most one |
| Ten defensive Effects reach the entire seven | Zero | At most one |
| Fifteen defensive Effects reach all of four plus three plus two | Zero | At most one, not one per contributor |

The partial response sacrifices cancellation elsewhere. At the same illustrative
five-Effect defensive output, it accepts three incoming rather than the two
remaining from a feasible whole-assault response. A player may choose a narrower
method before rolling when the fiction permits, but that does not guarantee
the opening, and they cannot select the better scope after seeing the result.

This comparison does not claim one additional incoming Effect and one counter
are always equal in value. Different Conditions can have different tactical
consequences. Their actual scope and fictional eligibility remain important.

## Failed Attacks and Special Results

An incoming contribution with zero successful Effects can still generate
arithmetic surplus against a successful response. That number alone does not
establish an interaction capable of producing a counter. A missed projectile
that never reaches the defender does not automatically furnish a projectile to
reflect. A failed grab that actually overextends the attacker may support an
opening through the defensive interaction. This is the existing applicability
question, not an automatic entitlement triggered by failure.

A completed natural 01 at Rating zero with continuation 50 resolves at -49 and
generates five Effects. If it only opposes the first four, the other three still
get through; the counter remains at most one and still requires fictional
support. Natural success does not expand scope.

A natural-00 defense supplies zero successful Effects. Its separate complication
is not simulated here and must still resolve through the existing procedure.

## Consequence Timing and Protection

Incoming harm and the candidate counter both need to be applied according to
the actual interaction and existing timing. Neither receives an invented
priority just because it is convenient.

If the blade turn and the other hit occur together, the incoming harm does not
automatically retroactively erase that blade turn. If a genuinely earlier
permitted interruption removes the necessary means before the counter could
occur, reassess normally. The script's means-absent fixture tests that boundary;
it does not impose incoming-harm-first resolution on every exchange.

Do not apply the candidate counter early merely to invalidate offensive output
already earned in the same resolved exchange. In the ordinary example, record
the incoming three and the eligible opening. The opening affects subsequent
relevant activity unless actual pre-established timing says otherwise.

Matching protection may mitigate the counter's one Effect. It does not refund
that Effect into cancellation or reduce the other incoming contribution.
Protection absorbing all incoming harm does not create defensive surplus.
Normal action costs still apply to a separate deliberate follow-up attack.

## Verification

`lens-partial-scope-counter-test-v0.1.cjs` passes fourteen named fixtures and
7,623 bounded states: two offensive contributions independently 0-10, one
defensive output 0-20, and each of the three nonempty coverage masks.

The tests verify one defensive pool, conservation, no out-of-scope cancellation,
at most one candidate counter, invariance under contributor order, and no
incoming remainder alongside surplus within the SAME opposed scope. Candidate
counter and incoming output coexist in 3,300 states only because the remaining
output lies outside that scope. These are deterministic coverage counts, not
estimated probabilities or frequency of occurrence in play.

All states also test counter rejection when the defensive act supplies no
fictional support or necessary means no longer remain. Separate fixtures cover
no reachable target, completed natural-01 output, failed defense, counter
mitigation, and mitigation that absorbs incoming harm without creating surplus.
The script's boolean permission inputs encode scenario judgments; numeric
assertions do not prove those fictional judgments or balance every Condition.

## Recommendation and Decision

Allow the partial-scope counter when the successfully opposed interaction
actually produces it. Keep the maximum one per resolved combined exchange,
require genuine surplus against the declared scope, and preserve uncancelled
incoming Effects elsewhere. No automatic retaliation, after-roll retargeting,
retroactive cancellation, extra defensive roll, or additional normal action is
created by the counter itself.

The alternative is to require zero incoming remainder across the entire assault
before any counter can occur. That is simpler as a single global gate, but it
would suppress an otherwise supported opening solely because a different
contribution landed. The existing scope-based logic favors the local candidate.

Only the already-approved one-defensive-Expression rule was added to main
authority during this work. This counter recommendation remains for decision.
