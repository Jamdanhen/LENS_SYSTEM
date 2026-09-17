"""Build the table packet and printable sheet; this is not the LENS app."""

from decimal import Decimal, ROUND_FLOOR
from html import escape
from pathlib import Path
import json
import re

from reportlab.lib import colors
from reportlab.lib.enums import TA_LEFT
from reportlab.lib.pagesizes import letter
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.pdfgen import canvas
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, PageBreak,
)
from pypdf import PdfReader
import pdfplumber


ROOT = Path(__file__).resolve().parents[2]
OUT = ROOT / "output" / "pdf"
QA = ROOT / "tmp" / "pdfs" / "lens-first-playable-v0.1"
INK = colors.HexColor("#222B30")
ACCENT = colors.HexColor("#14665C")
LIGHT = colors.HexColor("#EAF2F0")
RULE = colors.HexColor("#A7B4B3")
WIDTH, HEIGHT = letter
MARGIN = 42
CONTENT = WIDTH - 2 * MARGIN

ATTRIBUTES = {
    "Might": ["Strength", "Toughness", "Resistance", "Vigor", "Resilience"],
    "Mobility": ["Movement", "Maneuverability", "Stability", "Coordination", "Responsiveness"],
    "Psyche": ["Cognition", "Learning", "Awareness", "Insight", "Resolve"],
    "Influence": ["Presence", "Projection", "Connection", "Manipulation", "Control"],
    "Leverage": ["Assets", "Network", "Authority", "Reputation", "Background"],
}


def inline(text):
    parts = re.split(r"(`[^`]+`)", text)
    return "".join(
        '<font name="Courier">' + escape(p[1:-1]) + '</font>'
        if p.startswith("`") and p.endswith("`") else escape(p)
        for p in parts
    )


def make_styles():
    s = getSampleStyleSheet()
    s.add(ParagraphStyle("PacketTitle", fontName="Helvetica-Bold", fontSize=21,
                         leading=25, textColor=INK, spaceAfter=14))
    s.add(ParagraphStyle("PacketHead", fontName="Helvetica-Bold", fontSize=11.5,
                         leading=15, textColor=ACCENT, spaceBefore=9, spaceAfter=5,
                         keepWithNext=True))
    s.add(ParagraphStyle("PacketBody", fontName="Helvetica", fontSize=9.6,
                         leading=13, textColor=INK, spaceAfter=7))
    s.add(ParagraphStyle("PacketCell", parent=s["PacketBody"], fontSize=8.8,
                         leading=11.2, spaceAfter=0))
    s.add(ParagraphStyle("PacketCode", fontName="Courier", fontSize=8.1,
                         leading=11, textColor=INK, spaceAfter=2))
    return s


def footer(c, doc):
    c.saveState()
    c.setStrokeColor(RULE)
    c.line(MARGIN, 35, WIDTH - MARGIN, 35)
    c.setFillColor(INK)
    c.setFont("Helvetica", 8)
    c.drawString(MARGIN, 23, "LENS / First Playable Packet / v0.1 / 2026-09-17")
    c.drawRightString(WIDTH - MARGIN, 23, str(doc.page))
    c.restoreState()


def packet_pdf():
    styles = make_styles()
    source = (ROOT / "docs/playtest/lens-first-playable-packet-v0.1.md").read_text(encoding="utf-8")
    lines = source.splitlines()
    story = []
    i = 0
    while i < len(lines):
        line = lines[i]
        if not line.strip():
            i += 1
            continue
        if line == "<!-- PAGE -->":
            story.append(PageBreak())
        elif line.startswith("# "):
            story.append(Paragraph(inline(line[2:]), styles["PacketTitle"]))
        elif line.startswith("## "):
            story.append(Paragraph(inline(line[3:]), styles["PacketHead"]))
        elif line.startswith("```"):
            i += 1
            while i < len(lines) and not lines[i].startswith("```"):
                story.append(Paragraph(escape(lines[i]).replace(" ", "&#160;"), styles["PacketCode"]))
                i += 1
            story.append(Spacer(1, 7))
        elif line.startswith("|"):
            rows = []
            table_header = None
            while i < len(lines) and lines[i].startswith("|"):
                cells = [cell.strip() for cell in lines[i].strip("|").split("|")]
                if not all(re.fullmatch(r"[: -]+", cell) for cell in cells):
                    if table_header is None:
                        table_header = cells
                    rows.append([Paragraph(inline(cell), styles["PacketCell"]) for cell in cells])
                i += 1
            columns = len(rows[0])
            if table_header[:2] == ["Attribute", "Rating"]:
                widths = [CONTENT * .19, CONTENT * .10, CONTENT * .71]
            elif columns == 2:
                widths = [CONTENT * .38, CONTENT * .62]
            elif columns == 3:
                widths = [CONTENT * .24, CONTENT * .44, CONTENT * .32]
            else:
                widths = [CONTENT / columns] * columns
            table = Table(rows, colWidths=widths, repeatRows=1, hAlign="LEFT")
            table.setStyle(TableStyle([
                ("BACKGROUND", (0, 0), (-1, 0), LIGHT),
                ("VALIGN", (0, 0), (-1, -1), "TOP"),
                ("LINEBELOW", (0, 0), (-1, 0), .7, ACCENT),
                ("LINEBELOW", (0, 1), (-1, -1), .3, RULE),
                ("LEFTPADDING", (0, 0), (-1, -1), 6),
                ("RIGHTPADDING", (0, 0), (-1, -1), 6),
                ("TOPPADDING", (0, 0), (-1, -1), 5),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 5),
            ]))
            story.extend([table, Spacer(1, 7)])
            continue
        elif line.startswith("- "):
            story.append(Paragraph("- " + inline(line[2:]), styles["PacketBody"]))
        else:
            paragraph = [line]
            while i + 1 < len(lines) and lines[i + 1].strip() and not lines[i + 1].startswith(("#", "|", "- ", "```", "<!--")):
                i += 1
                paragraph.append(lines[i])
            story.append(Paragraph(inline(" ".join(paragraph)), styles["PacketBody"]))
        i += 1
    path = OUT / "lens-first-playable-packet-v0.1.pdf"
    doc = SimpleDocTemplate(str(path), pagesize=letter, rightMargin=MARGIN,
                            leftMargin=MARGIN, topMargin=40, bottomMargin=49,
                            title="LENS First Playable Packet v0.1", author="LENS System")
    doc.build(story, onFirstPage=footer, onLaterPages=footer)
    return path


class Sheet:
    def __init__(self, path):
        self.c = canvas.Canvas(str(path), pagesize=letter)
        self.c.setTitle("LENS Draft Character Sheet v0.1")
        self.c.setAuthor("LENS System")
        self.number = 0

    def text(self, x, y, text, size=9, bold=False, color=INK):
        self.c.setFillColor(color)
        self.c.setFont("Helvetica-Bold" if bold else "Helvetica", size)
        self.c.drawString(x, y, text)

    def page(self, title, subtitle):
        if self.number:
            self.c.showPage()
        self.number += 1
        self.text(MARGIN, 750, "LENS", 23, True)
        self.text(MARGIN + 85, 751, title, 16, True)
        self.text(MARGIN, 729, subtitle, 8)
        self.text(MARGIN, 704, "Character:", 9, True)
        self.line(97, 700, 330)
        self.text(346, 704, "Session / version:", 9, True)
        self.line(430, 700, WIDTH - MARGIN)
        self.c.setStrokeColor(RULE)
        self.c.line(MARGIN, 35, WIDTH - MARGIN, 35)
        self.text(MARGIN, 23, "Draft v0.1 / 2026-09-17 / Rows are writing space, not character limits.", 7.5)
        self.text(WIDTH - 56, 23, str(self.number), 8)

    def line(self, x, y, end):
        self.c.setStrokeColor(RULE)
        self.c.setLineWidth(.4)
        self.c.line(x, y, end, y)

    def heading(self, y, title, note=None):
        self.text(MARGIN, y, title, 11, True, ACCENT)
        if note:
            self.text(MARGIN, y - 14, note, 8)
        return y - (27 if note else 15)

    def table(self, y, headers, fractions, count, row_height=29):
        widths = [CONTENT * f for f in fractions]
        self.c.setFillColor(LIGHT)
        self.c.rect(MARGIN, y - 22, CONTENT, 22, fill=1, stroke=0)
        x = MARGIN
        for header, width in zip(headers, widths):
            self.text(x + 5, y - 14, header, 8, True)
            x += width
        bottom = y - 22 - count * row_height
        self.c.setStrokeColor(RULE)
        self.c.setLineWidth(.4)
        for index in range(count + 1):
            yy = y - 22 - index * row_height
            self.c.line(MARGIN, yy, WIDTH - MARGIN, yy)
        x = MARGIN
        for width in widths[:-1]:
            x += width
            self.c.line(x, y, x, bottom)
        return bottom - 19

    def lines(self, y, count, step=25):
        for i in range(count):
            self.line(MARGIN, y - i * step, WIDTH - MARGIN)
        return y - count * step


def sheet_pdf():
    path = OUT / "lens-draft-character-sheet-v0.1.pdf"
    s = Sheet(path)
    s.page("Capability", "Foundation = Attribute + Derived. Derived <= parent Attribute. Core ranks end at 10.")
    s.text(MARGIN, 680, "Player / concept:", 9, True)
    s.line(125, 676, WIDTH - MARGIN)
    s.text(MARGIN, 657, "Profile / rules reference:", 9, True)
    s.line(155, 653, WIDTH - MARGIN)
    for idx, (attribute, derived) in enumerate(ATTRIBUTES.items()):
        x = MARGIN + (idx % 2) * 274
        y = 623 - (idx // 2) * 112
        s.text(x, y, attribute, 12, True, ACCENT)
        s.text(x + 158, y, "A:", 9, True)
        s.line(x + 177, y - 2, x + 220)
        for row, name in enumerate(derived):
            yy = y - 18 - row * 16
            s.text(x + 4, yy, name, 9)
            s.line(x + 169, yy - 2, x + 222)
    s.text(316, 400, "Function from relevant Load", 10, True)
    for i, label in enumerate(["0-2: 100%    3-5: 75%", "6-7: 50%    8-9: 25%", "10+: affected function lost/exhausted", "Same pressure is not also Dissonance."]):
        s.text(316, 380 - i * 16, label, 8.5)
    y = s.heading(289, "Current Capacity / Load / Function", "Ordinary test Capacity is 10 each. Totals query the ledger below; do not duplicate Conditions.")
    for i, label in enumerate(["Physical", "Mental", "Framework"]):
        x = MARGIN + i * 179
        s.text(x, y, label + "   C: ___ L: ___", 9)
        s.text(x, y - 19, "Function: __________", 9)
    y = s.heading(202, "Master Condition Ledger")
    s.table(y, ["Condition / cause", "Levels", "Scope / Access", "Recovery / counter"], [.28, .10, .28, .34], 4, 29)

    s.page("Training & Routes", "Task = activity. Field = portable expertise. Specialty / Precision = narrower Field expertise.")
    y = s.heading(677, "Open Training List", "Narrow entries require a Field parent, not an equal parent rank. Precision may skip Specialty.")
    y = s.table(y, ["Type: T/F/S/P", "Name / practiced scope", "Rank", "Parent Field / applicability"], [.16, .39, .09, .36], 18, 22)
    y = s.heading(y - 2, "Saved Expression Routes", "Estimates exclude situational changes. Reassess Access, applicability, Function and context each use.")
    y = s.table(y, ["Intent / means", "A+D; T/F/S/P; Axis / Aspect", "Raw / included factors"], [.30, .44, .26], 3, 32)
    s.text(MARGIN, y, "Additional training / scopes: attach another copy. No mandatory catalogue or printed-slot cap.", 8)

    s.page("Permission & Identity", "Access is separate from competence. HOLT has no parent Rank. One applicable lasting Aspect at a time.")
    y = s.heading(677, "HOLD / HOLT Provisions", "Identify Profile, permission, limits and source. A package label alone does not grant every manifestation.")
    y = s.table(y, ["Package / type / ID", "Granted scope / limitations / source"], [.31, .69], 2, 30)
    y = s.heading(y, "HOLT Axes", "Access: Open, Condition (state requirement), or Closed. Unranked Open Axis contributes x1.0.")
    y = s.table(y, ["HOLT / Derived relationship", "Access / condition", "Rank", "Restrictions / purchase link"], [.34, .29, .08, .29], 4, 26)
    y = s.heading(y, "Lasting Aspects", "Creation: up to 2 Rank-1 and 4 Rank-0 potentials, optional. Story-awarded; not point purchases.")
    y = s.table(y, ["Aspect / characterization", "Rank", "Access / story recognition / applicability"], [.42, .08, .50], 6, 24)
    y = s.heading(y, "Benefits / Drawbacks", "Record defined provisions and actual burden. Values may be provisional; compensation ledger is on page 4.")
    s.table(y, ["Name / type", "Effect or burden / scope / conditions", "Approval / ledger ID"], [.24, .52, .24], 2, 29)

    s.page("Provisions & Funding", "Preserve actual grants, payments and restrictions. No automatic refund, forty-point grant or HOLT allowance.")
    y = s.heading(677, "Possessions, Position & Languages", "Keep ordinary function, permission, factors and mitigation distinct. Do not charge twice for existing provisions.")
    y = s.table(y, ["Item / relationship / language", "Function / reach / scope / limits", "Source / value status"], [.32, .43, .25], 4, 28)
    y = s.heading(y, "Starting Allocation Check")
    for label in ["Attributes: 5 free base ranks + 20 protected purchases = 25 total; priced funding 1,200.",
                  "Derived: 50 protected ranks globally; D <= A; priced funding 1,000; no free first rank.",
                  "Training: 750 protected points; unspent creation Training is spent or lost, not carried.",
                  "Ordinary flexible: 125. Actual drawback compensation: ____ / 40 maximum. Not a grant.",
                  "Profile extraordinary provisions / eligible funds: _________________________________",
                  "Unrestricted retained: ______   Restricted remainder / disposition: __________________"]:
        s.text(MARGIN, y, label, 8.5)
        y -= 17
    y = s.heading(y - 6, "Purchase / Compensation / Buyoff Ledger", "T/F10; S/P5; A60; D20; HOLT Access20 once; Axis20/rank. Benefit prices require approval.")
    y = s.table(y, ["Entry / date / purchase ID", "Fund / basis / discount", "Actual paid / credited", "Balance / prior credit"], [.30, .26, .23, .21], 4, 29)
    y = s.heading(y, "Actual Compensated Burdens", "Attribute any capped or combined award; prevent duplicate credit with HOLT or package limitations.")
    s.table(y, ["Burden / affected purchases", "Actual credit / prior buyoff", "Current limits / eligible easing"], [.36, .29, .35], 2, 28)

    s.page("Expression & Session", "Photocopy for additional resolutions. Record a completed result without rewriting it after later development.")
    y = s.heading(677, "Declared Attempt")
    s.text(MARGIN, y, "Intent / target / means / stakes:", 9)
    y = s.lines(y - 9, 2, 22)
    s.text(MARGIN, y, "Access / required conditions / dependencies / action allocation:", 9)
    y = s.lines(y - 10, 1)
    y = s.table(y, ["A + D", "T / F / S / P", "Axis / Aspect", "Equipment / Scale"], [.20, .29, .23, .28], 1, 25)
    s.text(MARGIN, y, "Difficulty components: ____________________ Total D: ____ Factor: __________", 9)
    s.text(MARGIN, y - 21, "Resonance sources: __________________ Dissonance sources: __________________", 9)
    s.text(MARGIN, y - 42, "Context: ______ Function: ______ Action divisor: ______ Pre-floor: ______ Final: ______", 9)
    s.text(MARGIN, y - 63, "Boost transaction: ______ Original dice / continuation: __________________________", 9)
    s.text(MARGIN, y - 84, "Paid reroll transaction: ______ Replacement / continuation: _______________________", 9)
    s.text(MARGIN, y - 105, "Success/failure: _____ Result: _____ Margin: _____ Effects: _____ Complication: _____", 9)
    y = s.heading(y - 135, "Opposition / Allocations / Consequences")
    y = s.table(y, ["Opposition / cancellation", "Effects assigned / target / function", "Condition / fact changed"], [.31, .40, .29], 2, 27)
    y = s.heading(y, "Session Close", "Participation10; Progress / Discovery / Character Expression / Narrative Engagement each 0,3,5.")
    s.text(MARGIN, y, "Awards by category / reasons / recipients: ____________________________________", 9)
    s.text(MARGIN, y - 22, "Opening: ____ Awarded: ____ Other credit: ____ Spent: ____ Closing: ____", 9)
    s.text(MARGIN, y - 44, "Story provisions / Aspect recognition (not duplicate spendable points): _________________", 9)
    s.text(MARGIN, y - 66, "One friction point / evidence / unresolved test assumption: __________________________", 9)
    s.c.save()
    return path


def check_math():
    d = Decimal
    floor = lambda n: int(n.to_integral_value(rounding=ROUND_FLOOR))
    effects = lambda rating, roll: 1 + max(0, rating - roll) // 10
    checks = []

    def check(name, actual, expected):
        assert actual == expected, (name, actual, expected)
        checks.append({"check": name, "actual": str(actual), "expected": str(expected)})

    for attr in range(1, 11):
        for derived in range(attr + 1):
            old = d(attr) * (1 + d(derived) / 10)
            new = d(attr + derived)
            assert new >= old
    check("ordinary ranks5 D1", floor(d(10) * d('1.5') ** 4 * d('.98')), 49)
    check("ordinary ranks5 with Aspect1 D1", floor(d(10) * d('1.5') ** 4 * d('1.1') * d('.98')), 54)
    check("extraordinary Axis5 D2", floor(d('50.625') * d('1.5') * d('.588')), 44)
    check("Axis acquisition and five ranks", 20 + 5 * 20, 120)
    check("Mara raw Exert", d(11) * d('1.7') * d('1.5') * d('1.6') * d('1.5'), d('67.32'))
    check("Mara D2", floor(d('67.32') * d('.588')), 39)
    check("Mara Aspect D2", floor(d('67.32') * d('1.1') * d('.588')), 43)
    check("Mara boost", floor(d('67.32') * d('1.1') * d('.588') * d('1.2')), 52)
    check("Mara impaired boost", floor(d('67.32') * d('1.1') * d('.588') * d('1.2') * d('.75')), 39)
    check("Mara repair D1", floor(d(10) * d('1.5') ** 3 * d('1.6') * d('.98')), 52)
    check("Ilen appeal D1", floor(d(10) * d('1.7') * d('1.5') * d('1.6') * d('.98')), 39)
    check("Ilen Aspect appeal D1", floor(d('40.8') * d('1.1') * d('.98')), 43)
    check("Ilen research D1", floor(d(11) * d('1.5') ** 2 * d('1.6') * d('.98')), 38)
    check("NPC opposition", floor(d(10) * d('1.5') ** 2 * d('1.6') * d('.98')), 35)
    check("offensive Effects", effects(52, 24), 3)
    check("defensive Effects", effects(35, 21), 2)
    check("equal Effect attack", effects(52, 31), 3)
    check("equal Effect defense", effects(35, 14), 3)
    check("initial01/06 output", effects(49, -93), 15)
    check("initial01/00 zero rating", effects(0, 1), 1)
    check("ordinary99 at120", effects(120, 99), 3)
    check("area original25 plus2", d(25) * (1 + d('.2') * 2), d(35))
    check("duration original6 plus5", d(6) * (1 + d('.2') * 5), d(12))
    for name, ratings in {
        "Mara": [[5, 1, 1, 1, 1], [2, 2, 2, 5, 2], [5, 2, 5, 0, 2], [2, 0, 1, 1, 2], [5, 2, 2, 1, 0]],
        "Ilen": [[1, 1, 1, 0, 2], [1, 2, 1, 0, 2], [2, 5, 5, 5, 2], [2, 2, 5, 2, 2], [1, 5, 0, 1, 2]],
    }.items():
        check(name + " Derived total after flex", sum(map(sum, ratings)), 52)
        assert all(0 <= r <= 5 for group in ratings for r in group)
        check(name + " Training protected", 6 * 5 * 10 + 5 * 5 * 10 + 5 * 6 * 5 + 2 * 5 * 5, 750)
        check(name + " flexible reconciliation", 60 + 20 + 20 + 20 + 5, 125)
        check(name + " priced base", 1200 + 1000 + 750 + 120 + 5, 3075)
    return checks


def main():
    OUT.mkdir(parents=True, exist_ok=True)
    QA.mkdir(parents=True, exist_ok=True)
    checks = check_math()
    packet = packet_pdf()
    sheet = sheet_pdf()
    page_counts = {}
    words_checked = 0
    for path, expected in [(packet, 12), (sheet, 5)]:
        reader = PdfReader(path)
        page_counts[path.name] = len(reader.pages)
        assert len(reader.pages) == expected, (path.name, len(reader.pages), expected)
        for index, page in enumerate(reader.pages, 1):
            extracted = page.extract_text()
            assert len(extracted) > 150, (path.name, "near-empty", index)
            assert float(page.mediabox.width) == WIDTH
            assert float(page.mediabox.height) == HEIGHT
        with pdfplumber.open(path) as pdf:
            for index, page in enumerate(pdf.pages, 1):
                for word in page.extract_words():
                    words_checked += 1
                    assert word["x0"] >= 35 and word["x1"] <= 577, (path.name, index, word)
                    assert word["top"] >= 20 and word["bottom"] <= 776, (path.name, index, word)
    sheet_text = "\n".join(page.extract_text() for page in PdfReader(sheet).pages)
    for attribute, derived in ATTRIBUTES.items():
        assert attribute in sheet_text
        for name in derived:
            assert name in sheet_text, name
    report = {"numeric_checks": checks, "foundation_pairs_checked": 65,
              "pages": page_counts, "all_25_derived_on_sheet": True,
              "words_within_print_bounds": words_checked,
              "visual_qa": "Pending separate rendered-page inspection; not established by text checks."}
    (QA / "build-checks.json").write_text(json.dumps(report, indent=2), encoding="utf-8")
    print(json.dumps({"numeric_checks": len(checks), "foundation_pairs": 65,
                      "pages": page_counts, "words_within_print_bounds": words_checked}, indent=2))


if __name__ == "__main__":
    main()
