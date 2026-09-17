# Numerical Percentile Edges and the Original 99 Rationale

Date: 2026-09-10
Status: Completed comparison; alternatives remain open. Existing 99 and 00
rules are the unchanged working baseline, not newly reaffirmed by this test.

## Subsequent User Direction

After reviewing the recovered rationale and probabilities, the user expressed
a preference for retention of uncertainty. The assistant incorrectly recorded
that preference as a decision against the numerical-only candidate. The user
explicitly corrected this: a preference was not a lock, and testing should
continue. Both alternatives remain open. No adoption or rejection follows from
that preference. Special-result opposition still needs a procedure that cannot
turn a failed result into successful opposition while automatic failure remains
part of the candidate being tested.

## Recovered Rationale

The earlier system reference, `docs/system/lens-system-working-reference-v0.2.md`,
under Percentile Edge Results and Design Principles, explicitly distinguishes:

- 99: automatic failure regardless of Final Resonance (historical terminology).
- 00: automatic failure with a meaningful complication arising from the attempt.
- Automatic and usually Trivial activities: no roll.

Its concluding sentence states:

> The Difficulty Scale intentionally begins at 98% to preserve the universal
> uncertainty represented by 99 and 00 while allowing exceptional capability to
> improve effect, not certainty.

This is documented design rationale, not a reconstructed verbatim conversation.
It establishes why 99 existed: one ordinary failure face alongside one
complication face, keeping a two-percent failure floor for a single required
roll at sufficiently high Ratings. It did not impose two-percent failure on
activities resolved without rolling, nor on final outcomes after paid rerolls.

Later `lens-double-zero-cumulative-roll-test-v0.1.md` records explicit acceptance
of 00 remaining failure even when its cumulative total is below the Rating.
That is why removing the 99 exception alone does not resolve signed-margin
opposition for all special results.

## Candidate and Controls

Test the user's proposed simplification and the assistant's stated extension:

1. 02-99 are ordinary results.
2. Initial 01 uses the existing subtractive continuation, repeating on 01.
3. Initial 00 uses the existing additive continuation, repeating on 00.
4. The completed result determines success normally; neither initial face
   supplies a separate automatic outcome.
5. Signed Net Margin, individual accomplishment, comparative stakes and ties
   use the recently approved procedure.

Compare current rules, removing only the 99 exception, and the full numerical
candidate. No price, Difficulty multiplier, movement, Access or paid-spending
rule is changed. The historical reason for the D1 0.98 base is recovered here,
but this test does not silently replace that multiplier with 1.00.

Success includes equality for this executable comparison, preserving earlier
test convention; it does not independently resolve older prose saying 'under'.

## Exact Unopposed Probabilities

These are single-attempt success probabilities after all continuations, with
fair independent dice, before paid spending and without active opposition.
Automatic activities are not forced to roll.

| Final Rating | Current | Only 99 becomes ordinary | Both edges numerical |
| ---: | ---: | ---: | ---: |
| 0 | 0.99% | 0.99% | 0.99% |
| 20 | 20% | 20% | 20% |
| 80 | 80% | 80% | 80% |
| 98 | 98% | 98% | 98% |
| 99 | 98% | 99% | 99% |
| 100 | 98% | 99% | 99% |
| 120 | 98% | 99% | 99.2% |
| 160 | 98% | 99% | 99.6% |
| 200 | 98% | 99% | 99.99% |
| 250 | 98% | 99% | 99.995% |
| 320 | 98% | 99% | 99.99992% |

At Rating 320 the full candidate still fails once per 1,250,000 attempts on
average. No finite Rating eliminates every possible repeated-00 sequence.
There is no universal positive failure floor, but there is still a nonzero
failure probability at every finite Rating.

The script sums every possible successful 00 chain exactly for the finite
Rating. A chain with k consecutive initial 00s followed by terminal t=1..99
has total 100k+t and probability 0.01^(k+1) for each particular t. Longer
prefixes than those capable of succeeding contribute no success probability;
this is not an imposed continuation limit.

01 probability remains unchanged: for nonnegative integer Ratings, the only
unsuccessful 01 chain is 01 then 00 at Rating zero. Thus that Rating retains
0.99%, not one-percent, success.

## Opposed Checks

Twelve explicit fixtures in the companion script check ordinary against special,
special against special, repeated results, both failures and equal Margins.
These are deterministic scenario checks, not an opposed probability survey.

- Rating 160 rolling 99 has Margin +61. It can oppose Margin +50 because 99
  is now genuinely successful, not a failure masquerading as success.
- Rating 160 rolling 00,20 has Margin +40. Against an attack Margin +50,
  it reduces the successful attack to Net Margin 10 and two Effects.
- Rating 80 rolling 00,50 has Margin -70. Against attack Margin +50,
  Net Margin is 120 and thirteen attack Effects before mitigation.
- Rating 20 rolling 01,50 has Margin +69. It beats ordinary Margin +50,
  but loses to ordinary Margin +130. Initial 01 grants no automatic victory.
- Rating 80 rolling 01,50 and Rating 60 rolling 01,30 both have Margin +129:
  a tie, with no successful contested Effects or automatic reroll.
- Two failed 00 results can establish lesser failure but not successful action
  Effects, preserving the user's stakes distinction.
- Rating 320 rolling 00,00,00,50 has total 350 and fails. A worse opposing
  failure cannot turn it into a successful attack.

All probability assertions, continuation arithmetic and twelve fixture checks
passed in `lens-numerical-percentile-edges-test-v0.1.ps1`.

## Interpretation and Recommendation

The original 99 rule had a clear purpose: guaranteed residual uncertainty on
required rolls, separately from 00 complications. It is not meaningless simply
because it now conflicts with an otherwise numerical opposed comparison.

The full numerical candidate resolves that conflict without an extra opposed
failure-margin convention. It preserves ordinary probabilities through Rating
98, and lets high capability buy reliability as well as greater Effects.
At high Ratings, 00 can be an unusually poor success rather than failure.

Recommendation: prefer the full numerical candidate if LENS intends high
capability to overcome very poor rolls. Retain the existing guarantee only if
the fixed failure floor is itself still desired; retaining only 99 as ordinary
does not finish the opposed-result problem.

Remaining consequence integration: a failed 00's existing complication severity
and its contribution to an opponent's Net Margin must respect conservation and
avoid unjustified duplicate punishment. This test does not allocate those
consequences, create a new complication for a successful 00, or adopt the candidate.
