# LENS Leverage Fifth-Attribute Architecture Test

Version: 0.1  
Status: Working Architecture Stress Test; No New Doctrine Adopted  
Date: 2026-08-31

> Terminology update, 2026-09-01: `Background` replaces `Heritage` as the
> current fifth Leverage Derived Attribute name. Heritage references below are
> preserved as the language under which this test was originally run. The
> tested mechanical function now routes through Background.

---

## Purpose

This test evaluates whether worldly position should become a fifth Attribute
rather than a mandatory Background HOLT or six separate Background umbrellas.

Candidate architecture:

```text
ATTRIBUTES

Might
Mobility
Psyche
Influence
Leverage

LEVERAGE DERIVED ATTRIBUTES

Assets
Network
Authority
Reputation
Heritage
```

The test asks whether this model:

```text
preserves the five-Derived-Attributes-per-Attribute pattern;
keeps Leverage distinct from Influence;
represents objective worldly position and the ability to mobilize it;
supports ordinary Characters without requiring a HOLT;
allows HOLTs to use the existing Axis rule;
supports low-Leverage Characters without making them nonfunctional;
uses the existing Capacity, Load, Function Band, Condition, and Access rules;
and supports the proposed 25 / 50 / 75 construction spine.
```

This record does not adopt the candidate names, construction budgets, third
Capacity name, starting-equipment procedure, or revised Active Skill list.

---

## Existing Controls Preserved

```text
The Character remains the local source of action.

An Attribute identifies the broad locus through which the Character acts.

A Derived Attribute narrows capability inside its parent Attribute.

A derivative inherits the locus of its parent Attribute.

An unranked Derived Attribute remains available through its parent at x1.0.

A Derived Attribute Rank cannot exceed its parent Attribute Rating.

Rank 0 supplies x1.0.

Rank N supplies x(1.0 + 0.1N) through the current Rank 10 horizon.

Classification and other permission-bearing Lenses determine what is possible.

Scale defines natural scope.

Difficulty defines resistance within that frame.

A HOLD defines setting-facing construction and access rules without supplying
an Expression multiplier.

A HOLT grants coherent thematic permission.

The parent HOLT Rank caps its Axis Ranks and is not a universal multiplier.

An Axis is the relationship through which a HOLT expresses through one
Derived Attribute.

Access is Open, Condition, or Closed.

One fictional contribution is not counted twice.
```

---

## Candidate Definitions

```text
Leverage
The Character's broad capability to establish, maintain, and bring worldly
position to bear.

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

Heritage
Established culture, upbringing, history, lineage, legacy, belonging, and
inherited claim carried by the Character.
```

Leverage does not represent direct personal persuasion, projected will,
learned competence, or extraordinary permission.

Assets must carry some information about the magnitude and breadth of what the
Character possesses or controls. It cannot mean only social skill in asking
for things.

`Heritage` remains the least settled name because it must cover both inherited
identity and a Character's established past without becoming a biography
catalogue.

---

## Test 1: Structural Symmetry

```text
5 Attributes
x 5 Derived Attributes each
= 25 Derived Attributes

25 Attribute Points
50 Derived Attribute Points
75 Training Points
```

Even-distribution diagnostics:

```text
25 Attribute Points / 5 Attributes
= average Attribute Rating 5

50 Derived Attribute Points / 25 Derived Attributes
= average Derived Attribute Rank 2

75 Training Points / 25 Active Skills
= average Skill Rank 3 when no points are spent on Specializations
```

Finding:

```text
PASS

The proposed budgets follow one visible relationship:

Attribute Points         = 1 x the number of active ratings
Derived Attribute Points = 2 x the number of active ratings
Training Points          = 3 x the number of active ratings

The shift from 20 / 40 / 60 to 25 / 50 / 75 does not require an arbitrary
addition or a new cost rule.
```

The twenty-five Active Skills are a counting control only. The current list
still contains fifteen Core Skills and five Campaign Profile Skills. This test
does not invent five additional Skills or decide their final division.

---

## Test 2: Broad, Focused, and Low-Leverage Builds

### Character A: Broad Generalist

```text
ATTRIBUTES

Might:     5
Mobility:  5
Psyche:    5
Influence: 5
Leverage:  5

Total Attribute Points: 25

DERIVED ATTRIBUTES

All twenty-five Derived Attributes: Rank 2

Total Derived Attribute Points: 50

TRAINING

Twenty-five Active Skills: Rank 3

Total Training Points: 75
```

Representative Leverage Expression:

```text
Leverage 5
x Assets Rank 2 (x1.2)
x Persuasion Rank 3 (x1.3)
= 7.8

Displayed Base Expression: 7
```

### Character B: Leverage Specialist

```text
ATTRIBUTES

Might:     4
Mobility:  4
Psyche:    4
Influence: 4
Leverage:  9

Total Attribute Points: 25

DERIVED ATTRIBUTES

Twenty non-Leverage Derived Attributes: Rank 1 each = 20

Assets:     Rank 9
Network:    Rank 6
Authority:  Rank 6
Reputation: Rank 5
Heritage:   Rank 4

Leverage Derived Attribute Points: 30
Total Derived Attribute Points:     50
```

Representative Expressions:

```text
Asset-backed negotiation

Leverage 9
x Assets Rank 9 (x1.9)
x Persuasion Rank 6 (x1.6)
= 27.36

Displayed Base Expression: 27


Formal command

Leverage 9
x Authority Rank 6 (x1.6)
x Command Rank 6 (x1.6)
= 23.04

Displayed Base Expression: 23


Public appeal based on established reputation

Leverage 9
x Reputation Rank 5 (x1.5)
x Persuasion Rank 6 (x1.6)
= 21.6

Displayed Base Expression: 21
```

The remaining Training allocation is not specified because this test examines
Attribute and Derived Attribute feasibility rather than a complete Skill
build.

### Character C: Low-Leverage Specialist

```text
ATTRIBUTES

Might:     5
Mobility:  6
Psyche:    7
Influence: 6
Leverage:  1

Total Attribute Points: 25

DERIVED ATTRIBUTE ALLOCATION

Might:     12
Mobility:  13
Psyche:    13
Influence: 12
Leverage:   0

Total Derived Attribute Points: 50
```

All five Leverage Derived Attributes remain unranked at x1.0.

```text
Ordinary request using an established contact

Leverage 1
x Network Rank 0 (x1.0)
x Persuasion Rank 3 (x1.3)
= 1.3

Displayed Base Expression: 1


Direct personal persuasion

Influence 6
x Manipulation Rank 2 (x1.2)
x Persuasion Rank 3 (x1.3)
= 9.36

Displayed Base Expression: 9
```

Finding:

```text
PASS

The pools permit broad, Leverage-focused, and low-Leverage Characters.

High Leverage does not force high development in all five child functions.

Low Leverage does not remove ordinary physical, mental, social, or trained
competence.

The parent cap prevents extraordinary child development while leaving the
broad Leverage locus undeveloped.
```

---

## Test 3: Leverage Versus Influence

The source of force, not the desired outcome, selects the parent Attribute.

```text
ACTION                                         CARRYING LOCUS

Persuade the guard through personal argument   Influence
Bribe the guard with established funds         Leverage / Assets
Order the guard through recognized office      Leverage / Authority
Call a trusted friend for help                  Leverage / Network
Invoke public fame or notoriety                 Leverage / Reputation
Invoke an ancestral or cultural claim           Leverage / Heritage
```

Two routes may pursue the same outcome without becoming the same Expression.
The Character uses the route actually carrying force in the fiction.

A title may create Access to an audience while the Character then uses
Influence to persuade that audience. If the declared Expression compels
compliance through the title itself, Leverage / Authority carries the roll.

Finding:

```text
PASS

Influence measures direct outward effect originating in the Character.

Leverage measures established worldly position brought to bear.

The distinction survives shared outcomes when one carrying locus is identified
and the same contribution is not counted twice.
```

---

## Test 4: Objective Assets and Starting Equipment

The proposal must distinguish four questions:

```text
What does the Character possess or control?
Can the Character currently access it?
How effectively can the Character mobilize it?
What does a particular item actually do?
```

Candidate division of labor:

```text
Leverage + Assets
= stable Assets Rating representing the Campaign-Profile-relative magnitude
   and breadth of established material position

Access
= whether a particular asset or resource relationship is currently usable

Leverage Function Band
= how effectively the Character can currently mobilize worldly position

Equipment properties
= what a particular item does when used
```

Diagnostic stable Assets Ratings:

```text
Broad Generalist

Leverage 5 x Assets Rank 2 (x1.2)
= Assets Rating 6


Leverage Specialist

Leverage 9 x Assets Rank 9 (x1.9)
= Assets Rating 17.1
```

A Campaign Profile can translate stable Assets Ratings into starting packages,
resource bands, or availability expectations appropriate to its setting.

This avoids exact currency when the Campaign Profile does not need it. It also
prevents Assets from determining a sword's damage, a vehicle's Scale, or a
facility's technical functions. Those belong to Equipment, Scale, Artifact,
Infrastructure, or effect rules.

Conditional wealth example:

```text
Character truth:
The Character is heir to a substantial trust.

Construction:
High Leverage
High Assets
Condition Access: trustee approval or terms of the trust
```

High Assets represents real objective wealth. Condition Access represents the
Character's inability to use all of it freely. A second nominal-wealth score
and third spendable-wealth score are unnecessary.

Finding:

```text
PASS WITH IMPLEMENTATION WORK REQUIRED

The fifth-Attribute model can include objective holdings without becoming an
accounting subsystem.

Campaign Profile translation bands for starting equipment and ordinary
availability still need to be built. Exact currency remains optional.
```

---

## Test 5: Ordinary Capability Without a HOLT

The following Characters require no HOLT merely to use Leverage:

```text
an employee drawing an ordinary paycheck;
a citizen asking a neighbor for help;
a licensed investigator invoking credentials;
a locally respected craftsperson relying on reputation;
a traveler drawing upon cultural knowledge and belonging.
```

Their Leverage Attribute, applicable Derived Attribute, Skill, Specialization,
Access, and current conditions are sufficient.

A HOLT becomes relevant only when a coherent higher-order theme contributes
permission or developed capability across lower-order Lenses.

Examples include:

```text
Wealthy Noble
Royal Envoy
Crime Fighter
Sea
Cybernetics
Sorcery
```

The first three may be entirely ordinary in one Campaign Profile and
extraordinary in another. That does not change the HOLT grammar.

Finding:

```text
PASS

Leverage does not require a mandatory Background HOLT.

The HOLT category can broaden from exclusively extraordinary themes to any
character-facing rated Higher-Order Lens Theme operating coherently above
multiple lower-order Lenses.
```

---

## Test 6: HOLT Axis Through Leverage

Diagnostic Character:

```text
Leverage: 5
Assets: Rank 2 = x1.2
Persuasion: Rank 3 = x1.3

Sea HOLT: Rank 4
Sea / Assets Axis: Rank 4 = x1.4
Access: Open
```

Ordinary Assets Expression:

```text
5 x 1.2 x 1.3
= 7.8

Displayed Base Expression: 7
```

Sea-themed Assets Expression:

```text
5 x 1.2 x 1.3 x 1.4
= 10.92

Displayed Base Expression: 10
```

The fiction may describe the Assets as pearls, sunken treasure, rare coral,
fish, marine harvest, salvage, or another established maritime resource.

This remains one declared Expression and one roll.

The Character does not perform a separate Awareness roll to locate every
resource, a Control roll to command its retrieval, and an Assets roll to use
it unless those are genuinely separate objectives in the fiction.

If the declared objective is discovering an unknown wreck, Psyche / Awareness
may carry the action. If the objective is commanding the sea to expose it,
Influence may carry the action. If the Character is mobilizing established
maritime wealth, Leverage / Assets carries the action.

Finding:

```text
PASS

The existing HOLT Axis rule survives unchanged.

Sea does not move Assets beneath Influence, Psyche, or Mobility.

Sea may possess different Axes through those other Derived Attributes when the
fiction supports genuinely different manifestations.
```

---

## Test 7: Profession and Disposition Decomposition

The fifth-Attribute model removes Profession and Disposition as universal
Background umbrellas. Their contents must remain representable.

```text
SURGEON

Medicine Skill
relevant Specializations
Authority for license and credentials
Network for hospital and professional relationships
Assets for equipment, practice, or facilities
Reputation for professional standing
optional professional HOLT when the concept genuinely operates above several
lower-order Lenses
```

The Character does not need a Profession Derived Attribute duplicating
Medicine, credentials, facilities, and institutional relationships.

```text
DISPOSITION CONTENT

courage and internal persistence       Psyche / Resolve
habit or personality truth             stable personal Lens
oath or code                            HOLT, Limitation, Access condition, or
                                        another stable Lens according to function
fear, obsession, or current distress   Condition and relevant Dissonance
reciprocal duty                         Network, Authority, Heritage, HOLT, or
                                        Limitation according to source
```

Finding:

```text
PASS

Profession and Disposition were useful collection umbrellas but do not earn
universal Derived Attribute status.

Removing them reduces overlap rather than deleting Character content.
```

---

## Test 8: Leverage Function Band

The fifth Attribute clarifies what the third Capacity's Function Band affects.

```text
If Leverage carries the Expression, the Leverage Function Band applies to the
whole Leverage-based Expression.

If Might, Mobility, Psyche, or Influence carries the Expression, Leverage Load
does not reduce that unrelated Expression merely because the Character also
has a troubled worldly life.
```

Diagnostic Leverage Expression:

```text
Leverage Specialist Assets Expression: 27.36
```

Function Band progression:

```text
Load 0-2:  27.36 x 1.00 = 27.36  Displayed: 27
Load 3-5:  27.36 x 0.75 = 20.52  Displayed: 20
Load 6-7:  27.36 x 0.50 = 13.68  Displayed: 13
Load 8-9:  27.36 x 0.25 =  6.84  Displayed: 6
Load 10+:  Leverage function is lost or exhausted under the current test rule
```

The Character's Medicine Skill, personal Persuasion, sword use, cognition, or
other non-Leverage competence is not multiplied by this Function Band.

Specific Conditions still determine particular Access effects:

```text
Assets Frozen may make one Assets route Condition or Closed.
Contacts Compromised may make one Network route Condition.
License Suspended may close one Authority route.
```

Those specific effects are not counted again as additional numerical
Dissonance when their Condition Levels already produce the Function Band.

Finding:

```text
STRONG PASS

The fifth Attribute gives the third Capacity a clean target.

The Function Band no longer needs to weaken unrelated Skills or every truth in
a broad Background package. It weakens Expressions carried through Leverage.

This is more consistent with the Physical and Mental Capacity model than the
six-umbrella HOLT package was.
```

---

## Test 9: Capacity Placement

```text
Physical Capacity
Might
Mobility

Mental Capacity
Psyche
Influence

Third Capacity, final name unresolved
Leverage
```

Load remains accumulated through one master Condition ledger. Capacity views
remain queries against that ledger.

Cross-Capacity effects require explicit fiction:

```text
financial pressure does not automatically impair Cognition;
public disgrace does not automatically wound the Character;
a broken arm does not automatically erase Authority;
an Accepted Consequence may move pressure across Capacities when the fiction
actually establishes the new Condition.
```

Finding:

```text
PASS

The third Capacity remains structurally justified, but `Background Capacity`
is no longer the best final name if its governing Attribute is Leverage.
```

---

## Test 10: Concept Coverage

```text
CHARACTER                 HIGH FUNCTION             LOW FUNCTION

Trust-fund heir           Assets                    Authority
Community organizer       Network                   Assets
Bureaucratic official     Authority                 Reputation
Famous outsider           Reputation                Authority
Exiled heir               Heritage                  Network
Self-made magnate         Assets                    Heritage
Disgraced monarch         Authority or Heritage     Reputation
Hermit                     Heritage or none           Network and Authority
```

The categories remain independently changeable:

```text
A Character may retain Authority while losing Reputation.
A Character may possess Assets without a Network.
A Character may have a Network without formal Authority.
A Character may possess Heritage without public Reputation.
A Character may be famous without possessing Authority or Assets.
```

Finding:

```text
PASS

The five functions are not merely synonyms for social advantage.

They produce distinct construction choices, Access targets, Conditions, and
recovery requirements.
```

---

## Test 11: Scale and Difficulty

```text
Leverage
= how strongly the Character can bring established worldly position to bear

Scale
= the natural frame or magnitude within which that position operates

Difficulty
= resistance facing the particular attempt within that frame
```

Assets may fund a meal, an expedition, a corporation, or a stellar polity
depending on Campaign Profile, Classification, Scale, Infrastructure, and the
fiction establishing what the Assets are.

Network may mean neighborhood contacts, a royal court, an interplanetary
alliance, or a spirit compact. Authority may govern a work crew, an army, a
nation, or a cosmic office.

The Leverage Rating alone does not silently raise the Scale of those
relationships.

Finding:

```text
PASS

The proposal uses the existing Scale and Difficulty distinctions and does not
need a worldly-action subsystem.
```

---

## Failure Search

```text
FAILURE CANDIDATE                         RESULT

Leverage becomes Influence again         Survives. Source of force selects the
                                          carrying locus.

Assets becomes accounting                Survives conditionally. Assets contains
                                          magnitude; Campaign Profiles translate
                                          it into bands or packages.

Every Character needs a Background HOLT  Survives. Ordinary Leverage uses the
                                          Attribute stack.

HOLTs need new Background Axis rules      Survives. Existing Axes point to the
                                          five Leverage Derived Attributes.

Low Leverage makes a Character incomplete Survives. Other Attributes and trained
                                          competence remain intact.

Third-Capacity Load harms all competence  Survives. Its Function Band applies to
                                          Leverage-carried Expressions.

Character creation becomes too large      Survives for testing. The model adds one
                                          Attribute, five Derived Attributes, and
                                          potentially five Active Skills while
                                          preserving the same procedures.
```

---

## Overall Finding

```text
STRONG CONDITIONAL PASS

Leverage as a fifth Attribute is more coherent than six Background umbrellas
beneath a mandatory Background HOLT.

It solves the Axis problem because every HOLT continues to express through a
Derived Attribute.

It gives worldly position an ordinary Character baseline without requiring a
special package.

It preserves objective Assets while separating ownership, Access,
mobilization, and equipment function.

It distinguishes established worldly force from direct personal Influence.

It gives the third Capacity and its Function Band a precise mechanical target.

It produces the clean 25 / 50 / 75 construction relationship.

No pink-fairy-wing exception was required.
```

---

## Candidate Architecture Produced by the Test

```text
CHARACTER

Classification

Attributes
Might / Mobility / Psyche / Influence / Leverage

Five Derived Attributes beneath each Attribute

Leverage Derived Attributes
Assets / Network / Authority / Reputation / Heritage

Skills and Specializations

Optional applicable HOLTs

HOLT Axes express through any applicable Derived Attribute, including the five
Leverage Derived Attributes

Access remains Open, Condition, or Closed

Scale defines frame

Difficulty defines resistance

Capacity and Load affect Expressions carried through their applicable locus
```

---

## Questions Not Resolved by This Test

```text
1. Is Leverage the final Attribute name?

2. Are Assets, Network, Authority, Reputation, and Heritage the final five
   Derived Attribute names and boundaries?

3. What is the final name of the Capacity governing Leverage?

4. How do Campaign Profiles translate Assets Ratings into starting equipment,
   resource bands, and ordinary availability?

5. What are the final twenty-five Active Skills, and how are Core and Campaign
   Profile Skills divided?

6. How are HOLT and Axis Ranks purchased alongside the 25 / 50 / 75 ordinary
   construction pools?

7. Does the character sheet display every unranked Derived Attribute or reveal
   a line only after investment?

8. Does Heritage adequately cover established culture, history, lineage,
   legacy, and belonging?
```

---

## Recommended Next Decision

Follow-up status:

```text
COMPLETED IN:
docs/tests/lens-leverage-derived-attribute-boundary-test-v0.1.md
```

The architecture now needs a boundary test of the five Leverage Derived
Attributes using the same action stated through competing candidates.

First boundary case:

```text
A noble secures aid from a local ruler.
```

Test separately whether the action is carried by Assets, Network, Authority,
Reputation, Heritage, or Influence. Determine what each candidate uniquely
contributes, when it creates only Access, and when it should not enter the
Expression at all.

---

## End State

```text
TEST COMPLETE

LEVERAGE FIFTH-ATTRIBUTE MODEL:
STRONG CANDIDATE FOR WORKING ADOPTION

25 / 50 / 75 CONSTRUCTION SPINE:
MATHEMATICALLY VALID CANDIDATE

FIVE LEVERAGE DERIVED ATTRIBUTES:
FUNCTIONALLY DISTINCT IN FIRST-PASS TESTING

FINAL TERMINOLOGY AND CONSTRUCTION RULES:
NOT ADOPTED
```
