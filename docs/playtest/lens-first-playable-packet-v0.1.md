# LENS / First Playable Packet

Version 0.1 | 2026-09-17 | Working-core playtest, not a final rulebook

## A Story at the Table

Two river-district residents have one closing window to retrieve flood records, help trapped workers, and decide who gets to control the evidence. The situation has pressure, not a prescribed solution. Talk, investigate, work together, or take a risk. Roll when the outcome is genuinely uncertain and consequential.

This packet is for one GM and two players, approximately 60-90 minutes. Use the two ordinary characters provided or equivalent approved characters. Bring percentile dice, pencils, and the accompanying draft character sheet. A map is optional; ordinary distance references remain available without one.

## What This Packet Does

- Uses the adopted additive Attribute + Derived foundation, Task / Field / Specialty / Precision, Access-only HOLTs, lasting Aspects, and Benefits and Drawbacks.
- Gives a runnable ordinary scenario, worked resolution examples, and a bounded procedure for collecting actual table feedback.
- Supplies a printable sheet and separate app-facing data requirements. No application is created or modified.
- Distinguishes adopted procedures, provisional playtest controls, illustrative scenario judgments, and unresolved values.

## Authority and Status

The current authority is `docs/system/lens-system-baseline-draft-v0.1.md`, read with `docs/system/lens-terminology-quick-reference-v0.1.md`. This packet is a dated table-use extract. It does not supersede those files or promote historical candidates into rules.

The scenario's people, equipment, stakes, and Difficulty assignments are new playtest fixtures. They are not universal valuations or a new Campaign Profile. The two characters demonstrate protected ordinary construction, not the only sensible allocation or a claim of encounter balance.

Unresolved matters are listed on the final page. The ordinary session avoids relying on unadopted range or area thresholds, indefinite duration, species prices, and extraordinary starting allowances. An optional extraordinary rehearsal is separate from character creation and its records.

## Reading Order

Players: read the Expression sequence, choose a character, and review the immediate-spending options. GM: also read opposition, Conditions, timing, and the scenario. Use the worked examples to check interpretation before collecting live results.

The sheet has five reusable pages: capability, training, permissions and identity, possessions and funding, and an Expression / session record. Printed row counts are writing space, not character limits.

<!-- PAGE -->
# 1 / Assemble an Expression

## Begin with the Fiction

Say what the character does, by what means, to what target, and with what intended result. Identify necessary Access and the actual challenge. A Task's name does not exhaust its possible applications. Explain the contribution before selecting the applicable Derived Attribute and expertise.

Ordinary routine actions need no roll. No roll does not mean no time or required tools. Closed Access or an unmet Access Condition prevents an attempt; a high number cannot buy permission after the fact.

## Calculation for This Packet

All main-scenario actions use matched ordinary Scale, so the Scale factor is 1. Equipment has no extra numerical factor unless explicitly recorded. The general assembly below assumes one applicable Axis, or the adopted mean for two genuinely required Axes.

```text
Foundation = Attribute Rating + Derived Attribute Rank
Training = (1 + Task/10) x (1 + Field/10)
         x (1 + Specialty/10) x (1 + Precision/10)
Axis = 1 + applicable Axis Rank/10, or 1 without an Axis bonus
Aspect = 1 + one applicable Aspect Rank/10, or 1
Context = max(0, 1 + total Resonance - total Dissonance)
Difficulty = 0.98 x 0.6^(D - 1), for D >= 1
Final Rating = floor(Foundation x Training x Axis x Aspect
              x defined equipment factors x Function x Context
              x applicable Scale factor x Difficulty
              / additional-action divisor)
```

Use only applicable contributions. Unranked training contributes x1, not a free Rank 1. An unranked Derived adds zero. Floor once, at the end; keep full precision throughout calculation. Final Rating is not capped at 100 or 320.

## Context and Challenge

Assess otherwise undefined contextual benefits or interference in 0.10 increments. Add helpful contributions, subtract resisting contributions, and include neutral 1 once. Keep each source identifiable. Environmental circumstances produce one assessed environmental value, not that value plus its ingredients again.

Distinct challenge-component Difficulty bands add; apply the curve once to the total. For example, assessed components 2 and 1 make D3, not two separate multipliers. Do not automatically add a manifestation band merely because a roll occurs. An absent area or duration demand adds no component; it is not a D0 roll.

| Total D | Multiplier | Total D | Multiplier |
| --- | --- | --- | --- |
| 1 | 0.98 | 4 | 0.21168 |
| 2 | 0.588 | 5 | 0.127008 |
| 3 | 0.3528 | 6 | 0.0762048 |

Function and a Condition's separate Dissonance must not count the same pressure twice. One Aspect is independent of context; do not also award Resonance for that same identity contribution.

<!-- PAGE -->
# 2 / Roll and Read the Result

## Ordinary Rolls and Effects

For a permitted uncertain attempt, roll percentile dice. Initial 02-99 succeeds at or below Final Rating. Initial 99 is ordinary, not an automatic failure. Initial 01 succeeds; initial 00 fails. Complete any continuation and paid replacement before applying consequences.

```text
Signed Margin = Final Rating - completed rolled result
On success: Effects = 1 + floor(max(0, Signed Margin) / 10)
On failure: successful Effects = 0
```

A success by less than ten is still one Effect. Effects express successful output. Allocate each once to a permitted, supported result; a label such as delivery or area does not forbid another supported use of remaining Effects.

## Initial 01: Successful Continuation

Roll again. Subtract that roll's distance from 100 from the initial 1. Continuation 01 subtracts 99 and continues again. Continuation 02-99 subtracts its distance from 100 and ends. Continuation 00 counts as 100, subtracts zero, and ends. No failure explosion begins inside this sequence.

Example: 01 followed by 06 gives 1 - 94 = -93. At Final 49, Margin is 142 and output is 15 Effects. At Final 0, 01 followed by 00 still succeeds with one baseline Effect despite Margin -1. Access must permit the attempt.

## Initial 00: Failure and Complication

Start at 100 and add a further percentile roll. A continuation 00 adds 100 and continues. A continuation 01-99 adds its value and ends. It does not become an automatic success inside this sequence.

Complication severity is the complete tens by which the cumulative failure result exceeds Final Rating: floor(max(0, cumulative result - Final Rating) / 10). It creates no successful output or automatic baseline complication.

Example: 00 followed by 50 gives 150. At Final 80, severity is 7; at Final 160, it remains a failure with severity 0. The actual complication must fit the fiction. Do not duplicate the harm already represented by an opponent's Effects.

## Immediate Spending from Existing Points

| Purchase | Timing and effect | Limit |
| --- | --- | --- |
| Boost: 1 point | Before rolling, add +0.20 Resonance. | One boost per Expression. |
| Reroll: 1 point | After the complete result, before consequences; replace the entire sequence. | One paid reroll per Expression. |
| Narrative help: 1 point | GM-agreed plausible, useful detail within existing permission. | No automatic extra numerical boost. |

A reroll retains the purchased boost and the same Expression, even if replacement is worse. New special continuations resolve normally. No repeated boost or paid reroll. Existing equipment or established facts do not cost points merely to use. Shared-currency spending reduces what remains for development.

<!-- PAGE -->
# 3 / Opposition and Consequences

## Opposed Output

Each participant assembles and resolves their own complete Expression. Neither participant's Rating is subtracted from the other's Rating. Determine successful Effects independently, then cancel matching opposed Effects.

```text
Offensive remainder = max(0, offensive Effects - defensive Effects)
Defensive surplus = max(0, defensive Effects - offensive Effects)
Potential defensive counter = min(1, defensive surplus)
```

Equal Effects cancel even when signed Margins differ. A failed defense supplies zero cancellation, not negative Effects that amplify the attack. A defensive surplus may produce at most one fictionally supported counter-effect in the exchange. It is not automatic retaliation, stored output, or a free attack; preserve its actual means, mitigation, and action accounting.

For comparative placement instead of output cancellation, success outranks failure; within the same outcome compare signed Margins. Equal outcome and Margin ties. The closer failed throw may win a comparison without hitting the target. An 01 need not win first place; 00 complications remain separate.

## Conditions and Function

Use one master Condition ledger. Record cause, levels, affected scope, and recovery or counter. Query that ledger for each Capacity; do not copy one Condition into several independent tracks and charge it repeatedly.

| Capacity | Governs | Ordinary playtest control |
| --- | --- | --- |
| Physical | Might and Mobility | 10 Condition Levels |
| Mental | Psyche and Influence | 10 Condition Levels |
| Framework | Leverage | 10 Condition Levels |

| Relevant Load | Function |
| --- | --- |
| 0-2 | 100% |
| 3-5 | 75% |
| 6-7 | 50% |
| 8-9 | 25% |
| 10+ | Loss or exhaustion of the affected function |

Ten Load does not automatically mean death, unconsciousness, or permanent loss. Specific Conditions and the Profile determine the consequence. Function does not fractionally close Access; an actual restriction such as a suspended license may do so separately.

Successful recovery creates baseline and margin Effects normally. Declare whether it stabilizes, removes, converts, or restores Access, with matching means and time. Stabilizing bleeding is not automatically erasing injury. There is no universal healing interval or recovery Difficulty.

## Social Agency

Establish the request and stakes, then resolve persuasion. On success, the player may comply or refuse while bearing a meaningful GM-adjudicated consequence fitting those stakes and Effects. The player controls behavior, not a discounted consequence. NPCs follow the same accountability. Ordinary persuasion is not unlimited control; deception does not make a falsehood objectively true.

<!-- PAGE -->
# 4 / Time, Movement, and Cooperation

## Current Ground-Movement Control

One ordinary action per round; a combat round is three shared seconds. One unit is approximately one meter, whether using hexes, squares, or no grid. Other movement forms and Profiles may differ.

If an initiative sequence is needed, record the table's starting-order assumption first. This extract has no verified initial-initiative formula; its Delay procedure does not supply one.

| Allocation on ordinary clear ground | Allowance |
| --- | --- |
| Movement while acting | 6 units, no movement roll |
| Dedicate the action to movement | 12 units, no movement roll |
| Dedicated movement plus push | 12 + 1 unit per push Effect |
| Push while attacking | 6 + 1 unit per reduced push Effect; attack also reduced |

The working clear-ground push is D2. For push plus attack divide each complete Expression by two before final flooring. The attack retains its own Difficulty. Do not also charge the dedicated movement push as a second action. The six-unit accompanying allowance is shared across the round, not refreshed by another action. Do not multiply these base allowances by Movement Rank.

A failed push supplies no extra units, not automatic loss of base movement. Conditions or actual complications can still interfere. The scenario uses only one ordinary action or this expressly defined push-plus-attack case; it does not invent rules for other additional-action arrangements.

## Preparation and Delay

Preparation earns the actual advantage it establishes, assessed in context; no automatic bonus per action or universal three-round ceiling. It persists while its supporting facts remain. Consumption, disruption, or changed circumstances may reduce or end it; mere use or a scene change does not automatically do so.

A distinct setup uses ordinary action accounting. Delay relocates an available action and subsequent initiative; it does not bank actions or grant Resonance. A declared perceptible trigger can release a feasible held response before the unfinished activity completes. Apply its actual Effects, then resume what remains possible. Shared-trigger responses use existing initiative order; valid response-triggered interruptions remain possible. No additional action or new initiative roll is created.

## Shared Work

Declare the common result, each contribution, and dependencies. Each acting Source pays its action and resolves its complete contribution. Compatible earned Effects add toward a genuinely shared result. Do not add Final Ratings, average characters, make an extra team roll, or award free synergy.

Feasible coordinated execution distinguishes a combined assault from unrelated attacks at the same time; physical fusion and universal contributor success are not required. Opposition addresses the actual combined effect, contributing part, or maintaining relationship. Protection applies by effect application and its defined scope, not contributor count.

One surviving delivery Effect achieves the declared permitted delivery while its means remain. An attack whose travel is already part of its Expression does not require another delivery roll. A failed essential carrier can prevent dependent output; independently viable results remain. Remaining Effects may support impact, shape, or another outcome when the contribution's actual nature and Access support it. Count every allocation once.

<!-- PAGE -->
# 5 / Build or Check a Character

## Protected Ordinary Starting Reference

| Allocation | Construction meaning |
| --- | --- |
| 25 total Attribute ranks | Five required Rank-1 bases plus 20 purchased ranks: 1,200 protected points. |
| 50 Derived ranks | One global allocation; each D <= parent A. No free first rank: 1,000 protected points. |
| 750 Training points | Task / Field cost 10 per rank; Specialty / Precision cost 5. |
| 125 ordinary flexible points | Eligible ordinary development and approved benefits; not automatically HOLT funding. |

The priced base is 3,075, not a spend-anywhere pool. Additional purchases from flexible funds may raise Attribute or Derived totals beyond 25 or 50. Core ranks stop at 10; this is not a Final Rating or Scale ceiling.

Current flat advancement prices: Attribute 60; Derived 20; Task 10; Field 10; Specialty 5; Precision 5. Specialty and Precision require an applicable parent Field but are not capped by its rank. Precision may exist without an intervening Specialty. Neither expertise nor a rank purchase creates extraordinary permission.

Task is practiced activity; Field is portable knowledge or expertise; Specialty and Precision narrow that expertise. Catalogues remain open. The historical Anchor Skill list is not the current mandatory purchase list. Use the Task map as an illustrative working reference, not ownership of Tasks by Derived Attributes.

## Permission, Identity, and Compensation

HOLDs describe stable packages or identity provisions; do not assume a universal species benefit or price. HOLT Access costs 20 once and has no parent Rank. Each Axis rank costs 20; an Open Axis at Rank 0 may permit an action without a numerical bonus. Record Open / Condition / Closed Access and actual thematic limits. Profile eligibility and extraordinary starting funding must be defined separately.

Negotiated HOLT limitation reductions use ten-percent bands on the affected purchases. Record burden, scope, actual payments, and later buyoff credit. Full or partial easing must make narrative sense and pays the applicable difference, crediting prior payments. Do not refund prior spending for a later setback or count a burden twice.

Optional creation Aspects: up to two Rank-1 Aspects plus four Rank-0 potentials, as separate selections without a point price. One applicable Aspect contributes independently; growth is story-awarded, not purchased or automatically triggered by a declaration. New Access and Rank 1 may emerge together when justified. Printed slots are not a lifetime cap.

Benefits provide defined provisions, not separate benefit ranks. Drawbacks may provide up to 40 total actual starting compensation, not an automatic grant or count limit. Record actual credited burden and any prior buyoff, including attribution where the ceiling reduced an award. Catalogue prices are provisional; species balancing is deferred.

Finalize protected Training as spent or lost. Unrestricted remainder may carry into play; do not convert protected funds. An additional justified ordinary language costs 1 unrestricted point, grants fluency rather than expertise ranks, and does not charge again for existing free grants. Background Rank is not a language count.

<!-- PAGE -->
# 6 / Mara Vale, Rigging Foreman

## Role and Commitments

Mara knows the lifting machinery at the river archive and refuses to abandon its workers. Developed Aspect: Nobody Left Beneath the Load, Rank 1. Potential: A Name Worth Trusting, Rank 0. These are applicability prompts, not automatic bonuses or required behavior.

| Attribute | Rating | Derived ranks in the order printed |
| --- | --- | --- |
| Might | 6 | Strength 5; Toughness 1; Resistance 1; Vigor 1; Resilience 1 |
| Mobility | 5 | Movement 2; Maneuverability 2; Stability 2; Coordination 5; Responsiveness 2 |
| Psyche | 5 | Cognition 5; Learning 2; Awareness 5; Insight 0; Resolve 2 |
| Influence | 5 | Presence 2; Projection 0; Connection 1; Manipulation 1; Control 2 |
| Leverage | 5 | Assets 5; Network 2; Authority 2; Reputation 1; Background 0 |

## Training

Tasks: Exert 7; Traverse 5; Block 5; Observation 5; Repair 5; Persuade 5.

Fields: Mechanics 5; Athletics 5; Seamanship 5; Medicine 5; Commerce 5.

Specialties: Rigging 6 (Mechanics); Load Handling 6 (Athletics); Dock Work 6 (Seamanship); First Aid 6 (Medicine); Bargaining 6 (Commerce).

Precision: Chain Hoists 5 (Mechanics); Bandaging 5 (Medicine). Precision has a Field parent and requires its actual narrow application, not merely any use of that Field.

## Funding and Provisions

Protected construction before flexible spending: A totals 25, D totals 50; six Tasks at 5 cost 300, five Fields at 5 cost 250, five Specialties at 6 cost 150, two Precision entries at 5 cost 50. Training total: 750.

Flexible spending: Might 5 to 6 = 60; Toughness 0 to 1 = 20; Resistance 0 to 1 = 20; Exert 5 to 7 = 20. Spent 120; carry 5 unrestricted points. Final totals A26 / D52. No drawback compensation, purchased benefit, HOLT, or Axis. No existing user character is changed.

Scenario provisions: ordinary work clothes, a utility tool, line and rigging tools, and access to the archive's chain hoist. The fixture grants their ordinary function, not a price, numerical bonus, or resistance rating. Ordinary local language is a free established fact. Physical / Mental / Framework Capacity: 10 each; begin with no Conditions.

## Useful Routes, Not Exclusive Pairings

Exert the hoist while directly taking the load: Might 6 + Strength 5, Exert 7, Mechanics 5, Rigging 6, Chain Hoists 5. Raw 67.32; D2 Final 39. If rescuing trapped workers genuinely invokes the Aspect, raw 74.052 and D2 Final 43. Neutral Function, context, equipment factors, and Scale are assumed.

Repair the hoist through mechanical analysis: Psyche 5 + Cognition 5, Repair 5, Mechanics 5, Rigging 6, Chain Hoists 5 = raw 54; D1 Final 52. Other approaches may use different capabilities; the fiction decides.

<!-- PAGE -->
# 7 / Ilen Reed, District Advocate

## Role and Commitments

Ilen knows how public records and frightened people change an argument. Developed Aspect: The Unheard Deserve a Voice, Rank 1. Potential: No Truth Without Its Cost, Rank 0. Neither is permission to force a decision or an automatic award trigger.

| Attribute | Rating | Derived ranks in the order printed |
| --- | --- | --- |
| Might | 5 | Strength 1; Toughness 1; Resistance 1; Vigor 0; Resilience 2 |
| Mobility | 5 | Movement 1; Maneuverability 2; Stability 1; Coordination 0; Responsiveness 2 |
| Psyche | 6 | Cognition 2; Learning 5; Awareness 5; Insight 5; Resolve 2 |
| Influence | 5 | Presence 2; Projection 2; Connection 5; Manipulation 2; Control 2 |
| Leverage | 5 | Assets 1; Network 5; Authority 0; Reputation 1; Background 2 |

## Training

Tasks: Persuade 7; Convey 5; Observation 5; Research 5; Inference 5; Dodge 5.

Fields: Civic Affairs 5; Medicine 5; History 5; Emotion 5; Survival 5.

Specialties: Public Testimony 6 (Civic Affairs); Records 6 (Civic Affairs); First Aid 6 (Medicine); De-escalation 6 (Emotion); Urban Hazards 6 (Survival).

Precision: Petition Letters 5 (Civic Affairs); Bandaging 5 (Medicine). A petition-letter Precision does not automatically improve an improvised spoken appeal.

## Funding and Provisions

Protected construction before flexible spending: A totals 25, D totals 50; six Tasks at 5 cost 300, five Fields at 5 cost 250, five Specialties at 6 cost 150, two Precision entries at 5 cost 50. Training total: 750.

Flexible spending: Psyche 5 to 6 = 60; Strength 0 to 1 = 20; Toughness 0 to 1 = 20; Persuade 5 to 7 = 20. Spent 120; carry 5 unrestricted points. Final totals A26 / D52. No drawback compensation, purchased benefit, HOLT, or Axis.

Scenario provisions: ordinary travel clothes, a utility tool, a writing / records kit, and a first-aid pouch. These supply ordinary function with no invented equipment multiplier or valuation. Ordinary local language and familiarity with the archive are established free facts. Physical / Mental / Framework Capacity: 10 each; begin with no Conditions.

## Useful Routes, Not Exclusive Pairings

Appeal through a meaningful relationship: Influence 5 + Connection 5, Persuade 7, Civic Affairs 5, Public Testimony 6, no Precision = raw 40.8; D1 Final 39. When the Aspect genuinely applies, raw 44.88 and Final 43.

Understand the archive records: Psyche 6 + Learning 5, Research 5, Civic Affairs 5, Records 6 = raw 39.6; D1 Final 38. A clue plainly in view needs no automatic roll merely because Research is ranked. Unlisted training is Rank 0; permitted ordinary attempts remain possible.

<!-- PAGE -->
# 8 / Run the River Archive

## Setup: 5-10 Minutes

Confirm the two roles, ordinary provisions, and the worksheet's starting Conditions and five carried points each. Explain that the scenario tests core use, not optimized combat. Ask for one desired outcome and one line the character will not casually cross. No acting performance is required.

The archive stands above a rising river. A jammed hoist has pinned a service gate. Two workers are trapped beyond it. The district's flood-inspection ledger is inside; its contents could expose negligence. The custodian fears blame if the ledger leaves. The party can rescue, negotiate, repair, secure evidence, or devise another plausible plan.

All distances needed for the main scene are local and measured directly: an eight-unit clear approach to the gate, a nearby hoist, and a short accessible records counter. This does not assign an unadopted range band. Let the fiction establish time pressure, not a hidden mandatory combat countdown.

## Beat One: What Is Actually Wrong? 10-15 Minutes

Give obvious information freely: workers are audible; the chain is twisted; the custodian is protecting the records. Ask what the characters inspect or ask. A genuinely uncertain diagnosis or consequential records search can use D1 as this scenario's GM assessment. It is not a universal Difficulty for either Task.

Let success provide the declared useful answer. Additional Effects may support details, speed where appropriate, or another supported result, without duplicating one Effect. Record a question that the table could answer without rolling.

## Beat Two: Open the Gate, Save the Evidence. 20-30 Minutes

Assess direct lifting of the loaded gate as D2 for this fixture. Safe release of the twisted chain after access to the mechanism is established is D1. Different means may change the actual challenge. Announce what happens if the attempt fails before the roll: the gate remains down and time advances; failure alone is not automatically injury.

The existing hoist may enable Mara's narrow expertise. Ilen can help directly at their own applicable ratings, improve circumstances through a distinct action, or deal with the custodian. Only genuine shared work pools compatible earned Effects. Do not award a team bonus simply for standing nearby.

For a contested appeal, the custodian's ordinary Resolve + Withstand route has raw 36 and D1 Final 35: Psyche 5, Resolve 5, Withstand 5, Civic Affairs 5, Records Procedure 6. This is a scoped NPC fixture, not a full starting build. The request and what refusal would cost must be explicit. A resolved social consequence must fit that request; refusal is not immunity.

## Beat Three: A Choice, Not a Boss Fight. 10-15 Minutes

Once the records or workers are accessible, reveal a rescue route that endangers the original ledger. Invite a real choice: protect originals, make a usable copy, trust the custodian, or prioritize the people. Follow the solution. Do not require an attack merely to exercise combat rules.

If physical opposition naturally occurs, use the opposition rehearsal on the next page first, or resolve the actual conflict with the same independent-Effects procedure. End when the immediate stakes are settled, including withdrawal or an accepted consequence. Do not prolong play solely to generate test rolls.

<!-- PAGE -->
# 9 / Worked Checks and Optional Rehearsal

These fixed rolls teach the procedure; do not substitute them for or count them as live-play evidence. All factors are neutral except those stated.

## One Complete Ordinary Check

Mara uses the hoist to rescue workers: raw 67.32 x Aspect 1.1 x D2 0.588 = 43.542576, floored to 43. A roll of 28 yields Margin 15, two Effects. A paid boost adds +0.20 to otherwise neutral context: 52.2510912, floored to 52. The same 28 yields Margin 24, three Effects.

If Physical Load is 3, Function becomes 0.75: with the boost, Final is 39, not 52 with a second penalty for the same Condition. Spend one point for the boost from the existing five; do not backdate that purchase after seeing 28. A later paid reroll would cost another point, keep the boost, and replace the whole result.

## Opposition without a New Combat Subsystem

Use two scoped training fixtures, not additions to the characters: attack raw 54, D1 Final 52; defense raw 36, D1 Final 35. Both use A5 + D5, T5, F5, S6; the attack also has applicable P5. All required ordinary means exist.

Attack 24 gives Margin 28 and three Effects. Defense 21 gives Margin 14 and two. One offensive Effect remains. For this rehearsal the declared outcome is one level of Off Balance per surviving impact Effect; protection supplies no extra mitigation. Record that Condition only if this is actual play, with the physical pressure and a fictional recovery method agreed before resolution.

Reverse the dice example: attack 49 gives one Effect; defense 02 gives four. All attack output cancels; three surplus defensive Effects permit at most one supported counter-effect, not three damage. If the defense cannot actually create a counter, it merely succeeds at defense. Attack 31 and defense 14 each yield three Effects: cancellation is complete despite their different Ratings.

## Optional Extraordinary Rehearsal: Separate Test Record

After the ordinary scene, use a non-character fixture with A5 + D5, T5, F5, S5, P5. Raw ordinary value is 50.625. Give this fixture explicitly Open thematic Access for one coherent manifestation and Axis 5; no Aspect. Raw becomes 75.9375. At D2 Final is 44. Acquisition plus five Axis ranks would cost 120 eligible points without discounts; this fixture is not a free provision or a debit to the ordinary characters.

To test area or duration, the GM must first record the missing Profile increment and applicable range / area bands as local test assumptions. Do not infer them from this fixture. If a permitted declaration resolves with three Effects, assigning two additional Effects to one dimension yields 1.4 times its original declaration; one baseline Effect remains for supported output. Five extra Effects double the original, not the enlarged value each step. Area means covered footprint, not radius.

An attack's travel need not be rolled separately. A successful area declaration establishes the declared footprint without an extra area-entry cost. Its resolved strength applies to each actually exposed target with individual opposition and protection. These procedures do not supply missing permission or universal thresholds.

<!-- PAGE -->
# 10 / Close the Session

## A Short Feedback Record

Record at most six representative actual resolutions, not every incidental action. Include the intention, complete applicable layers, Difficulty components, context sources, Function, raw and Final Ratings, dice sequence, Effects, opposition, allocations, and consequence. Time one or two assemblies rather than interrupting every scene with a stopwatch.

Ask each player for: one choice the system supported; one moment they could not tell what to do; one time a number felt inconsistent with the fiction. Ask the GM what required a lookup or unsupported assumption. Separate an unclear explanation, an incorrect calculation, an unresolved value, and a disliked but correctly applied rule.

Check whether low output came from the character's route, missing expertise, penalties, or combined Difficulty before proposing a mathematical fix. Two characters and one session cannot establish balance, progression speed, or the value of a Benefit catalogue.

## Awards and Development

| Category | Points | Recipient |
| --- | --- | --- |
| Participation | 10 | Each participating player |
| Progress | 0 / 3 / 5 | Participating group |
| Discovery | 0 / 3 / 5 | Participating group |
| Character Expression | 0 / 3 / 5 | Individual |
| Narrative Engagement | 0 / 3 / 5 | Individual |

Discretionary awards mean not demonstrated / meaningful / exceptional. Exceptional replaces meaningful. Give a concrete reason; do not credit the same contribution twice by renaming it. Quiet choices count. These awards do not grade acting, airtime, morality, or compliance with the GM's intended story.

The card spans 10-30; Participation plus three meaningful categories is 19, not a guaranteed award. Record immediate spending separately. Closing unrestricted points equal opening funds plus actual awards and other credited points minus actual spending. Record benefits already received in the story separately, not as duplicate spendable points.

Eligible development uses flat prices and the core Rank-10 ceiling. Prefer application between scenes, chapters, or stories when narratively appropriate, not a change to a scene merely because a session ended. Optional training requirements are at GM discretion, not mandatory core gates.

Aspects develop through GM recognition of relevant characterization, including unsuccessful or quiet choices. A tracker is a memory aid, not an acting score or an automatic eight-event rank award. No purchased temporary Aspect enhancement is included.

Optional milestones recommend 12.5 additional points. This short session does not automatically earn one; recipient details and absent-player handling remain unresolved. Do not use an arbitrary award total to conceal those open decisions.

## First Decision after Actual Play

Choose one demonstrated obstacle to smooth play and its evidence: revise the packet's explanation, supply a needed Profile value, or propose a specific rule test. If no obstacle appears, run a second session with different characters or opposition before changing the engine. Do not reopen the entire catalogue because a useful Task overlapped another.

<!-- PAGE -->
# 11 / Open Values and Extension Boundaries

## Record a Test Assumption, Not a New Core Rule

| Topic | Current boundary | Packet handling |
| --- | --- | --- |
| Range / area thresholds | No universal physical increment or complete adopted lookup supplied here. | Main scenario avoids reliance on such lookups. Record GM assumptions for extensions. |
| Finite duration | D1 covers up to 1 applicable increment; D2 up to 10; D3 up to 100; continue tenfold. | Profile / Lens increment value and rounding remain open. Instantaneous adds no duration component. |
| Area / distance / duration surplus | Each extra allocated Effect adds 20% of the original declared quantity, noncompounding. | No universal growth ceiling. Access and real means still limit results. |
| Area geometry | Covered footprint determines growth; at least half a hex covered means affected. | No universal shape, creature footprint, or radius conversion. |
| Persistent effects | Natural continuation follows facts; substantial active sustaining uses ordinary actions. | No universal maintenance roll, duration, or per-round hazard harm. |
| Scale | x1.6 per Magnitude step remains the active test model, not final-locked. | Main scene uses matched ordinary Scale. Cross-Scale work needs the actual reference and scope. |
| Other movement forms | Ordinary ground control is 6 / 12 units with the stated D2 push. | Flight / vehicle baselines are not supplied or inferred. |
| Conditions / mitigation | Named scope, matching protection, and ordinary 10-Level Capacity controls. | Final setting loss consequences, recovery times, and equipment values need their actual provisions. |
| Benefits / species | Framework adopted; catalogue valuations provisional; species balancing deferred. | No benefit or drawback needed by the two ordinary characters. |
| HOLT funding | Access 20 + 20 per Axis rank; no parent Rank. | No universal extraordinary starting grant; optional fixture is not a character award. |

Other deferred items include higher-than-10 ranks, three-or-more-Axis formulas, general unresolved compound cases, indefinite imposed duration, extreme limitation discounts, legacy conversion, and deferred Aspect extensions. This packet does not silently settle them.

## Companion Artifacts and Source Trail

Printable sheet: `output/pdf/lens-draft-character-sheet-v0.1.pdf`.

App requirements: `docs/playtest/lens-app-data-requirements-v0.1.md`. These requirements are a handoff inside LENS authority, not permission to implement, migrate data, or modify LENS APP.

Read current baseline sections: Base Expression Architecture; Character-Creation Allocation; Ordinary Movement and Actions; Independent Opposed Effects; Capacity, Conditions, Load, and Function Bands; Multiple-Source Output; Finite Duration Progression; Benefits and Drawbacks; Lasting Character Aspects; HOLT; Axis; and Session Awards.

Additional sources: `docs/design/lens-task-landscape-working-map-v0.1.md` and `docs/research/lens-task-field-coverage-sweep-v0.1.md`. Older budgets do not override the baseline. The companion-app planning note predates Aspect adoption; its implementation and sharing questions remain open.
