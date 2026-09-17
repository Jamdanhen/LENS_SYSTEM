# LENS HOLT Provisioning Character-Creation Test

Version: 0.1  
Status: First-Pass Construction Comparison; No Final Provisioning Formula Adopted  
Date: 2026-09-01

> **Boundary notice:** `Crime Fighter` is not an established ordinary HOLT.
> The later ordinary-versus-extraordinary HOLT boundary test retains this
> document only as hypothetical provisioning arithmetic. It must not be used
> as proof that a character concept is a HOLT or that ordinary Characters
> receive starting HOLT Ranks.

---

## Purpose

Test how a Campaign Profile may provide starting HOLT Rank and Axis Ranks
without changing the selected HOLD, HOLT, Axis, and Access architecture.

The comparison asks:

```text
Does the model create an immediately usable HOLT?

Does HOLT Rank remain a cap rather than a universal multiplier?

Does the player receive meaningful control over thematic development?

Does the model preserve a distinction between ordinary competence and
higher-order thematic development?

Can one Campaign Profile change generosity without creating a different rule?

Does the model reward broad themes merely for having more imaginable Axes?
```

This test uses the newly selected Framework Capacity terminology.

---

## Controls Held Constant

```text
Attribute construction:         25 Attribute Points
Derived Attribute construction: 50 Derived Attribute Points
Training construction:          75 Training Points

Stable Lens progression:
Rank 0  = x1.0
Rank 1  = x1.1
Rank 2  = x1.2
Rank 3  = x1.3
Rank 4  = x1.4

HOLT Rank:
Sets the maximum Rank of every Axis beneath the HOLT.
Does not multiply an Expression.

Axis Rank:
Supplies the HOLT-derived modifier when the Axis is applicable and Access
permits its use.

Rounding:
Retain full precision through the calculation and floor only the final
displayed result.
```

The exact Campaign Profile, HOLD label, HOLT cost, limitation return, and
advancement currency remain test variables rather than adopted rules.

---

## Shared Test Character

```text
Character concept: Licensed urban investigator and masked crime fighter
Classification:    Human
Scale:             1

Hypothetical HOLD: Calling
Hypothetical HOLT: Crime Fighter
HOLT Rank:         4
Maximum Axis Rank: 4

Physical Capacity:  10
Mental Capacity:    10
Framework Capacity: 10
Starting Load:       0
```

`Calling` is only a diagnostic HOLD label. The test does not adopt it as a
universal LENS category.

### Attribute Allocation

```text
Might       3
Mobility    5
Psyche      7
Influence   4
Leverage    6
           --
Total      25
```

### Derived Attribute Allocation

```text
MIGHT
Strength       1
Toughness      2
Resistance     2
Vigor          2
Resilience     2
Subtotal       9

MOBILITY
Movement       2
Maneuverability 2
Stability      2
Coordination   4
Responsiveness 4
Subtotal      14

PSYCHE
Cognition      4
Learning       3
Awareness      5
Insight        5
Resolve        4
Subtotal      21

INFLUENCE
Presence       1
Projection     0
Connection     2
Manipulation   1
Control        0
Subtotal       4

LEVERAGE
Assets         0
Network        1
Authority      0
Reputation     0
Background     1
Subtotal       2

TOTAL         50
```

Unranked Derived Attributes remain available through their parent Attribute at
x1.0. They are not deficiencies.

### Shared Diagnostic Expressions Before HOLT Axes

The complete 75-point Training allocation is not needed to compare
provisioning. The three relevant Skills are held at Rank 5 in every model.

```text
SEARCH A CRIME SCENE
Psyche 7
x Awareness 1.5
x Investigation 1.5
= 15.750
Displayed: 15

MAKE A CONTROLLED RANGED ATTACK
Mobility 5
x Coordination 1.4
x Ranged Combat 1.5
= 10.500
Displayed: 10

ASK AN INFORMANT FOR CASE INFORMATION
Leverage 6
x Network 1.1
x Investigation 1.5
= 9.900
Displayed: 9
```

Difficulty, current Resonance, current Dissonance, equipment, and opposition
remain constant and are omitted. This is a construction comparison, not a
complete action-resolution test.

---

## Model A: Separate HOLT and Axis Budgets

Test provisioning:

```text
Starting HOLT Rank budget: 4
Starting Axis Rank budget: 8
```

Allocation:

```text
Crime Fighter Rank 4

Awareness Axis     4
Coordination Axis  2
Network Axis       2
                   -
Total              8
```

Diagnostic results:

```text
Crime-scene search:
15.750 x 1.4 = 22.050
Displayed: 22

Controlled ranged attack:
10.500 x 1.2 = 12.600
Displayed: 12

Informant inquiry:
9.900 x 1.2 = 11.880
Displayed: 11
```

Findings:

```text
PASS: HOLT potential and developed expression remain visibly distinct.

PASS: The player controls which Axes receive numerical development.

PASS: A broad HOLT receives no benefit merely for having more coherent Axes.

CONCERN: Two unrelated budgets must be stated and advanced.

CONCERN: Increasing HOLT Rank without Axis development raises only a ceiling
and may feel like an empty advancement.
```

Model A works but does not answer how an acquired HOLT becomes immediately
useful without an additional provisioning rule.

---

## Model B: HOLT Rank Grants Profile-Defined Axis Ranks

Diagnostic term:

```text
Axis Provisioning Factor

The number of allocable Axis Ranks granted for each HOLT Rank acquired.
```

This is a test label, not adopted terminology.

### Factor 1: Grounded Provisioning

```text
HOLT Rank 4 x Factor 1 = 4 Axis Ranks

Awareness Axis     2
Coordination Axis  1
Network Axis       1
```

```text
Crime-scene search:
15.750 x 1.2 = 18.900
Displayed: 18

Controlled ranged attack:
10.500 x 1.1 = 11.550
Displayed: 11

Informant inquiry:
9.900 x 1.1 = 10.890
Displayed: 10
```

The HOLT is usable but develops slowly across several functions.

### Factor 2: Heroic Provisioning Control

```text
HOLT Rank 4 x Factor 2 = 8 Axis Ranks
```

The same allocation and results as Model A are available:

```text
Awareness Axis     4
Coordination Axis  2
Network Axis       2

Displayed results: 22, 12, 11
```

### Factor 3: Generous Heroic Provisioning

```text
HOLT Rank 4 x Factor 3 = 12 Axis Ranks

Awareness Axis       4
Coordination Axis    3
Responsiveness Axis  2
Network Axis         2
Reputation Axis      1
```

Relevant diagnostic results:

```text
Crime-scene search:
15.750 x 1.4 = 22.050
Displayed: 22

Controlled ranged attack:
10.500 x 1.3 = 13.650
Displayed: 13

Informant inquiry:
9.900 x 1.2 = 11.880
Displayed: 11
```

The additional Ranks broaden the HOLT rather than increasing its strongest
Axis beyond the HOLT Rank cap.

### Factor 5: Mythic Provisioning Stress Test

```text
HOLT Rank 4 x Factor 5 = 20 Axis Ranks
```

This can fully develop five Axes to Rank 4.

The result is not mathematically invalid. It is materially broader than the
grounded profile and demonstrates that the provisioning factor is a Campaign
Profile power control rather than clerical detail.

### One Deep HOLT Versus Several Shallow HOLTs

Assume a total starting HOLT Rank allowance of 4 and Factor 2.

```text
ONE HOLT
Crime Fighter Rank 4
8 Axis Ranks
Maximum Axis Rank 4

TWO HOLTS
Crime Fighter Rank 2
Investigative Scholar Rank 2
8 total Axis Ranks
Maximum Axis Rank 2 beneath either HOLT

FOUR HOLTS
Four Rank 1 themes
8 total Axis Ranks
Maximum Axis Rank 1 beneath any HOLT
```

The total Axis allocation remains constant. Concentration permits deeper
Axes; thematic breadth lowers each Axis ceiling. This creates a natural choice
without a separate breadth surcharge.

Findings:

```text
STRONG PASS: Every acquired HOLT Rank raises potential and immediately grants
allocable development.

STRONG PASS: Campaign Profiles can change power generosity without changing
the HOLT or Axis rule.

STRONG PASS: Total granted Axis Ranks depend upon purchased HOLT Rank, not the
number of imaginable Axes in the theme.

STRONG PASS: One deep theme and several shallow themes create different builds
without separate pricing formulas.

CONCERN: High provisioning factors create large breadth quickly.

CONCERN: Limitation returns must be calibrated after the factor is selected or
high-powered profiles may pay twice for their intended generosity.
```

---

## Model C: Purchase HOLT and Axis Ranks From Existing Training Points

Test purchase:

```text
HOLT Rank 4: 4 Training Points
Axis Ranks 8: 8 Training Points
Total cost: 12 Training Points

Training remaining:
75 - 12 = 63

Average Rank across twenty-five Active Skills:
63 / 25 = 2.52
```

The sixty-three remaining points do not force the three relevant Skills below
Rank 5. A focused player can preserve the Crime Fighter's key Skills and remove
Ranks from unrelated Skills or Specializations.

Findings:

```text
FAIL AS A UNIVERSAL BASELINE: Training is not the fictional source of every
HOLT. Mutation, bloodline, creature nature, artifacts, social station, and
other HOLDs should not automatically consume learned-competence currency.

CONCERN: HOLT Rank costs points despite supplying no direct multiplier.

CONCERN: Focused characters can conceal the cost by abandoning unrelated
Skills, increasing pressure toward narrow optimization.

CONCERN: Buying Axis Ranks from Derived Attribute Points creates the same
category problem between ordinary focus and higher-order thematic expression.

CONDITIONAL USE: A study-based or training-based HOLD may deliberately permit
Training Points to purchase its HOLTs or Axes as a Campaign Profile rule.
```

Model C may be a valid HOLD-specific implementation. It does not survive as
the generic provisioning procedure.

---

## Limitation Pressure Test

Current doctrine permits a meaningful Closed or Conditional Access limitation
to return value for reinvestment within the same HOLT.

All three models still require numerical calibration of that return.

Model B produces the clearest boundary:

```text
1. The Campaign Profile establishes ordinary Axis generosity first.

2. A limitation is valued according to the Access and expression actually
lost, not merely according to the existence of an imaginable Axis.

3. Returned value is reinvested within the same HOLT.

4. No Axis may exceed HOLT Rank.

5. A limitation cannot be compensated once as part of generous Campaign
Profile provisioning and again as though that generosity did not exist.
```

The exact return remains unresolved. This test does not assign one point for a
Closed Axis or invent a universal conditional-access table.

---

## Comparison

| Criterion | Model A: Separate Budgets | Model B: Bundled Factor | Model C: Existing Pools |
|---|---|---|---|
| HOLT immediately usable | Only if both budgets are granted | Yes | Yes, after sacrificing ordinary construction |
| HOLT Rank remains a cap | Yes | Yes | Yes |
| Campaign power calibration | Good | Strong | Weak unless every HOLD uses Training |
| Broad-theme neutrality | Good | Strong | Mixed |
| One deep vs several shallow themes | Requires coordinated budgets | Emerges naturally | Distorted by shared-pool optimization |
| Ordinary/extraordinary distinction | Clear | Clear | Blurred |
| Number of independent profile controls | Two | One primary factor plus Rank allowance | None, but changes existing pools |
| Universal suitability | Viable | Leading | Fails |

---

## First-Pass Result

```text
LEADING MODEL:
Profile-defined Axis provisioning tied to acquired HOLT Rank.

WORKING STRUCTURE:
HOLT Rank sets Axis ceiling.
Campaign Profile or HOLD determines Axis Ranks granted per HOLT Rank.
Player allocates those Axis Ranks among coherent Axes.
Additional Axis development remains HOLD-defined.

NOT ADOPTED:
The name Axis Provisioning Factor.
Any universal numerical factor.
Any universal HOLT Rank allowance.
Any limitation return value.
Any rule requiring HOLT or Axis purchase from Training Points.
```

The test supports one architecture across grounded, heroic, and mythic play.
The Campaign Profile changes provisioning rather than changing what a HOLT or
Axis is.

---

## Exact Next Decision

Select the provisional starting controls for the first complete ordinary
Character built on the 25 / 50 / 75 construction spine:

```text
Starting total HOLT Rank allowance

Axis Ranks granted per HOLT Rank for this Campaign Profile
```

Recommended diagnostic control:

```text
Starting total HOLT Rank allowance: 4
Axis Ranks per HOLT Rank:           2
Maximum starting Axis Rank:         parent HOLT Rank
```

This recommendation is a test fixture, not a proposed universal rule.
