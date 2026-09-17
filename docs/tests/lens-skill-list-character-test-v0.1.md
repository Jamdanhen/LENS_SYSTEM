# LENS Skill List Character Test

Version: 0.1  
Status: Working Construction Test  
Purpose: Test the provisional thirty-Skill list and sixty-Training-Point
economy through three characters with different allocation strategies.

Nothing in this record adopts the Skill list, character templates, or a new
balance rule.

---

## Test Controls

All three characters use the same system-neutral ordinary-human chassis.

```text
Classification: Human
Scale: 1

Might:     Rank 5
Mobility:  Rank 5
Psyche:    Rank 5
Influence: Rank 5

All twenty Derived Attributes: Rank 2

Total Attribute Points:         20
Total Derived Attribute Points: 40
Total Training Points:          60
```

Every tested Expression therefore begins with the same pre-Training value:

```text
Attribute Rank 5
x Derived Attribute Rank 2

5 x 1.2
= 6
```

Untrained ordinary Expression:

```text
5 x 1.2 x 1.0
= 6
```

Excluded from this test:

```text
HOLD
HOLT
Classification permissions beyond ordinary humanity
Equipment modifiers
Scale modifiers above Scale 1
Difficulty
Resonance
Dissonance
Conditions
Opposition
```

Those are excluded to isolate the Skill and Specialization economy.

All calculations retain full precision. Each individual displayed Expression
is floored only after its complete calculation.

---

## Provisional Skill List Under Test

```text
Athletics
Stealth
Survival
Animal Handling
Navigation
Vehicle Operation

Unarmed Combat
Melee
Ranged Combat
Tactics
Strategy

Investigation
Research
Scholarship
Medicine
Linguistics
Teaching
Meditation

Craft
Engineering
Security
Arts

Persuasion
Deception
Command
Intimidation
Commerce
Streetwise
Administration
Protocol
```

Provisional total:

```text
30 Skills
```

---

## Character A: Broad Generalist

Training allocation:

```text
Administration:    Rank 5
Strategy:          Rank 5
Teaching:          Rank 5
Meditation:        Rank 5
Athletics:         Rank 5
Investigation:     Rank 5
Security:          Rank 5
Protocol:          Rank 5
Persuasion:        Rank 5
Tactics:           Rank 5
Ranged Combat:     Rank 5
Vehicle Operation: Rank 5

Specializations: None

Total Training Points: 60
```

Any tested trained Expression:

```text
5 x 1.2 x 1.5
= 9

Displayed Expression: 9
```

Character identity created by allocation:

Broadly capable across the entire test sequence without a narrow area of
mastery.

---

## Character B: Focused Professional

Training allocation:

```text
Administration:    Rank 2
Strategy:          Rank 4
Meditation:        Rank 3
Athletics:         Rank 4
Investigation:     Rank 8
Security:          Rank 7
Protocol:          Rank 3
Persuasion:        Rank 5
Tactics:           Rank 4
Ranged Combat:     Rank 5
Vehicle Operation: Rank 3

Teaching:          Untrained

Crime Scenes [Investigation]: Rank 8
Locks [Security]:              Rank 4

Skill Ranks:          48
Specialization Ranks: 12
Total Training Points: 60
```

Representative Expressions:

```text
Administration
5 x 1.2 x 1.2
= 7.2
Displayed: 7

Strategy or Athletics
5 x 1.2 x 1.4
= 8.4
Displayed: 8

Investigation without Crime Scenes
5 x 1.2 x 1.8
= 10.8
Displayed: 10

Crime Scenes [Investigation]
5 x 1.2 x 1.8 x 1.8
= 19.44
Displayed: 19

Security without Locks
5 x 1.2 x 1.7
= 10.2
Displayed: 10

Locks [Security]
5 x 1.2 x 1.7 x 1.4
= 14.28
Displayed: 14

Untrained Teaching
5 x 1.2 x 1.0
= 6
Displayed: 6
```

Character identity created by allocation:

A broadly functional field investigator with pronounced mastery of crime
scenes and physical locks.

---

## Character C: Narrow Specialist

Training allocation:

```text
Investigation: Rank 10
Crime Scenes [Investigation]: Rank 10

Security: Rank 10
Locks [Security]: Rank 10

Ranged Combat: Rank 10
Precision Shooting [Ranged Combat]: Rank 10

Skill Ranks:          30
Specialization Ranks: 30
Total Training Points: 60
```

Representative Expressions:

```text
Parent Skill without Specialization
5 x 1.2 x 2.0
= 12
Displayed: 12

Exact Specialization
5 x 1.2 x 2.0 x 2.0
= 24
Displayed: 24

Untrained field
5 x 1.2 x 1.0
= 6
Displayed: 6
```

Character identity created by allocation:

Exceptional in three narrow applications, substantially trained in their
three parent fields, and otherwise dependent on ordinary capability.

---

## Shared Scene

The scene contains twelve Expressions.

```text
1. Administration
Route an urgent permit and records request through a public office.

2. Strategy
Plan a recovery operation spanning several locations and stages.

3. Teaching
Brief inexperienced civilians on a procedure they must perform.

4. Meditation
Regain deliberate focus after a disturbing discovery.

5. Athletics
Cross a broken service structure.

6. Investigation
Reconstruct what occurred at the point of entry.

7. Security
Bypass a protected barrier.

8. Protocol
Present credentials inside a formal institution without violating procedure.

9. Persuasion
Convince a reluctant clerk to cooperate voluntarily.

10. Tactics
Respond coherently when the recovery operation becomes an ambush.

11. Ranged Combat
Attack a hostile participant at range.

12. Vehicle Operation
Control the escape vehicle during pursuit.
```

This suite deliberately includes all three GURPS-exposed Skill additions and a
broad range of existing candidates.

---

## Suite A: Exact-Specialty Spotlight

The scene precisely invokes all three of Character C's Specializations.

```text
Investigation task: Crime Scene Analysis
Security task: Physical Lock
Ranged task: Precision Shot
```

Displayed Expressions:

| Expression | Generalist | Professional | Specialist |
|---|---:|---:|---:|
| Administration | 9 | 7 | 6 |
| Strategy | 9 | 8 | 6 |
| Teaching | 9 | 6 | 6 |
| Meditation | 9 | 7 | 6 |
| Athletics | 9 | 8 | 6 |
| Crime Scene Investigation | 9 | 19 | 24 |
| Physical Lock Security | 9 | 14 | 24 |
| Protocol | 9 | 7 | 6 |
| Persuasion | 9 | 9 | 6 |
| Tactics | 9 | 8 | 6 |
| Precision Ranged Attack | 9 | 9 | 24 |
| Vehicle Operation | 9 | 7 | 6 |

Diagnostic coverage totals:

```text
Generalist:   108
Professional: 109
Specialist:   126
```

These totals are not a game mechanic. They only compare displayed Expression
coverage across the same twelve-task suite.

Finding:

The specialist dominates when the scene is deliberately constructed to invoke
every purchased Specialization. This is the intended best-case condition for
narrow mastery.

---

## Suite B: Mixed Applicability

Only one of Character C's three Specializations applies.

```text
Investigation task: Crime Scene Analysis
Security task: Network Intrusion
Ranged task: Suppressing Fire
```

The parent Security and Ranged Combat Skills still apply, but Locks and
Precision Shooting do not.

Displayed Expressions:

| Expression | Generalist | Professional | Specialist |
|---|---:|---:|---:|
| Administration | 9 | 7 | 6 |
| Strategy | 9 | 8 | 6 |
| Teaching | 9 | 6 | 6 |
| Meditation | 9 | 7 | 6 |
| Athletics | 9 | 8 | 6 |
| Crime Scene Investigation | 9 | 19 | 24 |
| Network Security | 9 | 10 | 12 |
| Protocol | 9 | 7 | 6 |
| Persuasion | 9 | 9 | 6 |
| Tactics | 9 | 8 | 6 |
| Suppressing Fire | 9 | 9 | 12 |
| Vehicle Operation | 9 | 7 | 6 |

Diagnostic coverage totals:

```text
Generalist:   108
Professional: 105
Specialist:   102
```

Finding:

The three allocation styles converge when only one exact Specialization is
invoked. Character identity remains visible without one strategy becoming
universally dominant.

---

## Suite C: Adjacent Parent-Skill Tasks

None of Character C's Specializations applies, but all three parent Skills do.

```text
Investigation task: Financial Anomaly
Security task: Alarm-Network Analysis
Ranged task: Suppressing Fire
```

Displayed Expressions:

| Expression | Generalist | Professional | Specialist |
|---|---:|---:|---:|
| Administration | 9 | 7 | 6 |
| Strategy | 9 | 8 | 6 |
| Teaching | 9 | 6 | 6 |
| Meditation | 9 | 7 | 6 |
| Athletics | 9 | 8 | 6 |
| Financial Investigation | 9 | 10 | 12 |
| Alarm-Network Security | 9 | 10 | 12 |
| Protocol | 9 | 7 | 6 |
| Persuasion | 9 | 9 | 6 |
| Tactics | 9 | 8 | 6 |
| Suppressing Fire | 9 | 9 | 12 |
| Vehicle Operation | 9 | 7 | 6 |

Diagnostic coverage totals:

```text
Generalist:   108
Professional: 96
Specialist:   90
```

Finding:

The generalist dominates broad coverage when no exact Specialization applies.
The specialist remains better than an untrained Character inside each parent
Skill but falls behind across the whole scene.

---

## Skill Routing Check

The Security Skill does not dictate one Derived Attribute.

```text
Awareness + Security
Notice the alarm and its sensors.

Insight + Security
Infer how the protective system responds.

Cognition + Security
Plan the bypass.

Coordination + Security
Manipulate the physical lock.

Control + Security
Operate the system after obtaining Access.
```

The Skill supplies trained security practice.

The Derived Attribute identifies the capability through which that practice is
currently expressed.

The same structure also works for Strategy, Teaching, Meditation, Protocol,
Investigation, combat Skills, and other tested fields.

---

## Test Findings

### Thirty-Skill Usability

The thirty-entry list does not break the construction economy.

The three characters purchased:

```text
Generalist:
12 Skills
0 Specializations

Focused Professional:
11 Skills
2 Specializations

Narrow Specialist:
3 Skills
3 Specializations
```

The list is mechanically usable because characters need not purchase or record
a separate Rank in every Skill. Whether thirty names are comfortable on the
character sheet still requires layout and user testing.

### Character Differentiation

The same sixty points produced three clearly different capability profiles.

```text
Generalist
Consistent Rank 9 coverage.

Focused Professional
Ordinary breadth, strong parent Skills, and two pronounced peaks.

Narrow Specialist
Three Rank 24 peaks, three Rank 12 parent fields, and Rank 6 elsewhere.
```

### Specialization Payoff

Specialization performs meaningful mechanical work.

```text
Generalist trained Expression:
9

Focused Crime Scene Expression:
19

Narrow exact-specialty Expression:
24
```

The payoff is strongly dependent upon fictional applicability.

The specialist led the exact-specialty suite, nearly matched the other builds
in the mixed suite, and lost the adjacent-task suite.

### Untrained Default

Untrained ordinary action remains functional:

```text
Untrained Expression: 6
```

This prevents a narrow specialist from becoming incapable of ordinary action.
It also means that broad training purchases a moderate improvement over a
functional baseline rather than purchasing permission to act.

### Emerging Economic Pressure

The test exposes a real balance question:

```text
Untrained baseline:            6
Generalist Rank 5 Skill:       9
Narrow Rank 10 Skill:         12
Rank 10 Skill + Rank 10 Spec: 24
```

The current economy gives a pronounced reward to exact Specialization while
preserving a useful untrained floor.

This is not automatically a defect. Specialization has narrower fictional
applicability, and the three scene suites demonstrate the cost of missing that
applicability.

The next mathematical test should vary how often a Specialization applies
before changing Rank values or Training budgets.

### Automatic Purchases

No universal automatic purchase emerged from the mathematics.

The apparent value of Investigation, Security, combat, or social Skills changed
with the scene. A Campaign Profile that emphasizes one activity will naturally
increase the value of its related Skills. That is a campaign expectation to
communicate, not evidence that every Character must purchase the Skill.

### Dominated Skills

No tested Skill was completely replaced by a neighboring Skill.

The test does not prove equivalence across all thirty candidates. It only
supports the tested set:

```text
Administration
Strategy
Teaching
Meditation
Athletics
Investigation
Security
Protocol
Persuasion
Tactics
Ranged Combat
Vehicle Operation
```

The remaining candidates require later use tests or inclusion in complete
campaign play.

---

## Current Assessment

```text
THE THIRTY-SKILL LIST SURVIVES THE FIRST CHARACTER TEST.

THE SIXTY-POINT TRAINING POOL CREATES DISTINCT BUILDS.

UNTRAINED DEFAULTING REMAINS FUNCTIONAL.

SKILL ROUTING THROUGH DIFFERENT DERIVED ATTRIBUTES WORKS.

SPECIALIZATION CREATES A LARGE BUT FICTIONALLY NARROW PAYOFF.

NO SKILL-LIST OR TRAINING-ECONOMY DECISION IS FINAL-LOCKED.
```

---

## Exact Next Test

```text
Across a representative sequence of scenes, how frequently must a
Specialization apply before its narrow multiplier becomes more valuable than
broad Skill investment?
```

This should be tested with a small number of deliberate applicability rates,
not a large random simulation.
