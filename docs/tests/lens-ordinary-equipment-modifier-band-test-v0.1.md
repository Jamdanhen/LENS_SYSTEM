# LENS Ordinary Equipment Modifier Band Test

Version: 0.1  
Status: Focused Candidate-Band Test; No Final Equipment Band Adopted  
Date: 2026-09-01

---

> **Subsequent working decision:** The tested `x1.00` through `x1.30` range in
> `x0.05` increments was adopted as the working ordinary personal-equipment
> modifier range. Campaign Profiles determine which bands they use and what
> occupies them. Individual equipment placements remain provisional.

---

## Purpose

Test the existing working idea that ordinary personal equipment may use a
compact Expression-modifier range from `x1.00` through `x1.30` in `x0.05`
increments.

The test asks:

```text
Do adjacent bands remain mathematically visible?

Does ordinary equipment improve an Expression without replacing personal
capability?

Does the upper end remain distinct from a change of Scale?

Can the same range support melee weapons, firearms, tools, and other ordinary
personal equipment without requiring a separate resolution system?

Which equipment differences should be carried by permission, Effect form,
Enhancement, Mitigation, range, Access, or Scale instead of the modifier?
```

This is not an equipment catalogue and does not adopt final item placements.

---

## Inherited Controls

```text
Equipment is a Lens.

An equipment modifier applies only when the item makes a distinct and
fictionally relevant contribution to the Expression.

Equipment may also grant permission, establish Access, determine Effect form,
provide Effect Enhancement or Mitigation, create exposure, or operate at a
particular Functional Scale.

One function is not counted twice.

Full precision is retained until the final displayed result is floored.

A successful Expression generates one baseline Effect Level.

Each complete 10 points of applicable Successful Margin or Net Margin
generates one additional Effect Level.

Ratings may exceed 100. A rating above 100 preserves capability against later
Difficulty, Dissonance, opposition, or division.

Scale defines the frame. A larger numerical Expression does not by itself
change Scale.
```

---

## Candidate Band

```text
x1.00
x1.05
x1.10
x1.15
x1.20
x1.25
x1.30
```

Working interpretations for testing:

| Modifier | Diagnostic function |
|---:|---|
| x1.00 | Permission, delivery, form, or Access without numerical enhancement |
| x1.05 | Minor ordinary equipment contribution |
| x1.10 | Clear ordinary equipment contribution |
| x1.15 | Moderate personal-equipment contribution |
| x1.20 | Strong personal-equipment contribution |
| x1.25 | Very strong personal-equipment contribution |
| x1.30 | Possible upper ordinary personal-equipment contribution |

These descriptions are diagnostic. They do not assign universal item types or
prices to the bands.

---

## Test Baselines

The candidate band is tested against seven stable Expression values:

| Base Expression | Diagnostic role |
|---:|---|
| 7.150 | Low trained Expression from the ordinary character test |
| 11.830 | Moderate trained Expression from the ordinary character test |
| 16.875 | Common Specialized benchmark |
| 30.240 | Strong professional Expression from the ordinary character test |
| 46.656 | Elite Specialized benchmark |
| 61.731 | Peak Specialized benchmark |
| 80.000 | Max Specialized benchmark |

Difficulty, current Resonance, current Dissonance, multi-action division, and
opposition remain constant and are omitted. This isolates the equipment band.

---

## Final Rating Comparison

All cells show the floored displayed rating. Calculations retain full
precision.

| Base | x1.00 | x1.05 | x1.10 | x1.15 | x1.20 | x1.25 | x1.30 |
|---:|---:|---:|---:|---:|---:|---:|---:|
| 7.150 | 7 | 7 | 7 | 8 | 8 | 8 | 9 |
| 11.830 | 11 | 12 | 13 | 13 | 14 | 14 | 15 |
| 16.875 | 16 | 17 | 18 | 19 | 20 | 21 | 21 |
| 30.240 | 30 | 31 | 33 | 34 | 36 | 37 | 39 |
| 46.656 | 46 | 48 | 51 | 53 | 55 | 58 | 60 |
| 61.731 | 61 | 64 | 67 | 70 | 74 | 77 | 80 |
| 80.000 | 80 | 84 | 88 | 92 | 96 | 100 | 104 |

The numerical gain produced by one `x0.05` step is always five percent of the
underlying Expression:

| Base Expression | Gain per x0.05 step |
|---:|---:|
| 7.150 | 0.3575 |
| 11.830 | 0.5915 |
| 16.875 | 0.84375 |
| 30.240 | 1.512 |
| 46.656 | 2.3328 |
| 61.731 | 3.08655 |
| 80.000 | 4.000 |

### Finding

The half-step band does not behave like a flat damage bonus.

It magnifies the capability already being expressed. This preserves the
character as the source of action, but it also means the smallest equipment
bands may disappear after flooring on a low Expression.

That is not automatically a failure. An item at `x1.00` or `x1.05` may still
matter because it grants reach, range, cutting, ballistic delivery, required
tool Access, or another distinct function. It is a failure only if a Campaign
Profile expects the small modifier by itself to create a reliably visible
numerical difference for low-capability users.

---

## Effect-Level Comparison

Use the same favorable successful roll of `2` for every Expression. This does
not model average combat. It isolates how a larger Final Rating changes the
existing ten-point Effect thresholds.

| Base | x1.00 | x1.05 | x1.10 | x1.15 | x1.20 | x1.25 | x1.30 |
|---:|---:|---:|---:|---:|---:|---:|---:|
| 7.150 | 1 | 1 | 1 | 1 | 1 | 1 | 1 |
| 11.830 | 1 | 2 | 2 | 2 | 2 | 2 | 2 |
| 16.875 | 2 | 2 | 2 | 2 | 2 | 2 | 2 |
| 30.240 | 3 | 3 | 4 | 4 | 4 | 4 | 4 |
| 46.656 | 5 | 5 | 5 | 6 | 6 | 6 | 6 |
| 61.731 | 6 | 7 | 7 | 7 | 8 | 8 | 8 |
| 80.000 | 8 | 9 | 9 | 10 | 10 | 10 | 11 |

### Finding

Equipment does not add an Effect Level automatically merely because a new
band was crossed. It increases the Final Rating, which may improve success and
may cross an Effect threshold depending on the roll.

This preserves the single resolution procedure.

At low Expressions, equipment primarily improves permission, delivery, form,
and success chance. At high Expressions, the same multiplier can create one or
more additional Effect Levels because the equipment is magnifying a much
larger capability.

---

## Practical Roll-Window Test

For each modifier, compare results `01` through `98` against the same
unmodified Expression.

The first number is how many previously failed results become successes. The
second is how many already-successful results gain at least one Effect Level.

| Base | x1.05 | x1.10 | x1.15 | x1.20 | x1.25 | x1.30 |
|---:|---:|---:|---:|---:|---:|---:|
| 7.150 | 0 / 0 | 0 / 0 | 1 / 0 | 1 / 0 | 1 / 0 | 2 / 0 |
| 11.830 | 1 / 1 | 2 / 2 | 2 / 2 | 3 / 3 | 3 / 3 | 4 / 4 |
| 16.875 | 1 / 1 | 2 / 2 | 3 / 3 | 4 / 4 | 5 / 6 | 5 / 6 |
| 30.240 | 1 / 3 | 3 / 9 | 4 / 12 | 6 / 18 | 7 / 21 | 9 / 27 |
| 46.656 | 2 / 8 | 5 / 21 | 7 / 31 | 9 / 41 | 12 / 46 | 14 / 46 |
| 61.731 | 3 / 18 | 6 / 36 | 9 / 54 | 13 / 61 | 16 / 61 | 19 / 61 |
| 80.000 | 4 / 32 | 8 / 64 | 12 / 80 | 16 / 80 | 18 / 80 | 18 / 80 |

This table does not resolve the still-open exceptional-result procedure above
`98`. It is only a comparison of the ordinary percentile window.

### Finding

The band is increasingly consequential as personal capability rises.

That supports LENS's existing premise that equipment enhances the Character's
Expression rather than replacing it with a fixed damage package. It also means
that upper equipment bands should describe genuinely stronger functional
leverage, not ordinary craftsmanship or minor quality differences.

---

## Diagnostic Equipment Mapping

The following map tests whether the range has enough conceptual room. It is not
a universal catalogue.

| Candidate band | Diagnostic examples | Other required functions |
|---:|---|---|
| x1.00 | Required tool whose primary contribution is permission; ordinary communication device; credential | Access, delivery, or permission |
| x1.05 | Light or modest personal tool; small weapon; expandable baton | Relevant form such as Impact, Cutting, or Reach |
| x1.10 | Standard purpose-built melee weapon; substantial professional tool | Relevant form and Access |
| x1.15 | Heavy personal melee weapon; powerful manually operated weapon | Relevant form; possible handling or range considerations |
| x1.20 | Standard service firearm or comparably strong personal equipment | Ballistic or other relevant form; range and legal Access |
| x1.25 | High-powered personal firearm or specialized heavy personal equipment | Range, recoil, scarcity, or other distinct exposures when relevant |
| x1.30 | Upper ordinary personal weapon or tool within the Campaign Profile | Strong justification; may approach the point where Scale or an Effect property is more accurate |

Armor does not need to occupy this offensive ladder. Its principal function
may be matching Effect Mitigation, with bulk, noise, mobility interference,
coverage, and Access represented separately when relevant.

A weapon does not receive a higher modifier merely because it is expensive,
rare, illegal, or enchanted. Those facts belong to Cost Difficulty,
Availability, Access, HOLT permission, or another distinct Lens function.

---

## HOLT Comparison

An equipment modifier may be numerically equal to an Axis modifier:

```text
x1.10 equipment = the same numerical factor as Axis Rank 1
x1.20 equipment = the same numerical factor as Axis Rank 2
x1.30 equipment = the same numerical factor as Axis Rank 3
```

This is not mechanical identity.

```text
Equipment
supplies the item's available function;
requires possession, operation, and applicable Access;
may be lost, broken, depleted, disarmed, restricted, or unavailable;
and applies only when that item contributes to the Expression.

HOLT Axis Rank
develops a higher-order permission through a particular Derived Attribute;
remains limited by HOLT Rank and Access;
and does not require a separate carried item unless the HOLT itself is
artifact-dependent.
```

Equal factors can perform different jobs. Numerical equality does not collapse
two Lenses into one classification.

If equipment and a HOLT Axis both make distinct contributions, both may enter
the Expression. If they describe the same contribution, counting both would
violate applicability and distinct contribution.

---

## Scale Comparison

The leading Scale model uses:

```text
Scale 1 = x1.0
Scale 2 = x1.6
```

At the same test baselines:

| Base | Upper personal equipment x1.30 | Scale 2 x1.60 |
|---:|---:|---:|
| 7.150 | 9.295 | 11.440 |
| 11.830 | 15.379 | 18.928 |
| 16.875 | 21.9375 | 27.000 |
| 30.240 | 39.312 | 48.384 |
| 46.656 | 60.6528 | 74.6496 |
| 61.731 | 80.2503 | 98.7696 |
| 80.000 | 104.000 | 128.000 |

The larger gap is useful, but the deeper distinction is categorical:

```text
x1.30 ordinary equipment remains a Scale 1 contribution unless another rule
changes its Functional Scale.

x1.60 Scale 2 changes the natural frame in which the relevant function
operates.
```

A high Scale 1 Final Rating may exceed a lower Scale 2 Final Rating. That does
not erase the frame difference. Final Rating measures capability inside the
assembled Expression; Scale determines what magnitude of action the
Expression can naturally address.

Vehicle weapons, artillery, fortress weapons, and starship weapons should not
be represented by extending the ordinary personal-equipment ladder
indefinitely. Their relevant functions may operate at higher Scale.

---

## Stress Findings

```text
PASS:
The x1.00 through x1.30 candidate range is controlled enough to remain below
the first Scale increase while still producing meaningful differences.

PASS:
x0.05 increments preserve more equipment categories than an x0.10-only ladder.

PASS WITH LIMIT:
The smallest increments are not reliably visible after flooring on low Base
Expressions. They remain viable where permission, delivery, form, Access, or
another item function already matters.

PASS:
The same modifier procedure works for weapons and tools. Armor and unusual
equipment may use Mitigation, Enhancement, Conversion, Redirection, Storage,
Access, or another established Lens function instead of forcing every item
onto one offensive ladder.

PASS:
Numerical equality between an equipment modifier and a HOLT Axis modifier does
not make them the same Lens. Their permissions, persistence, exposures, and
applicability differ.

PASS:
Higher-frame equipment can use Functional Scale without creating a separate
damage subsystem.

CAUTION:
At high Base Expressions, x1.25 and x1.30 are substantial. They should not
represent ordinary quality grades. They should be reserved for equipment whose
actual function provides that much leverage within the Campaign Profile.

UNRESOLVED:
Final item placement, weapon categories, firearm placement, armor values,
range bands, equipment properties, and whether every Campaign Profile exposes
all seven bands.
```

---

## Recommendation

Retain the following as the strongest working candidate for continued tests:

```text
Ordinary personal-equipment candidate range:
x1.00 through x1.30

Available increment:
x0.05

The modifier measures functional contribution to the Expression.

Permission, Effect form, range, Enhancement, Mitigation, Access, exposure, and
Scale remain separate when they perform different jobs.

Campaign Profiles determine which equipment occupies each band and need not
use every band.
```

Do not lock the band from this test alone. The next useful test is a concrete
Campaign Profile equipment table comparing:

```text
unarmed baseline;
small weapon;
standard melee weapon;
heavy melee weapon;
service handgun;
long gun;
high-powered personal firearm;
armor mitigation;
and one Scale 2 mounted weapon.
```

That test should determine whether the diagnostic item placements produce the
desired success, Effect, range, and mitigation differences in actual opposed
play.
