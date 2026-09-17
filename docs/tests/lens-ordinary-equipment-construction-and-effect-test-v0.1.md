# LENS Ordinary Equipment Construction and Effect Test

Version: 0.1  
Status: First-Pass Architecture and Numerical Test; No Final Equipment Values Adopted  
Date: 2026-09-01

---

> **Subsequent working decision:** Later modifier-band and cross-profile tests
> established `x1.00` through `x1.30` in `x0.05` increments as the working
> ordinary personal-equipment modifier range. Campaign Profiles determine
> which bands they use and what occupies them. Individual equipment
> placements, armor values, and shield functions remain provisional.

---

## Purpose

Use the completed ordinary Character from:

```text
C:\LENS-SYSTEM\docs\tests\lens-character-creation-vertical-slice-v0.3.md
```

to test:

```text
starting equipment;

equipment acquisition during play;

purchase and functional Scale;

Cost Difficulty;

Availability;

Access;

equipment Expression modifiers;

and matching Effect properties.
```

The test must not allow one number to represent price, availability, legality,
permission, magnitude, and mechanical function simultaneously.

---

## Test Character

Relevant stable values from vertical slice v0.3:

```text
Classification: Human
Personal Scale: 1

Leverage:  6
Assets:    Rank 1 = x1.1
Network:   Rank 1 = x1.1
Authority: Rank 1 = x1.1

Commerce:       Rank 1 = x1.1
Administration: Rank 2 = x1.2
Streetwise:     Rank 3 = x1.3

Service Pistol Expression before equipment modifier: 11.830
Quick Unarmed Strike:                              7.800
Crime-Scene Evidence Expression:                  30.240
```

Relevant acquisition routes:

```text
Personal purchase:
Leverage 6 x Assets 1.1 x Commerce 1.1 = 7.260

Institutional requisition:
Leverage 6 x Authority 1.1 x Administration 1.2 = 7.920

Established informal or illicit source:
Leverage 6 x Network 1.1 x Streetwise 1.3 = 8.580
```

These routes perform different fictional functions. They are not stacked into
one acquisition Expression merely because each might help obtain an item.

---

## Equipment Record Anatomy Under Test

The first-pass equipment record separates six questions.

```text
Function
What does the item mechanically permit, support, enhance, mitigate, convert,
redirect, store, or expose?

Functional Scale
At what Scale does each relevant function operate?

Purchase Scale
What magnitude of asset, infrastructure, or acquisition apparatus is involved?

Cost Difficulty
How financially resistant is this acquisition within the Purchase Scale?

Availability
Does an appropriate market, source, stock, producer, or transfer currently
exist here?

Access
Does this Character currently possess a valid route, permission, relationship,
credential, or other basis to acquire or use it?
```

Ownership and control are also recorded where their source matters, but they do
not require a separate universal rating in this test.

---

## Scale Boundary

The test applies the existing doctrine:

```text
Scale defines the frame.

Difficulty defines resistance within that frame.
```

Applied to acquisition:

```text
Purchase Scale defines the magnitude of the acquisition being attempted.

Cost Difficulty defines financial resistance within that magnitude.
```

The target asset's Scale does not automatically multiply the buyer's
Expression.

```text
Incorrect:
The castle is Scale 2, so every buyer automatically receives the Scale 2
modifier while trying to buy it.

Current test control:
The acquisition Expression operates at the Scale of the Assets, Authority,
Network, financing structure, institution, or other apparatus the Character
can actually bring to bear.
```

A Scale 1 Character may own or control a Scale 2 asset. Ownership does not make
the Character personally Scale 2.

The asset becomes a higher-Scale Lens only when a relevant higher-Scale
function is brought to bear.

Examples:

```text
A castle's defenses, territory, staff, stores, and facilities may act as
Scale 2 Infrastructure.

The owner's personal sword strike remains Scale 1.

A starship may possess higher-Scale Movement, defenses, and weapons while its
ordinary manual controls or onboard human reasoning remain Scale 1.
```

An item may therefore possess different Functional Scales for different
functions. No universal item Scale automatically applies to every use.

---

## Illustrative Asset Separation

These entries test separation of Scale and Cost Difficulty. Their values are
illustrative rather than adopted.

| Asset | Purchase Scale | Cost Difficulty | Availability | Access |
|---|---:|---:|---|---|
| Functioning castle | 2 | 4 | Conditional | Seller, title, lawful transfer, financing, or another valid route |
| Ruined castle | 2 | 2 | Conditional | Seller or controlling authority and lawful transfer |
| Restore ruined castle | 2 | 5 | Project-dependent | Labor, materials, expertise, time, and control of the site |
| Rare enchanted ring | 1 | 7 | Scarce | Valid magical source or another setting-approved route |

The comparison produces three distinct cases:

```text
Cheap large-scale asset
Ruined castle or obsolete ship.

Expensive small-scale asset
Rare jewel, prototype, or enchanted ring.

Expensive large-scale asset
Functioning fortress, warship, or major estate.
```

Cost does not establish Scale. Scale does not establish cost.

---

## Starting Equipment Test

Starting equipment is construction, not an acquisition roll.

The Grounded Urban Investigation Campaign Profile supplies three categories.

### 1. Assumed Ordinary Possessions

```text
Ordinary clothing
ordinary personal communication
ordinary household possessions
routine personal transportation or transit Access appropriate to the Profile
minor tools and consumables established by the Character concept
```

These do not require item-by-item rolls or an exhaustive inventory.

### 2. Institutional Package Through Authority

For the Municipal Investigator:

```text
Service pistol
expandable baton
protective vest
communications device
investigation kit
access credentials
```

The Character begins with this package because the Campaign Profile,
Municipal Investigator identity, and valid Authority establish its source and
Access.

The package does not require a starting acquisition roll.

Institutional source remains mechanically meaningful:

```text
The items may be recalled, restricted, inspected, replaced, denied, or made
Conditional through changes in Authority, credentials, employment, policy, or
Framework Conditions.
```

### 3. Personally Controlled Significant Equipment Through Assets

The Campaign Profile may translate the stable Assets Rating into a bounded
selection, band, or package of personally controlled equipment.

The current Assets Rating is:

```text
Leverage 6 x Assets 1.1 = 6.600
```

The exact translation from `6.600` to starting possessions remains unresolved.

### Starting-Equipment Result

```text
PASS:
Starting equipment can be sourced through Campaign Profile, Authority, and
Assets without rolling during construction.

PASS:
The source of the item can remain relevant after construction without changing
what the item mechanically does.

UNRESOLVED:
The translation from a stable Assets Rating to personally selected starting
equipment.
```

---

## In-Play Acquisition Procedure Under Test

```text
1. Declare the asset or equipment being sought.

2. Identify its Purchase Scale.

3. Confirm that the Character has an acquisition route capable of operating at
   that Scale.

4. Determine Cost Difficulty within that Scale.

5. Determine Availability.

6. Determine Access.

7. Identify distinct regional, market, legal, logistical, or setting Lenses.

8. Select one carrying acquisition route.

9. Resolve the Leverage Expression if uncertainty remains.

10. Record any resulting possession, obligation, Assets Condition, Access
    change, or Infrastructure relationship.
```

Possible carrying routes include:

```text
Assets + Commerce
Personal purchase, financing, liquidation, credit, or exchange.

Authority + Administration
Requisition, allocation, procurement, seizure, or institutional issue.

Network + Streetwise
Established contacts, brokers, favors, informal exchange, or illicit sourcing.
```

The route determines which capability is being tested and what consequences
may follow.

---

## Direct Cost-Difficulty Mapping Test

Candidate under test:

```text
Cost Difficulty 1 = Difficulty 1
Cost Difficulty 2 = Difficulty 2
Cost Difficulty 3 = Difficulty 3
and so forth
```

The current Assets purchase route is:

```text
7.260
```

Direct application of the current Difficulty curve produces:

| Cost Difficulty | Difficulty multiplier | Full-precision result | Displayed Rating |
|---:|---:|---:|---:|
| 1 | 0.98 | 7.114800 | 7 |
| 2 | 0.588 | 4.268880 | 4 |
| 3 | 0.3528 | 2.561328 | 2 |
| 4 | 0.21168 | 1.536797 | 1 |
| 5 | 0.127008 | 0.922078 | 0 |

The Authority route produces:

| Cost Difficulty | Full-precision result | Displayed Rating |
|---:|---:|---:|
| 1 | 7.761600 | 7 |
| 2 | 4.656960 | 4 |
| 3 | 2.794176 | 2 |
| 4 | 1.676506 | 1 |
| 5 | 1.005903 | 1 |

The Network route produces:

| Cost Difficulty | Full-precision result | Displayed Rating |
|---:|---:|---:|
| 1 | 8.408400 | 8 |
| 2 | 5.045040 | 5 |
| 3 | 3.027024 | 3 |
| 4 | 1.816214 | 1 |
| 5 | 1.089729 | 1 |

### Direct-Mapping Finding

The math functions, but the current curve is extremely steep as a universal
price ladder.

```text
Cost Difficulty 1 is nearly neutral.

Cost Difficulty 2 removes 41.2% of the Base Expression.

Cost Difficulty 3 removes 64.72% of the Base Expression.
```

Therefore:

```text
Cost Difficulty may use the existing Difficulty mechanic.

Cost Difficulty should not receive a universal descriptive mapping such as
"meaningful ordinary expense always equals Difficulty 2" without Campaign
Profile and Character-position testing.
```

Routine acquisitions should normally be assumed, included in construction, or
resolved without a roll. Cost Difficulty enters when financial uncertainty or
resistance genuinely exists.

The one-to-one numerical mapping remains viable only if the Campaign Profile
assigns Cost Difficulty after considering Purchase Scale, the acquisition
route, and what counts as routine within that economy. The illustrative
Cost-Rank descriptions are not adopted.

---

## Acquisition Scale Math Test

The active Scale model uses:

```text
Scale 1 = x1.0
Scale 2 = x1.6
```

If the Municipal Investigator somehow gains a valid Scale 2 acquisition route,
the Assets purchase Expression becomes:

```text
Leverage 6
x Assets 1.1
x Commerce 1.1
x Scale 2 modifier 1.6
= 11.616
```

That modifier is permitted only because a separate Lens has expanded the
acting acquisition apparatus to Scale 2. The castle's own Scale does not grant
it.

Applying the direct Difficulty mapping:

| Cost Difficulty | Full-precision result | Displayed Rating |
|---:|---:|---:|
| 1 | 11.383680 | 11 |
| 2 | 6.830208 | 6 |
| 3 | 4.098125 | 4 |
| 4 | 2.458875 | 2 |
| 5 | 1.475325 | 1 |

Scale expands the frame and capability, but does not erase Cost Difficulty.

The Scale test therefore passes only with this control:

```text
Use the Scale of the acting acquisition relationship.

Do not use the target asset's Scale as a free bonus to the buyer.
```

---

## Availability and Access Test

Availability and Access answer different questions.

```text
Availability
Does an obtainable instance or source currently exist here?

Access
Can this Character use a valid route to obtain it?
```

### Service Pistol in the Grounded Urban Profile

```text
Purchase Scale: 1
Availability:   Present but regulated
Access:         Conditional
Condition:      recognized institutional issue, lawful license, or another
                valid route
```

The Municipal Investigator satisfies institutional Access through valid
Authority and credentials.

### Restricted Tactical Weapon

```text
Purchase Scale: 1
Availability:   Limited
Access:         Conditional
Condition:      qualifying Authority, license, assignment, or illicit route
```

High Assets alone do not create legal or institutional permission.

### Magical Item in a Low-Magic Profile

```text
Purchase Scale: 1 unless another function establishes a higher Scale
Availability:   Scarce or absent
Access:         Conditional or Closed
```

If no magical source exists in the region, Assets cannot manufacture one.
Another route must first establish Availability or Access.

### Double-Counting Control

```text
If scarcity has already established Cost Difficulty, do not apply the same
scarcity again as Dissonance.

Apply additional Dissonance only for a fictionally distinct problem, such as:

locating a hidden seller;
evading legal scrutiny;
crossing a blockade;
transporting the asset;
operating through a hostile market;
or verifying authenticity.
```

---

## Equipment Function Test

The following values are diagnostic controls, not adopted equipment ratings.

| Item | Permission or form | Test Expression modifier | Test Effect function |
|---|---|---:|---|
| Expandable baton | Reach; Impact | x1.05 | None automatic |
| Service pistol | Ranged; Ballistic | x1.20 | None automatic |
| Protective vest | Worn ballistic protection | None | Mitigation 1 against matching covered Ballistic or Piercing Effect |
| Investigation kit | Instrumented examination | x1.05 when applicable | May instead establish required tool Access |
| Communications device | Remote communication through available network | None | Establishes delivery Access |
| Access credentials | Recognized institutional identity | None | Establishes Conditional Access when valid |

One item may possess several distinct functions. The same function is not
counted twice.

Example:

```text
If the Investigation Kit grants required tool Access, it does not also remove
the same missing-tool Dissonance and add a modifier for that identical
contribution.

Another distinct property may still contribute when the fiction supports it.
```

---

## Expression Modifier Test

### Expandable Baton

Personal capability before equipment:

```text
Mobility 5
x Coordination 1.3
x Melee 1.1
= 7.150
```

With diagnostic equipment modifier:

```text
7.150 x 1.05 = 7.5075

Displayed Rating: 7
```

The x1.05 modifier disappears after final flooring in this specific stack.
The baton still contributes reach, Impact form, availability, and a physical
object that can be lost, broken, denied, or used as opposition.

### Service Pistol

Personal capability before equipment:

```text
11.830
```

With diagnostic equipment modifier:

```text
11.830 x 1.20 = 14.196

Displayed Rating: 14
```

The firearm produces a meaningful but controlled increase without changing the
Character's Scale or granting unrelated competence.

### Investigation Kit

Personal Crime-Scene Expression before equipment:

```text
30.240
```

With diagnostic equipment modifier:

```text
30.240 x 1.05 = 31.752

Displayed Rating: 31
```

Small equipment increments become more visible on larger Base Expressions.
This interaction must be considered when final equipment bands are chosen.

---

## Effect Test

The current Effect procedure remains:

```text
Successful Expression
= 1 baseline Effect Level
+ 1 additional Effect Level for each complete 10 points of applicable margin
```

### Pistol and Unarmed Comparison

Use the same successful roll of 2.

Unarmed:

```text
Final Rating:      7.800
Successful Margin: 5.800
Generated Effect:  1 Impact Effect Level
```

Service pistol with diagnostic x1.20 modifier:

```text
Final Rating:      14.196
Successful Margin: 12.196
Generated Effect:  2 Ballistic Effect Levels
```

On a less favorable successful roll, both may generate one Effect Level. Their
forms still differ and may interact with different mitigation, vulnerabilities,
recovery, legality, collateral consequences, and narrative results.

The ordinary service pistol does not automatically add a separate Wounding
Effect Level in this test.

A named `Wounding` property could supply Effect Enhancement if a Campaign
Profile assigns it to a particular exceptional weapon, ammunition, artifact,
or other Lens. That property is not assumed for every ordinary weapon.

### Protective Vest

Incoming result:

```text
Generated Effect: 2 Wounded [Ballistic] Levels
```

Protective vest:

```text
Mitigation 1 against matching covered Ballistic or Piercing Effect
```

Applied result:

```text
2 generated levels
- 1 matching mitigation
= 1 applied Wounded [Ballistic] Level
```

The vest does not reduce the attacker's roll, erase the attack, or create a
secondary damage contest. It performs one traceable Effect function after the
primary resolution.

---

## Major Purchase Consequences

A successful acquisition does not always leave Assets unchanged.

Possible outcomes using the existing architecture include:

```text
Routine purchase
No persistent consequence.

Straining purchase
Assets Strained Condition and Framework Load.

Credit-financed purchase
Debt or Obligation Condition.

Conversion purchase
Liquid Assets become a castle, ship, workshop, or other holding.

Transformative purchase
The Character's stable Assets truth, Access, obligations, or Infrastructure
relationships require lasting revision.
```

No automatic number of Condition Levels is assigned here. The relationship
between Cost Difficulty, generated Effect, financial strain, and lasting asset
conversion requires a separate test.

---

## First-Pass Findings

```text
PASS:
Function, Functional Scale, Purchase Scale, Cost Difficulty, Availability, and
Access perform distinct jobs.

PASS:
Starting equipment can be assigned through Campaign Profile, Authority, and
Assets without acquisition rolls during character creation.

PASS:
Scale distinguishes asset magnitude from expense and does not automatically
change the owner's personal Scale.

PASS WITH CONTROL:
An acquisition Expression uses the Scale of the resources or institution
actually being mobilized, not the target asset's Scale as a free modifier.

PASS:
Equipment can grant permission, an Expression modifier, Effect Enhancement,
Mitigation, Conversion, Redirection, Storage, Access, or exposure through the
same universal Lens grammar.

FAIL AS A UNIVERSAL TRANSLATION:
Cost Difficulty descriptions cannot map automatically to the current
Difficulty Ranks without Campaign Profile and Character-position calibration.

WORKING-LOCKED BY LATER TESTS:
The ordinary personal-equipment modifier range is x1.00 through x1.30 in x0.05
increments. Campaign Profiles determine band use and placement.

UNRESOLVED:
Individual equipment placement, starting Assets translation, Cost-Difficulty
assignment procedure, major-purchase Condition procedure, armor values, and
shield functions.
```

The strongest surviving acquisition architecture is:

```text
Purchase Scale defines the acquisition frame.

Cost Difficulty defines financial resistance within that frame.

Availability determines whether an obtainable source exists.

Access determines whether the Character has a valid route.

The selected Leverage route determines which established capability is
actually being mobilized.
```

---

## Subsequent Test Resolution

The proposed modifier comparison was completed in:

```text
C:\LENS-SYSTEM\docs\tests\lens-ordinary-equipment-modifier-band-test-v0.1.md
C:\LENS-SYSTEM\docs\tests\lens-concrete-equipment-placement-opposed-play-test-v0.1.md
C:\LENS-SYSTEM\docs\tests\lens-fantasy-equipment-package-comparison-test-v0.1.md
```

Those tests support the working-locked range while leaving item placement and
Campaign Profile implementation provisional.
