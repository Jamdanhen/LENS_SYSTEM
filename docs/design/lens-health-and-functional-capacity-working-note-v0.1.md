# LENS Health and Functional Capacity Working Note

Version: 0.1
Status: Working architecture candidate; not locked doctrine
Date: 2026-08-23
Source: Current LENS health-system discussion

---

## Purpose

This note preserves an initial model for health, harm, functional decline, and
incapacitation before the relationships are separated into final mechanics.

Nothing in this note is locked.

The model is being recorded because it may answer a current gap in LENS:
typed Dissonance can describe harm, and Load can describe accumulated
suppression, but the system does not yet have a dependable threshold at which
a character can no longer function and collapses.

---

## Initial Structural Idea

A character may have two percentage-based functional-capacity measures:

```text
Physical Capacity: 100%
Mental Capacity:   100%
```

The measures are not mutually exclusive. A character may carry physical
Dissonance and mental Dissonance at the same time.

```text
Physical Capacity Deficit -> Physical Dissonance
Mental Capacity Deficit   -> Mental Dissonance

Both deficits may coexist.
```

This coexistence does not yet decide how both Dissonances apply to any one
Expression. Relevance and aggregation remain separate questions. It is also
unresolved whether either percentage is explicitly tracked during play.

The two-track structure reflects the current four-Attribute chassis:

```text
Physical locus:
Might
Mobility

Mental / nonphysical locus:
Psyche
Influence
```

The track names are placeholders. `Physical Capacity` and `Mental Capacity`
are used here only to keep the concept clear. Final terminology may instead
refer to health, condition, integrity, function, will, psyche, or another
established LENS-compatible term.

---

## Core Intuition

At full capacity, a character operates at full effectiveness:

```text
100% capacity = up to 100% of normal effective capability
```

As a capacity track declines, the deficit produces Dissonance against
Expressions using the related part of the character.

The missing percentage becomes Dissonance:

```text
Capacity Deficit = 100% - Current Capacity
```

Working example:

```text
Physical Capacity: 85%
Physical Capacity Deficit: 15%
```

The character therefore carries physical Dissonance corresponding to the
missing 15% when that diminished physical state is relevant.

This suggests a possible relationship:

```text
The track measures remaining function.
The deficit creates Dissonance.
Named conditions explain the fictional causes and consequences of that loss.
```

Clarification:

```text
Capacity does not create a separate cap on an Expression or Final Rating.

The deficit has one mechanical role: Dissonance.
```

This is not yet a final formula. It remains unresolved how the applicable
capacity deficit:

- becomes a Dissonance multiplier;
- feeds a common Dissonance ladder;
- determines access, strain, or suppression thresholds;
- affects outcome or effect in addition to chance;
- or uses a controlled combination of these roles.

Any controlled combination must remain one application of Dissonance. It must
not add a separate capability cap or count the same capacity loss twice.

The percentage itself is not yet required to be a load-bearing player-facing
stat. Two models remain open:

```text
Explicit model
The current Physical and Mental Capacity percentages are recorded and changed.

Abstract model
Conditions are recorded. Their severity represents portions of Capacity, and
the table infers threshold crossings without tracking a running percentage.
```

Capacity may therefore become the underlying abstraction that explains how
close a character is to loss of function rather than a number that must always
appear on the character sheet.

---

## Relationship to Attributes

The first alignment under consideration is:

```text
Physical Capacity
-> Might
-> Mobility

Mental Capacity
-> Psyche
-> Influence
```

The broad principle is that diminished function produces Dissonance against
Expressions using the relevant physical or mental locus.

An Expression drawing only upon one locus may face the Dissonance created by
that locus's deficit. An Expression drawing upon both may need to consider the
relevant Dissonance arising from both tracks.

Still unresolved:

- how the relevant deficits combine when an Expression genuinely draws upon
  both tracks;
- whether each track contributes only its own relevant Dissonance;
- how Influence should interact with mental impairment when its locus is
  external;
- how nonstandard Classifications divide physical, mental, artificial,
  distributed, spiritual, or other forms of function.

---

## Conditions and Percentage Intervals

Conditions and percentage bands are distinct concepts.

Named conditions may occupy, contribute toward, or correspond to portions of
a Capacity measure, but a condition is not itself a percentage band.

Two initial granularities were proposed:

```text
Five intervals per track  = 20% per interval
Ten intervals per track   = 10% per interval
```

This does not yet establish that every condition is identical or that all
harm must arrive in fixed chunks. The interval count may instead determine:

- how many condition steps a track can contain;
- when a new severity threshold is crossed;
- how conditions stack toward collapse;
- the maximum number of simultaneous condition levels;
- how much detail the character sheet exposes.

Named conditions remain important because a percentage alone does not explain
what has happened, which Expressions are affected, or what kind of recovery
can answer it.

For example:

```text
Physical Capacity: 60%
Possible condition composition:
Wounded 20%
Poisoned 10%
Exhausted 10%
```

That example is illustrative only. It does not adopt those values or require
those conditions to stack additively.

### Abstract Condition-Capacity Model

Under an alternative abstraction, the table may record only conditions or
condition severity.

For example, if each condition level represents 10%, 20%, or 25% of a locus's
total Capacity, the table may know when accumulated conditions have reached an
impairment, crippling, incapacitation, or collapse threshold without recording
the intermediate percentage after every change.

```text
Conditions are visible.
Capacity is the underlying total they consume or represent.
Thresholds translate the accumulation into functional states.
```

Repeated conditions might stack, escalate in severity, or occupy several
condition levels. No procedure is selected.

The composition still matters. Several Wounded conditions, several Restrained
conditions, and a mixture of Wounded, Restrained, Poisoned, and Exhausted
conditions may reach the same Capacity threshold while producing different
fictional consequences and different recovery requirements.

Current leaning:

```text
The condition-first abstraction is the preferred direction for further
thought because it better preserves the Lens test and the one-system test.

This is a strong leaning, not an adopted rule.
```

---

## Success Thresholds and Condition Levels

A new implication connects degree of success to the number of condition levels
imposed.

### Standard Human Capacity Baseline

Working playtest decision recorded 2026-08-24:

```text
Ordinary human Physical Capacity: 10 condition levels
Ordinary human Mental Capacity:   10 condition levels

Each relevant condition level represents 10%.
```

Status:

```text
APPROVED WORKING HUMAN PLAYTEST BASELINE
NOT FINAL MATH
NONHUMAN AND SETTING VARIATION UNRESOLVED
```

This establishes consequence granularity for ordinary human testing. It does
not establish functional severity bands, the number of levels imposed by a
successful action, the maximum consequence of one result, or what happens at
Capacity exhaustion.

The ten levels do not require ten separately named conditions. One condition
may carry several levels, and several different conditions may compose the
same Load.

`Shift` is a temporary candidate label used in the discussion for one success
threshold crossed beyond the opposing success rate or other resistance. It is
not adopted terminology. `Degree`, `margin threshold`, or another established
term may eventually serve this function.

Working relationship:

```text
One success threshold crossed   -> one condition level
Two success thresholds crossed  -> two condition levels
Three success thresholds crossed -> three condition levels
```

This relationship materially changes the preferred test granularity.

If one condition level equals 20%:

```text
One level:    20% Dissonance -> 80% remaining Capacity
Two levels:   40% Dissonance -> 60% remaining Capacity
Three levels: 60% Dissonance -> 40% remaining Capacity
```

A strong result capable of crossing two or three success thresholds could
therefore compromise most of a human's Capacity in one exchange.

If one condition level equals 10%:

```text
One level:    10% Dissonance -> 90% remaining Capacity
Two levels:   20% Dissonance -> 80% remaining Capacity
Three levels: 30% Dissonance -> 70% remaining Capacity
```

Current mathematical leaning for this specific resolution model:

```text
Ten Capacity units at 10% each are the stronger starting playtest value if
each crossed success threshold directly imposes another condition level.
```

This does not require ten separately named conditions. Several levels may
increase the severity of one condition, create several distinct conditions,
or use another presentation determined by the fiction.

Ten 10% units may coexist with fewer, broader functional severity bands. For
example, the underlying consequence unit may be 10% while impairment states
change at 20% intervals. Condition granularity and functional thresholds
remain distinct.

Three ideas must not be collapsed into one:

```text
Success threshold
How far the resolution exceeded the relevant resistance.

Condition level
How much Dissonance or Capacity pressure the result imposes.

Functional threshold
When accumulated pressure changes the character's overall state.
```

Still unresolved:

- the size of each success threshold;
- whether every crossed threshold always creates one condition level;
- the maximum condition levels one resolution may impose;
- how Toughness, protection, and other resistance prevent or reduce levels;
- whether exceptional conditions can impose more than 10% per level;
- whether the condition level affects only Capacity, relevant Dissonance, or
  both through one unified application.

---

## Expression-Specific Dissonance Without Additional Tracks

The condition-first model may extend beyond physical and mental
incapacitation. Conditions can impose Dissonance against a power, HOLT, Axis,
or other Expression without requiring a separate Capacity track for every
power or capability.

Working abstraction:

```text
Character conditions
+ power-specific or expression-specific conditions
+ other relevant resisting conditions
= total relevant Dissonance against the current Expression
```

Only conditions relevant to the Expression enter that total.

This may be the resisting counterpart to the positive compound-construction
question: several distinct sources can contribute to the same Expression, but
here they compound as Dissonance rather than supportive capability or
Resonance.

### Fire Projection Rambling Test

The following is a free-form implication test. It does not adopt the example,
the condition values, or the Attribute mapping as rules.

```text
Soaked condition relevant to Fire Projection: 50% Dissonance
Stunned condition relevant to mental Capacity: 20% Dissonance
Shaken condition relevant to mental Capacity:  20% Dissonance

Total relevant Dissonance:                     90%
Remaining effective expression:                10%
```

The fire Expression remains possible in the example, but it operates through
90% Dissonance. No separate Fire Capacity track is created.

The example currently imagines additive Dissonance:

```text
50% + 20% + 20% = 90% Dissonance
```

That additive relationship is exposed for testing, not adopted.

The distinction from Access is important. Under the current HOLT architecture,
Access remains Open, Condition, or Closed. A counter such as being soaked may
leave Access intact while imposing severe Dissonance against the Expression.
The character still has permission to express fire; current conditions make
that Expression extremely difficult or weak.

Open implications:

- whether total relevant Dissonance is added directly as in the example;
- what happens at exactly 100% Dissonance;
- what happens when relevant Dissonance exceeds 100%;
- whether 100% Dissonance suppresses an Expression without changing Access;
- whether relevant Resonance counters Dissonance before or after aggregation;
- whether the same condition can contribute to a Capacity threshold and to an
  Expression's relevant Dissonance without being counted twice in one role;
- how the table identifies relevance quickly enough for ordinary play.

---

## Resistance Before Capacity Loss

The Capacity model does not make Toughness or protection irrelevant.

Toughness, protection, and other relevant defensive Lenses may determine how
difficult it is for a harmful Expression to cross the threshold required to
impose damage, a condition, condition severity, or Capacity loss.

Working relationship:

```text
Harmful Expression
vs.
Toughness, protection, and other relevant resistance
=
Whether harm is imposed and how severe it may be
```

No exact threshold or formula is selected. The earlier 20% maximum-harm
example remains a free-form mathematical possibility, not a universal damage
rule.

---

## Incapacitation, Collapse, and Death

The Capacity framework is intended to supply a threshold at which continued
function is no longer possible, whether Capacity is tracked explicitly or
inferred from accumulated conditions.

The most direct possibility is:

```text
0% Physical Capacity -> physically nonfunctional or collapsed
0% Mental Capacity   -> mentally nonfunctional or collapsed
```

However, collapse, incapacitation, unconsciousness, defeat, dying, and death
should not be treated as synonyms without testing.

Open possibilities include:

- reaching 0% causes incapacitation but not automatic death;
- particular conditions determine whether reaching 0% means unconsciousness,
  paralysis, panic, catatonia, loss of control, dying, or another state;
- further harm after 0% creates a death or destruction risk;
- catastrophic harm may cross a separate terminal threshold;
- death remains a fictional consequence requiring an appropriate cause rather
  than a universal numerical result;
- major characters may interact with Concession or recovery Infrastructure
  before final defeat.

The system needs an explicit answer to both questions:

```text
When can the character no longer act?

When does being unable to act become death, destruction, or another final
state?
```

---

## Initial Harm Calculation Thought

One working example separates an attack's maximum possible harm from the
percentage of that harm actually realized.

```text
Maximum harm from the attack: 20% of a capacity track
Realized result:               75% of that maximum

20% x 75% = 15% capacity loss

Starting capacity: 100%
Capacity after harm: 85%
```

This suggests that an attack or harmful effect may define a harm ceiling, and
the resolution result may determine what portion of that ceiling is imposed.

The example does not yet decide:

- whether the 75% is the original success roll, a margin, Overflow, or a
  separate effect roll;
- whether a roll-under procedure must reverse or otherwise translate the roll
  before it can represent realized harm;
- whether attacks have fixed or derived maximum harm percentages;
- whether protection reduces the ceiling, the realized amount, or prevents
  the condition;
- whether Scale changes the harm ceiling;
- whether ordinary attacks should be able to remove a full interval;
- how rounding works;
- whether mental and physical harm use the same procedure.

---

## Relationship to Existing LENS Doctrine

This model can preserve the current doctrine:

```text
Hit = win the exchange.
Harm = impose Dissonance.
Recovery applies a relevant counter-Lens to matching Dissonance.
```

The Capacity measures would not need to become traditional hit points. They
may represent diminished physical or mental capability before survival itself
is in question, and they may remain an underlying abstraction rather than an
explicit numerical pool.

The model may also clarify the distinction among the existing concepts:

```text
Condition
The named fictional harm or pressure and its severity, scope, and recovery
path.

Capacity
The total adverse pressure a physical or mental locus can bear before losing
function, or the threshold against which that pressure is measured.

Load
The accumulated persistent Dissonance or condition pressure currently being
borne.

Dissonance
How relevant resistance, including applicable conditions, interferes with a
current Expression.
```

The unresolved Load concept must be reconciled rather than silently layered on
top.

Working architecture decision recorded 2026-08-23:

```text
Capacity is the limit.

Load is accumulated condition pressure currently being borne.

Conditions are the named composition of Load.

Relevant Dissonance is the portion applying to the current Expression.
```

Status:

```text
APPROVED WORKING ARCHITECTURE CANDIDATE
NOT LOCKED DOCTRINE
REPRESENTATION AND VALUES UNRESOLVED
```

---

## Working Architecture: Terminology Reconciliation

The current reference documents use several related terms that must not be
collapsed into one another.

### Access

Status in the current baseline:

```text
LOCKED
```

Access is structural permission for a HOLT to express through an Axis:

```text
Open
The HOLT may express through the Axis.

Condition
The HOLT may express through the Axis only while its stated Access Condition
is satisfied.

Closed
The HOLT cannot express through the Axis.
```

Access does not describe a percentage of present effectiveness.

An Open Axis may face severe Dissonance. A Closed Axis does not regain
permission merely because Dissonance is low. An Axis with Condition Access is
available only when its enabling Access Condition is satisfied.

Because `Condition` is also used for adverse states such as Wounded, Stunned,
or Soaked, future discussion should distinguish:

```text
Access Condition
An enabling prerequisite for Condition Access.

Adverse condition
A named persistent Dissonance or source of condition pressure.
```

The capitalization and full phrase matter until the terminology is refined.

### Dissonance

Dissonance is current resistance, contradiction, distortion, or interference
against an Expression.

Relevant Dissonance answers:

```text
What pressure applies to this Expression now?
```

Several relevant Dissonance sources may combine into one total modifier under
the current pool candidate. Unrelated Dissonance is excluded.

### Load

Load is currently an optional, unresolved module.

The reference doctrine says:

```text
Dissonance may contribute to accumulated Load.
Load measures suppression.
Composition records what kinds of Dissonance created it.
```

The older example was:

```text
Load 7
Composition:
Restrained 4
Wounded 2
Confused 1
```

That structure strongly resembles the emerging condition-first Capacity
model. Both preserve accumulated severity and named composition.

The older Expression-versus-Load rule is not current math:

```text
Expression value > Load = Available
Expression value = Load = Strained
Expression value < Load = Suppressed
```

It was built for a 1-10 Expression Rank and cannot be imported unchanged into
the current 16-80-or-higher Expression Rating scale.

The words Available, Strained, and Suppressed remain useful candidates for a
current operational state, but they should not be called Access states. Access
already has a different locked meaning.

### Capacity

Capacity is the new candidate concept. Its strongest nonduplicative
relationship to Load may be:

```text
Capacity
How much relevant Load a locus can bear before it loses function.

Load
How much persistent condition pressure is currently being borne.

Load composition
Which named conditions create that pressure.

Relevant Dissonance
Which parts of that composition, plus any other current resistance, pressure
the Expression being attempted.
```

Illustrative human-scale expression:

```text
Physical Capacity: 10 condition levels
Physical Load:      3 condition levels
Composition:        Wounded 2, Restrained 1
Remaining Capacity: 7 condition levels / 70%
```

This relationship is the approved working architecture candidate. It is not a
locked procedure, and its representation and numerical values remain
unresolved.

Under this candidate, Capacity does not become a duplicate subsystem. Capacity supplies
the threshold or denominator that Load previously lacked, while Load records
the accumulated adverse state and its composition.

### One Master Condition Ledger

Working representation decision recorded 2026-08-24:

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
APPROVED WORKING REPRESENTATION CANDIDATE
NOT LOCKED DOCTRINE
SHEET FORMAT AND QUERY PROCEDURE UNRESOLVED
```

Illustrative ledger:

```text
Condition | Levels | Relevant scope | Recovery or counter
Soaked    | 5      | Fire           | Drying, heat, shelter
Stunned   | 2      | Mental         | Time, aid, recovery
Wounded   | 2      | Physical       | Medicine, rest
```

Derived views:

```text
Physical Load
The condition levels in the ledger relevant to physical Capacity.

Mental Load
The condition levels in the ledger relevant to mental Capacity.

Expression Dissonance
The condition levels in the ledger relevant to the current Expression, plus
any other current relevant Dissonance.
```

One ledger does not mean one universal modifier applies to every action. It
means each condition has one authoritative record and is selected only when
the current query makes it relevant.

If one condition is relevant to more than one derived view, those views may
each include it because they answer different questions. The same condition
must not be copied or counted twice inside one calculation.

### Operational Distinctions

The current cleanest shared language is:

```text
Open / Condition / Closed
Structural Axis Access and thematic permission.

Available / Strained / Suppressed
Candidate operational state under accumulated interference.

Dissonance
Resistance relevant to the current Expression.

Load
Accumulated persistent Dissonance and its composition.

Capacity
The amount of relevant Load that can be borne before loss of function.
```

Example:

```text
A Fire Projection Axis has Open Access.

Soaked imposes severe Dissonance against Fire Projection.

The Expression may be Strained or Suppressed by that Dissonance or Load, but
the Axis is not therefore Closed.

Removing Soaked restores the Expression without changing its underlying
Access state.
```

This distinction also separates three different negative outcomes:

```text
Countered
An immediate opposing action or force stops or reduces the current Expression.

Suppressed
Continuing Dissonance or Load makes a permitted Expression unusable.

Closed
The HOLT lacks thematic permission through that Axis.
```

---

## Main Design Questions Exposed

1. Are two tracks sufficient for every Classification and setting?
2. Are the tracks properly aligned to Might/Mobility and Psyche/Influence?
3. How is the capacity deficit translated into Dissonance without creating a
   second cap or counting the loss twice?
4. Does the deficit apply only when relevant, or globally to every Expression
   tied to that locus?
5. Should Capacity be explicitly tracked, inferred from condition severity,
   or represented through another abstraction?
6. Do named conditions consume capacity, occupy thresholds, or merely explain
   capacity loss?
7. What exact value makes a character Strained, Suppressed, incapacitated, or
   collapsed?
8. What distinguishes collapse from death or another final state?
9. How does a harm result determine percentage loss?
10. How do Toughness, Resistance, Vigor, Resilience, Stability, Resolve, and
    other relevant Derived Attributes prevent, endure, or recover capacity
    loss without becoming redundant?
11. How does this model reconcile with Load rather than creating an additional
    independent subsystem?
12. Can the percentage remain visible and intuitive while the underlying math
    stays fast at the table?
13. Can condition-based Dissonance pressure powers and other Expressions
    without creating separate tracks for each capability?
14. Does total relevant Dissonance add directly, multiply, use a ladder, or
    follow another common aggregation procedure?
15. Working baseline resolved: ordinary humans have ten Physical Capacity
    levels and ten Mental Capacity levels, with each relevant level
    representing 10%.
16. Working candidate resolved: Capacity is the threshold for Load, with one
    master condition ledger queried for Physical Load, Mental Load, and
    relevant Expression Dissonance.

---

## Current Working Summary

```text
A character may have one Physical and one Mental Capacity measure. Both begin
conceptually at full Capacity, and both may be diminished at the same time.

Capacity may be an explicit percentage or an underlying abstraction expressed
through accumulated conditions and severity thresholds.

When a percentage deficit is used, it becomes relevant Dissonance against
Expressions using that locus. It does not also create a separate capability
cap.

Named conditions explain the cause, scope, fictional consequence, and recovery
path of the loss.

Percentage bands may mark impairment, crippling, incapacitation, or other
severity thresholds without being identical to conditions.

The same condition grammar may impose Dissonance against powers and other
Expressions without creating a separate Capacity track for every capability.

The current rambling test uses additive relevant Dissonance, allowing several
conditions to leave an Expression possible but severely diminished. That math
is exposed for testing and is not adopted.

If degree of success directly determines the number of condition levels, the
current playtest leaning shifts toward ten 10% Capacity units. This prevents a
two- or three-threshold result from automatically consuming 40% or 60% of a
human's Capacity. Broader functional severity bands may still sit above those
smaller units.

Reaching a terminal threshold causes collapse or incapacitation, but death and
other final states require separate definition.

The approved working architecture candidate treats Capacity as what can be
borne, Load as accumulated persistent condition pressure, Load composition as
the named conditions, and relevant Dissonance as the portion that pressures
the current Expression. Representation, thresholds, and mathematical values
remain unresolved.
```

Status:

```text
WORKING ARCHITECTURE CANDIDATE
NOT LOCKED DOCTRINE
ONE MASTER CONDITION LEDGER APPROVED FOR WORKING TESTS
TEN-LEVEL HUMAN CAPACITY BASELINE APPROVED FOR WORKING TESTS
SUCCESS-THRESHOLD-TO-CONDITION-LEVEL DECISION NEXT
REQUIRES DISSONANCE AND EXPRESSION MATH
```
