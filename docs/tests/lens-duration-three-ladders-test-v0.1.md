# Duration: Three Candidate Ladders

Date: 2026-09-13
Status: Tested candidates; no ladder adopted.

## Objective

Compare exact tenfold duration growth starting at three seconds and six seconds
with familiar time references for permitted independent persistence. Preserve
natural continuation and active sustaining as already distinguished.

Instantaneous application has no added duration modifier. This does not make
the manifestation automatically successful. The references below describe
independent persistence, not automatic repeated harm or freedom from Access.

## References

| Duration step | Three-second x10 | Six-second x10 | Familiar candidate |
| --- | --- | --- | --- |
| D1 | 3 seconds | 6 seconds | 6 seconds |
| D2 | 30 seconds | 1 minute | 1 minute |
| D3 | 5 minutes | 10 minutes | 10 minutes |
| D4 | 50 minutes | 1 hour 40 minutes | 1 hour |
| D5 | 8 hours 20 minutes | 16 hours 40 minutes | 1 day |
| D6 | About 3.47 days | About 6.94 days | 1 week |
| D7 | About 34.72 days | About 69.44 days | 30 days |
| D8 | About 347.22 days | About 1.90 years | 1 year |
| D9 | About 9.51 years | About 19.03 years | 10 years |
| D10 | About 95.13 years | About 190.26 years | 100 years |

Long exact-ladder entries are rounded for display only. The calculation uses
seconds, a 30-day month reference, and a 365-day year reference. These are test
fixtures, not adopted calendar rules. Each reference is a fixed duration, not
a random duration within a band. Indefinite persistence is not a finite entry.

## Equal-Request Comparison

For diagnostic comparison only, choose the first reference sufficient for the
requested duration. This strict lookup does not adopt a gameplay overage rule.

| Requested duration | Three-second | Six-second | Familiar |
| --- | --- | --- | --- |
| 3 seconds | D1 | D1 | D1 |
| 6 seconds | D2 | D1 | D1 |
| 30 seconds | D2 | D2 | D2 |
| 1 minute | D3 | D2 | D2 |
| 5 minutes | D3 | D3 | D3 |
| 10 minutes | D4 | D3 | D3 |
| 1 hour | D5 | D4 | D4 |
| 1 day | D6 | D6 | D5 |
| 1 week | D7 | D7 | D6 |
| 30 days | D7 | D7 | D7 |
| 1 year | D9 | D8 | D8 |

The six-second D6 reference is only 80 minutes short of a week. Its strict
week result above is an assumption-sensitive boundary, not a recommendation
to penalize such a small narrative overage. Familiar references state the
intended convenient boundary directly.

## Probability Probe

Hold the complete pre-Difficulty Expression and permitted manifestation fixed.
Duration is the sole varying challenge in this fixture; no new rule for adding
or multiplying multiple challenge components is assumed.

Use the existing curve: floor(raw Expression x 0.98 x 0.6^(D - 1)). Natural 01
succeeds on a permitted attempt, natural 00 fails, and 99 is ordinary. At a raw
Expression of 160, the following success percentages result:

| Requested duration | Three-second | Six-second | Familiar |
| --- | --- | --- | --- |
| 1 minute | 56% | 94% | 94% |
| 1 hour | 20% | 33% | 33% |
| 1 day | 12% | 12% | 20% |
| 1 week | 7% | 7% | 12% |

Changing the time references changes capability at meaningful story durations,
not merely display labels. This probe measures success, not the full distribution
of continuation Effects, complications, or surplus duration purchases.

## Tradeoffs And Recommendation

- Three seconds gives one round its own first reference and preserves exact x10
  growth, but common minute/hour requests arrive at higher Difficulty steps.
- Six seconds preserves exact x10 growth and gives especially readable first
  three references. It is the strongest regular mathematical control.
- Familiar intervals are easiest to declare and remember and put a day at D5,
  matching the user's earlier candidate. Their jumps are deliberately uneven.

The familiar successive ratios are 10, 10, 6, 24, 7, approximately 4.29,
approximately 12.17, 10, and 10. An hour-to-day step therefore buys much more
relative duration than a ten-minute-to-hour step for the same Difficulty change.

Recommend the familiar ladder as the leading player-facing candidate, not as
proof of universal balance. Its references serve narrative spans rather than
equal time ratios. Keep the six-second exact ladder as the comparison control.
No ladder is adopted by this test. Indefinite persistence, duration extension
through surplus Effects, and combination with other challenge components remain
unresolved. The earlier proposed D5 indefinite reference was challenged by the
user and is not the current recommendation.

## Verification

Companion script: `lens-duration-three-ladders-test-v0.1.cjs`.

Executed successfully with Node. Assertions cover increasing references, exact
x10 growth, the twofold relationship between exact ladders, instant and beyond-
table handling, reference boundaries, and selected equal-request comparisons.
Thirty raw-Expression/Difficulty cases (80, 160, 320 across D1-D10) verify success
percentages against enumerated percentile outcomes.
