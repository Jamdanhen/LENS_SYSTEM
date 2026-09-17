# Assets Linear Five Allowance Test

Date: 2026-09-06
Status: Working allowance for continued construction testing following user agreement; not final construction doctrine.

## Control

After reviewing this test, the user agreed to continue with the recommendation
to keep x5 for the next construction pass. That adopts the allowance for
continued testing, not the peer item placements, limitation discounts, or
acquisition Magnitudes. The next comparison is recorded in
`lens-three-provision-price-scale-test-v0.1.md`.

The user selected the following candidate for testing after explicitly
separating the guaranteed starting package from additional funds:

```text
Additional funds = Profile starting-package value x 5 x Assets Rank
```

The free package is supplied separately. It is not added to any allowance
below and is not automatically converted into cash or sold in these tests.
The test does not change persistent Assets Rank, Expression multipliers,
existing equipment properties, HOLT rules, or upkeep procedures.

This supersedes the x1.33 curve as the active comparison candidate for this
lane, not as a retroactive edit to earlier test results or approved references.

Sources:
- `lens-assets-rank-purchasing-curve-test-v0.1.md`
- `lens-acquisition-price-scale-relationship-test-v0.1.md`
- `lens-assets-whole-provision-test-v0.1.md`
- `lens-concept-led-25-50-100-rebuild-test-v0.1.md`

## Allowance and Profile Translation

All values are additional funds. Profile baselines are illustrative and are
not claims about any published game's starting wealth.

| Rank | Extra package equivalents | B = 200 | B = 50,000 | B = 125,000 |
|---:|---:|---:|---:|---:|
| 0 | 0 | 0 | 0 | 0 |
| 1 | 5 | 1,000 | 250,000 | 625,000 |
| 2 | 10 | 2,000 | 500,000 | 1,250,000 |
| 3 | 15 | 3,000 | 750,000 | 1,875,000 |
| 5 | 25 | 5,000 | 1,250,000 | 3,125,000 |
| 10 | 50 | 10,000 | 2,500,000 | 6,250,000 |

Result: one multiplication rule, constant marginal purchasing value, and
unchanged normalized allowance across currencies. The starting-package value
is a Profile reference, not the price of each Character's personally selected
free loadout; otherwise two Characters in the same Profile and at the same
Assets Rank could receive different allowances merely through free-kit choice.

## Pooling Check

With B = 200, all of the following supply 10,000 additional funds:

```text
One Assets 10 Character
Two Assets 5 Characters
Five Assets 2 Characters
Ten Assets 1 Characters
```

This compares purchased Assets Ranks only, not total character-construction
cost or capabilities. Actual funds pool; cooperation and control must exist.
The participants' personal Expression ratings do not combine into Assets 10.
Free gear for multiple Characters is outside this comparison.

JavaScript assertions checked all integer pairs r,s >= 0 with r+s <= 10:
A(r+s) = A(r) + A(s). Endpoints and each Rank's 1,000 increment also passed.

## Concrete Catalogue Check

Use Pathfinder 1e prices only as an external purchasing-power control. These
are final listed prices, not unscaled LENS prices. No additional Scale
multiplier is applied to them, and no mechanical PF equipment bonus is imported.

| Independent purchase | Cost in gp | Minimum funded Rank | Funds remaining at that Rank |
|---|---:|---:|---:|
| Heavy combat-trained horse with military saddle, bit/bridle, and saddlebags | 326 | 1 | 674 |
| Full plate | 1,500 | 2 | 500 |
| Full plate plus the equipped horse above | 1,826 | 2 | 174 |
| Keelboat | 3,000 | 3 | 0 |
| Noble villa | 8,920 | 9 | 80 |
| Sailing ship | 10,000 | 10 | 0 |

The rows are alternatives, not a running shopping list. Crew, income,
supplies, and continued support are not assumed from purchase of a vessel.

Equipment source: https://legacy.aonprd.com/coreRulebook/equipment.html
The mount is 300 + 20 + 2 + 4 = 326 gp.
Property source: https://www.aonprd.com/Rules.aspx?ID=1295
The villa price is a completed-building purchase reference.

Result: low Ranks supply substantial material choice, while expensive personal
equipment still exceeds Rank 1. The unchanged peer catalogue also permits
significant infrastructure within the allowance. Thus the budget formula
alone does not put all large holdings beyond starting means. Doing so in LENS
requires establishing LENS acquisition prices and magnitude references, not
relabeling a fully priced peer building and charging Scale a second time.

This comparison does not preserve the old two-point ordinary mount or
three-point war-trained mount prices. Those were provisional whole-provision
references, not verified currency prices. No existing reference is edited here.

## Independent Acquisition-Scale Check

Reuse the explicitly unscaled 40 B acquisition fixture from the relationship
test. It is not a named property or a peer catalogue price.

| Magnitude | Final price at B = 200 | Rank 10 budget | Outcome |
|---|---:|---:|---|
| M1 | 8,000 | 10,000 | Fits; 2,000 remains |
| M2 | 12,800 | 10,000 | Short by 2,800 |
| M3 | 20,480 | 10,000 | Short by 10,480 |

The existing x1.6 magnitude candidate is used only on the acquisition price.
No buyer Scale, new permission gate, or extension beyond the Rank horizon is
introduced. Pooling, later resources, or a genuinely different purchase
arrangement can be evaluated through their actual contributions.

Result: acquisition magnitude can move purchases outside the starting
allowance. Assigning a specific holding's within-frame price or Magnitude
remains a separate calibration task.

## Existing Character Ranks

The saved concept-led rebuild has Assets 2 / 1 / 1 for the experienced local
shopkeeper, expedition security guide, and medical specialist respectively.

| Character | Unchanged Assets Rank | Extra package equivalents |
|---|---:|---:|
| Shopkeeper | 2 | 10 |
| Guide | 1 | 5 |
| Medical specialist | 1 | 5 |

Their existing contemporary concepts are not converted to fantasy. This
checks allowances, not completed shopping lists. A five-package allowance
does not independently prove access to or affordability of a clinic, shop,
or particular contemporary vehicle. That requires the actual Profile prices.

The former one-point-per-Rank allocation would provide only 2 / 1 / 1 ordinary
package equivalents. The new candidate is explicitly five times that narrow
equipment-equivalent benchmark; it is not a claim of five times every former
provision's economic value.

## Other Boundaries Checked

- Spending the allowance does not reduce persistent Assets Rank.
- Receiving starting funds does not grant recurring monthly income.
- This test does not award a fresh full allowance when Rank advances.
- Monetary value does not grant expertise, jurisdiction, or extraordinary
  permission. Existing Access rules still apply, without invented restrictions
  to preserve a preferred price result.
- Scale-adjusted prices must not be adjusted again for the same magnitude.
- No upkeep Difficulty, limitation discount, HOLT bonus, or asset Condition
  value is derived from this allowance alone.

## Conclusion and Next Decision

The candidate passes arithmetic, pooling, Profile-normalization, and isolated
acquisition-Scale checks. No cumulative calculation is required. The peer
probe exposes the main substantive consequence: even Assets 1 is a sizeable
material provision relative to the free starting package.

Recommend retaining the straight x5-per-Rank allowance for continued
construction testing if that generosity is intended. It is not proven balanced
against investment in other Derived Attributes. Next, calibrate a small set of
LENS acquisition references across personal equipment, a working facility,
and a larger holding, with stated contents and price-side Scale. Do not reopen
the curve merely because a peer catalogue uses different relative prices.
