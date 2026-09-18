# First Playable LENS Packet

Version 0.1 | 2026-09-17 | Approved artifact-building lane

## Use at the Table

- [Printable packet](../../output/pdf/lens-first-playable-packet-v0.1.pdf): twelve pages of working rules, two costed ordinary rank builds with scene provisions, a 60-90-minute scenario, worked checks, feedback procedure, and open-value boundaries.
- [Draft printable character sheet](../../output/pdf/lens-draft-character-sheet-v0.1.pdf): five reusable pages covering all 25 Derived Attributes, open training, Access and Aspects, actual compensation, and Expression/session records. This draft is for handwriting, not an interactive PDF form. Printed rows are not game limits.
- [App-facing data requirements](lens-app-data-requirements-v0.1.md): character and resolution records, validation, permissions, funding traceability, and acceptance examples. No app code, framework, sharing model, or migration is adopted.
- [Editable packet source](lens-first-playable-packet-v0.1.md): the content used for the printable packet.

For the shortest first session, use the characters directly from packet pages 7-8 and copy only the Expression/session sheet page as needed. The full blank sheet supports constructing or carrying a character beyond the scene; it need not be recopied before this test.

Use actual dice for the scenario and keep fixed-roll rehearsals separate. The ordinary scenario needs no universal range/area lookup, HOLT starting grant, or species valuation. If extending it to those cases, record the relevant GM/Profile assumption rather than promoting it into core. Use the established working initiative formula: average Awareness and Responsiveness Final Ratings, then subtract the opening percentile roll. Retain persistent order and adopted Delay behavior. The formula exists in the terminology reference; remaining presentation and modifier questions do not mean initiative has yet to be designed.

## Authority and Scope

This packet reflects the baseline as read on 2026-09-17. Current rules authority remains the system baseline and terminology reference. Source changes, existing character balances, app implementation, and unresolved numerical decisions are outside this deliverable. No core rules were changed to make the scenario run.

The new characters and scenario are test fixtures, not user character records or a universal Campaign Profile. The optional extraordinary rehearsal is not a free HOLT award to either character. The source references and open-value table preserve adopted versus provisional status.

## Rebuild and Verify

Run `docs/playtest/build_playtest_packet.py` with Python containing ReportLab, pypdf, and pdfplumber. It writes the two PDFs under `output/pdf/` and numeric/text checks under `tmp/pdfs/lens-first-playable-v0.1/`. Rebuilding replaces only these generated artifacts. After any layout or content change, render the final PDFs with Poppler and inspect every page; numeric checks do not establish visual quality or live-play balance.

First-build verification: 31 targeted numeric and purchase-accounting checks
passed, plus the 65 legal Attribute/Derived foundation comparisons. Text checks
confirmed all 25 Derived Attributes on the sheet, twelve packet pages, five sheet
pages, and 6,163 extracted words within print bounds. All page layouts were
visually reviewed after Poppler rendering, including corrected character-table
widths and training-page footer spacing. This is artifact QA, not observed
playtesting or proof of game balance.

The next substantive work is the first table session and its specific friction findings. Sheet ergonomics and Expression assembly should inform the app's first workflow; do not start implementation or another broad rules audit automatically.
