# LENS Capacity, Load, and Conditions Working Package

Version: 0.1
Status: Working architecture package; not locked doctrine
Date: 2026-08-24
Owning project: LENS System

---

## Package Purpose

This package is the self-contained working handoff for the current LENS
Capacity, Load, condition, and Dissonance design.

It records:

- the existing LENS doctrine this work inherits;
- the architecture decisions approved during the current discussion;
- the approved ordinary-human playtest baseline;
- the distinctions among Access, Dissonance, Load, Capacity, and conditions;
- the leading implications for powers and other Expressions;
- what remains unresolved;
- the exact next decision.

This package does not address Compound Expression construction. Compound
Expressions are adjacent work, not the purpose of this package.

---

## Status Language

```text
LOCKED
Existing LENS doctrine retained unless deliberately reopened.

WORKING ARCHITECTURE CANDIDATE
Approved as the current structure for continued design and testing, but not
final doctrine.

WORKING PLAYTEST BASELINE
Approved as the starting numerical control for testing, not final math.

UNRESOLVED
No procedure or value has been selected.
```

---

## Existing Doctrine Inherited

The current Capacity work inherits these LENS principles:

```text
Everything that changes a roll is a Lens.

Hit = win the exchange.

Harm = impose Dissonance.

Recovery applies a relevant counter-Lens to matching Dissonance.
```

A persistent Dissonance must identify:

- its fictional cause;
- the Expressions or actions it pressures;
- how it is imposed;
- how it may be reduced or removed;
- what high severity means fictionally.

Generic unnamed penalties remain discouraged.

---

## Locked Access Distinction

Access is already locked as structural permission for a HOLT to express
through an Axis.

```text
Open
The HOLT may express through the Axis.

Condition
The HOLT may express through the Axis only while its stated Access Condition
is satisfied.

Closed
The HOLT cannot express through the Axis.
```

Access does not measure current effectiveness and does not use percentages.

An Open Axis may face severe Dissonance. A Closed Axis does not regain
permission because Dissonance is low. An Axis with Condition Access lacks
permission while its enabling Access Condition is unmet.

Two uses of `condition` must remain distinct:

```text
Access Condition
An enabling prerequisite for Condition Access.

Adverse condition
A named persistent Dissonance or source of condition pressure, such as
Wounded, Stunned, Restrained, or Soaked.
```

---

## Approved Working Architecture

Decision recorded 2026-08-23:

```text
Capacity is the limit.

Load is accumulated condition pressure currently being borne.

Conditions are the named composition of Load.

Relevant Dissonance is the portion applying to the current Expression.
```

Status:

```text
WORKING ARCHITECTURE CANDIDATE
NOT LOCKED DOCTRINE
```

This relationship gives each term one job:

```text
Capacity
How much relevant Load a physical or mental locus can bear before losing
function.

Load
The accumulated persistent condition pressure currently being borne.

Condition
The named cause, severity, relevant scope, and recovery or counter associated
with part of the Load.

Load composition
The conditions and levels that create the Load.

Relevant Dissonance
The portions of the ledger, plus any other current resistance, that pressure
the Expression being attempted.
```

Capacity does not create a second Expression cap. The same condition loss is
not applied once as Dissonance and again as a separate cap.

Not every Dissonance contributes to Physical or Mental Load. Task Difficulty,
momentary opposition, environmental resistance, and other Dissonance remain
subject to their own relevance and persistence.

Physical and Mental Load may coexist.

---

## Approved One-Ledger Representation

Decision recorded 2026-08-24:

```text
Use one master condition ledger.

Each condition records:
- its name;
- its condition levels;
- its relevant scope;
- its recovery or counter.

Physical Load, Mental Load, and Expression Dissonance are derived by querying
the ledger.

Conditions are not copied into separate tracks.
```

Status:

```text
WORKING REPRESENTATION CANDIDATE
NOT LOCKED SHEET FORMAT
```

Illustrative ledger:

```text
Condition | Levels | Relevant scope | Recovery or counter
Soaked    | 5      | Fire           | Drying, heat, shelter
Stunned   | 2      | Mental         | Time, aid, recovery
Shaken    | 2      | Mental         | Rally, safety, recovery
Wounded   | 2      | Physical       | Medicine, rest
```

Derived queries:

```text
Physical Load
Sum the ledger entries relevant to physical Capacity.

Mental Load
Sum the ledger entries relevant to mental Capacity.

Expression Dissonance
Sum the ledger entries relevant to the current Expression, then include any
other current relevant Dissonance under the final aggregation procedure.
```

One ledger does not mean one universal modifier applies to every action. It
means every condition has one authoritative record.

A condition may appear in several derived views because those views answer
different questions. It must not be copied into several ledgers or counted
twice inside one calculation.

---

## Approved Standard Human Playtest Baseline

Decision recorded 2026-08-24:

```text
Ordinary human Physical Capacity: 10 condition levels
Ordinary human Mental Capacity:   10 condition levels

Each relevant condition level represents 10%.
```

Status:

```text
WORKING PLAYTEST BASELINE
NOT FINAL MATH
NONHUMAN AND SETTING VARIATION UNRESOLVED
```

Example:

```text
Ledger:
Stunned 2 [Mental]
Shaken 1  [Mental]

Mental Load:               3 levels
Remaining Mental Capacity: 7/10, or 70%

If all three levels are relevant to the current Expression:
Relevant Mental Dissonance: 30%
```

Ten Capacity levels do not require ten separately named conditions. One
condition may carry several levels, and several distinct conditions may
compose the same Load.

Conditions and functional thresholds remain different concepts. Ten 10%
condition levels may coexist with fewer, broader states such as impairment,
Strain, severe compromise, Suppression, or incapacitation. Those states and
their thresholds are not yet selected.

---

## Powers and Expression-Specific Conditions

The working architecture does not create a separate Capacity track for each
power, HOLT, Axis, or Expression.

An expression-specific counter is recorded once in the condition ledger with
the appropriate scope.

Free-form implication test:

```text
Fire Projection has Open Access.

Soaked 5  [Fire]
Stunned 2 [Mental]
Shaken 2  [Mental]

If all three conditions are relevant to Fire Projection:

Soaked 5 + Stunned 2 + Shaken 2
= 9 relevant condition levels
= 90% relevant Dissonance
= 10% remaining effectiveness under the additive test model
```

This example does not adopt the character, conditions, assigned values,
Attribute mapping, or additive formula.

It demonstrates the architectural distinction:

```text
Open Access
The character has permission to use Fire Projection.

Severe Dissonance
Current conditions make that permitted Expression difficult or nearly
ineffective.

Suppressed
A candidate operational state in which continuing Dissonance makes a permitted
Expression unusable.

Closed
The character lacks thematic permission through the Axis.
```

Removing the relevant adverse condition may restore the Expression without
changing its underlying Access state.

---

## Load Reference Reconciliation

The older Universal Load model already proposed:

```text
Load 7
Composition:
Restrained 4
Wounded 2
Confused 1
```

It answered:

```text
Load
How suppressed is the character?

Composition
What kind of action can recover them?
```

That structure is retained conceptually through accumulated levels and named
composition.

The older Expression-versus-Load comparison is not adopted:

```text
Expression value > Load = Available
Expression value = Load = Strained
Expression value < Load = Suppressed
```

That procedure compared Load with an obsolete 1-10 Expression Rank. Current
Expression Ratings may range from 16 to 80 or higher.

Available, Strained, and Suppressed remain possible operational-state terms,
but they are not Access states. Any future operational thresholds must use the
current Capacity, Load, and Dissonance math rather than silently importing the
old comparison.

---

## Resistance Before Conditions Are Imposed

The Capacity model does not make Toughness, protection, or other defensive
Lenses irrelevant.

Working relationship:

```text
Harmful Expression
vs.
Toughness, protection, and other relevant resistance
=
Whether a condition is imposed and how many levels it carries
```

No threshold, defensive formula, absorption rule, or harm ceiling is selected.

---

## Success Threshold Implication

The current next question arises from the possibility that degree of success
directly determines the number of condition levels imposed.

`Shift` was used temporarily in discussion for one success threshold crossed.
It is not adopted terminology.

Candidate relationship:

```text
One success threshold crossed    -> one condition level
Two success thresholds crossed   -> two condition levels
Three success thresholds crossed -> three condition levels
```

Under the approved human baseline:

```text
One level:    10% condition pressure
Two levels:   20% condition pressure
Three levels: 30% condition pressure
```

This candidate is one reason ten 10% levels were selected for working human
tests. A strong result can impose several meaningful levels without consuming
40% or 60% of ordinary human Capacity in one exchange by default.

The success-threshold relationship itself is not adopted.

---

## Incapacitation and Death

Capacity exhaustion is intended to provide a threshold for loss of function.

It does not yet define one universal outcome.

Physical incapacitation, mental incapacitation, unconsciousness, panic,
catatonia, paralysis, restraint, dying, death, destruction, and final defeat
are not synonyms.

The conditions composing the exhausted Capacity should help determine the
fictional outcome and the applicable recovery path.

No death rule is adopted.

---

## Explicitly Preserved Boundaries

```text
Access is not a percentage.

Dissonance does not partially close Access.

Capacity does not impose a second cap after Dissonance is applied.

Conditions and functional thresholds are not identical.

Physical and Mental Load may coexist.

Not every Dissonance contributes to Physical or Mental Load.

Powers do not receive separate Capacity tracks by default.

Conditions are recorded once and queried by relevance.

The same condition is not counted twice in one calculation.

Collapse and death are separate questions.
```

---

## Unresolved Decisions in Dependency Order

1. Does each success threshold crossed impose one condition level?
2. What defines the size of a success threshold?
3. How do Toughness, protection, and other resistance prevent or reduce
   condition levels?
4. What is the maximum number of condition levels one resolution may impose?
5. Do all distinct relevant condition levels add directly into one Dissonance
   percentage?
6. How does relevant Resonance counter or offset Dissonance?
7. At what Load values do broader functional states occur?
8. What happens at exactly ten relevant levels or 100% Dissonance?
9. What happens above Capacity or above 100% relevant Dissonance?
10. How do recovery actions remove or transform condition levels?
11. How do nonhuman Classifications and campaign profiles vary Capacity?
12. How are conditions and derived queries displayed at the table?

---

## Exact Next Decision

```text
When a successful harmful Expression exceeds the relevant resistance by one or
more success thresholds, does each threshold crossed impose one condition
level?
```

This decision should be made before selecting functional severity bands,
incapacitation outcomes, or final recovery rates.

---

## Source Records

Current system-neutral baseline:

```text
C:\LENS-SYSTEM\docs\system\lens-system-baseline-draft-v0.1.md
```

Current earlier working reference:

```text
C:\LENS-SYSTEM\docs\system\lens-system-working-reference-v0.2.md
```

Current Capacity development note:

```text
C:\LENS-SYSTEM\docs\design\lens-health-and-functional-capacity-working-note-v0.1.md
```

This package:

```text
C:\LENS-SYSTEM\docs\design\lens-capacity-load-condition-working-package-v0.1.md
```

---

## Handoff State

```text
Architecture relationship: approved working candidate.
One-ledger representation: approved working candidate.
Ordinary-human ten-level Capacity: approved working playtest baseline.
Final math: unresolved.
Next decision: success thresholds to condition levels.
```
