# LENS Playtest Companion App - Planning Note

Version: 0.1
Date: 2026-09-12
Status: Agreed planning direction; implementation has not begun

## Purpose

Preserve the idea of a LENS companion for the user's playtest groups. Character
creation and management belong together with Expression assembly. Expression
assembly is the central capability; the character supplies its foundation.

The user explicitly placed this work in the planning stage and subsequently
agreed to retaining desktop and mobile support while leaving native packaging
undecided. Commercialization is not a current requirement.

## Agreed Planning Direction

- Plan for one shared application usable on computers, tablets, and phones.
- Use the same character model and Expression calculations across devices.
- Connect character capabilities to the assembly of a particular Expression.
- Adapt the interface to the device: detailed character work and comparisons on
  desktop, with convenient character access and Expression use on mobile.
- Retain an installable web app (PWA) as the preferred initial delivery approach.
- Leave traditional desktop installers and native mobile packaging open for
  later evaluation. No framework or distribution provider is selected.

## Capabilities To Explore

These are planning candidates, not an approved implementation checklist:

- Character creation, character sheets, and character development.
- Expression assembly from character capabilities and situational Lenses.
- Visible calculation steps and saved Expressions for recurring actions.
- Comparison of Expressions and retention of playtest cases and results.
- Offline access to downloaded rules, character data, and local calculations.
- Character and Expression export, import, and backup.
- Identification of the rules version used by a character or recorded test.

The table retains judgment over narrative relevance and applicability. App
planning does not settle unresolved LENS mechanics or turn provisional values
into adopted rules.

## GM Dashboard Candidate - Character Aspect Development

Received: 2026-09-14 through a user-authorized handoff to LENS APP.
Source thread: `01a09cd1-7d0f-74c0-90a6-0059d86fed1b`.
Status: Potential GM dashboard feature, pending main-system adoption of its
supporting rules. Retention is not permission to build or adopt core mechanics.

### Visual Memory Aid

The candidate provides one independently adjustable indicator per Character
Aspect behind the GM screen. On paper, the indicator is an eight-wedge circle.
The digital equivalent could be a 0-100% dial with wedge markers and partial
shading.

The indicator is an approximate memory aid for GM judgment. Eight wedges do not
mean eight required acts or sessions. The percentage is not an objective
roleplaying score or a countdown that automatically awards advancement.

Keep three things separate:

- Aspect Access;
- the current awarded enhancement;
- progress toward further development.

The progress percentage is neither an Expression multiplier nor Capacity.

### Narrative Judgment And Independent Progress

First ask whether the conduct is narratively relevant to the Aspect and the
fiction. Sustained alignment, especially without immediate mechanical benefit,
supports development. Knowingly sacrificing an advantage or accepting a harder
path can carry more weight, but is not required. Receiving an enhancement does
not erase a larger sacrifice.

Each Aspect progresses independently. Several can receive progress in one
session; another session may support only one or none. There is no
character-wide award quota or consecutive-session requirement.

Rough development over three to four sessions is a pacing guideline, not a
timer. GM judgment controls awards. Optional brief notes can preserve the
choices that informed progress.

### Provisional Supporting Model

The handoff describes the following provisional model:

- Character Aspects is a working term, with Nature, Bonds, and
  Convictions/Drives as prompts.
- Access and GM-awarded numerical development are distinct.
- The reported tested enhancement range is x1.1-x2.0; it remains candidate
  material, not an adopted app calculation.
- The preference is to use the most applicable enhancement rather than stack
  enhancements.
- Exact adoption, starting allocations, arithmetic placement, and ties remain
  open.

Natural knacks/jinxes and benefits/flaws remain separate. This candidate does
not restructure Leverage or Attributes.

### Open Decisions And Implementation Boundary

Player visibility, award reset/carryover, and evolution after fulfilling an
Aspect remain undecided. Do not automatically award ranks, reset dials, change
balances, or integrate these candidate mechanics into the engine.

The feature is retained for potential rule-supported GM use after the relevant
main-system decisions. It does not select a live data-sharing model or change
the character-and-Expression planning priority.

## Open Scope Questions

The principal future scope question is how much data the group shares:

1. Each player manages characters and Expressions independently.
2. Players exchange characters, Expressions, and playtest records.
3. Players and a GM share live character or session state.

The third option introduces synchronization, access, and editing-permission
decisions. No sharing model, account requirement, or live GM feature is adopted
by this note.

Other decisions remain open: the first complete playtest workflow, offline
scope, backup behavior, and treatment of existing characters when rules change.

## Feasibility Context

The feasibility discussion identified installable web apps as a practical way
to serve desktop and mobile users from shared application code. Installation
and offline behavior require implementation and testing on the target devices.
Native iPhone packaging would require access to an Apple build environment;
that packaging decision can remain open during planning.

Reference documentation reviewed during the feasibility discussion:

- [Web app installation](https://web.dev/learn/pwa/installation/)
- [iPhone Home Screen web apps](https://support.apple.com/guide/iphone/open-as-web-app-iphea86e5236/ios)
- [Offline data](https://web.dev/learn/pwa/offline-data/)
- [Native iOS prerequisites](https://tauri.app/start/prerequisites/#ios)

These references support feasibility, not a framework selection or a claim that
an application has been built or tested.

## Planning Boundary And Resume Point

This note lives inside the existing LENS authority at `C:\LENS-SYSTEM`.
The earlier proposed `app` directory is not an approved implementation
destination. No separate project, application files, hosting, deployment, or
native package is created by this planning decision.

The app idea remains available for later planning and does not displace the
current LENS mechanics decision queue. When the user resumes app planning, use
one character-to-Expression playtest workflow to determine the first useful
scope and whether it needs independent, exchanged, or live shared data.
