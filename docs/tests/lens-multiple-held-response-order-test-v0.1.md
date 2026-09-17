# Multiple Held-Response Order Test

Status: User-approved working multiple-held-response procedure, adopted 2026-09-08.
Date: 2026-09-08.

## Objective and Authority

Resolve shared-trigger and response-triggered-response cases using existing
initiative and declared triggers, without extra actions or a new initiative roll.
This is a qualitative sequence comparison, not a probability or damage test.

Sources:
- `../system/lens-system-baseline-draft-v0.1.md`, held-response timing and preparation.
- `../system/lens-terminology-quick-reference-v0.1.md`, Delay and open reactions.
- `lens-held-response-trigger-timing-test-v0.1.md`.

The adopted single-response rule allows a previously declared, perceptible
trigger to release a feasible response before an activity finishes. Ordinary
opposition remains. Actual Effects determine what can continue. Delay relocates
an available action without creating another. Preparation persistence and value
remain separate from holding an action.

## Tested Ordering Proposal

Use existing initiative to order eligible responses to the same trigger. Use
their relative order when that event occurs; Delay relocation during resolution
does not repeatedly reorder the remaining responses to that same event.

If beginning or carrying out one response creates a different declared,
perceptible trigger, apply the adopted interrupt rule at that actual point.
Resolve the feasible response to the new event, then return to the unfinished
activity if still possible. Initiative orders competitors for the same timing
opportunity; it does not move a response ahead of the event that enables it.

Before each pending response begins, recheck perception, Access, means, available
action, and whether its timing opportunity still exists. Resolve normal
opposition and apply actual outcomes before continuing. Do not resolve all
responses against a frozen version of the original scene.

## Shared-Trigger Cases

Assume existing relative initiative A before B. Both have available held actions
and previously declared a shot when a guard visibly reaches toward an alarm.
The reach leaves enough time for the illustrated responses; this is a fixture,
not a universal duration of reaching.

| Case | Resolution | Finding |
| --- | --- | --- |
| Both perceive the same reach; both shots remain feasible. | A resolves first, with ordinary defense. Reassess; B resolves next, also with ordinary defense. The guard completes what remains possible. | Existing initiative answers the shared-event ordering question. |
| Reverse their established relative initiative. | B resolves before A. | No new roll or declaration-speed contest is needed. |
| A misses. | B can still respond if its opportunity remains. | Failure of the earlier response neither cancels nor duplicates the later one. |
| A wounds the guard without preventing activation. | Apply that harm and any relevant changes before B resolves. | A hit does not automatically end the triggering activity. |
| A stops the alarm attempt, but the guard remains visible and attackable. | The reach still occurred. B may decline an attack that is no longer wanted, or use the declared response if it remains permissible and feasible. | Removing the original motive is not retroactive erasure of the trigger. |
| A's result removes B's line of fire or closes required Access. | B cannot resolve the intended shot through an opportunity that no longer exists. | Ordering matters; shared trigger does not guarantee every response executes. |
| A does not perceive the reach; B does. | B is eligible and A is not. | Initiative does not supply missing perception. |
| A's response cannot fit before activation, while B's ready response can. | A does not gain impossible speed from earlier initiative. Resolve B's eligible opportunity. | Feasibility is checked before using initiative to order eligible interrupts. |

Recommendation for a response not yet begun: allow declining it when the scene
changes; do not charge an action merely because its trigger occurred. The
unused action remains subject to ordinary Delay, not a replacement attack at an
invented timing point. Choosing an unrelated response does not inherit the old
trigger's interrupt permission. Cross-round carryover is not decided here.

Once a response actually begins, its action is committed. If another response
prevents it from completing, it is not refunded or simultaneously available for
another held attack. This applies the same accounting used for the original
interrupted activity in the preceding test.

## Response-Triggered Responses

Assume A has a held response to the guard's reach. B has already declared a
response to A visibly raising a weapon. B can perceive that movement, and B's
response is feasible during it. A's response is not assumed instantaneous.

```text
Guard begins reaching.
A begins raising the weapon to carry out the held shot.
That visible movement triggers B's held response.
B resolves, including any ordinary defense A can make.
A completes the shot if still possible under B's actual Effects.
Guard completes the alarm activity if still possible.
```

B can resolve before A's shot finishes even if B is later in initiative. B was
not competing with A to answer the guard's reach. B was waiting for a different,
later event and is using the already-adopted interrupt permission.

| Changed case | Result |
| --- | --- |
| B's trigger is hearing A's gunshot. | A has already discharged the shot before B's trigger occurs. B cannot retroactively prevent that discharge. No new projectile-flight timing rule is inferred. |
| A was already aimed and fires without a perceptible intervening movement that B can exploit. | Do not invent a visible wind-up or enough response time merely to make B's declaration work. |
| B's response fails or affects A without preventing the shot. | A continues under the actual resulting circumstances; interruption alone cancels nothing. |
| B genuinely prevents A from firing. | A cannot complete the shot, and its begun action is not refunded. The guard's remaining activity is reassessed normally. |
| B and C both have feasible responses to the same visible movement by A. | Order B and C by their existing relative initiative at that event, reassessing after the first result. Then return to A where possible. |
| C's declared trigger is a distinct visible movement during B's response. | C may interrupt B if feasible. Resolve C, then resume B, then A, then the guard as each remains possible. |

## No-Loop and Action Checks

Two characters each waiting for the other to begin do not create an event merely
by waiting. Nothing triggers until someone actually does something perceptible.

A response already in progress is one committed action. It cannot be released
again as another attack in reaction to its own interruption. If a Character has
another legitimately available action, its possible use still requires the
ordinary allocation, declared trigger, perception, and feasibility. No special
one-response-per-Character cap is added.

In the A-then-B-then-C example, three held actions can be committed once each.
Their completion order can be C, B, A. Pausing and resuming A or B does not spend
another action, refresh an allowance, or grant another attack. If C prevents B,
B's begun action remains spent; that does not automatically prevent A.

For a finite set of available held actions, a nested chain cannot grow by
reusing the same action: each new held response commits another available
action. This is an accounting check, not a claim to settle every possible
extraordinary action-granting Lens.

Open defensive Expressions remain part of ordinary opposition. They are not
free offensive responses or automatic generators of further attacks. If their
actual activity happens to meet another valid declared trigger, that response
still needs its own available action and timing opportunity.

Apply existing Delay relocation when a held action is taken. Do not let movement
in the initiative order give it another use at its old position or reorder the
remaining competitors for an already-occurring shared trigger. No new initiative
roll, new priority rating, or numerical preparation benefit is added.

## Comparison and Recommendation

A global initiative-only order would be simpler, but would force B to wait for
A to finish even when A's visible beginning is B's valid trigger. That contradicts
the adopted permission to interrupt a feasible unfinished activity.

Resolving all shared-trigger responses simultaneously would ignore changes made
by earlier responses and weaken the role of the existing initiative order.
Always giving the most recently announced response priority would reward table
declaration speed and allow late declarations to replace prior preparation.

Adopted: causality establishes when a response becomes eligible; existing
initiative orders eligible responses to the same event. Reassess between
resolutions. A new perceptible event can trigger a previously declared response
during an unfinished response, using the same adopted timing rule.

The cost is that nested responses require remembering which activities remain
unfinished. No new mechanical resource or initiative test is needed. Keep the
sequence explicit at the table rather than inventing another universal cap.

## Decision Boundary

The user adopted this recommendation. It includes shared-event ordering,
response-triggered interruptions, and the distinction between an unbegun
response and a committed action. That decision is resolved.

Unused actions across round or pass boundaries remain unresolved. Do not turn
retaining an unbegun action into banked additional actions, a restored old
initiative slot, or a change to preparation persistence.
