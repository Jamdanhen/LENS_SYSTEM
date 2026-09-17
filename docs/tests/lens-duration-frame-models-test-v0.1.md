# Duration Increment Frame Models

Date: 2026-09-13
Status: Exploratory comparison; no duration model adopted.

## Question

Can one duration progression support personal, voyage, and divine undertakings
without tying all persistence to seconds or letting scene description grant
greater capability?

The prior three-ladder test is a comparison reference, not an adopted ladder.
This test uses six seconds only as a personal baseline fixture. Three seconds
remains available. All models preserve the existing distinction between natural
continuation, active sustaining, and imposed independent persistence.

## Three Models

### 1. Universal Fixed Time

Every effect uses the same six-second starting reference and exact x10 steps.
Different capability is represented by existing Expressions and permissions.

Strength: one table and no ambiguity when characters interact. The same effect
has the same duration challenge regardless of scene.

Cost: a year remains D8 for this duration-only fixture. Larger narrative frames
do not change the time reference. Higher capability can still overcome higher
Difficulty; this is not a mathematical failure, but it does not implement the
user's desired rescaling of time units.

### 2. Scene-Relative Time

One increment changes with the current resolution frame: six seconds in a
personal scene, an hour during a voyage, or a year during an era-level scene.

Strength: little arithmetic and immediate adaptation to the pace of narration.

Failure case: an unchanged ordinary ward lasting an hour shifts from D4 in a
brief scene to D1 in a voyage scene. A voyage ward becomes harder when boarding
combat begins. This unqualified model changes capability with presentation.
It also leaves already-resolved expiration vulnerable to reinterpretation.

Scene duration can describe the scope of a test, but should not alone determine
how much independent persistence an effect can establish.

### 3. Established Time Reference

The Campaign Profile supplies the default increment. A relevant, established
permission or Lens can supply a different temporal reference within its actual
scope. The reference describes the effect's operating capability, not the
length of the current scene or how powerful its owner sounds.

Use the same 1 / 10 / 100 / 1,000 progression within that reference. Identify
the intended elapsed duration before resolving; changing scenes does not
recalculate a completed result. This need not add a new purchased rating or
an individual duration statistic to every power. Most effects use the Profile
default; departures need an established reason in the existing package.

Strength: preserves a shared engine while allowing genuinely different time
frames. A long-duration ward works during a brief fight without shrinking its
reference; an ordinary illusion does not gain years because a god uses it.

Cost: a longer increment is a real capability benefit. The permission/package
comparison must recognize it. This test does not price that benefit or claim
that equal Difficulty across different references means equal absolute power.

## Numeric Fixture

| Step | Increments | Six-second reference | Hour reference | Year reference |
| --- | --- | --- | --- | --- |
| D1 | 1 | 6 seconds | 1 hour | 1 year |
| D2 | 10 | 1 minute | 10 hours | 10 years |
| D3 | 100 | 10 minutes | 100 hours | 100 years |
| D4 | 1,000 | 100 minutes | 1,000 hours | 1,000 years |

These frame values are examples, not adopted definitions of personal, voyage,
or divine Scale. There is no numeric mapping from existing Scale Rank to the
time reference in this proposal. Range and duration are independent requirements:
long range alone supplies no temporal reference.

Choose the first sufficient reference only for this diagnostic. A shorter
declared span remains possible; selecting a band does not require the effect
to last the full reference. No overage or rounding policy is adopted.

| Attempt | Fixed | Scene-relative | Established reference |
| --- | --- | --- | --- |
| Ordinary ward for an hour in a brief scene | D4 | D4 | D4 |
| Same ward in a voyage scene | D4 | D1 | D4 |
| Hour-reference ward for an hour during boarding combat | D4 | D4 | D1 |
| Year-reference blessing for one year in an era scene | D8 | D1 | D1 |
| Same blessing during a brief audience | D8 | D8 | D1 |
| Personal-reference illusion for a year in an era scene | D8 | D1 | D8 |
| Hour-reference ward requested for one year | D8 | D5 | D5 |

The god's ordinary illusion is permitted to attempt extended duration in this
fixture; its actual permission does not supply a different time reference. If
Access instead prohibits that duration, no arithmetic opens it.

At an unchanged pre-Difficulty Expression of 160, D1 succeeds 99%, D4 33%,
D5 20%, and D8 4%. Thus the scene-relative model can change the same request
from 33% to 99% merely by changing presentation. The established-reference
model also changes capability substantially when a larger reference is granted,
but makes that difference an explicit permission/package issue.

This isolates duration as the sole varying challenge. It does not decide how
duration combines with range, area, opposition, or other requirements, and does
not establish whole-character equivalence at different Scales.

## Fictional Checks

These are rule-consistency walkthroughs, not empirical playtesting.

- Brief divine action: an instantaneous flash has no added duration contribution,
  regardless of its available temporal reference. Larger permission does not
  force a longer result or a slower action.
- Travel: a vessel taking a year to arrive does not automatically impose a year
  of independent power persistence. A continuing protective envelope might;
  natural travel, active propulsion, and an instantaneous transit are assessed
  through what each actually requires.
- Scene transition: a completed hour-long ward retains its established endpoint
  when a voyage becomes boarding combat. Neither free extension nor shrinkage.
- Natural aftermath: a fire burning for days through fuel does not purchase
  independent magical duration. The reference does not supersede that rule.
- Mixed contributors: an hour-reference effect and a six-second-reference effect
  can interact. Their actual resolved durations, not matching D labels, determine
  how long necessary support remains. One does not lend its duration unit to the
  other merely by cooperating. An actual duration-enhancing contribution remains
  possible under existing permission and dependency rules; surplus conversion
  is not settled here.
- Permanent result: a thousand years is not indefinite. No finite multiplier
  grants no inherent expiration. Natural lasting changes are still distinct from
  maintaining an imposed manifestation forever.

An automatic character-Scale-to-time conversion was also considered and set
aside conceptually: it couples persistence to overall magnitude even when the
effect supplies no temporal capability. A separate purchasable time rating could
make that explicit, but adds a layer before the simpler Profile/Lens approach
has demonstrated a need for it. Neither alternative was numerically validated.

## Recommendation

Retain Model 3 as the leading experimental model: an established time reference
and a common increment progression. Use the Profile default unless an applicable
Lens or permission establishes otherwise. Compare larger references as meaningful
capability, not free unit conversion. Keep exact x10 as the clean test progression,
without adopting its starting unit or final duration bands yet.

The real next decision is whether Profile/Lens-defined temporal references are
the intended architecture. If accepted for continued testing, compare an ordinary
ward and a long-duration ward within one Profile to establish what the latter's
permission must state. Do not begin a new temporal purchase system by implication.

## Verification

`lens-duration-frame-models-test-v0.1.cjs` executed successfully. Seven scenarios
were calculated under all three models. Ninety scene-invariance checks confirm
the candidate reference selection remains tied to the effect across scenes.
Additional assertions check exact progression, boundaries, instantaneous and
infinite handling, selected Difficulty results, and fixed expiration examples.
Assertions validate the implementation of each hypothesis, not its adoption or
its complete game balance.
