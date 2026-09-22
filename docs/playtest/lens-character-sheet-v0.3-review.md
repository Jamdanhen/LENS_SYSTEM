# Character sheet v0.3 - training-to-Expression layout

Status: alternative draft for visual review, 2026-09-17.

The user requested a new draft with compact Tasks, related Field expertise,
and visible common-Expression arithmetic. Earlier drafts must be retained.

Outputs:

- `../../output/pdf/lens-character-sheet-v0.3.pdf`: seven-page blank sheet.
- `../../output/pdf/lens-character-sheet-mara-example-v0.3.pdf`: six-page Mara example.

Page 2 replaces the wide inventory columns with six compact Task entries and
six Field cards. Every entry pairs Rank with its multiplier. Specialty and
Precision appear as related entries under their parent Field; neither grants
automatic applicability, and Precision still does not require a Specialty.
Additional narrow entries can use another Field block. These printed spaces
are not purchase limits. The future interactive module composer is not built.

Two common Expressions directly follow training. They identify each selected
capability/rank and show foundation, multipliers, and raw result on one line.
Mara's routes remain 67.32 for taking the load and 54 for mechanical repair.
Aspects, equipment, Axis, Function, context, Scale, Difficulty, and action
adjustments remain outside those raw values.

The detailed Expression worksheet is now page/module 03, immediately after
training. It starts with the raw calculation and adds the applicable factors,
pre-floor value, Final Rating, and resolution. The existing example remains
52.2510912 before flooring, Final 52, roll 28, Margin 24, three Effects. It is
still a staged rescue before the separate later shoulder-strain example.
Conditions remain visible on page 1; additional entries are now on page 3.

Identity, equipment, development, and optional HOLT follow as modules 04-07.
References are updated within v0.3 only. Mara omits the optional HOLT page.
The source character, adopted rules, art direction, and prior draft contents
are unchanged. See the v0.2 review for source provenance and rehearsal boundaries.

Build with `build_character_sheet_v03.py`, which imports the v0.2 drawing helpers
without invoking that builder or rebuilding its PDFs. Numeric/source-coverage,
page-order, text-bound checks and SHA-256 preservation checks are saved under
`../../tmp/pdfs/character-sheet-v03/verification.json`. All final PDF pages are
rendered with Poppler and visually reviewed. Earlier sheet PDFs and the v0.2
builder are checked byte-for-byte before and after generation.

Next review: compare page 2's grouped expertise and visible calculations with
v0.2, then judge the adjacent page 3 workflow. This is a draft for the user's
review, not an adopted final layout or observed table-use result.
