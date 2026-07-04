# LENS System Project Guidance

## Crucible Registry Inheritance

This project is organized by the Crucible Registry.

Before acting, check the applicable project guidance and use the Crucible
Ecosystem Operating Standards as inherited default behavior unless this local
project guidance explicitly overrides or specializes them.

Inherited defaults include:

- work from meaningful decision point to meaningful decision point
- do not create micro-approval loops
- continue through safe implied work inside an approved lane
- stop only at real decision, authority, source-modification, or safety
  boundaries
- provide a concrete next action or real pause boundary in closeouts
- when user approval or direction is needed, provide short, separate,
  copyable `ADD TO CHAT` blocks; each block must contain one action only and
  must include the expected output
- when the user asks for a generated artifact or content output, provide the
  artifact itself in the appropriate readable or copyable format, not an `ADD
  TO CHAT` approval block
- keep project substance inside the owning project
- preserve local project authority and local overrides
- treat the C drive as the default source of truth for durable project files
  until another source of truth is explicitly identified; treat OneDrive,
  sync folders, mirrors, and interface folders as copies only
- when the user says `establish waypoint` or `create a waypoint`, follow the
  Registry Project Waypoint Synchronization Rule, including current Registry
  guidance review, inherited-guidance refresh, local state review, commit, push
  to GitHub when connected, alignment confirmation, and notation of any
  intentionally unfinished work
- protect user files from unapproved move, rename, delete, merge, overwrite,
  cleanup, or restructure operations

Local project guidance controls when it is more specific.

## Project Boundary

This project owns the reusable LENS System authority.

LENS owns:

- system-neutral LENS engine doctrine
- narrative architecture
- expression system rules
- game mechanics
- Scale, Difficulty, Classification, Resonance, and Dissonance design
- LENS-specific tests, modules, settings, and implementation notes

LENS does not own:

- MOTU TTRPG source material
- MOTU setting lore, factions, artifacts, names, or licensed-adjacent material
- REflections source material
- Comics / Around Here creative canon
- generic Crucible Registry governance

MOTU material may inform LENS only when explicitly extracted, neutralized, or
adopted into LENS authority files.

## Project Authority

This project lives at:

```text
C:\LENS-System
```

This folder is the source of truth for LENS until another source of truth is
explicitly identified.

GitHub repository:

```text
https://github.com/Jamdanhen/LENS_SYSTEM
```

OneDrive, sync folders, mirrors, and interface folders are copies only unless
the user explicitly makes one of them the source of truth.

## Current Waypoints

Current waypoint files live in:

```text
C:\LENS-System\waypoints
```

Known waypoints:

- `lens-project-independence-waypoint-v0.1.md`
- `lens-current-development-waypoint-v0.1.md`

When the user says `establish waypoint` or `create a waypoint`, follow the
Crucible Registry Project Waypoint Synchronization Rule and do not stop at local
file creation if GitHub is connected.

For this project, a waypoint is not complete until:

- current Registry guidance has been checked
- the local Registry inheritance block is current or refreshed
- changed LENS files are reviewed
- meaningful completed changes are committed
- committed changes are pushed to `origin/main`
- any intentionally unfinished work is named

## Current Development State

Current system reference:

```text
C:\LENS-System\docs\system\lens-system-working-reference-v0.2.md
```

Current Scale math record:

```text
C:\LENS-System\docs\math\lens-scale-x1.6-test-record-v0.1.md
```

Current active development waypoint:

```text
C:\LENS-System\waypoints\lens-current-development-waypoint-v0.1.md
```

## Output Rules

When the user needs a command, approval, or handoff instruction, use short
`ADD TO CHAT` blocks with one action and one expected output.

When the user asks for LENS content itself, provide the generated artifact
itself in the appropriate readable or copyable format.

Do not replace requested LENS artifacts with approval-command summaries.
