# Combined Attack: Limited Defensive Coverage v0.1

Date: 2026-09-12.

Status: Test and recommendation, not adoption of a defensive-response limit.
The preceding bounded cancellation-allocation rule was separately accepted by
the user's "Go ahead" and recorded in the baseline and terminology reference.

Subsequent decision, 2026-09-12: the user's next "Go ahead" accepted one
defensive Expression per genuine combined incoming assault, allowing multiple
feasible motions within that response and preserving actual scope limits.
That narrow decision is now recorded in the baseline and terminology reference.
The original comparisons below remain evidence, not currently interchangeable
rules. Partial-surplus counter eligibility remains unadopted.

## Objective

Determine what happens when a coordinated attack contains contributions that
cannot all be answered by one available defensive method. Compare one
whole-attack response, a response to only one contribution, and multiple
individually feasible targeted responses under current action guidance.

The result must not silently create free repeat attempts, re-add equipment,
divide open defenses as normal actions, or make the counter cap one per attacker.

## Existing Guidance and the Actual Decision

The baseline's Multiple-Source Targeted Opposition section permits opposition
against a combined result, individual contribution, or necessary connection
when means, Access, and timing allow. It explicitly does not create a universal
limit on defensive responses. Its preparation and interrupt rules preserve
open defensive reactions without another normal-action expenditure.

The terminology reference's Open Reaction entry still labels the general
procedure a candidate: a relevant defensive Expression may oppose each incoming
Expression while Access is Open, without consuming normal actions or passes.
Later approved baseline procedures repeatedly preserve that working treatment.
This test uses it as the current model without promoting unrelated candidate
action details to final doctrine.

The same terminology reference distinguishes many motions serving one declared
outcome from independently resolved choices. Multiple physical motions need
not automatically become several defensive Expressions.

These rules do not yet settle whether a predeclared coordinated attack becomes
ONE incoming Expression for defensive response eligibility, or remains several
incoming contributing Expressions that can each trigger a response. That is a
substantive choice. Calling it bookkeeping would hide a mechanical change.

## Controls

- Offensive contributions already generated four and three Effects at the same
  declared shared challenge. Difficulty is not reduced or assessed again here.
- Illustrative complete Ratings 80 and 70, each rolling 45, generate four and
  three Effects. A complete defensive Rating 90 with roll 45 generates five.
- All applicable equipment and contextual factors are already included in those
  Ratings. There is no further equipment or mitigation calculation in this test.
- Each attacker's action is committed under existing timing. No extra team roll.
- Multiple-response fixtures assume the methods, perception, and timing really
  permit both responses. This assumption is not universal permission to do so.
- Equal defensive Effect outputs are a controlled arithmetic comparison, not
  copying one roll twice or claiming identical probabilities for two rolls.
- Actual disruption, Function Bands, and paid spending are not simulated as a
  full encounter. Special cases use completed outcome fixtures.

## Test 1: Three Different Resolutions

| Response model | Cancellation | Offensive remainder |
| --- | --- | --- |
| One feasible whole-attack response producing five | Five against the combined seven | Two |
| One response producing five, able to reach only the first contribution | Four against the first; one unused | Three from the second |
| Two independently feasible targeted responses, each producing five | Four against the first; three against the second | Zero |

The first result produces the intended concentration benefit. Individually,
neither four nor three exceeds five, but their seven exceeds one defense's five.

The second result preserves scope: output alone cannot make a defense reach
something it cannot oppose. The unused Effect does not cross over.

The third result is NOT duplication of one defensive roll. It generates two
defensive outputs from two different allowed responses. If our reaction rule
allows both against this combination, the target can stop both contributions.

Therefore the numerical advantage established in the earlier whole-defense
test is conditional on the target actually facing one defensive resolution.
Predeclaration and attacker commitment alone do not guarantee that advantage
while preserving one response to every contributing incoming Expression.

## Test 2: Extra Responses Are Not Merely Cosmetic

At fixed equal defensive output per response, separately answering each
contribution never produces MORE incoming harm than spending that output once
against the whole pool. The scope sweep confirms this mathematical relationship;
it is not a statement that a particular Character has equally good Ratings in
every defensive method or that separate rolls cannot fail differently.

For four plus three plus two attack Effects, one five-Effect defense leaves
four. Three independently permitted five-Effect defenses leave zero.

With three attacking contributions, the rolls also differ: three attacks plus
one whole defense require four Expressions; three attacks plus three local
defenses require six. Neither total includes ordinary unrolled protection.

The preceding combined-attack probability test already compares independent
random defensive rolls with one roll. This record does not replace that test
with the equal-output fixtures or repeat its probability claims as universal.

## Test 3: Why Not Charge or Divide the Second Defense?

Making each local response a normal action, or dividing both by two, would
change the current open-reaction treatment. It is not an existing solution.

As a sensitivity check only, Rating 90 with roll 45 generates five Effects;
halving that Rating to 45 yields one. Two such one-Effect local defenses against
four and three leave five total harm, rather than the zero from two full
five-Effect responses. The choice is consequential, not a harmless simplification.

Recommendation: do not invent that charge, a multiple-defense penalty, or an
automatic coordination surcharge to repair the interpretation. Settle what
counts as the incoming Expression first. Distinct offensive interventions
still use ordinary actions; calling an attack a defense does not make it free.

## Test 4: Partial Success, Surplus, and Incoming Harm

Two permitted local responses generate five and two against four and three.

```text
First contribution: four against five -> zero incoming, one defensive surplus.
Second contribution: three against two -> one incoming, zero defensive surplus.
```

Adding the defenses into seven and cancelling the attackers' seven would be
wrong: the first defense's unused Effect would cross its declared scope.

Two interpretations of the local surplus remain possible:

- Local eligibility: the first defense can support at most one counter-effect
  even though a different contribution gets through, if the actual defense
  creates that consequence and circumstances still permit it.
- Whole-result requirement: any surviving incoming output prevents a counter
  anywhere in that combined exchange.

Recommendation: local eligibility fits "compare where Expressions actually
oppose" more closely. A defender can turn one attacker's blade out of position
while another attack lands. Receiving harm does not inherently erase a different
successful interaction. This remains a recommendation, not adopted by this test.

The defensive action itself must support the counter; unused numerical output
does not license an unrelated attack. The limit remains one counter-effect for
the resolved combined exchange, even when two local responses have surplus.
Separate ordinary attacks retain their existing exchange boundaries.

Do not use that counter to retroactively cancel an already-resolved contribution
or award a first-strike advantage. Follow actual declared timing and existing
interrupt rules. If an earlier legitimate consequence removes necessary means,
reassess normally; if the counter's means no longer exist, it cannot occur.
Protection removing incoming harm creates no defensive surplus.

## Test 5: Scope and Special Results

- A seven-Effect defense of the first four-Effect contribution leaves the second
  contribution's three untouched. A seven-Effect WHOLE defense would cancel both;
  these are different scopes, not competing arithmetic conventions.
- A completed natural 01 at Rating zero followed by 50 produces five Effects.
  If it answers only the first attack, the other attack's three still survive.
  Automatic individual success does not expand defensive scope.
- A natural-00 first defense supplies zero; a second two-Effect defense leaves
  four plus one incoming. The 00 complication remains separate and may matter
  through its actual consequence, not invented negative defensive output.
- A failed or prevented second offensive contribution contributes zero; a
  viable first contribution still resolves. No automatic combination collapse.
- One failed response does not itself grant another attempt against the same
  incoming event. A later genuinely distinct threat or intervention follows
  its ordinary timing; a new label does not create a new reaction opportunity.

## Numerical Verification

`lens-combined-limited-defense-test-v0.1.cjs` passes all assertions.

The script checks 1,331 equal-output comparisons: two attacks each 0-10 and
defense 0-10, comparing one whole output with two equally sized targeted outputs.
Separate targeted responses reduce incoming harm further in 835 cases. Maximum
difference within this bounded sweep is ten Effects, not a universal ceiling.

It also checks 14,641 independently varied two-attack/two-defense fixtures,
with every input 0-10, for conservation, scope, order invariance, and the proposed
at-most-one local counter opportunity within a shared exchange. That last check
verifies the candidate's implementation, not fictional counter permission.

These are deterministic coverage counts, not measured table frequency or a
campaign balance verdict. The script includes failed contributions, completed
special-result fixtures, and the explicitly unadopted divisor sensitivity.

## Recommendation and Decision Boundary

Do not claim all predeclared combined attacks automatically force one defense
under the present wording. We must choose their incoming-Expression boundary.

Preferred candidate: a genuine combined assault is ONE incoming Expression for
defensive resolution. Its feasible defensive Expression can involve several
motions, just as other Expressions can, but produces one cancellation output.
That output follows the now-approved bounded allocation rule. If the actual
defensive method reaches only part, it cancels only that part. This is one
response to the combined incoming event, not one reaction per entire round.

This interpretation preserves the intended concentration benefit without a
new divisor. It DOES restrict the alternative of gaining a separate full open
reaction to each contributor inside that same combined event. Adoption therefore
requires a user decision; it is not implied by the allocation approval.

Multiple motions do not automatically make every mixture of defensive methods
one valid Expression. Use an actually constructible response and existing
compound rules where applicable; this test invents no averaging of whole
defensive Ratings or new calculation for multiple Tasks. A merely simultaneous
pair of otherwise separate attacks remains separately answerable. Labels,
weapon type, or saying "teamwork" alone cannot settle that distinction.

This numerical test does not prove predeclaration alone is sufficient to
establish a genuine combined assault. If the one-incoming interpretation is
selected, its application must remain tied to the attack's actual shared
construction and dependencies, not blanket attacker control of the defender's
reaction count. If instead contributing Expressions each retain an independent
reaction, keep that honestly and accept that not every coordinated attack gains
the earlier single-defense concentration advantage.

No limited-defense, reaction-count, counter-eligibility, or combination-entry
candidate from this record has been inserted into the baseline. Only the
previously approved bounded allocation rule was adopted during this work.
