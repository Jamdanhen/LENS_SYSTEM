# Preparation: Assessed Advantage or Effect Conversion

Status: Completed comparison; the user subsequently adopted assessed fictional
benefit as the preparation default on 2026-09-08. Resolve genuine uncertainty
normally, preserve specific applicability and ten-percent valuation, and retain
automatic Effect-to-Resonance conversion as an unadopted candidate. Baseline,
terminology reference, and Task map carry the working default. The comparison
below preserves the reasoning under which the candidates were tested.

## Existing Decisions and Test Scope

Preparation is relevant Resonance, not a new Task or modifier category. It
supports a specific intended response, not every action under a Field. Delay
alone does not create preparation. The current contextual calculation is
max(0, 1 + Resonance - Dissonance), with ordinary final-only flooring.

Sources: baseline Current Roll Budget and Effect conservation/quantity rules;
Task map's Preparation Discussion Carried Forward; current approved comparison.

Compare:

1. Assess the advantage actually established, using ten-percent increments.
2. Where an appropriate preparatory Expression is genuinely uncertain, test
   converting each generated Effect into +0.10 applicable preparation Resonance.

Do not impose uncertainty merely to create a margin, a new generic preparation
Difficulty, or an extra roll on routine activity. No action price, duration,
universal cap, held-response timing, or benefit-per-round is decided here.

## Numerical Comparison

Hold the subsequent action at Rating60 before preparation, with neutral other
context. For the assessed comparison, +0.20 is one illustrative successfully
established advantage, not the universal value of preparation. If the same
uncertain setup fails, neither method grants its unestablished benefit.

| Preparation Rating | Ordinary preparation roll | Generated Effects | Assessed follow-up | Effect-converted follow-up |
| --- | ---: | ---: | ---: | ---: |
| 20 | 10 | 2 | 72 | 72 |
| 60 | 10 | 6 | 72 | 96 |
| 60 | 30 | 4 | 72 | 84 |
| 60 | 70 | 0 | 60 | 60 |
| 120 | 30 | 10 | 72 | 120 |
| 200 | 30 | 18 | 72 | 168 |

The assessed comparison deliberately holds the established advantage constant.
If a larger outcome establishes a materially better position, reassessment is
possible; it is not a rule that expert preparation must always equal20%.

The conversion candidate directly rewards successful margin. It is not rejected
merely for exceeding100%, since no such Resonance ceiling exists. However, it
makes some preparation a major amplification of subsequent capability rather
than a small readiness benefit. That distinction must be intentional.

At preparation Rating60, natural01 then06 gives adjusted result-93 and sixteen
Effects: +1.60 would raise follow-up60 to156. Repeated01 then06 gives adjusted
-192 and twenty-six Effects: follow-up216. The adopted special-result procedure
is unchanged. These are selected examples, not a complete probability model.

## Application Tests

### Aiming

In an unobstructed opportunity to line up an available target, simply taking aim
does not establish a separate uncertain preparatory action. Assess the useful
readiness actually achieved; do not invent an aiming roll to generate Effects.

If lining up that opportunity requires a genuinely uncertain existing activity,
resolve that actual activity. For example, traversing into a useful firing
position may be uncertain. Its consequences establish position and exposure.
It does not automatically grant free additional Resonance on top of every
benefit already representing that same positional advantage.

An Effect-derived advantage could be valid if it is the specific declared
output of the resolved action. This test does not establish a general weapon
aiming procedure or rate every round spent waiting at ten percent.

### Rehearsal

Routine rehearsal can establish relevant familiarity without a preparatory
roll. Its benefit is assessed against the particular presentation and audience.

Discovering the panel's likely objections or developing answers may involve
uncertain Research, Inference, or Planning through applicable expertise. Resolve
those activities normally. An assessment values what the results actually
make available; automatic conversion would instead map every generated Effect
to a larger subsequent bonus, even where success mainly provided more facts.

The conversion is most defensible when a stronger result really does create
a stronger advantage for the declared response. A high Research Rating alone
does not make every discovered fact equally useful to a presentation.

### Ambush

An ambush is an undertaking, not necessarily one preparatory roll. Concealment,
finding an approach, and the later attack may be different actual activities.
Use opposition where it exists; the numerical table above is an unopposed
control, not a replacement for opposed net-margin resolution.

Successfully establishing an unseen approach can change Access, available
responses, or useful context. Count the contribution actually established.
Do not automatically add one generic preparation bonus plus a concealment bonus
for the same advantage. Effects allocated to a specific result follow their
normal traceable path, not an additional free Effect-to-Resonance payout.

A deliberate setup whose declared output is a better attack opportunity is a
stronger candidate for Effect-based Resonance than routine aiming. Scope still
limits which Character, response, and circumstances benefit; the Field alone
does not make the result universally applicable.

## Repetition and Paid Help

Describing the same preparation repeatedly does not create distinct numerical
sources. Reassess an actually improved advantage; do not silently sum each
attempt as another bonus. Whether another attempt is possible follows the
changed fiction, not a new universal retry or accumulation rule.

A purchased +0.20 may make a distinct permitted contribution to the later
Expression. With assessed preparation+0.20 and separate Dissonance0.50, a
follow-up60 becomes42; adding the paid boost makes54. Preparation is not a
second payment for that boost, nor does the boost erase the preparation's
specific applicability. Existing one-boost and one-reroll limits remain.

## Verification and Findings

Script: `lens-preparation-assessment-versus-effects-test-v0.1.ps1`.

2,328 cases: four preparation Ratings, ordinary faces02-98, three follow-up
Ratings, and two fixed Dissonance totals. 9,315 arithmetic assertions pass.
Both alternatives share failure outcomes on failed setup. Natural01 examples
are separate probes. No complete special-face distribution, action-economy
return-on-investment claim, or empirical playtest is implied.

Both arithmetic candidates work. Assessment is the simpler general procedure
and works for both automatic preparation and situations created by uncertain
actions. It keeps value tied to the advantage actually secured. The direct
Effect conversion provides a different benefit: a predictable numerical reward
for how well the preparatory Expression succeeds, with substantial high-end
and exceptional amplification.

Recommend assessing actual preparation as the default and resolving only real
uncertainty. Do not adopt a universal one-Effect-to-ten-percent preparation
exchange merely because both use ten-point increments. Keep that conversion
as a candidate for explicitly creating numerical advantage, not a free bonus
attached to every successful preparatory action. No upper cap is proposed to
hide its high-end consequences.

The valuation decision is resolved in favor of assessed fictional benefit as
the default, with automatic conversion remaining unadopted. Duration and held
initiative remain subsequent questions, not silently resolved by this test.
