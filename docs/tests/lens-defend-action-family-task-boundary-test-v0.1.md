# LENS Defend Action-Family and Task Boundary Test v0.1

Date: 2026-09-03

Status:

```text
EXPERIMENTAL TEST RECORD
DEFEND IS NOT ADOPTED AS A RATED TASK
NO BASELINE DOCTRINE CHANGED BY THIS TEST
```

## Purpose

Test whether `Defend` should be:

1. a broad action family describing the opposing or protective function of an
   Expression;
2. a purchasable Task using the same Rank progression and cost as other
   Training Lenses;
3. or both.

This is the companion test to the Attack action-family and Task-boundary test.

## Inherited Controls

```text
Rank 0  = x1.0
Rank 1  = x1.1
...
Rank 10 = x2.0

One Training Point purchases one Rank.

Unranked ordinary attempts remain possible through the applicable Attribute
or Derived Attribute.

Task, Parent, and Branch contribute only when applicable.

Classification, equipment, Access, and HOLTs supply any permission that the
ordinary construction does not supply.
```

Current candidate Training stack:

```text
Attribute
x Derived Attribute
x Task
x applicable portable Parent
x applicable parent-bound Branch
= Base Expression
```

## Candidate Definition

```text
Defend

Attempt to prevent, avoid, intercept, reduce, or withstand an incoming or
ongoing hostile Effect.
```

This identifies the protective or opposing function of the Expression. It
does not identify the capability, method, subject, or permission by which that
defense operates.

## Test 1: Derived Attribute Routing

### Toughness

```text
Might x Toughness x Defend
```

The Character absorbs or withstands the incoming physical Effect.

Result: `PASS`.

### Strength

```text
Might x Strength x Defend
```

The Character blocks, braces against, holds back, or physically stops the
incoming force.

Result: `PASS` when applied force actually carries the defense.

### Responsiveness

```text
Mobility x Responsiveness x Defend
```

The Character reacts quickly enough to evade or answer the incoming
Expression.

Result: `PASS`.

### Coordination

```text
Mobility x Coordination x Defend
```

The Character precisely parries, deflects, catches, or intercepts the incoming
Expression.

Result: `PASS`.

### Stability

```text
Mobility x Stability x Defend
```

The Character maintains position or equilibrium against displacement,
staggering, or forced movement.

Result: `PASS`.

### Resolve

```text
Psyche x Resolve x Defend
```

The Character maintains internal direction against fear, coercion, despair,
pain, or another nonphysical pressure.

Result: `PASS`.

### Insight

```text
Psyche x Insight x Defend
```

The Character recognizes the pattern, implication, feint, or intended change
early enough to oppose it.

Result: `PASS` when understanding rather than speed or durability carries the
defense.

### Routing Finding

```text
STRONG PASS:

Defend is an excellent action-family label. It states the protective function
of an Expression while the Derived Attribute states how the Character makes
that defense effective.
```

The range of valid routes is broader than physical combat. That is consistent
with the one-system principle, but it increases the cost concern if Defend is
also purchased as one Task.

## Test 2: Permission

Defend does not grant:

- a shield the Character does not possess;
- the ability to parry a manifestation that the fiction makes intangible;
- supernatural durability;
- immunity to mental influence;
- a magical counter-expression;
- or institutional standing that the Character does not have.

It can multiply only a defense the existing fiction and Lens stack permit.

Finding:

```text
PASS:

Defend does not inherently manufacture permission.
```

## Test 3: Equal-Cost Training Comparison

Hold the Attribute x Derived Attribute core constant and give each build ten
Training Points.

### Universal Defender

```text
Defend Rank 10       x2.0
```

Applicable result:

```text
Dodge                 x2.0
Sword parry           x2.0
Shield block          x2.0
Withstand a blow      x2.0
Resist forced movement x2.0
Oppose coercion       x2.0
Recognize and oppose a feint or deception x2.0
Permitted magical counter-expression x2.0
```

### Narrow Sword-Parry Specialist

```text
Defend Rank 0          x1.0
Swordsmanship Parent 5 x1.5
Parrying Branch 5      x1.5
```

Applicable result:

```text
Sword parry            x2.25
Other applicable sword defense x1.50
Unrelated defense      x1.00
```

### Layered Sword Defender

```text
Defend Rank 4          x1.4
Swordsmanship Parent 3 x1.3
Parrying Branch 3      x1.3
```

Applicable result:

```text
Sword parry            x2.366
Other applicable sword defense x1.820
Unrelated defense      x1.400
```

Finding:

```text
FAIL:

The layered specialist remains strongest in the signature defense, but a
maximum Defend Rank provides almost the same modifier across every permitted
physical and nonphysical defense for only ten points.
```

This scope is even broader than Attack because Defend can potentially answer
hostile Expressions across combat, hazards, influence, mental conflict,
extraordinary powers, and attacks upon established position.

## Test 4: Attribute Differentiation

Use deliberately different pre-Training core capabilities:

```text
Toughness route       12
Strength route         9
Responsiveness route   8
Coordination route     7
Resolve route          5
Insight route          6
```

Apply `Defend Rank 10`:

```text
Toughness defense      24
Strength defense       18
Responsiveness defense 16
Coordination defense   14
Resolve defense        10
Insight defense        12
```

Finding:

```text
PASS:

Defend Rank does not make all defensive routes equal. Attributes and Derived
Attributes continue to differentiate the Character.
```

As with Attack, the problem is not equality of final ratings. The problem is
the amount of unrelated learned practice receiving the same Training
multiplier.

## Test 5: Fictional Transfer

### Durable stone Character

The Character may be excellent at withstanding impact through extraordinary
Toughness. That does not teach sword parrying, evasive footwork, recognition
of deception, or resistance to coercion.

With Defend Rank 10, all permitted defensive routes receive x2.0.

### Acrobatic evader

The Character may be highly trained at avoiding physical attacks through
movement and responsiveness. That practice does not automatically teach the
Character to brace against a crushing force, maintain identity against psychic
intrusion, or challenge an official seizure of property.

With Defend Rank 10, all of those routes receive x2.0 when otherwise
applicable.

### Expert sword parry

Timing, distance, threat recognition, and composure can transfer partially to
other defenses. The weapon handling and interception procedure do not transfer
unchanged to dodging poison, resisting fear, or preserving Reputation against
a public attack.

Finding:

```text
FAIL:

The common purpose of preventing an Effect does not establish enough common
practice to justify one full Training Rank applying equally across all routes.
```

## Test 6: Narrowing Defend to Physical Combat

One possible repair would define Defend as applying only to active physical
combat.

That would exclude mental, social, environmental, institutional, and
extraordinary opposition even though they use the same LENS resolution
grammar.

Finding:

```text
FAIL:

The repair preserves the rated Task only by creating a combat-specific
exception. It weakens the one-system principle and still leaves substantial
transfer problems between dodging, parrying, blocking, and withstanding.
```

## Test 7: Separate Defensive Methods

Possible narrower candidates include:

```text
Evasion
Guarding
Parrying
Withstanding
Countering
```

These candidates are not automatically valid Tasks:

- Evasion may represent a broadly practiced activity with meaningful transfer
  among movement-based defenses.
- Parrying may require a Parent medium or style before its practice is
  coherent.
- Guarding may include blocking, interposing, and protecting another, but its
  breadth needs testing.
- Withstanding may describe a trained response to pain, pressure, exposure, or
  coercion, but it risks restating Toughness or Resolve rather than identifying
  learned practice.
- Countering may be too abstract unless a field, medium, or manifestation
  supplies the actual method.

Finding:

```text
UNRESOLVED:

The methods are more coherent than universal Defend, but each must still pass
the practice-transfer and Derived Attribute boundary tests.
```

## Test 8: Construction Pressure

Under the active 100-point Training candidate:

```text
Attack Rank 10   10 points
Defend Rank 10   10 points
Total            20 points
```

Twenty percent of the Training pool would double almost every permitted
offensive and defensive Expression before any Parent or Branch development.

Because action-oriented Characters use both functions repeatedly, these Ranks
would exert strong purchase pressure and could become near-default choices.
Character differentiation would then rely disproportionately upon Attributes,
Derived Attributes, Parents, and Branches while forty percent of the maximum
Task development needed for universal Attack and Defend remained nearly
constant among competent combatants.

Finding:

```text
FAIL UNDER THE CURRENT EQUAL-COST CANDIDATE:

Universal Attack and Defend Ranks purchase too much recurring capability for
the same cost as narrower practiced Tasks.
```

## Boundary Standard Confirmed by the Test

```text
Action family
What immediate function is the Expression attempting?

Rated Task
What broadly practiced activity supplies learned competence to the
Expression?
```

The Derived Attribute answers a third question:

```text
Derived Attribute
How is the Character making this particular function effective?
```

Defend answers the first question extremely well. It does not answer the
second with sufficient precision.

## Conclusion

```text
DEFEND AS AN ACTION FAMILY:
STRONG PASS

DEFEND AS AN EQUAL-COST UNIVERSAL TASK:
FAIL

DEFEND RESTRICTED TO PHYSICAL COMBAT:
FAIL

SEPARATE PRACTICED DEFENSIVE TASKS:
REQUIRES DELIBERATE TESTING
```

`Defend` should remain available as a description of what an opposing or
protective Expression is doing. It supports the intended creative routing:
Toughness may withstand, Strength may block, Responsiveness may dodge,
Coordination may parry, Stability may hold position, Resolve may resist, and
Insight may anticipate.

That flexibility is precisely why Defend should not currently receive a
single equal-cost Rank. A Character trained in one defensive procedure does
not thereby gain equal learned competence in every other physical, mental,
social, institutional, environmental, and extraordinary defense.

The next defensive Task test should begin with the narrower practiced methods,
especially Evasion, Guarding, Parrying, and Withstanding. It should not assume
that each must survive as a separate Task or that every concrete defensive
Expression requires a named trained Task.

