# Area Surplus Scope Bypass Test v0.1

Status: User-authorized candidate comparison, 2026-09-12. No area progression,
surplus conversion, cap, or baseline rule is adopted by this test.

## Objective

Compare declaring a larger area against declaring a smaller, easier area and
spending additional Effect Levels to reach the larger coverage. Test both
ten added area increments per additional Level and one doubling band per Level.

## Controls

- Provisional area anchors: 25 / 50 / 100 / 200 / 400, assigned D1-D5 solely
  for this comparison. This does not adopt the ordinary one-unit baseline's
  relationship to the first Difficulty band.
- Existing Difficulty factor: 0.98 x 0.6^(D-1), floor the Final Rating only.
- Raw pre-Difficulty Expressions: 80, 160, 320, numerical probes rather than
  newly constructed characters.
- Success accomplishes the declared minimum. Only additional Effect Levels
  expand it. No extra baseline is granted after expansion.
- Same permitted contribution, frame, action cost, and circumstances. No active
  opposition, paid spending, mitigation, or disruptive complications modeled.
- Natural 01, repeated 01, and 00 success/failure rules are preserved. Scope
  probabilities include the exact natural-01 continuation distribution.

For each target, the script compares every listed starting anchor at or below
it, not just 25. Coverage means reaching at least the target; +10 may overshoot.
No conversion from area increments to radius, diameter, or volume is made.

## Results: Starting at 25

| Raw Expression | Target coverage | Declare target directly | Start 25, +10 per extra Level | Start 25, double per extra Level |
|---:|---:|---:|---:|---:|
| 80 | 50 | 47% | 48% | 68% |
| 80 | 100 | 28% | 0.97% | 58% |
| 80 | 400 | 10% | Less than 0.000001% | 38% |
| 160 | 100 | 56% | 76% | 99% |
| 160 | 200 | 33% | 0.75% | 99% |
| 320 | 200 | 67% | 99% | 99% |
| 320 | 400 | 40% | 0.32% | 99% |

Fine increments do not dominate direct declarations everywhere. They sharply
reduce very large jumps, especially at lower capability. They nevertheless
permit material declaration bypass at higher capability. Doubling produces
the stronger, more widespread incentive to begin with the easiest declaration.

## Same-Roll Comparison

Raw Expression 160; desired coverage at least 100; completed ordinary roll 40.

Declare 100 directly:

- D3 gives Rating 56.
- Roll 40 generates two Effects: baseline accomplishment plus one extra.

Declare 25 and buy +10 improvements:

- D1 gives Rating 156.
- The same roll generates twelve Effects: baseline plus eleven extra.
- Eight extras expand coverage to 105.
- Three extra Levels remain, versus one on the direct route.

Thus the smaller declaration is not merely trading other output for improved
reliability. It can reach a larger area and leave more output as well.

At raw 320, target 200 and roll 50, the same relationship is stronger: the
small route reaches 205 and retains eight extra Levels; the direct route
achieves 200 with one extra Level.

## Why It Happens

The reduction in Final Rating from attempting a higher Difficulty scales with
the character's pre-Difficulty Expression. The cost of buying a fixed amount
of coverage afterward is a fixed number of ten-point margin bands.

At sufficient capability, avoiding the harder Difficulty generates more extra
Levels than the expansion costs. Changing a whole-band award to +10 reduces
growth, but does not remove that mismatch.

For ordinary results, the smaller route reaches a target when:

```text
roll <= smaller-area Final Rating - 10 x required additional Levels
```

The direct route succeeds when roll <= the larger-area Final Rating. When the
first threshold is higher, the smaller declaration is more reliable until
probability saturation, and may still retain more output after saturation.

## Recommendation and Boundary

Do not adopt a whole doubling band per extra Level. It undermines the intended
scope Difficulty in all tested higher-capability rows and several lower ones.

Do not present +10 as a solved protection against that bypass. It is a smaller,
linear growth candidate and may still be acceptable if the user deliberately
wants low-risk declarations to earn larger scope through success. That would
be a design choice, not evidence that the methods are equivalent.

If declared scope is meant to determine the challenge paid, further design
must protect that relationship rather than assume reducing the increment
solves it. No cap, retroactive Difficulty assessment, or replacement output
system is introduced in this record. The tradeoff requires user judgment.

## Verification

`lens-area-surplus-scope-bypass-test-v0.1.cjs` passed all assertions and 8,232
ordinary outcome/conversion checks. The script calculates exact probability
thresholds, including repeated natural-01 continuations without a fixed-depth
cap, and compares same-roll remaining output.

This is not a complete encounter simulation or an assessment of target
distribution, map geometry, ongoing effects, or simultaneous helper timing.
