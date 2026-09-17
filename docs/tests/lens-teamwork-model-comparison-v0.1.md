# Teamwork Model Comparison v0.1

Status: User-authorized comparison. No model, terminology change, Difficulty
composition rule, or output conversion is adopted by this record.

## Question

Can teamwork improve a declared outcome using existing Expressions, Difficulty,
and earned Effect Levels, without a separate load-to-Effects requirement table?

The user's latest suggested distinction is between contributions toward a
shared effect and enhancements dependent upon a primary effect. Different
powers may reinforce the same effect; identical power names are not required.
This replaces neither existing mitigation scope nor actual fictional dependencies.

## Authority and Controls

The baseline's Compound Expressions, Multiple-Source Output, Declared Delivery,
Independent Opposed Effects, and natural-result sections supply the controls.
One character's two-Axis average is not the multiple-character procedure.

Every contributor commits an action and uses a complete personal Expression.
All attempts in these fixtures are permitted and genuinely uncertain. Nothing
forces routine actions to roll. Scope, equipment, timing, Scale, and contextual
contributions are held fixed unless the comparison explicitly changes Difficulty.

Pre-Difficulty Expressions of 80, 160, and 320 are numerical probes, not new
character builds or a declaration of normal competence. Apply the existing
0.98 x 0.6^(D-1) Difficulty factor, then floor the Final Rating.

The D3 effect plus D2 area producing D5 is a user-proposed illustrative
composition. It is not adopted. Coverage and distance values are not assigned.

## Models

### A. Assistance Reduces Difficulty

The helper faces the original Difficulty. Each successful helper Effect lowers
the lead's Difficulty by one step. The lead resolves the declared objective.
Helper Effects used as assistance are not also added to the lead's output.

At pre-Difficulty 320 and D5, the helper has Rating 40. Roll 25 yields two
Effects, lowering the lead to D3, Rating 112. Lead roll 50 yields seven Effects.
Without that assistance the lead's same roll fails at Rating 40.

The mechanism works, but each Difficulty reduction multiplies the lead's
unrounded Rating by about 1.67. Two reductions multiply it by about 2.78.

Lead selection also matters. Hold each character's raw Expression and roll
fixed: A has 320 and rolls 25; B has 100 and rolls 10, with original D5.

- A assists B: B produces three Effects.
- B assists A: A produces five Effects.
- Both contribute to a shared pool at D5: three Effects regardless of labels.

This is not proof that asymmetric assistance is wrong; it shows a meaningful
extra decision absent from interchangeable shared contributions.

A helper at Rating 40 rolling natural 01 then 50 produces nine Effects.
Subtracting nine from D5 goes below the defined ladder. The script reports this
as unresolved rather than inventing negative Difficulty, a floor, or a cap.

Finding: viable assistance candidate, but not the simplest general shared-effect
procedure. Its exchange rate and below-D1 behavior require additional decisions.

### B. Shared Effect at the Full Declared Difficulty

Everyone faces the full challenge. Compatible earned Effects combine. Under
the user's candidate, one surviving pooled Effect accomplishes the declared
minimum already represented by Difficulty. Additional Effects remain output;
no new area, distance, or duration conversion is supplied here.

Two Rating-40 contributors rolling 25 and 10 produce two plus four Effects,
for six total. If the first instead rolls 50, the other's four Effects remain.
If both fail, there is no successful output.

Success probabilities below include natural 01 success and natural 00 failure.
They measure generation of at least one successful Effect, before opposition,
paid spending, or fictional disruption from complications.

| Raw Expression each | Final Rating at D5 | Solo | Two shared | Three shared |
|---:|---:|---:|---:|---:|
| 80 | 10 | 10% | 19% | 27.1% |
| 160 | 20 | 20% | 36% | 48.8% |
| 320 | 40 | 40% | 64% | 78.4% |

For equal independent success probability p, the shared minimum is reached
with probability 1 - (1-p)^n. This is not an extra synergy bonus: each added
character supplies a committed action and its own earned output. The sum has
the same generated amount as those same rolls before pooling; pooling changes
what the contributions jointly accomplish, not how much each independently earns.

For matching active opposition to one genuinely combined effect, four plus
three Effects opposed by five leave two. The opposing five are not copied
against every contributor. Separate attacks remain separate applications under
the existing rules. The example establishes no new gate resistance pool.

Finding: strongest candidate for interchangeable contributions to a shared
effect. It preserves contribution, ordinary failed-roll tolerance, and order
independence without a second output threshold.

### C. Dependent Enhancement

The primary supplies one necessary function and the helper another. Both
successful functions are needed for the complete enhanced outcome. Their
Effects retain their functions rather than merging into unrestricted damage.

- Primary fails, enhancement succeeds: no complete enhanced result.
- Primary succeeds, enhancement fails: no complete enhanced result, but an
  independently viable primary effect can remain.
- Both succeed: combine their functions with their necessary dependencies.

Requiring both to face full D5 has a large probability cost:

| Raw Expression each | Each at D5 | Both required at D5 | Primary D3, helper D2 |
|---:|---:|---:|---:|
| 80 | 10% | 1% | 13.16% |
| 160 | 20% | 4% | 52.64% |
| 320 | 40% | 16% | 98.01% |

The last column tests separately assessed contributions. It changes the
Difficulty assignments and is not an equal-difficulty control. Its purpose is
to expose sensitivity: assigning the total burden to everyone versus assigning
the distinct work to its contributor changes results sharply.

Finding: the dependency distinction works. Neither the low full-Difficulty
rates nor the high separately assessed rates prove the intended balance.
Difficulty assessment needs its own decision; adding component ranks and
requiring every indispensable contribution to succeed compounds two burdens.

### D. Neutral Manifestation Pool (Stress Control)

D1 is only a temporary stand-in for a neutral roll, not a recommended neutral
Difficulty. A helper with raw 100 rolling 10 earns nine Effects at D1 but one
at D5. Freely moving the nine into a D5 undertaking lets output avoid the
challenge it is being used to overcome.

Finding: do not recommend unrestricted neutral-roll support as the default.
Actual preparation or a stored effect still follows its existing rules; this
test does not remove those possibilities.

## Natural Results and Boundaries

- At Rating 40, natural 01 then 50 produces nine Effects. Those can reinforce
  a shared function; they do not replace a missing indispensable function.
- At Rating 40, natural 00 then 50 produces zero successful Effects and eleven
  complication Effects. Another shared contributor may succeed numerically,
  but does not cancel that complication. Actual disruption still matters.
- No universal conversion of surplus into coverage, distance, duration, or
  damage has been tested or adopted.
- No full damage allocation is copied to every covered target.
- More participants do not themselves increase Difficulty. Naively adding two
  baseline D1 requirements produces D2: an extra default burden, not a neutral
  combination. Whether distinct scope requirements should add remains open.

## Recommendation and Next Decision

Prefer the shared-effect pool for genuinely reinforcing output. Preserve
dependent enhancement when the added function needs a primary effect to exist.
Do not recommend replacing both with Difficulty-reduction assistance or a
freely transferable neutral pool.

Do not adopt universal addition of Difficulty ranks from these results. The
next meaningful decision is how to assess Difficulty for dependent functions:
the entire undertaking for everyone, or the work each contributor actually
performs, including genuine burdens of connecting those functions. That is a
calibration question within the existing system, not a new output-price table.

## Verification

Run `lens-teamwork-model-comparison-v0.1.cjs` with Node. All assertions passed,
including 9,604 ordinary roll-pair invariance checks, completed special-result
fixtures, exact success-probability formulas, and below-ladder detection.

This is an arithmetic and procedure test, not a complete encounter simulation.
There is no all-continuation expected-output calculation, opposition-frequency
model, several-helper assistance simulation, or empirical playtest claim.
