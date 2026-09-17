# Protected Guide Encounter Test

Date: 2026-09-10

Status: Completed approved comparison. No change to character allocations,
core resolution, Capacity, Function Bands, or prices. Particular cover,
preparation, and armor placements remain provisional.

User continuation, 2026-09-11: "Okay, proceed" accepts the recommendation
to close this protection/pacing pass without a core mathematical change.
Individual protective valuations and Campaign Profile calibration remain
provisional. This does not approve new equipment placements or another test
of the same pacing question.

## Finding

Existing protection can materially change the exposed signature-weapon result.
Matching mitigation 1 or 2 alone does not turn this specialist's firearm duel
into a prolonged exchange. Cover has a larger effect, and distinct cover,
mitigation, and defensive preparation together can move the median from one
round to four while reducing first-shot incapacitation below 1%.

Protection is not a solution to low-output stagnation. It can make that
approach incapable of ordinary damage. At Final Rating 20, an ordinary
successful roll generates at most two Effects; matching mitigation 2 absorbs
all of them even before considering a successful defense. A permitted natural
01 can still produce enough output. Access is not automatically closed.

These are different operating circumstances, not evidence that the same
Expression should always yield a comparable encounter length.

## Sources and Fixed Scope

- Unchanged repriced guide and complete Expressions:
  `lens-low-rating-build-trace-v0.1.results.json`.
- Previous exposed controls and simulator:
  `lens-character-based-encounter-pacing-v0.1.cjs` and its report.
- Mitigation 1/2 candidates:
  `lens-concrete-equipment-placement-opposed-play-test-v0.1.md`, Armor Mitigation.
- Ten-percent valuation:
  `lens-contextual-ten-percent-steps-test-v0.1.md`.
- Preparation +0.20 example and actual action accounting:
  `lens-preparation-action-investment-test-v0.1.md`.
- Current net pooling, preparation persistence, mitigation, and independent
  Effects: `../system/lens-system-baseline-draft-v0.1.md`. Older separate-pool
  calculations in historical tests are not used.

Two copies of the guide exchange ranged attacks at matching Scale. Neutral
signature attack is 180.280512, Field-supported defense 29.792, physical
Recover 6. The conditional narrow-defense sensitivity uses 91.16352 only
where the familiar opposing revolver and relevant narrow training justify it.
No new expertise or equipment multiplier is purchased.

Capacity is 10; loss of function is not automatic death. Persistent initiative
is balanced, one actor first in half the trials. Each gets one action per
round and a feasible open defensive reaction. No automatic ranged counter,
paid spending, additional action split, retreat, surrender, or movement is
introduced. Ammunition and continued exposure remain available for attrition
measurement; the long controls are not literal reload/weapon simulations.

## Protective Fixtures

**Cover:** exposed target area or firing-line interference is assessed at
0.20, 0.30, or 0.50 Dissonance on the incoming shot. These are sensitivity
values drawn from existing steps, not universal cover categories. The scene
contains shooting positions behind obstacles, with a genuinely available
partial firing line in both directions. Cover is not also added to defense,
Difficulty, or mitigation. A fully blocked shot instead requires normal Access
and physical feasibility assessment; it is not manufactured by a numerical
penalty or a favorable special roll.

**Armor:** matching mitigation 1 or 2 removes that many uncancelled ballistic
Wounded Effects. It does not reduce the attack Rating or get added to defensive
Effects. Matching coverage is assumed. It does not protect against every
effect, nor against the fixture's nonballistic lost-equilibrium complications.

**Prepared defense:** a separately established, practiced evasive response
and usable footing provide +0.20 Resonance to the appropriate defense. The
benefit is not the same occlusion already represented by cover. Ordinary
evasion does not receive this bonus merely for being described as prepared.

**Prepared shot:** a separately established supported sight picture supplies
+0.20 attack Resonance in two sensitivities. It offsets shot Dissonance through
the existing net pool; it does not multiply an already reduced rating by 1.20.
It cannot overcome a physically closed firing line just by increasing Rating.

All setups exist before the measured exchange and have required whatever
ordinary activity and time the fiction establishes. No free in-combat setup
is awarded. Spending an in-combat action to establish one would replace that
action's shot; that timing tradeoff is not optimized in this comparison.
Cover and worn armor persist while the characters remain in their positions.
Prepared contributions persist while supported, but in this fixture a
lost-equilibrium complication disrupts the prepared stance/sight picture and
removes those contributions. Recover does not automatically recreate setup.

## Calculation

```text
Attack = full attack Expression
       x distinct Difficulty
       x max(0, 1 + applicable attack Resonance - target cover Dissonance)
       x current Function Band

Defense = full defense Expression
        x (1 + applicable defensive preparation Resonance)
        x current Function Band

Applied ballistic Wounded
= max(0, offensive Effects - defensive Effects - matching mitigation)
```

Floor Ratings only after multiplication. Resolve complete special sequences
normally. Own00 complications are separate and not capped as defensive counters.

## Main Results

Mirror matches, attack policy, with own00 severity mapped to recoverable
physical disruption as in the prior fixture. That mapping is a simulation
assumption, not a universal requirement that all complications cause Load.
First-shot incapacitation is independently enumerated from offensive output
after cancellation and matching mitigation, excluding separate complications.

| Protection available to both guides | First-shot incapacitation | Median rounds | 90% resolved by | First mover wins |
| --- | ---: | ---: | ---: | ---: |
| None | 83.87% | 1 | 2 | 97.98% |
| Mitigation 1 | 73.91% | 1 | 2 | 97.01% |
| Mitigation 2 | 63.97% | 1 | 2 | 96.13% |
| Prepared defense +0.20 | 81.63% | 1 | 2 | 97.76% |
| Cover 0.20 | 48.09% | 1 | 2 | 91.53% |
| Cover 0.30 | 30.25% | 2 | 3 | 84.99% |
| Cover 0.50 | 0.93% | 3 | 5 | 67.84% |
| Cover 0.30 and mitigation 2 | 12.13% | 2 | 4 | 77.25% |
| Cover 0.30, mitigation 2, prepared defense | 11.21% | 2 | 4 | 75.75% |
| Cover 0.50, mitigation 2, prepared defense | 0.71% | 4 | 8 | 60.80% |

With full applicable narrow defensive expertise, cover 0.30 and mitigation 2
give 2.52% first-shot incapacitation, a median three rounds, and 61.86%
first-mover wins. This is a conditional route, not a new automatic defensive
entitlement.

When only one guide has cover 0.30, mitigation 2, and prepared defense, the
protected guide wins 77.97% despite balanced initiative. The encounter median
is one round because the exposed participant remains vulnerable. Protection
improves survival; it does not necessarily lengthen an asymmetrical fight.

### Preparation Can Also Favor the Attacker

Cover 0.30 plus mitigation 2 plus prepared defense gives a shot Rating of 126
against defense 35. Add a genuinely distinct prepared shot +0.20 and the net
context becomes 1 + 0.20 - 0.30 = 0.90: attack Rating 162, not 151.

First-shot incapacitation then rises from 11.21% to 43.89%. The median remains
two rounds but the 90th percentile drops from four to two. With cover 0.50,
adding that attack preparation moves the median from four rounds to two.
Preparation is not inherently a pacing brake. Its direction and actual
contribution matter, as does the opportunity to establish or disrupt it.

## Low-Output Boundary

The unchanged guide's broad firearm route at D3 is 20.78528256, floored to 20.
Mitigation 2 stops every ordinary-roll offensive result from that route.
Cover 0.30 lowers it further to 14. Neither route gains ordinary penetration
merely because the defense fails.

| Weak approach | Primary median / p90 | Output-only control median / p90 |
| --- | --- | --- |
| D3 broad firearm against mitigation 2 | 21 / 62 | 145 / 333 |
| Same, plus cover 0.30 | 20 / 62 | 165 / 362 |

The output-only control retains 01/00 rolls but omits all complication
consequences to isolate successful attack output. It is not a complete game
procedure or permission to ignore narrative complications. About 90-92% of
primary terminal thresholds in these protected low-output fixtures depend on
own00 complication Load. They are not evidence that ordinary shots penetrate.

A player could change the approach, improve applicable circumstances, use
better-developed expertise, establish an actually unprotected target, or
withdraw if the fiction permits. Those are existing choices, not a new bypass,
guaranteed bonus, or minimum-damage rule. A legal exceptional attempt remains
legal; the test does not make slow progress automatically impossible.

## Recovery and Verification

Recovery-policy medians match the attack policy in all high-output cases.
At the protected low end they are 21 rounds in both fixtures; recovery removes
temporary disruption, not the ballistic Wounded, and the guide has not bought
a strong Recover route. No optimal policy is claimed.

The test comprises 16 fixtures x three modes/policies x 20,000 encounters =
960,000 encounters. Every primary encounter resolved before the 1,000-round
guard. One of 20,000 runs in the most obstructed output-only control reached
the guard (0.005%); its median and p90 are conditional on observed completion.
The guard is not a rule or a successful resolution.

The shared runner was extended with neutral-default contextual and mitigation
inputs. All prior unprotected results reproduce byte-for-byte. Protected
results also reproduce exactly. Deterministic checks verify net pooling,
matching mitigation, nonmatching own complications, preparation disruption,
and all ordinary rolls at Rating 20 failing to exceed mitigation 2. First-shot
enumeration omits less than 2e-12 probability in the repeated-01 tail.

Monte Carlo percentages near 50% have approximately +/-0.7 percentage points
of sampling uncertainty at 20,000 trials. Minor policy differences are not
decisive. Round counts include a final partial round.

Run `lens-protected-guide-encounter-test-v0.1.cjs` with Node and argument
`20000`. Complete configurations and results are in the adjacent `.results.json`.

## Recommendation

Close this protection/pacing pass without proposing a universal damage floor,
larger Capacity, or a new Effect threshold. The existing tools substantially
alter the high-output result and preserve meaningful protection. They do not
promise steady attrition from every permitted low-output approach.

Retain individual equipment and contextual placements as provisional. Whether
an exposed expert gunfight should be this decisive, and which protection is
normally available, remain Campaign Profile calibration questions. The tested
values demonstrate available behavior, not a universal armor or cover table.
