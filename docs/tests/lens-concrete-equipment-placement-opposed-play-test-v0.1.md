# LENS Concrete Equipment Placement and Opposed Play Test

Version: 0.1  
Status: Focused Placement Test; No Final Equipment Placements Adopted  
Date: 2026-09-01

---

> **Subsequent working decision:** The tested `x1.00` through `x1.30` range in
> `x0.05` increments was adopted as the working ordinary personal-equipment
> modifier range. The modern item map, armor values, and shield functions in
> this record remain provisional.

---

## Purpose

Apply the working `x1.00` through `x1.30` ordinary personal-equipment candidate
range to a concrete weapon and tool ladder, then test the placements through
the current opposed Expression and Effect procedure.

The test includes:

```text
unarmed baseline;
small weapon;
standard melee weapon;
heavy melee weapon;
service handgun;
long gun;
high-powered personal firearm;
ordinary armor mitigation;
range Difficulty;
professional tools;
and one Scale 2 mounted weapon function.
```

The item names are practical comparison points. They are not a universal
equipment catalogue.

---

## Inherited Working Rules

```text
Roll equal to or under the Final Rating to succeed.

Successful Margin
= Final Rating minus successful roll.

When both active opponents succeed, the higher Successful Margin wins.

Net Margin
= higher Successful Margin minus lower Successful Margin.

Winning opposed Expression
= 1 baseline Effect Level
+ 1 additional Effect Level for each complete 10 points of Net Margin.

If the attacker succeeds and the active defender fails, the attacker's
Successful Margin determines Effect Levels.

If the attacker fails, no attack Effect is generated.

Matching Effect Mitigation removes generated Effect Levels after resolution.

Full precision is retained until final display.
```

The rule for an attacker succeeding while the active defender fails is used as
a necessary test control. It is not independently adopted by this record.

---

## Candidate Placement Table

| Equipment position | Test item | Modifier | Principal additional functions |
|---|---|---:|---|
| Baseline | Unarmed attack | x1.00 | Impact through the body; no equipment dependency |
| 1 | Knife or comparable small weapon | x1.05 | Cutting or Piercing form; concealability and close reach |
| 2 | Sword, spear, or comparable standard melee weapon | x1.10 | Cutting, Piercing, Impact, and/or Reach as appropriate |
| 3 | Heavy axe, heavy polearm, or comparable heavy personal melee weapon | x1.15 | Heavy Cutting, Impact, and/or Reach; handling exposure when relevant |
| 4 | Service handgun | x1.20 | Ballistic delivery; personal firearm range; legal and ammunition Access |
| 5 | Long gun | x1.25 | Ballistic delivery; stronger range support; handling and visibility exposure |
| 6 | High-powered personal firearm | x1.30 | Upper personal ballistic function; substantial range and handling profile |

This table isolates functional output. Price, legality, scarcity, ammunition,
concealment, range, and availability do not independently raise the modifier.
They remain separate Lenses when relevant.

The use of one shared Base Expression across all seven entries assumes equal
personal training. Actual characters may possess different Skills and
Specializations for different weapons.

---

## Controlled Opposed Examples

Use a Common Specialized attack Expression and an equally rated defense:

```text
Attacker Base Expression: 16.875
Defender Final Rating:    16.875
```

### Example 1: Equipment Crosses an Effect Threshold

```text
Attacker roll: 02
Defender roll: 10

Defender Successful Margin:
16.875 - 10 = 6.875
```

| Attack | Final Rating | Attacker Margin | Net Margin | Generated Effect |
|---|---:|---:|---:|---:|
| Unarmed x1.00 | 16.875 | 14.875 | 8.000 | 1 |
| Small weapon x1.05 | 17.71875 | 15.71875 | 8.84375 | 1 |
| Standard melee x1.10 | 18.5625 | 16.5625 | 9.6875 | 1 |
| Heavy melee x1.15 | 19.40625 | 17.40625 | 10.53125 | 2 |
| Service handgun x1.20 | 20.250 | 18.250 | 11.375 | 2 |
| Long gun x1.25 | 21.09375 | 19.09375 | 12.21875 | 2 |
| High-powered firearm x1.30 | 21.9375 | 19.9375 | 13.0625 | 2 |

The weapon does not add an automatic Effect Level. Its modifier raises the
Final Rating enough for the existing Net Margin to cross the ten-point Effect
threshold.

### Example 2: Equipment Changes Who Wins

```text
Attacker roll: 10
Defender roll: 05

Defender Successful Margin:
16.875 - 5 = 11.875
```

| Attack | Attacker Margin | Outcome |
|---|---:|---|
| Unarmed x1.00 | 6.875 | Defender wins |
| Small weapon x1.05 | 7.71875 | Defender wins |
| Standard melee x1.10 | 8.5625 | Defender wins |
| Heavy melee x1.15 | 9.40625 | Defender wins |
| Service handgun x1.20 | 10.250 | Defender wins |
| Long gun x1.25 | 11.09375 | Defender wins |
| High-powered firearm x1.30 | 11.9375 | Attacker wins by 0.0625; 1 Effect Level |

This is the cleanest demonstration that the modifier does not merely represent
damage after a hit. Under the single-resolution model, better equipment can
turn a narrowly defeated Expression into a successful one.

---

## Complete Ordinary Percentile Comparison

The following tables compare every ordinary attacker and defender roll from
`01` through `100`. This is exact enumeration, not random simulation.

Test controls:

```text
Both fail: no attack Effect.

Attacker succeeds and defender fails: attacker wins.

Both succeed: compare Successful Margins.

Equal margins: no attack Effect for this test.

No exceptional-result rule is added.
```

`Any Effect` is the percentage of opposed exchanges that apply at least one
Effect Level before armor. `2+ Effects` is the percentage applying at least
two. `Average Effect` is the mean generated Effect across all exchanges,
including failures and successful defenses.

### Common Attacker Versus Common Defender

```text
Attacker Base Expression: 16.875
Defender Final Rating:    16.875
```

| Test item | Modifier | Final Rating | Any Effect | 2+ Effects | Average Effect |
|---|---:|---:|---:|---:|---:|
| Unarmed | x1.00 | 16.875 | 14.6% | 5.2% | 0.199 |
| Small weapon | x1.05 | 17.71875 | 15.6% | 6.1% | 0.217 |
| Standard melee | x1.10 | 18.5625 | 16.6% | 7.0% | 0.236 |
| Heavy melee | x1.15 | 19.40625 | 17.6% | 7.9% | 0.256 |
| Service handgun | x1.20 | 20.250 | 18.6% | 8.8% | 0.275 |
| Long gun | x1.25 | 21.09375 | 19.6% | 9.8% | 0.303 |
| High-powered firearm | x1.30 | 21.9375 | 19.8% | 9.9% | 0.305 |

The sequence is monotonic, but the final two bands are nearly identical at
this capability. Flooring and whole-number percentile results compress some
adjacent half-steps.

This does not make the items identical. Long-gun and high-powered-firearm
forms may still carry different range, penetration, ammunition, handling,
concealment, or mitigation relationships. It does mean their modifiers alone
do not create a meaningful ordinary-combat separation at this Base
Expression.

### Elite Attacker Versus Common Defender

```text
Attacker Base Expression: 46.656
Defender Final Rating:    16.875
```

| Test item | Modifier | Final Rating | Any Effect | 2+ Effects | Average Effect |
|---|---:|---:|---:|---:|---:|
| Unarmed | x1.00 | 46.656 | 44.6% | 34.6% | 1.238 |
| Small weapon | x1.05 | 48.9888 | 46.8% | 36.8% | 1.343 |
| Standard melee | x1.10 | 51.3216 | 49.6% | 39.6% | 1.492 |
| Heavy melee | x1.15 | 53.6544 | 51.6% | 41.6% | 1.608 |
| Service handgun | x1.20 | 55.9872 | 53.8% | 43.8% | 1.734 |
| Long gun | x1.25 | 58.320 | 56.6% | 46.6% | 1.902 |
| High-powered firearm | x1.30 | 60.6528 | 58.6% | 48.6% | 2.021 |

Every half-step is visible at elite capability. This confirms that the ladder
magnifies developed capability rather than supplying a fixed weapon package.

---

## Armor Mitigation Test

Apply matching physical Mitigation after the opposed Expression generates its
Effect.

### Common Attacker Versus Common Defender

| Attack | No Mitigation: Any Effect | Mitigation 1: Any Applied Effect | Mitigation 2: Any Applied Effect |
|---|---:|---:|---:|
| Standard melee x1.10 | 16.6% | 7.0% | 0.0% |
| Service handgun x1.20 | 18.6% | 8.8% | 0.0% |
| High-powered firearm x1.30 | 19.8% | 9.9% | 0.9% |

### Elite Attacker Versus Common Defender

| Attack | No Mitigation: Any Effect | Mitigation 1: Any Applied Effect | Mitigation 2: Any Applied Effect |
|---|---:|---:|---:|
| Standard melee x1.10 | 49.6% | 39.6% | 29.6% |
| Service handgun x1.20 | 53.8% | 43.8% | 33.8% |
| High-powered firearm x1.30 | 58.6% | 48.6% | 38.6% |

### Armor Finding

```text
Mitigation 1
is a substantial but permeable defense. It commonly removes the baseline
Effect while allowing strong margins to remain consequential.

Mitigation 2
is nearly complete protection against common attacks in this test. It remains
permeable to elite Expressions but should not be assigned casually as the
ordinary armor baseline.
```

Armor form and coverage remain necessary. Ballistic armor does not mitigate
every physical Effect merely because it is armor.

---

## Range Difficulty Test

Use the Common Specialized Base Expression and three firearm placements.

| Firearm | No Range Difficulty | D1 x0.98 | D2 x0.588 | D3 x0.3528 |
|---|---:|---:|---:|---:|
| Service handgun x1.20 | 20.250 | 19.845 | 11.907 | 7.1442 |
| Long gun x1.25 | 21.09375 | 20.671875 | 12.403125 | 7.441875 |
| High-powered firearm x1.30 | 21.9375 | 21.49875 | 12.89725 | 7.73955 |

The weapon modifier alone cannot carry the entire difference between handgun,
long-gun, and extreme-range performance. At significant range Difficulty, the
Difficulty multiplier dominates the small equipment-band separation.

This supports keeping range as its own fictional and mechanical relationship:

```text
The objective range creates Difficulty.

The weapon establishes whether that range is physically available to the
Expression.

A sight, scope, braced position, ranging system, or appropriate weapon design
may provide a distinct supporting Lens when it genuinely answers that range.
```

The scene's range does not change for different characters. Their equipment
changes how they answer it.

Exact range bands and scope Resonance remain unresolved.

---

## Professional Tool Test

Use the ordinary character's Crime-Scene Expression:

```text
Base Expression: 30.240
```

| Tool position | Modifier | Final Rating | Additional function |
|---|---:|---:|---|
| Required ordinary instruments | x1.00 | 30.240 | Establish required tool Access |
| Modest investigation kit | x1.05 | 31.752 | Portable measurement and collection functions |
| Purpose-built professional kit | x1.10 | 33.264 | Broader or more reliable instrument support |
| Advanced personal field suite | x1.15 | 34.776 | Strong personal instrumentation within Scale 1 |

The tool ladder works mathematically, but permission remains its primary
function when the procedure cannot be performed without the instrument.

The same missing-tool problem may not be counted once as Closed Access, again
as Dissonance, and again through the absence of a modifier.

---

## Scale 2 Mounted Weapon Test

An ordinary personal weapon at the current upper candidate band remains:

```text
Common Specialized Base 16.875
x upper ordinary personal equipment 1.30
= 21.9375 at Scale 1
```

A mounted weapon whose attack function genuinely operates at Scale 2 uses the
Scale 2 frame:

```text
Common Specialized Base 16.875
x Scale 2 modifier 1.60
= 27.000 at Scale 2
```

If the mounted weapon also supplies a distinct strong equipment contribution
inside that frame, the diagnostic combined Expression is:

```text
Common Specialized Base 16.875
x strong equipment contribution 1.20
x Scale 2 modifier 1.60
= 32.400 at Scale 2
```

This is not permission to apply every vehicle characteristic to an operator's
roll. The weapon's attack function may be Scale 2 while manual controls,
operator cognition, coordination, repair, or unrelated vehicle functions
remain Scale 1.

The current test confirms that the mounted weapon should not be represented as
`x1.35` or another extension of the personal-equipment ladder.

The test does not resolve how Scale 2 Effect translates into Scale 1 Capacity
when a Scale 1 target is struck. That is a cross-Scale Effect question, not an
equipment-band question.

---

## Findings

```text
PASS:
The proposed concrete sequence is monotonic. Every higher placement is at
least as effective as the preceding placement.

PASS WITH COMPRESSION:
x0.05 half-steps sometimes collapse to the same displayed rating or nearly the
same opposed outcome at low and common capability. They separate increasingly
at stronger Base Expressions.

PASS:
That compression does not require removing half-steps. Campaign Profiles need
not use every band, and equipment can remain distinct through form, range,
Access, mitigation relationships, and exposure.

PASS:
Mitigation 1 is strong enough to make ordinary armor matter without creating a
secondary defense contest.

CAUTION:
Mitigation 2 almost nullifies common attacks. It should represent heavier,
specialized, or otherwise strongly justified protection if retained.

PASS:
Range remains Difficulty. Weapon range, scopes, and firing support answer the
range through permission and other applicable Lenses rather than replacing
range with a larger damage modifier.

PASS:
Professional tools can use the same equipment band while retaining required
tool Access as a distinct function.

PASS:
Scale 2 mounted weapons belong in the Scale architecture rather than above the
ordinary personal-equipment ladder.

UNRESOLVED:
The exact universal placement of individual weapons.

UNRESOLVED:
Whether x1.25 and x1.30 should both appear in every ordinary Campaign Profile.

UNRESOLVED:
Exact armor forms, coverage, and mitigation assignments.

UNRESOLVED:
Range bands and the numerical treatment of scopes and other range-support
Lenses.

UNRESOLVED:
Cross-Scale Effect against lower-Scale targets.
```

---

## Recommendation

Retain this as the leading grounded modern placement model for the next
playtest:

```text
x1.00  unarmed or function-only equipment baseline
x1.05  small weapon or modest personal tool
x1.10  standard melee weapon or purpose-built professional tool
x1.15  heavy personal melee weapon or advanced personal tool
x1.20  service handgun or comparable strong personal equipment
x1.25  long gun or very strong personal equipment
x1.30  high-powered personal firearm or upper personal equipment
```

Do not make this a universal catalogue. A Campaign Profile may omit, combine,
or remap bands while retaining the same modifier range and universal Lens
functions.

The next equipment decision is whether this grounded modern placement should
be accepted as a Campaign Profile test package, revised, or compared against a
fantasy equipment package before any band is locked.
