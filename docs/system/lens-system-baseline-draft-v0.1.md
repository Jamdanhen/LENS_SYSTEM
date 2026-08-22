# LENS System Baseline Draft

Version: 0.1
Package: Version One Draft Package
Status: Internal system baseline draft; not final rules
Date: 2026-08-21
Updated: 2026-08-22
Authority: C:\LENS-SYSTEM

---

## Purpose

This document is the first standalone, system-neutral baseline draft for LENS.

It consolidates:

- current LENS authority;
- system-neutral material extracted from MOTURPG;
- relevant design principles extracted from the general role-playing project;
- the current development discussion;
- existing math records and playtest evidence;
- unresolved contradictions that must not be mistaken for settled rules.

This document is intended to keep the system from being lost across chats,
projects, backups, and exploratory branches.

It is not a finished rulebook.

It is not final character creation.

It is not final math.

It is not a setting document.

---

## Name and Acronym

Current internal name:

```text
LENS
```

Current internal acronym expansion:

```text
Layered Expression Narrative System
```

Status:

```text
WORKING INTERNAL NAME
NOT PUBLICATION-LOCKED
NOT TRADEMARK-CLEARED
```

Reasoning:

```text
Layered
Capability and context are organized through progressively focused layers.

Expression
Action is the focused expression of a character's potential.

Narrative
Fictional identity and situation determine which Lenses are relevant.

System
The architecture is intended to provide a reusable rules engine.
```

---

## Status Language

This draft uses the following status categories.

```text
LOCKED
Current baseline unless deliberately reopened.

WORKING LOCK
Accepted for current use or testing, but subject to revision.

HIGH-CONFIDENCE WORKING DOCTRINE
Repeatedly reinforced and conceptually strong, but not final rules text.

WORKING CANDIDATE
Current candidate requiring further comparison or testing.

WORKING HYPOTHESIS
A proposition that explains a problem but has not yet survived testing.

TEST CONTROL
A value held fixed so another part of the system can be tested.

OPTIONAL MODULE
A possible extension that is not required by the core engine.

SETTING-FACING
A position or function implemented and named by individual settings.

SHELVED POSSIBILITY
Preserved for later testing but not part of the current procedure.

UNRESOLVED
No decision has been made.

REJECTED OR SUPERSEDED
Preserved only as development history.
```

No rule or term should be promoted without changing its status explicitly.

---

## Project Architecture

Status:

```text
LOCKED
```

LENS separates three layers.

```text
Design Doctrine
Engine / Mechanics
Setting Implementation
```

Design Doctrine defines what the system is trying to accomplish.

Engine / Mechanics defines how actions are constructed and resolved.

Setting Implementation defines the classifications, permissions, vocabulary,
resistance profile, artifacts, institutions, and examples used by a setting.

Rules:

- Engineering should serve the doctrine unless repeated tests show the
  doctrine cannot function.
- A setting may rename or extend generic Lens positions without becoming the
  authority for the universal engine.
- LENS remains independent of any one cosmology, genre, or licensed setting.
- MOTURPG remains an origin lab, first major implementation, and stress-test
  environment.
- LENS is the engine intended to drive MOTURPG.
- MOTURPG is not the authority for generic LENS.

---

## Project Boundary

Status:

```text
LOCKED
```

LENS owns:

- system-neutral doctrine;
- narrative-mechanical architecture;
- expression construction;
- action resolution;
- Scale, Difficulty, Classification, Resonance, and Dissonance design;
- generic tests and modules;
- setting implementation interfaces.

LENS does not assume:

- MOTURPG cosmology;
- Grayskull;
- the Power Sword;
- Domains as a universal mechanic;
- Nodes as a universal mechanic;
- MOTURPG factions, characters, artifacts, or lore;
- Heralds of the Source or any other original setting branch.

Setting material may enter LENS only after explicit extraction and
neutralization.

---

## Core Thesis

Status:

```text
LOCKED
```

```text
Everything that changes chance, access, effect, cost, scale, recovery,
or opposition must be named as a Lens.
```

Short form:

```text
Everything that changes an action is a Lens.
```

The earlier phrase "everything that changes a roll" remains useful, but the
long form is more complete because some Lenses change permission, consequence,
or scope without changing success chance.

Design filter:

```text
Before creating a new mechanic, ask:

Can this be represented as a Lens entering the shared engine?
```

If yes, a separate subsystem should not be created.

---

## One-System Principle

Status:

```text
LOCKED
```

LENS intentionally uses one mechanical grammar.

The engine should not require independent default subsystems for:

- combat;
- damage;
- equipment;
- difficulty;
- magic;
- extraordinary abilities;
- social interaction;
- vehicles;
- environmental effects;
- recovery;
- infrastructure;
- organizations.

These may have setting procedures or prepared content, but their mechanical
force should enter play through Lenses whenever reasonably possible.

Reasoning:

```text
One set of rules should be learned once and applied universally.
```

---

## Narrative-Mechanical Grammar

Status:

```text
HIGH-CONFIDENCE WORKING DOCTRINE
```

```text
LENS resolves actions by making relevant truths mechanically visible.
```

A Lens is not merely a bonus.

A Lens is a relevant part of the fiction entering the resolution.

Working table loop:

```text
1. Name what matters.
2. Establish why it matters.
3. Identify its mechanical role.
4. Resolve it through the shared Lens grammar.
5. Let the result change the fiction.
```

Possible roles include:

- permission;
- Base Expression construction;
- Resonance;
- Dissonance;
- Scale;
- Difficulty;
- opposition;
- consequence;
- recovery;
- Infrastructure.

---

## Character Source Principle

Status:

```text
LOCKED
```

The Character is the local source of action.

Attributes are not the source.

Attributes are the first stable conceptual Lenses through which the
Character's potential is organized.

```text
Character
↓
Attribute
↓
Progressively Narrowing Lenses
↓
Expression
```

Lenses do not create the Character's existence or potential.

They shape, organize, grant access to, focus, magnify, resist, redirect, or
constrain what the Character expresses.

---

## Progressive Focus Principle

Status:

```text
HIGH-CONFIDENCE WORKING DOCTRINE
```

Broad Lenses sit closer to the Character.

Narrow Lenses sit closer to a particular Expression.

Each successive Lens should normally answer a narrower question than the Lens
before it.

```text
Broader Lens
Applies to more possible Expressions.

Narrower Lens
Applies to fewer, more specific Expressions.
```

Advancement implication:

```text
Broader Lenses should normally cost more than narrower Lenses because they
focus more possible Expressions.
```

No advancement currency, price, or cost progression is adopted.

---

## Optics Metaphor

Status:

```text
HIGH-CONFIDENCE WORKING DOCTRINE
```

The guiding image is:

```text
Character = local source
Attribute = first broad focus
Later Lenses = progressively narrower focus
Expression = focused action
Resonance = coherence or agreement
Dissonance = resistance, distortion, scattering, or contradiction
```

The metaphor explains the architecture.

It should not be over-literalized into technical optics terminology unless a
term becomes a genuine mechanic.

---

## Core Vocabulary

Status:

```text
WORKING LOCK
```

```text
Lens
Any mechanically relevant factor that focuses, clarifies, grants, denies,
expands, limits, distorts, resists, redirects, or supports an Expression.

Expression
What a character, force, or other acting entity is trying to do.

Base Expression
The stable capability produced by the character's applicable construction
stack before current situational Lenses are applied.

Expression Rating
The table-facing number representing a precomputed Base Expression.

Final Expression / Final Rating
The roll-facing result after current Lenses are applied.

Classification
The permission space of a being or acting entity.

Scale
The natural scope, frame, or order of magnitude at which available
Expressions operate.

Difficulty
Resistance to a particular attempted Expression within the acting Scale's
frame.

Resonance
A Lens whose relevance supports, aligns, clarifies, or strengthens an
Expression.

Dissonance
A Lens whose relevance resists, contradicts, distorts, limits, or suppresses
an Expression.

Load
A proposed measure of accumulated interference and suppression.

Infrastructure
A persistent source, route, storehouse, support structure, or denial point
for Lenses.
```

Formal meanings for Focus, Theme, Domain, Paragon, and Expression Constraint
are not adopted as universal vocabulary.

---

## Classification

Status:

```text
LOCKED AS CURRENT WORKING DOCTRINE
SETTING-FACING
```

Classification answers:

```text
What kind of being or acting entity is this?
```

Classification defines possibility and permission.

It may establish:

- available Derived Attributes;
- innate capabilities;
- default assumptions;
- natural limitations;
- natural vulnerabilities;
- access to setting-facing high-order Lenses;
- which extraordinary Expressions are possible.

Classification does not primarily determine magnitude.

Classification is not currently intended to function primarily as a numerical
multiplier.

Its primary job is to establish identity, assumptions, and permission before
capability is measured.

```text
Classification determines what is possible.
```

---

## Scale

Status:

```text
LOCKED DOCTRINE
MATH UNDER TEST
```

Scale answers:

```text
At what natural scope or magnitude may available Expressions operate?
```

Scale does not grant an ability.

Scale does not define species, identity, theme, skill, or competence.

Scale defines the frame within which available capabilities naturally act.

Current concise rule:

```text
Scale is primarily a setting-facing and GM-facing magnitude Lens.

During ordinary play, a character's Scale is usually stable.

Scale changes only when the fiction changes the magnitude of what the
character is, channels, controls, confronts, or operates through.
```

Scale Rank is the mechanical magnitude value.

Scope labels such as Self, Vicinity, Region, Planet, Universe, and Existence
are translation tools only.

They are not default entity assignments or fixed universal scope values.

---

## Scale as Capacity and Horizon

Status:

```text
HIGH-CONFIDENCE WORKING DOCTRINE
NO SEPARATE SUBSYSTEM
```

Scale operates simultaneously as:

```text
Expression capacity
How much reality the acting entity may naturally affect or operate through.

Perceptual and engagement horizon
How much reality naturally enters the acting entity's field of meaningful
perception, concern, and action.
```

These are not currently separate ratings or axes.

A higher-Scale actor does not merely produce a larger effect.

That actor may naturally perceive, frame, and engage problems that do not
meaningfully enter a lower-Scale actor's field of action.

Capacity and horizon usually rise together through the same Scale Lens.

Individual Lenses may still create exceptions. A being may perceive a larger
structure without possessing equal power to alter it, or possess great force
while remaining limited in understanding.

Those exceptions should be represented through relevant Lenses rather than a
second universal Scale subsystem unless testing proves one necessary.

---

## Scale Reference Frame

Status:

```text
LOCKED
```

Difficulty is evaluated within the acting Scale's natural frame of reference.

Scale does not change the meaning of the Difficulty Curve.

Scale changes what kinds of actions occupy each Difficulty band.

```text
Scale defines the frame.
Difficulty defines resistance within that frame.
```

A Difficulty 5 action at one Scale and a Difficulty 5 action at another may
differ enormously in objective magnitude while remaining similarly resistant
relative to their actors.

---

## Difficulty

Status:

```text
LOCKED AS A DISTINCT CONCEPT
CURRENT CURVE IS A TEST CONTROL
```

Difficulty is not Scale.

Difficulty is not Classification.

Difficulty is resistance to the attempted Expression within the acting
Scale's frame.

Working doctrinal sentence:

```text
Difficulty is the natural resistance of reality against an attempted
Expression.
```

Different settings may establish different resistance profiles.

This can explain why a particular kind of Expression is routine in one world,
rare in another, or impossible without additional permission in a third.

---

## Routine, Ease, and Task Resistance

Status:

```text
WORKING LOCK
```

```text
Routine is neutral.
Difficulty is Dissonance.
Ease is Resonance, a threshold decision, or no roll.
```

A routine task under ordinary conditions has no additional Task Dissonance.

A harder task introduces Difficulty as a Dissonance Lens.

An unusually easy task may introduce Resonance, fall under a threshold rule,
or succeed without an uncertainty roll.

Task Dissonance may represent:

- complexity;
- danger;
- instability;
- precision;
- resistance;
- time pressure;
- unfavorable scope within the current frame.

Condition Dissonance may represent:

- injury;
- environmental interference;
- fear;
- pressure;
- poor position;
- hostile conditions;
- distortion;
- continuing opposition.

Both are Dissonance Lenses.

---

## Resonance and Dissonance

Status:

```text
HIGH-CONFIDENCE WORKING DOCTRINE
FINAL VALUES UNRESOLVED
```

Working concise definitions:

```text
Resonance is agreement with the Expression.

Dissonance is contradiction against the Expression.
```

They are not separate bonus and penalty subsystems.

They are the common Lens roles used when current fiction supports or resists
an Expression.

Relevant Resonance may:

- improve chance;
- strengthen effect;
- clarify access;
- support scope;
- reduce cost;
- stabilize recovery.

Relevant Dissonance may:

- reduce chance;
- resist effect;
- deny or narrow access;
- impose cost;
- distort an outcome;
- suppress an Expression;
- persist as harm or pressure.

The final mathematical ladder is not decided.

---

## Counter-Lens Doctrine

Status:

```text
WORKING DOCTRINE
HIGH CONFIDENCE
```

Scene conditions are objective.

The scene receives one assessed Environmental Resonance or Dissonance value
for the relevant action.

Characters do not recalculate the environment individually.

They answer the scene through their own Lenses.

Example:

```text
Scene:
Darkness creates Environmental Dissonance.

Character A:
No answering Lens.

Character B:
Night Vision provides relevant Resonance or permission.
```

The darkness does not change between characters.

The characters differ because their Lenses differ.

---

## Applicability Rule

Status:

```text
WORKING CANDIDATE
HIGH CONFIDENCE
```

Possession does not establish applicability.

```text
A Lens contributes only when its fictional identity genuinely applies to the
Expression being attempted.
```

The player and table should be able to say what the Lens contributes.

A Lens that cannot be connected to the action, permission, context,
opposition, consequence, or recovery does not enter the resolution.

---

## Distinct Contribution Rule

Status:

```text
WORKING CANDIDATE
HIGH CONFIDENCE
```

```text
Each Lens counted in one Expression must contribute something fictionally
distinct.
```

Synonymous descriptions do not create several contributions.

```text
Protection + Defense + Guardianship
```

may describe one contribution rather than three.

This rule is intended to prevent argument-driven modifier inflation without
limiting legitimate compound Expressions.

---

## Stable-Lens Persistence

Status:

```text
WORKING CANDIDATE
HIGH CONFIDENCE
```

A stable Lens remains available until the fiction:

- disables it;
- destroys it;
- removes access;
- changes it materially;
- makes it inapplicable.

Ordinary Dissonance does not automatically rewrite a character's stable
profile.

It pressures or interferes with the relevant Expression.

---

## Base Expression Architecture

Status:

```text
WORKING LOCK
PENDING MATHEMATICAL AND PERMISSION VALIDATION
```

Current stack:

```text
Character
↓
Classification
↓
Attribute
↓
Scale
↓
Derived Attribute
↓
Skill
↓
Specialization
=
Base Expression
```

Questions answered:

```text
Character
Who is the local source of action?

Classification
What kind of being or actor is this?

Attribute
How much broad potential is available through this locus?

Scale
At what natural scope or magnitude is it expressed?

Derived Attribute
What focused part of the Attribute is being expressed?

Skill
What has the character learned to do?

Specialization
What specific part has been mastered?
```

No layer should exist solely to make the arithmetic reach a desired number.

Each layer must perform a distinct fictional and mechanical job.

---

## Candidate Attribute Chassis

Status:

```text
WORKING CANDIDATE
INHERITED FROM MOTURPG
UNIVERSAL STATUS UNRESOLVED
```

Current candidate Attributes use a two-axis model.

```text
                         INTERNAL LOCUS       EXTERNAL LOCUS

PHYSICAL                 Might                Mobility

WILL / THOUGHT /
INTELLIGENCE /
AWARENESS / ENERGY       Psyche               Influence
```

Working definitions:

```text
Might
Internal physical locus of control.

Mobility
External physical locus of control and physical relationship to the world.

Psyche
Internal locus of control through will, thought, intelligence, awareness,
discipline, or energy.

Influence
External locus of projected, social, intellectual, or nonphysical control.
```

Current scale under consideration:

```text
Each Attribute is rated from 1 to 10.
```

The four Attributes are not yet adopted as universal across every LENS genre.

They must be tested against ordinary human, social, vehicle, organization,
horror, fantasy, science-fiction, and extraordinary-character use.

---

## Derived Attribute, Skill, and Specialization

Status:

```text
WORKING LOCK FOR CURRENT CONSTRUCTION TESTS
```

Current stable narrowing layers:

```text
Derived Attribute
Skill
Specialization
```

Current rating concept:

```text
Each stable Lens uses a 1-10 investment scale.

No investment means a neutral x1.0 multiplier.

Each invested step currently adds x0.1.

Working progression:
x1.0, x1.1, x1.2, x1.3, x1.4, x1.5, x1.6, x1.7, x1.8, x1.9, x2.0
```

The exact mapping between zero investment, rank numbering, and displayed
character-sheet values still needs formal wording.

### Rank Ceiling and Heroic Over-Cap Question

Status:

```text
RETAINED FOR LATER MATHEMATICAL TESTING
NOT ADOPTED
```

The current working construction language distinguishes:

```text
Attribute Rating
Currently rated from 1 to 10 as the broad numerical base.

Stable Lens Rank
Currently rated from 0 to 10, producing modifiers from x1.0 through x2.0.
```

The current `10` ceiling may be:

```text
an absolute universal maximum;

a standard campaign maximum;

or a normal maximum that particular campaign realities, Classifications, or
permission-bearing Lenses may exceed.
```

The third possibility must be tested because heroic characters may need to
develop extreme Attribute Ratings, Derived Attributes, or HOLT Axes without
changing their natural Scale.

Under that possibility:

```text
A character does not become god-Scale merely because one or more capabilities
exceed Rank 10.

The character remains inside the existing Scale frame but may focus enough
capability to meaningfully affect, resist, or challenge something operating at
a higher Scale.
```

This may allow heroic or mythic characters to threaten higher-Scale opposition
without granting them the opposition's natural scope, perspective, reach, or
routine capability.

Required tests:

- whether Attribute Ratings may exceed 10;
- whether stable Lens ranks may exceed 10 and continue adding x0.1 per rank;
- whether Derived Attribute and HOLT Axis ceilings remain
  linked above Rank 10;
- whether over-cap access comes from campaign calibration, Classification,
  another Lens, or a common rule;
- how over-cap stacks interact with Difficulty and cross-Scale opposition;
- whether multiplication across several over-cap Lenses inflates Final
  Expression too quickly;
- whether Overflow or another effect procedure is required above ordinary
  success thresholds;
- how advancement cost and maximum rank should scale.

No over-cap progression, cost, permission rule, or maximum is currently
selected.

Conceptual distinction:

```text
Derived Attribute
Stable, focused capability within a parent Attribute.

Skill
Learned field of action.

Specialization
Narrow mastered application.
```

### Derived Attribute Chassis

Status:

```text
LOCKED FOR THE CURRENT SYSTEM BASELINE
SUBJECT TO DELIBERATE REVISION DURING DEVELOPMENT
```

`Derived Attribute` is the adopted name for the stable construction layer
previously called `Attribute Expression`.

This is a terminology refinement, not an additional layer.

`Expression` remains the broader system term for the action or capability
ultimately produced through the full Lens stack.

Current stack:

```text
Character
↓
Classification
↓
Attribute
↓
Scale
↓
Derived Attribute
↓
Skill
↓
Specialization
=
Base Expression
```

The current chassis contains five Derived Attributes beneath each of the four
working Attributes.

```text
MIGHT

Strength
Physical force generated.

Toughness
Physical coherence under direct trauma, impact, or deformation.

Resistance
Maintenance of bodily function against imposed physical, environmental, or
systemic conditions.

Vigor
Sustained active physical exertion and output.

Resilience
Return toward physical baseline after disruption.

MOBILITY

Movement
Physical relocation through an available movement form.

Maneuverability
Alteration of course, direction, orientation, or bodily configuration during
movement.

Stability
Maintenance of orientation, footing, trajectory, or position against
disruption.

Coordination
Synchronization of deliberate physical movements.

Responsiveness
Physical adjustment to developing circumstances.

PSYCHE

Cognition
Deliberate thought, reasoning, analysis, comparison, and calculation.

Learning
Acquisition, comprehension, retention, and recall of information.

Awareness
Reception of and attention to information.

Insight
Interpretation of information and recognition of meaning, relationships, and
patterns.

Resolve
Maintenance of internal direction against fear, distraction, coercion,
temptation, pain, or confusion.

INFLUENCE

Presence
The degree to which the Character registers outwardly before communicating a
specific message or attempting a specific change.

Projection
Deliberate outward transmission of internal content or capability.

Connection
Establishment and maintenance of a meaningful outward relationship.

Manipulation
Change imposed upon an external attitude, belief, emotion, decision, or other
applicable state.

Control
Direction, regulation, or maintenance of an external actor, relationship, or
effect when access is available.
```

### In-Game Use Criterion

Each Derived Attribute must earn its place through recognizable in-game use.

A Derived Attribute should:

- support recurring actions that a player may reasonably attempt;
- perform a distinct function from neighboring Derived Attributes;
- apply across multiple Skills, situations, and genres;
- measure something belonging to the Character rather than the player's own
  creativity or knowledge;
- remain broader than a Skill or technique;
- remain narrower than its parent Attribute;
- support both ordinary and extraordinary applications when another Lens
  supplies any required permission.

### Latent Use Rule

All twenty Derived Attributes establish a consistent system vocabulary.

They are not twenty mandatory separate ratings on every character.

```text
An undeveloped Derived Attribute remains part of its parent Attribute.

The Character uses the parent Attribute normally.

A Derived Attribute becomes separately relevant when the Character invests in
that narrower focus or another Lens specifically modifies it.
```

The absence of separate investment does not create a deficiency.

Exact rating math, advancement cost, character-sheet display, and Higher-Order
Lens routing remain unresolved.

### Permission Boundary

A Derived Attribute focuses capability.

It does not independently grant an extraordinary permission.

Examples:

```text
High Strength does not by itself permit catching a mountain.

High Resilience does not by itself permit supernatural regeneration.

High Movement does not by itself permit flight.

High Projection does not by itself permit telepathy or energy projection.

High Control does not by itself permit control of minds, water, spirits, or
another otherwise unavailable subject.
```

Classification, a Higher-Order Lens, an Artifact, or another applicable Lens
must establish any extraordinary permission.

### Derivative Locus Inheritance Rule

Status:

```text
LOCKED
```

```text
A derivative inherits the locus of its parent Attribute.

Its name does not extend its applicability beyond that locus.
```

A derivative focuses a narrower part of the parent Attribute.

It does not become a free-standing keyword that may be moved to another
Attribute because the same word can be used metaphorically in ordinary
language.

Examples:

```text
Might → Resistance

Applies to internal physical resistance.

It does not resist fear, telepathy, coercion, deception, or another mental or
social influence merely because all of those things may be "resisted."

Might → Strength

Does not become strength of will merely because both expressions use the word
"strength."

Mobility → Precision

Does not become precise reasoning merely because both expressions use the word
"precision."

Influence → Presence

Does not apply to an action merely because the Character is physically
present.
```

Cross-locus expression remains possible only when another applicable Lens
establishes the relationship to the other locus.

Wordplay, metaphor, or a shared label does not establish that relationship by
itself.

---

## Stable Construction and Active Resolution

Status:

```text
LOCKED DESIGN PRINCIPLE
```

Character construction may be deep.

Ordinary table resolution must remain fast.

Construction-facing model:

```text
Stable Lenses
↓
Precomputed Expression Rating
```

Table-facing model:

```text
Expression Rating
× current applicable Lenses
= Final Rating
```

The table should not rebuild the entire stable stack for every roll.

---

## Current Roll Budget

Status:

```text
WORKING LOCK
FINAL MODIFIER MATH UNRESOLVED
```

```text
One Expression Rating
One total Resonance modifier
One total Dissonance modifier
One opposition value
```

All relevant supportive Lenses may contribute to the Resonance pool.

All relevant resisting Lenses may contribute to the Dissonance pool.

Each pool becomes one final table-facing modifier before resolution.

This is an aggregation rule, not a rule that only one advantage and one
disadvantage may exist.

---

## Relevant Dissonance Conflict

Status:

```text
UNRESOLVED
PRIMARY TEST PRIORITY
```

The tested prototype used:

```text
One most-relevant Dissonance supplies direct roll pressure.
All imposed Dissonance contributes to accumulated Load and composition.
```

The newer pool model uses:

```text
All relevant Dissonance Lenses combine into one total Dissonance modifier.
```

These may be compatible if relevance is strictly assessed and unrelated
Dissonance is excluded.

They have not yet been mathematically reconciled.

---

## Active and Passive Opposition

Status:

```text
WORKING LOCK
PLAYTEST-SUPPORTED
```

```text
Active opposition
Expression versus Expression.

Passive opposition
Expression versus Dissonance.
```

Active opposition applies when another actor is deliberately contesting the
action.

Passive opposition applies when the action is resisted by a condition,
environment, object, system, hazard, or other non-acting force.

No final opposed-roll formula is adopted.

---

## Current Core Procedure

Status:

```text
WORKING PROCEDURE
REQUIRES REVISION AFTER CURRENT TESTS
```

```text
1. Declare the intended Expression.
2. Identify the applicable Expression Rating.
3. Confirm that the required permission exists.
4. Identify the acting Scale and frame.
5. Assess Difficulty within that frame.
6. Identify relevant Resonance Lenses.
7. Identify relevant Dissonance Lenses.
8. Identify active or passive opposition.
9. Aggregate each mechanical role once.
10. Calculate the Final Rating with full precision.
11. Roll under the Final Rating to succeed.
12. Resolve success, failure, consequence, and any continuing Dissonance.
```

This procedure is deliberately provisional where permission, opposing values,
Resonance, Dissonance, and Overflow remain unresolved.

---

## Percentile Resolution

Status:

```text
WORKING LOCK FOR CURRENT TESTING
NOT FINAL-LOCKED
```

Current basic resolution:

```text
Roll under the Final Rating to succeed.
```

The percentile chassis remains open to later confirmation.

---

## Rounding

Status:

```text
LOCKED FOR CURRENT TESTING
```

```text
1. Calculate with full precision.
2. Carry all decimal places through every multiplication.
3. Floor only the final displayed result.
```

Examples:

```text
98.784 becomes 98.
21.168 becomes 21.
0.987 becomes 0.
```

No intermediate rounding is used.

---

## Difficulty Curve

Status:

```text
LOCKED FOR CURRENT TESTING
NOT FINAL SYSTEM LOCK
```

Current rule:

```text
Difficulty 1 starts at 98%.

Each additional Difficulty Rank equals the previous value x0.6.
```

Full-precision curve:

```text
D1  = 98
D2  = 58.8
D3  = 35.28
D4  = 21.168
D5  = 12.7008
D6  = 7.62048
D7  = 4.572288
D8  = 2.7433728
D9  = 1.64602368
D10 = 0.987614208
```

Displayed values after floor:

```text
D1  = 98
D2  = 58
D3  = 35
D4  = 21
D5  = 12
D6  = 7
D7  = 4
D8  = 2
D9  = 1
D10 = 0
```

Difficulty Rank is rated 1-10.

Automatic and Trivial sit outside this benchmark ladder.

---

## Automatic and Trivial

Status:

```text
WORKING LOCK
EDGE PROCEDURE INCOMPLETE
```

```text
Automatic
The intended outcome is not in doubt.
Success is guaranteed, although a roll may still test complication.

Trivial
Failure is technically possible but barely.
Working boundary: approximately 99%.
```

The generated Difficulty ladder begins at 98 because 100 and 99 are reserved
for these threshold conditions.

The exact complication procedure is unresolved.

---

## Human Capability Test Values

Status:

```text
LOCKED FOR CURRENT TESTING
CHARACTER-BUILD DERIVATION REQUIRES FORMALIZATION
```

```text
Common Specialized = 16.875
Elite Specialized  = 46.656
Peak Specialized   = 61.731
Max Specialized    = 80
```

These values represent specialized human Expressions rather than raw
Attributes alone.

Max Specialized = 80 is the current test ceiling for ordinary human
expression before additional Scale, active Resonance, setting-facing Lenses,
artifacts, or Infrastructure.

The final labels and build recipes are not publication-locked.

---

## Scale Entry and Current Scale Model

Status:

```text
SCALE MAGNITUDE 1 = x1 IS LOCKED FOR CURRENT TESTING
EXPONENTIAL x1.6 IS THE ACTIVE TEST MODEL
NOT FINAL-LOCKED
```

```text
M1  = x1.000000
M2  = x1.600000
M3  = x2.560000
M4  = x4.096000
M5  = x6.553600
M6  = x10.485760
M7  = x16.777216
M8  = x26.843546
M9  = x42.949673
M10 = x68.719477
```

Reasoning:

- M1 must not grant automatic amplification merely for existing.
- x1.6 separates higher Magnitudes more strongly than x1.5.
- x1.6 avoids the tested runaway behavior of x1.75.
- x1.6 is viable only if Scale remains rare, stable, and setting-facing.
- High Scale must not become ordinary advancement.

---

## Current Isolated Math Formula

Status:

```text
TEST CONTROL
INCOMPLETE ENGINE FORMULA
```

```text
Human Capability
× Scale Modifier
× Difficulty Multiplier
= Final displayed value after final-only floor
```

This formula isolates Scale and Difficulty.

It does not yet include final Resonance, Dissonance, opposition, permission,
or Overflow procedures.

---

## Harm as Dissonance

Status:

```text
HIGH-CONFIDENCE WORKING DOCTRINE
PLAYTEST-SUPPORTED
```

```text
Hit = win the exchange.
Harm = impose Dissonance.
```

Harm may represent:

- injury;
- restraint;
- weakness;
- illness;
- confusion;
- exposure;
- compromise;
- isolation;
- corruption;
- destabilization.

LENS does not require hit points as its default harm subsystem.

---

## Dissonance Requirements

Status:

```text
WORKING LOCK
```

A persistent Dissonance must state:

- its fictional cause;
- what kinds of Expressions it pressures;
- how it may be imposed;
- how it may be reduced or removed;
- what high severity means fictionally.

Generic unnamed penalties are discouraged because they do not tell the table
how to respond.

---

## Load

Status:

```text
OPTIONAL / WORKING MODULE
MECHANICAL CONFLICT REQUIRES TESTING
```

Working concept:

```text
Dissonance may contribute to accumulated Load.

Load measures suppression.

Composition records what kinds of Dissonance created it.
```

Earlier access rule:

```text
Expression value > Load = Available
Expression value = Load = Strained
Expression value < Load = Suppressed
```

Problem:

The playtested procedure compared Load against a separate 1-10 Expression
Rank.

The current reference compares Load with Expression Ratings that may range
from 16 to 80 or higher.

The scale of comparison is unresolved.

The Available / Strained / Suppressed concept is retained for testing, but its
current math is not adopted.

---

## Strained Expressions

Status:

```text
WORKING CANDIDATE
PLAYTEST-SUPPORTED
DEPENDENT ON LOAD REVISION
```

A Strained Expression is available, but compromised.

Earlier tested effects:

- it may still succeed;
- it cannot generate Overflow;
- failure creates a fictional cost;
- complication may increase Load.

The middle state proved useful in testing.

Its final trigger and consequences depend on the revised Load procedure.

---

## Recovery

Status:

```text
WORKING LOCK
PLAYTEST-SUPPORTED
```

```text
Recovery applies a relevant counter-Lens to matching Dissonance.
```

Recovery is not generic restoration by default.

It addresses the cause or continuing effect of interference.

Examples:

```text
Restrained
Escape, strength, cutting tool, assistance, changed position.

Wounded
Medicine, rest, endurance, repair, protective treatment.

Compromised system
Repair, restored access, replacement, rerouting.

Poisoned
Antidote, purification, removal from exposure.
```

---

## Countering and Continuing Dissonance

Status:

```text
WORKING CANDIDATE
HIGH CONFIDENCE
```

```text
Countering
The immediate action or force opposing an Expression.

Dissonance
Continuing interference that limits, distorts, or destabilizes an Expression.
```

A momentary counter does not automatically create persistent Dissonance.

Persistent fictional consequences may impose it.

---

## Compound Expressions

Status:

```text
EXPLORATORY WORKING CANDIDATE
NO FINAL PROCEDURE OR MATH
```

A compound Expression contains more than one fictionally distinct
contribution.

Working descriptive anatomy:

```text
Core Expression
The central action or effect.

Contributed Effect
A distinct addition supplied by another Lens.

Partial Counter
Removal or weakening of one contributed element.

Residual Expression
What remains after that element is countered.
```

Every counted contributor must add something distinct.

Each distinct contribution may create a separately counterable relationship.

Compound capability and exposure may rise together.

Exposure is not automatic Dissonance.

No Primary/Secondary multiplier formula, contribution limit, team formula, or
stacking ceiling is adopted.

### Combined Axes Within One HOLT

Status:

```text
CONCEPTUALLY LOCKED
```

A single manifestation uses its applicable Axis.

When one manifestation genuinely requires several Axes from the same HOLT, the
Axis Ranks do not stack. The lowest required Axis Rank controls the HOLT
contribution to the combined manifestation.

Example:

```text
Sea → Movement Rank 4
Sea → Control Rank 2

Ride a wave:
Movement Rank 4 applies.

Ride the wave while using it to attack:
Movement and Control are both required.
The controlling HOLT contribution is Rank 2.
```

This bottleneck rule preserves the mechanical relevance of each Derived
Attribute. Adding another manifestation may expand what an action accomplishes,
but it does not create a free stacked modifier.

An Open, unranked required Axis permits the combined manifestation without
providing a HOLT-derived modifier. A Closed required Axis prevents the combined
manifestation.

Only Axes genuinely required by the declared manifestation count. Helpful
wording does not force unrelated Axes into the bottleneck.

### Compound HOLTs

Status:

```text
ACTIVE DESIGN QUESTION
NO FINAL PROCEDURE OR MATH
```

Combining separate HOLTs is not the same as combining several Axes from one
HOLT.

Current distinctions:

```text
Primary function
The principal objective supplied by one HOLT Axis.

Secondary function
An independently rated effect supplied by another HOLT Axis.

Contextual Resonance
A contribution that meaningfully agrees with the current objective,
opposition, or resistance.

Compound exposure
The additional counterable relationships created by each contributor and by
their combination.
```

Example:

```text
Protection barrier expressed through Fire against ordinary arrows:
Protection supplies defense.
Fire may supply heat, ignition, threat, or another secondary effect.
Fire does not automatically improve defense merely because it is the medium.

The same barrier against a frost attack:
Fire may also become contextual Resonance because it directly answers the
current resistance.
```

Compound capability may increase while compound exposure also increases.

Still unresolved:

- whether compound construction increases chance, effect, available outcomes,
  or some controlled combination;
- when a secondary HOLT contributes a modifier rather than only permission or
  effect;
- how independently rated secondary effects are resolved;
- how often contextual alignment creates Resonance;
- how countering one HOLT changes the residual Expression;
- whether the relationship between HOLTs can itself be disrupted.

---

## Permission Architecture

Status:

```text
PRIMARY DEVELOPMENT AREA
UNRESOLVED
```

The system must distinguish:

```text
Competence
How well a character performs an available kind of action.

Permission
Whether that kind of action is available at all.

Magnitude
The natural scope at which the available action operates.
```

Current roles:

```text
Classification defines broad permission.
Attributes organize broad potential.
Scale defines frame and magnitude.
Narrower Lenses focus available Expressions.
```

The unresolved problem is how extraordinary permissions enter the stack
without either:

- allowing Skill or Specialization to manufacture powers;
- duplicating an Attribute with a high-order Lens;
- creating a bespoke catalogue of powers.

---

## Narrower Lenses and Permission

Status:

```text
WORKING HYPOTHESIS
HIGH PRIORITY TEST
```

```text
A narrower Lens may improve, focus, or specialize an available permission.

It may not create a qualitatively new permission absent from the preceding
stack.
```

Diagnostic example:

```text
A normal guard may specialize in recovery, first aid, or endurance.

That specialization does not by itself grant supernatural regeneration.
```

This hypothesis correctly identifies a boundary but does not yet establish
where every extraordinary permission originates.

---

## Named Capabilities Without a Power Catalogue

Status:

```text
HIGH-PRIORITY DESIGN CONSTRAINT
WORKING CANDIDATE
```

LENS should not require hundreds of bespoke power packages.

Working proposition:

```text
A named Lens may remain fictionally descriptive.

Its identity determines applicability, permissions, boundaries, persistence,
and vulnerabilities.

Its mechanical effect uses the common LENS grammar.
```

This allows two capabilities to use the same numerical chassis while behaving
differently because different things are possible, relevant, vulnerable, or
counterable.

The system still needs a controlled method for declaring, purchasing, or
deriving those permission-bearing Lenses.

---

## Expression Constraints

Status:

```text
SUPERSEDED BY HOLD, HOLT, AXIS, AND ACCESS ARCHITECTURE
```

An Expression Constraint may define the bounded channel through which a broad
permission normally manifests.

A Constraint is not automatically:

- Dissonance;
- a weakness;
- a flaw;
- Difficulty;
- Scale;
- Classification.

Possible functions:

- establish when a broad Lens applies;
- prevent unrestricted use outside a defined channel;
- support precision or potency inside that channel;
- establish counters and vulnerabilities;
- provide a path for broadening, redirection, damage, or restoration.

The useful functions of this candidate are now handled by HOLT thematic
permission, Axis Access, Access Conditions, and limitations. Expression
Constraint is not retained as a separate formal layer.

---

## Higher-Order Lens Architecture

Status:

```text
CONCEPTUALLY LOCKED
NUMERICAL VALUES AND PROVISIONING UNRESOLVED
```

LENS distinguishes the setting-facing definition of extraordinary capability
from the character-facing theme expressed through that definition.

The selected architecture is:

```text
Setting
↓
HOLD
Higher-Order Lens Definition
↓
HOLT
Higher-Order Lens Theme
↓
Axis
HOLT relationship to a Derived Attribute
↓
Expression
```

This architecture replaces the earlier unresolved comparison among a universal
high-order multiplier, an Attribute matrix, an emergent identity, and bespoke
power packages.

### HOLD: Higher-Order Lens Definition

Status:

```text
LOCKED
```

A HOLD is the setting-facing definition under which one or more HOLTs exist.

A HOLD may establish:

- how its HOLTs are accessed or acquired;
- which HOLT themes are permitted;
- starting HOLT Ranks;
- HOLT Rank limits;
- character-creation allocation;
- advancement rate and cost;
- training, study, transformation, milestone, or other requirements;
- available limitations and Access Conditions;
- shared weaknesses, vulnerabilities, counters, or methods of disruption;
- how its HOLTs may be removed, replaced, transformed, or restored;
- the category's meaning within the setting.

A HOLD is mechanical without being a numerical modifier.

```text
A HOLD governs access, construction, limits, and setting behavior.

A HOLD does not multiply an Expression.
```

Possible HOLDs are setting dependent.

Examples may include:

- Domain;
- Cybernetics;
- Sorcery;
- Mutation;
- Bloodline;
- Divine Gift;
- Oath;
- Transformation;
- Artifact Relationship;
- Creature Nature;
- a setting-specific class or tradition.

These are examples of how a setting may define extraordinary capability. They
are not a mandatory universal list.

### HOLT: Higher-Order Lens Theme

Status:

```text
LOCKED
```

A HOLT is the character-facing, rated Higher-Order Lens that defines a coherent
field of extraordinary possibility.

Examples may include:

- Sea;
- Strength;
- Fire;
- Perception;
- Protection;
- Predation.

The examples are not a universal catalogue.

Possessing a HOLT grants thematic permission. Its identity determines what
kinds of manifestations are coherent, applicable, limited, vulnerable, or
counterable.

A HOLT Rank measures the character's overall potential within that Theme and
sets the maximum Rank of any Axis beneath it.

```text
No Axis Rank may exceed its parent HOLT Rank.
```

The parent HOLT Rank is not a universal multiplier across every compatible
Expression. It raises development potential without automatically increasing
every Axis.

The applicable HOLD and campaign profile determine:

- how many Axis Ranks accompany HOLT acquisition or advancement;
- whether HOLT acquisition includes any Axis Ranks;
- starting allocations;
- advancement cost and speed;
- setting-specific HOLT and Axis Rank ceilings.

This permits the same engine to support generous, rapidly advancing mythic
characters and narrower, slower, study-based characters without changing the
underlying architecture.

### Axis

Status:

```text
LOCKED
```

An Axis is the relationship through which a HOLT expresses through one Derived
Attribute.

```text
HOLT
→ Axis
→ Derived Attribute
```

A HOLT may possess an Axis for any Derived Attribute with which it has a
coherent thematic relationship.

Examples:

```text
Sea → Movement
Sea → Awareness
Sea → Connection
Sea → Control

Strength → Strength
Strength → Movement
Strength → Stability
Strength → Projection
```

Sea and Strength use the same Axis procedure. Their different breadth emerges
from thematic coherence, available Axes, Access, limitations, and character
investment rather than separate broad-theme and focused-theme rules.

An Axis is either ranked or unranked.

```text
Unranked Axis
The HOLT grants no numerical modifier through the Axis.

Ranked Axis
The Axis has a numerical Rank.
The Axis Rank supplies the HOLT-derived modifier when Access permits.
```

No additional Investment, Development, Focused, or Unfocused status is used.
Rank itself communicates whether numerical development exists.

### Access

Status:

```text
LOCKED
```

Access records whether a HOLT may express through an Axis.

The selected Access states are:

```text
Open
The HOLT may express through the Axis.

Condition
The HOLT may express through the Axis only while its stated Access Condition
is satisfied.

Closed
The HOLT cannot express through the Axis.
```

Access and Rank are independent.

A ranked Axis may have Open or Condition Access. An unranked Axis may also have
Open or Condition Access.

An Open, unranked Axis grants thematic permission without a HOLT-derived
modifier. Narrative framing and extraordinary access are not separate rules:
the HOLT changes what kind of action may be attempted, while the appropriate
Derived Attribute, Skill, Specialization, Scale, Difficulty, and other Lenses
still resolve the attempt.

A Closed Axis removes the HOLT's thematic permission through that Derived
Attribute. Clever narration does not reopen it.

### Limitations and Compensation

Status:

```text
CONCEPTUALLY LOCKED
VALUES UNRESOLVED
```

The same limitation procedure may apply to:

- one Axis;
- several Axes;
- an entire HOLT.

The procedure is:

1. Identify the affected HOLT structure.
2. State whether the limitation closes Access or imposes a Condition.
3. Identify whether it affects one Axis, several Axes, or the entire HOLT.
4. Value the meaningful loss of access under the applicable HOLD.
5. Return development value appropriate to that loss.

Closing an Axis may return HOLD-defined development value that must remain
inside the same HOLT. Reinvestment may not exceed the parent HOLT Rank.

The applicable HOLD determines the numerical value returned by closed or
conditional access. Conditional value depends upon how meaningfully the
condition limits play, including:

- frequency;
- character control;
- preparation;
- vulnerability to disruption;
- affected scope;
- duration;
- consequence.

A condition that is almost always satisfied should return little or no value.
A severe, unreliable, or externally controlled condition may approach the
value of closing the affected structure.

Exact compensation requires setting-specific mathematical testing. Tests must
also determine whether larger starting allocations already account for a
high-powered setting before that setting grants larger limitation returns.

### Changing Limitations

Status:

```text
CONCEPTUALLY LOCKED
COSTS UNRESOLVED
```

Buying off, replacing, or transforming a limitation requires both mechanical
cost and narrative change.

- Buying off a limitation repays the value originally received.
- Replacing a limitation exchanges it for one of equivalent value.
- Transforming a limitation compares the old and new values and pays any
  difference.
- The applicable HOLD determines costs and narrative requirements.

A character cannot remove a limitation merely because the player can afford
it. The fiction must explain the change through an event, process, discovery,
transformation, training, or other development permitted by the HOLD and
setting.

### Ranks Above 10

Status:

```text
SETTING-PERMITTED POSSIBILITY
MATHEMATICALLY UNVALIDATED
```

A HOLD or campaign profile may permit HOLT and Axis Ranks above 10.

Exceeding Rank 10 represents exceptional focus within a HOLT or Axis. It does
not automatically increase the character's Scale.

The Scale tests must determine whether over-Rank-10 capability can cross a
Scale boundary for a specific Expression without making Scale irrelevant.

Desired behavior:

- ordinary characters remain overwhelmed by major Scale differences;
- highly ranked characters may meaningfully attempt some cross-Scale actions;
- such attempts remain difficult and potentially costly;
- one exceptional Axis does not raise every other capability;
- Scale continues to govern the character's ordinary frame.

### Character-Sheet Display

Status:

```text
DEFERRED TO CHARACTER-SHEET DEVELOPMENT
```

The architecture determines what must eventually be recorded:

- applicable HOLD, when necessary;
- HOLT name and Rank;
- Axis and Axis Rank;
- Access;
- Access Condition;
- limitations and weaknesses.

Final layout is not a current system-architecture question.

### Extraordinary Capability Tests

Status:

```text
ACTIVE TEST SET
```

The HOLD, HOLT, Axis, Rank, and Access architecture must generate and
distinguish:

```text
Ordinary strength
Trained lifting
Extreme or impossible strength
Extraordinary toughness
Resistance to ordinary harm
Rapid regeneration
Ordinary medical skill
Ordinary physical recovery
Fire expression
Ice expression
Aquatic adaptation
Aquatic movement
Environmental awareness
External control of a medium
```

The tests must show:

- where permission enters;
- how Axis Rank affects an Expression;
- what remains a Derived Attribute;
- what Scale changes;
- what narrower Skills and Specializations do;
- how two characters with related HOLTs differ;
- how counters remain specific;
- how the system avoids a bespoke package for each capability.

Paragon is not an adopted layer or multiplier.

---

## Overflow

Status:

```text
OPTIONAL ADVANCED MODULE
UNDER ACTIVE RECONSIDERATION
```

Current unresolved question:

```text
Does a value above the ordinary success range preserve degree of effect,
scope, quality, resistance, or dominance?
```

Possible uses include:

- effect size;
- quality;
- speed;
- cost resistance;
- collateral control;
- scene change;
- recovery pressure;
- opposed-contest dominance.

No Overflow spending rule, band table, opposed-margin formula, or universal
cap is adopted.

An earlier raw-rating opposition model is shelved as a possibility only.

---

## Infrastructure

Status:

```text
OPTIONAL SETTING-FACING FEATURE
PLAYTEST-SUPPORTED CONCEPT
```

Infrastructure is any persistent source, route, storehouse, support structure,
or denial point for Lenses.

It may:

- grant Resonance;
- impose Dissonance;
- deny access;
- store or route capacity;
- stabilize recovery;
- support return after defeat;
- change what actions are possible.

Examples by setting may include:

- bases;
- networks;
- strongholds;
- institutions;
- supply chains;
- social legitimacy;
- magical sites;
- ship systems;
- ecosystems;
- artifacts.

Core rule:

```text
Location alone is not enough.

Usable access, control, compatibility, permission, repair, or routing is
required to benefit from Infrastructure.
```

Infrastructure is the generic extraction.

Nodes remain a MOTURPG setting feature.

---

## Settings as Implementations

Status:

```text
LOCKED
```

Settings occupy and rename generic Lens positions.

They may define:

- Classifications;
- Attribute chassis or mappings;
- high-order permission Lenses;
- Scale interpretations;
- resistance profiles;
- artifacts;
- Infrastructure;
- common Dissonance;
- common Specializations;
- genre expectations.

The setting changes.

The engine should remain recognizable.

---

## Player Transparency

Status:

```text
LOCKED GOAL
```

Players should understand:

```text
Which Lenses apply and what each contributes.
```

Players should not need to reconstruct the underlying mathematics during
ordinary play.

Ideal table language:

```text
This Lens gives access.
This Lens helps.
This Lens resists.
This Lens changes scope.
This Lens is being countered.
```

---

## GM Interface

Status:

```text
LOCKED GOAL
```

The GM interacts with the system by:

- inserting Lenses;
- removing Lenses;
- strengthening or weakening Lenses;
- changing applicability;
- changing access;
- changing where a Lens sits in the structure;
- creating objective scene Resonance or Dissonance.

Changing a Lens's position changes its scope.

```text
High-order Lens
May change campaign or setting assumptions.

Mid-order Lens
May change character nature or broad permission.

Low-order Lens
May change a family of Expressions.

Active Lens
Changes the current action or scene.
```

The GM should not need to invent an exception subsystem for each situation.

---

## Organization and Team Continuity

Status:

```text
WORKING CANDIDATE
NO PROCEDURE ADOPTED
```

Characters, teams, organizations, and other acting structures should be able
to use the same broad Lens grammar where practical.

Team Expressions may combine distinct contributions from several characters.

Organizations may possess stable capability, Scale, Infrastructure,
Dissonance, and Expressions.

No team formula, organization sheet, action economy, or faction procedure is
adopted.

---

## Concession and Final Defeat

Status:

```text
OPTIONAL CAMPAIGN MODULE
```

Working Concession concept:

```text
A major character who can no longer win may use a final Expression to exit,
protect something, preserve a resource, or convert defeat into future
complication.
```

Concession does not reverse defeat into victory.

Working Infrastructure concept:

```text
Final defeat may require severing the structures that permit recovery,
return, access, legitimacy, or continued influence.
```

These are not required core procedures.

---

## Playtest Evidence Preserved

Status:

```text
EVIDENCE, NOT FINAL LOCK
```

MOTURPG prototype tests support continued development of:

- stable Expression Ratings;
- active versus passive opposition;
- typed Dissonance as harm;
- relevant Dissonance as immediate pressure;
- Load composition as a recovery map;
- Available / Strained / Suppressed as meaningful states;
- matching counter-Lenses for recovery;
- Infrastructure access and corruption distinctions;
- objective scene conditions.

The tests used earlier math and setting assumptions.

Their conceptual results may inform LENS.

Their old numerical procedures do not automatically transfer.

---

## Superseded or Rejected Controls

Status:

```text
DEVELOPMENT HISTORY
```

Do not use as current rules:

- Factor-of-10 Difficulty cliff;
- Scale Magnitude 1 = x3;
- exponential Scale x2 as the current model;
- exponential Scale x1.75 as the preferred model;
- nearest-number intermediate rounding;
- one advantage and one disadvantage as a hard fiction limit;
- fixed Overflow bands from the old MOTURPG prototype;
- raw opposing rating subtraction as an adopted procedure;
- Paragon as an adopted universal multiplier;
- HOLD and HOLT as interchangeable terms;
- a universal HOLT multiplier across all compatible Expressions;
- Channel, Pathway, Focused, Unfocused, Invested, or Developed as adopted Axis
  terminology;
- bespoke named powers as the default permission solution.

---

## Primary Mechanical Conflicts

Status:

```text
ACTIVE DEVELOPMENT QUEUE
```

### Conflict 1: Load Scale

Does Load compare with:

- a 1-10 Expression Rank;
- the full Expression Rating;
- a derived band;
- another universal measure?

### Conflict 2: Dissonance Aggregation

Does direct roll pressure use:

- one most-relevant Dissonance;
- a total of all relevant Dissonance;
- a common ladder that aggregates before multiplication;
- another method?

### Resolved Architecture: Extraordinary Permission

Extraordinary permission enters through a character's HOLT and the Access of
the applicable Axis. Axis Rank supplies numerical development without allowing
Skill or Specialization to manufacture permission.

### Resolved Architecture: Higher-Order Rating

The HOLT Rank caps Axis Rank. The Axis Rank supplies the HOLT-derived modifier.
The parent HOLT Rank is not a universal Expression multiplier.

### Active Test: Attribute Collision

The Axis structure prevents a HOLT from automatically multiplying an entire
Attribute. Strength and similar HOLTs still require use tests confirming that
each Axis grants coherent thematic permission rather than synonym stacking.

### Conflict 3: Effect Above 100

Does Overflow or another procedure preserve meaningful excess capability?

---

## Immediate Test Program

Status:

```text
ACTIVE
```

### Test 1: HOLD, HOLT, Axis, and Access

Build:

- an ordinary trained guard;
- a character with extraordinary regeneration;
- a character with extraordinary toughness;
- a character with impossible strength.

Use the same HOLD, HOLT, Axis, and Access grammar.

Identify exactly where qualitative permission enters.

### Test 2: Strength HOLT and Might

Compare:

- Strength as a Derived Attribute;
- Strength as a HOLT expressed through several Axes;
- extraordinary strength through Classification and Scale;
- ranked, unranked, Open, Condition, and Closed Strength Axes.

Reject any model that counts the same contribution twice.

### Test 3: HOLD Provisioning and Limitation Value

Build the same HOLT under grounded, heroic, and mythic HOLD profiles.

Compare:

- starting Axis Ranks;
- Axis Ranks received with HOLT acquisition or advancement;
- closed-Axis compensation;
- conditional-access compensation;
- advancement speed;
- whether higher starting allocation already accounts for setting power;
- limitation-dumping exploits.

### Test 4: Fire and Ice

Give two characters identical numerical investment.

Test whether fictional identity creates different permissions, applicability,
constraints, vulnerabilities, and counters without separate subsystems.

### Test 5: Two Aquatic Characters

Build one character emphasizing internal physical and movement expressions.

Build another emphasizing awareness and external control.

Use one Sea HOLT with different Axis Ranks and Access states.

Test whether one unifying concept can produce distinct characters.

### Test 6: Dissonance Aggregation

Use one task with:

- Task Dissonance;
- environmental Dissonance;
- harm Dissonance;
- one or more relevant counter-Lenses.

Compare one-most-relevant against total-relevant aggregation.

### Test 7: Load Scale

Run Available, Strained, and Suppressed against:

- 1-10 rank;
- full Expression Rating;
- derived bands.

### Test 8: Compound Counter

Build one Expression with two distinct contributions.

Counter only one contributor.

Confirm that the residual Expression remains understandable and usable.

### Test 9: Scale and Perspective

Test Scale simultaneously as:

- natural capacity or scope;
- horizon of meaningful perception and engagement.

Do not create a separate perception subsystem unless the existing Scale and
Lens grammar fail.

Also test whether setting-permitted HOLT and Axis Ranks above 10 allow a highly
focused Expression to cross a Scale boundary without replacing Scale or raising
the character's entire frame.

### Test 10: Resonance and Dissonance Ladder

Hold fixed:

- current Difficulty curve;
- human capability controls;
- final-only floor;
- Scale x1.6.

Test a universal modifier progression for both supportive and resisting
Lenses.

---

## Current Working Summary

Status:

```text
BASELINE SNAPSHOT
```

```text
LENS = Layered Expression Narrative System.

The Character is the local source of action.

Attributes are the first broad focusing Lenses.

Everything changing chance, access, effect, cost, scale, recovery, or
opposition is a Lens.

Classification defines permission.

Scale defines the natural frame and scope of expression.

Difficulty defines resistance within that frame.

Resonance supports an Expression.

Dissonance resists an Expression.

Scene conditions remain objective.

Characters answer the scene through their own Lenses.

Stable Lenses build precomputed Expression Ratings.

Active Lenses modify those ratings during play.

A Lens contributes only when it genuinely applies.

Each counted Lens must make a fictionally distinct contribution.

Named capabilities should use the common grammar rather than bespoke power
subsystems.

HOLD means Higher-Order Lens Definition.

A HOLD defines setting-facing access, construction, limits, limitations,
weaknesses, and advancement without multiplying Expressions.

HOLT means Higher-Order Lens Theme.

A HOLT grants coherent thematic permission. Its Rank caps the Rank of every
Axis beneath it and does not automatically multiply all compatible
Expressions.

An Axis is the relationship through which a HOLT expresses through one Derived
Attribute.

An Axis is ranked or unranked. No separate investment or development status is
used.

Axis Access is Open, Condition, or Closed.

An Open, unranked Axis grants thematic permission without a HOLT-derived
modifier.

HOLDs and campaign profiles determine Axis allocation, limitation value,
advancement, and whether HOLT or Axis Ranks may exceed 10.

Settings implement and name generic Lens positions.

MOTURPG is a setting implementation and development lab, not generic LENS
authority.
```

---

## Current Authority and Supporting Records

This baseline draft should be read with:

```text
C:\LENS-SYSTEM\docs\system\lens-system-working-reference-v0.2.md
C:\LENS-SYSTEM\docs\math\lens-scale-x1.6-test-record-v0.1.md
C:\LENS-SYSTEM\docs\extraction\lens-source-extraction-record-v0.1.md
```

The older working reference remains preserved as source authority and
development history.

This baseline draft does not silently overwrite it.

---

## Draft Control

When a decision changes, record the transition explicitly.

```text
UNRESOLVED
→ WORKING HYPOTHESIS
→ WORKING CANDIDATE
→ WORKING LOCK
→ LOCKED
```

or:

```text
WORKING CANDIDATE
→ SHELVED POSSIBILITY
→ REJECTED OR SUPERSEDED
```

Future drafts should preserve the reasoning behind every promotion, demotion,
or rejection.
