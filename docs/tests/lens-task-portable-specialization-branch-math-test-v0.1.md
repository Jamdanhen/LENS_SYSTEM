# LENS Task, Portable Specialization, and Branch Math Test v0.1

Date: 2026-09-03

Status:

```text
EXPERIMENTAL TEST RECORD
TASK, PORTABLE PARENT SPECIALIZATION, AND BRANCH ARE WORKING TERMS
NO BASELINE DOCTRINE CHANGED BY THIS TEST
```

## Purpose

Test whether the proposed three-part Training structure:

```text
Task
x portable Parent Specialization
x parent-bound Branch
```

does all of the following:

- raises developed ordinary Expressions enough to address the previously low
  success and Effect results;
- preserves the importance of development across the full Expression;
- allows a Branch Rank to exceed its Parent Rank without making Branch-only
  investment dominant;
- produces meaningful fallback when the Branch or Parent is inapplicable;
- and remains compatible with the current 75-point shared Training economy.

This test does not apply the candidate structure to HOLTs. It also does not
adopt `Task`, `Parent Specialization`, or `Branch` as final terms.

## Inherited Controls

```text
Rank 0  = x1.0
Rank 1  = x1.1
...
Rank 10 = x2.0

Successful unopposed Expression
= 1 baseline Effect Level
+ 1 Effect Level for each complete 10 points of Successful Margin

Winning opposed Expression
= 1 baseline Effect Level
+ 1 Effect Level for each complete 10 points of Net Margin

Successful Margin = Final Rating minus successful roll

Net Margin = higher Successful Margin minus lower Successful Margin
```

Percentile outcomes use rolls `01` through `100`. A roll succeeds when it is
equal to or below the floored Final Rating. Equal opposed margins produce no
Effect in this test, matching the existing opposed-play control.

Difficulty, current Resonance, current Dissonance, equipment, Scale,
multi-action division, mitigation, and exceptional results remain constant
and are omitted unless explicitly stated.

## Candidate Stack

```text
Attribute
x Derived Attribute
x Task
x applicable Parent Specialization
x applicable Branch
= Base Expression
```

The fictional jobs are provisionally distinct:

```text
Task
What broad practiced activity is being performed?

Parent Specialization
What developed subject, field, medium, or context supports that activity?

Branch
What narrower portion of that Parent has received concentrated development?
```

The Parent must be ranked before one of its Branches can be ranked. This test
does not cap Branch Rank at Parent Rank. Every individual line remains within
the current Rank 10 horizon.

## Test 1: Existing Character, Same Local Training Cost

Use the completed ordinary character's Service Pistol Expression:

```text
Mobility 5
x Coordination 1.3
= 6.5 core capability
```

Existing seven-point Training allocation:

```text
Ranged Combat Rank 4      x1.4
Service Pistol Rank 3     x1.3

6.5 x 1.4 x 1.3 = 11.830
```

Candidate seven-point Training allocation:

```text
Ranged Combat Task Rank 3       x1.3
Firearms Parent Rank 2          x1.2
Handguns Branch Rank 2          x1.2

6.5 x 1.3 x 1.2 x 1.2 = 12.168
```

Fallback values:

```text
Handgun use:
6.5 x 1.3 x 1.2 x 1.2 = 12.168

Another firearm without an applicable Branch:
6.5 x 1.3 x 1.2 = 10.140

Another ranged weapon without an applicable Parent or Branch:
6.5 x 1.3 = 8.450
```

With the existing diagnostic `x1.20` service-handgun equipment modifier:

```text
Existing structure:  11.830 x 1.20 = 14.196
Candidate structure: 12.168 x 1.20 = 14.6016
```

Both equipment-modified Expressions currently display as `14` and generate
the same ordinary discrete outcomes. The candidate structure therefore does
not materially repair the low pistol result merely by existing. It creates a
new place in which the Character may invest.

Finding:

```text
PASS:
The candidate structure works with the existing character and preserves clear
fallbacks.

CAUTION:
At the same small Training investment, the numerical increase is modest.
```

## Test 2: Equal-Cost Human Benchmarks

The existing human benchmarks use:

```text
Attribute x Derived Attribute x Skill x Specialization
```

For a fair comparison, keep the total Training Ranks spent on each benchmark
constant and divide those Ranks as evenly as possible among Task, Parent, and
Branch. An even division produces the highest branch-specific product for a
fixed number of Ranks; different distributions preserve the same cost but
change fallback strength.

| Tier | Existing Training | Existing Rating | Candidate Training | Candidate Rating | Increase |
|---|---:|---:|---:|---:|---:|
| Common | 5 + 5 = 10 | 16.8750 | 4 + 3 + 3 = 10 | 17.7450 | 5.2% |
| Elite | 8 + 8 = 16 | 46.6560 | 6 + 5 + 5 = 16 | 51.8400 | 11.1% |
| Peak | 9 + 9 = 18 | 61.7310 | 6 + 6 + 6 = 18 | 70.0416 | 13.5% |
| Max | 10 + 10 = 20 | 80.0000 | 7 + 7 + 6 = 20 | 92.4800 | 15.6% |

Exact unopposed enumeration:

| Tier | Structure | Success | 2+ Effects | Average Effect per attempt |
|---|---|---:|---:|---:|
| Common | Existing | 16% | 6% | 0.220 |
| Common | Candidate | 17% | 7% | 0.240 |
| Elite | Existing | 46% | 36% | 1.300 |
| Elite | Candidate | 51% | 41% | 1.560 |
| Peak | Existing | 61% | 51% | 2.170 |
| Peak | Candidate | 70% | 60% | 2.800 |
| Max | Existing | 80% | 70% | 3.600 |
| Max | Candidate | 92% | 82% | 4.700 |

Exact equal-rating opposed enumeration:

| Tier | Structure | Any Effect | 2+ Effects | Average Effect per exchange |
|---|---|---:|---:|---:|
| Common | Existing | 14.6% | 5.3% | 0.199 |
| Common | Candidate | 15.5% | 6.1% | 0.216 |
| Elite | Existing | 35.2% | 26.1% | 0.923 |
| Elite | Candidate | 37.7% | 28.7% | 1.057 |
| Peak | Existing | 42.1% | 33.1% | 1.327 |
| Peak | Candidate | 45.1% | 36.3% | 1.547 |
| Max | Existing | 47.6% | 38.9% | 1.750 |
| Max | Candidate | 49.2% | 40.6% | 1.907 |

Finding:

```text
PASS:
The extra purchasable layer raises focused capability under the same Training
budget without automatically doubling ordinary output.

CAUTION:
The increase is too small at Common investment to solve low ordinary results
by itself. The effect becomes substantial only at heavier investment.
```

## Test 3: Equal-Cost Concentration and Fallback

Use a constant ordinary core capability:

```text
Attribute 5 x Derived Attribute 1.5 = 7.5
```

Give every build exactly twelve Training Ranks. Test the chosen Branch, a
sibling subject under the Parent, and a use of the Task for which neither the
Parent nor Branch applies.

| Build | Task / Parent / Branch | Chosen Branch | Sibling Subject | Task Only |
|---|---:|---:|---:|---:|
| Task-heavy | 10 / 2 / 0 | 18.000 | 18.000 | 15.000 |
| Parent-focused | 6 / 6 / 0 | 19.200 | 19.200 | 12.000 |
| Balanced | 4 / 4 / 4 | 20.580 | 14.700 | 10.500 |
| Branch-heavy | 1 / 1 / 10 | 18.150 | 9.075 | 8.250 |

Against the existing Common Specialized defense of `16.875`:

| Build | Branch: Any Effect | Branch: 2+ Effects | Average Effect |
|---|---:|---:|---:|
| Task-heavy | 16.6% | 7.0% | 0.236 |
| Parent-focused | 17.6% | 7.9% | 0.256 |
| Balanced | 18.6% | 8.8% | 0.275 |
| Branch-heavy | 16.6% | 7.0% | 0.236 |

Findings:

```text
PASS:
Branch Rank 10 with Task 1 and Parent 1 does not overpower balanced
development. Its chosen-Branch rating is lower than the balanced 4/4/4 build.

PASS:
The Branch-heavy Character pays a severe but fictionally intelligible fallback
cost. The Character remains excellent only where the narrow Branch applies.

PASS:
The Parent-focused build remains strongest across sibling subjects. The
Task-heavy build remains strongest when the subject does not apply.
```

This validates the user's proposed handgun case:

```text
High Handguns Rank does not improve the shotgun Expression.

The Character falls back to Firearms when Handguns is inapplicable.

If Firearms is also weak, the Character then relies upon the broader Task at
its actual Rank.
```

Applicability, not an arbitrary child-equals-parent cap, contains the narrow
investment.

## Test 4: Same-Rank Ceiling

The equal-cost test must not conceal the other consequence. If every layer is
raised to the same tier Rank, the candidate receives one additional full
multiplier and costs fifty percent more Training Ranks than the existing
two-line Training stack.

| Tier | Existing Rating | Existing Training | Candidate Rating | Candidate Training |
|---|---:|---:|---:|---:|
| Common Rank 5 | 16.8750 | 10 | 25.3125 | 15 |
| Elite Rank 8 | 46.6560 | 16 | 83.9808 | 24 |
| Peak Rank 9 | 61.7310 | 18 | 117.2889 | 27 |
| Max Rank 10 | 80.0000 | 20 | 160.0000 | 30 |

At `160`, an unopposed ordinary-scale Expression succeeds on every currently
ordinary roll and averages `11.500` Effect Levels before mitigation. Against
the old Max Specialized defense of `80`, exact enumeration produces:

```text
Any Effect:     97.9%
2+ Effects:     95.65%
Average Effect: 8.3425
```

Against another equal `160` Expression, the opposed procedure remains
symmetrical: either side produces an Effect in `49.5%` of directed exchanges.
The excess rating still matters enormously against weaker opposition and in
unopposed resolution.

Finding:

```text
OPEN CONSEQUENCE:
If Branch is a normal multiplicative Training layer, the current ordinary
Max Specialized benchmark of 80 is no longer the ceiling. A Character can
spend 30 of 75 Training Points to reach 160 before equipment, Difficulty,
Resonance, Dissonance, Scale, or other Lenses.
```

The test does not presume that this is wrong. It establishes the actual cost
and output so the ordinary human horizon can be judged deliberately.

## Test 5: Branch Against One Additional Difficulty Rank

Compare the existing three-layer Expression at Difficulty 1 with the
same-rank four-layer Expression at Difficulty 2.

```text
D1 = x0.98
D2 = x0.588

D2 / D1 = 0.6

Candidate / existing
= Branch modifier x 0.6
```

The relationship by Branch Rank is exact before final flooring:

| Branch Rank | Branch Modifier | Candidate D2 relative to Existing D1 |
|---:|---:|---:|
| 0 | x1.0 | 60% (-40%) |
| 1 | x1.1 | 66% (-34%) |
| 2 | x1.2 | 72% (-28%) |
| 3 | x1.3 | 78% (-22%) |
| 4 | x1.4 | 84% (-16%) |
| 5 | x1.5 | 90% (-10%) |
| 6 | x1.6 | 96% (-4%) |
| 7 | x1.7 | 102% (+2%) |
| 8 | x1.8 | 108% (+8%) |
| 9 | x1.9 | 114% (+14%) |
| 10 | x2.0 | 120% (+20%) |

One additional Difficulty Rank therefore almost exactly counters a Branch at
Rank 6 or 7. A maximum Rank 10 Branch preserves a 20% advantage.

### Human Benchmark Comparison

| Tier | Existing at D1 | Candidate at D2 | Rating change |
|---|---:|---:|---:|
| Common, Rank 5 | 16.5375 | 14.88375 | -10% |
| Elite, Rank 8 | 45.72288 | 49.3807104 | +8% |
| Peak, Rank 9 | 60.49638 | 68.9658732 | +14% |
| Max, Rank 10 | 78.4000 | 94.0800 | +20% |

The maximum comparison is:

```text
Existing:
80 x D1 0.98 = 78.4

Candidate:
160 x D2 0.588 = 94.08

94.08 / 78.4 = 1.20
```

The 20% relationship is exact. Comparing `94.08` with the undiminished `80`
would produce `17.6%`, but that comparison improperly applies Difficulty to
only one side.

### Percentile and Effect Output

Exact unopposed enumeration:

| Tier | Structure | Success | 2+ Effects | Average Effect per attempt |
|---|---|---:|---:|---:|
| Common | Existing at D1 | 16% | 6% | 0.220 |
| Common | Candidate at D2 | 14% | 4% | 0.180 |
| Elite | Existing at D1 | 45% | 35% | 1.250 |
| Elite | Candidate at D2 | 49% | 39% | 1.450 |
| Peak | Existing at D1 | 60% | 50% | 2.100 |
| Peak | Candidate at D2 | 68% | 58% | 2.660 |
| Max | Existing at D1 | 78% | 68% | 3.440 |
| Max | Candidate at D2 | 94% | 84% | 4.900 |

At Max, success rises from `78%` to `94%`: sixteen percentage points and
approximately `20.5%` relative improvement after whole-number percentile
flooring. This closely tracks the exact 20% Final Rating relationship.

Average Effect per attempt rises more sharply, from `3.440` to `4.900`, or
approximately `42.4%`. This is not a contradictory second rule. Every
additional ten-point margin threshold adds another Effect Level, so the same
rating advantage may cross several cumulative thresholds on favorable rolls.

Exact equal-rating opposed enumeration:

| Tier | Structure | Any Effect | 2+ Effects | Average Effect per exchange |
|---|---|---:|---:|---:|
| Common | Existing at D1 | 14.64% | 5.25% | 0.1989 |
| Common | Candidate at D2 | 12.95% | 3.54% | 0.1649 |
| Elite | Existing at D1 | 34.65% | 25.55% | 0.8955 |
| Elite | Candidate at D2 | 36.75% | 27.69% | 1.0021 |
| Peak | Existing at D1 | 41.70% | 32.75% | 1.2995 |
| Peak | Candidate at D2 | 44.54% | 35.67% | 1.5031 |
| Max | Existing at D1 | 47.19% | 38.42% | 1.7158 |
| Max | Candidate at D2 | 49.35% | 40.74% | 1.9221 |

Equal opposition compresses the change because both sides possess the same
Final Rating and roll distribution. The principal 20% relationship remains a
capability comparison, not a guarantee that every derived play statistic must
change by exactly 20%.

### Function-Band Interaction

At the maximum comparison, one 75% Function Band reduction more than consumes
the remaining 20% advantage:

```text
94.08 x 0.75 = 70.56

70.56 / 78.4 = 0.90
```

The complete relative relationship is:

```text
Maximum Branch x2.0
x one additional Difficulty step 0.6
x 75% Function Band 0.75
= x0.90 relative to the existing D1 Expression at full function
```

Finding:

```text
PASS:
The Difficulty curve acts as a natural counterweight to the additional Branch
multiplier.

PASS:
At maximum Branch Rank, one additional Difficulty Rank preserves exactly 20%
of the candidate's advantage before flooring.

PASS:
One 25% Function Band reduction is sufficient to consume that remaining
advantage.

CAUTION:
Effect output is thresholded rather than perfectly linear. The 20% design
relationship should govern Final Rating expectations, not require every
Effect statistic to differ by exactly 20%.
```

## Deferred Campaign Profile Depth Idea

The default working Training depth stops at Branch.

A Campaign Profile focused upon unusually detailed mastery, such as a
martial-arts story, might later be allowed to define one additional subordinate
layer for named techniques. That possibility could support signature or
finishing techniques whose narrow applicability, setup, or other narrative
requirements justify deeper development.

This is an idea retained for later design. It has not been tested, adopted, or
added to the current candidate stack.

## Overall Assessment

The candidate architecture has legs.

```text
1. It gives the former Skill layer a clearer narrative job as practiced Task.

2. It lets a subject or field travel across Tasks when fictionally relevant.

3. It permits very narrow expertise without pretending that expertise applies
   outside its Branch.

4. It makes development across Task, Parent, and Branch mathematically
   stronger than dumping the same points into Branch alone.

5. It raises ordinary ratings, but only in proportion to actual Training
   investment.
```

It does not, by itself, solve every previously low ordinary result. At equal
cost the Common benchmark moves only from `16.875` to `17.745`. The structure
instead creates a legitimate deeper-development route. A Character becomes
substantially stronger by buying and applying more relevant developed Lenses,
not by receiving a free third multiplier.

The strongest successful result is:

```text
Low Parent or Task development continues to limit the complete Expression.

A high Branch creates narrow excellence, not universal competence.
```

The strongest unresolved consequence is:

```text
Does LENS want ordinary specialization to have a 30-point depth horizon and a
possible pre-equipment Final Rating of 160, or must the role of Branch be
defined differently before this architecture is adopted?
```
