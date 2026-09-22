# Character sheet v0.2 - design and desk rehearsal

Date: 2026-09-17. Status: complete draft for user review and table use.

The user approved extending the accepted first-page concept into a complete
sheet, populating an existing playtest character, and walking through play.
The teal/ink visual direction remains the working style. The approved cover
art is a reference for later; illustration work is deferred. This lane does
not authorize an application or interactive modular editor.

## Deliverables

- Blank handwriting sheet: `../../output/pdf/lens-character-sheet-v0.2.pdf`.
- Filled example: `../../output/pdf/lens-character-sheet-mara-example-v0.2.pdf`.
- Rebuild source: `build_character_sheet_v02.py`.

The blank set contains seven modules: play; training; identity/provisions;
equipment/connections; development/session; optional HOLT/Axes; and a repeatable
Expression/Condition record. Mara's example omits the HOLT module, so it has six
pages. Module numbers remain stable even when a page is omitted. Printed rows
are writing capacity, not game limits. These are static PDF drafts, not PDF
forms or a working module selector. Future selection/copy-count composition
remains the Shadowrun-inspired capability recorded in the app planning note.

The main page carries all 25 Derived Attributes, Attribute-plus-Derived totals,
available points, initiative, three ten-segment Load trackers, named Conditions,
and two common Expressions. Condition entries appear once in the master ledger;
the three tracks summarize their applicable Load. Additional Condition records
extend the same ledger. The sheet uses the ordinary ten-Capacity test controls;
other Profiles need appropriately designed trackers, not silently changed labels.

## Source fidelity

Mara comes from sections 6 and 9 of `lens-first-playable-packet-v0.1.md`.
Current rules were checked against the system baseline and terminology; the
app data requirements guided field coverage. Source character files and balances
were not edited. The filled copy is explicitly labeled as a staged desk rehearsal.

- Attribute total 26; Derived total 52; all Derived ranks respect their parent.
- Protected creation: 1,200 Attribute points, 1,000 Derived, 750 Training.
- Flexible spending: 60 Might, 20 Toughness, 20 Resistance, 20 Exert.
  The source's 125 flexible points therefore leave five.
- All six Tasks, five Fields, five Specialties, and two Precisions are present.
- Developed Aspect and Rank-0 potential are preserved. Equipment and language
  remain scenario provisions, without invented numerical bonuses or prices.
- No purchased Benefits, drawback compensation, HOLT, or Axis is introduced.
  No separate HOLD package was specified by the fixture.

## Walkthrough and findings

This is a fixed-input desk rehearsal, not observed player behavior or game balance
evidence. The record depicts the rescue first, then a separate later Condition.

1. **Find a common Expression.** The front-page hoist route points to training
   module 02. Its raw foundation/training value is 67.32, excluding Aspect,
   Function, context, equipment, Scale, Difficulty, and action adjustment.
   The mental Repair route is separately preserved at raw 54.
2. **Assemble and resolve the rescue.** Module 07 records the source packet's
   boosted rescue: 67.32 x 1.1 Aspect x 1.2 context x 0.588 D2 = 52.2510912,
   floored once to 52. Function and the other factors are 1. Roll 28 produces
   Margin 24 and three Effects toward freeing the workers. No opposed result
   or new universal conversion of Effects is invented.
3. **Spend a resource.** The single boost is entered in the session transaction
   record. Opening five minus one equals closing four; the main-page reserve
   agrees. No awards or new development are assumed.
4. **Apply a Condition.** A separate, invented later rigging mishap supplies a
   three-level Physical shoulder strain solely to exercise the layout. The
   actual scenario does not prescribe this injury. One ledger entry produces
   three marked Physical segments and 75% Function; Mental and Framework remain
   at 100%. No separate numerical Dissonance is added for the same strain.
   The example assigns no Access closure and leaves recovery timing/Difficulty
   for adjudication rather than creating a healing rule.
5. **Check the next action.** With no boost or applicable Aspect, a later hoist
   Expression at D2 is floor(67.32 x 0.75 x 0.588) = 29. Its raw saved route stays
   67.32, and the earlier completed rescue record stays 52.2510912 / Final 52.

The walkthrough exposed ambiguous raw-value labels and crowded raw-value
placement. Both were corrected. Creation funding rows now name their buckets
in the blank version. The worksheet explicitly asks for factors rather than
training ranks; its rescue record identifies that it preceded the shoulder
strain. Name space is separate from module identification.

Practical limits to check with the user: two front-page Conditions and two
quick Expressions may be too few for some characters. Continuation space exists,
but a future module composer should offer larger/repeated blocks. Training is
one page-turn away; detailed resolution uses a separate reusable sheet. The
six-page example is a reference set, not six pages that must remain open at once.
The handwriting comfort and actual lookup speed still require paper/table use.

## Verification

The builder checks character allocation, rank caps, training funding, rescue
arithmetic, point reconciliation, and the later Function-adjusted Expression.
PDF extraction checks every Derived name, required section labels, page counts,
sample values, and word positions within print bounds. Final Poppler renders
are visually reviewed for all seven blank and six example pages, including
labels, frames, page footers, and filled data. Verification output is in
`../../tmp/pdfs/character-sheet-v02/verification.json`.

Rebuild only these generated v0.2 outputs with the bundled Python, then re-render
and review after changes. Earlier sheet drafts and the cover artwork are retained.

Next substantive validation: user review of the filled sheet, followed by table
use to identify specific layout friction. Art and app implementation remain
deferred; no further rules audit is implied.
