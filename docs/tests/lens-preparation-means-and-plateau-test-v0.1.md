# Preparation Means and Plateau Test

Status: User-approved working guidance, adopted 2026-09-08; no universal duration,
bonus schedule, or numerical ceiling adopted.
Date: 2026-09-08.

## Question

Compare zero, one, two, and three preparation actions for an unaided shot, a
scoped shot, and a supported scoped shot. Determine whether useful preparation
should be bounded by elapsed actions, number of named factors, or actual
improvements available through current means.

This is a constructed narrative-mechanical comparison with checked arithmetic,
not empirical firearm performance, a scope specification, or tactical advice.
The assessments and time requirements below are explicit scenario assumptions.
Their arithmetic cannot establish that real aiming plateaus after these counts.

## Existing Controls

- Preparation values the actual advantage in ten-percent increments.
- A distinct setup uses ordinary action accounting; ordinary use of equipment
  is not charged an additional setup action automatically.
- Genuine uncertainty resolves normally; an action spent guarantees no bonus.
- Preparation persists while its supporting facts remain.
- Further effort reassesses the same contribution rather than duplicating it.
- Delay relocates initiative and never accumulates actions.
- No automatic Effect-to-Resonance conversion or bonus-per-round schedule exists.
- Range Difficulty remains unchanged throughout this comparison.

Sources: baseline draft Preparation and contextual pooling sections; terminology
reference Equipment and Multiple Actions; preparation action-investment test.

## Scenario Assumptions

The Character can attempt the shot in all three cases. The pre-context Rating
is normalized to 60, after other applicable factors. This isolates changes in
context; it does not assign a universal numeric multiplier to a scope or support.
Any equipment benefit describing the same advantage must not also be multiplied
into the Rating. Distinct equipment contributions can retain their normal roles.

Two circumstances currently impede the shot: an unsteady position and unresolved
relevant visual detail. Together, assess the scene's environmental contribution
at Dissonance 0.40; with either difficulty resolved it is 0.20; with both resolved
it is zero. These are whole-context assessments, not two extra penalties added
on top of the environmental total.

For this fixture:
- A distinct preparatory activity can improve the position enough to remove
  its contribution to the assessed environmental problem.
- The available scope permits a deliberate observation that resolves the visual
  detail. The unaided Character cannot resolve that detail from this position.
- A separately established useful understanding of the target's behavior adds
  Resonance 0.10. It does not also remove the visual or positioning penalty.
- Each illustrated activity takes one preparation action and is successfully
  completed. The table is conditional on those facts, not a success guarantee.
- In the supported case, the position is already established before the count
  begins. Do not charge for it again. The zero-action advantage reflects that.

The visual observation is a separate information-gathering activity in this
scenario, not a compulsory activation fee for every use of a scope. If ordinary
use already resolves the issue, apply that benefit from the start instead.

## Concrete Sequences

| Setup | No additional preparation | Action 1 | Action 2 | Action 3 |
| --- | --- | --- | --- | --- |
| Unaided | Both contextual impediments remain. | Improve position. | Establish useful behavioral understanding. | No further improvement is available through the same means and facts. |
| Scoped | Both impediments remain; the relevant observation has not yet been made. | Resolve visual detail through permitted observation. | Improve position. | Establish useful behavioral understanding. |
| Already supported and scoped | Only unresolved visual detail impedes the shot. | Resolve visual detail. | Establish useful behavioral understanding. | No further improvement is available through the same means and facts. |

These are illustrative sequences, not a mandatory order of aiming stages. The
scope changes an available route to improvement; prior support changes how much
preparation remains to be done. Neither automatically creates another multiplier.

## Ratings

```text
Rating = floor(60 x max(0, 1 + Resonance - Dissonance))
```

| Setup | Preparation actions | Resonance | Dissonance | Rating |
| --- | ---: | ---: | ---: | ---: |
| Unaided | 0 | 0 | 0.40 | 36 |
| Unaided | 1 | 0 | 0.20 | 48 |
| Unaided | 2 | 0.10 | 0.20 | 54 |
| Unaided | 3 | 0.10 | 0.20 | 54 |
| Scoped | 0 | 0 | 0.40 | 36 |
| Scoped | 1 | 0 | 0.20 | 48 |
| Scoped | 2 | 0 | 0 | 60 |
| Scoped | 3 | 0.10 | 0 | 66 |
| Already supported and scoped | 0 | 0 | 0.20 | 48 |
| Already supported and scoped | 1 | 0 | 0 | 60 |
| Already supported and scoped | 2 | 0.10 | 0 | 66 |
| Already supported and scoped | 3 | 0.10 | 0 | 66 |

The unaided route plateaus earlier and lower under these assumptions. The two
scoped routes reach the same final advantage, but prior support gets there one
action sooner. There is no general rule that more equipment means a larger
maximum, or that taking a third action always adds value.

These actions occur at available action opportunities. The later shot still
uses an action. The table does not grant multiple actions at full Rating in
one round, alter action passes, or imply rounds spent waiting become attacks.
Existing multiple-action divisors apply if several activities are declared
within the same round. Open reactions and Delay remain unchanged.

## Counterchecks

### One Action Can Address Several Descriptions

If moving to one suitable position both steadies the Character and provides
the needed view, one activity may remove both impediments. The assessment can
move from Dissonance 0.40 to zero after that one action. No requirement to pay
one action per named Dissonance is justified.

Conversely, resolving a single informational problem could require several
activities or extended observation. The number of Lens labels does not set time.

### Removing a Problem Versus Offsetting It

At Rating 60, removing Dissonance 0.20 improves the contextual result by 12 when
the zero floor is not intervening. Adding Resonance 0.20 can produce the same
current number, but it does not erase the source of Dissonance.

When a setup genuinely removes the impediment, update that source. If it instead
establishes an advantage despite the impediment, retain the source and assess
the distinct Resonance. Never award both numerical changes for one contribution.

### Renaming Does Not Produce More Preparation

Describing the same position adjustment as settling, steadying, and bracing
does not yield three bonuses. Renaming one environmental problem as several
problems does not create more preparation payments or more removable value.

### Existing Advantage Costs No New Setup

If useful support and all relevant information already exist, begin with their
actual effects. There is no obligation to pay through the illustrated stages
again, and no universal aiming surcharge before an ordinary shot.

### A Fourth Action Can Matter When Something Changes

The comparison window is not a ceiling. If new information establishes a
genuinely distinct additional Resonance of 0.10, the scoped result can reach
72 rather than 66. It must actually add to the established understanding; a
better version of the same information replaces that assessment instead.

The fourth action does not improve the result merely because it is fourth.
Different equipment or circumstances could also change what is achievable.

### More Magnification Does Not Automatically Add Value

An item that reveals information unavailable to current means can enable a
new benefit. An item that gets the same information sooner can reduce required
preparation. If it changes neither the actual view, usable information, nor
another distinct contribution, no extra bonus follows from its larger label.
Closed Access and equipment limits are not overcome by waiting indefinitely.

### Circumstances Can Deteriorate While Waiting

If a new relevant environmental problem is assessed at Dissonance 0.30 after
the scoped setup, its existing Resonance 0.10 produces Rating 48, not 66.
More preparation does not promise monotonically increasing Ratings when the
fiction changes. Reassess the actual whole context and retain only useful facts.

## Findings and Recommendation

All twelve table calculations and the three direct countercheck calculations
were verified with decimal arithmetic and final-only floor. These checks verify
arithmetic only; the narrative assessments remain test fixtures.

Adopted: limit useful preparation by actual improvements available through
the current activity, means, and circumstances. Do not establish three rounds,
three actions, or one removed Lens per action as a universal rule.

Equipment can change the reachable benefit, the time needed to establish it,
or both. Stop increasing the contribution when further effort changes nothing
relevant. Continue applying an already established benefit while it persists.

The tradeoff is less predictable advance knowledge of bonus per action. To keep
the decision usable, the GM should make the prospective benefit and required
investment clear when the Character can reasonably judge them, without revealing
unknown information or guaranteeing an uncertain outcome.

The user adopted this guidance. The preparation-improvement decision is resolved
without adopting the fixture values as standard scope, support, or aim prices.
The baseline, terminology reference, and Task map record the working guidance.
