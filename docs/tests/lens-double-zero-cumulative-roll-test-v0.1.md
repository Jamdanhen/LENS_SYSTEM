# Double Zero: Cumulative Roll and Complication Severity

Status: Completed candidate test, subsequently accepted as a working model.
After clarification, the user accepted that 00 remains failure while a zero
or negative cumulative failure margin generates no additional margin-based
Load. The baseline records the margin-only interpretation without an automatic
baseline Effect. The comparisons below preserve the alternatives tested;
downstream cases remain open and existing paid-reroll rules are unchanged.

## Tested Proposal

Subsequent complication-premise adoption: the user agreed to handle generated
severity as complication Effect Levels through existing fictionally justified
Effect handling. Matching mitigation and conservation apply, as do existing
Condition Load, Function Bands, Access consequences, and recovery. Do not
duplicate the amount across consequences, assume automatic self-harm, create
unsupported magnitude or permission, or invent numerical prices for non-Load
story consequences. Earlier mapping reservations below preserve the original
test's status; specific non-Load valuations and active opposition remain open.

Subsequent timing decision: the user selected the paid reroll after the complete
cumulative sequence is known, before consequences are applied. Replace the
whole sequence and retain the same Expression and purchased boost. A replacement
initial 00 follows the cumulative procedure normally but does not permit another
paid reroll. Earlier references below to unresolved choice timing are historical.

Subsequent adoption: the user agreed that each additional 00 adds 100 and
continues rolling until 01-99 ends the sequence. For example, 00, 00, 50
totals 250; against Rating 80 this produces margin 170 and 17 severity steps.
There is no fixed continuation count. The one-additional-die results below
remain historical bounded controls, not the full adopted distribution.
In particular, 200 is no longer a maximum cumulative roll: no finite Rating
guarantees immunity to positive failure margin across all possible sequences.

With fair independent percentile dice and before paid-reroll decisions,
the chance of an initial sequence beginning with two consecutive 00s is
1 in 10,000; three consecutive 00s is 1 in 1,000,000. Conditional on an
already-rolled 00, the chance that the next die continues is 1 in 100.
These are prefix probabilities, not probabilities of those exact chain
lengths ending immediately afterward. Arithmetic verified directly.

Natural 99 is straight failure regardless of Expression Rating. Natural 00
is failure, followed by an additional percentile roll whose value is added
to the initial 100. Compare that cumulative roll with the unchanged Final
Expression Rating to obtain a failure margin. Do not change multipliers,
Difficulty, Scale, or the Expression itself.

For this bounded test, add exactly one die, including an additional 00 as 100.
Further continuation on repeated 00s remains outside the test, not rejected.
The cumulative range is therefore 101-200. These are additional rolls within
the special result, not purchases of the paid replacement reroll.

The test isolates uncertain unopposed Expressions. It does not invent how
active opposition enters a complication margin or force Automatic actions to
roll. The 00 failure remains failure even when Rating equals or exceeds the
cumulative result.

## Severity Candidates

```text
Cumulative result = 100 + additional d100
Failure margin = cumulative result - Final Expression Rating

A. Margin only:
   Nonnegative complete ten-point steps of failure margin.

B. Baseline plus margin:
   One complication Effect plus those same complete ten-point steps.
```

Candidate B borrows the baseline-plus-margin structure of successful Effects;
this is a comparison, not an assertion that failure already uses that rule.
Candidate A preserves the example of margin 70 generating seven steps.
Negative margins never produce negative complication amounts or success.

## Same Additional Roll

Every row begins with natural 00, then rolls 50, for a cumulative 150:

| Final Expression | Failure margin | A: margin steps | B: baseline plus steps |
|---:|---:|---:|---:|
| 40 | 110 | 11 | 12 |
| 80 | 70 | 7 | 8 |
| 120 | 30 | 3 | 4 |
| 150 | 0 | 0 | 1 |
| 200 | -50 | 0 | 1 |

All five fail. The high-Rating rows distinguish unavoidable failure from
mandatory additional numerical severity.

## All Additional Die Faces

The following figures are conditional on having already rolled 00. No paid
reroll is used in these distributions.

| Rating | A: range | A: mean | A: chance of 10+ steps | A: chance of zero steps |
|---:|---|---:|---:|---:|
| 20 | 8-18 | 12.60 | 81% | 0% |
| 40 | 6-16 | 10.60 | 61% | 0% |
| 60 | 4-14 | 8.60 | 41% | 0% |
| 80 | 2-12 | 6.60 | 21% | 0% |
| 98 | 0-10 | 4.80 | 3% | 7% |
| 120 | 0-8 | 2.88 | 0% | 29% |
| 150 | 0-5 | 1.05 | 0% | 59% |
| 180 | 0-2 | 0.12 | 0% | 89% |
| 200 or higher | 0 | 0 | 0% | 100% |

Candidate B adds one to every amount and has no zero-severity outcomes.
For example, at Rating 40 its chance of ten or more is 71% rather than 61%.
No mean is a fractional amount assigned to an individual outcome.

Without paid rerolls, initial 00 occurs on 1% of independent percentile rolls.
Thus the Rating-40 chance of at least ten margin-only steps across all initial
rolls is 0.61%, not 61%. Routine unrolled activities do not generate this risk.
The paid-reroll decision strategy would change the retained-result frequency;
these conditional distributions do not claim to model that strategy.

## Consequence Interpretation

If each step becomes one matching Condition Load, low-Rating 00s can exhaust a
fresh ten-Load capacity. That is a genuine severity implication, not evidence
that the cumulative arithmetic is broken. It should not be hidden by describing
the result as a small inconvenience or by inventing an unapproved cap.

The attempted Expression must establish what can plausibly be affected:

- A hazardous physical mishap may create physical Load if that consequence is
  supported by the scene. Failure does not automatically wound the actor.
- A professional or social mishap may create an appropriate Framework Condition
  when it actually damages the Character's established position; it need not
  inflict mental or physical harm.
- A research error may lose time or opportunity without a defensible conversion
  into Condition Load. The existing system does not price every such complication
  in Effect Levels, so the test cannot claim those translations are already solved.
- An ordinary failed attack does not automatically give the opponent an extra
  attack or redirect all prospective damage onto the attacker.

Use existing matching effect handling where it actually applies. Do not equate
seven steps with seven distinct Conditions, seven permanent injuries, or seven
copies of the same effect. No new Condition category, capacity track, or universal
consequence price is established here.

## Recommendation and Remaining Decision

Retain the cumulative-roll idea for development. Of these mappings, recommend
margin-only as the closer reading of the user's example: one severity step per
complete ten points of positive failure margin, without adding an automatic
baseline Effect. A zero numerical result remains failure; the existing proposed
fictional-complication fallback can handle an appropriate nonnumeric consequence.

This recommendation deliberately allows sufficiently high capability to prevent
margin-generated complication Load while still failing on 00. If 00 must always
generate at least one numerical complication Effect, Candidate B is the explicit
alternative. The test cannot decide that intended experience on the user's behalf.

Repeated-00 continuation, active-opposition treatment, and the exact point during
the cumulative sequence at which a paid replacement is chosen remain untested.
The paid option must still replace the complete result rather than cherry-pick
its favorable portions; no new paid reroll allowance is supplied by the extra die.
Do not settle these downstream questions merely to run this bounded comparison.

## Verification

`lens-double-zero-cumulative-roll-test-v0.1.ps1` enumerated all 100 additional
faces at 11 Ratings, including 200, 240, and 320: 1,100 conditional cases.
Its 3,301 checks verify cumulative totals, mandatory failure, nonnegative
severity mappings, the user's 150-versus-80 example, and nonincreasing severity
as capability rises. No current resolution or character rules were modified.
