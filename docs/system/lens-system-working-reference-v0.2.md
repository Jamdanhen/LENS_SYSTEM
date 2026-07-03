# LENS System Working Reference

Version: 0.2
Status: Working reference, not final rules
Date: 2026-06-30
Source: LENS extraction map, MOTURPG working mechanics doctrine, Resonance / Dissonance documents, Scale waypoints, math test waypoints, and current design discussion

---

## Purpose

This document consolidates the current working state of the LENS system as a separate system reference.

It is intended to preserve:

* what LENS currently means
* what is locked
* what is only working doctrine
* what remains unresolved
* why the current decisions exist
* which ideas belong to the generic LENS engine
* which ideas should remain setting-facing or MOTURPG-specific

This is not a finished rulebook.

This is not final math.

This is not a public title clearance document.

This is the current internal reference for continued design and testing.

---

## Name and Acronym

Current internal name:

```text
LENS
```

Current best internal acronym expansion:

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

The naming branch identifies "Layered Expression Narrative System" as the best direct acronym fit because it describes the actual architecture:

* Layered: capability is built through progressive layers.
* Expression: action is treated as focused expression of a source.
* Narrative: fictional identity and situation determine which Lenses apply.
* System: the goal is a reusable rules engine.

Important caution:

"Lens System" and "LENS" are useful internal labels, but they may be weak public marks because they are descriptive and likely crowded. Publication naming remains unresolved.

Current publication-facing recommendation remains:

```text
Use LENS internally.
Do not assume LENS is the final public product title.
```

---

## Status Categories Used in This Document

```text
LOCKED
Current baseline unless deliberately reopened.

WORKING LOCK
Accepted for current testing, but still subject to revision.

HIGH-CONFIDENCE WORKING DOCTRINE
Conceptually strong and repeatedly reinforced, but not final rules text.

WORKING CANDIDATE
Current best option among tested alternatives.

OPTIONAL MODULE
Useful subsystem that should not be required by the core engine yet.

SETTING-FACING
Implemented differently by each setting.

UNRESOLVED
Not decided.
```

---

## Core Design Architecture

Status:

```text
LOCKED
```

The project separates into three layers:

```text
Design Doctrine
Engine / Mechanics
Setting Implementation
```

Doctrine defines the philosophy.

Mechanics define how the engine operates.

Settings define how the engine is applied.

Rules:

* The mechanics should not override the doctrine unless repeated testing proves the doctrine insufficient.
* Settings should not require changes to the engine unless intentionally extending it.
* MOTURPG-specific cosmology, Grayskull, the Power Sword, Domains, Nodes, and faction lore remain separate unless explicitly requested.

Reasoning:

This prevents the reusable LENS engine from becoming inseparable from MOTURPG. MOTURPG remains the origin and live design lab, but LENS is the extractable system.

---

## Core Thesis

Status:

```text
LOCKED
```

The central rule:

```text
Everything that changes chance, access, effect, cost, scale, recovery, or opposition must be named as a Lens.
```

Short form:

```text
Everything that changes a roll is a Lens.
```

Reasoning:

LENS is not intended to be a stat-plus-bonus system. It uses one mechanical language for difficulty, equipment, harm, skill, setting permissions, environmental pressure, magic, artifacts, and opposition.

Before creating a new subsystem, ask:

```text
Can this simply be another Lens?
```

If yes, do not create another subsystem.

---


## Waypoint: Unified Narrative-Mechanical Grammar

Status:

```text
HIGH-CONFIDENCE WORKING DOCTRINE
WAYPOINT ADDED 2026-06-30
```

Current core insight:

```text
LENS resolves actions by making the relevant truths of the scene mechanically visible.
```

Alternate table-facing phrasing:

```text
The rules do not add narrative on top of play.
They help the table identify which parts of the narrative are already carrying force.
```

Operational doctrine:

```text
A Lens is not a bonus.
A Lens is a piece of reality becoming relevant.
```

This is the current strongest distinction between LENS and a generic modifier system.

The table loop:

```text
1. Name what matters.
2. Agree why it matters.
3. Express it as Resonance, Dissonance, Scale, Difficulty, Opposition, or consequence.
4. Resolve through the same mechanical grammar.
5. Let the outcome create the next piece of fiction.
```

Reasoning:

The He-Man meteor example and later Scale/Opposition tests showed that the system becomes strongest when the rules discover what the declared action means rather than when they add a separate narrative layer after the roll.

Example:

```text
He-Man uses Strength to stop a meteor.

Strength makes the attempt possible.
Protection makes the attempt true.
Meteor Impact Dissonance makes the scene matter.
```

The player is not rewarded for arguing for a random bonus.
The player is rewarded for identifying a deeper relevant Lens already present in the action.

---

## One-System Principle

Status:

```text
LOCKED
```

LENS intentionally contains one mechanical engine.

The engine should not create independent subsystems for:

* combat
* damage
* equipment
* difficulty
* magic
* conditions
* social interaction
* vehicles
* environmental effects
* recovery
* infrastructure

Each of these should resolve through Lens architecture whenever reasonably possible.

Reasoning:

This supports a learn-once rules structure. The player does not need separate logic for combat, hazards, social pressure, vehicles, and magic if each is expressed as Resonance, Dissonance, Scale, Difficulty, permission, opposition, or recovery.

---


## One Ruleset, Many Fictional Domains

Status:

```text
HIGH-CONFIDENCE WORKING DOCTRINE
WAYPOINT ADDED 2026-06-30
```

Current doctrine:

```text
The game should not become a collection of subsystems.
It should become a shared language for identifying relevant fictional force.
```

The same rules grammar should cover:

* ordinary human tasks
* heroic feats
* monster clashes
* summoned countermeasures
* environmental hazards
* social pressure
* divine-scale contests
* artifacts
* domains
* infrastructure
* resonance and dissonance

Reasoning:

This preserves the "one system to learn" goal.

Fictional complexity should arise from the Lenses in play, not from separate procedures for each content type.

Example:

```text
Dragon breath is not a breath-weapon subsystem.
Summoned protection is not a summoning subsystem.
Volcanic terrain is not an environment subsystem.

Each is a Lens or opposition force entering the same expression.
```

---

## Character Source Principle

Status:

```text
LOCKED
```

The Character is the source of action.

Attributes are not the source.

Attributes are the first stable conceptual Lenses through which the Character's potential is organized.

Conceptual model:

```text
Character
↓
Attribute
↓
Progressively Narrowing Lenses
↓
Expression
```

Reasoning:

This preserves the optics metaphor. Lenses do not create potential from nothing. They shape, narrow, clarify, redirect, and magnify existing potential into usable expression.

---

## Optics Metaphor

Status:

```text
HIGH-CONFIDENCE WORKING DOCTRINE
```

The system repeatedly returns to optics language:

* source
* lens
* focus
* expression
* clarity
* distortion
* broad
* narrow
* filter
* perspective
* resistance

The guiding image:

```text
Character = source
Attribute = first broad focus
Later Lenses = progressively narrower focus
Expression = focused beam of action
```

Resonance is the beam becoming clearer and more coherent.

Dissonance is the beam being resisted, distorted, scattered, or blocked.

Boundary:

```text
Do not over-literalize optics.
```

Avoid introducing technical optics terms such as convex, concave, focal length, or refractive index unless they become genuine mechanics.

Reasoning:

The metaphor is useful because it explains the system intuitively. It becomes harmful if it turns into unnecessary pseudo-physics.

---

## Core Vocabulary

Status:

```text
WORKING LOCK
```

```text
Lens
Any mechanical factor that focuses, clarifies, distorts, restricts, grants, denies, expands, or resists an action.

Expression
What the character is trying to do or express.

Expression Rating
The table-facing base number before current situational Lenses are applied.

Final Expression / Final Rating
The roll-facing value after current Lenses are applied.

Resonance
A Lens that improves focus or effective capability.

Dissonance
A Lens that interferes with focus or effective capability.

Load
Accumulated interference that limits options.

Classification
The permission space of a being.

Scale
The magnitude or natural scope at which available expressions may operate.

Difficulty
Resistance to the attempted expression.

Infrastructure
Persistent source, route, storehouse, denial point, or support structure for Lenses.
```

Reasoning:

The player-facing language should remain simple:

```text
This Lens helps.
This Lens hurts.
This Lens gives access.
This Lens blocks access.
This Lens changes scope.
```

The engine translates that into math.

---

## Design Layer vs. Table Layer

Status:

```text
LOCKED
```

Character construction can be deep.

Ordinary rolls must stay fast.

Construction-facing layer:

```text
Attribute
× Stable Lens
× Stable Lens
× Stable Lens
= Expression Rating
```

Table-facing layer:

```text
Expression Rating
× Active Resonance / Dissonance
× Difficulty
× Opposition
= Final Rating
```

Reasoning:

The table should not rebuild the full stable Lens stack every roll. The sheet may contain the full logic; play uses a precomputed Expression Rating and applies only current Lenses.

---

## Base Expression Architecture

Status:

```text
WORKING LOCK
PENDING MATHEMATICAL VALIDATION
```

Current Base Expression stack:

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

Each layer answers a different question.

```text
Character
Who is the local source of action?

Classification
What kind of being is this?

Attribute
How much broad potential does this being possess?

Scale
At what magnitude or natural scope is this Attribute expressed?

Attribute Expression
How does this Attribute generally manifest?

Skill
What has this character learned to do?

Specialization
What specific aspect has been mastered?
```

Reasoning:

No layer should exist only to satisfy math. The math exposed missing conceptual questions; the architecture supplied the answers.

---

## Classification

Status:

```text
LOCKED AS CURRENT WORKING DOCTRINE
SETTING-FACING
```

Classification defines the permission space of a being.

Classification answers:

```text
What kinds of abilities, expressions, and identities are possible for this being?
```

Classification may define:

* available Attribute Expressions
* available Skills
* available Specializations
* innate permissions
* natural capabilities
* default limitations
* natural vulnerabilities
* setting-facing identity
* available high-order Lenses

Classification does not primarily determine magnitude.

Classification determines possibility.

Examples:

```text
Human
Dragon
Construct
Spirit
Angel
Demon
Animal
Plant
Immortal
Artificial Intelligence
Energy Being
```

Reasoning:

A dragon does not fly because it has a high Scale. It flies because Dragon classification permits flight. Scale determines the magnitude at which that permission may operate.

---

## Scale

Status:

```text
LOCKED DOCTRINE
MATH STILL UNDER TEST
```

Scale defines the natural scope or magnitude at which available expressions may operate.

Scale answers:

```text
At what scope may the available expressions naturally operate?
```

Scale does not grant abilities.

Scale does not determine what a being is.

Scale determines how far available expressions can naturally go.

Current concise rule:

```text
Scale is primarily a setting-facing and GM-facing magnitude Lens.
During ordinary play, a character's Scale is usually stable.
Scale changes only when the fiction changes the magnitude of what the character is, channels, controls, confronts, or operates through.
```

Reasoning:

This separates ordinary advancement from magnitude. A character does not usually change Scale because they gained a little experience. Scale changes when their natural scope of expression changes or when they operate through a higher-order Lens.

---


## Scale Waypoint: Order of Being

Status:

```text
LOCKED DOCTRINE
WAYPOINT ADDED 2026-06-30
LOCKED 2026-07-01
```

Current clarification:

```text
Scale is ontological magnitude, not competence.
```

Scale represents the size, scope, order, or category of being acting through the Lens.

It is not ordinary skill growth.

Scale Rank is the mechanical magnitude value.

Scope labels such as Self, Vicinity, Region, Planet, Universe, and Existence are translation tools, not default entity assignments.

Examples used during discussion were only intuition anchors for helping the workspace understand Scale. They are not locked leverage values, level expressions, entity assignments, or setting defaults.

Reasoning:

This clarification makes the exponential Scale model behave better.

Low Scale preserves ordinary limits within the current setting frame.
Higher Scale allows larger orders of being, channel, artifact, infrastructure, or force to affect lower-order problems without becoming a substitute for skill, specialization, or relevant opposition.

Important rule:

```text
Scale should not be freely reachable through ordinary character growth.
```

Scale changes when the fiction changes what order of being, channel, domain, artifact, infrastructure, or force is acting.

---

## Classification vs. Scale

Status:

```text
LOCKED AS CURRENT WORKING DOCTRINE
```

Classification and Scale are distinct.

```text
Classification determines what is possible.
Scale determines how far it can go.
```

Classification answers:

```text
What are you?
```

Scale answers:

```text
How much of what you are can you currently express?
```

Example:

```text
Dragon Classification
Permits breath weapon, flight, claws, draconic senses, ancient memory.

Hatchling Scale
Those permissions operate at relatively low magnitude.

Ancient Scale
The same permissions operate at tremendous magnitude.
```

Reasoning:

This prevents Scale from becoming a disguised species, class, or permission system.

---

## Scale Scope Doctrine

Status:

```text
LOCKED DOCTRINE
LABELS ARE TRANSLATION TOOLS
```

Scale is scope, not power.

The Source itself is not assigned a Scale Magnitude.

Scale begins with the first measurable focused expression.

Working translation ladder:

```text
Magnitude 1  = Self
Magnitude 2  = Vicinity
Magnitude 3  = Region
Magnitude 4  = System
Magnitude 5  = Planet
Magnitude 6  = Planetary Network
Magnitude 7  = Universe
Magnitude 8  = Reality
Magnitude 9  = Reality Network
Magnitude 10 = Existence
```

Locked clarification:

These labels are translation tools, not doctrine.

They are not default entity assignments.

They are not automatic setting values.

They are not a fixed statement that Magnitude 5 must equal planet-level effect or that Magnitude 7 must equal universe-level effect in every setting.

Doctrine:

```text
Scale defines the scope at which the Source may naturally express itself.
```

Reasoning:

The labels help human discussion, but the core mechanic must work across fantasy, science fiction, superheroes, mythic action, horror, and other settings.

---

## Scale Reference Frame

Status:

```text
LOCKED DOCTRINE
ADDED 2026-07-01
```

Difficulty is evaluated within the acting Scale's natural frame of reference.

Scale does not change the meaning of the Difficulty Curve.

Scale changes what kinds of actions occupy each Difficulty band.

A Scale 1 Difficulty 5 task and a Scale 8 Difficulty 5 task may be vastly different in objective magnitude while remaining equally challenging relative to the actor's natural Scale.

Therefore:

```text
Scale defines the frame.
Difficulty defines resistance within that frame.
```

Reasoning:

This prevents Scale from being read as only a bigger multiplier applied to the same objective task ladder. Scale changes the natural frame of action. Difficulty remains the measure of resistance inside that frame.

Design consequence:

```text
Higher Scale does not mean every action is automatically trivial.
It means the character's ordinary, hard, extreme, and impossible actions are evaluated inside a larger frame of possible expression.
```

---

## Difficulty

Status:

```text
LOCKED AS DISTINCT CONCEPT
MATH LOCKED FOR CURRENT TESTING
```

Difficulty is not Scale.

Difficulty is not Classification.

Difficulty is resistance to the attempted expression.

Current doctrine:

```text
Difficulty is the natural resistance of reality against expression of the Source.
```

Another phrasing:

```text
Difficulty measures how resistant this particular attempt is.
```

Reasoning:

A high-magic world and a low-magic world may have different resistance profiles. The Source may be understood as a two-sided coin:

```text
Expression / Resistance
Resonance / Dissonance
```

Difficulty is the resistance side as it applies to a specific attempted expression.

---

## Task Baseline and Task Dissonance

Status:

```text
WORKING LOCK
```

Routine or baseline task:

```text
×1.00
```

A routine task under ordinary conditions has no Task Dissonance.

A task harder than routine creates Task Dissonance.

An unusually easy task may create Resonance, reduce the need for a roll, or simply succeed without a roll.

Core rule:

```text
Routine is neutral.
Difficulty is Dissonance.
Ease is Resonance or no roll.
```

Task Dissonance represents inherent difficulty, complexity, danger, resistance, instability, precision, scale, or time pressure in the action itself.

Condition Dissonance represents harm, pressure, environmental interference, opposition, distortion, or other active complication affecting the action.

Both are Dissonance Lenses and combine into total Dissonance before the roll if both matter.

Reasoning:

Difficulty should not be an untyped modifier. If task difficulty changes the roll, it must be named as a Dissonance Lens.

---

## Counter-Lens Doctrine

Status:

```text
WORKING DOCTRINE
ADDED 2026-07-01
```

Scene conditions are objective.

The scene receives one Environmental Resonance or Dissonance value.

Characters do not recalculate the environment individually.

Instead, characters answer the scene through their own Lenses.

Example:

```text
Scene:
Environmental Dissonance 4

Applies to everyone.
```

A dwarf with Night Vision does not reduce the scene's Environmental Dissonance.

Instead, the dwarf gains a Night Vision Resonance appropriate to the fiction.

Final expression becomes:

```text
Expression
× Positive Lenses
÷ Environmental Dissonance
```

The environment remains objectively difficult.

The character is simply better equipped to overcome it.

Result:

```text
No category-specific recalculation.
No hidden subtraction.
No cancellation bookkeeping.
```

The scene remains consistent for every participant.

Characters differ because of their own Lenses, not because the world changes around them.

Reasoning:

This prevents environmental rules from becoming a list of exceptions. Darkness, rain, smoke, unstable ground, hostile magic, crowd pressure, and similar scene conditions can be assigned once at the scene level. Characters then respond through relevant Resonance, protection, equipment, training, Classification permission, Scale, or other Lenses.

Design consequence:

```text
The environment does not become easier for one character.
One character may simply have better Lenses for acting within it.
```

---

## Current Resolution Formula

Status:

```text
LOCKED FOR CURRENT TESTING
```

Current working formula:

```text
Final Expression =
Human Capability
× Scale Modifier
× Difficulty Multiplier
× Other Lenses
```

Current active math tests have only used:

```text
Human Capability
× Scale Modifier
× Difficulty Multiplier
```

Other Lenses are acknowledged but not yet included in the current math tests.

Generic future formula:

```text
Base Expression
× Scale Modifier
× Difficulty Multiplier
× Resonance Lenses
× Dissonance Lenses
× Opposition
= Final Rating
```

Reasoning:

The active test intentionally isolates variables. Other Lenses must be tested only after the core interaction among capability, Scale, and Difficulty is understood.

---

## Rounding Rule

Status:

```text
LOCKED FOR CURRENT TESTING
```

All calculations retain full decimal precision until the final result.

Only the final displayed result is rounded down.

Examples:

```text
98.784 becomes 98
21.168 becomes 21
0.987 becomes 0
```

No intermediate rounding is used.

Reasoning:

Rounding only at the end prevents accumulated distortion across chained multipliers.

Rounding down preserves hard boundaries. A value has not reached 1 unless the full calculation actually reaches at least 1.000.

---

## Current Difficulty Curve

Status:

```text
LOCKED FOR CURRENT TESTING
NOT FINAL SYSTEM-LOCKED
```

Difficulty 1 starts at:

```text
98%
```

Each additional Difficulty Rank is multiplied by:

```text
×0.6
```

Full-precision values:

```text
Difficulty 1  = 98
Difficulty 2  = 58.8
Difficulty 3  = 35.28
Difficulty 4  = 21.168
Difficulty 5  = 12.7008
Difficulty 6  = 7.62048
Difficulty 7  = 4.572288
Difficulty 8  = 2.7433728
Difficulty 9  = 1.64602368
Difficulty 10 = 0.987614208
```

Displayed rounded-down values:

```text
Difficulty 1  = 98
Difficulty 2  = 58
Difficulty 3  = 35
Difficulty 4  = 21
Difficulty 5  = 12
Difficulty 6  = 7
Difficulty 7  = 4
Difficulty 8  = 2
Difficulty 9  = 1
Difficulty 10 = 0
```

Reasoning:

This curve creates smooth decline rather than a decimal cliff. Difficulty 10 remains impossible for an unmodified Scale 1 max human because the final value floors to 0. That is acceptable in the current test because Difficulty 10 is not meant to be reachable by raw human capability alone.

---

## Percentile Edge Rules

Status:

```text
WORKING DRAFT
```

Purpose:

These rules define the universal edge cases of the percentile resolution system.

They exist outside the normal Difficulty Scale and preserve both certainty and uncertainty within the system.

### Automatic

An Automatic action succeeds without a roll.

Requirements:

* No meaningful resistance.
* No meaningful uncertainty.
* No meaningful consequence for failure.
* Success is effectively guaranteed.

Examples:

* Walking across a room.
* Opening an unlocked door.
* Speaking normally.
* Lifting an object well within your capability.

Mechanical result:

```text
No roll.
Automatic Success.
```

### Trivial

A Trivial action technically has the possibility of failure, but the chance is so small that rolling does not improve play.

Requirements:

* Negligible resistance.
* Failure would add little or no value to the scene.
* The outcome is overwhelmingly expected.

Examples:

* An expert climbing a short ladder.
* A master blacksmith driving a common nail.
* He-Man lifting an ordinary crate.
* Man-At-Arms repairing routine equipment in his workshop.

Mechanical result:

```text
Normally no roll.
```

The GM may require a roll only if:

* Time pressure exists.
* Opposition exists.
* Consequences exist.
* Narrative tension exists.
* Another mechanic specifically requires a roll.

If a roll is required despite being Trivial:

```text
Use Difficulty 1 (98%).
```

### Difficulty Scale Boundary

```text
Automatic = No roll.
Trivial   = Normally no roll.

Difficulty 1 = 98%
Difficulty 2 = 58%
Difficulty 3 = 35%
...
Difficulty 10
```

Difficulty 1 represents the easiest task still worthy of a roll.

### Percentile Edge Results

Natural 99:

```text
Automatic Failure.
```

This applies regardless of Final Resonance.

Natural 00 (100):

```text
Automatic Failure with Complication.
```

The GM introduces a meaningful Complication.

The Complication should arise naturally from the attempted expression and move the fiction forward.

Examples:

* Equipment damaged.
* Temporary Dissonance.
* New opposition.
* Lost opportunity.
* Position worsens.
* Resource consumed.
* Environmental change.

00 should never simply mean "nothing happens."

It should make the situation more interesting.

Edge case:

```text
If there is no meaningful consequence available,
00 is treated as an ordinary failure.
```

### Design Principles

```text
Automatic = No uncertainty.
Trivial   = Minimal uncertainty. Usually no roll.

Difficulty 1 = The easiest task still worth rolling.

99 = Automatic Failure.
00 = Automatic Failure with Complication.
```

The Difficulty Scale intentionally begins at 98% to preserve the universal uncertainty represented by 99 and 00 while allowing exceptional capability to improve effect, not certainty.

---

## Rejected or Demoted Difficulty Curve

Status:

```text
DEMOTED FROM ORDINARY TASK DIFFICULTY
POSSIBLE DEEP RESISTANCE MODULE
```

Factor-of-10 curve:

```text
D1  = ×10
D2  = ×1
D3  = ×0.1
D4  = ×0.01
D5  = ×0.001
D6  = ×0.0001
D7  = ×0.00001
D8  = ×0.000001
D9  = ×0.0000001
D10 = ×0.00000001
```

Current assessment:

```text
Not viable as the ordinary task scale.
Possibly useful as objective reality resistance, cosmic resistance, magnitude mismatch, or deep impossibility.
```

Reasoning:

The curve behaves less like easy-to-hard difficulty and more like orders of reality. It may still be useful when the fiction is about breaking reality boundaries, but it is too brutal for normal play.

---

## Human Capability Values

Status:

```text
LOCKED FOR CURRENT TESTING
```

Current human capability values use specialized expression tiers:

```text
Common Specialized = 16.875
Elite Specialized  = 46.656
Peak Specialized   = 61.731
Max Specialized    = 80
```

Construction logic:

```text
Attribute
× Attribute Expression
× Skill
× Specialization
= Human Capability
```

Current component scale:

```text
Attribute: 1 to 10

Attribute Expression:
Rank 0 = ×1.0
Rank 1 = ×1.1
Rank 2 = ×1.2
...
Rank 10 = ×2.0

Skill:
Rank 0 = ×1.0
Rank 1 = ×1.1
...
Rank 10 = ×2.0

Specialization:
Rank 0 = ×1.0
Rank 1 = ×1.1
...
Rank 10 = ×2.0
```

Example:

```text
Max Specialized
10 × 2.0 × 2.0 × 2.0 = 80
```

Reasoning:

These values represent specialized human expression, not raw attribute alone. Max Specialized = 80 is the current upper bound for ordinary human expression before Scale, Resonance, Artifacts, Infrastructure, Domains, or other Lenses are applied.

---

## Current Scale Entry Rule

Status:

```text
LOCKED FOR CURRENT TESTING
LOCKED 2026-07-01
```

Scale Magnitude 1 is always:

```text
×1
```

Scale Magnitude 1 is the baseline expression state.

Scale does not automatically amplify a being simply for existing.

Growth begins after Magnitude 1.

Reasoning:

This prevents Scale 1 from granting an automatic boost and makes higher Magnitudes represent expanded natural scope.

---

## Scale Models Tested

Status:

```text
TEST RECORD
```

Exponential ×2:

```text
M1  = ×1
M2  = ×2
M3  = ×4
M4  = ×8
M5  = ×16
M6  = ×32
M7  = ×64
M8  = ×128
M9  = ×256
M10 = ×512
```

Assessment:

Too aggressive across the full 1-10 range when applied directly as a success multiplier.

Linear +2:

```text
M1  = ×1
M2  = ×3
M3  = ×5
M4  = ×7
M5  = ×9
M6  = ×11
M7  = ×13
M8  = ×15
M9  = ×17
M10 = ×19
```

Assessment:

Readable and stable, but may be too flat for mythic or cosmological Scale expression.

Linear Magnitude:

```text
M1  = ×1
M2  = ×2
M3  = ×3
M4  = ×4
M5  = ×5
M6  = ×6
M7  = ×7
M8  = ×8
M9  = ×9
M10 = ×10
```

Assessment:

Very stable, likely too flat for major jumps in natural scope.

Linear +1.5:

```text
M1  = ×1.0
M2  = ×2.5
M3  = ×4.0
M4  = ×5.5
M5  = ×7.0
M6  = ×8.5
M7  = ×10.0
M8  = ×11.5
M9  = ×13.0
M10 = ×14.5
```

Assessment:

Smooth, but likely too flat for upper Magnitudes.

Exponential ×1.75:

```text
M1  = ×1.000000
M2  = ×1.750000
M3  = ×3.062500
M4  = ×5.359375
M5  = ×9.378906
M6  = ×16.413086
M7  = ×28.722900
M8  = ×50.265076
M9  = ×87.963882
M10 = ×153.936794
```

Assessment:

Worth testing, but much stronger than intuition suggests. The added 0.25 over ×1.5 compounds heavily.

---

## Current Leading Scale Model

Status:

```text
LOCKED FOR CURRENT TESTING
WORKING LEAD CANDIDATE
UPDATED 2026-06-30
LOCKED FOR NEXT TEST PHASE 2026-07-01
```

Current leading candidate:

```text
Exponential ×1.6
```

Lock boundary:

```text
Exponential ×1.6 is locked as the active Scale model for the next development phase.
It is not final-locked as the permanent Scale progression.
```

Values:

```text
M1  = ×1.000000
M2  = ×1.600000
M3  = ×2.560000
M4  = ×4.096000
M5  = ×6.553600
M6  = ×10.485760
M7  = ×16.777216
M8  = ×26.843546
M9  = ×42.949673
M10 = ×68.719477
```

Reasoning:

Exponential ×1.6 became the current leading Scale candidate after the Scale concept was clarified as order of being / ontological magnitude rather than competence.

It appears to balance:

* ordinary Scale 1 human limits
* meaningful low-to-mid Scale lift
* stronger high-Scale expression
* continued relevance of high Difficulty bands
* opposed contests where lower-Scale but highly specialized opposition can still matter

Important boundary:

```text
Scale is not ordinary advancement.
Scale is entity magnitude, channel magnitude, domain magnitude, artifact magnitude, or infrastructure magnitude.
```

Earlier candidate:

```text
Exponential ×1.5
```

Status:

```text
DEMOTED FROM LEADING CANDIDATE
Still viable as a conservative fallback if ×1.6 later proves too hot.
```

Earlier concern:

```text
Exponential ×1.75
```

Status:

```text
WATCHLIST ONLY
Likely too aggressive unless future tests require stronger upper-scale acceleration.
```

Test record note:

```text
The detailed Exponential ×1.6 test record has been created as:

docs/system/lens-scale-x1.6-test-record-v0.1.md
```

---

## Reproduction Procedure for Current Math Tests

Status:

```text
LOCKED FOR CURRENT TESTING
```

Procedure:

```text
1. Select a Human Capability value.

2. Select a Scale model.

3. Select a Scale Magnitude.

4. Select a Difficulty Rank.

5. Multiply:

Human Capability
× Scale Modifier
× Difficulty Multiplier

6. Carry all decimals through the full calculation.

7. Round down only the final displayed result.
```

Example:

```text
Max Specialized = 80
Scale Magnitude 5 under ×1.5 = ×5.0625
Difficulty 4 = 21.168%

80 × 5.0625 × 0.21168 = 85.725

Displayed result = 85
```

Reasoning:

This preserves repeatability and prevents conversation drift from corrupting later tests.

---

## Core Resolution Procedure

Status:

```text
WORKING LOCK
```

Current reusable procedure:

```text
1. Declare action.
2. Choose Expression.
3. Check whether the Expression is Available, Strained, or Suppressed if Load applies.
4. Identify applicable Resonance Lenses.
5. Identify applicable Dissonance Lenses.
6. Identify Difficulty as resistance to this attempt.
7. Identify opposition as active or passive.
8. Calculate Final Rating.
9. Roll.
10. Resolve success or failure.
11. If harmed or pressured, impose Dissonance and update Load.
```

Roll model:

```text
Roll under or equal to Final Rating = success.
Roll over Final Rating = failure.
```

Reasoning:

This is portable and table-readable. The percentile chassis remains current, though the extraction map notes that future dice engines could be tested.

---

## Active vs. Passive Opposition

Status:

```text
LOCKED AS EXTRACTABLE STRUCTURE
```

```text
Active opposition = Expression vs. Expression
Passive opposition = Expression vs. Dissonance
```

Active opposition examples:

* fighter vs. fighter
* hacker vs. security operator
* sorcerer vs. warder
* commander vs. rebel leader
* pilot vs. ace pilot

Passive opposition examples:

* locked system
* poison
* storm
* broken tool
* corrupted environment
* time pressure
* injury
* poor visibility

Reasoning:

This avoids treating every challenge as an attacker/defender model while preserving meaningful opposition.

---

## Resonance Pool and Dissonance Pool

Status:

```text
WORKING LOCK
```

One Resonance and one Dissonance proved too limiting if read as only one advantage and one disadvantage.

Current roll budget:

```text
One Expression Rating
One total Resonance modifier
One total Dissonance modifier
One opposition value
```

Resonance Pool:

All relevant advantages, aids, preparations, tools, positions, alignments, and favorable conditions are counted as Resonance Lenses.

The table combines them into one total Resonance modifier before the roll.

Dissonance Pool:

All relevant disadvantages, harms, pressures, obstacles, distortions, limits, hostile conditions, and task resistance are counted as Dissonance Lenses.

The table combines them into one total Dissonance modifier before the roll.

Reasoning:

The final expression should remain clean, but multiple fictional factors may legitimately contribute. The pool model preserves one final modifier without denying the existence of multiple relevant Lenses.

---


## Resonance and Dissonance Waypoint

Status:

```text
HIGH-CONFIDENCE WORKING DOCTRINE
WAYPOINT ADDED 2026-06-30
```

Current concise definitions:

```text
Resonance:
The world agrees with what is being expressed.

Dissonance:
The world argues with what is being expressed.
```

Alternate phrasing:

```text
Resonance is when a Lens finds agreement in the scene.
Dissonance is when a Lens meets contradiction in the scene.
```

Examples:

```text
Frost giant in an ice palace:
Frost Nature and Ice Palace agree.

Frost giant in a volcanic dragon chamber:
Frost Nature meets Volcanic Chamber Dissonance.

Solar hero closer to the sun:
Solar nature resonates.

Human fighting in darkness:
Human sight may meet Darkness Dissonance unless another Lens answers it.
```

Reasoning:

Resonance and Dissonance are not merely bonuses and penalties.
They are context becoming mechanically real.

Relevant Resonance may add, strengthen, clarify, unlock, or align Lenses.
Relevant Dissonance may oppose, reduce, tax, distort, or suppress Lenses.

---

## Dissonance Requirements

Status:

```text
WORKING LOCK
```

A Dissonance type must say:

* what kind of actions it pressures
* how it can be imposed
* how it can be reduced
* what it means fictionally at high Load

Reasoning:

This prevents Dissonance from becoming a generic penalty. A Dissonance must tell the table what is happening and how play can respond.

---

## Damage as Dissonance

Status:

```text
HIGH-CONFIDENCE WORKING DOCTRINE
```

Core rule:

```text
Hit = win the exchange.
Damage = impose Dissonance.
```

Damage does not have to mean bodily harm.

Damage may mean:

* wounded
* restrained
* weakened
* limited
* sickened
* confused
* exposed
* compromised
* isolated
* corrupted
* destabilized

Reasoning:

The system does not need hit points as a separate default subsystem. Harm is interference with the ability to express capability.

---

## Universal Load

Status:

```text
OPTIONAL / WORKING MODULE
```

Core rule:

```text
Dissonance contributes to one accumulated Load value.
Load suppresses weaker Expressions first.
Composition records what kind of interference created the Load.
```

Example:

```text
Load 7
Composition:
Restrained 4
Wounded 2
Confused 1
```

Load answers:

```text
How suppressed is the character?
```

Composition answers:

```text
What kind of action can recover them?
```

Reasoning:

Universal Load keeps pressure unified while still preserving fictional specificity through composition.

---

## Relevant Dissonance Rule

Status:

```text
HIGH-CONFIDENCE WORKING DOCTRINE
```

Core rule:

```text
Only the most relevant current Dissonance applies directly as roll pressure unless the pool model is being used for a combined total.
All imposed Dissonance contributes to Load and composition.
```

Reasoning:

This separates three jobs:

```text
Relevant Dissonance = roll pressure
Load = accumulated suppression
Composition = recovery map
```

It prevents every problem from multiplying every roll while preserving accumulated harm.

Note:

The current pool language should be reconciled with this rule during future drafting. The likely solution is:

```text
Combine relevant Dissonance Lenses into one total Dissonance modifier.
Do not automatically include unrelated Dissonances merely because they exist.
```

---

## Expression Access Under Load

Status:

```text
WORKING LOCK
```

Current access rule:

```text
Expression Rating > Load = Available
Expression Rating = Load = Strained
Expression Rating < Load = Suppressed
```

Available:

Can be used normally.

Strained:

Can be used, but cannot generate Overflow and always risks cost on failure.

Suppressed:

Cannot be used as a primary action or supporting Lens until Load is reduced or the fiction changes.

Reasoning:

Load should not simply make every roll worse. It should reduce available options, suppressing weaker Expressions before stronger identity-defining Expressions.

---

## Recovery

Status:

```text
WORKING LOCK
```

Core rule:

```text
Recovery applies a counter-Lens to a matching Dissonance.
```

Recovery is not generic healing by default.

Recovery must address a Dissonance type.

Examples:

```text
Restrained -> strength, escape, cutting tool, fire, ally aid
Wounded -> healing, endurance, armor repair, medicine
Limited -> repair, restore route, recover tool, gain information
Sickened -> antidote, purification, cleansing, leaving toxic zone
Weakened -> rest, rally, courage, power source, support
```

Reasoning:

This keeps recovery inside the same Lens structure. The question is not "how many hit points return?" but "what interference is being countered?"

---

## Overflow

Status:

```text
OPTIONAL ADVANCED MODULE
UNDER ACTIVE RECONSIDERATION
WAYPOINT UPDATED 2026-06-30
```

Default unresolved question:

```text
Should Overflow remain optional, or is it required for opposed contests where degree of success matters?
```

Earlier default:

```text
Roll under Final Rating to succeed.
Final Rating caps at 100.
Ratings above 100 do not matter unless the Overflow module is active.
```

Current waypoint:

```text
Overflow should not be treated only as automatic success.
Overflow may preserve degree of effect, but its exact role has not been decided.
```

Shelved possibility:

```text
Overflow might preserve raw force for opposed contests and degree of success.
```

Possible opposed-contest experiment:

```text
Margin = Acting Final Rating - Opposing Final Rating
```

Status:

```text
NOT LOCKED
SHELVED AS A POSSIBLE TEST MODEL
DO NOT TREAT AS CURRENT PROCEDURE
```

Example:

```text
Dragon firebreath = 513
Knight defense    = 78
Margin            = 435
```

This should not merely mean "the dragon succeeds."
It should describe the degree of fictional consequence.

Possible margin interpretation:

```text
1-24     = narrow edge
25-74    = clear win
75-99    = decisive win
100+     = overwhelming win
250+     = scale-defining win
500+     = mythic or catastrophic mismatch
```

Status note:

This margin ladder is not locked.
It is a possible future test, not current doctrine.

Important consequence:

```text
Overflow remains unresolved.
```

Potential Overflow uses:

* effect size
* scope
* speed
* cost resistance
* collateral
* scene change
* recovery pressure
* dominance in opposed contests

Strained actions still cannot generate Overflow unless this is deliberately reopened.

---

## Infrastructure

Status:

```text
OPTIONAL SETTING-FACING FEATURE
```

Infrastructure means any persistent source, route, storehouse, or denial point for Lenses.

Examples by setting:

* sacred site
* military base
* server network
* faction stronghold
* ancestral oath
* artifact system
* political legitimacy
* ship system
* magical leyline
* supply chain
* temple
* territory
* ecosystem

Infrastructure can:

* grant Resonance
* impose Dissonance
* deny access
* store or route power
* stabilize recovery
* make final defeat harder

Infrastructure should be named by the setting.

Another setting may call it:

```text
networks
sanctums
strongholds
relays
roots
anchors
holdings
nexus sites
```

Core rule:

```text
Location alone is not enough.
A character needs usable access, alignment, control, permission, repair, or routing to benefit from Infrastructure.
```

Reasoning:

This extracts the reusable structure from MOTURPG Nodes without importing MOTURPG-specific metaphysics.

---

## Settings as Implementations

Status:

```text
LOCKED
```

LENS remains generic.

Settings occupy standardized Lens positions.

Examples:

```text
Fantasy
Character
↓
Attributes
↓
Magic Tradition

Cyberpunk
Character
↓
Attributes
↓
Cybernetics

Superheroes
Character
↓
Attributes
↓
Power Origin
↓
Power Expression

MOTURPG
Character
↓
Attributes
↓
Common Lenses
↓
Domain
↓
Expressions
```

Reasoning:

The setting changes the vocabulary, permissions, resistance profile, and example Lenses. The engine does not need to change.

---

## Domain Reclassification

Status:

```text
LOCKED FOR GENERIC LENS EXTRACTION
```

Domain is not a universal engine mechanic.

Domain is MOTURPG's implementation of a universal high-order Lens slot.

Other settings may replace that slot with:

* mutation
* psionics
* bloodline
* divine gift
* radiation
* magic
* cybernetics
* power origin
* tradition
* oath

Reasoning:

This preserves MOTURPG while allowing LENS to remain multi-genre.

---

## Player Transparency Goal

Status:

```text
LOCKED
```

Players should understand:

```text
Which Lenses apply.
```

Players should not need to understand:

```text
The underlying mathematics.
```

Ideal player thought process:

```text
This Lens helps.
This Lens hurts.
This is the Lens I want to apply.
```

Reasoning:

The system can be mathematically rigorous without requiring players to perform complex calculations during play.

---

## GM Interface Principle

Status:

```text
LOCKED
```

The GM does not interact with the system by creating exceptions.

The GM interacts with the system by:

* inserting Lenses
* removing Lenses
* strengthening Lenses
* weakening Lenses
* repositioning Lenses

Changing where a Lens exists changes its scope.

```text
High-order Lens -> changes campaign
Mid-order Lens -> changes character nature
Low-order Lens -> changes expressions
Active Lens -> changes current action
```

Reasoning:

The engine remains stable while the GM changes the Lens environment.

---

## Scale Continuity Principle

Status:

```text
HIGH-CONFIDENCE WORKING DOCTRINE
```

Lenses exist at every scale, not only character scale.

Possible hierarchy:

```text
Source of Being
↓
Creation / Nonexistence
↓
Existence
↓
Cosmic Lenses
↓
Planes / Worlds / Dimensions
↓
Species / Nature
↓
Character
↓
Attributes
↓
Expressions
↓
Actions
```

The Character remains the local source of action.

The Character itself may be an Expression of higher-order Lenses.

Reasoning:

This extends the Lens language to cosmology, setting design, adventure design, character creation, and moment-to-moment resolution without requiring different conceptual systems.

---

## Concession and Major Defeat

Status:

```text
OPTIONAL / CAMPAIGN MODULE
HIGH-CONFIDENCE FOR MAJOR CHARACTERS
```

Generic rule:

```text
A major character whose primary Expression can no longer win may still use it once as a Concession Expression.
```

Concession may:

* enable escape
* prevent death
* protect one final thing
* preserve an artifact or resource
* retreat to infrastructure
* remove the character from the scene
* convert defeat into future complication

Concession may not reverse defeat into victory.

Core sentence:

```text
Concession is not a comeback.
Concession is an exit.
```

Reasoning:

This allows major characters to lose without every defeat requiring death or total erasure.

---

## Final Defeat and Recovery Infrastructure

Status:

```text
OPTIONAL CAMPAIGN MODULE
```

Generic rule:

```text
Final defeat requires severing recovery infrastructure.
```

Recovery infrastructure may include:

* home base
* faction network
* artifact channel
* political legitimacy
* server access
* ritual structure
* social identity
* territory
* supply chain
* backup body
* oath
* lineage
* memory anchor

Reasoning:

Winning a fight creates a window. Ending a threat requires dismantling the network that allows recovery, return, or continued influence.

---

## What Remains MOTURPG-Specific

Status:

```text
SETTING-SPECIFIC
DO NOT EXTRACT AS GENERIC LENS DEFAULT
```

Do not make these generic LENS assumptions:

* Power as MOTURPG primordial source
* Creation vs. Entropy cosmology
* Good / Balance / Evil as MOTURPG cosmological Lenses
* Domains as MOTURPG metaphysical influence layer
* Castle Grayskull
* Power Sword
* Snake Mountain
* Point Dread
* Heroic Warriors
* Masters of Evil
* MOTURPG faction structures
* MOTURPG artifact identities
* MOTURPG character examples

Reasoning:

These may inspire examples, but they should not become default LENS rules.

---

## Current Strong Extraction Candidates

Status:

```text
HIGH CONFIDENCE
```

Strongly extractable:

* Everything that changes a roll is a Lens.
* Character is the local source of action.
* Attributes are first broad focusing layers.
* Stable Lenses create table-facing Expression Ratings.
* Active Lenses modify Expression Ratings during play.
* Active opposition is Expression vs. Expression.
* Passive opposition is Expression vs. Dissonance.
* Difficulty is resistance and is modeled as Dissonance.
* Damage can be modeled as Dissonance.
* Dissonance can accumulate as Load.
* Load suppresses weaker Expressions first.
* Recovery targets Dissonance type.
* Scale and Difficulty are separate.
* Scale defines the frame of reference for Difficulty.
* Difficulty defines resistance within that Scale frame.
* Classification and Scale are separate.
* Infrastructure is setting-facing Lens routing.
* Concession allows major characters to exit defeat without reversing it.

---

## Current Open Questions

Status:

```text
UNRESOLVED
UPDATED 2026-06-30
```

Open system questions:

* Is the percentile chassis final?
* Does Exponential ×1.6 remain stable after additional Lens testing?
* Does Exponential ×1.5 remain a conservative fallback?
* How should non-human baselines be constructed?
* How should additional Lenses modify the current math?
* What are final Resonance values?
* What are final Dissonance values?
* Should Resonance and Dissonance use one universal modifier table?
* How many active Lenses can apply before table speed suffers?
* How should opposition values be calculated?
* Should Overflow become core for opposed contests and degree of success?
* Should Universal Load be core or optional?
* How should Infrastructure be formalized without becoming a second game?
* How should Scale interact with effect size if success chance already uses Scale?
* What does Difficulty Rank mean in each genre?
* What is the final character construction procedure?
* How should the table prevent "argue for every possible Lens" behavior?
* What public title should the system use?

Current design risk:

```text
If every detail can become a Lens, the system may blur.
```

Likely guardrail:

```text
A Lens must explain the action, opposition, context, access, cost, recovery, or consequence.
More Lenses should make the action more precise, not merely bigger.
```

---

## Current Next Tests

Status:

```text
ACTIVE TEST QUEUE
UPDATED 2026-07-01
```

Recommended next tests:

```text
1. Use the Exponential ×1.6 Scale test record as the current Scale math reference.

2. Begin additional Lens tests using the locked Difficulty curve and Exponential ×1.6.

3. Test Resonance and Dissonance as scene agreement / scene contradiction:
   ice palace, volcanic chamber, sunlight, darkness, rain, terrain, domain, and infrastructure.

4. Test Expression vs. Dissonance examples:
   He-Man meteor scenario; Strength only vs Strength + Protection.

5. Test Expression vs. Expression examples:
   higher-Scale force vs lower-Scale specialized counterforce.

6. Reconsider Overflow through opposed margins and degree of success as a shelved possible model, not a current procedure.

7. Reconcile Relevant Dissonance language with the Resonance Pool / Dissonance Pool model.

8. Define ordinary task labels for the current Difficulty curve.
```

Current leading conceptual tests:

```text
Frost giant in ice palace vs volcanic dragon chamber.
Solar hero closer to the sun vs under dissonant conditions.
Human fighting in darkness or rain.
Higher-Scale attack vs specialized lower-Scale counterforce.
He-Man stopping a meteor with Strength, then Strength through Protection.
```

---

## Current Working Summary

Status:

```text
REFERENCE SNAPSHOT
UPDATED 2026-07-01
```

```text
LENS = Layered Expression Narrative System.

Everything that changes action is a Lens.

A Lens is not a bonus.
A Lens is a piece of reality becoming relevant.

Character is the source of action.

Attributes are broad focusing layers.

Classification determines possibility.

Scale determines frame of reference / natural magnitude.

Difficulty determines resistance within the acting Scale frame.

Resonance is scene agreement.

Dissonance is scene contradiction.

Load accumulates interference.

Recovery counters specific Dissonance.

Settings implement the same engine through different Lens vocabularies.
```

Current active math:

```text
Base Expression
× Scale Modifier
× Difficulty Multiplier
× Relevant Resonance Lenses
× Relevant Dissonance Lenses
= Final displayed value after final-only floor
```

Current isolated test math:

```text
Human Capability
× Scale Modifier
× Difficulty Multiplier
= Final displayed value after final-only floor
```

Current math locks:

```text
Difficulty D1 = 98
Each Difficulty Rank = previous ×0.6
Rounding = full precision until final floor
Scale Magnitude 1 = ×1
Scale doctrine is locked.
Scale reference frame is locked.
Exponential ×1.6 is locked for the next test phase.
```

Current conceptual waypoint:

```text
The rules do not add narrative on top of play.
They help the table identify which parts of the narrative are already carrying force.
```

---

## End State

This document should be updated when a new waypoint supersedes any section.

Do not silently overwrite status levels.

When a decision changes, record whether it moved from:

```text
UNRESOLVED
to
WORKING CANDIDATE
to
WORKING LOCK
to
LOCKED
```

or whether it was demoted, rejected, or moved to an optional module.

