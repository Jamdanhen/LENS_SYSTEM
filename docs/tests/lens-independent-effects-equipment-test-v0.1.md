# Equipment Within Independent Effects

Date: 2026-09-10
Status: Completed bounded test within the independent-Effects candidate.

## User Correction

Equipment enters the final Expression before rolling. Compare the resulting
independent Effects; do not re-add equipment after comparison. The assistant's
proposed before/after equipment-enhancement comparison is withdrawn.

## Method and Results

The companion PowerShell script uses otherwise neutral pre-equipment Ratings
of 80. Attacking equipment varies across x1.00-x1.30; defending equipment stays
x1.00. Only the final Rating is floored. Each successful Expression generates
one baseline Effect plus complete ten-point successful Margin bands. Compare
independent Effects, preserving full cancellation and at most one eligible
defensive counter-effect. Arithmetic does not establish counter eligibility.

Both participants roll 60 in this concrete comparison:

| Attacking equipment | Final Rating | Attack Effects | Defense Effects | Offensive remainder |
| --- | ---: | ---: | ---: | ---: |
| x1.00 | 80 | 3 | 3 | 0 |
| x1.05 | 84 | 3 | 3 | 0 |
| x1.10 | 88 | 3 | 3 | 0 |
| x1.15 | 92 | 4 | 3 | 1 |
| x1.20 | 96 | 4 | 3 | 1 |
| x1.25 | 100 | 5 | 3 | 2 |
| x1.30 | 104 | 5 | 3 | 2 |

With x1.30 on both sides and the same roll, each generates five Effects: full
cancellation, with no equipment bonus remaining to apply again.

Passed 65,863 ordinary paired-roll cases, 679 equal-equipment/equal-roll
cancellation checks, and 14 special-failure checks. Assertions verify that
failed attacks produce no offensive remainder, opposition cannot increase
attacking output, improved attacking equipment cannot reduce offensive output
at unchanged rolls and defense, and counters never exceed one.

Across paired ordinary rolls, positive offensive remainder rises from 44.13%
at x1.00 to 67.63% at x1.30 against the unchanged defense. These probabilities
are conditional on faces 02-98, not complete encounter odds. Special-failure
checks retain 99 and 00 only as existing test controls; they do not adopt 99
policy or test continuation distributions.

Small equipment improvements may remain inside one Effect band for a given
roll, while improving outcomes across the roll range. No post-comparison
addition is necessary for equipment to matter.

## Boundary

This correction is recorded within the candidate, not as full-model adoption.
Older baseline passages describing distinct Effect Enhancement and mitigation
functions are not silently rewritten. This test uses no extra enhancement.
Matching mitigation remains preserved under the approved counter rule.
