# Dedicated Movement Allowance Test

Status: Tested candidate; output rule not adopted.
Date: 2026-09-08.

## Objective and Controls

Test one additional ordinary movement allowance for a dedicated movement action.
Compare movement alone, movement plus an attack, and repeated movement actions
under existing action accounting. Do not adopt the output rule.

Sources:
- `../system/lens-system-baseline-draft-v0.1.md`, Ordinary Movement and Actions.
- `../system/lens-terminology-quick-reference-v0.1.md`, Multiple-Action Divisor
  and Rapid Expression.
- `lens-ground-movement-grid-baseline-comparison-v0.1.md`.
- `lens-preparation-action-investment-test-v0.1.md`.

Working ground allowance with Movement development alone is L = 10 + Rank meters.
The ordinary allowance is available once per turn and shared across actions.
The working multiple-action procedure divides each independent action's own
Final Rating by the declared action count N. It does not presently define a
division of automatic distance. Routine feasible movement remains Automatic.
Access, obstacles, and genuine opposition remain meaningful.

An automatic activity can occupy an action. That does not itself establish how
much activity fits in the turn. No new action maximum, turn duration, movement
Difficulty, speed statistic, or universal Rating-to-distance conversion is used.

## Literal Candidate

For K dedicated movement actions among N total actions:

```text
Total distance = L + K x L
Each attack Rating = floor(its pre-divisor Final Rating / N)
```

No second allowance is granted merely for making a second attack. Only the
candidate dedicated movement action supplies extra distance. Additional travel
occurs with the relevant action, not as distance prepaid at the start of a turn.
The table totals assume the activities can actually be completed.

Use Movement Rank 5, L = 15 meters, and a stipulated attack Final Rating of 60
before action division. This Rating is a controlled input, not a newly built
character or an invented combat Difficulty. No success percentages or damage
claims are inferred from it without an actual opponent.

| Activities | Actions | Total distance | Each attack Rating |
| --- | --- | --- | --- |
| Ordinary movement only | No dedicated movement action | 15 m | Not applicable |
| One attack with ordinary movement | 1 | 15 m | 60 |
| One dedicated movement action | 1 | 30 m | Not applicable |
| Two attacks with ordinary movement | 2 | 15 m | 30 |
| One movement action and one attack | 2 | 30 m | 30 |
| Two movement actions | 2 | 45 m | Not applicable |
| Two movement actions and one attack | 3 | 45 m | 20 |
| Three movement actions | 3 | 60 m | Not applicable |
| Ten movement actions, arithmetic stress probe | 10 | 165 m | Not applicable |

The ten-action row is not permission to perform ten actions. It demonstrates
what the proposed formula does if repeated movement declarations qualify.

## Findings

### A Single Additional Allowance

At Ranks 0 / 5 / 10, ordinary distance is 10 / 15 / 20 meters. One dedicated
movement action yields totals of 20 / 30 / 40 meters. These are whole meters
and whole optional 1-meter spaces, preserving the chosen Movement progression.
This is a usable first candidate, not proof of encounter balance.

One attack plus that movement action incurs the two-action divisor on the
attack. This differs from ordinary movement accompanying an undivided attack.
At Rank 5 the candidate therefore compares 15 meters with Rating 60 against
30 meters with Rating 30. There is a visible tradeoff in that mixed case.

### Repeated Automatic Movement

With movement alone, increasing K adds distance without a rolled Rating on
which the current divisor can exert pressure. It is incorrect to announce that
the movement is already penalized simply because its unused Rating was divided.
The candidate formula has no intrinsic finite bound as K increases.

Existing fiction can reject infeasible declarations, but an unspecified travel
limit cannot supply the quantitative output rule this test was meant to examine.
Opponents and action passes may interrupt later movement; they do not define
the uninterrupted character's available distance. Open ground is sufficient to
expose the missing accounting, without making routine running uncertain.

Many motions toward one outcome already constitute one Expression. A player
does not obtain extra distance just by renaming one continuous run as ten
actions. However, that safeguard does not settle genuinely separate movement
activities around other choices. Nor should different destinations themselves
manufacture more travel capacity. Their shared output still needs accounting.

### Uncertain Movement Does Not Repair the General Rule

A contested passage, unstable route, or actual obstacle can call for an ordinary
movement Expression divided by N. That tests execution. It does not establish
that the distance itself is divided by N, and does not justify a roll on every
clear path. A lower success margin is not already an adopted distance reduction.

## Recommendation and Decision Boundary

Do not adopt one full additional allowance for every declared movement action
unchanged. Retain one additional allowance for a single dedicated movement action
as the useful reference for the next comparison.

Next candidate to test, not adopted here: apply the existing action divisor to
each dedicated movement action's additional distance, leaving ordinary movement
intact. That would give L + K x L/N. This extends the divisor from rolled
effectiveness to this automatic output and therefore requires an explicit design
decision; it is not a claim about what the existing rule already says.

Check mixed-action incentives, repeated movement, and fractional grid results
before recommending that extension. At L = 15, one movement action among two
actions would add 7.5 meters, so whole-space presentation is a real tradeoff.
Do not silently round or halve the once-per-turn ordinary allowance.

No baseline doctrine is changed by this test. Additional-movement output remains
unresolved, including how extraordinary action-capacity Lenses might affect it.

## Verification

Companion PowerShell script checks 715 combinations of Movement Rank 0-10,
declared action count 1-10, and movement count 0-N, plus eight fixed fixtures.
This is deterministic arithmetic and rules-interaction analysis, not simulated
opposed combat or an actual table playtest. Fictional feasibility remains a
separate requirement; the matrix does not authorize every counted combination.
