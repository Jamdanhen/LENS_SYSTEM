# LENS Attack Action-Family and Task Boundary Test v0.1

Date: 2026-09-03

Status:

```text
EXPERIMENTAL TEST RECORD
ATTACK IS NOT ADOPTED AS A RATED TASK
NO BASELINE DOCTRINE CHANGED BY THIS TEST
```

## Purpose

Test whether `Attack` should be:

1. a broad action family used to describe the hostile role of an Expression;
2. a purchasable Task using the same Rank progression as other Training
   Lenses;
3. or both.

The test specifically uses several different routes into an attack:

```text
Strength
Coordination
Projection
Toughness
```

It also tests whether dividing attacks immediately into melee, ranged, and
grappling Tasks solves the underlying scope problem.

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

The current active Training budget is 100 points for continued testing. That
number is not final and depends upon the eventual Task landscape.

## Candidate Definition

```text
Attack

Attempt to impose harm, pressure, displacement, restraint, or another hostile
Effect upon a target.
```

This definition identifies the immediate hostile function of the Expression.
It does not identify the capability, delivery method, subject, or permission
that makes the attack possible.

## Test 1: Derived Attribute Routing

### Strength

```text
Might x Strength x Attack
```

The Character delivers overwhelming physical force through a heavy weapon,
punch, throw, charge, or crushing hold.

Result: `PASS`.

Strength can clearly carry an Attack when applied force makes the hostile
Expression effective.

### Coordination

```text
Mobility x Coordination x Attack
```

The Character places and executes a technically precise strike.

Result: `PASS`.

Coordination can carry an Attack when placement, timing, or physical execution
makes it effective.

### Projection

```text
Influence x Projection x Attack
```

The Character sends a force, energy, projectile, or other permitted outward
manifestation toward a target.

Result: `PASS WITH PERMISSION CONTROL`.

Projection describes how the Attack is expressed. It does not grant the fire,
eye beam, psychic force, or other extraordinary manifestation. Classification,
Access, a HOLT, equipment, or another permission-bearing Lens must already
make that manifestation possible.

### Toughness

```text
Might x Toughness x Attack
```

The Character uses their own durable body as the striking surface in a
headbutt, shoulder smash, body check, or deliberate collision.

Result: `PASS`.

The headbutt demonstrates that an Attack does not inherently route through
Strength. Toughness carries the Expression when the Character's capacity to
withstand and transmit the collision is what makes that form of attack
effective.

### Routing Finding

```text
STRONG PASS:

Attack is an excellent action-family label. It states what hostile function
the Character is attempting while leaving the Derived Attribute to state how
that function is made effective.
```

## Test 2: Permission

Use three Characters with `Attack Rank 10`:

```text
Ordinary boxer
Fire HOLT wielder
Unarmed ordinary civilian
```

Results:

- The boxer may punch, headbutt, grapple, or attempt another ordinary attack.
- The Fire wielder may form a fire attack only while the applicable HOLT Axis
  and Access permit that manifestation.
- The civilian may attempt ordinary attacks but does not gain a fire blast,
  impossible strength, a firearm, or another missing capability from Attack.

Finding:

```text
PASS:

Attack does not inherently manufacture permission. It can multiply only an
attack that the rest of the fiction and Lens stack already permits.
```

## Test 3: Equal-Cost Training Comparison

Hold the Attribute x Derived Attribute core constant so only Training scope is
being compared. Give each build ten Training Points.

### Broad Attacker

```text
Attack Rank 10       x2.0
```

Applicable result:

```text
Punch                 x2.0
Sword strike          x2.0
Rifle shot            x2.0
Headbutt               x2.0
Permitted fire bolt   x2.0
```

### Narrow Handgun Specialist

```text
Attack Rank 0         x1.0
Firearms Parent 5     x1.5
Handguns Branch 5     x1.5
```

Applicable result:

```text
Handgun                x2.25
Other firearm          x1.50
Unrelated attack       x1.00
```

### Layered Handgun Combatant

```text
Attack Rank 4         x1.4
Firearms Parent 3     x1.3
Handguns Branch 3     x1.3
```

Applicable result:

```text
Handgun                x2.366
Other firearm          x1.820
Unrelated attack       x1.400
```

Finding:

```text
MIXED:

Multiplicative development still rewards investment across Task, Parent, and
Branch. The broad Attack purchase does not outperform a balanced specialist
at the specialist's signature method.

However, Attack Rank 10 doubles every permitted form of attack for ten points.
The specialist receives only a slightly larger signature modifier while
surrendering a very large amount of breadth.
```

## Test 4: Attribute Differentiation

Use deliberately different pre-Training core capabilities:

```text
Strength route       12
Coordination route    8
Projection route      6
Toughness route      10
```

Apply `Attack Rank 10`:

```text
Strength Attack       24
Coordination Attack   16
Projection Attack     12
Toughness Attack      20
```

Finding:

```text
PASS:

A broad Attack Rank does not erase Attribute or Derived Attribute identity.
The Character remains substantially better through developed routes and worse
through neglected routes.
```

The concern is therefore not that Attack makes every attack equal. The concern
is that it grants the same large Training multiplier across every route despite
their very different learned procedures.

## Test 5: Fictional Transfer

Ask whether practice represented by `Attack Rank 10` transfers without an
applicable Parent or Branch.

### Boxer with a rifle

The boxer may understand timing, commitment, pressure, and exploiting an
opening. Those ideas transfer. Weapon handling, sight use, recoil control, and
fire discipline do not transfer merely because the boxer is offensively
experienced.

Under the candidate rule, Attack Rank 10 still supplies x2.0 before any
Firearms Parent is present.

### Marksman with a sword

The marksman may understand hostile timing and target selection. Footwork,
measure, guards, edge alignment, and sword handling do not automatically
transfer.

Under the candidate rule, Attack Rank 10 still supplies x2.0.

### Fire wielder without Fire Access

Attack training does not open the fire manifestation. If the power is
suppressed, the Character may still use Attack through an ordinary method.
That ordinary method receives the same Attack Rank even if it has never been
developed through an applicable Parent.

Finding:

```text
PARTIAL FAILURE:

General offensive experience can plausibly transfer a limited amount across
methods. A full Rank 10 modifier transferring unchanged between boxing,
marksmanship, swordplay, and supernatural projection asks Attack to represent
more shared learned procedure than the fiction reliably supports.
```

## Test 6: Construction Pressure

Under the active 100-point Training candidate:

```text
Attack Rank 10   10 points
Defend Rank 10   10 points
Total            20 points
```

If both are Tasks of comparable breadth, twenty percent of the Training pool
can maximize nearly every permitted offensive and defensive Expression before
any Parent or Branch is purchased.

This does not prove the allocation is mathematically broken. The Character
still needs developed Attributes, Derived Attributes, permission, and specific
Parents or Branches for peak results.

It does show that the 100-point Training pool and a short list of extremely
broad action Tasks cannot be finalized independently. If the complete Task
landscape contains roughly fifteen to twenty entries at the breadth of Attack
and Defend, one hundred points buys much more general competence than it did
under the earlier Skill landscape.

Finding:

```text
CAUTION:

Attack as a rated Task materially changes the meaning of the current Training
budget and encourages Attack and Defend to become common high-priority
purchases in action-oriented Campaign Profiles.
```

## Test 7: Immediate Melee, Ranged, and Grappling Split

Candidate split:

```text
Melee Attack
Ranged Attack
Grappling
```

This does not produce three equivalent categories:

- `Melee` and `Ranged` primarily classify distance or delivery frame.
- `Grappling` identifies a practiced method and usually an intended form of
  control.
- A thrown weapon, projected beam, long-reaching body, firearm used at contact
  distance, and telekinetic hold expose the boundary immediately.

Finding:

```text
FAIL AS AN IMMEDIATE UNIVERSAL SPLIT:

The system should not divide Attack merely by inheriting traditional melee,
ranged, and grappling categories. Any purchased Tasks beneath Attack should be
grouped by meaningful transfer of practice, not only by distance or familiar
RPG labels.
```

Possible practiced methods for later comparison include striking, targeting,
shooting, throwing, and grappling. These are test candidates, not adopted
Tasks, and may still prove too broad, too narrow, or overlapping.

## Boundary Standard Produced by the Test

A broad action label and a rated Task answer different questions:

```text
Action family
What immediate function is the Expression attempting?

Rated Task
What broadly practiced activity supplies learned competence to the
Expression?
```

A candidate rated Task should pass all of these tests:

1. Its uses share a recognizable immediate activity.
2. Practice at the Task plausibly transfers among its ordinary unqualified
   uses.
3. A Character with Rank 10 in the Task but no applicable Parent or Branch is
   fictionally believable throughout that scope.
4. Its breadth and expected recurrence are reasonably comparable with peer
   Tasks purchased at the same cost.

Attack passes the first test. It only partially passes the second and third,
and its result under the fourth cannot be finalized until more of the Task
landscape exists.

## Conclusion

```text
ATTACK AS AN ACTION FAMILY:
STRONG PASS

ATTACK AS AN EQUAL-COST UNIVERSAL TASK:
PROVISIONAL FAIL

IMMEDIATE MELEE / RANGED / GRAPPLING SPLIT:
FAIL
```

`Attack` cleanly states the hostile function of an Expression and supports
creative Derived Attribute routing, including Strength, Coordination,
Projection, and Toughness.

Its very success as an action family makes it questionable as a normal rated
Task. A maximum Attack Rank is cheap relative to the breadth of learned methods
it improves, and its full modifier transfers between methods whose practical
training may share very little.

The test therefore recommends retaining `Attack` in the action map while
withholding it from the purchasable Task list. The next Task-mapping pass should
search beneath Attack for practiced activities whose competence genuinely
transfers, without assuming that traditional melee, ranged, and grappling
categories are the answer.

This finding also requires `Defend` to face the same rated-Task transfer test.
The result does not revoke the useful Defend routing examples; it questions
whether Defend itself should receive a purchasable Rank.

