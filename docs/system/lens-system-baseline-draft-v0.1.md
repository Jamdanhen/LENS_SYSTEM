# LENS System Baseline Draft

Version: 0.1
Package: Version One Draft Package
Status: Internal system baseline draft; not final rules
Date: 2026-08-21
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

- available Attribute Expressions;
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
Attribute Expression
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

Attribute Expression
How does the Attribute generally manifest?

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

## Attribute Expression, Skill, and Specialization

Status:

```text
WORKING LOCK FOR CURRENT CONSTRUCTION TESTS
```

Current stable narrowing layers:

```text
Attribute Expression
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

Conceptual distinction:

```text
Attribute Expression
Broad manifestation of an Attribute.

Skill
Learned field of action.

Specialization
Narrow mastered application.
```

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
WORKING CANDIDATE
NOT ADOPTED
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

No mechanical value or mandatory stack position is adopted.

---

## Generic High-Order Lens Slot

Status:

```text
SETTING-FACING POSITION
UNNAMED AND UNRESOLVED IN THE GENERIC ENGINE
```

MOTURPG uses Domain as a high-order setting Lens.

Domain is not a universal LENS term.

Theme was used during discussion as neutral shorthand.

Theme is not adopted as Domain's replacement.

Other settings might use concepts such as:

- origin;
- tradition;
- bloodline;
- mutation;
- oath;
- technology;
- psionics;
- divine gift.

These examples identify a possible setting-facing position, not a universal
list or mandatory layer.

---

## High-Order Lens Models Under Test

Status:

```text
UNRESOLVED
```

### Model A: Attribute Matrix

```text
One high-order concept has a separate rating through each Attribute.
```

Potential value:

- differentiated manifestations;
- uneven character investment;
- clear Attribute relationship.

Risks:

- repeated bookkeeping;
- unclear relationship to the overall concept;
- four ratings may duplicate narrower Expressions.

### Model B: One Rated High-Order Lens

```text
One rating multiplies all compatible Attribute Expressions equally.
Narrower channels determine how it manifests.
```

Potential value:

- one coherent concept;
- direct contribution to Base Expression;
- supports characters whose capabilities share one unifying Lens.

Risks:

- broad multiplier may be too efficient;
- it may repeat an Attribute;
- permission, connection, authority, and magnitude may be conflated;
- it does not yet solve Strength multiplied through Might.

Current assessment:

```text
Strongest early model, but not adopted.
```

### Model C: Emergent High-Order Identity

```text
Narrow Expressions share tags or alignment.
Repeated alignment creates an emergent coherent identity or Resonance.
```

Potential value:

- flexible bottom-up construction;
- avoids paying for an empty top-level label.

Risks:

- the high-order concept may contribute no rating;
- coherence may become cosmetic;
- tag recognition and stacking require another procedure.

### Model D: Bespoke Power Catalogue

```text
Characters purchase discrete power packages with individual permissions and
rules.
```

Potential value:

- immediate clarity;
- explicit permission boundaries.

Risks:

- abandons the one-system principle;
- creates a book of powers;
- requires extensive bespoke content;
- makes the common Lens grammar secondary.

Current assessment:

```text
Not preferred.
Retained only as a comparison model.
```

---

## Attribute and High-Order Lens Collision

Status:

```text
ACTIVE DESIGN PROBLEM
```

Strength is the primary diagnostic case.

Might already includes internal physical capacity such as:

- strength;
- endurance;
- toughness;
- durability;
- recovery-related physical capacity.

A rated Strength high-order Lens multiplied through Might may count the same
concept twice.

Strength also maps poorly across Mobility, Psyche, and Influence unless its
meaning is stretched until it becomes a different concept.

Therefore:

```text
Strength has not been accepted as proof that every extraordinary capability
needs a rated high-order Lens.
```

The same test must be applied to every proposed high-order concept:

```text
Does this Lens contribute a distinct permission or coherence?

Or does it merely rename an Attribute or narrower Expression?
```

---

## Extraordinary Capability Test Cases

Status:

```text
ACTIVE TEST SET
```

The permission architecture must generate and distinguish:

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
- what rating increases Base Expression;
- what remains an Attribute Expression;
- what Scale changes;
- what narrower Skills and Specializations do;
- how two characters with related concepts differ;
- how counters remain specific;
- how the system avoids a bespoke package for each item.

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
- Theme as an adopted replacement for Domain;
- Strength as a proven generic high-order Lens;
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

### Conflict 3: Permission Entry

Where does an extraordinary permission enter without requiring a power
catalogue or allowing Specialization to manufacture it?

### Conflict 4: High-Order Rating

Does a rated high-order Lens represent:

- connection;
- permission;
- authority;
- concentration;
- coherence;
- magnitude;
- a multiplier;
- some controlled combination?

### Conflict 5: Attribute Collision

How does the engine prevent a high-order Lens from merely repeating an
Attribute or Attribute Expression?

### Conflict 6: Effect Above 100

Does Overflow or another procedure preserve meaningful excess capability?

---

## Immediate Test Program

Status:

```text
ACTIVE
```

### Test 1: Permission Boundary

Build:

- an ordinary trained guard;
- a character with extraordinary regeneration;
- a character with extraordinary toughness;
- a character with impossible strength.

Use the same shared grammar.

Identify exactly where qualitative permission enters.

### Test 2: Strength and Might

Compare:

- Strength as an Attribute Expression;
- Strength as a rated high-order Lens;
- extraordinary strength through Classification and Scale;
- extraordinary strength through another unnamed permission-bearing Lens.

Reject any model that counts the same contribution twice.

### Test 3: Rated High-Order Models

Build the same neutral characters under Models A, B, and C.

Compare:

- Base Expression values;
- coherence;
- construction speed;
- table speed;
- permission clarity;
- counterplay;
- optimization abuse;
- Attribute duplication.

### Test 4: Fire and Ice

Give two characters identical numerical investment.

Test whether fictional identity creates different permissions, applicability,
constraints, vulnerabilities, and counters without separate subsystems.

### Test 5: Two Aquatic Characters

Build one character emphasizing internal physical and movement expressions.

Build another emphasizing awareness and external control.

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
