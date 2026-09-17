# LENS No-Task, Derived-x2 Field/Specialty Test v0.1

Date: 2026-09-04

Status:

```text
EXPERIMENTAL BRANCH TEST
NO BASELINE DOCTRINE CHANGED
```

## Test Question

Can LENS eliminate the Task rating entirely and resolve ordinary developed
Expressions through:

```text
Attribute
x Derived Attribute
x applicable Field
x applicable Specialty
= Base Expression
```

Under this model, the declared action remains part of the fiction but is not a
purchased multiplier. The Derived Attribute identifies how the Character is
acting. The Field identifies the developed area of practice or knowledge being
brought to bear. The Specialty identifies a narrower concentration within that
Field.

## First-Pass Controls

The user's proposal is tested literally:

```text
Derived Attribute Rank 0  = x2.0
Derived Attribute Rank 1  = x2.1
...
Derived Attribute Rank 10 = x3.0

Field Rank 0  = x1.0
Field Rank 10 = x2.0

Specialty Rank 0  = x1.0
Specialty Rank 10 = x2.0
```

The following remain unchanged solely to isolate the proposal:

- Attributes remain numerical ratings from 1 through 10.
- The Character still receives 50 global Derived Attribute Points.
- A Derived Attribute remains capped by its parent Attribute.
- Fields and Specialties remain applicability-bound stable Lenses.
- A Specialty remains a branch of a parent Field.
- Ordinary unranked action remains possible.
- Classification, Access, equipment, HOLT, Scale, Difficulty, Resonance, and
  Dissonance retain their existing jobs.
- The current 100 Training Points are retained as a stress-test control, not
  adopted as the correct budget for a two-layer Training structure.

No Task Ranks are purchased or multiplied. This test does not merely rename
Tasks as Fields.

## Architectural Test

### Ordinary Action Without Training

```text
Lift a gate:
Might x Strength

Notice movement:
Psyche x Awareness

Withstand an impact:
Might x Toughness

Make an immediate personal impression:
Influence x Presence

Call upon untrained public standing:
Leverage x Reputation
```

These Expressions do not need placeholder Skills or Tasks. The action is
declared; the applicable Derived Attribute supplies the focused capability.

### One Field Across Different Actions

Use `Firearms` as a Field and `Handguns` as its Specialty:

| Declared action | Derived Attribute route | Training contribution |
|---|---|---|
| Shoot a handgun accurately. | Coordination | Firearms x Handguns |
| Diagnose why a handgun is failing. | Cognition or Insight, as the fiction supports | Firearms x Handguns |
| Notice a handgun has been subtly altered. | Awareness or Insight, as the fiction supports | Firearms x Handguns |
| Make a credible display of practiced gun handling. | Presence, only when demonstrated competence actually matters | Firearms x Handguns |

The action changes without requiring separate Shooting, Diagnosis,
Observation, and Presentation purchases. Firearms expertise remains the same
developed Field. The Derived Attribute changes because a different capability
is carrying the action.

### One Field Across Internal And External Applications

Use `Medicine` as a Field and `Emergency Care` as a Specialty:

| Declared action | Derived Attribute route |
|---|---|
| Recall applicable medical knowledge. | Learning |
| Recognize the significance of symptoms. | Insight |
| Perform delicate treatment. | Coordination |
| Continue treatment under pressure. | Resolve or Stability, according to the actual obstacle |
| Secure institutional medical cooperation. | Authority or Network only when established position, rather than medical competence, carries the Expression |

The model does not need separate Research, Diagnose, Treat, Concentrate, and
Solicit Task ratings merely because those verbs describe the immediate action.
The fiction still has to establish that Medicine contributes distinctly.

### Technical Modification Cases

The preceding Modify problem becomes easier to route without inventing a
universal Modify Task:

```text
Hotwire a vehicle:
applicable Derived Attribute x Mechanics or Electronics x applicable Specialty

Temporarily increase output:
applicable Derived Attribute x Engineering or Mechanics x applicable Specialty

Rig a mechanism to fail:
applicable Derived Attribute x Mechanics or Engineering x applicable Specialty
```

The declared intention and method determine the consequences. No broad Modify
Rank is needed, and no object taxonomy is required merely to name the action.

## Numerical Test: Existing Ordinary Character

Apply the proposed Derived Attribute floor to the completed Municipal
Investigator while treating its former Skill entries as illustrative Fields
and its former Specializations as Specialties. This is a controlled numerical
translation, not a final reassignment of every old Skill.

| Expression | Previous Rating | No-Task x2 floor | Change |
|---|---:|---:|---:|
| Ordinary Movement | 6.000 | 11.000 | +83.3% |
| Trained Urban Pursuit | 8.640 | 15.840 | +83.3% |
| Quick Unarmed Strike | 7.800 | 13.800 | +76.9% |
| Forceful Restraint | 3.960 | 7.560 | +90.9% |
| Service Pistol Shot | 11.830 | 20.930 | +76.9% |
| Responsive Defense | 7.800 | 13.800 | +76.9% |
| Withstand Direct Impact | 3.300 | 6.300 | +90.9% |
| Read a Developing Conflict | 12.740 | 21.840 | +71.4% |
| Locate Crime-Scene Evidence | 30.240 | 50.400 | +66.7% |
| Interpret Crime-Scene Relationships | 28.224 | 48.384 | +71.4% |
| Interview a Cooperative Witness | 9.464 | 16.744 | +76.9% |
| Obtain Records Through Authority | 7.920 | 15.120 | +90.9% |
| Contact an Established Informant | 8.580 | 16.380 | +90.9% |
| Invoke Unranked Reputation | 6.000 | 12.000 | +100.0% |

The increase varies because the flat additional `x1.0` is proportionally
largest for an unranked Derived Attribute and proportionally smallest for a
highly ranked one.

## Development Ladder Test

Use an ordinary benchmark:

```text
Attribute 5
Derived Attribute Rank 2 = x2.2
```

| Development | Calculation | Rating |
|---|---|---:|
| No applicable Field | 5 x 2.2 | 11.000 |
| Field Rank 5 | 5 x 2.2 x 1.5 | 16.500 |
| Field Rank 5, Specialty Rank 5 | 5 x 2.2 x 1.5 x 1.5 | 24.750 |
| Field Rank 10, Specialty Rank 10 | 5 x 2.2 x 2.0 x 2.0 | 44.000 |

This produces a clean fallback ladder:

```text
Specialty applies: 24.750
Field only:        16.500
Neither applies:   11.000
```

The Character remains capable when the Specialty disappears, and remains
functional when no training entry applies.

For comparison, ten Training Ranks divided efficiently across the current
three Training layers produce:

```text
Old core:
5 x 1.2 x Task 1.4 x Field 1.3 x Specialty 1.3
= 14.196

No-Task branch:
5 x 2.2 x Field 1.5 x Specialty 1.5
= 24.750
```

The proposed model is therefore not numerically neutral. At this ordinary
benchmark it raises the same-cost focused Expression by approximately 74.4%.

## Training-Pool Stress Test

Holding 100 Training Points constant produces the following transparent
portfolios. They are diagnostics, not recommended templates.

| Portfolio | Allocation | Field-only Rating | Specialty Rating |
|---|---|---:|---:|
| Broad Generalist | 25 Fields at Rank 4 | 15.400 | 15.400 |
| Professional | 15 Fields at Rank 4; 5 Specialties at Rank 8 | 15.400 | 27.720 |
| Narrow Specialist | 10 Fields at Rank 5; 5 Specialties at Rank 10 | 16.500 | 33.000 |
| Five mastered routes | 5 Fields at Rank 10; 5 Specialties at Rank 10 | 22.000 | 44.000 |

The two-layer structure makes 100 Training Points much more generous than it
was under Task / Field / Specialty. This does not invalidate the architecture,
but it means the current Training budget cannot be assumed to survive removal
of Tasks.

## Ceiling And Compression Test

At maximum ordinary development:

```text
Current three-Training-layer stack:
Attribute 10 x Derived Attribute 2.0
x Task 2.0 x Field 2.0 x Specialty 2.0
= 160

No-Task branch:
Attribute 10 x Derived Attribute 3.0
x Field 2.0 x Specialty 2.0
= 120
```

The proposed model raises the floor but lowers this maximum stack by 25%.
It also reaches its maximum Training contribution for 20 Ranks instead of 30.

Derived Attribute development is relatively compressed:

```text
Current progression: x1.0 to x2.0 = 100% increase
Proposed progression: x2.0 to x3.0 = 50% increase
```

Each Rank still adds the same absolute `x0.1`, but concentrated Derived
Attribute investment creates only half as much relative separation between
unranked and maximum development.

## Narrative And Construction Findings

### Strong Passes

```text
PASS:
The model eliminates the forced search for a generic practiced Task behind
every Derived Attribute use. Toughness, Strength, Awareness, Reputation, and
the other Derived Attributes can enter play directly.

PASS:
The declared action remains unrestricted narrative language rather than a
catalogue entry. The system asks what the Character is doing, which Derived
Attribute carries it, and what developed Field and Specialty genuinely help.

PASS:
The same Field can travel across actions and Derived Attributes without a
separate Task multiplier. This closely matches the established applicability
principle.

PASS:
The model resolves the broad-Task problem exposed by Attack, Defend, Operate,
Create, and Modify. Those words may describe actions without becoming universal
purchases.

PASS:
Fallback is preserved. Losing a Specialty falls back to Field; losing Field
applicability falls back to Attribute x Derived Attribute.
```

### Real Costs And Open Questions

```text
CAUTION:
Fields now carry all learned development. Their scope becomes the principal
construction boundary. Overbroad Fields would replace overbroad Tasks as the
dominant purchase.

CAUTION:
A Field may describe an area of knowledge, a practical discipline, or a
repeated practice such as Teaching or Research. The definition must support
that range without turning Field into an unrestricted player-written bonus.

CAUTION:
Subject expertise becomes deliberately portable. Firearms may support
shooting, diagnosis, maintenance, appraisal, or a credible demonstration when
the fiction supports it. This is a feature only if LENS wants broad familiarity
with a Field to matter across those uses.

CAUTION:
The x2.0 Derived Attribute floor substantially raises ordinary ratings while
reducing the relative value of Derived Attribute investment.

UNRESOLVED:
The correct Training budget after eliminating one purchasable layer.

UNRESOLVED:
Whether x2.0 through x3.0 is the best Derived Attribute curve, or whether the
Task contribution should be absorbed through a different numerical method.

UNRESOLVED:
Whether Specialty remains capped by Field. This test does not need that answer
to establish the architecture's viability.
```

## Test Conclusion

The no-Task architecture has genuine legs and is conceptually cleaner than the
current Task / Field / Specialty structure.

```text
Character declares the action.
Attribute establishes broad capability.
Derived Attribute identifies how the Character acts.
Field supplies developed applicable expertise.
Specialty supplies narrower applicable expertise.
```

Eliminating Task does not remove narrative action from resolution. It removes
the requirement that every recurring verb become a purchased character-sheet
line.

The test does not yet validate the proposed math. The literal x2.0 floor fixes
part of the low ordinary-rating problem, but it raises undeveloped capability
more than developed capability and makes 100 Training Points unusually
generous. The architecture should proceed to comparative construction testing;
the numerical floor and Training budget should remain independent test
variables rather than being accepted as one inseparable package.

## Customization Stress Test

Status: INVALIDATED AS A STRICT NO-TASK TEST after user review. The examples
allowed Fields and Specialties to contain practiced activities. They remain
evidence for a flexible two-layer Skill-like architecture, not for eliminating
the practiced-activity dimension. See "Corrected Strict No-Task Test."

### Shared Numerical Control

Give every tested route the same core capability and the same focused
Training investment:

```text
Attribute 5
x Derived Attribute Rank 4 at the proposed floor: x2.4
= 12.000

Field Rank 6:     x1.6
Specialty Rank 8: x1.8

No applicable Field: 12.000
Field only:         19.200
Field + Specialty:  34.560
```

The test is not whether one build receives a larger budget. It is whether the
two remaining Training layers can place that budget differently enough to
produce distinct Characters.

### Shooter And Gunsmith

#### Discipline-Centered Construction

```text
Shooter
Field: Marksmanship 6
Specialty: Handguns 8

Gunsmith
Field: Armory 6
Specialty: Handguns 8
```

Illustrative Expressions:

| Character | Handgun shot | Repair or rebuild handgun |
|---|---:|---:|
| Shooter | Coordination x Marksmanship x Handguns = 34.560 | Applicable core or partial expertise only; Marksmanship does not automatically become Armory |
| Gunsmith | Applicable core or partial expertise only; Armory does not automatically become Marksmanship | Cognition or Coordination x Armory x Handguns = 34.560 |

The identical Specialty word does not mean an identical Lens. A Specialty is
a branch of its recorded parent Field. `Handguns under Marksmanship` and
`Handguns under Armory` represent different concentrated expertise.

#### Shared-Field Construction

A Campaign Profile or Character could instead define a genuinely broad
Firearms Field:

```text
Both Characters:
Field: Firearms 6

Shooter Specialty: Handgun Shooting 8
Gunsmith Specialty: Handgun Repair 8
```

Both then possess the intentional Field fallback of `19.200` across ordinary
applicable firearm familiarity, while each reaches `34.560` only in the
signature application. This is not a defect if the shared Field truth really
includes broad operation, safety, maintenance, and recognition. If it does
not, the Field has been named or scoped too broadly.

Finding:

```text
PASS:
Shooter and gunsmith remain mechanically distinct without a universal
Shooting or Repair Task column.

CAUTION:
The breadth represented by the Field Rank must be explicit. The system cannot
price Firearms, Marksmanship, and Armory equally while allowing the broadest
word to subsume the other two without an applicability boundary.
```

### Mathematician And Teacher

```text
Mathematician
Field: Mathematics 6
Specialty: Number Theory 8

Teacher
Field: Education 6
Specialty: Mathematics Instruction 8
```

| Expression | Mathematician | Teacher |
|---|---:|---:|
| Solve a number-theory problem | Cognition x Mathematics x Number Theory = 34.560 | Core capability unless another applicable Field is recorded |
| Teach an ordinary mathematical concept | Mathematics may contribute at Field-only strength when subject command is what matters = 19.200 | Projection or Connection x Education x Mathematics Instruction = 34.560 |
| Teach an advanced original proof | Potential compound undertaking if both advanced subject mastery and developed pedagogy are independently necessary | Potential compound undertaking if both advanced subject mastery and developed pedagogy are independently necessary |

The no-Task model does lose the automatic cross-product:

```text
Teaching Task x Mathematics Field x Calculus Specialty
```

That loss is real. The replacement does not pretend that every trained teacher
also possesses every subject or that every subject expert possesses pedagogy.
The Character purchases the Field that represents the actual broad training.
A Character who possesses both Mathematics and Education can use the existing
Compound Expression architecture when both perform distinct necessary
functions. The Fields do not automatically multiply merely because both can
be mentioned.

Finding:

```text
PASS:
Subject expert and expert teacher remain distinct.

REAL TRADEOFF:
General activity mastery and subject mastery are no longer automatically
orthogonal multipliers on every Expression. When both are genuinely required,
their interaction must use the universal Compound Expression rule rather than
silently restoring the removed column.
```

### Diagnostician And Surgeon

Give both Characters the same broad Field:

```text
Field: Clinical Medicine 6

Diagnostician Specialty: Diagnosis 8
Surgeon Specialty: Surgery 8
```

| Character | Diagnose | Operate |
|---|---:|---:|
| Diagnostician | Insight x Clinical Medicine x Diagnosis = 34.560 | Coordination x Clinical Medicine = 19.200 |
| Surgeon | Insight x Clinical Medicine = 19.200 | Coordination x Clinical Medicine x Surgery = 34.560 |

This pair demonstrates all three remaining sources of customization:

- the Derived Attribute distinguishes the capability used;
- the Field establishes shared professional training;
- the Specialty distinguishes concentrated practice.

The shared fallback is a feature: both Characters really are clinicians. The
Specialties prevent that shared foundation from making them identical.

### Broad Practitioner Test

Removing Task does not prohibit a Character whose defining training is a
portable practice:

```text
Research
Teaching
Performance
Investigation
Repair
```

Any of these may be a Field when it represents a genuine developed discipline
for that Character or Campaign Profile. This does not restore a mandatory Task
column. It means Field is not restricted to academic subjects or object types.

The distinction is:

```text
Task architecture
Every Expression searches for a separately rated practiced verb in addition
to subject expertise.

No-Task architecture
The Character records the broad areas of training that actually define them.
Those Fields may concern knowledge, practice, profession, medium, or discipline.
```

### Power-Building Test

The no-Task model prevents one common optimization route: purchasing a very
broad Task such as Attack, Defend, Operate, Create, or Modify and applying its
multiplier across many otherwise unrelated Fields.

It creates a different risk: choosing an overbroad Field such as `Technology`,
`Combat`, `Science`, or `Social Interaction` and claiming that nearly every
relevant activity falls within it. Therefore the Field construction standard
must require a coherent developed discipline whose claimed breadth is
comparable to the Campaign Profile's examples.

This is a narrower balancing problem than maintaining both a universal Task
landscape and a Field landscape, but it does not disappear.

### Original Customization Verdict: Limited To Repackaging

```text
LIMITED PASS:
Removing the mandatory Task column while allowing practiced activity to move
into Field or Specialty does not eliminate meaningful Character customization.
This is repackaging into two Training layers, not strict elimination.

PRESERVED:
- broad capability through Attribute;
- functional approach through Derived Attribute;
- developed training through Field;
- narrow identity through Specialty;
- permission and extraordinary possibility through other Lenses.

NOT REMOVED:
Practiced activity remains encoded inside some Field or Specialty labels even
though it no longer occupies a universal independent column.

CONDITION OF SUCCESS:
Field must mean a developed area of training and may be a body of knowledge,
practice, profession, medium, or discipline. Specialty must be allowed to
narrow that Field by subject, application, technique, instrument, or context.
```

The removed dimension can matter, especially for undertakings that genuinely
combine portable method and independent subject mastery. The test does not
show that it is common enough to justify a mandatory multiplier on every
Expression. Existing Compound Expression rules can address the cases where two
separately developed Fields perform distinct necessary functions.

## Matched Shooter/Gunsmith Test

Status: INVALIDATED AFTER USER REVIEW. The first version moved practiced
activity into `Marksmanship`, `Armory`, `Handgun Shooting`, and `Handgun
Repair`. It therefore tested relocation or renaming of Task, not genuine
elimination of that Training dimension. The arithmetic remains useful, but
the original customization conclusion does not.

### Shared Character Controls

Both Characters have identical relevant capabilities:

```text
Mobility 5
Coordination Rank 4

Psyche 5
Cognition Rank 4
```

Both receive fourteen Training Ranks for the tested professional route. No
equipment modifier, Difficulty, Scale change, Resonance, Dissonance, HOLT, or
extraordinary permission is applied.

### Model A: Current Task Architecture

Use the current Derived Attribute progression for the complete current-package
comparison:

```text
Attribute 5 x Derived Attribute 1.4 = 7.000
```

```text
Shooter
Shooting Task 5
Firearms Field 5
Handguns Specialty 4

Gunsmith
Repair Task 5
Firearms Field 5
Handguns Specialty 4
```

| Expression | Applicable Training | Rating |
|---|---|---:|
| Signature handgun action | Task x Field x Specialty | 22.050 |
| Same practiced action with a rifle | Task x Field | 15.750 |
| Other Character's handgun action | Field x Specialty | 14.700 |
| Same practiced action in another subject | Task only | 10.500 |
| Unrelated untrained action | None | 7.000 |

The Task model creates five mechanically distinct fallback bands. It can say
that the shooter is better at firing an unfamiliar ranged weapon than repairing
a familiar handgun, while the gunsmith reverses that relationship.

### Invalid Model B: Action Moved Into Specialty

Use the proposed Derived Attribute floor:

```text
Attribute 5 x Derived Attribute 2.4 = 12.000
```

```text
Both Characters
Firearms Field 6

Shooter
Handgun Shooting Specialty 8

Gunsmith
Handgun Repair Specialty 8
```

| Expression | Applicable Training | Rating |
|---|---|---:|
| Signature handgun action | Field x Specialty | 34.560 |
| Adjacent Firearms action | Field only | 19.200 |
| Other Character's handgun action | Field only | 19.200 |
| Same action outside Firearms | None | 12.000 |
| Unrelated untrained action | None | 12.000 |

This model preserves signature identity and broad Firearms fallback, but it
does not distinguish general shooting practice from general gunsmithing
practice. Both Characters intentionally share the same broad Field competence.

### Invalid Model C: Action Moved Into Field

```text
Shooter
Marksmanship Field 7
Handguns Specialty 7

Gunsmith
Armory Field 7
Handguns Specialty 7
```

| Expression | Shooter | Gunsmith |
|---|---:|---:|
| Signature handgun action | 34.680 | 34.680 |
| Same practice with another applicable weapon | 20.400 | 20.400 |
| Other Character's professional action | 12.000 | 12.000 |
| Unrelated untrained action | 12.000 | 12.000 |

The table is symmetrical, but its columns represent different actions. The
Shooter receives `34.680` for a handgun shot and `20.400` for other applicable
Marksmanship. The Gunsmith receives those values for handgun armory work and
other applicable Armory work.

This appeared to restore the professional distinction, but it did so by moving
Shooting into `Marksmanship` and Repair into `Armory`. It removed the column
without removing the practiced-activity rating. This does not answer the
strict no-Task question.

### Architecture-Only Control

The full-package comparison above includes two simultaneous changes: Task is
removed and the Derived Attribute floor rises. Hold the proposed `12.000` core
constant across both architectures to isolate only the Training structure.

| Structure | Equal-cost allocation | Signature Rating |
|---|---|---:|
| Task / Field / Specialty | 5 / 5 / 4 Ranks | 37.800 |
| Field / Specialty | 7 / 7 Ranks | 34.680 |

At equal cost and an identical core, the third multiplier raises the optimized
Task-model signature by approximately 9.0%. Its larger benefit is not raw
signature output; it is the additional fallback distinctions:

```text
Task model:
core
Task only
Field plus Specialty
Task plus Field
Task plus Field plus Specialty

No-Task model:
core
Field only
Field plus Specialty
```

### Full-Package Output

Using the current Task package and proposed no-Task package literally:

| Result | Current Task package | No-Task shared Field | No-Task practice Field |
|---|---:|---:|---:|
| Signature Rating | 22.050 | 34.560 | 34.680 |
| Signature success chance | 22% | 34% | 34% |
| Signature chance of 2+ Effects | 12% | 24% | 24% |
| Average Effect per attempt | 0.360 | 0.760 | 0.760 |
| Principal fallback Rating | 14.700-15.750 | 19.200 | 20.400 |
| Untrained core | 7.000 | 12.000 | 12.000 |

The no-Task package is much stronger here because of the Derived Attribute
floor, not because two Training multipliers inherently outperform three. The
floor change must therefore remain a separate balance decision.

### Skill Comparison

An old-style two-layer Skill / Specialization build with the same Rank curve is
mathematically identical to Field / Specialty:

```text
Skill 7 x Specialization 7
= Field 7 x Specialty 7
```

The difference is what the first Training line is allowed to mean. If Skill
packages subject and activity according to a fixed catalogue, the old scope
problem returns. If Field records the Character's developed discipline and is
allowed to be knowledge-centered or practice-centered, the no-Task model gains
the same customization with a clearer applicability rule.

### Original Matched-Pair Finding: Invalidated

```text
INVALID:
The test did not prove that no-Task Field / Specialty can distinguish shooter
from gunsmith. It encoded Shooting and Repair inside the remaining labels.

RETAINED ARITHMETIC FINDING:
A three-multiplier Training structure creates more fallback bands than a
two-multiplier structure.

UNANSWERED BY THE ORIGINAL TEST:
Whether Derived Attribute, subject Field, and subject Specialty alone preserve
enough Character differentiation.
```

### Equal-Cost Breadth Versus Depth: Arithmetic Only

The preceding matched builds divided fourteen Training Ranks evenly. Test
whether different Field/Specialty allocations preserve another form of
customization after Task is removed.

Use the same `12.000` Attribute/Derived Attribute core and a single fourteen-
Rank route:

| Build | Field / Specialty | Field-only Rating | Signature Rating |
|---|---:|---:|---:|
| Broad practitioner | 10 / 4 | 24.000 | 33.600 |
| Balanced practitioner | 7 / 7 | 20.400 | 34.680 |
| Narrow specialist | 4 / 10 | 16.800 | 33.600 |

The maximum signature difference is only `1.080`, approximately 3.2% of the
lower signature. Their fallback differs substantially:

```text
Broad practitioner fallback:  24.000
Balanced practitioner fallback: 20.400
Narrow specialist fallback:   16.800
```

The following earlier application is not a valid strict no-Task example
because the Specialty contains the practiced action:

```text
Broad firearms practitioner
Firearms 10
Handgun Shooting 4

Narrow handgun shooter
Firearms 4
Handgun Shooting 10
```

Both produce almost the same signature handgun Expression. The broad
practitioner remains much better when the handgun Specialty does not apply;
the narrow specialist has concentrated most Training into that one use.

This result depends upon the existing candidate that Specialty may exceed its
parent Field. A parent-equals-child cap would sharply restrict the narrow build
and remove this tradeoff.

Arithmetic finding only:

```text
PASS:
Field/Specialty allocation can preserve broad-versus-narrow investment in one
defined route.

NOT PROVEN:
That this distinction preserves different practiced activities when neither
Field nor Specialty is allowed to name the activity.

DEPENDENCY:
Allowing Specialty Rank to exceed Field Rank materially supports the no-Task
architecture. Applicability and fallback, rather than a parent Rank cap,
contain narrow investment.
```

## Corrected Strict No-Task Test

### Constraint

To test actual elimination rather than relocation, neither remaining Training
label may contain the action, method, or a synonym for it.

```text
Field: Firearms
Specialty: Handguns

Forbidden test substitutions:
Marksmanship
Armory
Handgun Shooting
Handgun Repair
```

The Shooter and Gunsmith receive identical Attributes, Derived Attributes,
Field Rank, and Specialty Rank. Their fictional histories differ, but no Lens
records which activity each practiced.

### Identical Construction

```text
Both Characters

Mobility 5
Coordination Rank 4: x2.4

Psyche 5
Cognition Rank 4: x2.4

Firearms Field 7: x1.7
Handguns Specialty 7: x1.7
```

### Results

```text
Shoot a handgun:
Mobility 5 x Coordination 2.4 x Firearms 1.7 x Handguns 1.7
= 34.680

Repair a handgun:
Psyche 5 x Cognition 2.4 x Firearms 1.7 x Handguns 1.7
= 34.680
```

| Character | Shoot handgun | Repair handgun |
|---|---:|---:|
| Shooter | 34.680 | 34.680 |
| Gunsmith | 34.680 | 34.680 |

The fiction says they practiced different things, but the construction cannot
record that difference. The characters are mechanically identical in both
activities.

### Derived Attribute Differentiation Control

Allow the Shooter to favor Coordination and the Gunsmith to favor Cognition:

```text
Favored Derived Attribute Rank 8: x2.8
Other Derived Attribute Rank 2:   x2.2
```

| Character | Shoot handgun | Repair handgun |
|---|---:|---:|
| Shooter | 40.460 | 31.790 |
| Gunsmith | 31.790 | 40.460 |

Derived Attribute allocation can distinguish the Characters, but it describes
their focused capability, not their practiced activity. The Shooter is now
better at every applicable Coordination route, and the Gunsmith is better at
every applicable Cognition route. The model still cannot represent two
Characters with equal Coordination and Cognition who trained different uses of
the same subject.

### Corrected Finding

```text
FAIL:
Strict elimination of practiced-activity Training removes a real dimension of
Character customization.

SPECIFIC LOSS:
Two Characters with the same capability and the same subject expertise cannot
be distinguished by what they practiced doing with that expertise.

PARTIAL COMPENSATION:
Different Derived Attribute allocations distinguish different approaches, and
different Field/Specialty allocations distinguish different subjects and
depths. Neither records practiced activity independently.

NOT A FIX:
Putting Shooting or Repair into the Field or Specialty name preserves the
distinction by relocating the activity Lens. It may still support a simpler
two-layer Training architecture, but it is not genuine elimination.
```

The corrected test establishes three honest alternatives:

```text
1. Retain Task as an independent practiced-activity multiplier.

2. Use one flexible Training layer that may package activity and subject,
   effectively returning to a Skill-like architecture, followed by Specialty.

3. Use subject-only Field and Specialty, eliminate practiced-activity Training,
   and knowingly accept that Shooter/Gunsmith differentiation must come from
   Derived Attributes or other existing Lenses.
```

## Strict Model Functional Test

Status: Completed at the user's direction after correcting the earlier
relabeling error. This test evaluates the third alternative on its own terms
rather than requiring subject Training to reproduce a removed action rating.

### Strict Definitions For This Test

```text
Field
A developed body of subject knowledge or familiarity.

Specialty
A narrower subject, object class, environment, tradition, or topic within its
parent Field.

Action
What the Character declares in the fiction. It is not ranked.
```

Forbidden substitutions include action or method labels such as Shooting,
Repair, Teaching, Investigation, Marksmanship, Gunsmithing, Diagnosis,
Surgery, or Persuasion. These may describe declared actions, professions, or
outcomes, but do not enter the Training stack in the strict model.

The tested stack is:

```text
Attribute x Derived Attribute x applicable subject Field
x applicable subject Specialty
```

### Test 1: Holistic Subject Expertise

Use one Character with:

```text
Firearms Field 7: x1.7
Handguns Specialty 7: x1.7
```

The same Training applies to different declared actions when handgun expertise
actually contributes:

| Declared action | Illustrative route | Training |
|---|---|---|
| Fire a handgun accurately | Mobility x Coordination | Firearms x Handguns |
| Recognize that a handgun was altered | Psyche x Awareness or Insight | Firearms x Handguns |
| Diagnose why a handgun malfunctions | Psyche x Cognition | Firearms x Handguns |
| Recall a model's known characteristics | Psyche x Learning | Firearms x Handguns |
| Make a credible demonstration of handgun familiarity | Influence x Presence or Projection | Firearms x Handguns, only when expertise itself carries the display |
| Evaluate a handgun acquisition | Leverage x Assets | Firearms x Handguns, only when subject knowledge improves the acquisition decision |

Finding:

```text
PASS:
The strict model resolves many different actions without a Skill or Task list.

DESIGN CONSEQUENCE:
A Field Rank represents holistic subject expertise. Training in Firearms is
deliberately portable across every action to which firearm knowledge genuinely
contributes.
```

This is the core exchange made by the model. It does not distinguish how the
Character acquired or practiced each use. It distinguishes where the
Character possesses expertise and which capability they bring to bear now.

### Test 2: Derived Attributes As Practitioner Differentiation

Give the Shooter and Gunsmith equal Attributes and equal subject Training:

```text
Relevant Attribute: 5
Firearms Field 7: x1.7
Handguns Specialty 7: x1.7

Shooter
Coordination Rank 8: x2.8
Cognition Rank 2:    x2.2

Gunsmith
Coordination Rank 2: x2.2
Cognition Rank 8:    x2.8
```

Stipulate two Expressions whose actual functions are clear:

```text
Accurately fire the handgun:
Mobility x Coordination x Firearms x Handguns

Diagnose the internal cause of a malfunction:
Psyche x Cognition x Firearms x Handguns
```

| Character | Accurate shot | Diagnose malfunction |
|---|---:|---:|
| Shooter | 40.460 | 31.790 |
| Gunsmith | 31.790 | 40.460 |

Finding:

```text
PASS:
Derived Attribute allocation can produce different practitioner profiles even
when Field and Specialty are identical.

LIMIT:
The difference belongs to general Coordination and Cognition, not to shooting
or repair practice. The Shooter's Coordination applies wherever that focused
capability is relevant; the Gunsmith's Cognition does the same.

APPLICABILITY CONTROL:
Creative narration does not allow either Character to substitute a preferred
Derived Attribute unless that capability genuinely performs the declared
function. Calculation may support a shot, but it does not automatically replace
the Coordination needed to execute it. Manual precision may expose or correct
a fault, but it does not automatically perform causal diagnosis.
```

The model therefore differentiates approaches, not practiced verbs.

### Test 3: Maximum Derived-Attribute Separation

At equal parent Attribute, the proposed Derived Attribute curve ranges from
`x2.0` to `x3.0`.

```text
Maximum relative separation:
3.0 / 2.0 = 1.5
```

A maximum Derived Attribute is only 50% stronger than an unranked one before
other factors. For the Rank 8 versus Rank 2 test:

```text
2.8 / 2.2 = 1.2727
```

The favored action is approximately 27.3% stronger than the unfavored action.

Finding:

```text
CAUTION:
The x2.0 floor raises ordinary capability but compresses the exact layer that
must now carry all action-method differentiation.

CURRENT CURVE:
x1.0 through x2.0 permits a maximum 2:1 separation.

PROPOSED CURVE:
x2.0 through x3.0 permits a maximum 1.5:1 separation.
```

Removing Task makes Derived Attribute selection more conceptually important;
raising its floor makes Derived Attribute investment less relatively
important. Those two effects pull in opposite directions.

### Test 4: Subject Specialty Differentiation

Give two Characters identical Attributes, Derived Attributes, and Firearms
Field Rank:

```text
Firearms Field 7: x1.7

Character A
Handguns Specialty 7: x1.7

Character B
Long Guns Specialty 7: x1.7
```

With the ordinary `Attribute 5 x Derived Attribute 2.4 = 12.000` core:

| Subject | Handgun specialist | Long-gun specialist |
|---|---:|---:|
| Handguns | 34.680 | 20.400 |
| Long guns | 20.400 | 34.680 |
| Other Firearms subjects | 20.400 | 20.400 |
| Unrelated Field | 12.000 | 12.000 |

Finding:

```text
STRONG PASS:
Specialties preserve narrow subject identity and clean fallback without naming
an action.
```

The model can strongly distinguish what Characters know about. It cannot
separately distinguish what they practiced doing with the same knowledge.

### Test 5: Equal-Cost Subject Portfolios

Use one hundred Training Points only as the current construction control:

| Portfolio | Allocation | Ordinary core | Field-only | Specialty |
|---|---|---:|---:|---:|
| Broad subject generalist | 20 Fields at Rank 5 | 11.000 | 16.500 | 16.500 |
| Ten developed subjects | 10 Fields at Rank 10 | 11.000 | 22.000 | 22.000 |
| Ten balanced specialties | 10 Fields at Rank 5 plus 10 Specialties at Rank 5 | 11.000 | 16.500 | 24.750 |
| Five mastered specialties | 5 Fields at Rank 10 plus 5 Specialties at Rank 10 | 11.000 | 22.000 | 44.000 |

Finding:

```text
PASS:
The strict model preserves broad-versus-deep subject customization.

CAUTION:
One hundred points buy extensive expertise when only Field and Specialty
consume Training. The budget must be retested after the architecture decision.
```

### Test 6: Ordinary Character Translation

Translate the Municipal Investigator without converting old action Skills into
new labels:

```text
Possible subject Fields:
Criminal Justice
Law
Human Behavior
Firearms
Medicine
Municipal Systems
Languages
Vehicles

Possible subject Specialties:
Violent Crime
Local Law
Witness Psychology
Handguns
Trauma
Municipal Procedure
one identified language
Ground Vehicles
```

Illustrative Expressions:

```text
Locate physical evidence:
Psyche x Awareness x Criminal Justice x Violent Crime

Interpret relationships among the evidence:
Psyche x Insight x Criminal Justice x Violent Crime

Interview a witness about the offense:
Influence x Connection or Manipulation x Criminal Justice x Violent Crime

Recall governing procedure:
Psyche x Learning x Law x Local Law

Invoke recognized procedure:
Leverage x Authority x Municipal Systems x Municipal Procedure

Fire a service handgun:
Mobility x Coordination x Firearms x Handguns
```

No Investigation, Observation, Interviewing, Persuasion, Research, Shooting,
or Administration rating is required. The Character's expertise concerns the
subject; the Derived Attribute and declared fiction determine the use.

Finding:

```text
PASS:
A recognizable ordinary professional can be constructed without action Skills
or Tasks.

CAUTION:
Subject Fields differ greatly in apparent breadth. Criminal Justice or Medicine
may reach more recurring Expressions than Firearms or one Language. Campaign
Profile examples and a Field-scope standard remain necessary.
```

### Strict Model Verdict

```text
FUNCTIONAL:
The strict no-Skill/no-Task model can resolve ordinary, professional, social,
technical, and combat actions through one consistent stack.

CUSTOMIZATION PRESERVED:
- approach through Derived Attribute;
- subject breadth through Field;
- subject depth through Specialty;
- permission and extraordinary possibility through other Lenses.

CUSTOMIZATION DELIBERATELY REMOVED:
Independent development of a practiced action across subjects, and independent
development of different actions within the same subject.

CORE FICTIONAL ASSERTION:
A Character trained in a Field possesses holistic subject expertise. The
Character applies that expertise differently according to their relevant
Derived Attributes and current narration.

PRIMARY MATHEMATICAL CONCERN:
The proposed x2.0 Derived Attribute floor compresses practitioner differences
at the same moment Derived Attributes inherit more responsibility for creating
those differences.

PRIMARY CONSTRUCTION CONCERN:
Field breadth must be controlled well enough that a broad label does not buy
far more recurring applicability for the same Rank cost.
```

This architecture is not mechanically incomplete merely because it cannot
distinguish two otherwise identical handgun experts by unrecorded practice.
That sameness is the explicit abstraction being tested. The design decision is
whether holistic subject expertise matches the kind of Character distinction
LENS intends to make.

## Next Broader Test

Build the same three ordinary Characters under both architectures:

```text
Current:
Attribute x Derived Attribute x Task x Field x Specialty

Branch candidate:
Attribute x Derived Attribute beginning at x2.0 x Field x Specialty
```

Use identical Character concepts and compare:

- how many purchased lines are required;
- Field and Specialty breadth;
- untrained, Field-only, and Specialty ratings;
- fallback when a Field or Specialty is inapplicable;
- cross-routed actions using the same Field;
- success and Effect output;
- and the Training budget needed to preserve meaningful tradeoffs.
