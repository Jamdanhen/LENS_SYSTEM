# Next Steps

This document records the current decision queue for LENS System.

## Current Position

LENS is a standalone system project.

Authority location:

```text
C:\LENS-System
```

Current system reference:

```text
C:\LENS-System\docs\system\lens-system-working-reference-v0.2.md
```

Current Scale math record:

```text
C:\LENS-System\docs\math\lens-scale-x1.6-test-record-v0.1.md
```

Current waypoint:

```text
C:\LENS-System\waypoints\lens-current-development-waypoint-v0.1.md
```

## Current Locked State

Locked for current testing:

- Difficulty D1 = 98
- Each Difficulty Rank = previous x0.6
- Rounding = full precision until final floor
- Scale Magnitude 1 = x1
- Current active Scale model = exponential x1.6

Scale x1.6 is locked for the next test phase, not final-locked as permanent
Scale progression.

## Next Decision

Decide how Resonance and Dissonance values modify the current fixed math.

## Recommended Next Action

Build and test a Resonance / Dissonance value ladder while holding fixed:

- Difficulty curve
- Human baselines
- rounding rule
- Scale x1.6

## Test Sequence

Use this sequence unless the user changes direction:

1. Build Resonance / Dissonance value ladder.
2. Test Counter-Lens doctrine with objective scene conditions.
3. Test Expression vs Dissonance.
4. Test Expression vs Expression.
5. Revisit Overflow only after opposition is clearer.
6. Revisit Load only after Dissonance values are clearer.
7. Build a minimum generic test packet.

## Output Format

When options are needed, present each option as its own short, separate,
copyable `ADD TO CHAT` block.

Use one action per block.

Each block must include the expected output.

Do not combine multiple options in one block.

When the user asks for LENS content itself, provide the generated artifact
itself in the appropriate readable or copyable format.

## Waypoint Rule

When the user says `establish waypoint` or `create a waypoint`, follow the
Crucible Registry Project Waypoint Synchronization Rule.

Because LENS has a GitHub remote, a waypoint is not complete until committed
changes have been pushed to `origin/main`, or a blocker has been recorded.

