import json
import math
from pathlib import Path

EPS = 1e-10
ROOT3 = math.sqrt(3)
R = 1 / ROOT3


def cross(a, b, p):
    return (b[0] - a[0]) * (p[1] - a[1]) - (b[1] - a[1]) * (p[0] - a[0])


def polygon_area(points):
    if len(points) < 3:
        return 0.0
    return abs(sum(a[0] * b[1] - b[0] * a[1]
                   for a, b in zip(points, points[1:] + points[:1]))) / 2


def clip(subject, boundary):
    # Sutherland-Hodgman clipping against a convex, counterclockwise hexagon.
    points = subject
    for a, b in zip(boundary, boundary[1:] + boundary[:1]):
        if not points:
            break
        output = []
        previous = points[-1]
        old_distance = cross(a, b, previous)
        for current in points:
            distance = cross(a, b, current)
            if (distance >= 0) != (old_distance >= 0):
                t = old_distance / (old_distance - distance)
                output.append((previous[0] + t * (current[0] - previous[0]),
                               previous[1] + t * (current[1] - previous[1])))
            if distance >= 0:
                output.append(current)
            previous, old_distance = current, distance
        points = output
    return points


def hexagon(q, r):
    cx, cy = q + r / 2, ROOT3 * r / 2
    return [(cx + R * math.cos(math.pi / 6 + i * math.pi / 3),
             cy + R * math.sin(math.pi / 6 + i * math.pi / 3)) for i in range(6)]


def scale(points, factor):
    return [(x * factor, y * factor) for x, y in points]


def rotate(points, angle):
    c, s = math.cos(angle), math.sin(angle)
    return [(x * c - y * s, x * s + y * c) for x, y in points]


GRID = [(q, r, hexagon(q, r)) for q in range(-6, 7) for r in range(-6, 7)
        if max(abs(q), abs(r), abs(q + r)) <= 6]
UNIT = polygon_area(hexagon(0, 0))
assert abs(UNIT - ROOT3 / 2) < EPS
assert abs(polygon_area(clip(hexagon(0, 0), hexagon(0, 0))) - UNIT) < EPS
assert polygon_area(clip(hexagon(0, 0), hexagon(3, 0))) < EPS
# A half-plane through the center cuts a centrally symmetric hex exactly in half.
half_plane = [(0, -10), (10, -10), (10, 10), (0, 10)]
assert abs(polygon_area(clip(hexagon(0, 0), half_plane)) / UNIT - 0.5) < EPS

INITIAL = [hexagon(q, r) for q, r, _ in GRID
           if max(abs(q), abs(r), abs(q + r)) <= 1]
assert len(INITIAL) == 7


def evaluate(parts, grid=GRID):
    fractions = []
    for q, r, cell in grid:
        fraction = sum(polygon_area(clip(part, cell)) for part in parts) / UNIT
        assert -EPS <= fraction <= 1 + EPS
        fractions.append((q, r, min(1.0, max(0.0, fraction))))
    expected = sum(polygon_area(part) for part in parts) / UNIT
    assert abs(sum(f for _, _, f in fractions) - expected) < 1e-7
    included = [(q, r) for q, r, f in fractions if f >= 0.5 - EPS]
    return {"area": expected, "affected": len(included), "included": included,
            "fractions": fractions,
            "nearest_half": min(abs(f - 0.5) for _, _, f in fractions)}


rows = []
previous_fractions = None
for expenditure in range(6):
    factor = None if expenditure == 0 else 1 + 0.2 * (expenditure - 1)
    parts = [hexagon(0, 0)] if expenditure == 0 else [scale(p, factor) for p in INITIAL]
    result = evaluate(parts)
    assert abs(result["area"] - (1 if expenditure == 0 else 7 * factor ** 2)) < EPS
    if previous_fractions is not None:
        assert all(current[2] + EPS >= old[2]
                   for current, old in zip(result["fractions"], previous_fractions))
    previous_fractions = result["fractions"]
    rotated_parts = [rotate(part, math.pi / 3) for part in parts]
    rotated_result = evaluate(rotated_parts)
    assert result["affected"] == rotated_result["affected"]
    flat_grid = [(q, r, rotate(cell, math.pi / 6)) for q, r, cell in GRID]
    assert evaluate([rotate(p, math.pi / 6) for p in parts], flat_grid)["included"] == result["included"]
    rows.append({"area_expenditures": expenditure, "radius_factor": factor,
                 "parts": parts, **result})

# Circle control follows the earlier approximate 1.5-meter-radius illustration,
# not the equal-area seven-hex outline. Convergence checks avoid a pixel count.
circles = []
for expenditure in range(1, 6):
    radius = 1.5 * (1 + 0.2 * (expenditure - 1))
    checks = []
    for resolution in [360, 720, 1440]:
        shape = [(radius * math.cos(2 * math.pi * i / resolution),
                  radius * math.sin(2 * math.pi * i / resolution)) for i in range(resolution)]
        result = evaluate([shape])
        checks.append(result)
    assert len({result["affected"] for result in checks}) == 1
    assert abs(checks[-1]["area"] - math.pi * radius ** 2 / UNIT) < 0.001
    circles.append({"area_expenditures": expenditure, "radius_m": radius,
                    "area": checks[-1]["area"], "affected": checks[-1]["affected"],
                    "nearest_half": checks[-1]["nearest_half"]})

summary = [{k: v for k, v in row.items() if k not in ["parts", "fractions", "included"]}
           for row in rows]
print(json.dumps({"scaled_seven_hex_outline": summary, "circle_control": circles,
                  "verified": ["analytic hex area", "identity/disjoint intersections",
                    "exact half inclusion", "area conservation across complete grid",
                    "nested coverage", "sixty-degree rotation", "pointy/flat orientation",
                    "circle-resolution count convergence"]}, indent=2))

if __name__ == "__main__":
    from PIL import Image, ImageDraw, ImageFont

    figure = Image.new("RGB", (1200, 1700), "white")
    draw = ImageDraw.Draw(figure)
    font_path = "C:/Windows/Fonts/arial.ttf"
    title_font = ImageFont.truetype(font_path, 35)
    panel_font = ImageFont.truetype(font_path, 28)
    detail_font = ImageFont.truetype(font_path, 23)
    draw.text((600, 28), "Circular footprint: fixed 20% radius increases",
              font=title_font, fill="#202729", anchor="mt")
    draw.text((600, 80), "Green: affected hexes     Rose: footprint boundary",
              font=detail_font, fill="#465153", anchor="mt")
    draw.text((600, 117), "At least half covered counts. No radius compounding.",
              font=detail_font, fill="#465153", anchor="mt")
    for index in range(6):
        column, row_number = index % 2, index // 2
        cx, top = 300 + 600 * column, 180 + 500 * row_number
        if index == 0:
            shape = hexagon(0, 0)
            result = evaluate([shape])
            title = "Ordinary success: 1 hex"
            detail = "No area Effects spent"
        else:
            radius = 1.5 * (1 + 0.2 * (index - 1))
            shape = [(radius * math.cos(2 * math.pi * i / 1440),
                      radius * math.sin(2 * math.pi * i / 1440)) for i in range(1440)]
            result = evaluate([shape])
            title = f"{index} area Effect{'s' if index != 1 else ''}: {result['affected']} hexes"
            detail = f"Radius {radius:.1f} m | covered area {result['area']:.2f}"
        draw.text((cx, top), title, font=panel_font, fill="#202729", anchor="mt")
        draw.text((cx, top + 40), detail, font=detail_font, fill="#465153", anchor="mt")
        cy, zoom = top + 285, 50

        def project(points):
            return [(cx + x * zoom, cy - y * zoom) for x, y in points]

        fractions = {(q, r): f for q, r, f in result["fractions"]}
        for q, r, cell in GRID:
            if max(abs(q), abs(r), abs(q + r)) > 3:
                continue
            fill = "#a5d4c3" if fractions[(q, r)] >= 0.5 - EPS else "#f3f5f5"
            draw.polygon(project(cell), fill=fill, outline="#a5afb0", width=1)
        outline = project(shape)
        draw.line(outline + [outline[0]], fill="#b23263", width=3)
    destination = Path(__file__).with_suffix(".png")
    figure.save(destination)
    print(f"Figure: {destination}")
