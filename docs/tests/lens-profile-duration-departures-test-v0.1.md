# Profile Duration And Lens Departures

Date: 2026-09-13
Status: Comparison completed; temporal-reference boundary adopted 2026-09-13.
Increment fixtures, the duration ladder, and package prices remain unadopted.

## User's Challenge

If a power can affect a voyage at a given Difficulty, why should it need a
higher Difficulty in a scene? For the same effect, elapsed duration, and actual
requirements, it should not. A change of narrative pacing is not a change of
capability. This comparison tests that conclusion inside one Campaign Profile.

## Controlled Fixture

The Profile's default duration increment is six seconds. An ordinary ward uses
that reference. An Enduring Ward Lens establishes a one-hour increment for its
ward manifestation. Both establish the same permitted protection, footprint,
range, creation method, and independent persistence. Their complete raw
Expressions are held equal. Only the temporal reference differs.

These values and the Lens name are illustrative. There is no added temporal
rating, purchase price, ritual requirement, voyage-only restriction, or forced
tradeoff. Exact x10 steps and strict first sufficient reference remain test
assumptions, not adopted duration rules.

The departure needs to identify the covered manifestation and its time reference.
That can be stated in its existing permission text, for example: "This ward uses
one hour as its duration increment." It does not require a second character stat.
Other actual conditions of the permission remain whatever the package establishes;
the test does not invent limitations to make the stronger ward appear equal.

## Same-Profile Results

| Intended duration | Ordinary ward | Enduring ward |
| --- | --- | --- |
| Instantaneous application | No added duration modifier | No added duration modifier |
| 6 seconds | D1 | D1 |
| 10 minutes | D3 | D1 |
| 1 hour | D4 | D1 |
| 10 hours | D5 | D2 |
| 1 day | D6 | D3 |

Every entry is unchanged in a voyage summary, a conversation, or combat when
the actual requirements are unchanged. Shorter use of a long-duration capability
is permitted; the larger increment does not require a minimum hour of output.
Instantaneous application remains a separate case, not a free manifestation.

At pre-Difficulty Expression 160, the one-hour ordinary ward has a 33% success
chance versus 99% for the enduring ward in this duration-only fixture. One day
gives 12% versus 56%. This confirms a substantial capability advantage, not merely
a different display unit. Equal capability in all other respects does not mean
equal package value. Pricing or other balancing provisions remain unresolved.

No rule for aggregating duration with range, area, or other challenge components
is adopted by these probabilities. They isolate the variable under examination.

## Application Walkthroughs

These are fictional consistency checks, not live encounter playtests.

### The Voyage Becomes A Fight

A ward is resolved for one hour. Boarding combat begins thirty minutes later.
Thirty minutes remain. The existing ward does not need recasting or a new
duration check simply because rounds are now being counted. Actual attacks may
oppose or disrupt it through existing rules; independent persistence does not
grant immunity or automatic repeated protection beyond its defined function.

### The Ward Is Created During The Fight

The same one-hour enduring ward uses the same D1 duration reference. Ordinary
action accounting still applies. Actual uncertainty, interference, opposition,
or changed scope can affect resolution, but combat itself does not switch the
ward back to six-second increments. No preparation requirement is invented.

### The Player Uses It For Six Seconds

The one-hour capability can supply the same ward for a shorter declared duration.
The test's D1 minimum gives both wards the same duration step for six seconds.
It neither charges more for short use nor adopts a fractional/negative Difficulty
reward. The distinction from truly instantaneous application remains.

### The Player Uses The Ward's Protection In An Unexpected Situation

If the defined protection genuinely covers the new danger, it works there with
its established temporal reference. A GM should not retroactively call it
"travel only" because the player found a combat use. If the player instead
requests a different protection, target scope, or harmful function, evaluate
that actual change. The ordinary permission rules determine whether it is the
same covered manifestation; the scene label does not decide.

### The Player Applies The Hour Reference To Another Power

An Enduring Ward permission covering the ward does not automatically extend an
unrelated illusion or attack. A Lens explicitly covering broader manifestations
could do so. Breadth must follow its established scope rather than a universal
ban or a universal grant. This comparison does not limit all duration departures
to individually named spells.

### More Time, Same Situation

Increasing the same enduring ward from one hour to ten hours changes its tested
duration step from D1 to D2 in every scene. Longer duration remains more demanding
across thresholds, without demanding a different Difficulty for every additional
second inside a band. Indefinite persistence is still outside the finite table.

## Recommendation

The player's objection is upheld. Recommend the following working boundary:

> Use the Profile's time increment unless the applicable Lens establishes another.
> That reference follows the permitted manifestation across scenes. Narrative
> pacing alone does not alter its duration Difficulty or a resolved expiration.

The user subsequently explicitly approved this boundary; it is recorded under
Duration Time Reference in the baseline and terminology reference. This leaves
real changes of circumstances fully relevant and preserves ordinary
Access, action accounting, opposition, and actual disruption. It does not adopt
the six-second/hour fixtures, final finite ladder, automatic temporal scaling,
or a package price. The next substantive decision is the duration progression
and its ordinary time reference, not another approval of the boundary.

## Verification

The companion `lens-profile-duration-departures-test-v0.1.cjs` executed with all
assertions passing. It checks six requests for two references, 36 scene-labelled
evaluations, expected Difficulty steps, shorter-use comparison, finite/infinite
handling, and an explicit expiration example. Scene invariance is by design;
those assertions verify faithful implementation, not empirical game balance.

Prior comparison: `lens-duration-frame-models-test-v0.1.md`.
