# Held-Response Trigger Timing Test

Status: User-approved working held-response timing, adopted 2026-09-08.
Date: 2026-09-08.

## Objective and Controls

Compare resolving a held response during an unfinished activity with resolving
it only after that activity completes. Preserve ordinary action expenditure,
opposition, Delay, Access, and adopted preparation persistence.

Authority read:
- `../system/lens-system-baseline-draft-v0.1.md`, Preparation.
- `../system/lens-terminology-quick-reference-v0.1.md`, Initiative and Multiple Actions.
- `lens-preparation-action-investment-test-v0.1.md`.

This is a qualitative timing comparison, not a probability simulation or an
empirical playtest. No new Difficulty, speed contest, Effect threshold, reaction
allowance, or numerical preparation benefit is introduced.

Distinct setup uses ordinary actions. A held attack must use an available action,
not an action already spent preparing. Open defensive reactions retain their
existing accounting. Delay changes when an available action occurs; it does not
create Resonance, extra actions, or an additional turn at the old position.

## Alternatives

### Completion Only

The triggering activity finishes before the held response resolves, even when
the declared trigger was an observable earlier part of that activity.

This is straightforward to sequence, but it prevents an explicitly anticipated
intervention from affecting the activity in progress. It can also make timing
depend on whether the GM describes reaching and pressing as one action or two.

### Observable Trigger During an Unfinished Activity

The Character declares the intended response and a perceptible trigger before
that trigger occurs. Once the trigger is actually perceived, a feasible held
response can resolve before the still-unfinished part of the activity. Resolve
the response normally, including opposition. Then continue the original activity
where it remains possible, applying the actual resulting circumstances.

The response does not precede the trigger itself. A completed event cannot be
undone by describing the response as an interrupt. The response must be possible
in the available opportunity; merely holding an action does not make a slow
activity instantaneous or supply missing equipment or extraordinary permission.

The user adopted this second alternative. It gives specific anticipation a timing
function without treating every response as successful prevention.

## Core Cases

| Case and established facts | Completion only | Observable-trigger candidate |
| --- | --- | --- |
| A ready shooter declares a shot when the guard reaches toward a distant alarm handle. The reach is visible and leaves an opportunity to fire. | The guard completes the reach and activates the alarm before the shot. | The reach occurs, then the shot resolves before activation. Whether the guard can finish depends on the actual outcome. |
| Same declaration, but the shot misses. | Alarm already activated. | The guard can complete the still-possible action. The interruption grants no cancellation merely for happening first. |
| Same declaration, but the shot inflicts harm insufficient to prevent reaching the handle. | Alarm already activated. | Apply actual harm and relevant modifiers; activation is not automatically prevented by a hit or Wounded Load. |
| The resolved response actually makes reaching or activating the handle impossible. | It can prevent later activity but cannot undo the completed alarm. | The unfinished activation cannot proceed. This follows the changed fiction or Access, not a separate interruption-success rule. |
| The declared trigger is hearing the alarm. | Respond after activation. | Also respond after activation. The trigger is already the completed event; a later response might stop continued ringing, not erase the initial signal. |
| A ready shooter declares a shot when someone enters a watched doorway. Crossing into view precedes further travel through the room. | If the whole movement completes first, the entrant may already be behind cover. | Resolve at the visible doorway opportunity, then continue any movement still possible. The entrant has reached the doorway; they are not retroactively shot before becoming visible. |
| A Character declares a response when an opponent visibly starts drawing a weapon. | A draw completes before the response. | A feasible response can occur during the draw. A subsequent attack is not automatically prevented if the opponent remains able and entitled to act. |
| The draw already completed before the player declared the trigger. | No retroactive response. | Also no retroactive response. The player cannot use a declaration made afterward to reclaim an earlier opportunity. |

## Boundary Cases

| Case | Candidate result |
| --- | --- |
| The player hears the GM announce an attack, but the Character has no perceptible indication yet. | Table information is not itself a fictional trigger. Wait for something the Character can actually perceive, including any legitimate extraordinary senses. |
| The trigger happens outside the Character's awareness. | No response to an unperceived event. Resolve genuine perceptual uncertainty normally, without adding a mandatory detection roll to every held action. |
| The response is a gunshot, but the gun still requires loading. | A held declaration does not make loading and firing instantaneous or waive action costs. Determine the actual available response, not an automatic priority award. |
| The guard's finger is already pressing the alarm switch when the first perceptible cue occurs. | There may be no opportunity to prevent activation. Do not invent an interval simply because the player wants to interrupt. |
| The target can defend against the held shot. | Resolve the normal defensive Expression while Access permits it. The target is not automatically defenseless because their activity was interrupted. |
| A harmless reach satisfies the declared observable trigger. | The trigger does not reveal hidden intent. The Character must decide whether to release the specified response on the evidence available; holding does not supply knowledge that an alarm attempt is genuine. |
| The Character prepared a block and an attack arrives. | Use the existing open defensive reaction, with any applicable preparation. No held offensive action or initiative change is required merely to defend. |
| The trigger never happens. | No free response is owed and no additional action accumulates. The prepared advantage persists or changes under its adopted rule. Round-boundary treatment of an unused action remains separate. |
| A player declares only, 'When anything happens, I do whatever is best.' | This has not specified the response and trigger needed for the proposed interrupt timing. Ordinary Delay remains available; no new broad-response permission is inferred. |

Trigger declarations need ordinary clarity, not exhaustive legal wording. For
example, 'Shoot whoever comes through that doorway' identifies both response
and perceptible circumstance without requiring a named individual. Clarity
limits the timing opportunity; it does not manufacture Access or guarantee harm.

## Sequence and Action Accounting

Single-held-action fixture, initial sequence A, B, C:

```text
A: Delays an available shooting action with a declared trigger.
B: Begins reaching for the alarm. The visible trigger occurs.
A: Uses the delayed action to shoot. B may defend normally.
B: Completes the still-possible portion of the alarm activity, or cannot
   complete it because the response actually prevented it.
C: Acts.
```

A used one shooting action. Any previously completed distinct setup was paid
separately. B's continued activity is the same interrupted activity, not another
action or a reward for being interrupted. The test does not refund B an action
when its completion becomes impossible.

Apply existing Delay relocation at the point A acts, without an additional
action at A's old position or an immediate refresh of A's allowance. If A was
already ahead of B, the visible participant order can remain A, B, C even though
A now acted after B began. That is not permission to act again in that cycle.

The trigger itself is not a contest. The held shot is resolved through the
ordinary contest. If actual timing feasibility is genuinely uncertain, address
that uncertainty through existing resolution rather than adding a universal
initiative reroll. Holding alone guarantees neither impossible speed nor an
unopposed attack.

## Findings

The observable-trigger candidate preserves a meaningful difference between
anticipating an event and responding after its consequences. Completion-only
timing is simpler, but makes specific preventive declarations fail by procedure
even when a viable fictional opportunity existed.

Three controls do the important work:

1. The response and trigger were declared before the perceived event.
2. The response fits the actual opportunity and uses an available action.
3. Only the resolved Effects and changed circumstances prevent completion.

Perceptibility is necessary but not sufficient: a visible event can already be
complete, or leave too little time for the proposed response. This is ordinary
possibility and applicability, not a new speed simulation.

Preparation Resonance is assessed separately and is not guaranteed by a held
declaration. Its persistence does not change when an action is used. The
candidate adds no automatic action loss on a hit, no extra defensive penalty,
and no universal counterattack permission.

## Decision Boundary

Adopted: permit a declared, perceptible trigger to release a feasible held
response before an unfinished activity completes. Preserve normal opposition
and let the actual result determine whether the original activity continues.

The single-response timing decision is resolved. Simultaneous held responses,
chains of interrupts, and unused-action accounting across passes or round
boundaries are not resolved here. Those are remaining scheduling cases, not
reasons to add new bonuses, repeat setup charges, or alter persistence.
