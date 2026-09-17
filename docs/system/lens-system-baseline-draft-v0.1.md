# LENS System Baseline Draft

Version: 0.1
Package: Version One Draft Package
Status: Internal system baseline draft; not final rules
Date: 2026-08-21
Updated: 2026-09-17
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

Creation and advancement use common flat per-Rank prices. Creation retains
protected allocations; advancement uses a shared pool. See Unified Flat Pricing
below. The currency's final name and acquisition rules for other Lens types
remain unresolved.

Lasting Character Aspects use the separate story-awarded development procedure
adopted below, not this per-Rank purchasing schedule. Their starting selections
do not spend or enlarge the protected point allocations.

### Unified Flat Pricing

Status: User-approved working model, 2026-09-07; revised by the three-package
core adoption on 2026-09-13. The times-five denomination remains unchanged.

| Purchase | Creation and advancement points |
|---|---:|
| Attribute | 60 |
| HOLT acquisition / defined Access, once | 20 |
| Derived Attribute | 20 |
| HOLT Axis | 20 |
| Task | 10 |
| Field | 10 |
| Specialty | 5 |
| Precision | 5 |

Task and Field now have equal prices. This deliberately reduces Task cost
relative to main's preceding schedule; it is not merely a denomination change.
The retained rank prices use the unified denomination. HOLT acquisition is a
one-time Access purchase, not a rank; subsequent parent-rank purchases are
removed. Specialty and Precision cost less than a Field.

The price is constant within each layer. A permitted first Rank costs the same
as any later Rank in that layer. Current Rank does not multiply the price.
The same unit prices apply at creation and during advancement. Protected
creation funding cannot be withdrawn or converted into unrestricted spending.
See Current Character-Creation Allocation for the adopted starting reference.

Use 19 advancement points (Participation plus three meaningful categories)
as the current session-card pacing reference,
not a compulsory award or ceiling. Tables may deliberately choose faster or
slower advancement by changing awards. Such customization does not invalidate
the reference calibration or require compensating rules.

Existing Access requirements, Rank horizons, and Derived parent caps still
apply. Raising an Attribute grants neither free Derived ranks nor permission
to acquire an otherwise unavailable Lens. Narrative eligibility governs purchases
as described below. HOLT acquisition uses the separate working estimate below;
Profile HOLT funding, the ordinary alternative for declining a HOLT package,
and prices for other Lens types remain unresolved. The 125 ordinary flexible
starting points are not automatically HOLT-eligible.
The Benefits and Drawbacks framework adopted on 2026-09-17 also permits those
flexible points and actual awarded drawback compensation to fund approved
benefits, subject to Profile eligibility. Benefit provisions have no separate
advantage ranks; their individual catalogue valuations remain provisional.
The separately approved working session-award card follows below.

Decision rationale: when tested alternatives satisfy the intended requirements,
prefer the simpler sufficient model. Common prices remove the creation versus
advancement exchange rate while protected allocations retain the foundation.
Progressive schedules remain
historical comparisons, not a second active pricing procedure.

Current adoption and experimental provenance are recorded in
`../design/lens-unified-pricing-adoption-v0.1.md`. Earlier advancement tests
retain their historical prices and are not competing current schedules.

Boost and paid reroll each have a provisional one-point price. The working
sequence below is adopted, not a complete spending economy. One additional,
narratively justified ordinary language costs one unrestricted point under the
construction provision below. Defined minor recurring support also has a
provisional one-unrestricted-point price. Other small provision prices remain unresolved;
the denomination alone does not establish their scope or funding eligibility.

### Narrative Eligibility

Status: User-approved working rule, 2026-09-06.

Advancement purchases must be narratively eligible: the improvement must make
sense for the Character and campaign and satisfy applicable Access requirements,
Rank horizons, and parent relationships. Having enough points does not by itself
create permission to acquire an unavailable capability.

Training is one possible narrative basis for advancement, not a universal
prerequisite. Experience, study, practice, or another fitting development may
explain an improvement. The core does not require training-hour records, a
training montage, or proof that the player recently rolled the capability.

Explicit training requirements are an optional system at the GM's discretion,
suited to the campaign. A martial-arts training story may require instruction,
practice scenes, or a montage; another campaign may handle ordinary development
without portraying training at all. Both use the same narrative-eligibility
principle and advancement prices. No universal training duration, extra cost,
or training roll is adopted by this decision.

Narrative eligibility also governs when an improvement takes effect. Recommend
introducing advancement at transitions between scenes, chapters, or stories,
where the change fits the ongoing fiction. These are recommended narrative
boundaries, not compulsory campaign structures or automatic unlocks.

A session break is not itself a narrative boundary. If play stops mid-scene and
resumes next session, the scheduling break does not justify suddenly improved
capability or new permission that changes the continuing scene's context.
Narrative eligibility, not the calendar or award timing, supplies that basis.
Eligibility does not itself establish permission to alter an already-resolved
Expression. Explicit training requirements remain optional as described above.

### Session Awards

Status: User-approved working card, revised 2026-09-13. Participation increases
from 5 to 10; discretionary 0/3/5 awards and the optional milestone amount remain.

| Category | Points | Recognition |
|---|---:|---|
| Participation | 10 | Taking part in the session. |
| Progress | 0 / 3 / 5 | Meaningfully advancing an objective or resolving opposition. |
| Discovery | 0 / 3 / 5 | Consequential learning that changes understanding or available choices. |
| Character Expression | 0 / 3 / 5 | Bringing the Character's identity, commitments, motives, or contradictions into play. |
| Narrative Engagement | 0 / 3 / 5 | Developing the shared story through choices, relationships, threads, and consequences. |

For each discretionary category: 0 means not demonstrated, 3 means meaningful,
and 5 means exceptional. Exceptional replaces meaningful; the two do not stack.
Each award needs a concrete reason. Distinct contributions in one scene may
qualify separately, but relabeling the same contribution does not earn it twice.

Character Expression and Narrative Engagement remain separate. Neither grades
acting ability, airtime, moral correctness, or compliance with a planned plot.
A quiet consequential choice can qualify as fully as an elaborate portrayal.
Lack of an opportunity is not evidence of poor engagement.

The working recipient model gives Participation to participating players,
Progress and Discovery to the participating group, and Character Expression and
Narrative Engagement individually. Multiple players may qualify; these are not
competitive single-winner awards. Absent-player handling remains unresolved.

Participation plus three meaningful categories totals 19; all four totals 22.
The unmodified card spans 10-30 before optional milestones. Do not force a
session to total 19. Tables may adjust awards to choose their advancement pace.
The earlier 14 and 12.5 session references remain historical test controls,
not requirements to round or reduce the current card's result.

Session points share the existing spendable development currency with boosts,
paid rerolls, narrative help, and explicitly priced provisions. The three
immediate options retain their one-point prices and existing usage limits.
Spending reduces funds available for advancement; no reimbursement, compulsory
spending quota, or second pool is introduced. Points must exist when spent.

For pacing only, saving all 19 reference points allows an eligible Specialty
0-to-10 purchase (50) in three sessions, an Attribute rank (60) in four, and
new HOLT Access plus one Axis 10 (220) in twelve. Spending four per session leaves
15: those targets take four, four, and fifteen sessions respectively. Each
example starts with zero savings toward that target and prioritizes it alone;
no milestones or story grants are included. Retain remainders between purchases.
These are affordability illustrations, not permission or automatic activation.

Story-delivered development may be noted alongside the session award as an
additional benefit already received, without automatically deducting its value
from session points or granting duplicate spendable points. Optional earmarked
credit is committed toward an eligible purchase, not a fractional Rank or a new
currency. Specific lasting provision prices remain unresolved; current
immediate-spending procedures appear below. There is no requirement to price
every relationship or story event.

Optional milestone awards recommend 12.5 additional advancement points for a
substantial turning point or completed undertaking spanning multiple sessions.
They recognize the larger development alongside the normal session award.
They need not mark a predetermined chapter, victory, or compliance with the
GM's intended plot. Campaigns may omit them entirely or adjust their frequency
and amount. They use the same advancement pool, not a separate currency or
level system. Milestone recipient details remain unresolved.

Definitions, examples, and development history appear in
`../design/lens-session-awards-working-proposal-v0.1.md`.
The adopted card was compared in
`../tests/lens-participation-ten-mixed-development-test-v0.1.md`.
Earlier award comparisons remain historical evidence. The integrated adoption
record is `../design/lens-core-three-package-adoption-v0.1.md`.

### Working Boost and Reroll Sequence

Status: User-approved replacement procedure and spending limits; one point
per option retained as the tested provisional working price.

A boost is purchased before rolling. A paid reroll is chosen after seeing
the result but before applying its consequences to the fiction. The new roll
replaces the original, even if worse; it is not keep-the-better.

Special results are eligible for a paid reroll. The replacement governs the
complete outcome, including any special benefits or consequences attached to
that roll. Discard the original roll's benefits and consequences rather than
combining them with the replacement. A special result on the replacement takes
full effect and does not permit another paid reroll. Conditions or events
established independently before this Expression are not rewritten.

The reroll resolves the same Expression and retains its already purchased
boost. It does not apply that boost a second time or require buying it again.
Boost and reroll are separate expenditures; neither includes the other.

Illustration using the leading x1.20 boost candidate: Rating 60 becomes 72.
Both the initial roll and the paid reroll use 72, not 60 or 86.4. The
replacement result supplies the outcome and margin for the same Expression;
it is not an additional action or a second award of the first roll's Effects.

An Expression permits at most one purchased boost and one paid reroll. Both
may be used on the same Expression, but neither may be purchased repeatedly.
The retained boost on the reroll is the original contribution, not another
boost. Luck or determination can explain this moment narratively; these
descriptions do not create another ranked layer.

Each boost costs one point; each paid reroll costs one point. Using both
costs two points from the shared spendable development currency. This is
a provisional price, not a new pool or an award increase to reimburse spending.
The completed pacing comparison is
`../tests/lens-one-point-spending-pacing-test-v0.1.md`.

The purchased boost adds +0.20 to the Resonance contribution total before
netting against applicable Dissonance. Apply max(0, 1 + Resonance - Dissonance)
once. Do not multiply contributions together or multiply the completed factor
by 1.20. With no other context the boost produces x1.20; with +0.10 and +0.15
and no Dissonance it produces x1.45. With 100% Dissonance and no other helpful
context, the boost leaves x0.20. Excess interference can absorb some or all of
the boost. This is a fixed contribution, not a guaranteed 20% relative increase.

The comparison and subsequent additive decision are recorded in
`../tests/lens-paid-boost-resonance-pool-test-v0.1.md`.

Otherwise unassigned contextual contributions use the adopted ten-percent
assessment increments described under Current Roll Budget. Direct offsetting
and the zero minimum on the combined factor supersede separate contextual
multiplication; see `../tests/lens-resonance-dissonance-offset-comparison-v0.1.md`.
The working
percentile edge procedures appear below. Neither spending option permits an
unavailable action. Eligibility and timing were adopted following
`../tests/lens-paid-reroll-special-result-comparison-v0.1.md`; the earlier
`../tests/lens-boost-and-reroll-test-v0.1.md` preserves both eligibility controls
as historical comparisons.

### Working Narrative Help

Status: User-approved working rule.

Spend one point from the shared spendable development currency to establish
a plausible, useful narrative detail with GM agreement. Agree on the detail
and its contribution before charging the point. Preserve the Character's
existing permissions, the Campaign Profile, and established fiction.

Do not charge for equipment, ordinary kit contents, support, or other provisions
already established. A newly declared compatible consumable may enable an
equipment use; plausible familiarity with someone at a reception may provide
an introduction. Neither automatically grants a successful contested outcome,
loyalty, a purchased Rank, or new extraordinary permission.

Apply the detail through existing Access, equipment, Resonance, and resolution
rules. There is no automatic additional numerical boost for spending the
point. A detail whose entire contribution is the purchased boost uses that
procedure rather than bypassing its repeat-spending limit. Distinct genuine
contributions retain the existing applicability rules.

Normal fictional persistence applies: a consumable is consumed, a tool can
remain a possession, and an introduction remains an event that happened.
None automatically establishes replenishing supplies or guaranteed future
support. A useful detail may remove uncertainty and make an outcome Automatic;
the expenditure does not dictate an otherwise contested result.

Narrative help, a purchased boost, and a paid reroll together cost three points.
The two-point maximum for boost plus reroll is not a universal cap on all
narrative expenditures. This rule does not set a universal price for lasting
equipment packages, contacts, languages, or other development.

Cases and separately retained discussion candidates appear in
`../tests/lens-narrative-help-scope-test-v0.1.md`.

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

Otherwise unassigned contextual contributions are assessed in ten-percent
increments. This working convention does not reprice established modifiers
or adopt a universal ceiling; see Current Roll Budget.

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

Reciprocal control:

```text
The fiction must honor what your Lenses can do, and you must honor what the
fiction says they cannot currently do.
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

Current working stack, using the Training terminology adopted on 2026-09-03:

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
Task
↓
applicable Field
↓
applicable Specialty within that Field
↓
applicable Precision, when purchased and relevant
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

Task
What practiced activity is the Character performing?

Field
What developed knowledge or practical expertise supports that activity?

Specialty
What narrower expertise within that Field applies?
```

The Field is portable across applicable Tasks. A Specialty belongs to its
Field, not to one Task, and travels with that Field when relevant. This is not
an exclusive ownership tree or a requirement to purchase every layer.

No layer should exist solely to make the arithmetic reach a desired number.

Each layer must perform a distinct fictional and mechanical job.

---

## Working Attribute Chassis

Status:

```text
WORKING LOCK FOR CURRENT CONSTRUCTION AND PLAYTESTING
FINAL UNIVERSAL STATUS SUBJECT TO CONTINUED GENRE TESTING
```

The current chassis uses four control-locus Attributes and one worldly-position
Attribute.

```text
TWO-AXIS CONTROL LOCI

                         INTERNAL LOCUS       EXTERNAL LOCUS

PHYSICAL                 Might                Mobility

WILL / THOUGHT /
INTELLIGENCE /
AWARENESS / ENERGY       Psyche               Influence

ADDITIONAL WORLDLY LOCUS

WORLDLY POSITION         Leverage
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

Leverage
The Character's broad capability to establish, maintain, and bring material,
relational, institutional, reputational, and historical position to bear.
```

Current baseline scale:

```text
Each Attribute is rated from 1 to 10.
```

Rank 10 is available during character creation under the current baseline.
LENS does not impose a universal starting ceiling below Rank 10.

The five Attributes form the working LENS chassis for continued construction
and playtesting.

Their final universal status remains subject to testing against ordinary
human, social, vehicle, organization, horror, fantasy, science-fiction, and
extraordinary-character use.

---

## Derived Attribute and Training Layers

Status:

```text
TASK, FIELD, AND SPECIALTY: ADOPTED WORKING TERMINOLOGY, 2026-09-03
CONSTRUCTION AND BALANCE RETAIN THEIR EXISTING WORKING STATUS
```

Current stable narrowing layers:

```text
Derived Attribute
Task
Field
Specialty
```

### Adopted Training Terminology

```text
Task
The practiced activity the Character is performing.

Field
The developed area of knowledge or practical expertise brought to that
activity.

Specialty
A narrower concentration of expertise within a Field.
```

A Field does not belong to one Task. A Specialty belongs to its Field, not to
one Task. Both contribute only where their actual expertise is applicable.
Fields and Specialties do not manufacture permission, and an ordinary attempt
does not require a ranked entry at every layer.

Use `specialization` for the process of developing narrower expertise. Use
`branch` to describe the relationship: a Specialty is a branch of its Field.
Branch is no longer a separately named Training layer. A technique can be the
content of a Specialty; that does not automatically add another layer.

Earlier candidate `Parent Specialization` or `portable Parent` means Field;
earlier candidate `parent-bound Branch` means Specialty. The older two-layer
Skill/Specialization model is not a one-to-one rename into three layers. Its
lists and tests remain evidence, not an automatic assignment of entries to
Tasks, Fields, or Specialties.

This decision locks the vocabulary and the described relationships. It does
not change Training budgets, costs, multipliers, Rank horizons, permission,
compound resolution, or the current status of purchasing and cap tests. It
does not adopt a final Task catalogue or settle HOLT construction.

### Additive Attribute and Derived Foundation

Status: User-approved core working rule, 2026-09-13.

Attribute and Derived Attribute describe the Character's established broad
and focused capability. Add them to form the ordinary foundation; multiply
the applicable practiced and expertise contributions afterward. Established
does not mean innate: Leverage includes acquired position in the world.

```text
A = Attribute Rating, 1-10
D = Derived Attribute Rank, 0-A
T, F, S, P = applicable Task, Field, Specialty, and Precision ranks, 0-10

Ordinary foundation = A + D

Ordinary six-layer Expression =
(A + D) x (1 + T/10) x (1 + F/10) x (1 + S/10) x (1 + P/10)
```

This replaces A x (1 + D/10) in all five Attribute families, including Leverage.
Derived Attributes remain separately named and purchased, capped by their parent
Attribute. An unranked Derived contributes zero, leaving A as the foundation;
no free first Derived rank is granted. Applicable unranked Training contributes
x1.0; inapplicable layers supply no bonus. Ordinary attempts do not require
purchasing every layer.

Scale, applicable Axis development, Character Aspect, equipment, context, Difficulty, Function,
Access, and resolution procedures retain their established roles. Add the
foundation before applying those factors and floor only the final result.
The ordinary six-layer maximum remains (10 + 10) x 2 x 2 x 2 x 2 = 320 before
additional applicable factors. This is not a universal Final Rating cap.
Intermediate output changes; higher-than-10 horizons remain unadopted.

Examples of the foundation only: A3/D3 gives 6; A5/D5 gives 10; A5/D0 gives 5;
A10/D10 gives 20. Existing historical calculations retain their old inputs
and formulas as evidence, not competing current rules. New Expressions use
the additive foundation without reducing ranks or protected allocations.

Current Training and Axis rating concept:

```text
Task, Field, Specialty, Precision, and Axis development use ranks 0-10.

No investment means a neutral x1.0 multiplier.

Each invested step currently adds x0.1.

Working progression:
x1.0, x1.1, x1.2, x1.3, x1.4, x1.5, x1.6, x1.7, x1.8, x1.9, x2.0
```

Rank r supplies x(1 + r/10) when applicable. Attribute and Derived use the
additive foundation instead; an acquired HOLT has no numerical parent Rank.

### Current Rank Ceiling and Higher Rank Horizons

Status:

```text
RANK 10 IS THE CORE DEVELOPMENT CEILING
HIGHER RANKS DEFERRED TO AN OPTIONAL ADVANCED EXPANSION
```

The current construction language distinguishes:

```text
Attribute Rating
Rated from 1 to 10 as the broad numerical base.

Derived Attribute Rank
Rated from 0 to its parent Attribute Rating; added to that Rating.

Training or Axis Rank
Rated from 0 to 10, producing modifiers from x1.0 through x2.0 when applicable.
```

Adopted 2026-09-16: Rank 10 is the core development ceiling for Attribute
Ratings, Derived Attributes, Tasks, Fields, Specialties, Precision, and HOLT
Axes, both at creation and during advancement. Existing parent caps and
eligibility still apply. HOLTs themselves have no numerical parent Rank.
This limits purchased development, not Final Expression Ratings, Effects, or
Scale. Existing contextual modifiers and permissions remain unchanged.

Lasting Aspect development also stops at Rank 10, producing at most x2.0 from
the one applicable Aspect. Its separate starting allocation supplies up to two
Rank-1 Aspects; the purchased-layer starting horizon does not authorize buying
higher starting Aspect ranks.

```text
No universal starting ceiling below Rank 10 applies.

Ranks do not become more expensive merely because their numerical Rank is
higher.

Rank 10 represents maximum development within the current Rank horizon. It
does not grant extraordinary permission, change Scale, guarantee success, or
establish a universal maximum Final Rating.
```

The point economy already charges for concentration. A character who begins
with one or more Rank 10 construction lines spends points that cannot broaden
other Attributes, Derived Attributes, Tasks, Fields, or Specialties.

The current baseline therefore does not add:

```text
- escalating Rank costs;
- level-based Rank unlocks;
- a universal lower starting cap;
- an advancement threshold required to use Rank 10.
```

Flat per-Rank advancement prices are established in the working table above.
The currency's final name and other Lens acquisition procedures remain unresolved;
the current session card appears above.
The current cost principle is that a Rank does not receive a surcharge solely
because it is numerically higher.

Higher-rank development is removed from the core completion queue. Preserve
`../design/lens-higher-rank-horizon-proposal-package-v0.1.md` as exploratory
material for an optional advanced expansion, not a core unlock procedure.
If that expansion is pursued, it may test higher Rank Horizons against:

- Attributes and stable Lenses;
- the current x0.1-per-Rank progression;
- whether Derived Attribute ceilings remain linked to Attributes above Rank 10,
  and how an independently ranked Axis horizon would extend;
- how over-cap stacks interact with Difficulty and cross-Scale opposition;
- whether multiplication across several over-cap Lenses inflates Final
  Expression too quickly;
- whether Scale remains mechanically distinct;
- whether a higher Rank Horizon belongs to a Campaign Profile, Classification,
  HOLD, or another permission-bearing Lens.

No Rank-above-10 progression, cost, permission rule, or maximum is adopted in
the current baseline.

Preceding Skill-model distinction, retained for reading the earlier records:

```text
Derived Attribute
Stable, focused capability within a parent Attribute.

Skill
Learned field of action.

Specialization
Narrow mastered application.
```

### Current Character-Creation Allocation

Status:

```text
USER-APPROVED PROTECTED STARTING REFERENCE, 2026-09-07
COMMON CREATION AND ADVANCEMENT PRICES; NOT AN UNRESTRICTED STARTING POOL
```

Current baseline construction pools:

```text
25 total Attribute ranks, protected
50 global allocated Derived Attribute ranks, protected
750 weighted Training Points, protected
125 ordinary flexible development points
```

Adopted 2026-09-17: optionally select up to two developed Character Aspects at
Rank 1 each, and up to four potential Aspects with Access at Rank 0. Neither
allocation must be filled. There is no primary designation, required category
distribution, or transfer of unused Aspect selections into points. These are
separate selections, not purchases from the pools above. They do not change
the 3,075 priced reference, session awards, or existing character records.
See Lasting Character Aspects for application and story-awarded development.

Adopted 2026-09-17: optional starting drawbacks may award up to 40 points in
total actual compensation, not forty automatically and not a drawback-count
limit. The 125 flexible base and protected allocations remain unchanged.
Flexible points and awarded compensation may fund ordinary development or
approved benefits, preserving prerequisites and Profile-specific HOLT/Axis
eligibility. Forty actually awarded gives 165 before purchases; thirty-five
gives 160. Compensation used inside a package cannot also be spent outside it.
No extra species-package allowance is granted. Record actual credited burdens
for later buyoff; see Benefits and Drawbacks below.

Attribute ranks are distributed globally among Might, Mobility, Psyche,
Influence, and Leverage. Every Attribute begins at Rank 1. The current baseline
permits Rank 10 during character creation. The protected 25 total includes
those five required base ranks; it is not 25 ranks in addition to them.

The fifty Derived Attribute Points form one global pool. They are not
earmarked according to the five Attribute ratings. Each Derived Attribute is
capped by its parent Attribute, but the player determines where to invest the
global pool.

```text
Parent Attribute
= broad capability and the ceiling of each child Derived Attribute

Derived Attribute investment
= focused development within that capability
```

An unranked Derived Attribute remains available through its parent, adding zero
to the foundation. A Task may therefore apply through an unranked Derived
Attribute. Neutral x1.0 in Training is not a free trained Rank 1.

Increasing an Attribute during advancement does not grant free Derived
Attribute Points. It increases broad capability and raises the ceiling of its
five child Derived Attributes. Any further Derived Attribute development must
be purchased separately.

The 750 protected Training Points buy Task and Field ranks at 10 each and
Specialty and Precision ranks at 5 each. No portion is reserved for narrow
expertise. A player may omit Specialties and Precision. This replaces the
old 100-rank, unweighted Training allocation; it does not preserve every old
portfolio's breadth. The tested smaller budget required secondary sacrifices.

The 125 ordinary flexible points can supplement Attributes, Derived Attributes,
Tasks, Fields, Specialties, or Precision at the same unit prices used during
advancement. This is the accepted branch allowance of 25 expressed in times-five
units, not an increase. It may also fund approved benefits under Benefits and
Drawbacks. It cannot withdraw protected funding or automatically
fund HOLT/Axis purchases. Additional ordinary purchases may raise totals above
the protected 25 and 50 within existing caps. Broad distribution is not required.

A Specialty or Precision requires an applicable parent Field but is not
Rank-capped by that Field. Precision may be purchased without an intervening
Specialty. These layers remain subject to applicability and Access.

Campaign Profiles define HOLT starting provisions and eligibility separately.
No universal HOLT allowance, automatic cash-out for declining a HOLT package,
or common Source reinforcement is adopted by this construction decision.

First extraordinary starting reference for evaluation: preserve the ordinary
base and add 125 points eligible for ordinary or HOLT/Axis development, subject
to Profile permissions. The original 125 ordinary flexible points remain
available for ordinary development and approved benefits, without automatic
HOLT/Axis eligibility. Choosing ordinary development from the extra eligible allowance
needs no refund or conversion. This comparison reference is not a universal
Profile grant, a level threshold, or cash-out for mandatory setting provisions.

Baseline Attribute accounting is resolved: supply Rank 1 in each of the five
Attributes, then allocate twenty additional ranks. Twenty purchased ranks at
60 points each represent 1,200 protected Attribute funding, yielding 25 total
Attribute ranks, not 25 ranks above the bases. The 50 purchased Derived ranks
cost 1,000; no free first Derived rank is granted. Including 750 protected
Training and 125 ordinary flexible points gives 3,075 in priced allocations
before Profile provisions. This is not a spend-anywhere character budget.
Actual starting drawback compensation is recorded separately from this base,
up to the forty-point ceiling; it is not an automatic addition to every build.

Working carryover rule: creation Training Points are spent or lost when
character creation is finalized. Unspent unrestricted points may be retained
for play. Unused Training Points are neither banked for later training nor
converted into unrestricted points. Required Attribute and Derived Attribute
allocations and their protections remain unchanged.

For example, ten unused Training Points and seven unused unrestricted points
leave seven carried points, not seventeen. This rule concerns creation funds;
it does not expire earned advancement points or separately established story
training credit. Retained points remain subject to normal purchase eligibility.

Working ordinary-language provision: one additional, narratively justified
ordinary language costs one unrestricted point. The ordinary flexible creation
allowance may fund this purchase; protected Training may not. Preserve languages
already granted by established Background facts or a Campaign Profile without
charging again. Background Rank does not grant an automatic number of languages.

This provision supplies ordinary fluency, not Task, Field, Specialty, or Precision
ranks. Ordinary communication normally requires no roll. Contested persuasion,
specialist interpretation, or decipherment still uses normal applicability,
Access, and resolution. The price does not override missing permission or grant
universal translation. Acquisition during play remains subject to narrative
eligibility. State literacy or dialect scope where material to the provision or
Campaign Profile; no separate universal literacy ladder is established here.

Provisional minor-support provision: one unrestricted point establishes defined,
narratively justified minor recurring support not already granted. Ordinary
flexible creation funds are eligible; protected Training is not. Use the tested
local innkeeper as the reference: normally reachable during business, holding
ordinary messages and sharing local information they actually possess. This does
not establish free lodging, major funding, dangerous shelter, dedicated labor,
or regional intervention. Additional help remains possible through play.

Preserve existing Network provisions and story-earned relationships without
charging again. The purchase increases neither Network Rank nor expertise and
adds no automatic multiplier. Routine fulfillment of established support has no
point toll or mandatory cooperation roll. Normal Access, narrative eligibility,
Conditions, and resolution govern actual obstacles and expanded requests.
Purchased and story-established relationships with identical facts function
identically. No contact-count entitlement, favor meter, or new usage cap is
introduced. This is a limited reference price, not a universal price for contacts,
powerful patrons, or organized networks; broader support prices remain unresolved.

Other small provision catalogue prices remain unresolved. Approved benefits
may be purchased through the Benefits and Drawbacks framework; neither unused
funds nor a new denomination independently establishes permission or a price.

Earlier Skill-model construction language follows for historical comparison,
not as a competing current procedure:

```text
Skill
= an independently developed field of action

Specialization
= a narrow mastered application of a parent Skill
```

A Skill does not require a ranked Derived Attribute and may exceed the Rank of
the Attribute or Derived Attribute used in a particular Expression. The lower
Attribute remains part of the calculation and therefore continues to matter.

A Specialization must identify a parent Skill and cannot exceed that Skill's
Rank under the preceding baseline. No Training Points are reserved for
Specializations. A player may spend all one hundred points on Skills or
exchange breadth for narrower mastery by buying Specializations. The candidate
Field and Specialty architecture is separately under test and does not
inherit that cap automatically.

The earlier construction tests charged one point per Rank in their respective
pools. Current priced purchases use Unified Flat Pricing above instead.
No escalating Rank cost is used.

### Current Working Core Skill List

Historical construction control: retained from the preceding Skill model.
This is not an adopted current Task catalogue. See Active Training-Landscape
Construction for the current lane.

Status:

```text
WORKING LOCK FOR CURRENT CONSTRUCTION AND PLAYTESTING
SUBJECT TO DELIBERATE REVISION AFTER PROFILE AND PLAY TESTS
```

The current working core contains fifteen Skills:

```text
Athletics
Stealth
Survival

Unarmed Combat
Melee
Ranged Combat
Tactics

Investigation
Medicine
Language
Security

Persuasion
Deception
Command
Intimidation
```

These Skills provide the current shared construction vocabulary. The Skill
grammar remains more important than the list: the fiction determines which
Derived Attribute expresses a Skill in the current action.

`Language` represents learned ability to understand, speak, read, write, and
otherwise communicate through language. The fiction establishes which
languages the Character has a basis for knowing or interpreting. The Language
Skill does not make an entirely unknown language applicable without that
fictional basis.

`Linguistics` remains available as a narrower appendix or Campaign Profile
candidate representing analytical study of grammar, language structure,
language families, historical development, and decipherment. It is not part of
the current working core.

The remaining candidates are retained for Campaign Profile selection,
player-created Skills, or an appendix Skill Library. Their omission from the
working core does not make their actions forbidden. An ordinary attempt may
still use the applicable Attribute or Derived Attribute without trained Skill
support.

### Active Training-Landscape Construction

Status:

```text
750 WEIGHTED TRAINING POINTS IS THE PROTECTED WORKING REFERENCE
TASK, FIELD, SPECIALTY, AND PRECISION ARE THE CURRENT TRAINING LAYERS
TASK COUNT, GROUPINGS, AND FINAL ENTRY SCOPES REMAIN UNRESOLVED
```

The previous teaching control used:

```text
25 Active Skills
75 shared Training Points
= average Rank 3 if distributed evenly and no points are spent on
  Specializations
```

The current design lane no longer assumes that twenty-five Active Skills must
be the final catalogue. It is developing Tasks, portable Fields, and narrower
Field-bound Specialties. Those names and relationships are adopted working
language; catalogue contents and balance remain under development. The former
Core and Anchor lists remain evidence and teaching material rather than a
final ownership map.

The exact next dependency is to determine whether the system needs roughly
twenty-five named Tasks, a larger Task index, broader Task groupings with
examples, or another controlled combination.

Under the preceding Skill model, Campaign Profile Skills identify recurring
learned methods important to a
particular campaign but not universal enough to belong in the Core list. They
may be selected from the appendix Skill Library or defined for the Campaign
Profile at equivalent breadth.

Campaign Profile Skills use the same Rank progression, Training Point cost,
Derived Attribute routing, applicability rules, and Specialization procedure
as Core Skills. They do not create another Skill subsystem. This retained
description is not a new Core/Profile split for Tasks, Fields, or Specialties.

The current construction pools produce the following even-distribution
diagnostics:

```text
25 Derived Attributes
50 global Derived Attribute Points
= average Rank 2 if distributed evenly

25 Task positions as a diagnostic control
750 weighted Training Points / 10 points per Task Rank
= average Rank 3 if distributed evenly and no points are spent on
   Fields, Specialties, or Precision
```

These averages explain the current test proportions. They are not required
allocations. Players may concentrate or distribute points differently, and
Training Points spent on Fields, Specialties, or Precision reduce the number
available for Task Ranks. This excludes the separate ordinary flexible allowance
and does not impose a catalogue size.

### Player-Proposed Skills

Historical Skill-model procedure: retained as evidence for the developing
Task/Field/Specialty index. Its twenty-five-position control below does not
impose a current catalogue limit.

Status:

```text
WORKING LOCK FOR CURRENT CONSTRUCTION AND PLAYTESTING
```

The twenty-five Active Skill positions are the current construction target.
Their final contents are not a closed catalogue and remain under development.

A player may propose another Skill by explaining:

```text
what learned field the Skill represents;

how it belongs within the scope and fiction of the campaign;

and what recurring actions it reasonably covers.
```

When the proposed Skill makes sense at a breadth comparable to existing
Skills, it becomes available to that Character. It uses the same Rank
progression, Training Point cost, Derived Attribute routing, applicability
rules, and Specialization procedure as every other Skill.

Approval makes the Skill available. It does not grant free Ranks or additional
Training Points. The Character purchases any Ranks from the same Training pool.

A proposed Skill cannot manufacture extraordinary permission, replace a HOLT,
override Access, or claim applicability beyond its established fictional
scope.

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

The current chassis contains five Derived Attributes beneath each of the five
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

LEVERAGE

Assets
Established material resources, property, supplies, equipment, facilities,
credit, holdings, and other controlled means.

Network
Established relationships, contacts, affiliations, communities, patrons,
followers, dependents, and other relational support.

Authority
Established office, title, credentials, license, jurisdiction, clearance,
delegated power, or recognized right to direct and decide.

Reputation
Established fame, trust, honor, notoriety, prestige, disgrace, or public
expectation attached to the Character.

Background
Established culture, upbringing, origin, formative history, ancestry,
lineage, migration, diaspora, exile, belonging, inherited identity, defining
events, historical associations, and inherited claims or burdens carried by
the Character.
```

`Background` is the current working name for this function. It replaces
`Heritage`, which was too centered on ancestry, lineage, and inherited culture
to contain acquired history, migration, exile, captivity, education, war, and
other defining events without strain.

Routing boundaries:

```text
Material inheritance and possessions                 Assets
Current relationships and affiliations               Network
Recognized office, credentials, and jurisdiction     Authority
Public expectations, fame, trust, and disgrace       Reputation
Mechanically relevant formative or historical past  Background
Learned competence                                   Skill / Specialization
```

Background does not measure how much culture, ancestry, or history a Character
possesses. It measures how strongly the Character's established past can be
brought to bear through Leverage.

### Leverage and Influence Boundary

Status:

```text
WORKING LOCK FOR CURRENT CONSTRUCTION AND PLAYTESTING
```

```text
Influence
Direct outward effect originating in the Character's current projection,
communication, will, intelligence, relationship-building, or control.

Leverage
Established worldly position brought to bear.
```

The source of force, not the desired outcome, determines the carrying
Attribute.

Examples:

```text
Persuade a guard through personal argument   Influence
Bribe the guard with established funds       Leverage / Assets
Order the guard through recognized office    Leverage / Authority
Call a trusted friend for help               Leverage / Network
Invoke public fame or notoriety               Leverage / Reputation
Invoke formative history or cultural belonging Leverage / Background
```

One truth may establish Access while another Attribute carries the Expression.
Access does not automatically become a multiplier, and a shared outcome does
not permit Attribute stacking.

### Assets Boundary

Status:

```text
WORKING LOCK FOR CURRENT CONSTRUCTION AND PLAYTESTING
TRANSLATION TABLES UNRESOLVED
```

Assets includes information about the Campaign-Profile-relative magnitude and
breadth of what the Character possesses or controls.

```text
Leverage + Assets
= stable Assets Rating

Access
= whether a particular resource relationship is currently usable

Equipment properties
= what a particular item does when used
```

A Campaign Profile may translate the stable Assets Rating into starting
equipment, resource bands, or ordinary availability without requiring exact
currency. Those translation tables remain unresolved.

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

All twenty-five Derived Attributes establish a consistent system vocabulary.

They are not twenty-five mandatory separate developed ratings on every
character.

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

Leverage → Assets

Applies to established material means brought to bear.

It does not determine a weapon's damage, a vehicle's Scale, or a tool's
technical function merely because the Character owns it.

Leverage → Reputation

Applies when established external belief about the Character carries force.

It does not replace direct personal Influence merely because both routes may
change another person's decision.
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
DIRECT OFFSETTING, ZERO MINIMUM, AND TEN-PERCENT CONTEXTUAL STEPS ADOPTED
```

```text
One Expression Rating
One applicable lasting Aspect factor, when not already included in that Rating
One net contextual multiplier from Resonance and Dissonance
One opposition value
```

The Aspect factor is independent of the contextual pool. Include it once,
whether precomputed for a relevant route or applied at the table, and reassess
its applicability for the actual Expression. Do not credit the same identity
contribution again as Resonance. Distinct helpful circumstances still count.

All relevant supportive Lenses may contribute to the Resonance pool.

All relevant resisting Lenses may contribute to the Dissonance pool.

Keep the helpful and obstructive sources identifiable, then combine their
contribution totals into one final table-facing contextual multiplier.

Working contextual valuation: assess otherwise unassigned contributions in
increments of 0.10 (ten percent). Use a few practical examples rather than ten
mandatory named severity categories. Rate the actual help or interference with
the current Expression, not the number of narrative details or time spent.
For obstructive context, the percentage describes the reduction, not the
remaining factor. A 0.30 reduction alone leaves a 0.70 Dissonance factor.

Preserve already defined values, including the paid +0.20, equipment increments,
and Function Bands. Do not round existing contributions or the completed pools
to tenths. The tested 0.10 through 1.00 range is not a universal contribution
ceiling. Preparation does not automatically accumulate ten percent per action
or round. Automatic resolution and Access remain distinct from numerical value.
The combined contextual multiplier has a minimum of zero as specified below.
Neither individual contribution totals nor Resonance receive an upper ceiling.

Working combination rule, adopted 2026-09-08: add applicable, distinct helpful
contributions as Resonance and obstructive reduction amounts as Dissonance.
Offset these totals directly. Include neutral 1.00 once:

```text
Contextual multiplier = max(0, 1 + total Resonance - total Dissonance)
Expression x contextual multiplier = adjusted Expression
```

This replaces separate Resonance and Dissonance multiplication. Do not cap the
Dissonance total at 1.00 before offsetting or discard excess contributions.
Retain actual applicable Lenses and recompute when circumstances change.
Apply ordinary final-only rounding after all relevant Expression factors.

For example, Resonance contributions +0.10, +0.15, and the purchased +0.20
produce 1.00 + 0.10 + 0.15 + 0.20 = x1.45 in the absence of Dissonance.
Adding a distinct 0.50 Dissonance contribution instead yields x0.95. Equal
Resonance and Dissonance amounts yield x1.00. Resonance of 1.50 with Dissonance
of 1.00 yields x1.50; positive effectiveness may exceed 100%. Resonance of
0.20 with Dissonance of 1.50 yields x0, not negative effectiveness.

Environmental circumstances are assessed as one Environmental Resonance or
Dissonance value for the relevant action. Do not count that value and its
component circumstances again. Likewise, do not count the same Condition
through its Function Band and again as separate numerical Dissonance.

Numerical offsetting does not erase its source Lenses, heal Conditions, remove
Load, or reopen Closed Access. Function Bands, Difficulty, Scale, and other
independent factors retain their existing roles. Do not add raw Difficulty
Ranks or Load levels into the net total. A zero contextual multiplier does not
itself close Access; permitted zero-Rating attempts retain the natural-01
procedure. Access-closed actions receive no roll, and Automatic actions remain
Automatic. No new permission, contribution valuation, or upper ceiling follows.

This is an aggregation rule, not a rule that only one advantage and one
disadvantage may exist.

---

## Ordinary Movement and Actions

Status: User-approved provisional ground-movement model, 2026-09-09.

Use one ordinary action per round. The two-ordinary-action experiment is closed.
Existing additional-action attempts at reduced capability remain available.

Working combat-round duration, adopted 2026-09-09: three seconds, or twenty
rounds per minute. All participants act within the same shared interval; it
is not three additional seconds for each participant. This does not impose
combat timing on every narrative activity or change existing action costs,
Capacity, push Difficulty, or movement amounts.

For ordinary clear-ground travel with the necessary Access:

| Allocation | Working allowance |
| --- | --- |
| Ordinary movement while acting | 6 units, without a movement roll |
| Dedicate the action to movement | 12 units, without a movement roll |
| Dedicated movement with a push, no attack | 12 units plus 1 unit per push Effect |
| Push while attacking | 6 units plus 1 unit per reduced push Effect; attack also reduced |

Use D2 (x0.588) as the working clear-ground push benchmark. Resolve the push
through the applicable Movement Expression, with normal Effect handling and
final-only flooring. For a push plus an attack, divide each Expression by two;
the attack retains its own Difficulty and circumstances. The movement-only
push is part of the committed movement action, not a second charged action.
Declare the push and action allocation, not a required number of extra units.

The six-unit accompanying allowance is shared across the round's actions, not
granted again for each action. Do not additionally multiply these base amounts
by Movement Rank: the prior 10-20-meter automatic progression is superseded by
this working model. Mobility still caps Movement and supplies its Attribute
contribution to applicable movement Expressions.

A failed push grants no extra distance by success; it does not automatically
erase base movement. Actual complications, Conditions and Access restrictions
still apply. D2 is not a universal Difficulty for every movement challenge.
Use the normal treatment of distinct circumstances without double-counting.

One unit is approximately one meter. Hexes, squares and ungridded play share
the distance reference; no mandatory grid or creature footprint is adopted.
Profile, movement-form, equipment and Scale differences remain relevant. Do
not grant unavailable movement forms or count an existing contribution twice.
No movement cap or special-result ceiling is added. Other movement-form
baselines and their specific translation remain unresolved.

Comparison: `../tests/lens-movement-push-difficulty-spread-test-v0.1.md`.

### Superseded 2026-09-08 Model

The following preserves the earlier model as history, not concurrent rules.
Its automatic Movement multiplier and 10-20-meter progression are not applied
to the current six/twelve-unit model.

Ordinary movement is available once per turn, not once per action. The Character
may distribute that movement around their actions where the fiction permits.
Declaring additional actions does not multiply the ordinary movement allowance.

One attack accompanies the turn's ordinary movement. Two attacks share that
same movement allowance and follow existing multiple-action accounting. Movement
beyond the ordinary allowance is an additional movement activity accounted for
normally, rather than another free allowance attached to an attack.

This relationship does not grant unavailable movement forms, bypass obstacles,
or turn genuinely uncertain movement into automatic success. Ordinary movement
and additional movement retain the existing Access and applicability rules.

Travel frame, adopted 2026-09-08: use the available movement form and means to
establish ordinary travel, modified by applicable, distinct Lenses. The Campaign
Profile or relevant capability/equipment description supplies that frame; the
same name, such as flight, does not establish identical travel for every source.

Preserve meaningful Movement development where it supplies the Character's
physical relocation. A higher Final Expression Rating does not universally
translate into proportionally greater distance. Training can improve actual
travel where relevant, but better control or successful execution need not
change the underlying movement capability. Resolve genuinely uncertain or
contested performance normally; routine travel remains Automatic where warranted.

Do not count the same capability or equipment contribution both in the baseline
and again as an additional modifier. These principles create no separate Speed
Rank, new movement purchase pool, or additional free allowance.

Personal-development contribution, adopted 2026-09-08: apply the existing
Movement Rank multiplier, 1 + Movement Rank/10, to the ordinary personal-travel
baseline where that development supplies relocation. Rank 0 contributes x1.0,
Rank 5 contributes x1.5, and Rank 10 contributes x2.0. Do not also multiply this
ordinary allowance by the raw Mobility Attribute Rating.

Mobility retains its role as Movement's parent cap and the Attribute base of
relevant movement Expressions. With otherwise identical travel factors,
Characters with the same Movement Rank have the same ordinary allowance even
if their Mobility ratings differ. This does not establish their maximum speed
or equate their performance in an uncertain or contested movement activity.
The personal contribution does not automatically multiply a piloted vehicle's
travel capability merely because the pilot has Movement development.

Distance presentation, adopted 2026-09-08: express ordinary movement through a
distance reference without requiring a grid or constant measurement. Apply the
relevant Movement multiplier to the movement-form baseline and record the
resulting allowance, including other applicable distinct travel contributions.
Use ordinary scene description when reach is clear; refer to the allowance
when the difference matters. Establish relevant distances before the player
commits to the activity. Obstacles and unavailable routes remain relevant.

Broad positional descriptions are useful narration, not a replacement that
erases meaningful differences between developed movement allowances. Maps and
theater-of-the-mind play use the same underlying reference.

Ground baseline, adopted 2026-09-08: use 10 meters as the working ordinary
ground-movement baseline. With the Movement Rank contribution alone, ordinary
allowance is 10 x (1 + Rank/10) meters, or 10 + Rank meters.

| Movement Rank | Ordinary allowance | Optional 1-meter grid spaces |
| --- | --- | --- |
| 0 | 10 meters | 10 |
| 1 | 11 meters | 11 |
| 2 | 12 meters | 12 |
| 3 | 13 meters | 13 |
| 4 | 14 meters | 14 |
| 5 | 15 meters | 15 |
| 6 | 16 meters | 16 |
| 7 | 17 meters | 17 |
| 8 | 18 meters | 18 |
| 9 | 19 meters | 19 |
| 10 | 20 meters | 20 |

One-meter reference grid spacing is optional, not a mandatory grid or a rule
for creature footprints. Choosing another grid spacing does not change physical
reach. These whole-meter values describe the baseline plus Movement contribution,
not a guarantee that every additional Lens produces whole spaces or a maximum
movement allowance.

Campaign Profiles and capability descriptions may establish different baselines.
This ground reference does not impose the same travel on every species, movement
form, vehicle, or Scale. Other baseline quantities, Scale translation, and
additional-movement output remain unresolved. No turn duration, rounding rule,
or sprint multiplier is adopted. Comparisons:
`../tests/lens-movement-rating-versus-form-baseline-test-v0.1.md`,
`../tests/lens-movement-only-versus-mobility-contribution-test-v0.1.md`, and
`../tests/lens-ground-movement-grid-baseline-comparison-v0.1.md`.

---

## Preparation

Status: User-approved working default, 2026-09-08.

Assess the fictional benefit actually established by preparation and value its
applicable Resonance in ten-percent increments. Resolve genuinely uncertain
preparatory activities through the normal Expression rules. Do not manufacture
uncertainty or an additional roll merely to generate a preparation margin.
Ordinary preparation may establish an advantage automatically when its actual
activity and circumstances warrant that result.

Preparation must support the specific intended response. Sharing a Field does
not make it applicable to every later action. Delaying alone does not establish
preparation. Count the actual contribution once, not both its positional or
informational benefit and a duplicate generic preparation bonus.

A better preparatory result may establish a better advantage, which can be
assessed accordingly. There is no automatic conversion of each generated
Effect into +0.10 Resonance. That exchange remains an unadopted candidate for
explicitly creating numerical advantage, not a default payout for preparatory
success. No new Prepare Task or Lens category is created.

Persistence, adopted 2026-09-08: preparation persists while the facts supporting
its benefit remain true. Apply it only where it helps the particular Expression.
Reassess applicability and value when circumstances change. Use or interruption
alone does not automatically consume or erase preparation; actual consumption,
disruption, or invalidation of its supporting facts can diminish or end it.

Temporarily inapplicable preparation is not necessarily lost. Rehearsed material
can remain useful when the relevant subject returns, while broken visual
alignment may need to be reestablished. Retain only what actually remains; do
not guarantee full restoration merely because an opportunity returns.

There is no universal duration, use limit, or maintenance roll. Elapsed time
matters when it changes the actual advantage. Reassessing the same contribution
replaces its previous value rather than adding a duplicate. Resolve genuinely
uncertain maintenance or reestablishment normally, without imposing a universal
renewal cost. Persistence does not grant a later action for free.

Action accounting, adopted 2026-09-08: use ordinary action accounting for a
distinct preparatory activity. Ordinary execution already included in an
Expression, such as aiming sufficiently to take a shot, incurs no duplicate
setup charge and grants no automatic additional preparation bonus.

A separate setup uses an action when action timing applies; a later attack
uses another available action. Resolve multiple independently performed
activities through the existing multiple-action procedure. An automatic setup
can still occupy an action: no roll does not mean no time. Spending an action
does not guarantee Resonance or make every setup achievable in one action.
Assess the advantage actually established.

A prepared open defensive reaction remains an open defensive reaction. Its
distinct setup can consume a normal action, but do not charge that action again
for the defense or grant an extra reaction. Preparation does not turn an attack
into a free defensive reaction. Existing preparation is not charged again merely
because it remains useful; persistence and specific applicability are unchanged.

Retain Delay for relocating an available action under the existing initiative
procedure. Delay does not refund spent setup, bank an additional attack, or
grant Resonance by itself. A prepared open defensive reaction does not move
initiative merely because it benefits from preparation.

Held-response timing, adopted 2026-09-08: a Character may declare an intended
response and a perceptible trigger before that trigger occurs. Once the
Character perceives the trigger, a feasible held response may resolve before
the still-unfinished portion of the triggering activity completes. The response
uses an available action and follows Delay; it does not refund a spent setup
action or grant an additional action at the Character's old initiative position.

Resolve the response through ordinary opposition. Then continue the original
activity wherever it remains possible, applying the actual Effects and changed
circumstances. A hit or the fact of interrupting does not automatically cancel
the activity. An open defensive reaction remains available where its Access
permits it, without becoming another normal-action expenditure.

The trigger itself has already happened. The response cannot retroactively
prevent a completed event, rely on information the Character cannot perceive,
or claim an opportunity declared only afterward. It must fit the actual time
and means available; a held declaration does not make a slow activity instant
or grant missing Access. Resolve genuine uncertainty normally, without adding
a universal initiative reroll or detection test. Holding alone grants no
preparation Resonance and does not change preparation persistence.

Multiple held responses, adopted 2026-09-08: use the existing relative initiative
order at the triggering event to order eligible responses to that same event.
Reassess perception, Access, available action, means, and timing opportunity
before each response begins. Apply each actual outcome before resolving the
next response; do not preserve a frozen version of the scene. Delay relocation
during resolution does not reorder the remaining responses to that same event.

A distinct perceptible event during a response can trigger another previously
declared, feasible held response. Apply the same interrupt procedure, then
return to each unfinished activity where it remains possible. Causality
determines when a response becomes eligible; initiative orders responses to
the same event. Later initiative does not prohibit a valid interruption
triggered by a different event during the earlier Character's response.

Once a response begins, its action is committed. Interruption neither refunds
that action nor makes it available for another attack. Resuming the unfinished
activity is not another action. A response not yet begun may be declined as
circumstances change; its unused action remains subject to ordinary Delay,
without granting an unrelated response the old trigger's interrupt permission.

No new initiative roll, priority rating, extra action, or universal chain limit
is introduced. Each additional held response requires its own legitimately
available action and valid trigger. An action cannot be reused to extend its
own interruption chain. Open defensive Expressions retain normal opposition
and do not become free offensive responses.

Non-accumulation, confirmed 2026-09-08: delaying or readying does not accumulate
actions. Waiting across several rounds does not bank additional attacks or
other actions. Continued preparation, such as further deliberate aiming, may
improve the actual advantage to a limited useful extent instead. Reassess that
contribution under the existing preparation rules; do not duplicate it for each
round waited. Delay alone still grants no Resonance. No numerical ceiling or
automatic bonus-per-round schedule is adopted by this clarification.

Initiative clarification, 2026-09-08: Delay reorders initiative at the point
where the Character actually acts. Subsequent turns follow that new position,
not the former position as well. Crossing a round boundary while waiting does
not create an old held action plus a fresh turn at the old initiative position.
Use the existing continuous Delay sequence rather than a separate carried-action
allocation. This clarification does not change multiple-action costs.

Further preparation, adopted 2026-09-08: limit additional benefit by what the
activity, available means, and current circumstances can actually improve.
Equipment can change the attainable benefit, the time required to establish
it, or both. Stop increasing the contribution when further effort changes
nothing relevant. New means, information, or circumstances may create another
genuine opportunity for improvement; an already established benefit continues
while its supporting facts remain.

Do not impose a universal three-round or three-action cap, automatic benefit
per action, or one-action-per-Lens rule. One activity may address several
problems, while one problem may require several activities or sustained effort.
Count the actual activity and assess its result, not the number of descriptive
labels. Ordinary equipment use and existing advantages incur no duplicate setup
charge. More magnification or a larger equipment label alone grants no bonus.

If preparation removes an actual obstruction, reassess its Dissonance. If it
instead establishes an advantage despite the obstruction, retain that source
and assess applicable Resonance. Do not count both changes for the same
contribution. Preserve environmental pooling and existing Range Difficulty;
merely preparing longer does not erase distance or grant missing Access.

When the Character can reasonably judge the opportunity, make the prospective
benefit and required investment clear without revealing unknown information or
guaranteeing an uncertain result. The tested aiming values are illustrations,
not standard equipment ratings or universal stages. Test records:
`../tests/lens-preparation-assessment-versus-effects-test-v0.1.md`,
`../tests/lens-preparation-persistence-test-v0.1.md`,
`../tests/lens-preparation-action-investment-test-v0.1.md`,
`../tests/lens-held-response-trigger-timing-test-v0.1.md`,
`../tests/lens-multiple-held-response-order-test-v0.1.md`, and
`../tests/lens-preparation-means-and-plateau-test-v0.1.md`.

---

## Historical Relevant Dissonance Conflict

Status:

```text
SUPERSEDED COMPARISON
CURRENT NET CONTEXTUAL RULE ABOVE GOVERNS
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

The current rule includes all applicable, distinct numerical contributions and
offsets them against Resonance. The older one-most-relevant-only approach is
not a competing current rule. Existing Load and Function Band handling remains
separate and must not duplicate the same Condition's numerical contribution.

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

### Independent Opposed Effects

User-approved working procedure, 2026-09-10. This replaces Net-Margin-based
opposed Effect generation; Margin remains available for comparative placement.

Establish the intended activities, permissions and stakes before rolling.
Calculate each complete Final Expression Rating, including applicable equipment
and other Lenses, once. Resolve each attempt independently, completing any
continuation and permitted paid replacement before applying consequences.

```text
Margin = Final Rating - completed roll
Successful output = 1 + floor(max(0, Margin) / 10)
Failed output = 0 successful Effects

Offensive remainder = max(0, offensive output - defensive output)
Defensive surplus = max(0, defensive output - offensive output)
Potential counter output = min(1, defensive surplus)
```

Compare Effects only where the Expressions actually oppose one another.
Defense cancels with its full output. Ordinary offensive remainder is not
capped at one. A failed defense supplies zero successful Effects, not negative
Effects that amplify the attack. Equipment is not added again after comparison,
and no second baseline Effect is awarded to the remainder.

For example, Margins +30 and +20 produce four and three Effects: one offensive
Effect remains. Margins +29 and +21 each produce three Effects and cancel.
A successful Margin +50 produces six Effects against a failed defense, whether
that defense's Margin is -10 or -80. A failed attack produces no successful
attack Effects, even if the defense fails more badly.

#### Defensive Surplus

A surplus may produce at most one counter-effect per resolved exchange, only
when the defensive Expression itself fictionally supports that consequence.
The cap also applies to extraordinary or natural-01 defensive surplus; full
defensive cancellation remains intact. Surplus is not banked, converted into
a new attack, or automatically reflected. Reflection requires its own permission
and traceable Effect handling. No unrelated offensive activity is granted.

The limit is per exchange, not per round or Condition. Matching mitigation can
prevent the counter-effect. Existing Access, Scale, Effect conservation, open
defensive reactions, compound Expressions and normal action accounting remain
in force. The counter does not grant an additional action or guaranteed harm.

#### Comparative Placement and Ties

For declared comparative placement, put success before failure, then compare
signed Margins within the same outcome. Higher Margin places ahead; equal
outcome and Margin tie. This includes special results: 01 grants individual
success, not automatic first place. A 00 failure may be comparatively better
than another failure, but remains a failure with its own applicable complication.
Net Margin may express the difference within an outcome; it generates no Effects.

Lesser failure may win a closest-throw comparison but cannot manufacture a hit
or successful pressure. Likewise, the better of two unsuccessful arguments
need not secure support. Do not relabel failed stakes after rolling to obtain
the intended successful result. Comparative loss does not erase independently
accomplished facts, such as both runners arriving before a deadline.

Equal opposing Effects cancel even if raw Margins differ. Better comparative
placement does not bypass that cancellation. A comparative tie preserves
independently accomplished results. Neither kind of tie grants an automatic
reroll or free action; further activity uses normal action accounting.

#### Special Results and Complications

Natural 01 guarantees success on a permitted attempt, including at Final Rating
zero. Its subtractive continuation determines output: one baseline Effect plus
complete ten-point bands of positive Margin. It does not guarantee an opposed win.
Natural 00 fails; its additive continuation determines complication severity,
not successful output. Natural 99 resolves normally against the Final Rating;
it is not an automatic failure.

Resolve 00 complications separately from opposing successful Effects. Require
a fictionally supported additional consequence, not duplicate accounting of
the already-resolved hit or outcome. Distinct consequences may affect the same
Capacity or Condition and accumulate; different labels alone do not justify
another charge. Do not add complication severity to the attacker's output or
subtract attack Effects from complication severity. The one-counter limit does
not cap an actor's own failure complication. Preserve matching mitigation,
normal consequence handling and paid-reroll consequence timing.

Supporting record: `../tests/lens-independent-opposed-effects-test-v0.1.md`.
Earlier signed-Margin tests remain historical comparisons, not competing rules.

---

## Current Core Procedure

Status:

```text
WORKING PROCEDURE
INDEPENDENT OPPOSED EFFECTS ADOPTED FOR CONTINUED PLAYTESTING
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
11. Roll and complete any continuation or permitted paid replacement.
12. Determine each attempt's success or failure and independent Effects.
13. Compare Effects where Expressions oppose; apply any eligible counter limit.
14. Resolve comparative placement where the declared stakes require it.
15. Apply Effects and separate complications, preserving mitigation and conservation.
```

Use the adopted permission, contextual and opposition rules above. Unresolved
setting implementations and further Overflow uses are not decided here.

---

## Percentile Resolution

Status:

```text
WORKING LOCK FOR CURRENT TESTING
NOT FINAL-LOCKED
```

Current basic resolution:

```text
Roll equal to or under the Final Rating to succeed, subject to natural-result rules.
```

The percentile chassis remains open to later confirmation.

---

## Effect Resolution and Conservation

Status:

```text
APPROVED WORKING DOCTRINE
EXACT EQUIPMENT AND SETTING IMPLEMENTATIONS UNRESOLVED
```

```text
Each successful Expression, opposed or unopposed
= 1 baseline Effect Level
+ 1 additional Effect Level for each complete 10 points of positive Margin

Failed Expression = 0 successful Effects
Offensive remainder = max(0, offensive Effects - defensive Effects)
Eligible defensive counter = min(1, max(0, defensive Effects - offensive Effects))
```

Net Margin does not generate Effects. Apply the Independent Opposed Effects
procedure where activities oppose. Matching mitigation and other applicable
Effect functions act on the surviving Effects, not on a newly awarded baseline.
Ordinary equipment contributions are already included in the Final Expression;
do not re-add them after rolling or comparing Effects.

Generated Effect Levels are produced by success and margin before matching
enhancement, mitigation, conversion, redirection, or storage is applied.

Effect Enhancement adds matching Effect Levels after the primary resolution.

This distinct Lens function is not a second use of an equipment multiplier.
The opposed procedure grants no automatic post-comparison equipment enhancement;
specific implementations of separate Effect functions remain to be defined.

Effect Mitigation prevents or removes matching Effect Levels.

User-approved application scope, 2026-09-11: apply mitigation according to the
actual effect application and the protection's defined scope, not the number
of contributing Sources. One genuine reinforced matching effect encounters
the applicable mitigation once; genuinely separate hits remain separate
applications. Merely sharing a target, timing, or teamwork description does
not merge otherwise separate effects.

Preserve matching forms, individual targets, and every explicit protection
limit. A finite reserve or per-round restriction does not reset per hit unless
its definition permits that. Protection against one form does not automatically
answer another, and a shared allowance is not copied in full onto every
component. Delivery output does not become additional harm merely to penetrate
protection. Ordinary equipment modifiers remain part of the Final Expression
and are not applied again as mitigation without a distinct established function.

Supporting record: `../tests/lens-multiple-source-mitigation-test-v0.1.md`.

Every Effect has:

- an amount;
- a form;
- a target;
- a time of application.

Different Lens functions may change different parts of that Effect:

```text
Effect Enhancement
Changes how much Effect exists.

Effect Mitigation
Stops matching Effect.

Effect Conversion
Changes what matching Effect becomes.

Effect Redirection
Changes where matching Effect goes.

Effect Storage
Changes when matching Effect applies or becomes available.
```

Effect Conservation Principle:

```text
Each Effect Level follows one traceable path.

An Effect Level cannot remain applied to its original target while also being
mitigated, converted, redirected, or stored.

A Lens may stop an Effect Level, change it, move it, delay it, or allow it to
apply. It cannot duplicate that Effect Level unless another applicable Lens
explicitly creates additional Effect.
```

User-approved area application, 2026-09-12: a permitted area effect explicitly
authorizes its resolved strength to apply to each genuinely exposed target
within its established scope. It is not one finite harm budget divided among
the occupants. The total consequences across targets can therefore exceed the
effect's strength. This authorization comes from the permitted area effect,
not merely from multiple contributors or a request to affect more targets.

Trace conservation through each authorized target application. The same local
Effect cannot both harm that target and be converted, redirected, or stored.
Local cancellation or protection does not consume another target's exposure;
an intervention against the whole effect changes the output within its actual
scope before dependent applications. All explicit Lens limits still apply.
See Permitted Area Application under Multiple-Source Output for the procedure.

Conversion, redirection, and storage may operate together when they describe
one coherent path. For example, an armor Lens may convert incoming Electrical
Effect into Stored Charge for a later Expression. The converted levels do not
also remain as Electrical harm.

The participating Lens must state:

- which Effects it can intercept;
- what happens to the intercepted levels;
- any limit on how many levels it can affect;
- any requirements for release, expiration, or overload when relevant.

These are universal Lens functions. They are not equipment-only subsystems.

---

## Resolution Scope and Repeated Attempts

Status: User-approved working scope principle, 2026-09-10.

Identify the activity an Expression resolves. Repeating words or adding
narration within that already-resolved activity does not by itself create
another roll or additional Effects. A further meaningful activity may form
another Expression, subject to ordinary action accounting, Access, uncertainty
and opposition. It need not use a new argument, weapon or technique merely
to qualify as further activity.

This is a universal scope principle, not a social retry restriction. A roll
covering one attack does not cover every future attack; a roll covering an
exchange is not a separate roll for every sentence within it. Use the actual
scope rather than an automatic once-per-scene or once-per-target limit.

## Social Effects and Player Agency

Status: User-approved working boundary, 2026-09-09.

The established narrative stakes and the Expression's actual permission define
what a social victory accomplishes. Ordinary social success does not grant
unlimited control over another Character's decisions.

User-approved persuasion sequence:

1. Establish the request and what is at stake.
2. Resolve the attempt to persuade.
3. On success, the player may comply or refuse while accepting a meaningful
   Effect or consequence appropriate to that exchange.

Do not insert a mandatory intermediate emotional objective between the request
and its resolution. An appeal for release is an attempt to obtain release,
not automatically an attempt to manufacture guilt. An emotional Condition is
one possible appropriate result, not the required result of every appeal.

The player retains the choice of response, not the right to ignore a validly
resolved Effect. Refusing the demanded behavior does not erase the pressure,
Condition, Access change, or other consequence established by the exchange.
The same result-accountability principle applies to NPC refusal.

The resolved Effect and established stakes determine the consequence's weight.
The GM adjudicates the appropriate consequence; the player chooses whether to
comply or bear it and controls the Character's response. Player suggestions
are permitted, not the default consequence-setting procedure or a right to a
lighter result. Agency protects choice of behavior, not the ability to set a
discounted price for refusing a successful Expression.

A Character may accept an appropriate Effect or meaningful consequence while
refusing the demanded behavior. That consequence must answer the actual stakes
and successful Expression, not substitute an unrelated inconvenience. Agency
is not free mitigation or automatic removal of existing Load. Any actual
removal, conversion or substitution follows the applicable existing procedure
and Effect conservation; this boundary creates no automatic exchange rate.

Use existing Effects, Conditions, Access and Accepted Consequences, not a
separate social-resolution subsystem. Specific outcome values are not decided
by this boundary. Opposed resolution follows Independent Opposed Effects,
including the adopted special-result and comparative-placement rules.

### Deception and Player Knowledge

User-approved application, 2026-09-10. Establish the lie and stakes, then resolve
deception against what the Character knows and can perceive. Player knowledge
alone does not cancel a successful Expression. On success, the player accepts
the deception in portraying the Character or bears an appropriate Effect or
consequence adjudicated by the GM. Accepting information does not dictate the
Character's action: believing a bridge is safe does not require crossing it.

Success does not make false information objectively true. The Character's own
information remains relevant to possibility and opposition.

Accepted example: Doubt can be an appropriate Mental Condition when a convincing
false account unsettles the Character's confidence despite refusal to accept
it. Severity follows the resolved Effect; use normal Load and Function Bands
without duplicate Dissonance. Reliable verification, exposing the lie or another
appropriate counter may resolve the Condition; merely declaring disbelief does
not erase it. This is a context-dependent example, not the mandatory result
of every lie or an automatic exchange formula.

---

## Ordinary Personal-Equipment Modifier Range

Status:

```text
WORKING LOCK
INDIVIDUAL EQUIPMENT PLACEMENTS REMAIN PROVISIONAL
```

The current ordinary personal-equipment Expression-modifier range is:

```text
x1.00
x1.05
x1.10
x1.15
x1.20
x1.25
x1.30
```

The available increment is `x0.05`.

`x1.00` may represent equipment whose relevant contribution is permission,
delivery, form, Access, or another non-numerical function rather than an
Expression increase.

Campaign Profiles determine:

- which bands are present;
- what equipment occupies each band;
- whether adjacent bands are combined or omitted;
- and how equipment forms, ranges, availability, and restrictions operate in
  that setting.

A Campaign Profile does not need to populate every band.

The equipment modifier measures the item's relevant functional contribution
to the Expression. It does not simultaneously measure price, rarity,
availability, legality, enchantment, or Scale.

Equipment may separately supply a fictionally distinct:

- permission;
- delivery method or Effect form;
- Access relationship;
- range function;
- Effect Enhancement;
- Effect Mitigation;
- Conversion, Redirection, or Storage function;
- exposure or operational requirement;
- Infrastructure relationship;
- or Functional Scale.

The same contribution is not counted twice.

Large weapons, vehicles, artillery, siege engines, fortresses, and starships
do not extend the personal-equipment ladder indefinitely. Their relevant
functions may instead operate at a higher Scale.

An equipment modifier may equal another Lens modifier numerically without
becoming the same kind of Lens. Equipment, HOLT Axes, Scale, Skills, and other
Lenses retain their own permissions, persistence, applicability, and
exposures.

The following remain provisional:

```text
individual weapon and tool placements;
armor Mitigation values and coverage;
shield functions;
range bands;
equipment properties;
and Campaign Profile equipment catalogues.
```

### Range-Support References

Working decision, adopted 2026-09-12: retain +0.30 and +0.60 as provisional
reference benefits for applicable range Resonance. They are not mandatory
tiers, item assignments, prices, or an upper limit.

Apply the benefit only where the equipment or other Lens genuinely supports
the Expression. No universal Medium-range trigger is adopted. Range support
joins the existing Resonance pool; preserve normal Dissonance offsetting,
actual reach, Access, and the rule against counting the same contribution twice.
This does not change the ordinary personal-equipment modifier range.

The 25-meter doubling distance ladder remains a candidate. Conditional weapon
Functional Scale remains unadopted. These reference benefits do not settle
any particular weapon's expected long-distance performance.

Test record: `docs/tests/lens-range-support-strength-test-v0.1.md`.

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

### Combining Challenge Components

User-approved working rule, 2026-09-13: add the Difficulty bands assigned to
distinct challenge components of one attempted Expression, then apply the
existing Difficulty curve once to that total.

```text
Combined Difficulty = sum of distinct challenge-component Difficulty bands
Difficulty multiplier = 0.98 x 0.6^(Combined Difficulty - 1)
```

For example, assessed distance D3, area D1, and independent duration D1
combine to D5, using x0.127008 once. This illustrates aggregation, not adoption
of any particular distance, footprint, or elapsed-time threshold.

Count each actual demand once. Do not multiply separate Difficulty-curve
values for the components, add a generic manifestation D1 merely because a
roll occurs, or charge the same demand again as contextual Dissonance under
another description. Distinct environmental interference or other real
challenges retain their existing treatment. Difficulty remains separate from
the net contextual multiplier, Scale, and Function.

An absent demand adds no component: instantaneous application adds no duration
Difficulty, and a single-target application adds no area Difficulty. This does
not make the attempted action automatically successful or force a routine,
certain activity to require a roll. Automatic and Trivial remain outside the
benchmark curve; do not evaluate an empty component sum as a new D0 multiplier.

Preserve Access, declared scope, normal Effect allocation, opposition, and
action accounting. Natural continuation is not imposed independent duration;
active sustaining uses its existing accounting. This decision does not adopt
unresolved distance or area thresholds, a time increment, surplus-output
conversions, or a new ceiling or procedure beyond the current Difficulty horizon.

Supporting comparison: `../tests/lens-combined-scope-difficulty-test-v0.1.md`.

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

The generated Difficulty ladder retains its working D1 benchmark of 98.
Removing automatic failure on99 does not change the Difficulty curve or make
routine activities require rolls. Only01 and00 have special natural-result rules.

### Natural 01 Continuation

Status: User-approved distance-from-100 continuation and repeated-01 behavior.

On an initial natural 01 for a permitted attempt, roll an additional percentile
die and subtract its distance from 100 from the initial 1. This continuation
is available even when the Final Expression Rating is zero; the initial roll
need not already have succeeded. Permission remains required; Closed Access
does not receive a roll, and Automatic activities are not forced to roll.

```text
Each continuation contribution = 100 - continuation roll (00 counts as 100)
Adjusted roll = 1 - sum of continuation contributions
Successful margin = Final Expression Rating - adjusted roll
Effect Levels = 1 + complete ten-point steps of positive margin
```

Keep the Expression Rating, multipliers, and Scale unchanged. Negative adjusted
rolls are valid. For example, initial01 followed by06 gives 1 - 94 = -93.
Rating80 with initial01 and additional50 gives
adjusted roll -49, successful margin129, and 13 Effect Levels. Rating0 with
the same rolls gives margin49 and five Effect Levels.

Apply normal success and Effect handling, including matching mitigation,
conservation, applicability, and existing magnitude and permission boundaries.
Lower continuation rolls remain better. An additional01 subtracts99 and
continues rolling; repeat until02-00 ends the sequence. An additional00
subtracts zero and ends the sequence, not a separate failure procedure.
For example, 01,01,06 gives 1 - 99 - 94 = -192. No fixed continuation
count is imposed.

User-approved with independent-Effects adoption, 2026-09-10: natural01 guarantees
individual success for a permitted attempt. At Rating0,01 followed directly by00
leaves adjusted result1 and Margin -1, but still generates one baseline Effect
and no additional bands. This supersedes the former failure interpretation of
that edge case. Access is not manufactured, and success does not guarantee
comparative first place or an uncancelled opposed Effect.

This continuation is distinct from a paid reroll. The existing paid reroll
replaces the complete result, not selected dice or benefits, and retains any
purchased boost. It grants no further paid reroll if the replacement itself
produces a special result. Test evidence appears in
`../tests/lens-natural-01-continuation-test-v0.1.md` and the subsequent decision
in `../tests/lens-repeated-01-comparison-v0.1.md`.

### Percentile Failure Edges

Status: User-accepted working cumulative-roll model; downstream cases remain open.

User clarification, 2026-09-10: natural99 is an ordinary result, succeeding at
Final Rating99 or higher and failing below99. It uses normal Margin, Effects,
cancellation and comparative placement. The former automatic-failure exception
is removed.

Natural 00 (100) remains automatic failure, with an additional percentile roll
added to the initial 100.
This additional die increases the rolled total, not the Expression or its
multipliers. If the additional die is also 00, add its 100 and roll again.
Continue adding until a result of 01-99 ends the sequence. An additional 99
contributes 99 and ends the sequence; it does not begin a separate action.
No fixed number of continuations is imposed by this working rule.

For a required roll at Final Rating99 or higher,00 supplies a one-percent
individual failure chance before paid rerolls. This does not guarantee an
opposed win on the other results or change automatic, unrolled activities.

```text
Cumulative roll = initial 100 + all continuation rolls, including the final 01-99
Failure margin = cumulative roll - Final Expression Rating
Additional severity = one step per complete ten points of positive failure margin
```

Do not add an automatic baseline Effect to that severity. A zero or negative
failure margin generates no additional margin-based severity, but does not
turn natural 00 into success. For example, 00 followed by 50 gives 150:
Rating 80 fails with seven severity steps; Rating 160 still fails but generates
no additional margin-based Condition Load.

Working complication premise: treat the generated severity steps as
complication Effect Levels. The attempted Expression and its circumstances
determine the fictionally justified form, target, and recovery of the effect.
Apply existing Effect handling rather than a separate mishap subsystem.

Matching mitigation applies. Conservation applies: seven generated levels
cannot become seven Wounded levels and another seven Restrained levels.
Any justified distribution shares the original amount. Matching Condition
Load adds to existing Load and uses normal Function Bands, Access consequences,
and recovery. It is not automatically physical harm to the acting Character.

Magnitude and permission still constrain what can occur. A large margin alone
does not authorize an unrelated or otherwise unsupported consequence. Where
a complication is not meaningfully represented by numerical Effects, use an
appropriate fictional consequence rather than inventing an exchange rate
between Effect Levels and enemies, lost turns, or other story events. No
mandatory extra Load is imposed at zero severity. Automatic actions are not
forced to roll by this procedure.

This extra die is not the purchased replacement reroll. The adopted paid option
still replaces the complete result, retains the purchased boost, and may be
used only once per Expression before consequences are applied. Its exact
choice point is after the complete cumulative sequence is known. Discard the
entire original sequence and begin a new percentile result using the same
Expression, including its retained purchased boost. If the replacement begins
with 00, complete its own cumulative sequence normally. The replacement stands;
continuation dice do not grant another paid reroll. Active opposition uses the
Independent Opposed Effects procedure: zero successful output, separate own-
failure complications, and outcome-first comparative placement. Specific non-
Load consequence valuations remain unresolved. See
`../tests/lens-double-zero-cumulative-roll-test-v0.1.md`.

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

## Capacity, Conditions, Load, and Function Bands

Status:

```text
APPROVED WORKING ARCHITECTURE AND PLAYTEST CONTROLS
FINAL THIRD-CAPACITY NAME AND SETTING VALUES UNRESOLVED
```

Current architecture:

```text
Capacity is the limit.

Load is accumulated Condition pressure currently being borne.

Conditions are the named composition of Load.

Relevant Dissonance is the portion applying to the current Expression.
```

Each term has one job:

```text
Capacity
How much relevant Load a locus can bear before losing the affected function.

Load
Accumulated persistent Condition pressure currently being borne.

Condition
A named cause, severity, scope, and recovery or counter associated with part
of the Load.

Load Composition
The Conditions and levels creating current Load.

Relevant Dissonance
The portions of the ledger, plus any other current resistance, that pressure
the Expression being attempted.
```

Use one master Condition ledger. Each Condition records its name, levels,
relevant scope, and recovery or counter. Physical Load, Mental Load, the third
Capacity's Load, and Expression Dissonance are derived by querying that ledger.
Conditions are not copied into separate tracks.

Current ordinary-Character playtest baseline:

```text
Physical Capacity: 10 Condition Levels
Mental Capacity:   10 Condition Levels
Framework Capacity: 10 Condition Levels
```

Framework Capacity governs Leverage.

```text
A Character's Framework is the established material, relational,
institutional, reputational, and formative structure through which that
Character exercises Leverage.

Framework Capacity is the limit of relevant Condition pressure that Framework
can bear before Leverage function is lost or exhausted.
```

`Framework` names the complete structure. `Background` remains the Leverage
Derived Attribute describing the Character's established formative history.

Current Attribute relationships:

```text
Physical Capacity
Might
Mobility

Mental Capacity
Psyche
Influence

Framework Capacity
Leverage
```

Current Function Bands:

```text
Load 0-2  = 100%
Load 3-5  = 75%
Load 6-7  = 50%
Load 8-9  = 25%
Load 10+  = loss or exhaustion of the affected function
```

A Function Band applies to Expressions carried through an Attribute governed
by that Capacity.

Examples:

```text
Physical Load affects applicable Might- and Mobility-carried Expressions.

Mental Load affects applicable Psyche- and Influence-carried Expressions.

Framework Load affects Leverage-carried Expressions.
```

Framework Load does not reduce Medicine, sword use, cognition, personal
Influence, or other unrelated competence merely because the Character's
established position is under pressure.

Specific Conditions still determine particular Access consequences. `Assets
Frozen` may close or condition one Assets route. `License Suspended` may close
one Authority route. The shared Function Band does not partially close Access.

The same Condition Levels are not counted once through a Function Band and
again as separate numerical Dissonance in the same calculation. Independent
opposition or separate relevant Dissonance may still apply normally.

The obsolete Expression-Rating-versus-Load comparison is not used:

```text
Expression value > Load = Available
Expression value = Load = Strained
Expression value < Load = Suppressed
```

That procedure compared Load with an obsolete 1-10 Expression Rank and does
not fit current Expression Ratings.

---

## Functional Loss and Access

Status:

```text
WORKING PLAYTEST CONTROL
FINAL CAMPAIGN CONSEQUENCES UNRESOLVED
```

Reaching Load 10 means loss or exhaustion of the affected function under the
current test model. It does not automatically mean death, unconsciousness,
identity erasure, destruction of worldly truths, or permanent loss of an
Attribute.

The named Conditions and Campaign Profile determine what functional loss means
and which Concession, Accepted Consequence, surrender, escape, or recovery
options are available.

Access remains a separate structural question. Dissonance and Load do not
partially close Access. A specific Condition may create Condition or Closed
Access only when its fiction actually establishes that restriction.

---

## Recovery

Status:

```text
APPROVED WORKING DOCTRINE
CURRENT EFFECT PROCEDURE ACCEPTED FOR TESTING
FINAL TIME AND SETTING VALUES UNRESOLVED
```

```text
Recovery applies a relevant counter-Lens to matching Dissonance.
```

Recovery is not generic restoration by default.

It addresses the cause or continuing effect of interference.

A Recovery Expression must declare:

- which Condition or loss of function it answers;
- whether it stabilizes, removes, converts, or otherwise counters that
  Condition;
- what Access, tools, environment, and time it requires.

Current Effect procedure:

```text
Successful Recovery Expression
= 1 baseline matching recovery Effect Level
+ 1 additional matching recovery Effect Level for each complete 10 points of
  Successful Margin
```

The declared recovery function determines what those Effect Levels accomplish:

```text
Stabilization
Stops or reduces continuing generation, escalation, or another ongoing
consequence without automatically removing accumulated Condition Levels.

Removal
Removes matching Condition Levels.

Conversion
Changes matching Condition Levels into another named state while preserving
Effect Conservation.

Access Restoration
Answers the fictional cause closing or conditioning Access. It does not
automatically remove unrelated Load.
```

One Recovery attempt has no universal duration. The applicable method and
fiction may make one attempt a combat action, a minute of first aid, a surgical
procedure, a night of rest, a repair interval, or another appropriate span.

Ordinary medicine does not automatically erase Wounded levels during combat.
Rapid direct recovery requires a Lens that grants that permission, such as
regeneration, appropriate magic, advanced technology, or another setting-
specific capability.

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

Bleeding
First aid may stabilize it without removing the underlying Wounded levels.

Exhausted
Rest may remove matching Exhausted levels over an appropriate interval.

Damaged or Jammed equipment
Repair may remove matching equipment Conditions.
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
TWO HIGHER-ORDER AXIS CONTRIBUTIONS: APPROVED WORKING RULE
MULTIPLE-SOURCE OUTPUT: APPROVED WORKING RULE
MULTIPLE-SOURCE TARGETED OPPOSITION: APPROVED WORKING RULE
OTHER COMPOUND PROCEDURES REMAIN UNDER DEVELOPMENT
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

The two-Axis mean and multiple-Source procedure below address different scopes.
The mean governs two higher-order Axis modifiers within one Source's Expression;
it does not average complete Expressions from different characters. The
multiple-Source procedure combines independently earned contributions, not
additional Axis modifiers within one Source. No universal stacking ceiling or
general three-or-more-Axis formula follows from either rule.

### Multiple-Source Output

Working procedure accepted through the user's instruction to continue the
current recommendation, 2026-09-12. Each acting Source commits its actual action
and resolves its own contributing Expression. Declare the intended shared
result, each contribution's function, and necessary dependencies before rolling.
Apply ordinary uncertainty and action accounting; collaboration does not force
otherwise automatic activities to roll.

Calculate each complete Expression normally, including its applicable Lenses.
For rolled contributions, complete natural-result continuations and any allowed
paid replacement, then determine that Source's successful Effects. Failure
supplies no successful Effects; any applicable complication remains separate.

Compatible earned Effects add when they genuinely reinforce one shared result
within the applicable frame. Four earned Effects and three earned Effects can
supply seven toward that result. Two independently earned baseline Effects are
two Effects, not duplicate copies of one success. No additional baseline or
automatic synergy bonus is awarded to their sum.

Contributions that perform different functions retain those functions. Fire
may supply Burning while Wind supplies delivery, direction, or expanded area.
Delivery Effects do not automatically become more Burning. Cooperation alone
does not authorize full Burning against every target; a permitted area effect
applies its resolved strength under Permitted Area Application below.
Preserve each Effect's form,
target, time, and traceable allocation. Specific complementary-output valuations
remain unresolved; this rule establishes no universal Effects-to-distance,
area, or duration conversion.

Apply the approved targeted-opposition, connection-interference, dependency,
residual-effect, and mitigation rules. A successful contribution can remain
independently useful when the combined objective fails; a successful dependent
contribution may be unable to function if its necessary delivery fails.
Neither individual success nor special-result success guarantees the whole
combined outcome.

Do not average whole characters, add their Final Ratings, or make an extra team
roll. Do not grant permission, change Scale, or merge unrelated attacks merely
because multiple characters participate. Independently earned output is not
duplicated output, and conservation does not erase the second Source's work.

Supporting record: `../tests/lens-multiple-source-earned-output-test-v0.1.md`.

#### Declared Delivery

User-approved working rule, 2026-09-12: one surviving delivery Effect
accomplishes the declared, permitted delivery while its necessary means remain.
Assess the actual attempted delivery, including applicable range Difficulty,
before rolling. Resolve normal opposition and cancellation; additional delivery
Effects can survive more matching cancellation without automatically adding
distance or harm. Zero surviving delivery Effects cannot carry out that delivery.

Actual disruption may still prevent delivery by removing necessary means or
Access, regardless of a numerical remainder. Preserve viable residuals without
copying the delivered output locally and remotely. This fixed-objective
procedure does not replace an existing variable-output rule or establish a
universal Effects-to-distance, area, or duration conversion. Range Difficulty
is not paid off afterward by subtracting generated delivery Effects from it.

#### Surplus Distance Extension

User-approved working conversion, 2026-09-14: each additional Effect allocated
to permitted reach extension adds 20% of the original declared distance.

```text
Resulting reach = original declared distance x (1 + 0.20 x Effects allocated)
```

Growth does not compound or restart from the enlarged reach. A base declaration
of 25 increments reaches 30 with one additional Effect or 50 with five. Retain
the successful manifestation and count each allocated Effect once; Effects spent
on extension cannot also supply impact or another output. Other unspent Effects
retain their narratively and mechanically supported uses.

This is a variable-reach option alongside direct declared delivery. Keep the
actual intended target and any reliance on surplus to reach it explicit. Assess
the declared base reach and other actual challenge components before rolling;
extension changes resulting reach, not an already assessed Difficulty. If the
result falls short, it cannot affect the intended remote target. Preserve any
genuinely useful shorter result without granting a substitute target or copying
output locally and remotely.

Access, actual carrying means, defined reach limits, and ordinary opposition
remain necessary. A defense against arriving impact does not automatically
shorten the completed travel; an actual intervention against the carrier may
prevent delivery according to its scope and timing. No universal opposition
order or second delivery roll is introduced for an attack whose travel is
already part of its Expression. Dependent contributions still need their means
of arrival, and compatible contributions follow existing shared accounting.

No universal growth ceiling, range lookup, physical increment size, extra attack,
or character movement allowance is adopted here. Profile/Lens references remain
applicable; this conversion neither expands missing permission nor removes a
defined physical or extraordinary limitation.

Supporting comparison: `../tests/lens-distance-twenty-percent-extension-test-v0.1.md`.

#### Permitted Area Application

User-confirmed declared-area rule, 2026-09-13: a successful permitted area
declaration establishes the declared footprint whose Difficulty was resolved,
without an additional area-entry Effect expenditure. Success does not create
an extra Effect award. Preserve resolved strength, individual opposition and
protection, and actual interventions or disruption of the effect.

Establishing the declared footprint is separate from extending it afterward.
Any Effects committed to additional area cannot also be spent on harm or
another contribution. This decision does not adopt a surplus-growth formula,
unlimited expansion, or unresolved area Difficulty thresholds.

User-approved working rule, 2026-09-12: let a permitted area effect apply its
resolved strength to each genuinely exposed target. Area establishes where
the effect can apply; the relevant effect output determines its strength
there. Effects committed to area are not also counted as additional harm.
The same procedure applies to solo and multiple-Source Expressions.

Establish the actual footprint, effect form, and any necessary dependencies.
Resolve applicable interventions against the whole effect or its components
at their proper timing. Each genuinely exposed target then faces the strength
that actually reaches them, subject to their own feasible opposition and
applicable protection. One target's personal defense does not reduce the
effect for other targets. A response that can actually suppress, redirect, or
otherwise alter the whole effect can change all dependent applications within
its scope. Preserve specific limits and ordinary action accounting.

For example, a permitted freezing mist with two harm Effects exposes three
targets whose personal defenses supply zero, one, and two Effects. Before any
distinct mitigation, their remaining harm is two, one, and zero. The area
contribution is not added to those harm amounts. No new success baseline or
post-roll equipment multiplier is awarded to any target application.

Actual exposure governs application. Being included on a map does not bypass
Access, shielding, or other relevant facts, and this rule does not grant free
selective exclusion. It does not manufacture area permission for an otherwise
single-target effect. No additional delivery or attack roll is required solely
because multiple targets are exposed; legitimate opposition still resolves.

Conservation applies to each authorized application, not by dividing one harm
budget among all occupants. Do not apply and also convert, redirect, or store
the same local Effect. Area permission alone does not grant repeated applications
over time; use Hazardous Exposure Scope below where actual danger continues
or returns. No universal duration, growth rate, Difficulty ladder, or unlimited
expansion is granted. Existing viable residuals and dependencies apply.

Supporting comparison: `../tests/lens-area-occupant-application-test-v0.1.md`.

#### Hazardous Exposure Scope

User-approved working rule, 2026-09-12: resolve hazardous exposure at an agreed
meaningful scope. Further applications require actual continuing or renewed
danger beyond what that resolution covered. Establish the activity or stretch
of exposure before rolling, using the same Resolution Scope and Repeated
Attempts principle that governs other Expressions.

Neither round passage nor continued occupancy automatically produces another
application. A previously resolved exposure also grants no once-per-target
immunity. Remaining longer, encountering increased danger, or undertaking
another hazardous activity can exceed the resolved scope. Do not subdivide
an already-resolved exposure afterward to multiply harm, or expand its scope
afterward to avoid genuinely further exposure.

For example, resolving a crossing through dangerous mist can cover that
crossing. Narrating it over several turns does not itself add harm or defensive
retries. Choosing afterward to stay and work on a valve can establish further
dangerous exposure. This is not a universal one-roll-per-crossing rule; the
actual hazard and agreed scope determine what the resolution covers.

A later entrant faces an existing hazard if genuinely exposed. A person entering
after a brief burst has ended is not exposed to that past burst. Re-entry can
be a new exposure where the danger warrants it, but crossing a map boundary
alone is neither an automatic damage trigger nor a reset of protection.
Preserve actual personal protection, explicit limits, and interventions within
their true scope. Resolve each legitimate application normally; exposure is
not automatic unopposed harm.

Ending or escaping a hazard stops further exposure where it actually removes
the danger. Conditions already imposed remain until addressed under the normal
Condition and recovery rules. Merely retaining an existing Condition does not
award its original harm again.

The hazard must actually persist or recur through its established means.
This procedure grants no universal duration, maintenance cost, free repeated
attack, or new hazard Rating. Retain existing active/passive opposition and
ordinary action accounting. Duration and any necessary sustaining activity
remain properties to establish, not benefits supplied by area alone.

Supporting comparison: `../tests/lens-area-persistence-exposure-comparison-v0.1.md`.

#### Active Sustaining

User-approved working accounting, 2026-09-12: count substantial active
sustaining through ordinary action accounting. Do not charge an action merely
because an effect persists or depends on something remaining available.
Establish what the character must actually keep doing from the permitted means
and declared activity; effortless sustaining is not granted by description alone.

Released smoke may continue independently. An autonomous projector may need
power without occupying its operator's action. Continuously exerting force to
hold a gate or deliberately steering a barrier is an ongoing activity. When
that substantial support occupies the ordinary action, a separate attack uses
existing additional-action options and reduced-capability handling where
feasible. No new sustaining divisor or blanket prohibition is introduced.

Preserve compatible ordinary accompanying movement. Movement that removes
necessary support can end that support, but sustaining is not an automatic
movement restriction. Steering already integral to the sustaining activity is
not charged again as a separate activity. Use existing compound rules where
one coherent permitted Expression genuinely combines functions; do not merge
independent full activities merely to avoid their action costs.

Automatic sustaining can still occupy an action. Roll only for actual
uncertainty or opposition; no universal maintenance or concentration roll is
required. Further action, divided effort, or changing conditions may create
genuine uncertainty without forcing a reroll of already-completed work.

Interruption acts through its actual consequences. A minor hit or a feasible
open defensive reaction does not automatically end support. Loss of required
conscious activity, power, position, or connection matters where it actually
removes necessary means. Independently continuing effects and viable residuals
remain under the existing dependency rules. A reaction that actually releases
necessary support may end it even though that reaction is ordinarily available.

Preserve committed-action accounting: interruption does not refund a begun
action, and resuming the same still-possible unfinished activity is not charged
again. Recreating an effect that actually ended is new work. Neither sustaining
nor changing action allocation retroactively recalculates completed Effects
or automatically generates new Effects each round. Further harmful exposure
follows Hazardous Exposure Scope, not a maintenance reward.

This rule creates no action-per-effect tax, universal duration, duration price,
or new upkeep pool. Explicit capability requirements and limits remain relevant.

Supporting comparison: `../tests/lens-sustaining-action-accounting-comparison-v0.1.md`.

#### Natural Continuation And Imposed Persistence

User-confirmed distinction, 2026-09-13: assess what the power must establish or
continue supplying, not elapsed time alone. A normally burning fire can continue
through fuel and conditions without its igniter maintaining it or purchasing
its natural lifetime. Keeping that fire burning so that it spreads can instead
be an actual supporting contribution when the character is supplying something
the process needs. Merely describing a natural consequence as intended does
not make it an extra power use.

User-confirmed application, 2026-09-15: identify what part of the situation
depends on the continuing effect. Raising existing ground into a stable ridge
leaves reshaped terrain; its ordinary persistence does not require purchasing
indefinite duration. Holding the same earth suspended requires continuing support.
Leaving it suspended without active maintenance instead requires the manifestation
to establish independent persistence. A creature's presence and an extraordinary
alliance or binding may likewise have different dependencies: ending the bond
need not end the creature's existence or presence. Resolve what actually ends,
not everything associated with the original Expression. These are applications
of the fiction, not exclusive classifications by action name or source material.

When a manifestation must persist without active maintenance because the power
establishes that persistence, the intended independent duration contributes
to its Difficulty. Longer imposed independent persistence is more demanding
than a brief manifestation, other requirements held equal. Access must permit
the result. Indefinite persistence means no inherent expiration, not immunity
to destruction or disruption. Finite duration bands are defined below;
indefinite-persistence Difficulty remains unresolved.

User direction, 2026-09-15: do not add a separate universal permanence band at
present. The existing finite ladder covers very long spans in the applicable
Profile/Lens increments. This does not make finite spans literally indefinite,
grant missing Access, or charge natural lasting consequences for persistence.
Any future special no-expiration treatment requires a concrete application and
separate decision, not automatic placement at D7 or D8.

Maintaining an existing power use can be a contribution within one coherent
compound Expression while another function is expressed. Use the existing
compound rules where applicable, rather than automatically declaring every
such case two separate actions. This does not merge independent full attacks.
The approved two-required-Axis case uses their mean and one shared Effect
budget; do not invent an additional split-concentration penalty or presume
that every maintenance requirement introduces a second Axis.

#### Duration Time Reference

User-approved working boundary, 2026-09-13: the Campaign Profile supplies the
default time increment for duration. An applicable Lens may establish a different
increment within its defined scope. That reference follows the covered
manifestation across scenes; narrative pacing alone does not change its duration
Difficulty or the expiration established by a completed resolution.

The same permitted effect for the same elapsed duration retains its temporal
reference whether described during travel, conversation, or combat. Actual
changes in requirements, opposition, or necessary means remain relevant through
the existing rules. A scene transition alone neither requires recasting nor
grants extension. Do not invent a travel-only limitation to remove an established
capability during combat, or extend a Lens departure beyond its actual scope.

This boundary preserves Access, ordinary action accounting, independent
persistence, active sustaining, natural continuation, and actual disruption.
A longer increment is a capability benefit, not merely a display conversion.
This boundary creates no new temporal rating or automatic conversion from
overall Scale Rank. Increment values and package prices remain unresolved.
The finite progression and surplus-duration conversion below are adopted
separately; indefinite persistence remains unresolved.

Supporting comparison: `../tests/lens-profile-duration-departures-test-v0.1.md`.

#### Finite Duration Progression

User-approved working progression, 2026-09-13: use tenfold time increments for
finite independent duration. D1 references one applicable time increment;
D2 references ten; D3 references one hundred; D4 references one thousand.
Each further duration step multiplies the preceding reference by ten.

The duration reference at step D is the applicable time increment multiplied
by 10^(D - 1). The Profile or applicable Lens supplies that time increment under
Duration Time Reference; no particular number of seconds, hours, or years is
adopted here. Instantaneous application remains separate, with no added duration
modifier rather than automatic manifestation success.

This progression does not change the existing Difficulty multiplier curve,
convert surplus Effects into duration, or make any finite duration indefinite.
Distinct challenge bands combine under Combining Challenge Components above.
Starting time references, time rounding, indefinite persistence, and package
prices remain unresolved. Initial duration-band lookup is adopted below.

User-approved initial lookup, 2026-09-14: use the smallest whole duration band
whose reference covers the declared finite span. A positive duration up to one
applicable increment uses D1; more than one through ten uses D2; more than ten
through one hundred uses D3; continue the same tenfold pattern. Exact upper
boundaries stay in their covering band. Do not interpolate fractional bands.
Instantaneous application remains separate, with no added duration component.

The lookup does not round the declared lifetime up: six increments uses D2 but
still declares six, not ten. Surplus extension below uses that original six as
its reference. Apply the lookup to the initial declaration, not retroactively
to recost duration already purchased through resolved surplus Effects.

Supporting comparisons: `../tests/lens-duration-three-ladders-test-v0.1.md` and
`../tests/lens-duration-frame-models-test-v0.1.md`.

#### Surplus Duration Extension

User-approved working conversion, 2026-09-14: each additional Effect allocated
to permitted duration extension adds 20% of the original declared duration.

```text
Resulting duration = original declared duration x (1 + 0.20 x Effects allocated)
```

The reference does not compound or reset to the extended duration. For an
original ten-minute declaration, one additional Effect gives twelve minutes;
two give fourteen; five give twenty. These times illustrate the conversion,
not a Profile increment or Difficulty assignment. Forty-five additional Effects
give ten times the original duration, not five Effects per duration band.

Allocate additional Effects once, without counting the same Effect again toward
another output. Remaining Effects can support other narratively and mechanically
appropriate outcomes; declaring duration does not restrict all output to time.
This conversion introduces no extra duration-entry charge or success award.

Access and the manifestation's actual means must support the extended span.
The conversion neither grants persistence to an instantaneous result nor makes
a finite duration indefinite. Independently persisting effects retain their
actual disruption conditions. Extending time does not remove an active
sustaining requirement or pay for substantial sustaining actions. Natural
continuation remains governed by its supporting facts, not a new duration tax.

Preserve the applicable Profile/Lens time increment across scenes. No universal
growth ceiling is imposed. Starting time references, time rounding, and indefinite
persistence remain unresolved. Initial declarations use the covering-band lookup
above; extension does not reset their original duration reference.

Supporting comparison: `../tests/lens-duration-twenty-percent-extension-test-v0.1.md`.

#### Area Growth Reference

User-approved measurement, 2026-09-12: measure area growth by the total covered
footprint, not radius, diameter, or the count of map cells classified as affected.
Keep the original declared footprint's covered area as the reference for growth;
do not feed affected-cell counts back into expansion. Determine the resulting
footprint, then apply the half-hex threshold for map inclusion.

This establishes the measurement and order of translation, not a new growth
percentage, area Difficulty ladder, or permission to use arbitrary shapes.
Existing Effect allocation, applicable opposition, and actual means still govern.

#### Surplus Area Extension

User-confirmed working conversion, 2026-09-15: each additional Effect allocated
to permitted area growth adds 20% of the original declared covered footprint.

```text
Resulting covered area = original declared covered area x (1 + 0.20 x Effects allocated)
```

Growth does not compound, restart from the enlarged area, or operate on radius.
Five additional Effects double the original covered area. Success establishes
the permitted declared footprint under Permitted Area Application; no additional
entry charge or extra success Effect is introduced. Count each growth Effect
once; remaining Effects may support other narratively and mechanically
appropriate outcomes rather than being confined to the initially stated purpose.

Preserve Access, actual means, Effect accounting, individual opposition,
protection, and genuinely exposed targets. Determine the resulting footprint
before applying the existing half-hex coverage rule. Map inclusion does not feed
back into growth or grant automatic harm. No universal growth ceiling, selective
exclusion permission, area Difficulty thresholds, or physical increment size is
adopted by this conversion.

Supporting comparison: `../tests/lens-covered-area-twenty-percent-growth-test-v0.1.md`.

#### Hex Coverage Threshold

User-approved map interpretation, 2026-09-12: a hex is affected when at least
50% of its actual area is covered by the effect's footprint. A hex with less
than 50% coverage is unaffected. Exactly half counts. This assesses each hex's
geometric overlap; it is not rounding a fractional total number of units.

The threshold determines map inclusion, not automatic successful harm or a new
Effect award. Existing Access, opposition, protection, and Effect conservation
still apply. It does not adopt an area-growth percentage, define the area
Difficulty ladder, or change distance. The separately adopted growth conversion
is recorded under Surplus Area Extension above.

### Multiple-Source Targeted Opposition

User-approved continuation, 2026-09-11: resolve opposition against what the
response actually addresses, then follow the established dependencies.

A response may address the combined result, a contributing Expression, or a
necessary connecting Lens when its means, Access, and timing permit that target.
Cancel applicable output at that target through ordinary opposed resolution.
Reassess the combined result and preserve independently viable residuals.
Do not choose a different target after seeing the rolls merely to improve the
numerical outcome.

A defense addressing one genuine combined result uses its earned output once;
it is not copied against each contributing Source. A response that can address
only one component does not automatically cancel unrelated components or move
its unused cancellation onto them. Separate activities remain separate exchanges;
calling them teamwork does not grant a favorable exchange boundary or a new
universal limit on defensive responses.

User-approved bounded cancellation allocation, 2026-09-12: apply cancellation
where the declared defensive method actually acts. Where that method permits
a genuine choice, the defender distributes earned cancellation among the
contributions it can actually oppose. If distribution makes no difference to
the outcome, resolve the total without requiring allocation.

Establish the response's method, target, and scope before rolling. Allocation
during resolution does not permit changing that target or method after seeing
the results. Follow any distribution already determined by the fiction, spend
each defensive Effect once, and do not transfer unused cancellation outside
the response's actual scope. Preserve surviving hit, form, and target identity
where relevant to protection or consequences. Do not re-add equipment or create
new mitigation. This allocation rule does not establish a universal single-
defense limit or adopt predeclaration alone as sufficient to combine attacks.

Supporting record: `../tests/lens-combined-defense-allocation-test-v0.1.md`.

User-approved combined-assault defensive resolution, 2026-09-12: treat a
genuine combined assault as one incoming event for defensive resolution. The
defender resolves one feasible defensive Expression against that event. Several
feasible defensive motions may serve that one response, producing one pool of
cancellation rather than a separate full defense against each contributor.
Use existing Expression construction and compound rules; multiple motions do
not automatically make incompatible methods one valid Expression.

Apply bounded cancellation within the response's actual declared scope. A
response reaching only part of the assault cancels only that part and does not
grant another free defensive roll against a different component of the same
incoming event. Separate incoming attacks retain their ordinary responses;
this is not a one-defense-per-round limit. Preserve actual protection scope,
normal action costs, and distinct legitimate interventions with their existing
timing. Do not add a multiple-defense divisor or re-add equipment.

Mere simultaneous timing, matching targets, or a declaration of teamwork does
not by itself establish a genuine combined assault. Its actual shared
construction must justify the incoming-event boundary before rolling. Each
acting contributor still resolves its own full contributing Expression; this
rule neither averages their Ratings nor replaces their rolls with one attack
roll. It sets the defender's resolution unit.

User-approved combined-assault entry guidance, 2026-09-12: use feasible
coordinated execution to distinguish a genuine combined assault from separate
attacks. Before resolution, establish what the participants actually do
together to make their contributions one coordinated application, including
necessary timing, means, functions, and action commitments. A shared target
or simultaneous timing alone is insufficient.

Physical fusion and success by every contributor are not required. Independently
viable residual contributions remain when another fails; genuine dependencies
still govern contributions that cannot function alone. Apply the same entry
guidance to ordinary weapons and extraordinary means. Preserve distinct
complementary functions rather than automatically pooling all output as harm.
No additional coordination roll, surcharge, or retrospective pooling is
introduced by this entry guidance.

Supporting comparison: `../tests/lens-combined-assault-entry-comparison-v0.1.md`.

Supporting record: `../tests/lens-combined-limited-defense-test-v0.1.md`.

User-approved partial-scope defensive surplus, 2026-09-12: determine surplus
against the offensive output the declared defensive Expression actually
opposes. A successfully opposed portion may support at most one counter-effect
for the resolved combined exchange even while another contribution gets through,
provided the defensive act itself supports the consequence and its necessary
means and timing remain. Preserve all uncancelled incoming Effects elsewhere.

Do not narrow the response's scope after rolling or deliberately withhold
cancellation from reachable offensive output to manufacture surplus. A counter
is not an unrelated attack, another defensive roll, or a retroactive cancellation
of already-resolved incoming output. Follow actual consequence timing and
legitimate prior interruptions; neither incoming harm nor the counter receives
an invented priority. Matching mitigation can prevent the counter without
refunding its output. Mitigation does not create defensive surplus.

Supporting record: `../tests/lens-partial-scope-counter-test-v0.1.md`.

Preventing a necessary delivery can stop dependent output from reaching its
target without cancelling that output's independently viable local form.
Breaking a connecting Lens does not automatically suppress either Source.
Partial disruption and mere hits do not automatically cancel the combination;
the actual Effects and changed circumstances determine what remains possible.
Ending a Source after release does not retroactively erase an independently
continuing projectile or completed consequence. Ongoing maintenance remains
necessary where the established effect actually requires it.

Use ordinary action accounting, open defensive reactions, held-response timing,
and Delay. Attacking a Source is not automatically a free defensive reaction.
Committed actions are not refunded by interruption, and resuming a still-possible
activity is not charged again. An intended participant whose action has not
begun retains the ordinary options for an unused action. Defensive-surplus
counter-effects remain limited to one per resolved exchange, with fictional
applicability and matching mitigation; no counter is awarded per contributor
inside one exchange merely because several Sources participated.

User-approved connection-interference guidance, 2026-09-11: identify the actual
actor, effect, object, or circumstance maintaining the connection and use its
existing active or passive opposition. Deliberate resistance by an actor uses
the applicable Expression; non-acting resistance follows the ordinary passive
procedure. The method must actually interfere with the established connection.
Noise does not automatically disrupt a non-auditory link, for example.

Do not add a universal connection Rating, substitute the weakest contributor,
or require a coordination roll merely because several Sources combine actions.
Where the very contribution being opposed already has resolved output, do not
roll again for the same resistance under another name. Distinct interventions
still resolve normally with their ordinary action and timing requirements.
Case-specific resistance may need ordinary assessment, but it is not a separate
team-connection statistic.

Multiple-Source output follows the working procedure above. Partial
complementary-output valuation remains unresolved.
Mitigation follows the actual effect application and protection's defined
scope under Effect Resolution and Conservation, not contributor count. No
connection track or automatic one-Effect severance rule is established here.

Supporting record: `../tests/lens-multiple-source-opposition-test-v0.1.md`.

### Two Higher-Order Axis Contributions

Status:

```text
APPROVED WORKING RULE
```

A single manifestation uses its applicable Axis.

When one Expression genuinely requires two higher-order Axis contributions,
use their average, whether they belong to the same HOLT or different HOLTs
(including Domains). Access must permit both functions, and each contribution
must do distinct work. Combining them expands the available outcome without
automatically duplicating Effect Levels.

```text
Combined higher-order modifier = (Axis modifier A + Axis modifier B) / 2
```

Average the applicable Axis modifiers, not the whole
Attribute, Task, Field, and other Expression layers. A single manifestation
still uses its applicable Axis without averaging in unrelated contributions.

Example:

```text
Sea → Movement Rank 4: x1.4 in this example
Sea → Control Rank 2: x1.2 in this example

Ride a wave:
Movement Rank 4 applies.

Ride the wave while using it to attack:
Movement and Control are both required.
Combined higher-order modifier = (1.4 + 1.2) / 2 = x1.3.
```

Unequal modifiers produce a moderated reduction from the stronger solo
contribution. Equal modifiers retain their value; do not add a splitting-focus
penalty to cancel the benefit of broader development. Earned Effect Levels
remain one shared budget, not a full allocation for each function.

An Open, unranked required Axis contributes x1.0 to the mean. A Closed Axis or
an unmet Access Condition prevents the combined Expression; Access is never
averaged open. Scale is not averaged either.

Preserve narrative dependencies and partial counters. Countering one function
may leave an independent residual Expression; losing a necessary delivery
function may prevent dependent effects. A counter does not retroactively undo
completed consequences merely by ending their source.

This working rule supersedes the lowest-required-Axis rule for the two-Axis
case. It does not settle formulas for three or more contributors, mixed
non-HOLT contributions, team rolls, or Sorcery's initial-access procedure.

### Compound HOLTs

Status:

```text
TWO AXIS CONTRIBUTIONS: USE THE APPROVED MEAN
OTHER COMPOUND QUESTIONS REMAIN OPEN
```

Two required higher-order Axis contributions use the same arithmetic mean
whether they belong to one HOLT or different HOLTs. Thematic dependencies and
counterable relationships still follow what each contribution actually does.

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

- formulas for three or more contributors, mixed non-HOLT contributions, and
  team rolls;
- when a secondary HOLT contributes a modifier rather than only permission or
  effect;
- details of effect allocation for compound cases beyond the approved
  two-contribution rule and its shared Effect budget;
- how often contextual alignment creates Resonance;
- how countering one HOLT changes the residual Expression;
- case-specific partial-disruption valuation for connecting relationships;
  multiple-Source connection interference uses existing active or passive
  opposition as described above, not a universal connection Rating.

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

LENS distinguishes the setting-facing definition of higher-order capability
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

### Stable Character Lenses

Status:

```text
APPROVED WORKING DOCTRINE
BENEFITS/DRAWBACKS FRAMEWORK ADOPTED; CATALOGUE VALUATIONS PROVISIONAL
```

A character may possess stable personal, social, relational, resource,
commitment, and vulnerability Lenses permitted by the campaign profile.

A stable character Lens is not automatically a benefit or a flaw. Its current
relationship to the declared Expression and fiction determines whether it
supplies:

- Resonance;
- Dissonance;
- Access;
- permission;
- limitation;
- relationship;
- resource;
- vulnerability;
- consequence.

```text
A stable character Lens is not automatically Resonance or Dissonance.

It becomes Resonance or Dissonance through its relationship with the current
Expression and fiction.
```

One stable character Lens may contain several distinct functions.

Example:

```text
Famous Champion

May support public leadership and recognition.
May grant Access to supporters or institutions.
May resist disguise, anonymity, or covert travel.
May expose the Character to identification by enemies.
```

Predominantly beneficial or harmful Lenses remain possible. The system does
not force every feature to possess an artificial opposite.

When a campaign assigns cost or compensation, the complete Lens is valued as
one package. A character may not purchase its benefits and then claim the
same Lens's naturally connected drawbacks again as separate compensation.

Stable character Lenses do not replace HOLT limitations. They provide the
broader character-facing location for persistent identity, relationship,
resource, commitment, and vulnerability Lenses that are not confined to one
HOLT structure.

### Benefits and Drawbacks

Status: USER-APPROVED WORKING CORE RULES, 2026-09-17. The framework is adopted;
individual catalogue valuations remain provisional. HOLD/species-package
balancing, human provisions, and variants remain deferred.

A benefit is a defined useful provision, not a separate advantage-rank track.
It may supply permission, relevant fixed Resonance, or another explicitly
defined function of a stable character Lens. A drawback is a defined burden
with meaningful consequences under stated circumstances. Start with the actual
fiction and provision rather than assuming every benefit is permission-only
or every drawback is a universal numerical penalty.

#### Starting Compensation and Funding

The maximum total starting drawback compensation is 40 points. It is a ceiling
on actual awards, not a grant, mandatory selection, or limit on drawback count.
Thirty and sixty remain comparison candidates, not alternate adopted defaults.
Ordinary lack of purchased training is not a compensated drawback.

The ordinary flexible starting allowance remains 125 points. Flexible points
and actual awarded compensation can fund ordinary development or approved
benefits. Ordinary development includes Attributes, Derived Attributes, Tasks,
Fields, Specialties, Precision, and eligible ordinary languages at their
existing prices. Preserve protected funding, prerequisites, Rank ceilings,
parent caps, and setting-specific HOLT/Axis eligibility.

```text
Flexible spending capacity before purchases = 125 + actual awarded compensation
Actual total starting drawback compensation cannot exceed 40.
```

Thirty-five points awarded gives 160, not 165. Only forty actually awarded
reaches 165. A larger assessed burden does not automatically raise the ceiling.
Compensation already consumed by provisions inside a package is not also
available outside it. A comparative HOLD package value is not another allowance;
no species-package point grant follows from this framework.

#### Agreed Impact and Valuation

The player identifies meaningful Tasks or Fields where a drawback is guaranteed
to apply under its stated circumstances, and the GM agrees on actual impact
and compensation. These are guaranteed applications, not exclusive boundaries.
Other applications remain possible where the fiction supports the same burden.
Naming a Field does not penalize every use: impaired fine hand control can
interfere with delicate repair without impairing observation of the damage.

Five points is a working anchor for a narrow, genuine drawback, not a universal
price for 20% Dissonance. Consider severity, breadth, frequency, actual means
of countering the burden, and meaningful consequences in the intended play.
There is no automatic points-per-Field formula, mandatory application count,
or numerical formula multiplying those valuation factors. Overlapping labels
and irrelevant activities do not justify more compensation.

Review the finished character's actual equipment, powers, and alternative means.
A burden effectively answered by the build is not valued as though unanswered.
A costly alternative or legitimate preparation is not automatically permanent
removal. Do not invent extra burdens to preserve a discount. Assess distinct
consequences once: an inability already encompassed by another is not another
award, and a restriction already discounting an ability cannot also compensate
the same burden again. Distinct burdens may both apply in the same situation.

#### Benefit Scope and Existing Rules

A defined permission can use existing character capability without creating
another ranked layer. Personal flight, for example, can use applicable Movement
and the agreed travel frame without separate Flight ranks. Permission does not
automatically provide Resonance, Axis ranks, or additional Scale. Numerical
Resonance does not independently grant missing permission.

Calling something a benefit does not evade a Profile's restrictions on
extraordinary capabilities or funding. An approved narrow permission does not
grant unrelated manifestations, general HOLT Access, or further Axes. Do not
charge broad HOLT Access and a benefit again for the same permission; restricted
HOLT prices may inform comparison without making every benefit a HOLT.

Fixed Resonance and relevant Dissonance use the existing contextual pool:
max(0, 1 + total Resonance - total Dissonance). A +0.20 contribution is not an
independent x1.20 multiplier. Overlapping benefits do not automatically stack
the same contribution; Sea Legs and Natural Balance, for example, do not
automatically supply +0.40 for one balance contribution. Genuinely distinct
functions may still combine. Do not charge again for existing language or
other provisions already held or granted.

#### Acquisition, Buyoff, and Actual Compensation

During play, narratively eligible, GM-approved benefits may be purchased at
their creation prices. Explicit GM story grants need no additional point
charge; encountering an opportunity does not automatically constitute a grant.
Points alone do not authorize a fictional change.

Use existing narrative eligibility and buyoff logic for drawback removal, not
a separate removal subsystem. Ordinary paid buyoff uses the actual compensation
being bought off as its basis. Narratively supported partial easing uses the
agreed difference, crediting prior payments, rather than repeatedly charging
the original amount. Each easing and full removal must make narrative sense.

Record actual compensation against the drawback or agreed combined burden,
not merely a theoretical value. When the cap reduces the total award, the GM
and player record how that actual credit is attributed. If burdens cannot be
valued separately, retain their agreed relationship for later adjudication.
Preserve prior buyoff payments and identify what credited burden a partial
easing relieves. Do not charge for credit never received, repay the same credit
twice, or silently redistribute it after removal.

For example, two drawbacks assessed at thirty each cannot award sixty under
the forty-point ceiling. If the agreed record credits twenty to each, ordinary
full buyoff of one uses twenty, not thirty. That is an illustrative allocation,
not a required equal split. Existing discounts consumed inside another purchase
retain their own paid basis; the same burden earns no second offset.

An explicit GM story award may provide removal without another point charge.
Narrative possibility alone does not make every removal a free grant. Temporary
countermeasures do not equal permanent removal. Later injuries, lost benefits,
or unwanted limitations award no automatic points or refunds and create no
automatic debt. Legacy conversion remains unresolved, not silently inferred.

#### Provisional Examples and Deferred Work

Personal Flight at ten points remains a working test price for its defined
personal flight/hover provision, existing Movement, ordinary carrying limits,
and no external movement control. Night Vision, Water Breathing, Natural
Swimming, their combined provision, and fixed Resonance prices in the source
package remain proposed valuations, not universal entries. The larger sensory
and mobility drawback figures remain considerations, not adopted prices.

Existing HOLT discounts are comparison tools, not automatic reductions for
naming restrictions. Narrow scope alone does not establish a discount, and
extreme reductions still require review. The compensation ceiling is not a
ceiling on benefit prices. Compare benefits with already-developed characters
and relevant training alternatives, not just neutral untrained Expressions.

HOLD/species balancing, human provisions, and package variants remain parked.
Chosen bonds, convictions, and duties remain with the adopted Aspect treatment
for this initial comparison. No flaw-funded Aspect enhancement or deferred
temporary Aspect spending is adopted here.

The character record needs the provision or burden, circumstances and guaranteed
applications, approved permission/funding eligibility, agreed price or actual
compensation, and prior buyoff payments or explicit story-grant status as
applicable. This is information for sheets and the future app, not a new currency
or authorization to implement an interface.

The source package is `../design/lens-benefits-and-drawbacks-working-package-v0.1.md`;
the main review preserves numerical comparisons without treating them as full
encounter validation. Existing character records are not automatically repriced
or populated. Other development prices, session awards, protected allocations,
and adopted Aspects remain unchanged.

### Lasting Character Aspects

Status: USER-APPROVED CORE RULE, 2026-09-17. Character selection is optional;
temporary enhancement and the expressly deferred extensions are not adopted.

A Character Aspect expresses an embraced nature, bond, conviction, or drive.
It strengthens relevant permitted Expressions and develops through choices
made in play. It is not a sixth Attribute, moral alignment, HOLT, or general
price model for all stable character Lenses. Character Aspect remains the
working term. It applies to ordinary and extraordinary action alike.

Nature, Bonds, and Convictions/Drives are prompts, not exclusive categories
or mandatory slots. Examples include protector, creator, explorer, family
devotion, community, an oath, justice, discovery, and redemption. Natural knacks
and jinxes remain separate from this initial identity-based set; this rule
does not settle the broader benefits/flaws package.

#### Starting Aspects and New Recognition

At creation a player may select up to two developed Aspects at Rank 1 each
(x1.1), plus up to four potential Aspects with Access but no rank enhancement
(x1.0). Neither allocation must be filled. There is no required primary Aspect
or category distribution. These selections neither cost points nor convert
to points when unused. They are not a lifetime cap on the number of Aspects.

During play, new Access and Rank 1 may emerge together when the fiction
justifies both. No prior potential entry or mandatory waiting period is
required. Access alone can recognize a potential identity before numerical
development is warranted. A label or declaration does not automatically earn
a rank; actual choices and circumstances establish the narrative justification.
Quiet conduct can suffice. Dramatic performance, sacrifice, and success are
not prerequisites. The player authors the character; the GM recognizes growth.

#### Applicability and Calculation

Use one most-applicable Aspect for an Expression. The player recommends it
based on the character, intent, action, means, and circumstances; the GM
adjudicates applicability, including ties. Neither stacking several Aspects
nor unilaterally choosing the highest rank follows from overlapping identities.
GM judgment is not an obligation to select the strongest factor, nor a reason
to reject it merely because it benefits the player.

Examine the fiction before limiting an Aspect to a verb or field. A protector
can negotiate shelter, investigate danger, build defenses, teach, or fight.
The action must actually serve that identity; an unrelated personal purchase
does not qualify merely because its actor is a protector. No desperation,
sacrifice, or speech is required for an ordinary aligned action to benefit.

```text
For the one applicable Aspect's lasting Rank r, from 0 through 10:
Aspect factor = 1 + r/10

Expression = other applicable factors
             x max(0, 1 + Resonance - Dissonance)
             x Aspect factor
```

Use x1.0 when no developed Aspect applies. Retain full precision until final
flooring. The independent factor does not replace the additive foundation or
join the contextual pool. Do not count the same Aspect contribution again as
Resonance; distinct circumstances can still contribute normally. An Aspect
grants no missing permission, equipment, Scale, action, or automatic success.

For a calculation example, A5 + D3 with applicable Task, Field, Specialty,
and Precision each at Rank 5 gives an unrounded ordinary Expression of 40.5.
At Difficulty 1, full Function, matched Scale, and neutral context, the Final
Rating is floor(40.5 x 0.98) = 39. A relevant Rank-1 Aspect gives
floor(40.5 x 1.1 x 0.98) = 43. Including the ordinary +0.20 boost instead
gives floor(40.5 x 1.1 x 1.2 x 0.98) = 52. Do not multiply the already
floored 39 or add the Aspect's 0.10 into the contextual pool.

If a permitted extraordinary route also has an applicable Rank-5 Axis,
the otherwise identical example yields 59 without the Aspect and 65 with it.
The Aspect changes the permitted attempt's effectiveness, not its permission.
These are controlled illustrations, not mandatory character allocations or
encounter targets; no existing character is repriced or rewritten.

There is no Aspect activation charge or temporary Aspect purchase. The ordinary
one-point pre-roll boost still adds +0.20 contextual Resonance once, not Aspect
ranks. The ordinary one-point reroll replaces the complete dice result of the
same Expression, retaining its applicable Aspect and purchased boost. Existing
spending limits and consequence timing remain unchanged.

#### Story-Awarded Development

Permanent Aspect ranks are GM-awarded story development, not point purchases.
The first question is whether the conduct is narratively relevant. Sustained
alignment, keeping a promise without immediate benefit, taking a harder path,
or making a sacrifice can support growth. Quiet choices and failed attempts
matter. Sacrifice and success are not mandatory; plot compliance and acting
ability are not the standard.

Receiving an Aspect enhancement does not automatically earn growth. An enhanced
action may nevertheless be significant enough to support development. A choice
requiring no roll can also develop an Aspect: honoring a commitment is not
required to become an Expression to count.

Approximately three to four relevant sessions is a rough development reference,
not a timer, minimum wait, action count, or quota. Significant events can
support earlier development. Several Aspects may develop in one session;
another may develop none. No compulsory streak or loss of progress follows
from a session offering no opportunity. Rank 10 is the core ceiling.

Awards take effect when narratively appropriate, including within a scene.
Reflection may support growth, but so may a decisive act in progress. Existing
resolution rules still apply: recognition does not rewrite settled rolls or
consequences. Spending through existing core options may contribute to a
meaningful sacrifice, but establishes no rank entitlement, refund, or automatic
spending-to-development exchange rate. Session award amounts remain unchanged.

For example, holding a failing gate for others can both draw upon Protector
and support its development. Negotiating their shelter can do the same without
physical danger. Quietly keeping a promise can support growth with no roll;
failing an earnest rescue does not erase the choice's significance.

#### Change, Tension, and Fulfillment

Conflicting Aspects do not automatically penalize the one not followed. Choosing
family over duty neither automatically damages duty nor proves it meaningless.
The fiction may support development of both even though their factors do not
stack within one Expression.

When play supports a shift, a player may transfer one rank from one established
Aspect to another, within the Rank ceiling. Neither must first be completed
or abandoned. This is optional redistribution, not punishment or a new award.
Convenient swapping solely for the next challenge is not sufficient justification.

A fulfilled conviction or drive may give way to an established potential,
carrying earned enhancement forward where the fiction supports the transition.
Do not force retention of a concluded pursuit. A valued payoff and combining
fulfilled development with an already-developed successor remain deferred;
do not silently add existing ratings together.

#### NPCs and Tracking

NPCs use the same lasting factors and fictional applicability standards. Ranks
reflect established characterization and history; the GM need not simulate past
session awards. Not every NPC requires Aspects, and no NPC Aspect-spending
pool is introduced.

The paper tracking aid is an eight-wedge circle per Aspect behind the GM screen.
It is an approximate memory aid, not eight required acts, a currency, or an
automatic rank trigger. The proposed app equivalent is a 0-100% slider, not
an objective measurement of devotion. Reset/carryover and player visibility
are not fixed accounting rules. App implementation is not authorized here.

#### Adoption Boundary

Temporary enhancement, including the historical player-spending model and a
possible GM-offer variant, remains optional advanced-expansion material. Flaw-
funded extra starting Aspects, a valued fulfillment payoff, and transfer into
an already-developed successor remain deferred. None is required to use the
adopted lasting rules. Higher-than-10 development is separately deferred.

This adoption changes the core rules, not existing character records, prices,
session awards, or protected point allocations. Applicability and development
consistency need live-play feedback; historical spending tests are not evidence
that temporary spending is allowed. The adopted source package and its examples
are in `../design/lens-character-aspects-working-package-v0.1.md`.

### HOLD: Higher-Order Lens Definition

Status:

```text
LOCKED
```

A HOLD is the setting-facing definition under which one or more HOLTs exist.

A HOLD may establish:

- how its HOLTs are accessed or acquired;
- which HOLT themes are permitted;
- starting HOLT Access and separately specified Axis development;
- applicable Axis Rank horizons and eligibility;
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
- Empowered Oath;
- Transformation;
- Artifact Relationship;
- Creature Nature;
- a setting-specific class or tradition that grants higher-order permission.

These are examples of how a setting may define higher-order capability. They
are not a mandatory universal list. A HOLD may govern a capability that is
common within its setting, but common availability does not make that
capability part of ordinary Character construction.

### HOLT: Higher-Order Lens Theme

Status:

```text
WORKING LOCK
```

A HOLT is a character-facing Higher-Order Lens Theme that operates coherently
above multiple lower-order Lenses. It supplies defined thematic Access without
a numerical parent Rank under the core rule adopted 2026-09-13.

A HOLT grants higher-order thematic permission that the ordinary Attribute,
Derived Attribute, Skill, Specialization, equipment, Leverage, and stable-Lens
architecture does not already provide.

```text
Ordinary Characters do not require HOLTs.

A character concept is not automatically a HOLT.
```

`Higher-order` describes an architectural permission boundary. It does not
necessarily mean rare, magical, supernatural, or socially unusual. A
capability may be common in its setting and still require higher-order
permission. A profession, title, tradition, identity, or concept does not
become a HOLT merely because it is important, coherent, or broadly applicable.

Examples may include:

- Sea;
- Strength;
- Fire.

These examples qualify only when they grant higher-order permissions beyond
ordinary construction. They are not a universal catalogue.

Ordinary concepts such as `Wealthy Noble`, `Royal Envoy`, `Crime Fighter`, and
`Master Smith` are represented through their applicable ordinary construction
layers unless a setting separately establishes a genuinely higher-order
permission. Stable character Lenses may preserve their identity,
relationships, resources, commitments, obligations, and vulnerabilities
without promoting the complete concept into a HOLT.

Possessing a HOLT grants coherent thematic permission and identifies which
lower-order relationships may be developed as Axes. Its identity determines
what kinds of manifestations are coherent, applicable, limited, vulnerable,
or counterable.

Acquiring a HOLT supplies its defined thematic Access, with no Axis Ranks.
Axis development is purchased directly; no parent HOLT Rank must be bought
first. The current baseline horizon is Axis Rank 10, without a replacement
cap tied to Derived Attribute Rank. The ordinary Derived-to-Attribute cap remains.
Open unranked Axes can still permit applicable Expressions through existing
Character capability without a HOLT-derived numerical bonus.

Acquisition does not make every conceivable Axis available, change Condition
or Closed Access to Open, grant manifestations outside the theme, increase
Scale, or guarantee competence. Identity, scope, limitations, counters, and
narrative eligibility remain part of the acquired HOLT.

The applicable HOLD and campaign profile determine starting allocations,
development provisions, and setting-specific ceilings. A starting package may
specify separately allocated development; the HOLT acquisition itself does
not grant Axis Ranks. Legacy grants of parent Rank are not automatically grants
of Axis ranks or spendable points; their replacement requires a specific decision.

This permits the same engine to support generous, rapidly advancing mythic
characters and narrower, slower, study-based characters without changing the
underlying architecture.

### Working HOLT Purchase Prices

Status: User-approved working estimate, not final calibrated pricing.

Adopted working revision, 2026-09-15: defined HOLT Access costs 20 unified
points once; each purchased Axis rank also costs 20. Acquisition supplies no
parent HOLT Rank and no Axis Ranks. The Rank-0 purchase description means
permission at x1.0, not a ranked HOLT or another charge for each Axis.
An Open, unranked Axis remains usable through existing character capability.
Neither purchase opens otherwise unavailable Axes or grants extra Scale.

Twenty is a simple common pricing unit, not an amortization of the old Access
fee or a claim that permission and development have identical value. Use the
same prices at creation and advancement. Other prices and protected allocations
remain unchanged.

Assess the combined limitation burden through GM negotiation in campaign
context, express the agreed reduction in ten-percent bands, and apply it once
to each purchase actually affected. A whole-HOLT restriction can affect Access
and its Axis development. A restriction confined to one Axis does not
automatically discount the whole Access purchase or unrelated Axes.

| Negotiated reduction | Cost per affected 20-point purchase |
| --- | ---: |
| None | 20 |
| 10% | 18 |
| 20% | 16 |
| 30% | 14 |
| 40% | 12 |
| 50% | 10 |
| 60% | 8 |
| 70% | 6 |
| 80% | 4 |
| 90% | 2 |

These entries show arithmetic, not automatic eligibility for a reduction or an
adopted universal ceiling. Extreme reductions remain unresolved; 100% would
produce free purchases and is not authorized by this table. Do not add separate
limitation percentages mechanically or apply the same reduction twice to a
purchase. Discounting affected Access and development once each is not itself
duplicate compensation. The restriction persists in every discounted use.

The former 40-point Access / 15-point Axis prices and acquisition-only
25/50/75-percent schedule are superseded. There is no new reward currency,
recurring point award, free rank, or universal limitation grid. Narrower thematic
scope alone does not automatically earn a discount.

Eligible full or partial buyoff pays the price difference on affected purchases
already held, crediting prior purchase and buyoff payments. See Changing
Limitations below. Full removal and every partial easing must each make
narrative sense; neither is an automatic entitlement. Existing-character
conversion, story-granted development, and refunds remain unresolved.
Non-negotiable setting restrictions cannot be bought away. Satisfying an Access
Condition or finding a temporary workaround does not permanently remove it.

See `docs/design/lens-uniform-holt-pricing-adoption-v0.1.md` and
`docs/tests/lens-uniform-twenty-point-holt-pricing-test-v0.1.md`.

### Earlier HOLT Scope-Estimation Aid

Status: Earlier approved comparison aid, retained as development history.
The current acquisition estimate above does not require this counting step.

```text
Distinct permitted Derived Attribute areas x 5
= estimated scope value
```

Count the defined package's permitted areas, including unranked Axes, rather
than current Rank investment or the number of applications through one area.
Use the result as a rough reference, not an Expression multiplier, actual
advancement price, or automatic limitation discount. The original twenty-area
model supplies the 100-unit reference; this is not an adopted ceiling.

Actual prices and Leverage treatment remain unresolved. Comparisons including
Leverage must label their treatment as an assumption. Equal area counts need
not grant equal permissions or have identical value in a Campaign Profile.

See `docs/tests/lens-holt-simple-scope-estimate-test-v0.1.md` for the tested
examples and comparison boundaries.

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
Sea → Assets

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

Axis Rank 0 supplies x1.0, no numerical bonus. Each purchased Axis rank adds
0.1 to the multiplier: Rank r supplies x(1 + r/10), through Rank 10 at x2.0.
It is not capped by the associated Derived Rank. An Axis may support several
permitted manifestations through its Derived relationship; it need not be a
single named spell or technique. No Axis rank manufactures missing Access.

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
modifier. Narrative framing and thematic access are not separate rules: the
HOLT changes what kind of action may be attempted, while the appropriate
Derived Attribute, Skill, Specialization, Scale, Difficulty, and other Lenses
still resolve the attempt.

A Closed Axis removes the HOLT's thematic permission through that Derived
Attribute. Clever narration does not reopen it.

### Limitations and Compensation

Status:

```text
CONCEPTUALLY LOCKED
UNIFORM PURCHASE REDUCTIONS ADOPTED; INDIVIDUAL VALUATIONS NEGOTIATED
```

The same limitation procedure may apply to:

- one Axis;
- several Axes;
- an entire HOLT.

The procedure is:

1. Identify the affected HOLT structure.
2. State whether the limitation closes Access or imposes a Condition.
3. Identify whether it affects one Axis, several Axes, or the entire HOLT.
4. Assess the meaningful combined burden under the applicable HOLD and Profile.
5. Agree a reduction in ten-percent bands and apply it once to affected purchases.

Closing an Axis may return HOLD-defined development value that must remain
inside the same HOLT. Exact returns and the replacement for the former
parent-rank reinvestment ceiling remain unresolved after the Access-only
adoption. Do not calculate new credits from hypothetical forfeited ranks or
automatically replace that ceiling with Derived Rank. Rank 10 bounds Axis
development but does not by itself determine fair compensation.

The uniform purchase reductions above now cover affected Access and Axis
purchases. Any separate HOLD-defined returned credit remains unresolved and
must not duplicate value already compensated by those reductions. Existing
characters' paid parent ranks and legacy starting grants require a separate
conversion decision; this adoption authorizes neither refunds nor free Axes.

The applicable HOLD informs the valuation of closed or conditional Access.
No automatic returned credit follows. Conditional burden depends upon how meaningfully the
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

The uniform purchase arithmetic does not settle each limitation's value.
Setting-specific comparisons should account for existing starting provisions
before awarding additional, separately defined limitation returns.

#### Working Limitation Bands

Approved as a working assumption for further comparison, not fixed prices:

- Modest: a meaningful inconvenience the Character can usually manage.
- Substantial: regularly denies important options or imposes significant
  consequences.
- Severe: makes the affected capability unreliable, unavailable for substantial
  portions of play, or costly to use.

These describe the overall burden on the affected structure, not separate
ratings for frequency, duration, or every other consideration. Classify the
actual restriction in its campaign context, not its name alone. A negligible
restriction is not automatically entitled to the Modest band.

The former 25% / 50% / 75% associations are historical, not the current purchase
schedule. Use negotiated ten-percent reductions under the uniform pricing rule.
The descriptive labels may aid discussion but do not fix the percentage.
See `docs/tests/lens-holt-limitation-band-estimate-test-v0.1.md` for historical
comparisons. Separate returned credits and Leverage treatment remain open.

Duration, Area, Distance, Intensity, and Selectivity are useful scope prompts,
not a mandatory equal-weight grid. Time windows, prerequisites, expenditure,
and preparation can also constrain actual use. No ten-category numerical model
has been adopted. Full-moon availability, for example, is not the same as the
duration of an effect. Calendar frequency alone does not establish its discount.
Use meaningful lost opportunities, control, persistence, and campaign context.
Calendar availability is legitimate evidence of burden, not an automatic
percentage conversion; planning around a restricted window does not erase it.

Example-based negotiation guidance, adopted 2026-09-16: use illustrative
comparisons rather than defining a mandatory threshold for every ten-percent
increment. The working prompts are Duration, Area, Distance, Intensity,
Selectivity, Timing or Availability, Required Conditions or Prerequisites,
Expenditure or Consumption, Preparation, and Consequences and Weaknesses.
These are descriptive headings, not equally weighted discount categories or
an exhaustive catalogue. Use the same guidance for Access and Axis limitations,
applying the negotiated reduction only to purchases actually affected.

##### Narrative Examples Across the Headings

These illustrative restrictions assume the unrestricted package would otherwise
permit the excluded use. They do not grant capabilities, impose standard limits
on a theme, or establish fixed discounts. Numbers inside an example describe
that example's fiction, not universal thresholds.

| Heading | Narrative example | What guides negotiation |
| --- | --- | --- |
| Duration | A conjured bridge can carry the rescuers across, but disappears after one minute even if its creator wants to keep it. | The lost ability to sustain a crossing for a larger evacuation or later return. This limits the manifestation's persistence, not when Access is available. |
| Area | A guardian can shield one companion but cannot spread that protection across the people sheltering beside them. | Loss of simultaneous coverage where the unrestricted package permits it. |
| Distance | A healer can mend the wounded scout only by touching them, requiring a crossing of exposed ground to reach them. | Loss of remote application and the resulting positioning demands. |
| Intensity | A force-wielder can move furniture but cannot lift the collapsed stone slab trapping a companion, regardless of additional effort. | A meaningful ceiling on output, not a cap on advancement Rank; compare the challenges it excludes. |
| Selectivity | A storm-caller can sweep a courtyard with lightning but cannot spare companions caught inside it. Alternatively, an influence power might affect only people who share the user's language. | Inability to exclude otherwise eligible targets and restriction of eligible targets are different examples under this heading. Assess the actual loss without treating the heading itself as a discount. |
| Timing or Availability | A werewolf's transformation is available only during the agreed full-moon nights; an emergency outside that window must be faced without it. | The opportunities lost to the window. Availability is evidence of burden, but does not automatically set a percentage. |
| Required Conditions or Prerequisites | A seer can perceive hidden spirits only while wearing a particular pendant. Confiscation leaves that sight unavailable until the pendant is recovered or a permitted replacement is obtained. | Dependence on the object, including how readily it can be secured, removed, or replaced. The pendant is not consumed. |
| Expenditure or Consumption | Each transformation consumes a dose of a prepared serum. After the last dose, the character cannot transform again until supplied. | Supply, consumption, and replenishment constrain repeated use. This is distinct from merely possessing a reusable object. |
| Preparation | Before opening a passage, a traveler must draw and complete an uninterrupted ritual circle. An unexpected pursuit may leave no opportunity to prepare it. | Required setup, interruption, and lost immediate use. A ceremonial gesture with no meaningful burden does not earn the same consideration. |
| Consequences and Weaknesses | A werewolf remains vulnerable to silver even while human, facing that danger during periods when transformation is unavailable. Another power might leave its user exhausted after each activation. | Persistent possession-related weakness and consequences of use both qualify for consideration. Assess severity, exposure, and recovery as applicable. |

One restriction can touch more than one heading. The headings help explain
its burden; they do not create multiple reductions for the same loss. Use
complete packages and campaign circumstances for the negotiated comparison.

Consequences and Weaknesses includes burdens from possessing the capability,
not only consequences of activating it. A weakness may persist while the
benefits are unavailable.

| Example | Negotiation guidance |
| --- | --- |
| Brief discomfort without meaningful interference | Descriptive flavor alone warrants little or no reduction. |
| Accumulating fatigue from repeated use | Consider limits on continued use and interference with other activities. |
| Vulnerability to a material while transformed | Consider the severity and practical exploitability of the weakness. |
| The same vulnerability also persists while untransformed | Broader burden because the weakness remains when the benefits are unavailable. |
| Using the capability causes lasting injury | Potentially severe, depending on the injury and recovery involved. |

Compare the complete unrestricted and restricted packages. Assess their combined
meaningful burden and negotiate the reduction in ten-percent bands. Expenditure
describes what is consumed; consequence describes what is suffered. Where they
describe the same burden, count it once. Distinct burdens remain relevant without
automatically stacking percentages. These examples assign no fixed reduction,
new compensation credit, or universal discount ceiling.

Losing meaningful area capability or reach beyond contact can serve as a
provisional 20% negotiation comparison, not an entitlement. Trimming unused
extremes across several dimensions does not automatically earn an equivalent
reduction. Preferring a restricted style does not erase genuinely lost options.

#### Overlapping Limitation Estimates

Approved as provisional comparison guidance:

Assess the overall combined burden on the affected capability, counting each
affected Derived Attribute area once. Do not automatically add or multiply
individual limitation percentages. Do not substitute the highest individual
band for assessment of the actual combination.

Where different portions have genuinely different overall burdens, count each
portion once under its applicable assessment. Repeated descriptions of the
same restriction do not create additional adjustments. Distinct restrictions
remain part of the package even when the coarse estimate does not distinguish
their values finely.

This guidance establishes no universal adjustment ceiling. Apply the current
ten-percent purchase reductions to the agreed combined burden; extreme values
remain unresolved rather than automatically available. Separate returned
credits and Leverage treatment remain unresolved.

See `docs/tests/lens-holt-overlapping-limitations-test-v0.1.md` for comparisons.

### Changing Limitations

Status:

```text
FULL AND PARTIAL BUYOFF ADOPTED
EQUIVALENT AND LIGHTER REPLACEMENT ADOPTED
INCREASED BURDEN DOES NOT REFUND PRIOR SPENDING
SCOPE TRANSFERS UNRESOLVED
```

Buying off, replacing, or transforming a limitation requires narrative
justification and the applicable price accounting; an equivalent replacement
can have no additional point cost.

Working buyoff rule adopted 2026-09-15: for eligible permanent removal or easing,
pay the price difference on affected Access and Axis purchases already held.
Credit all amounts already paid toward those purchases, including earlier
buyoff payments. Charge neither unaffected purchases nor hypothetical future
ranks. Future purchases use the newly negotiated remaining limitation reduction.
Reassess the combined burden; do not mechanically subtract independent discounts.

Full removal and every partial easing must each make narrative sense under the
applicable HOLD and setting. A limitation may permit gradual change, a single
complete removal, or no buyoff at all. Money alone establishes none of these.

Example: Access plus five Axis ranks costs 96 at a 20% reduction, versus 120
unrestricted. Full buyoff costs 24. If partial easing is narratively supported,
changing to a 10% reduction costs 12; removing the rest at unchanged ranks costs
another 12. Earlier payments are credited, never charged twice. No surcharge
is added for using installments that represent actual permitted changes.

Temporary satisfaction of a Condition or a temporary workaround is not buyoff
and does not itself trigger a fee. Non-negotiable restrictions remain binding.
This rule does not grant new unrelated permission, authorize spending future
awards, automatically reprice existing characters, or create refunds.

Working replacement rule adopted 2026-09-15: a narratively justified replacement
costs nothing when the assessed combined burden and affected purchases remain
equivalent. If the replacement reduces the burden, pay the difference on
affected purchases already held, crediting prior payments as with buyoff.
The GM assesses actual restrictions in campaign context; similar labels or
equal claimed percentages alone do not establish equivalent burden.

Example: six affected purchases changing from a negotiated 30% reduction to
20% cost 12 additional points. Replacing one genuinely equivalent 20%
restriction with another on those same purchases has no additional cost.
Neither is permission to switch restrictions merely for the next encounter.

A newly increased permanent limitation burden may change future affected
purchase prices after narrative and GM assessment, but does not refund prior
spending or generate spendable points. Something bad happening to a character
does not itself award compensation. Temporary Conditions and setbacks do not
automatically reprice the capability. Separate story rewards remain separate.

Preserve actual prior payments for later eligible buyoff; a heavier limitation
does not erase them. If previously paid value already covers a later permitted
return to the former state, do not charge that value again. New ranks bought
at a deeper reduction retain their own paid basis for subsequent buyoff.
This is credit toward the same purchases, not transferable spending currency.

Transfers that relieve some purchases while restricting others remain
unresolved; no refund or transferable credit is implied. Story-granted
development without a paid basis and legacy conversion also remain open.

A character cannot remove a limitation merely because the player can afford
it. The fiction must explain the change through an event, process, discovery,
transformation, training, or other development permitted by the HOLD and
setting.

### Ranks Above 10

Status:

```text
DEFERRED OPTIONAL ADVANCED EXPANSION
NOT REQUIRED FOR CORE COMPLETION
```

The core ceiling is Axis Rank 10 during creation and advancement. An optional
advanced expansion may revisit higher ranks and how a HOLD or Campaign Profile
would permit them. No such expansion or unlock is adopted. HOLTs themselves
no longer have numerical parent ranks.

Exceeding Axis Rank 10 would represent exceptional development within a HOLT. It does
not automatically increase the character's Scale.

Any future adoption must determine whether over-Rank-10 capability can cross a
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
- HOLT name, defined scope, and acquisition;
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

Multiple-Source output and targeted opposition follow the approved procedures
under Compound Expressions. This section does not add an organization sheet,
new action economy, or faction procedure.

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

A HOLT supplies defined thematic Access without a parent Rank. Purchased Axis
ranks supply applicable modifiers through the Rank-10 baseline horizon, without
a HOLT-parent or Derived-rank cap. Legacy grants and compensation still need
explicit replacement decisions; no automatic conversion is adopted.

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
- Axis Ranks separately specified by a starting package, not included in acquisition;
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

### Test 7: Capacity and Function Bands

Continue testing the current Function Bands against:

- Physical Load affecting Might and Mobility;
- Mental Load affecting Psyche and Influence;
- third-Capacity Load affecting Leverage;
- specific Conditions changing specific Access;
- the one-ledger and no-double-counting controls;
- Campaign Profile variation at Load 10 and above.

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

Testing Axis Ranks above 10 against Scale is deferred to an optional advanced
expansion and is not part of this core test. Core tests use ranks through 10.

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

The current working Attributes are Might, Mobility, Psyche, Influence, and
Leverage.

Leverage is established worldly position brought to bear through Assets,
Network, Authority, Reputation, or Background.

The current protected construction reference is 25 total Attribute ranks,
50 allocated Derived Attribute ranks, and 750 weighted Training Points,
plus 125 ordinary flexible development points. Creation and advancement use
common flat prices; protected starting allocations are not transferable.

Optional drawbacks can award up to forty points in actual starting compensation,
not an automatic grant. The 125 flexible base and that compensation can fund
ordinary development or approved benefits under Profile eligibility. Benefits
have defined provisions, not separate ranks. Catalogue prices stay provisional;
buyoff uses traceable actual compensation and prior payments. Species balancing
remains deferred and supplies no extra allowance.

The ordinary foundation is Attribute Rating plus Derived Attribute Rank.
Task, Field, Specialty, and Precision supply their applicable multipliers.
Derived Rank remains capped by Attribute Rating; no free first Derived rank.
The ordinary six-layer maximum is 320 before other applicable factors.

Lasting Character Aspects are core rules with optional character selection:
up to two Rank-1 Aspects and four unranked potentials at creation. One applicable
Aspect adds an independent x(1 + Rank/10) factor, through Rank 10. Development
is story-awarded, not purchased. New Access and Rank 1 may emerge together.
Temporary enhancement remains deferred; existing prices and awards do not change.

Session Participation is 10; Progress, Discovery, Character Expression, and
Narrative Engagement each use 0/3/5. The three-meaningful reference is 19,
all meaningful is 22, and the unmodified card spans 10-30. Milestones remain
optional at the existing 12.5 recommendation. Immediate help retains its
shared-currency opportunity cost and existing one-point prices.

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

Ordinary personal equipment uses a working modifier range from x1.00 through
x1.30 in x0.05 increments. Campaign Profiles determine which bands they use
and what occupies them. Individual equipment placements remain provisional.

A Lens contributes only when it genuinely applies.

Each counted Lens must make a fictionally distinct contribution.

Named capabilities should use the common grammar rather than bespoke power
subsystems.

HOLD means Higher-Order Lens Definition.

A HOLD defines setting-facing access, construction, limits, limitations,
weaknesses, and advancement without multiplying Expressions.

HOLT means Higher-Order Lens Theme.

A HOLT grants coherent higher-order thematic permission not already provided
by ordinary construction. Ordinary Characters do not require HOLTs, and a
character concept is not automatically a HOLT. A HOLT has no numerical parent
Rank. Access costs a working 20 once; Axis ranks cost 20 each and have no
replacement Derived-rank cap. Negotiated ten-percent limitation reductions
apply once to the purchases actually affected, including Access and development
where both are restricted. Eligible full or partial buyoff pays the difference
on affected purchases already held, crediting prior payments; each change must
make narrative sense. Extreme reductions and legacy conversion remain open.

An Axis is the relationship through which a HOLT expresses through one Derived
Attribute.

An Axis is ranked or unranked. No separate investment or development status is
used.

Axis Access is Open, Condition, or Closed.

An Open, unranked Axis grants thematic permission without a HOLT-derived
modifier.

Capacity is the limit. Load is accumulated Condition pressure. Conditions are
the named composition of Load. Relevant Dissonance is the portion applying to
the current Expression.

Physical Capacity governs Might and Mobility. Mental Capacity governs Psyche
and Influence. Framework Capacity governs Leverage.

HOLDs and campaign profiles determine Axis allocation, limitation value,
and advancement within the core Rank-10 ceiling. Higher-rank development is
deferred to an optional advanced expansion, not a core completion requirement.

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
C:\LENS-SYSTEM\docs\tests\lens-leverage-fifth-attribute-architecture-test-v0.1.md
C:\LENS-SYSTEM\docs\tests\lens-leverage-derived-attribute-boundary-test-v0.1.md
C:\LENS-SYSTEM\docs\tests\lens-opposed-leverage-expression-test-v0.1.md
C:\LENS-SYSTEM\docs\tests\lens-third-capacity-naming-test-v0.1.md
C:\LENS-SYSTEM\docs\tests\lens-infrastructure-capacity-unification-test-v0.1.md
C:\LENS-SYSTEM\docs\tests\lens-ordinary-equipment-construction-and-effect-test-v0.1.md
C:\LENS-SYSTEM\docs\tests\lens-ordinary-equipment-modifier-band-test-v0.1.md
C:\LENS-SYSTEM\docs\tests\lens-concrete-equipment-placement-opposed-play-test-v0.1.md
C:\LENS-SYSTEM\docs\tests\lens-fantasy-equipment-package-comparison-test-v0.1.md
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
