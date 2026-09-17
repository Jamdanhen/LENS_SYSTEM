# Independent-Effects Encounter Pacing

Date: 2026-09-10
Status: Completed numerical encounter test. No new rules adopted.

## Scope and Reproduction

Run `lens-independent-effects-encounter-pacing-v0.1.cjs` with Node and argument
`20000`. The script writes the adjacent `.results.json` with all metrics and
prints the same data. Fixed seed, mixed by encounter index and Rating pair;
23 configurations, 20,000 encounters each, 460,000 total. Policy comparisons use
the same seed scheme but changing actions changes draw consumption; these are
not identical future-roll counterfactuals. Percentages are simulation estimates,
not exact probabilities. At 20,000 encounters, a win percentage near 50% has
roughly a +/-0.7 percentage-point 95% Monte Carlo interval under the sampling
assumptions. Small policy differences should not be treated as decisive.

## Fixed Assumptions

- Two combatants, Physical Capacity 10. Loss of function ends the encounter;
  it is not automatic death. Both may lose function in the same exchange.
- Unimpaired Ratings of 80/80, 80/20 and a lower-end stress pair of 20/20.
  These are existing test Ratings, not asserted character-build classifications.
  Each actor uses its own base for attack, defense and recovery. Ratings already
  include the applicable pre-Band calculation; no new Difficulty is added.
- Apply current Function Bands immediately after the completed exchange, floor
  final Ratings, and never charge the same Condition again as Dissonance.
- One action per actor per round; open defensive reactions. Persistent initiative
  with each actor first in half the trials. No movement, multiple-action splits,
  armor mitigation, paid spending, surrender, retreats or additional Lenses.
- Both participants remain able to contest in close combat. Successful delivered
  attacks permit contact-based defensive counters. In this fixture, failed
  attacks miss without the contact needed for that counter. This is not a new
  universal restriction on counters against failed attacks.
- Offensive remainder becomes Wounded. Eligible capped counter output becomes
  Staggered. Neither name is a universal mandatory consequence of an attack.
- Recovery is a fictionally available one-action attempt to regain footing,
  removing matching Staggered only. Wounded is not healed. No passive Condition
  expiry is assumed during these short exchanges.
- In the main fixture, disastrous maneuvers cause distinct lost-footing
  complications: own00 severity becomes Staggered. A separate sensitivity test
  models an injurious mishap as Wounded instead. Neither mapping is a universal
  00 rule; non-Load narrative complications are not simulated.
- Full percentile runs include ordinary99, guaranteed01 success, and unbounded
  repeated01/00 continuations. Own00 severity is separate from attack Effects,
  not capped as a defensive counter. Ratings are fixed for both rolls within an
  exchange, then all its consequences apply before checking loss of function.
- A 500-round observation limit is a simulation guard, not a game rule. No run
  reached it. Reported round counts include the final, possibly partial round.

The recovery policy tries to recover whenever removing current Staggered could
restore a higher Function Band; otherwise it attacks. It is one deliberately
simple policy, not an optimal strategy or mandatory behavior. Mixed-policy runs
test each side using it against an opponent that continues attacking.

## Main Results

| Unimpaired Ratings | Policy on both sides | Median rounds | 90% resolved by round | Mean rounds | Rating-80 actor win rate against20 |
| --- | --- | ---: | ---: | ---: | ---: |
| 80/80 | Keep attacking | 4 | 7 | 4.18 | Not applicable |
| 80/80 | Recover when a Band can improve | 4 | 7 | 4.39 | Not applicable |
| 80/20 | Keep attacking | 3 | 6 | 3.56 | 96.79% |
| 80/20 | Recover when a Band can improve | 3 | 6 | 3.59 | 97.07% |
| 20/20 | Keep attacking | 14 | 34 | 16.63 | Not applicable |
| 20/20 | Recover when a Band can improve | 14 | 34 | 16.93 | Not applicable |

Equal80 starts split victories approximately evenly after averaging initiative.
Mixed-policy equal80 runs give the recovery-policy actor approximately 50.2%
and 50.6% wins depending on actor assignment. These do not demonstrate a robust
overall winning advantage for always following that recovery policy.

## Conditions and Counters

For equal80 keep-attacking encounters, mean additions across both combatants:

- Wounded from attacks: 11.640 levels.
- Staggered from counters: 1.468 levels.
- Separate00 complication levels: 1.235.

Counters account for 10.23% of all added levels in that fixture. A counter crosses
the loss-of-function threshold in 3.47% of encounters. Removing counter eligibility
raises mean duration from 4.18 to 4.62 rounds, with median still four and the
90th percentile rising from seven to eight. Counters matter without dominating.

For80/20, counters supply only about 2.2% of added levels; for20/20 about1.5%.
These figures depend on the stated contact opportunity, not a promise about all
forms of defense. Condition totals include over-threshold Effects and therefore
are not capped at ten merely because function has been lost.

## Recovery Tradeoff

Equal80 encounters with both using recovery average 0.827 recovery actions and
0.479 Staggered removed across both fighters. About37.93% of those recovery
attempts immediately improve a Function Band. Recovery is increasingly difficult
after Load has already reduced the Expression. At20/20 only about8.30% of recovery
attempts improve a Band under the same policy.

To isolate an actual decision, repeat the earlier injured state: actor A has
Wounded2 plus Staggered3, actor B is unhurt, both base80, A acts next. Compare A
attacking now against recovering once now; thereafter both keep attacking.

| First choice from that state | A wins | Median remaining rounds | 90% resolved by round |
| --- | ---: | ---: | ---: |
| Attack | 11.45% | 2 | 5 |
| Recover footing | 16.24% | 3 | 6 |

Recovery raises A's chance by approximately4.8 percentage points in this state.
It remains a disadvantaged fight, does not remove Wounded, and does not guarantee
restored function. That is evidence of a useful situational choice, not an optimal
policy across all states. No tested recovery policy produced an unresolved loop
within500 rounds; this is not proof against every possible recovery configuration.

## Lower-End Warning and Special-Result Sensitivity

At20/20, about85% of attacks leave no offensive remainder. With both actors
continuing to attack, 61.4% of terminal exchanges contain00. In61.0% of encounters,
the added00 complication is necessary for at least one actor to cross Capacity10
in that exchange. That is not automatically the only cause: earlier Conditions
and a simultaneous successful attack may also contribute.

At Final Rating20, even00 followed by01 gives completed101 and severity8.
Accumulated Load can make that enough to exhaust function. This explains why
low-rated fights often end through a mishap in the chosen Condition fixture.

An ordinary-only sensitivity control draws02-99, omitting both special faces.
It is a deliberately different distribution, not a proposed rules change:

| Ratings, both using recovery | Full percentile median / 90th | Ordinary-only median / 90th |
| --- | --- | --- |
| 80/80 | 4 / 7 | 4 / 8 |
| 80/20 | 3 / 6 | 3 / 5 |
| 20/20 | 14 / 34 | 38 / 71 |

The low-rated case is slow even without counter pressure; its faster full-dice
resolution is substantially dependent on exceptional results and complications.
This does not establish that every low-capability narrative exchange should
continue until loss of function, or that every00 imposes Capacity Load.

Changing own00 from recoverable Staggered to nonrecoverable-in-this-fight Wounded
in80/80 and80/20 recovery runs leaves the medians and90th percentiles unchanged.
That supports the main results at those Ratings, but does not model the full
range of legitimate equipment, Access or non-Load story consequences.

## Assessment and Next Decision

The tested80/80 and80/20 encounters support workable pacing: cancellation does
not stall them, superior capability remains decisive, counters add modest
pressure, and a specific recovery choice can improve survival prospects.

Do not call the entire range validated. Low-rated equal opponents produce slow
attrition and strong dependence on00-to-Condition consequences. Before changing
rules, identify whether Rating20 represents normal combat competence in actual
constructed Characters, an intentionally poor approach, or an over-penalized
Expression. The next useful check is that calibration, not an automatic new
minimum damage rule, special-result cap, or recovery bonus.

Source files are test artifacts only. No baseline, terminology, movement,
Condition valuation, counter eligibility or action rule was changed.
