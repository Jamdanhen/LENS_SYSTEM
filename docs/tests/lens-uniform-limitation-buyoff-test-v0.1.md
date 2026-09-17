# Uniform Limitation Buyoff Comparison

Date: 2026-09-15
Status: test completed; repayment procedure pending adoption.

Subsequent decision, 2026-09-15: adopted as working buyoff, with the explicit
caveat that full removal and every partial easing must each make narrative
sense. The report below preserves the original test and recommendation. See
`docs/design/lens-uniform-holt-pricing-adoption-v0.1.md` for the current rule.
Story grants, conversion, replacement restrictions, and refunds remain open.

## Question And Candidate

Under adopted 20-point HOLT Access and Axis purchases, test permanent removal
or easing of a limitation by paying the increase in the value of affected
purchases already held. Credit amounts already paid, including prior buyoff
payments. Do not charge unaffected purchases or hypothetical future ranks.
Future purchases use the newly agreed limitation reduction.

This assumes the fiction and applicable HOLD allow permanent change. Satisfying
a condition temporarily, including waiting for an allowed time window, is not
buyoff. Non-negotiable restrictions are not removed by paying points.

The GM reassesses the combined remaining burden. Do not subtract a named
restriction's alleged percentage from a stack of independent discounts.
No particular fictional restriction is assigned a percentage by this test.

## Results

The companion CJS passed 2,805 before/after transitions and 11,220 staged
paths, plus explicit mixed-history and one-Axis scope checks. All tested
payments are nonnegative integers. Staged and immediate removal have the
same total price for the same purchases and final state; repeated settlement
after full payment costs zero.

| Existing purchases | Change | Additional payment |
| --- | --- | ---: |
| Access only | 20% reduction to none | 4 |
| Access + one Axis 5 | 20% reduction to none | 24 |
| Access + one Axis 5 | 20% reduction to 10% | 12 |
| Access + one Axis 10 | 50% reduction to 20% | 66 |
| Access + five Axes 5 | 20% reduction to none | 104 |

Plain example: Access plus five ranks costs 96 with an agreed 20% whole-package
reduction, compared with 120 unrestricted. Complete removal costs 24. Easing
the reduction to 10% costs 12 now; removing the rest later costs another 12
if no further development intervenes.

Mixed history: those six purchases initially cost 96. After the 12-point
partial buyoff, five new ranks at the 10%-reduced unit price cost 90. The
character has paid 198. Full removal then costs 22, reaching the unrestricted
220 total. The original 12-point repayment is credited, not charged again.

One-Axis restriction: five ranks changing from a 50% reduction to 20% require
30 additional points. Full-price Access and five full-price ranks of another
Axis remain unaffected; their 120-point combined price is not revisited.

The previous acquisition-only approach would collect only 4 from the character
who paid 96 for Access and Axis 5. That leaves unrestricted capability for
100 instead of 120. A deliberate retained saving could be another policy, but
it would not be repayment of the actual affected purchase savings.

## Assessment

Recommend paying the difference for affected purchases already held, with all
prior payments credited. This preserves the same final price for the same
capability regardless of whether the restriction is removed at once or in
stages. It requires retaining paid-value information for affected Access and
Axis development, not necessarily an itemized log of every rank.

This is a substantive policy: past restricted play does not create a permanent
discount after voluntary paid removal. The character benefited from earlier
affordability while restricted, and repayment buys the newly broadened use.
That rationale needs user acceptance, not just a passing arithmetic check.

Large developed packages can require substantial repayment: the five-Axis
example costs 104. Easing can remain partial when narratively possible, but
this test does not authorize unsecured debt, future-point spending, or removal
before eligibility and payment are resolved.

Still unresolved: story-granted Access or ranks without a paid basis, legacy
conversion, automatic refunds, stronger-limit compensation, replacement with
different restrictions, and extreme-discount eligibility. Existing characters,
prices, awards, and balances have not been changed. The baseline buyoff rule
remains unresolved pending the user's decision.
