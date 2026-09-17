# LENS Active Skill Training Pool Test

Version: 0.1  
Status: Working Construction Test  
Purpose: Test the twenty-Skill active list against the current sixty-point
Training pool using broad, focused, and narrow allocation strategies.

Nothing in this record adopts a final Training budget, Campaign Profile,
character template, or balance rule.

---

## Question Under Test

```text
Does a twenty-Skill active list preserve meaningful Training choices when each
starting Character receives sixty shared Skill and Specialization Ranks?
```

Specific questions:

```text
Does Rank 3 across all twenty make a generalist too capable?

Do sixty Training Points still create meaningful tradeoffs?

Are Specializations worth their narrower applicability?

Do five Campaign Profile Skills meaningfully distinguish the setting-facing
Training menu?
```

---

## Active Skill List

The test uses the current fifteen Core Skills:

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

Future-Tech Exploration supplies five Campaign Profile Skills:

```text
Navigation
Vehicle Operation
Research
Engineering
Protocol
```

Active total:

```text
15 Core Skills
+ 5 Campaign Profile Skills
= 20 Active Skills
```

The Future-Tech Profile is a test implementation. Its five selections are not
adopted.

---

## Shared Character Chassis

All three Characters use the same ordinary-human numerical chassis so that
Training allocation remains the only variable.

```text
Classification: Human
Scale: 1

Might:     Rank 5
Mobility:  Rank 5
Psyche:    Rank 5
Influence: Rank 5

All twenty Derived Attributes: Rank 2

Training Points: 60
```

Every tested Expression therefore begins at:

```text
Attribute Rank 5
x Derived Attribute Rank 2

5 x 1.2
= 6
```

Untrained Expression:

```text
5 x 1.2 x 1.0
= 6
```

Excluded to isolate Training:

```text
HOLD
HOLT
Scale above 1
Equipment
Difficulty
Resonance
Dissonance
Conditions
Opposition
```

All calculations retain full precision until the displayed result of an
individual Expression is floored.

---

## Character A: Broad Generalist

Allocation:

```text
All twenty Active Skills: Rank 3

Skill Ranks:          60
Specialization Ranks:  0
Total:                60
```

Every trained Expression:

```text
5 x 1.2 x 1.3
= 7.8

Displayed Expression: 7
```

Comparison with untrained use:

```text
Untrained exact: 6.0
Generalist exact: 7.8

Exact increase: 30%
Displayed increase in this neutral chassis: 1 point
```

The broad generalist is trained in every active field but possesses no deep
Skill or Specialization.

---

## Character B: Focused Professional

Concept:

```text
Future-tech security investigator with broad operational competence and two
developed professional specialties.
```

Skill allocation:

```text
Athletics:         Rank 2
Stealth:           Rank 2
Survival:          Rank 1
Unarmed Combat:    Untrained
Melee:             Untrained
Ranged Combat:     Rank 4
Tactics:           Rank 3
Investigation:     Rank 8
Medicine:          Rank 1
Language:          Rank 2
Security:          Rank 7
Persuasion:        Rank 3
Deception:         Untrained
Command:           Rank 2
Intimidation:      Untrained

Navigation:        Rank 3
Vehicle Operation: Rank 3
Research:          Rank 3
Engineering:       Rank 4
Protocol:          Untrained
```

Specializations:

```text
Crime Scenes [Investigation]: Rank 6
Network Intrusion [Security]: Rank 6
```

Totals:

```text
Skill Ranks:          48
Specialization Ranks: 12
Total:                60
```

Representative Expressions:

```text
Rank 1 Skill
6 x 1.1 = 6.6
Displayed: 6

Rank 2 Skill
6 x 1.2 = 7.2
Displayed: 7

Rank 3 Skill
6 x 1.3 = 7.8
Displayed: 7

Rank 4 Skill
6 x 1.4 = 8.4
Displayed: 8

Investigation Rank 8
6 x 1.8 = 10.8
Displayed: 10

Crime Scenes Rank 6
6 x 1.8 x 1.6 = 17.28
Displayed: 17

Security Rank 7
6 x 1.7 = 10.2
Displayed: 10

Network Intrusion Rank 6
6 x 1.7 x 1.6 = 16.32
Displayed: 16
```

The focused professional sacrifices universal coverage and maximum peaks to
combine broad competence with two recognizable specialties.

---

## Character C: Narrow Specialist

Concept:

```text
Highly concentrated tactical operative whose competence collapses sharply
outside three trained fields.
```

Allocation:

```text
Investigation: Rank 10
Security:      Rank 10
Ranged Combat: Rank 10

Crime Scenes [Investigation]: Rank 10
Network Intrusion [Security]: Rank 10
Precision Shooting [Ranged Combat]: Rank 10

All other Active Skills: Untrained
```

Totals:

```text
Skill Ranks:          30
Specialization Ranks: 30
Total:                60
```

Parent Skill Expression:

```text
6 x 2.0
= 12
```

Exact Specialization Expression:

```text
6 x 2.0 x 2.0
= 24
```

Untrained Expression:

```text
6
```

The narrow specialist reaches dramatic peaks but remains untrained in
seventeen of the twenty active fields.

---

## Shared Twenty-Task Suite

One representative task was assigned to every Active Skill:

```text
1.  Athletics: cross a damaged gantry.
2.  Stealth: enter a secured compartment unnoticed.
3.  Survival: endure and manage a hostile planetary environment.
4.  Unarmed Combat: restrain a hostile crew member.
5.  Melee: fight with a close-combat implement.
6.  Ranged Combat: strike a distant exposed relay.
7.  Tactics: coordinate entry into an occupied compartment.
8.  Investigation: process a crime scene.
9.  Medicine: stabilize an injured crew member.
10. Language: communicate through a known trade language.
11. Security: penetrate a protected network.
12. Persuasion: obtain voluntary cooperation.
13. Deception: conceal the crew's actual objective.
14. Command: direct an emergency evacuation.
15. Intimidation: force an armed opponent to hesitate.
16. Navigation: plot a route through an unstable region.
17. Vehicle Operation: perform a precise shuttle maneuver.
18. Research: retrieve and compare archived records.
19. Engineering: restore a damaged system.
20. Protocol: conduct a formal first-contact exchange.
```

The three narrow-specialist tasks deliberately match all three
Specializations in the full spotlight suite.

---

## Full Spotlight Results

The following totals are diagnostic comparisons only. LENS does not combine
twenty unrelated Expressions into one score during play.

| Character | Exact Aggregate | Sum of Displayed Expressions |
|---|---:|---:|
| Broad Generalist | 156.0 | 140 |
| Focused Professional | 161.4 | 154 |
| Narrow Specialist | 174.0 | 174 |

Interpretation:

```text
Broad Generalist
Produces the same shallow trained result across all twenty tasks.

Focused Professional
Edges past the generalist only because both selected Specializations receive
their exact spotlight.

Narrow Specialist
Leads when all three exact Specializations appear, despite remaining untrained
in seventeen tasks.
```

---

## Applicability Control

The specialist tasks were then changed while preserving the same parent
Skills:

```text
Investigation:
analyze maintenance discrepancies rather than process a crime scene.

Security:
inspect physical credential procedure rather than penetrate a network.

Ranged Combat:
provide suppressing fire rather than make a precision shot.
```

Narrow-specialist result by exact Specializations applying:

| Exact Specializations Applying | Exact Aggregate |
|---:|---:|
| 0 of 3 | 138 |
| 1 of 3 | 150 |
| 2 of 3 | 162 |
| 3 of 3 | 174 |

Broad-generalist control:

```text
156 exact at every applicability level
```

Finding:

```text
The narrow specialist must receive at least two of three exact specialty
spotlights in this evenly weighted suite before exceeding the generalist's
overall exact coverage.
```

Focused-professional result:

| Exact Specializations Applying | Exact Aggregate |
|---:|---:|
| Neither | 148.80 |
| Crime Scenes only | 155.28 |
| Network Intrusion only | 154.92 |
| Both | 161.40 |

Finding:

```text
The focused professional exceeds the broad generalist's 156 exact aggregate
only when both chosen Specializations apply in this evenly weighted suite.
```

The displayed aggregate can differ slightly from the exact comparison because
every individual Expression floors independently. Aggregate totals are not a
game mechanic and should not be used to create a new rounding rule.

---

## Campaign Profile Skill Test

The five Future-Tech Skills produce visible allocation differences:

| Profile Skill | Generalist | Focused Professional | Narrow Specialist |
|---|---:|---:|---:|
| Navigation | Rank 3 | Rank 3 | Untrained |
| Vehicle Operation | Rank 3 | Rank 3 | Untrained |
| Research | Rank 3 | Rank 3 | Untrained |
| Engineering | Rank 3 | Rank 4 | Untrained |
| Protocol | Rank 3 | Untrained | Untrained |

Finding:

```text
The Campaign Profile changes the fields available for recurring investment,
but it does not force every Character to develop them equally.

The generalist embraces the whole Profile.

The professional selects the portions relevant to a role.

The specialist may ignore Profile Skills entirely and rely on untrained
Expressions outside a narrow identity.
```

---

## Test Findings

```text
1. Rank 3 across all twenty does not appear overwhelmingly capable in the
   isolated neutral chassis.

2. The broad generalist gains 30% exact trained support over an untrained
   Expression but spends the entire Training pool to obtain that coverage.

3. The broad generalist receives no Specialization and no high Skill peak.

4. Sixty Training Points create three mechanically distinct allocation
   strategies without changing Rank costs.

5. The focused professional combines useful breadth, stronger parent Skills,
   and two major specialty peaks.

6. The narrow specialist produces exceptional results only when the fiction
   makes the exact Specializations applicable.

7. Specializations remain valuable, but their value is controlled by
   applicability rather than a separate balancing rule.

8. The fifteen-plus-five active list gives Campaign Profile selection visible
   mechanical meaning without creating Profile-specific Skill rules.

9. Untrained defaulting keeps omitted fields playable.

10. The test does not justify changing the sixty-point Training pool.
```

---

## Working Recommendation Produced by Test

```text
Retain the current construction control for the next test cycle:

20 Active Skills
60 shared Training Points
Skill and Specialization Rank cost of one point per Rank

Do not impose even distribution.

Do not change Specialization cost or applicability based on this test.
```

This is a test recommendation, not a final adoption.

---

## Remaining Boundary

The next Skill-construction question is:

```text
What happens when a player wants a valid Skill that is neither one of the
fifteen Core Skills nor one of the Campaign Profile's five active selections?
```

Possible procedures remain unresolved. The answer must preserve player
adaptation without making the twenty-Skill Campaign Profile meaningless or
creating a second Skill economy.

---

## Post-Test Decision: Player-Proposed Skills

Status:

```text
WORKING LOCK FOR CURRENT CONSTRUCTION AND PLAYTESTING
```

The twenty Active Skills are a shared Campaign Profile vocabulary, not a closed
catalogue.

A player may propose another Skill by explaining its learned field, recurring
applications, and place within the scope and fiction of the campaign.

If the Skill makes sense and has breadth comparable to existing Skills, it
becomes available to the Character under the ordinary Skill rules.

```text
Same Training Point cost
Same Rank progression
Same Derived Attribute routing
Same applicability rule
Same Specialization procedure
```

The Character receives no free Ranks or additional Training Points. Approval
makes the Skill available for purchase from the existing Training pool.

The Skill does not create extraordinary permission or applicability unsupported
by the fiction.
