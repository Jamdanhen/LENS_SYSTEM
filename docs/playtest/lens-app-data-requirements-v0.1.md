# LENS Playtest App-Facing Data Requirements

Version 0.1 | 2026-09-17 | Design handoff only; no app modification authorized

## Objective and Authority

Support one complete workflow: select a character, describe an attempt, assemble its actual Expression, resolve and explain the result, record Conditions and spending, then close the session. Desktop, tablet, and phone use should share the same rules data and calculation semantics. This does not select a framework, hosting service, sync model, or live-sharing implementation.

Authority: the current LENS baseline and terminology reference. Companion table extract: `lens-first-playable-packet-v0.1.md`; sheet: `../../output/pdf/lens-draft-character-sheet-v0.1.pdf`. All examples below are design requirements, not a production schema or a migration specification.

## Data Principles

- Give records stable IDs and source references. Preserve rules version and whether a value is adopted, provisional control, scenario assumption, or unresolved.
- Distinguish a missing value from zero, Rank 0 from absent Access, and a story grant from a paid purchase. Unknown is not free, forbidden, or x1 by default.
- Store player/GM judgments and their rationale, not just a final number. A system cannot infer that every Field, Aspect, benefit, or equipment item applies.
- Keep character facts separate from an immutable completed-Expression snapshot. Later rank purchases, rule revisions, Condition recovery, or changed context must not rewrite history.
- Store numerical values at full calculation precision; floor only the final Rating. Prefer exact decimal/rational arithmetic for the finite decimal inputs and Difficulty curve. Display rounding must not become input rounding.
- Unlimited record lists, not sheet row limits. No closed mandatory Task catalogue or five-Field maximum. Support user-proposed definitions with Profile approval.

## Character Records and Sheet Mapping

| Record | Minimum data | Printed home |
| --- | --- | --- |
| Identity | Character ID, name, concept, player, Profile ID/version, rules snapshot, notes | Page 1 |
| Attribute | Stable Attribute ID, Rating 1-10, free base, purchased changes and funding | Page 1 |
| Derived | ID, parent Attribute ID, Rank 0-10, purchase history | Page 1 |
| Training | ID, type Task/Field/Specialty/Precision, name, definition/scope, rank, parent Field ID when narrow, optional related Specialty ID, source/eligibility | Page 2 |
| Saved route | Intent, selected layer IDs, known means, applicability notes, pre-context raw estimate, cache version | Page 2 |
| HOLD | Package ID/name, Profile, exact granted provisions and limitations, provenance; no invented common rank | Page 3 |
| HOLT | ID/name, thematic scope, acquisition, limitation references, actual payment; NO parent Rank | Page 3 |
| Axis | HOLT ID, Derived relationship ID, Access state Open/Condition/Closed, condition text and current satisfaction, purchased Rank 0-10 | Page 3 |
| Aspect | ID, characterization, Access/provenance, awarded rank 0-10, story notes, potential/developed state, optional GM memory indicator | Page 3 |
| Benefit / Drawback | Defined provision/burden, guaranteed scope, context conditions, approved price/status, eligibility, credited compensation and overlap links | Page 3 |
| Equipment / position | Item or provision ID, ordinary function, permission, defined factors or mitigation, limits, range support, owner/control, condition references | Page 4 |
| Language | Named language, fluency/literacy/dialect scope as established, free grant or eligible one-point purchase, source | Page 4 |
| Condition | ID, name/cause, levels, pressure scope/Capacity queries, Access consequences, counter/recovery, application/resolution IDs | Page 1; continuation as needed |
| Funds | Allocation buckets, restrictions, actual balance and transactions; never one undifferentiated creation total | Page 4 |
| Session | Participants, awards with category/reason/recipient, immediate spending, story grants, development recognition | Page 5 |

Equipment's future generalized condition subsystem is not adopted by adding equipment records. Preserve currently defined item Conditions without assigning every item three tracks or a standard ten-level life.

## Creation and Purchase Validation

1. Five Attribute bases at Rank 1 are supplied. Protected funding purchases twenty more Attribute ranks (1,200), not twenty-five above the bases.
2. Protected Derived funding buys fifty ranks globally (1,000), with no free first Derived rank. Each D <= parent A.
3. Protected Training is 750 weighted points: T/F 10 and S/P 5 per rank. Finalize unused creation Training as lost, not transferred or carried. Do not expire earned advancement or explicit story training credit.
4. Ordinary flexible base is 125. Approved extra purchases can make final A/D totals exceed protected totals. Actual drawback compensation is separate, up to forty at starting construction. No automatic forty-point credit.
5. Validate funds by eligibility and provenance. The ordinary flexible pool does not automatically buy HOLTs. Profile-defined extraordinary allowances or grants require explicit records; the 125 extraordinary comparison reference is not a default grant.
6. Specialty and Precision need an applicable parent Field, but their rank is not capped by it. Precision does not require a Specialty. Tasks, Fields, and narrow training do not inherit the Derived-to-Attribute cap.
7. Core ranks stop at 10. Do not cap Final Rating, Effects, Aspect-adjusted output, or Scale at 10 or 100. HOLT Access has no numerical parent rank.
8. HOLT Access is 20 once; each Axis rank 20. Store the affected purchase basis, negotiated ten-percent limitation reduction, actual paid amount, and later adjustments. Equivalent-burden replacement is not a new fee; lighter replacement or buyoff pays an eligible difference crediting prior payments. No automatic refunds for setbacks.
9. Record actual drawback credit, including which burdens received compensation under the forty-point ceiling. A provisional catalogue price is not necessarily the amount later owed for removal. Link overlapping burdens so they cannot receive duplicate credit through a HOLT discount, internal package compensation, and another pool.
10. Optional creation Aspects: up to two Rank-1 selections and four Rank-0 potentials, no point debit or cash-out. Later story recognition is not limited to those printed slots. Aspect rank changes require a narrative award record, not a purchase.

Leave extreme discounts, cross-purchase transfers, legacy conversion, and other unresolved refund cases for explicit adjudication. The data design must not create a second buyoff system.

## Expression Assembly and Resolution Record

Record the actual intent, target(s), means, position/reach/area/time when relevant, declared challenge, and contribution dependencies. A single result may support several narratively appropriate outputs; do not enforce exclusive output ownership by its initial label.

The assembly records:

- Selected A and D; applicable T/F/S/P or explicit unranked defaults.
- Access determination separately from numeric factors, including which condition is met and who adjudicated it.
- Applicable Axis IDs. One Axis uses its modifier; two genuinely required higher-order Axes use their arithmetic mean. Do not average complete characters or invent a three-Axis formula.
- One applicable Aspect, with rationale; no duplicate contextual credit and no automatic highest-rank selection.
- Equipment contributions identified by distinct function: ordinary means, numerical factor, protection, or permission. Do not add equipment again after the roll unless it has a separately defined mitigation function.
- Each distinct Difficulty component, assessment reason, and aggregate band. Apply the Difficulty curve once. Missing thresholds must prompt an explicit test assumption, not silently infer a band.
- Applicable Scale reference and factor, Function from relevant Load, helpful/resisting contextual sources, and any ordinary additional-action divisor. Baseline Scale is not inferred from a large monetary value or rank.
- Raw subtotal, factor trace, pre-floor total, Final Rating, and a marker showing any factors already included in a saved estimate.
- Initial roll, continuation list with mode, complete adjusted result, success/failure, signed Margin, Effects, and complication severity. A continuation 01/00 has its sequence-specific meaning; it does not start the opposite sequence.
- Paid boost, paid replacement, original sequence, replacement sequence, purchase transaction IDs, and consequence-commit time. Retain discarded rolls for audit, but only the replacement governs outcome.
- Opposing resolution IDs, matching cancellation, offensive remainder, at-most-one supported defensive counter, actual mitigation, and separately recorded complications.
- Effect allocations with amount, function, targets, source/dependency links, and resolved consequence. No duplicated spend and no automatic conversion of unsupported surplus.

For multiple Sources, retain every contribution and full result separately, then pool only compatible earned Effects. A failed carrier may disable dependent output while leaving independent residuals. A combined attack's defense and mitigation are not automatically multiplied by contributor count; separate hits retain their own application.

## Timing, Conditions, and Persistence

One master Condition ledger supplies Load queries and affected Function. Do not store a second independently editable copy in each track. A cached total needs a source hash or version and must invalidate when its ledger changes.

Keep preparations and persistent manifestations distinct from Conditions. Record their supporting facts, scope, creation result, actual means, sustained/independent/natural status, expiry if defined, and disruption. No universal duration, per-use expiry, per-round harm, or automatic maintenance roll.

Store the established working initiative inputs: Awareness Final Rating, Responsiveness Final Rating, their source calculations, the opening percentile roll, Initiative Base, Initiative Result, and the current persistent position. Initiative Base is `(Awareness Final Rating + Responsiveness Final Rating) / 2`; Initiative Result is that Base minus the opening percentile roll. Preserve fractional and signed values rather than silently adding rounding or treating this as a success-percentage test. The terminology reference retains candidate status and unresolved presentation/modifier details; this handoff does not settle them.

A held response stores its declared response, perceptible trigger, available action, initiative position, and whether begun. Beginning commits its action. Delay moves the ongoing initiative position; it does not leave a second turn behind. Shared-trigger order and response-triggered interruptions must retain causal links. General automation of unresolved timing cases is outside this handoff.

The ordinary ground control stores 6 units while acting, 12 when dedicated, D2 pushing, and one additional unit per successful push Effect. Push plus attack divides each Expression by two and shares the accompanying allowance. Do not also apply the superseded automatic Movement multiplier. Keep these as versioned playtest values, not hardcoded universal movement for all Profiles.

## Output Dimensions

Retain the original declared distance, covered area, or finite duration separately from the resolved result. Additional Effects assigned to each dimension give original x (1 + 0.20 x allocated Effects); do not compound, reset the base, or use radius for area growth. Extra Effects used there are not also harm.

Finite-duration initial lookup uses the smallest covering whole band over the Profile/Lens time increment: 1, 10, 100, and so on. A six-increment D2 declaration still lasts six, not ten. Surplus does not retroactively reprice the declaration. Instantaneous is no added duration component, not zero-second arithmetic that produces a free persistent effect.

Range and area lookup values, physical/time increments, indefinite duration, and unresolved rounding require explicit versioned Profile data or a GM test decision. Distinguish changing display units from changing a manifestation's temporal capability; a scene change does neither automatically.

## Awards and History

Participation 10; Progress / Discovery / Character Expression / Narrative Engagement each 0, 3, or 5. Progress and Discovery go to the participating group; the character and narrative categories are individual. Preserve reasons and recipients rather than automatically awarding 19. No performance score or competitive award winner.

Boost, reroll, and narrative help cost one each under their distinct limits. No automatic reimbursement. Optional milestone reference is 12.5, so storage must support fractional points even though ordinary session awards and most purchases are whole numbers. Milestone recipients and absent-player treatment are not settled here.

Store story-delivered provisions and Aspect development as actual grants, not duplicate spendable credit. Closing balance must reconcile. Existing character records and historical purchase payments are never recalculated silently under a newer rule version.

## Minimum Acceptance Checks for a Future App

| Case | Expected result |
| --- | --- |
| A5 D5 and all four training ranks5, D1, neutral others | Raw50.625; Final49. |
| Same with one Aspect1 | Final54; no automatic +0.10 context. |
| Same with Axis5, no Aspect, D2 | Raw75.9375; Final44. |
| Required Axes5 and0, both Open | Mean1.25, not1.5,0,or2.5. |
| One required Axis Closed | No permitted roll; never average open. |
| Resonance0.2, Dissonance1.5 | Context0; retain actual source records and Access. |
| Final49, initial01 then06 | Result-93; success; Margin142; Effects15. |
| Final0, initial01 then00 | Result1; success; Margin-1; Effects1. |
| Final80, initial00 then50 | Result150; failure; Effects0; severity7. |
| Final160, initial00 then50 | Failure; severity0, no baseline complication. |
| Final120, initial99 | Ordinary success; Margin21; Effects3. |
| Effects3 against Effects3 | Full cancellation regardless of raw Margin. |
| Defense4 against offense1 | Cancel1; potential supported counter at most1. |
| Original area25, two growth Effects | Covered area35, not radius35 or area36. |
| Original duration6 increments, five extra Effects | InitialD2; actual duration12, not20; no retroactive recost. |
| Training remainder10, unrestricted remainder7 | Carry7, not17, after creation finalization. |
| Starting comp35, flexible base125 |160 before eligible purchases, not165. |
| Starting two Rank1 and four Rank0 Aspects | No point debit; no automatic bonus from all six. |

These are specification checks, not evidence that an app exists or that a playtest has occurred. Live shared state, authentication, visibility permissions, offline synchronization, export formats, and legacy migration require separate design decisions before implementation.

## Next App Decision, After Packet Use

Use observed assembly and recording friction to choose the first app workflow: independent character-to-Expression use, exchange of saved records, or live player/GM state. Do not assume that a printable GM ledger authorizes a live shared service. The current deliverable supplies data needs without modifying the app.
