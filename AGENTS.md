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

## Sparky Delegation - Included-Allocation Helper

For bounded routine work inside an already-approved project lane, consider the
shared Spark helper when delegation is likely to save main-task usage or time
after handoff and review costs. Prefer a direct calculator or script when simpler.
Do not delegate ordinary conversation or create work to consume spare allocation.

Before dispatch, read the current rule and verified worker route at
`C:\CRUCIBLE_REGISTRY\SPARKY_DELEGATION_RULE.MD`.
Explicitly select `gpt-5.3-codex-spark`, confirm included allocation remains,
verify the worker identity and working directory, and do not interrupt a busy job.
If the route, tools, or allocation cannot be verified, report the limitation;
do not silently substitute a model, buy credits, use paid APIs, or redeem resets.

Send a unique job ID, requesting project, minimum inputs, permitted reads/writes,
expected output, validation checks, and stopping condition. Shared jobs default
to supplied-input, read-only assistance. File-changing work needs an explicitly
authorized project-scoped assignment and suitable execution context.
Delegation does not expand permissions or authorize onward delegation.

Keep project substance, decisions, terminology, and local overrides with the
owning project. Do not import another job's history as authority or turn Registry
hosting into permission to read or modify other projects. The requester must
retrieve, match, and validate the result. Completion without a visible result
is not success; follow the rule's bounded retrieval fallback, never blind retries.

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
- `lens-current-development-waypoint-v0.2.md`
- `lens-current-development-waypoint-v0.3.md`
- `lens-current-development-waypoint-v0.4.md`
- `lens-current-development-waypoint-v0.5.md`

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
C:\LENS-System\docs\system\lens-system-baseline-draft-v0.1.md
```

Current terminology is in `docs/system/lens-terminology-quick-reference-v0.1.md`.
The earlier v0.2 working reference retains historical content where superseded.
The 2026-09-13 adoption record is
`docs/design/lens-core-three-package-adoption-v0.1.md`: additive Attribute plus
Derived, Access-only HOLTs, and Participation 10 with discretionary 0/3/5.
The 2026-09-15 pricing revision is
`docs/design/lens-uniform-holt-pricing-adoption-v0.1.md`: HOLT Access costs 20
once and each Axis rank costs 20, with negotiated ten-percent limitation
reductions applied once to affected purchases. This supersedes 40/15 pricing
and acquisition-only 25/50/75 discounts. Eligible full and partial buyoff pays
the difference on affected purchases already held, crediting prior payments;
full removal and every partial easing each require narrative justification.
Narratively justified replacement costs nothing for equivalent burden on the
same purchases; lighter replacement pays the difference, crediting prior
payments. Increased permanent burden can change future affected prices but
does not refund prior spending; retain actual payments for later buyoff.
Temporary setbacks do not automatically reprice purchases. Keep extreme
reductions, story grants, legacy conversion, transfers between different purchases, and
separate returned credits unresolved; do not infer refunds or free Axis grants.
Other prices and awards are unchanged.

Adopted 2026-09-16: Rank 10 is the core development ceiling at creation and
during advancement. Preserve parent caps and eligibility; this does not cap
Final Expression Ratings, Effects, or Scale. Higher ranks are deferred to an
optional advanced expansion, not part of the core completion queue. Preserve
`docs/design/lens-higher-rank-horizon-proposal-package-v0.1.md` as exploratory
material; do not resume higher-rank tests without a new user direction.

Adopted 2026-09-17: lasting Character Aspects are core rules with optional
character selection. Source package:
`docs/design/lens-character-aspects-working-package-v0.1.md`. Creation permits
up to two Rank-1 Aspects and four unranked potentials as separate selections,
not point purchases. One applicable Aspect contributes x(1 + Rank/10), through
Rank 10, independently of context and without duplicate Resonance. Development
is story-awarded; new Access and Rank 1 may emerge together when justified.
NPCs use the same applicability rules with ranks grounded in characterization.
Temporary enhancement, including GM offers, and the package's other deferred
extensions remain unadopted. Prices, session awards, protected point allocations,
and existing character records are unchanged. Do not reopen core inclusion or
resume temporary-spending work without new direction.

Adopted 2026-09-17: Benefits and Drawbacks are working core rules. Source:
`docs/design/lens-benefits-and-drawbacks-working-package-v0.1.md`. Maximum
total starting drawback compensation is forty, not a grant or drawback-count
limit. The 125 flexible base and actual compensation may fund ordinary
development or approved benefits under Profile eligibility. Record actual
credited burdens and prior payments for existing narrative buyoff logic;
no duplicate credit or new removal subsystem. Benefits have defined provisions,
not separate ranks. Catalogue valuations remain provisional; Flight ten is a
test price. HOLD/species balancing and deferred Aspect extensions remain parked.
No automatic changes to existing character records, other prices, awards, or
protected allocations follow. Do not reopen framework adoption as pending.

Current Scale math record:

```text
C:\LENS-System\docs\math\lens-scale-x1.6-test-record-v0.1.md
```

Current active development waypoint:

```text
C:\LENS-System\waypoints\lens-current-development-waypoint-v0.5.md
```

Retained 2026-09-20: foundations remain parent-paired. Mixed Attribute-Derived
foundations are parked as exploratory; Task, Field, and established Lens
flexibility is preserved. Do not resume the mixed-foundation Function follow-up
without new user direction. The baseline and terminology also retain the
working D1-D10 Difficulty titles without changing the curve or Access rules.

First playable packet: `docs/playtest/README.md`, with printable outputs under
`output/pdf/`, v0.2/v0.3 character-sheet drafts and Mara examples, the retained
original five-page sheet, and app-facing data requirements.
The next validation is actual table use. Do not infer app-implementation
authorization or new core values from the packet's scenario fixtures.

## Output Rules

During collaborative design, the user's "let's go" means agreement with the
current recommendation and instruction to continue, unless accompanied by a
correction or qualification. Record the specific current decision and proceed
inside the approved lane; do not infer approval of unrelated open candidates.

When the user needs a command, approval, or handoff instruction, use short
`ADD TO CHAT` blocks with one action and one expected output.

When the user asks for LENS content itself, provide the generated artifact
itself in the appropriate readable or copyable format.

Do not replace requested LENS artifacts with approval-command summaries.

## Narrative Possibilities Before Mechanical Categories

Before classifying an idea, restricting an application, or proposing a new
mechanical boundary, first examine what the fiction or narrative actually
supports. LENS is a narrative system; working labels organize possibilities,
not automatically exhaust them.

- Identify the actual action, manifestation, means, and circumstances. Explore
  their plausible functions before deciding where they fit mechanically.
- Do not turn a contribution's initially stated purpose into an exclusive
  output category. A wave introduced as delivery or area can also strike,
  sweep, or otherwise affect targets when its actual nature supports that.
- Distinguish using an Effect twice from allocating remaining Effects to
  another narratively and mechanically supported aspect of the same result.
  Conservation is not a blanket prohibition on such allocation.
- Before rejecting a creative application, identify the specific fictional
  or established mechanical boundary it conflicts with. A provisional label
  alone is not a sufficient reason. Preserve actual Access, opposition, and
  action accounting; narration does not automatically grant missing permission.
- Before proposing a fix for a supposed design problem, check whether the
  problem came from an unnecessarily narrow interpretation introduced during
  the discussion. Correct that interpretation before adding mechanics.

Do not force examples or silently change adopted rules. When a genuine rule
conflict remains after considering the narrative possibilities, identify that
specific conflict for the user's decision.

## Dictation And Established Terminology Safeguard

Before interpreting unfamiliar wording as a new term, compare it with:

- established LENS vocabulary
- current LENS doctrine
- immediate conversational context
- likely voice-dictation or transcription substitutions

When the intended established term is clear from context, use the established
term, continue without unnecessary confirmation, and do not repeat or formalize
the transcription error.

When the wording could genuinely indicate either a new term or an established
term, pause before analyzing or documenting it and ask exactly: `Is this a new
term?` Identify the likely established term when useful.

When the user clearly introduces a new term intentionally, treat it as a
candidate unless the user explicitly adopts or locks it. Do not canonize a term
merely because it appeared in discussion.

Never create analysis, rules, categories, doctrine, project files, Registry
entries, or waypoint content around a probable transcription artifact.

This safeguard applies especially to established terms such as HOLD, HOLT,
Axis, Access, Rank, Resonance, Dissonance, Scale, Difficulty, Classification,
Attribute, Derived Attribute, Skill, Specialization, and Expression.

Preserve LENS terminology, local guidance, substantive content, and local
overrides.


## Phone Image Display

Adopted by Jamie on 2026-09-22. For an image requested on a phone, including
the in-chat phone preview, follow:
C:\CRUCIBLE_REGISTRY\PHONE_IMAGE_DISPLAY_PROTOCOL.MD

Complete necessary prose and authorized file work first. Reuse the requested
local image; generate or edit only when actually requested. Call native
tools.view_image with its actual absolute path, then emit the returned image
with image(preview.image_url). Leave that native preview as the final output,
ending with an empty final response where supported. Do not append a Markdown
image embed, filesystem link, caption, success announcement, continuation block,
or further tool work after the preview. Tool success alone is not proof that
the phone displayed the image. Respect higher-level tool requirements.

This is display guidance only. Preserve the project's style, canon, character
and scale rules, creative workflow, privacy, participant access, and local
authority. In Comics it does not authorize ANY drawing-style, color, realism,
character, canon, reference, or creative-workflow change. It grants no new
permission for file moves, publication, mirrors, sandbox resets, or permission
changes. Ordinary non-image output rules remain unchanged.
