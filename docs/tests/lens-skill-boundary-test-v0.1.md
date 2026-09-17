# LENS Skill Boundary Test

Version: 0.1  
Status: Working Test Record  
Purpose: Apply one consistent boundary procedure to the first normalized Skill
candidate bank and produce a reviewable provisional Skill structure.

Nothing in this record adopts a final Skill list.

---

## Existing Controls

The test preserves the current working architecture:

```text
Derived Attribute
= stable, focused capability within a parent Attribute

Skill
= independently developed learned field of action

Specialization
= narrow mastered application of a parent Skill
```

Additional controls:

- A Skill may apply through several Derived Attributes according to the
  declared Expression.
- A Skill does not grant extraordinary permission.
- A Skill may apply through an unranked Derived Attribute.
- A Specialization must identify a parent Skill.
- A Specialization cannot exceed its parent Skill's Rank.
- A profession or character identity is normally a stable Lens rather than a
  Skill.
- The absence of training does not forbid an ordinary attempt when the fiction
  and the Character's other Lenses permit it.

---

## Boundary Procedure

Each candidate receives the same tests.

### 1. Training Test

Does the candidate represent learned practice, technique, or knowledge?

### 2. Derived Attribute Test

Can the candidate operate through several Derived Attributes according to how
the Character performs the action?

### 3. Application Test

Does the candidate support several recurring and meaningfully different uses
during play?

### 4. Specialization Test

Does the candidate support several narrower mastered applications without
merely repeating its own name?

### 5. Default Test

Can an untrained Character still attempt ordinary uses through the applicable
Attribute or Derived Attribute?

### 6. Overlap Test

Would replacing the candidate with a neighboring Skill remove meaningful
capability, or only change the vocabulary used to describe the same action?

### 7. Equal-Cost Test

At the same Training cost, is either candidate consistently broader or more
useful than the other?

### 8. Setting Test

Does the candidate belong in a system-neutral standard list, or does it depend
upon a Campaign Profile in which its subject exists and receives regular
mechanical attention?

---

## Possible Outcomes

```text
KEEP
Retain as a provisional standard Skill.

MERGE
Combine overlapping candidates into one broader Skill.

SPECIALIZE
Place the candidate beneath a broader parent Skill.

DERIVED ATTRIBUTE
Resolve through inherent capability rather than learned training.

LENS OR ACCESS
Resolve through identity, permission, relationship, equipment, or Access.

SETTING SKILL
Use as a Skill only when the Campaign Profile makes it relevant.

REMOVE
Another existing layer already performs its mechanical function.

UNRESOLVED
The tests expose a real design choice requiring further comparison.
```

---

## Training-Economy Control

The current Rank progression already distinguishes broad training from narrow
mastery.

```text
Equal Training Cost: 4 Points

Skill Rank 4
= x1.4 across the whole Skill

Skill Rank 2
x Specialization Rank 2
= x1.2 x1.2
= x1.44 inside the Specialization
= x1.2 elsewhere in the parent Skill
```

```text
Equal Training Cost: 6 Points

Skill Rank 6
= x1.6 across the whole Skill

Skill Rank 3
x Specialization Rank 3
= x1.3 x1.3
= x1.69 inside the Specialization
= x1.3 elsewhere in the parent Skill
```

```text
Equal Training Cost: 10 Points

Skill Rank 10
= x2.0 across the whole Skill

Skill Rank 5
x Specialization Rank 5
= x1.5 x1.5
= x2.25 inside the Specialization
= x1.5 elsewhere in the parent Skill
```

Finding:

The system does not need to classify a narrow practice as a Skill merely to
let a Character become exceptional at it. Specialization already exchanges
breadth for greater narrow capability at the same total Training cost.

This mathematical control does not decide the boundary by itself. A candidate
that supports a distinct field of learned action and its own meaningful
Specializations may still deserve Skill status.

---

## Test Group 1: General Physical Practice

### Athletics

Training represented:

Conditioning and practiced application of bodily force, exertion, and
locomotion.

Representative routing:

```text
Strength + Athletics
Force open a jammed barrier using trained lifting mechanics.

Vigor + Athletics
Maintain a distance run or prolonged climb.

Movement + Athletics
Swim through open water.

Coordination + Athletics
Execute a technically precise jump.

Stability + Athletics
Maintain a braced position under physical pressure.
```

Available Specializations:

```text
Climbing
Swimming
Running
Jumping
Weightlifting
Throwing
```

Working result:

```text
KEEP
```

Reason:

Athletics is a broad learned field, routes through several Derived Attributes,
and supports multiple recurring Specializations. It does not replace the
Derived Attributes because those still determine which capability the
Character brings to each athletic action.

### Acrobatics

Training represented:

Practiced control of orientation, balance, bodily configuration, and recovery
during complex movement.

Representative routing:

```text
Maneuverability + Acrobatics
Change bodily orientation during a tumble.

Stability + Acrobatics
Cross a narrow or unstable surface.

Coordination + Acrobatics
Execute a rehearsed aerial sequence.

Responsiveness + Acrobatics
Recover posture during an unexpected fall.

Flexibility is not a current Derived Attribute.
Contortion would therefore use the most applicable existing Mobility channel.
```

Overlap finding:

Every tested Acrobatics action can be expressed through Athletics plus a
specific Mobility Derived Attribute. The Derived Attribute supplies the
capability distinction that many peer systems ask Acrobatics to supply.

Working result:

```text
SPECIALIZE UNDER ATHLETICS
```

Possible Athletics Specializations include:

```text
Tumbling
Balance
Aerial Work
Controlled Falls
Contortion
```

Control:

`Acrobatics` could remain a setting-facing Skill when acrobatic disciplines
receive enough independent detail to justify their own Specializations. The
standard-list recommendation is Specialization rather than peer Skill.

---

## Test Group 2: Field Practice

### Stealth

Representative uses and routing:

```text
Movement
Move quietly through available terrain.

Stability
Remain concealed in a precarious position.

Responsiveness
Adjust concealment when an observer changes direction.

Awareness
Recognize surveillance patterns and blind spots.

Control
Regulate another participant during a coordinated infiltration.
```

Available Specializations:

```text
Camouflage
Silent Movement
Shadowing
Concealment
Infiltration
```

Working result:

```text
KEEP
```

### Survival

Representative uses and routing:

```text
Resistance
Apply learned methods for functioning in hostile environments.

Awareness
Notice useful resources, hazards, weather, and signs.

Insight
Interpret tracks, terrain, and environmental patterns.

Learning
Recall field knowledge about an environment.

Craft may contribute separately when creating shelter or equipment.
```

Available Specializations:

```text
Foraging
Tracking
Shelter
Weather
Specific Environments
```

Working result:

```text
KEEP
```

### Animal Handling

Representative uses and routing:

```text
Connection
Establish trust with an animal.

Control
Direct a trained animal.

Insight
Interpret animal behavior.

Stability
Maintain a seat on a frightened or difficult mount.

Learning
Recall care, training, and species knowledge.
```

Available Specializations:

```text
Riding
Training
Care
Calming
Specific Animal Groups
```

Working result:

```text
KEEP
```

Reason:

Animal Handling is not merely social Influence aimed at an animal. It
represents learned care, communication, training, and safe interaction across
several kinds of Expression.

### Navigation

Representative uses and routing:

```text
Cognition
Calculate a route.

Learning
Use charts, maps, landmarks, or navigational systems.

Awareness
Acquire the observations needed to establish position.

Insight
Interpret incomplete or conflicting route information.
```

Available Specializations:

```text
Overland Navigation
Maritime Navigation
Air Navigation
Astronavigation
Urban Navigation
```

Overlap finding:

Survival can navigate through a wilderness, and Vehicle Operation can follow a
route, but neither necessarily teaches route calculation across several
environments. A navigator may plot a course without piloting the vehicle or
surviving the terrain personally.

Working result:

```text
KEEP
```

### Vehicle Operation

Representative uses and routing:

```text
Coordination
Operate a vehicle through deliberate controls.

Responsiveness
React to changing traffic, terrain, or threats.

Stability
Maintain control after disruption.

Cognition
Manage complex operating procedures.

Awareness
Monitor instruments and surroundings.
```

Available Specializations:

```text
Ground Vehicles
Watercraft
Aircraft
Spacecraft
Mounted Vehicles
Specific Vehicle Classes
```

Working result:

```text
KEEP
```

Campaign control:

A Campaign Profile may replace or rename Vehicle Operation when its available
movement forms require a different learned practice. Riding remains under
Animal Handling unless the setting deliberately treats mounts as vehicles.

---

## Test Group 3: Combat Practice

### Unarmed Combat

Representative uses and routing:

```text
Strength
Deliver a force-driven strike or grapple.

Coordination
Place a precise unarmed attack.

Responsiveness
Counter or intercept an opponent.

Maneuverability
Change position through close combat.

Stability
Maintain structure during a clinch or throw.
```

Available Specializations:

```text
Striking
Grappling
Throws
Specific Martial Arts
Countering
```

Working result:

```text
KEEP
```

### Melee

Representative uses and routing:

```text
Strength
Deliver a force-driven weapon attack.

Coordination
Place a precise weapon attack.

Responsiveness
Parry or intercept.

Stability
Maintain guard or weapon structure under pressure.

Awareness
Read measure, openings, and immediate threats.
```

Available Specializations:

```text
Swords
Spears
Axes
Clubs
Shields
Flexible Weapons
```

Working result:

```text
KEEP
```

### Ranged Combat

Representative uses and routing:

```text
Coordination
Place a deliberate shot.

Awareness
Acquire a distant or obscured target.

Responsiveness
Fire during a rapidly changing opportunity.

Cognition
Calculate an unusual trajectory.

Stability
Maintain a firing platform against disruption.
```

Available Specializations:

```text
Archery
Handguns
Longarms
Thrown Weapons
Heavy Weapons
Specific Weapon Families
```

Working result:

```text
KEEP
```

### Tactics

Representative uses and routing:

```text
Cognition
Develop a plan from known information.

Awareness
Recognize immediate positional opportunities.

Insight
Infer an opponent's operational intention.

Projection
Communicate a usable plan under pressure.

Control
Coordinate participants who accept the Character's direction.
```

Available Specializations:

```text
Ambush
Defense
Small-Unit Tactics
Naval Tactics
Siege Tactics
Specific Operational Environments
```

Working result:

```text
KEEP
```

### Demolitions

Representative uses and routing:

```text
Cognition
Calculate placement and effect.

Learning
Recall explosive materials and procedures.

Coordination
Place or disarm a device safely.

Awareness
Recognize a device or structural vulnerability.
```

Specializations are available, but the entire field depends upon the Campaign
Profile providing explosives, destructive devices, or an equivalent recurring
practice.

Working result:

```text
SETTING SKILL
```

Control:

When demolition appears only occasionally, it may be an Engineering
Specialization. A campaign centered on explosives, siege devices, or magical
destruction may promote it to a full Skill.

---

## Test Group 4: Investigation and Knowledge

### Investigation

Representative uses and routing:

```text
Awareness
Locate evidence.

Insight
Recognize relationships among clues.

Cognition
Test competing explanations.

Learning
Recall relevant investigative methods or precedents.

Connection
Elicit information through an investigative interview.
```

Available Specializations:

```text
Crime Scenes
Interviews
Forensics
Surveillance
Missing Persons
Specific Investigative Fields
```

Working result:

```text
KEEP
```

### Research

Representative uses and routing:

```text
Awareness
Locate relevant records.

Learning
Understand a source and retain useful information.

Cognition
Compare records and evaluate reliability.

Insight
Recognize implications across several sources.
```

Available Specializations:

```text
Archives
Libraries
Databases
Genealogy
Legal Research
Open-Source Research
```

Overlap finding:

Investigation acquires and interprets evidence concerning an unresolved
question. Research systematically retrieves and evaluates recorded
information. Scholarship represents possessed disciplinary learning. The
three can contribute distinctly to the same Expression without being
synonyms.

Working result:

```text
KEEP
```

### Scholarship

Representative uses and routing:

```text
Learning
Recall established knowledge.

Cognition
Apply a formal body of knowledge to a problem.

Insight
Interpret an event through a disciplinary framework.

Projection
Explain or teach formal knowledge.
```

Available Specializations:

```text
History
Law
Religion
Philosophy
Culture
Specific Sciences
Specific Academic Fields
```

Working result:

```text
KEEP
```

Applicability control:

A broad Scholarship Rank does not make every subject equally relevant. The
declared field must actually bear on the Expression, and focused expertise is
represented by Specialization.

### Medicine

Representative uses and routing:

```text
Awareness
Observe signs and symptoms.

Insight
Diagnose a condition.

Cognition
Select a treatment procedure.

Coordination
Perform precise treatment or surgery.

Connection
Guide a conscious patient through care or recovery.
```

Available Specializations:

```text
First Aid
Surgery
Diagnosis
Pharmacology
Toxicology
Rehabilitation
Specific Species
```

Working result:

```text
KEEP
```

### Languages

Boundary finding:

Knowing a language primarily answers whether meaningful communication is
available. That is an Access question rather than a graduated measure of every
communication attempt.

```text
Open Access
The Character can use the language normally.

Conditional Access
The Character can communicate only under stated limitations.

Closed Access
Meaningful use of the language is unavailable.
```

Separate learned techniques may still matter:

```text
Linguistics
Analyze language structure, infer relationships, decipher unfamiliar forms,
and perform difficult translation.
```

Working result:

```text
REFRAME

Individual Languages
= Access

Linguistics
= provisional standard Skill candidate
```

This result requires later validation against the general Access rules. It
does not make every language challenge automatic once Access is Open;
Difficulty, context, and relevant social or knowledge Skills may still matter.

---

## Test Group 5: Technical and Creative Practice

### Craft

Representative uses and routing:

```text
Coordination
Shape or assemble material precisely.

Awareness
Inspect workmanship and material condition.

Cognition
Plan a fabrication or repair sequence.

Learning
Apply established methods and material knowledge.

Stability
Maintain precise work under physical disruption.
```

Available Specializations:

```text
Smithing
Carpentry
Tailoring
Masonry
Cooking
Machining
Specific Materials or Trades
```

Working result:

```text
KEEP
```

### Engineering

Representative uses and routing:

```text
Cognition
Design or model a system.

Learning
Apply technical principles and standards.

Insight
Diagnose why a system fails.

Awareness
Inspect structural or mechanical behavior.

Projection
Communicate a design others can implement.
```

Available Specializations:

```text
Structural Engineering
Mechanical Engineering
Electrical Engineering
Civil Engineering
Siege Engineering
Systems Engineering
```

Overlap finding:

Craft fabricates and repairs through practiced material methods. Engineering
designs, analyzes, and diagnoses systems. One Character may use both in a
single project, but each contributes a distinct function.

Working result:

```text
KEEP
```

### Technology

Boundary finding:

`Technology` is relative to a setting. In one Campaign Profile it could mean
ordinary device operation; in another it could identify an extraordinary or
restricted permission. Its proposed applications also overlap Craft,
Engineering, Security, Scholarship, and equipment Access.

Working result:

```text
SETTING SKILL OR SETTING REPLACEMENT
```

Examples:

```text
Computing
Electronics
Cybernetics
Magitech
Biotechnology
Alien Systems
```

A Campaign Profile should name the learned field actually receiving regular
play rather than add one universal Technology Skill.

### Security

Representative uses and routing:

```text
Awareness
Identify protective measures and surveillance.

Insight
Infer how a security system is organized.

Cognition
Plan a bypass or protective arrangement.

Coordination
Manipulate a physical lock or device.

Control
Operate an accessible security system.
```

Available Specializations:

```text
Locks
Alarms
Surveillance
Intrusion
Countermeasures
Protective Procedures
```

Overlap finding:

Stealth avoids observation. Security establishes, analyzes, operates, or
defeats systems intended to control Access. Engineering may construct the
system, but does not automatically teach protective procedure or intrusion.

Working result:

```text
KEEP
```

### Performance and Art

Performance applications:

```text
Projection
Present a rehearsed work to an audience.

Presence
Hold attention during a performance.

Coordination
Execute dance, music, or another physical performance.

Connection
Establish an emotional relationship with an audience.
```

Art applications:

```text
Coordination
Execute a visual or physical medium.

Cognition
Construct a technically organized work.

Learning
Apply formal techniques and traditions.

Projection
Communicate through a created work.
```

Overlap finding:

Both candidates represent trained artistic practice. Separating creation from
live performance creates a narrower boundary than the current Skill economy
requires, while the applicable Derived Attribute already distinguishes the
mode of expression.

Working result:

```text
MERGE AS ARTS
```

Possible Arts Specializations:

```text
Acting
Dance
Music
Oratory
Painting
Sculpture
Writing
Composition
Specific Media
```

Control:

Persuasion, Deception, or another social Skill may contribute separately when
the performance is intended to alter a decision, conceal identity, or produce
another function beyond artistic execution.

---

## Test Group 6: Social Practice

### Persuasion

Representative uses and routing:

```text
Projection
Present a clear argument.

Connection
Build agreement through an existing relationship.

Manipulation
Shift an attitude or decision.

Insight
Recognize which appeal may matter.
```

Available Specializations:

```text
Negotiation
Diplomacy
Debate
Mediation
Recruitment
Specific Audiences
```

Working result:

```text
KEEP
```

### Deception

Representative uses and routing:

```text
Projection
Present false information convincingly.

Manipulation
Create a mistaken belief.

Control
Maintain a deception across continued interaction.

Cognition
Construct a consistent false account.

Responsiveness
Adapt physical behavior when a deception is challenged.
```

Available Specializations:

```text
Bluffing
Impersonation
Misdirection
Disguise
Feinting
Specific Audiences
```

Working result:

```text
KEEP
```

### Command

Representative uses and routing:

```text
Presence
Establish immediate authority.

Projection
Issue understandable direction under pressure.

Connection
Lead through trust and shared purpose.

Control
Coordinate willing or institutionally subordinate participants.

Insight
Recognize what a group needs to function.
```

Available Specializations:

```text
Battlefield Command
Crisis Leadership
Organizational Leadership
Drill
Morale
Specific Organizations
```

Working result:

```text
KEEP
```

Control:

Command does not create authority, loyalty, or control where the fiction
provides no Access. Classification, position, relationship, or another Lens
must establish what direction is possible.

### Intimidation

Representative uses and routing:

```text
Presence
Register as an immediate threat.

Projection
Communicate a threat clearly.

Manipulation
Change behavior through fear or pressure.

Insight
Recognize what the target fears losing.

Strength may contribute when a physical demonstration is fictionally distinct.
```

Available Specializations:

```text
Interrogation
Coercion
Displays of Force
Veiled Threats
Crowd Suppression
Specific Audiences
```

Working result:

```text
KEEP
```

### Commerce

Representative uses and routing:

```text
Cognition
Calculate costs, terms, and risk.

Learning
Recall markets, practices, and regulations.

Insight
Appraise value and recognize unfavorable terms.

Persuasion may contribute separately during negotiation.

Control
Manage an accessible commercial operation.
```

Available Specializations:

```text
Appraisal
Bargaining
Accounting
Trade
Logistics
Specific Markets
```

Overlap finding:

Persuasion can change another person's decision but does not establish market
knowledge, valuation, accounting, or commercial procedure. A Merchant or
similar identity Lens may provide relationships and Access without replacing
learned commercial practice.

Working result:

```text
KEEP
```

### Streetwise

Representative uses and routing:

```text
Awareness
Recognize local informal signals and dangers.

Insight
Interpret power relationships and unwritten rules.

Learning
Recall local groups, customs, and illicit practices.

Connection
Approach an accessible informal network appropriately.

Investigation may contribute separately when pursuing a specific inquiry.
```

Available Specializations:

```text
Underworld
Neighborhoods
Illicit Markets
Gangs
Informal Networks
Specific Locations
```

Working result:

```text
KEEP, WITH SETTING REVIEW
```

Control:

Streetwise does not manufacture contacts, membership, or local identity. Those
remain stable relationship or identity Lenses. The Skill represents learned
navigation of informal social systems when Access exists or can ordinarily be
attempted.

---

## GURPS Maximal-Catalogue Audit

Local primary source:

```text
C:\ROLE_PLAYING GAMES\GURPS\GURPS_Basic_Set_Fourth_Edition_Revised.pdf
```

GURPS provides a different control from the compact peer lists. Instead of
asking which labels recur most often, it asks whether the current LENS bank can
account for distinctions made by an intentionally detailed universal system.

### Direct Structural Validations

GURPS explicitly permits one Skill to be used with different Attributes when
the immediate task depends on a different capability. This is directly
compatible with LENS routing one learned Skill through different Derived
Attributes.

GURPS also distinguishes:

```text
untrained defaults
required and optional specialties
grouped but independently purchased Skills
equipment familiarity
narrow Techniques
cinematically broad wildcard Skills
```

These distinctions support several current LENS controls:

- ordinary attempts may remain possible without a purchased Skill;
- one learned field may support multiple narrower Specializations;
- equipment permission and familiarity need not become the Skill itself;
- a profession need not be one Skill;
- very broad and very narrow Skills should not receive identical costs unless
  they perform comparable mechanical work.

### Administration

Training represented:

Learned operation of organizations, records, procedures, resources, and
bureaucratic systems.

Representative routing:

```text
Cognition
Plan an administrative process.

Learning
Apply policies, regulations, and institutional procedure.

Insight
Recognize where an organization or process is failing.

Projection
Communicate procedures and requirements.

Control
Coordinate an organization when the Character has applicable Access.
```

Available Specializations:

```text
Bureaucracy
Records
Logistics
Project Administration
Public Administration
Specific Organizations
```

Overlap finding:

Command directs people. Commerce governs markets and business practice.
Administration operates organizations and procedures. Position or membership
may grant Access, but does not supply the learned method.

Working result:

```text
ADD AS PROVISIONAL STANDARD SKILL
```

### Teaching

Training represented:

Learned transfer of knowledge, practice, and understanding to another person.

Representative routing:

```text
Insight
Recognize what the learner misunderstands.

Projection
Explain or demonstrate material clearly.

Connection
Establish a productive instructional relationship.

Control
Structure a lesson or supervised practice.

Learning
Organize material according to an established teaching method.
```

Available Specializations:

```text
Classroom Teaching
Coaching
Mentoring
Technical Instruction
Combat Instruction
Specific Learner Groups
```

Overlap finding:

Scholarship determines what the Character knows. Command can direct someone to
practice. Teaching determines how effectively the Character helps another
person learn. These are distinct narrative contributions.

Working result:

```text
ADD AS PROVISIONAL STANDARD SKILL
```

### Tactics and Strategy

GURPS separates immediate engagement Tactics from long-horizon Strategy. This
reopens the existing candidate.

```text
Tactics
Immediate positioning, timing, coordination, and choices inside an engagement.

Strategy
Long-horizon objectives, allocation, campaigns, and relationships among
multiple engagements.
```

Scale does not automatically erase this distinction. Scale changes the acting
frame, while Tactics and Strategy may still describe different time horizons
and kinds of decision inside that frame.

Boundary-test results:

```text
Training Test
Both represent learned methods.

Derived Attribute Test
Both route through Cognition, Awareness, Insight, Projection, Control, and
other applicable capabilities.

Application Test
Tactics repeatedly governs immediate positioning, timing, local coordination,
and action inside an engagement.

Strategy repeatedly governs objective selection, resource allocation,
sequencing, anticipation, and relationships among engagements.

Specialization Test
Each supports narrower fields without repeating the other.

Default Test
An untrained Character may still make plans through Cognition or another
applicable capability without receiving trained Tactics or Strategy.

Overlap Test
Replacing either with the other removes a meaningful time horizon and method
of conflict planning.

Equal-Cost Test
Their scope is comparable when Strategy is limited to conflict and competition
rather than every form of planning.

Setting Test
Both translate across personal, military, political, organizational, and
higher-Scale conflicts when the fiction supports their use.
```

Working result:

```text
KEEP TACTICS
ADD STRATEGY

Tactics and Strategy are provisional peer standard Skills.
```

Reason:

They are not two magnitude bands of the same action. Tactics organizes action
inside an engagement. Strategy organizes objectives and resources across
engagements. Scale changes the frame in which either operates but does not
collapse their different functions.

### Protocol and Access

GURPS separates several forms of etiquette, institutional behavior, and
social procedure.

LENS must preserve this distinction:

```text
Access
Determines whether the Character may enter, participate, communicate, or claim
a relationship.

Protocol
May represent learned practice for behaving effectively inside an available
social or institutional context.
```

Possible routing includes Learning, Insight, Connection, Projection, and
Control. Possible Specializations include diplomatic, courtly, military,
religious, professional, and ceremonial protocol.

Boundary-test results:

```text
Training Test
Protocol represents learned procedure and etiquette.

Derived Attribute Test
It routes through Learning, Insight, Connection, Projection, Control, and
other applicable capabilities.

Application Test
It governs entering formal exchanges correctly, observing ceremony,
interpreting institutional signals, representing an office, and avoiding or
exploiting procedural errors.

Specialization Test
Diplomatic, courtly, military, religious, professional, and ceremonial
protocol remain recognizable narrower practices.

Default Test
An untrained Character may still interact through applicable Attributes and
social Skills, but lacks trained procedural support.

Overlap Test
Scholarship may identify a rule. Persuasion may change a decision. Access may
permit participation. None determines practiced conduct inside the procedure.

Equal-Cost Test
Protocol has comparable breadth to Commerce, Command, and Streetwise when its
Specializations identify particular institutions or cultures.

Setting Test
Every setting may define different protocols, but learned formal procedure is
not limited to one genre.
```

Working result:

```text
ADD AS PROVISIONAL STANDARD SKILL
```

Protocol does not grant entry, status, authority, membership, or recognition.
Those remain Access or other stable Lenses. Protocol governs trained conduct
when interaction is available.

### Meditative or Trained Self-Regulation Practice

GURPS separates Meditation, Breath Control, Autohypnosis, and related learned
practices.

This exposes a symmetry question:

```text
Athletics
Learned physical practice applied through Strength, Vigor, Movement, and other
physical capabilities.

Meditative Practice
Possible learned internal practice applied through Resolve, Awareness,
Resilience, Resistance, and other applicable capabilities.
```

Resolve alone measures capability. It does not necessarily represent learned
breathing, contemplative, pain-management, or attention-regulation methods.

Boundary-test results:

```text
Training Test
Meditation represents learned internal practices rather than raw resolve.

Derived Attribute Test
It can route through Resolve, Awareness, Resilience, Resistance, Vigor, and
other applicable capabilities according to the declared Expression.

Application Test
It supports controlled breathing, sustained attention, emotional centering,
pain management, deliberate relaxation, and preparation for rest or recovery.

Specialization Test
Breathwork, contemplation, pain management, biofeedback, trance, and specific
traditions are recognizable narrower practices.

Default Test
An untrained Character may still concentrate, endure discomfort, breathe, or
recover through the applicable Derived Attribute.

Overlap Test
Resolve measures maintenance of internal direction. Meditation supplies a
learned method for applying that and other capabilities. Removing the Skill
erases the distinction between aptitude and training.

Equal-Cost Test
The field supports several mental and physical applications and multiple
Specializations. It is not confined to one isolated maneuver.

Setting Test
Ordinary meditative practice exists without extraordinary permission.
Supernatural effects still require a HOLT, Classification, Access, or another
permission-bearing Lens.
```

Working result:

```text
ADD MEDITATION AS A PROVISIONAL STANDARD SKILL
```

`Meditation` is a working category name. It does not grant supernatural
healing, immunity, altered states, or other extraordinary outcomes by itself.

### Other GURPS Distinctions

| GURPS distinction | Current LENS route to test |
|---|---|
| Individual athletic Skills | Athletics Specializations plus Derived Attribute routing |
| Individual weapon Skills | Combat Skill Specializations plus equipment Access |
| Individual sciences | Scholarship Specializations or setting-facing Skills |
| Individual crafts | Craft Specializations or setting-facing Skills |
| Observation and Search | Awareness plus Investigation when learned method matters |
| Body Language and Detect Lies | Insight plus applicable social or investigative Skill |
| Area Knowledge | Stable location familiarity plus applicable knowledge or field Skill |
| Current Affairs | Research applied to current information |
| Professional Skill | Profession Lens expressed through several Skills |
| Soldier and Crewman | Profession Lens or setting-facing operational Skill |
| Strategy | Reopens the Tactics boundary |
| Savoir-Faire | Reopens the Protocol and Access boundary |
| Meditation and Breath Control | Reopens the Resolve and learned-practice boundary |

---

## First-Pass Outcome Table

| Original Candidate | Working Outcome | Provisional Placement |
|---|---|---|
| Athletics | Keep | Standard Skill |
| Acrobatics | Specialize | Athletics Specializations |
| Stealth | Keep | Standard Skill |
| Survival | Keep | Standard Skill |
| Animal Handling | Keep | Standard Skill |
| Navigation | Keep | Standard Skill |
| Vehicle Operation | Keep | Standard Skill |
| Unarmed Combat | Keep | Standard Skill |
| Melee | Keep | Standard Skill |
| Ranged Combat | Keep | Standard Skill |
| Tactics | Keep | Standard Skill |
| Demolitions | Setting Skill | Campaign Profile |
| Investigation | Keep | Standard Skill |
| Research | Keep | Standard Skill |
| Scholarship | Keep | Standard Skill |
| Medicine | Keep | Standard Skill |
| Languages | Reframe | Language Access plus Linguistics candidate |
| Craft | Keep | Standard Skill |
| Engineering | Keep | Standard Skill |
| Technology | Setting Skill | Campaign Profile |
| Security | Keep | Standard Skill |
| Performance | Merge | Arts |
| Art | Merge | Arts |
| Persuasion | Keep | Standard Skill |
| Deception | Keep | Standard Skill |
| Command | Keep | Standard Skill |
| Intimidation | Keep | Standard Skill |
| Commerce | Keep | Standard Skill |
| Streetwise | Keep with review | Standard or campaign-facing Skill |
| Administration | Add after GURPS audit | Standard Skill candidate |
| Teaching | Add after GURPS audit | Standard Skill candidate |
| Strategy | Add after boundary test | Standard Skill candidate |
| Protocol | Add after boundary test | Standard Skill candidate; Access remains separate |
| Meditative Practice | Add after boundary test | Meditation standard Skill candidate |

---

## Provisional Standard Skill List Produced by Test 0.1

This is a test result, not an adopted list.

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
30 standard Skill candidates
```

Campaign-facing candidates:

```text
Demolitions
Technology or a specifically named technological field
Additional setting practices identified by the Campaign Profile
```

The earlier expectation that the standard list might settle between twelve and
eighteen did not survive this first complete boundary pass and GURPS audit. The Derived
Attribute layer removes many inherent-capability Skills, but LENS's requirement
that learned methods remain fictionally distinct preserves several fields that
compact systems merge. No target count should be imposed before character and
play tests show whether these thirty candidates remain usable and
equivalent.

---

## Strongest Findings

1. The Derived Attribute chassis performs real compression. Perception,
   endurance, willpower, force, bodily control, and basic social sensitivity do
   not need duplicate Skill entries.

2. The Skill/Specialization multiplier structure performs additional
   compression. Narrow excellence does not require promoting every practice to
   Skill level.

3. Acrobatics is the clearest first candidate to move beneath Athletics
   because LENS already distinguishes Stability, Maneuverability,
   Coordination, and Responsiveness.

4. Navigation remains distinct from Survival and Vehicle Operation because
   route determination is neither environmental survival nor vehicle control.

5. Investigation, Research, and Scholarship survive as separate methods:
   evidence gathering, record retrieval, and possessed disciplinary knowledge.

6. Craft and Engineering survive as separate methods: fabrication versus
   design and system analysis.

7. Language knowledge is the strongest case for Access rather than Rank.
   Linguistics remains a plausible learned Skill.

8. Performance and Art collapse cleanly into Arts because Derived Attributes
   distinguish live presentation, physical execution, construction, and
   communication.

9. Technology should be named by the Campaign Profile rather than treated as
   one timeless universal field.

10. Social Skills remain distinct because they represent different learned
    methods, but Command still requires fictional authority or relationship
    Access and Streetwise still requires applicable local context.

11. GURPS directly validates routing one Skill through different Attributes
    and exposes breadth as the central economic danger when all LENS Skill
    Ranks currently have the same cost.

12. Administration and Teaching perform distinct learned functions missing
    from the original candidate bank.

13. Tactics and Strategy survive as peer Skills because they govern different
    time horizons and methods rather than different magnitudes of one method.

14. Protocol survives separately from Access. Access permits participation;
    Protocol supplies trained conduct inside that participation.

15. Meditation survives separately from Resolve. Resolve measures capability;
    Meditation supplies learned methods that may route through Resolve and
    other applicable Derived Attributes.

---

## Next Test

Build three characters using the same sixty Training Points:

```text
Broad generalist
Focused professional
Narrow specialist
```

Run them through one shared scene containing:

```text
physical traversal
investigation
technical obstacle
social opposition
combat pressure
```

The test should determine:

- whether thirty candidates are usable during character creation;
- whether any Skill becomes an automatic purchase;
- whether any candidate is consistently dominated by a neighboring Skill;
- whether the proposed Specializations create meaningful narrow identities;
- whether the same Skill routes cleanly through different Derived Attributes;
- whether untrained defaulting remains functional;
- whether the current sixty Training Points produce useful breadth.

The first character test should specifically compare:

```text
Athletics Rank 6

versus

Athletics Rank 3
Tumbling [Athletics] Rank 3
```

This will verify the first proposed Skill-to-Specialization collapse inside a
complete character rather than only in isolation.

Exact next decision:

```text
Do the thirty provisional standard Skill candidates remain usable and
equivalent when three complete characters allocate the same sixty Training
Points differently?
```
