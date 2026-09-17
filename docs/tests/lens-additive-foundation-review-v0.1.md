# Package 1: Additive Attribute-Derived Foundation Review

Subsequent decision: adopted into core LENS on 2026-09-13. See
`../design/lens-core-three-package-adoption-v0.1.md`. The review-stage statuses
and calculations below are preserved as evidence, not current adoption blockers.

Date: 2026-09-13
Status: Exploratory critical review. No baseline replacement, repricing,
reallocation, HOLT change, or award change adopted.

## Recommendation

Advance the candidate, unchanged, to a bounded working playtest comparison at
the current 60/20 prices. Do not yet replace the main baseline. The proposal
improves the development curve in the intended direction and is conceptually
coherent. Its main weaknesses are not flaws in its stated arithmetic: it only
partly addresses low success rates, and stronger intermediate output can worsen
existing attack/defense asymmetry. Those deserve observed playtests before adoption.

Evaluate forthcoming HOLT and award proposals independently. Award rescaling or
point-denomination inconvenience is not used here as an objection to Package 1.
The current prices are examined because this package explicitly requests it.

## Controls And Sources

- Change only `A x (1 + D/10)` to `A + D`.
- A remains 1-10, D remains 0-A, and no free Derived rank is introduced.
- Task, Field, Specialty, Precision, applicability, and their prices remain.
- Preserve protected starting allocations and all existing character ranks.
- Use matched Scale, neutral context, and full Function unless a probe states
  otherwise. Existing x1.10 shop-analysis equipment and x1.20 firearm/clinical
  equipment are retained on the original equipped probes. Auxiliary Assets,
  persuasion, defense, and recovery controls receive no invented equipment bonus.
- Distinct unopposed Difficulty uses `0.98 x 0.6^(D - 1)` and final flooring.
  Neutral active opposition does not automatically incur another D1 penalty.
- Retain independent successful Effects, full cancellation, eligible one-Effect
  counters, special results, and actual mitigation scope.
- Do not infer a rule for combining area, range, and duration Difficulty from
  this review. Those unresolved contributions are not silently stacked.

Current authority: `../system/lens-system-baseline-draft-v0.1.md`, particularly
Unified Flat Pricing, Current Character-Creation Allocation, Independent Opposed
Effects, Natural 01 Continuation, and Capacity/Function Bands.

Existing build source: `lens-low-rating-build-trace-v0.1.results.json`. This
contains the full local snapshot of the three repriced Ordinary character
variants. It is used instead of obsolete equal-cost Training portfolios.
The companion results file records the source hash and all tested route ranks.
Equipment and original professional route provenance are checked against
`lens-concept-led-25-50-100-rebuild-test-v0.1.md`; the later snapshot supplies
the actual current ranks. The executable reproduces A1, A2, B1, and C1 of that
snapshot with its original equipment and D1 before testing the new foundation.

## 1. Mathematical Claims

All supplied claims checked successfully:

- 65 legal integer A/D pairs: 45 improve and 20 remain unchanged.
- No legal pair decreases; D0 and A10 routes are unchanged.
- Both six-layer ordinary maxima are 320 before other applicable factors.
- The supplied A5/D5/all-training-5 D1-D3 probabilities are correct.
- The difference is `D x (1 - A/10)`.

Additional findings:

- Largest proportional increase: A1/D1, from 1.1 to 2, approximately +81.82%.
- Largest absolute foundation increase: A5/D5, +2.5. With four Rank-10 Training
  multipliers this becomes +40 before other modifiers, despite the unchanged
  overall maximum.
- A5/D5 receives +33.33%, equivalent to approximately 0.56 steps of the current
  Difficulty curve. It does not compensate for even one full extra Difficulty
  step. A3/D3 receives +53.85%, still less than the x1.6667 needed to offset one.
- All Training ratios on an unchanged A/D route are preserved. A specialty's
  proportional advantage over an unspecialized use does not disappear.

These are within-horizon findings. Above Attribute 10, the difference changes
sign for positive D; future larger horizons need their own decision.

## 2. Lower And Middle Capability

Required, permitted, unopposed checks; no equipment or contextual benefit:

| Controlled route | D1 current -> candidate | D2 | D3 |
| --- | --- | --- | --- |
| All six ranks 1 | 1% -> 2% | 1% -> 1% | 1% -> 1% |
| All six ranks 3 | 10% -> 16% | 6% -> 10% | 3% -> 6% |
| All six ranks 5 | 37% -> 49% | 22% -> 29% | 13% -> 17% |
| A5/D5/Task5/Field5, no narrower layers | 16% -> 22% | 9% -> 13% | 5% -> 7% |
| All six ranks 8 | 99% -> 99% | 88% -> 98% | 53% -> 59% |
| All six ranks 10 | 99% -> 99% | 99% -> 99% | 99% -> 99% |

The equal-rank rows are controlled Expressions, not complete starting builds or
established demographic definitions of competence.

The improvement is directionally desirable, but does not itself establish
comfortable low-to-middle success. A broad Rank-5 route still succeeds only 22%
at D1 when a check is genuinely required. The full Rank-5 stack still fails more
often than it succeeds at D1 and succeeds only 17% at D3. Routine work remaining
automatic does not answer the concern about functioning under meaningful pressure.

The foundation improves the input; the 40% loss per further Difficulty step
remains. If the current problem is excessive aggregation of legitimate-looking
demands, this is partial relief, not proof that the aggregation is right.

### Success Quality

At all ranks 5 and D1:

| Measure | Current | Candidate |
| --- | ---: | ---: |
| Success | 37% | 49% |
| Mean Effects per attempt, including failures | 0.932 | 1.504 |
| Mean Effects given success | 2.518 | 3.068 |
| Chance of at least three Effects | 17% | 29% |

The +33.33% foundation produces about +61% mean successful output per attempt
here because it improves both success frequency and margin. Equal maximum output
therefore does not imply equal output balance below that maximum.

At D3, the same candidate has only about a 0.96% chance of three or more Effects;
ordinary successes at Final Rating 17 cannot reach three. Most high-output
successes in that low-rating case depend on natural 01. This remains a meaningful
warning if an ordinary middle-tier objective needs several Effects.

### Function Bands

For all ranks 5 at D1, success at 100/75/50/25% Function changes:

`37 / 27 / 18 / 9%` -> `49 / 37 / 24 / 12%`.

The candidate at 75% Function matches the former fully functional rating in
this particular A5/D5 case. It does not change the relative impairment rule or
increase Capacity, but changes the absolute performance benchmark while impaired.
At 50% Function and D3 the result remains only 6% -> 8%.
Zero Function still yields zero arithmetic; no new permission to act through
lost function follows from the permitted-natural-01 rule.

## 3. Existing Characters, Without Rebuilding Them

| Character | Attribute spending | Derived spending | Training spending | Total | Unspent |
| --- | ---: | ---: | ---: | ---: | ---: |
| Experienced local shopkeeper | 1260 | 1040 | 770 | 3070 | 5 |
| Expedition security guide | 1260 | 1040 | 775 | 3075 | 0 |
| Medical specialist | 1260 | 1040 | 775 | 3075 | 0 |

All preserve 1200 protected Attribute, 1000 protected Derived, 750 protected
Training, and the 125 ordinary flexible allowance. Each has 26 total Attribute
ranks and 52 purchased Derived ranks after flexible purchases; none receives
new ranks or loses ranks under the candidate. Derived-parent caps remain valid.

Selected complete route probes, floored only at the end:

| Route | Neutral Rating current -> candidate | With distinct D3 |
| --- | --- | --- |
| Shopkeeper: Cognition/Inference/Bookkeeping | 38 -> 47 | 13 -> 16 |
| Shopkeeper: Cognition/Planning/Retail commerce | 40 -> 50 | 14 -> 17 |
| Shopkeeper: Assets/Planning/Retail commerce | 34 -> 38 | 12 -> 13 |
| Shopkeeper: Manipulation/Persuade/Retail commerce | 21 -> 22 | 7 -> 7 |
| Guide: signature revolver | 180 -> 198 | 63 -> 70 |
| Guide: other handgun | 100 -> 110 | 35 -> 38 |
| Guide: firearm outside Handguns | 58 -> 64 | 20 -> 22 |
| Guide: Dodge without an applicable Field | 15 -> 16 | 5 -> 5 |
| Guide: Dodge with applicable Firearms knowledge | 29 -> 31 | 10 -> 11 |
| Guide: physical Recover without applicable Field | 6 -> 7 | 2 -> 2 |
| Clinician: narrow neurosurgical treatment | 217 -> 255 | 76 -> 90 |
| Clinician: treatment outside narrower expertise | 54 -> 63 | 19 -> 22 |

Ratings above 99 are not percentages above 99; they also support more Effects.
D3 is a sensitivity input, not a new generic combat or professional difficulty.
Routine professional work does not require these rolls. Firearms knowledge in
Dodge remains conditional on actually informing the feasible evasion; equipment
and narrower expertise are not automatically transferred to defense.

The characters retain their concepts and sacrifices. The shopkeeper is not turned
into a combatant; the clinician's narrow depth remains four times the broad
treatment route before flooring. The guide's signature/broad ratio remains 3.06.
The change does not fill unpurchased Tasks or cure missing applicable expertise.

## 4. Broad, Focused, And Training Purchases

Retain 60/20 for the first comparison. A60/D30 is a possible later sensitivity,
not currently supported as a necessary correction.

With the additive foundation, one Attribute rank adds one foundation point on
each of its five routes and raises all five caps. One Derived rank adds one on
one route. At a 60-point budget and with headroom:

- One Attribute rank benefits all five routes by one foundation point each.
- Three Derived ranks can improve three routes by one each, or one route by three.
- With equally relevant and equally multiplied routes, broad development wins
  in total gain across five routes; focused development wins on a selected route.
- Across only three equally used routes the immediate totals can tie, but the
  Attribute retains unused breadth and cap benefits. Actual usage and downstream
  multipliers determine practical value; raw sums are not universal utility.

The candidate deliberately removes the old A/D synergy: a high Derived no longer
increases the marginal benefit of raising its Attribute. This is a genuine shift
toward focused advancement, not merely arithmetic presentation. At a Derived cap,
Attribute investment is still necessary to raise that Derived further.

Training is not displaced. Compare 20 points on one fully applicable route,
using Task5/Field5/Specialty3/Precision3 as a controlled fixture:

| Purchase | A3/D2 gain | A6/D3 gain |
| --- | ---: | ---: |
| One Derived rank | 20.00% | 11.11% |
| Two Task ranks | 13.33% | 13.33% |
| Two Field ranks | 13.33% | 13.33% |
| Four Specialty ranks | 30.77% | 30.77% |
| Four Precision ranks | 30.77% | 30.77% |

These purchases fit the stated caps. They differ in applicability, so immediate
route gain is not an overall-value ranking. Derived development works through
many trained activities on its route; Fields travel across Tasks and Derived
routes; narrower expertise trades reach for strength. No option dominates all
the others in every case.

A blanket Derived price increase would also penalize purchases at A10 where
their absolute contribution has not increased at all. First observe whether
players avoid broad development despite its breadth and cap benefits. Protected
creation funding also means freely optimizing one shared starting pool is not
an appropriate test of this package.

## 5. Opposed Effects And Pacing

Effects were enumerated with current natural-01 continuation behavior, ordinary
99, and zero successful output from 00. Counter frequency below means potential
eligibility, not automatic retaliation. Actual fictional support is still needed.

### Symmetric Middle-Tier Control

Both independently permitted all-rank-5 Expressions face the same distinct D1
challenge; opposition is not the reason for that Difficulty. Their Ratings move
37/37 -> 49/49.

| Measure per exchange | Current | Candidate |
| --- | ---: | ---: |
| Offensive remainder survives | 28.47% | 34.67% |
| Mean offensive remainder | 0.688 | 0.983 |
| Potential defensive surplus counter | 28.47% | 34.67% |

Both sides improving does not make the change cancel out. More rolls succeed,
more Effects are available, and fixed ten-point thresholds still matter. At
D3 the chance of offensive remainder is only 11.63% -> 14.87%.

In a separate neutral symmetric comparison with two matching mitigation Effects,
penetration rises 11.64% -> 18.26%. Mitigation is an isolated fixed-strength
protection fixture, not a new armor value or a second equipment multiplier.

### Asymmetric Advancement Can Hurt An Unchanged Opponent

A maximum attacker remains Rating 320. A defender with A5/D5 and four maximum
Training multipliers rises 120 -> 160. Mean offensive remainder falls about
19.88 -> 15.96. Thus "no Expression decreases" does not mean every actor keeps
the same opposed performance. This is not automatically bad; it is part of
compressing the capability gap.

### Existing Offensive/Defensive Asymmetry Can Grow

The guide's signature attack rises 180 -> 198, but its conditional Field-supported
defense rises only 29 -> 31. Against the same guide, with no armor, cover, paid
spending, or other intervention, the chance of at least ten offensive remainder
Effects rises 83.87% -> 94.98%. Such output would exhaust a fresh ten-Level
Capacity if actually applied as matching Load. This is not an assertion that
every hit must create that particular Condition.

The candidate did not create the asymmetry, but makes this existing exposed
signature exchange more decisive. The 320 ceiling provides no protection against
that intermediate-output change. Do not "fix" the test by granting the defender
every offensive Training layer without fictional justification.

### Bounded Encounter Sensitivity

The existing character-based harness was reused for 10,000 encounters per case
and mode, balanced persistent initiative, 1000-round censoring, and no recovery
actions. Each character attacks once per round and uses its separate feasible
defense. Function Bands apply as Load develops. No case reached the censor limit.

| Mirror match | Median rounds with own 00 severity modeled as Load | Output-only control |
| --- | --- | --- |
| Guide, signature firearm | 1 -> 1 | 1 -> 1 |
| Guide, broad firearm at distinct D3 | 15 -> 14 | 31 -> 27 |
| Shopkeeper, untrained firearm | 16 -> 16 | 71 -> 63 |

The first mode uses the prior harness's explicitly fictional mapping of own 00
complications to recoverable physical Load; it is not a rule that all 00 results
cause Load. The output-only control retains special rolls but omits complication
consequences; it is a diagnostic, not a playable alternative procedure.

Low-output attrition remains slow or complication-driven. In the guide's D3
case, a complication is necessary for the terminal loss of function in about
61.86% -> 57.49% of Load-complication trials. The candidate modestly reduces that
dependence; it does not eliminate it. Unlimited ammunition and prolonged exposure
are controls, not recommended portrayals of civilian fighting or complete play.

## 6. Lens Architecture And Implementation Boundaries

The proposal is conceptually coherent if explained as a broad-plus-focused
foundation followed by applicable Lenses. It is not necessary that every
identified layer be represented by multiplication for the system to remain
layered and contextual. Derived Attributes retain routing, development, and
parent relationships; they are not removed or merged into Tasks.

The meaning does change: Derived Rank becomes a direct focused contribution,
not a proportional amplifier of the Attribute. A6/D0 and A3/D3 then have the
same foundation, while retaining different breadth and future ceilings. That
is acceptable if focused development is intended to compensate for lower broad
capability; it should be taught explicitly rather than disguised as equivalent
old math. Only the applicable Derived contributes, not the sum of several.

If adopted later, implementation must treat `(A + D)` as one foundation before
applying downstream modifiers. Do not leave Scale applied only to A, or apply
Function only to D. For example, a matching x2 modifier on A5/D5 would apply to
the foundation 10, not only to its Attribute component. This review does not
reopen HOLT procedures or introduce separate scaling of its two terms.

Existing stable provisions keyed directly to Derived Rank are not automatically
repriced or enlarged. Assets Rank 5 remains Assets Rank 5; improved acquisition
Expressions do not by themselves increase its starting provision. The same
boundary applies to any other explicitly Rank-based allowance. A later adoption
pass should update actual Expression formulas, not globally replace every
occurrence of a Derived multiplier in historical or separate procedures.

Higher Final Ratings also reduce possible own-00 severity while leaving its
automatic failure frequency unchanged, and increase natural-01 output. These
follow existing procedures rather than new exceptions. Function impairment,
fixed mitigation, and counter eligibility all remain worth observing in play.

## 7. Required Next Evidence Before Main Adoption

1. Run the unchanged shopkeeper, guide, and clinician through meaningful uncertain
   professional and adventuring scenes with declared success expectations. Test
   narrow and broad expertise separately; do not award invented layers to meet
   a target percentage. Numerical probes are complete, player-facing validation
   is not.
2. Observe an actual combined range/area/duration attempt once its challenge
   assembly is specified. This package cannot validate an unchosen aggregation
   rule. Keep the future proposal comparison separate from this control.
3. Play the guide's signature exchange with genuinely available defense, cover,
   mitigation, and alternatives to exposure. Check whether more decisive output
   improves the story or makes response impractical. Also test unequal A/D
   opponents, not only mirrors.
4. Include a fictionally valid close-contact surplus counter and matching
   mitigation. The calculated potential-counter rate is not a substitute for
   seeing that one-Effect consequence alter subsequent decisions.
5. Offer actual 60-point purchase choices under unchanged eligibility and caps.
   Check whether players choose breadth, focused development, and portable
   expertise for recognizably different concepts. The marginal arithmetic does
   not prove choices will feel equally attractive to every table.

These are bounded adoption checks, not a requirement to rebuild every subsystem.
Package 1 should advance on its own merits; neither future award recalibration
nor a hoped-for HOLT fix is used to rescue or reject it here.

## Verification

Companion: `lens-additive-foundation-review-v0.1.cjs`.
Results: `lens-additive-foundation-review-v0.1.results.json`.

The run checked 65 legal foundation pairs, all three unchanged purchase ledgers
and parent caps, six controlled rank profiles at D1-D5, 18 actual-build route
probes, all five Function Bands, six opposed fixtures, and marginal purchases.
It also ran 120,000 seeded encounter trials through the existing tested harness.

Direct Expression probes use integer-ratio arithmetic and a single final floor.
The reused encounter harness retains its original floating-point implementation,
policies, and seed scheme. Special-success distributions omit at most 1e-12
probability per actor from exceptionally long repeated-01 sequences; bounded
probability results have at most approximately 2e-12 omitted mass per opposed
pair. Expected Effects are numerical approximations including the retained tail.
No claim of live playtesting, complete encounter balance, or adopted doctrine is
made. Main rules, existing allocations, prices, and awards remain unchanged.
