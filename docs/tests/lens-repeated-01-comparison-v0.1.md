# Repeated 01: Literal and Hundred-Point Continuations

Status: Completed historical comparison. Neither original candidate was adopted.
The user subsequently supplied and accepted distance-from-100 subtraction with
repeated01 continuation, now recorded in the baseline and terminology reference.

## Subsequent Adopted Rule

Start from initial1. For every continuation die, subtract100 minus its value,
with00 read as100. An additional01 therefore subtracts99 and continues;
02-00 ends the sequence. Lower rolls remain better without a special conversion
of additional01 into100. Examples:01,06 gives -93;01,01,06 gives -192.

Keep the Expression and its multipliers unchanged and apply normal success and
Effect handling. An additional00 contributes zero and does not start a failure
chain. At Rating0, initial01 followed directly by00 leaves adjusted1 and fails;
eligibility for continuation does not itself guarantee a successful final result.
The paid reroll follows the complete result and replaces the whole sequence.

Verification checked all100 additional faces at six Ratings for lower-is-better
ordering, plus the two worked examples:602 checks. This is not an updated
probability distribution for the adopted infinite continuation. The old means
below compare the superseded candidates only. No continuation cap was added.

## Candidates

Both candidates begin with the initial 1 and subtract further rolls. On any
additional 01, continue rolling. End on 02-00, subtracting that terminal die's
ordinary value of 2-100. Only the treatment of an additional 01 differs:

- Literal: subtract 1 and continue.
- Hundred-point: subtract 100 and continue.

The initial 01 remains 1 in both. The hundred-point candidate introduces one
explicit special-face convention; it does not change every natural1 into100.
An additional00 is terminal value100, not a failure or a switch to the adverse
sequence. Neither candidate has a fixed continuation count in this comparison.

The Expression, Scale, permission, and normal Effect formula remain unchanged.
Use permitted, uncertain, unopposed probes. Rating0 remains eligible as already
adopted. No paid reroll strategy or mandatory roll for Automatic action is added.

## Same Sequences

With Final Expression80 and terminal roll50:

| Sequence | Literal adjusted roll | Literal Effects | Hundred-point adjusted roll | Hundred-point Effects |
|---|---:|---:|---:|---:|
| 01, 50 | -49 | 13 | -49 | 13 |
| 01, 01, 50 | -50 | 14 | -149 | 23 |
| 01, 01, 01, 50 | -51 | 14 | -249 | 33 |
| 01, 01, 01, 01, 50 | -52 | 14 | -349 | 43 |

Literal continuation can cross a ten-point threshold, but each additional01
usually does not. The extra roll can still be valuable compared with stopping
on a low additional01; it simply does not provide a large increment for each
rare repeat. Hundred-point continuation adds exactly ten Effect Levels for
each additional01 when compared with the same terminal die.

Thus literal continuation is mathematically coherent and simpler about face
values. Hundred-point continuation better mirrors the escalating magnitude
of the accepted adverse00 chain. It is not an assertion of exact symmetry of
all success and failure outcomes: their base results and Effect formulas differ.

## Frequency and Mean Output

Before paid-reroll decisions, both candidates have the same prefix odds:

- Initial01 followed by another01: 1 in10,000 of initial roll sequences.
- Three consecutive initial01s: 1 in1,000,000.
- Given an initial01, the next die continues on01 with probability1%.
- Expected additional dice after initial01: 1/0.99, approximately1.010101.

The prefix odds include longer chains; they are not probabilities of ending
immediately afterward. These checks assume fair independent dice.

Rounded mean generated Effects conditional on initial01:

| Rating | Approved one-die control | Literal continuation | Hundred-point continuation |
|---:|---:|---:|---:|
| 0 | 5.50 | 5.55 | 5.65 |
| 20 | 7.50 | 7.55 | 7.65 |
| 40 | 9.50 | 9.55 | 9.65 |
| 80 | 13.50 | 13.55 | 13.65 |
| 160 | 21.50 | 21.55 | 21.65 |
| 320 | 37.50 | 37.55 | 37.65 |

Small changes in means must not hide the large difference in the exceptional
sequence itself. At Rating80 and conditional on at least one additional01,
the corresponding means are approximately13.65 and23.65. The hundred-point
candidate is a deliberately much larger rare windfall, not an ordinary bonus.

Existing mitigation, conservation, applicability, and magnitude constraints
still govern what those Effects can accomplish. Neither candidate supplies
an unsupported permission or dictates a world-changing outcome solely from
the face pattern. The already-approved paid replacement rule concerns the
complete result; no new paid retry entitlement is created by continuation.

## Recommendation and Decision Boundary

Recommend the hundred-point interpretation for the intended rare escalating
success: each additional01 subtracts100 and continues; terminal02-00 subtracts
its normal value and ends the sequence. This gives repeated01 a meaningful
positive counterpart to repeated00, at the cost of one explicit face-value rule.

If preserving literal printed values matters more than a large escalating
windfall, literal continuation works. The comparison is complete; choosing
between those experiences requires the user, not another arithmetic pass.

## Verification

`lens-repeated-01-comparison-v0.1.ps1` enumerates zero through six additional01s
and all99 terminal faces at six Ratings: 4,158 paired cases and12,493 checks.
The unenumerated conditional probability is1e-14, not zero. Weighted means are
not renormalized; their omitted positive tails are explicitly bounded. The
hundred-point mean is also checked against its analytic geometric expression.
Finite enumeration is a numerical method, not a proposed continuation cap.

Checks cover candidate ordering, equality without repeats, ten-Effect increments,
probability mass, analytic raw-total means, and the worked example. No baseline
or terminology rule was changed by this comparison.
