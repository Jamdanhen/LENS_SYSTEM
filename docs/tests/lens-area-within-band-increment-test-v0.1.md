# Area Within-Band Increment Test v0.1

Status: User-authorized candidate test, 2026-09-12. Neither +5, +10, nor a
within-band expansion limit is adopted. Baseline and terminology are unchanged.

## Objective

Compare five and ten added area increments per additional Effect Level when
expansion is restricted to the attempted Difficulty band. Include declaring the
desired larger area at the outset as the necessary control.

## Controls

Candidate upper bounds 25 / 50 / 100 / 200 / 400 correspond to D1-D5 for this
test only. The one-unit ordinary baseline and initial area Difficulty remain
unresolved. All comparisons use the same permitted desired coverage, means,
timing, and circumstances; no opposition, paid spending, or disruption is added.

Raw Expressions 80 / 160 / 320 are numerical probes. Apply the current Difficulty
curve, floor only the Final Rating, and use baseline success plus complete
ten-point margin bands. Probability calculations preserve natural 01/00 and
repeated-01 continuation rules.

Three within-band expansions are tested: 30 to 50, 60 to 100, and 140 to 200.
Each start and target share the same Difficulty. A partial last increment is
allowed up to the band limit as a test assumption; this is not a new adopted
rounding or overflow rule.

## Probability Comparison

Probability of reaching the desired coverage before opposition:

| Raw Expression | Coverage | Declare desired coverage | Expand by +5 | Expand by +10 |
|---:|---|---:|---:|---:|
| 80 | 30 to 50 | 47% | 7% | 27% |
| 160 | 30 to 50 | 94% | 54% | 74% |
| 320 | 30 to 50 | 99% | 99% | 99% |
| 160 | 60 to 100 | 56% | 0.75% | 16% |
| 320 | 60 to 100 | 99% | 32% | 72% |
| 160 | 140 to 200 | 33% | 0.12% | 0.72% |
| 320 | 140 to 200 | 67% | 0.46% | 7% |

For every tested case, declaring the desired area initially is at least as
reliable as expanding toward it. It never requires spending additional output
for the same coverage. The result holds independently of the exact increment:
if Difficulty and circumstances are identical, requiring additional success
bands cannot improve the chance of accomplishing the same target.

## Same-Roll Output

Raw Expression 160, D2, Final Rating 94, completed ordinary roll 40:

```text
Generated output: six Effects, including baseline success.

Declare 50:
50 coverage, five additional Levels remain.

Declare 30, use +5:
Spend four additional Levels to reach 50.
One additional Level remains.

Declare 30, use +10:
Spend two additional Levels to reach 50.
Three additional Levels remain.
```

Even where all routes reach 99% success probability, declaring the desired
coverage directly preserves more output for whatever other applicable uses
are permitted. This test does not grant those uses or set their costs.

## Boundary Checks

- Starting at 45, one +5 or capped +10 reaches 50.
- Starting at 50, no amount of surplus crosses the proposed band limit.
- Starting at 30, arbitrarily large surplus still cannot cross 50.
- Areas 26 and 50 share D2 in this fixture; 51 moves to D3.

The cap prevents crossing by construction, not through a discovery about the
balance of five versus ten. It removes the earlier bypass but leaves expansion
an inferior route to coverage already available at the same Difficulty.

## Narrative Qualification

This does not mean a character should always affect the largest possible area.
Smaller intended coverage may avoid allies, limit destruction, or simply match
the objective. The direct-declaration control asks for the same desired final
area under the same circumstances, not indiscriminately larger attacks.

Adapting an established area after circumstances change could have separate
value, as could shaping it around particular targets. Those are not the static
coverage purchase tested here. This record invents no new price or free reaction
for either circumstance.

## Recommendation

Do not adopt either increment as a mandatory route for filling an attempted
Difficulty band. The previous within-band recommendation does not survive the
direct-declaration control as a useful coverage-purchasing rule.

Prefer successful accomplishment of the declared area at its assessed Difficulty,
subject to opposition and actual permission. Do not charge additional Levels
for coverage already available through that same declaration. Do not adopt
automatic cross-band growth as a replacement: the preceding scope-bypass test
demonstrated its separate problem.

Additional area shaping, precision, persistence, and other permitted refinements
remain possible design questions, not adopted substitute rewards. The current
comparison supplies no universal conversion or upper-limit rule for them.

## Verification

`lens-area-within-band-increment-test-v0.1.cjs` passed all assertions, including
1,764 ordinary outcome comparisons, exact probability thresholds with repeated
natural 01, same-roll remaining-output checks, and band-boundary fixtures.

This is an arithmetic and declared-scope comparison, not an encounter simulation
or a full account of dynamically changing coverage during play.
