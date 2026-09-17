# Workshop Stock and Output Test

Date: 2026-09-06
Status: User-requested exploratory test; richer workshop provision proposed,
not adopted. No crafting, income, or restocking subsystem created.

## User Feedback and Objective

The user challenged comparing a workshop only with twenty-five finished
ordinary equipment packages. A productive facility also has inventory,
installed equipment, usable premises, and potential future output. The user
suggested capacity for at least ten package equivalents before restocking.

Test that suggestion against the 5,000 workshop candidate with B = 200.
Assets 5 provides 5,000 additional funds under the current working allowance.
The free personal package remains separate.

Reference: `lens-three-provision-price-scale-test-v0.1.md`.
That earlier workshop included materials for only one ordinary job. The
stocked operation below is a proposed expansion of its contents, not a claim
that ten-job stock had already been adopted or priced.

## Test A: Ready Inventory

An illustrative decomposition of the same purchase allowance:

```text
Facility, installed equipment, and premises arrangement: 3,000
Ready inventory at purchase/reference value:              2,000
Total:                                                    5,000

2,000 / 200 = ten package equivalents of ready goods
```

This split is a test control, not an independently appraised building or tool
price. It shows that the proposed inventory can coexist arithmetically with a
substantial fixed setup. Ownership of land or the building is not inferred;
the premises arrangement follows whatever the provision actually grants.

Once ready goods are sold, consumed, or transferred, the stock is depleted;
the facility and installed equipment remain. No production time is required
to deliver goods that were already finished. Sale proceeds depend on actual
terms and are not automatically guaranteed at the reference value.

## Test B: Productive Inventory

Keep the same 3,000 fixed setup and 2,000 stock allocation, but make the stock
appropriate raw materials rather than ready goods. These are alternative
stock configurations; never count both from the same 2,000.

Let f be raw-material cost divided by the reference value of finished goods.

```text
Potential finished-goods value = 2,000 / f
Package-equivalent output = (2,000 / f) / 200
```

| Raw-material fraction | Potential finished value | Package equivalents |
|---:|---:|---:|
| 75% | 2,666.67 | 13.33 |
| 50% | 4,000 | 20 |
| 40% | 5,000 | 25 |
| One third | 6,000 | 30 |

The percentages are sensitivity controls, not economic assumptions adopted
for LENS. They assume appropriate materials, successful completion, and no
material loss. Labor, time, operating expenses, sale prices, and demand are
not included in the conversion and therefore no profit is calculated.

### Bounded Peer Check

Pathfinder 1e's ordinary Craft procedure charges one third of an item's price
for raw materials. It separately resolves progress and possible material
loss. Under that comparison, 2,000 in suitable materials can support goods
with 6,000 listed value before replenishment, if successfully completed.
This is a peer cost convention, not a real-world manufacturing estimate or
an adopted LENS conversion rule.

Source: https://legacy.aonprd.com/coreRulebook/skills/craft.html

## Test C: Work Required to Meet the User's Target

| Finished-output target | Reference value | Materials at 50% | Materials at one third |
|---:|---:|---:|---:|
| 10 package equivalents | 2,000 | 1,000 | 666.67 |
| 20 package equivalents | 4,000 | 2,000 | 1,333.33 |
| 25 package equivalents | 5,000 | 2,500 | 1,666.67 |

Within these controls, ten equivalents before restocking is feasible without
committing the entire workshop price to inventory. Twenty or twenty-five is
also possible under some input-cost assumptions. This establishes room in the
trial budget, not a universal guaranteed quantity from every workshop.

All calculations were executed in JavaScript; inverse conversion back to
the original stock cost was verified within 1e-7. Tables are rounded only
after calculation.

## Narrative and Mechanical Checks

- Package equivalents compare value, not universal manufacturing permission.
  A workshop produces goods appropriate to its actual trade and facilities;
  it need not manufacture every component of a mixed adventuring loadout.
- Stock determines how much material-supported work can be attempted before
  replenishment. It does not determine units per day or month.
- The Character's relevant capability, Task, Field, and other applicable
  Lenses still supply the work. Facility ownership does not supply expertise.
- Production adds work to materials; it does not duplicate those materials
  alongside the finished goods or automatically grant full retail proceeds.
- Restocking allows further output while facilities remain usable. The first
  stock cycle is not a lifetime production cap on the workshop.
- Output worth 5,000 is not recovery of the whole 5,000 purchase cost as net
  profit. Inputs, work, operating costs, and actual sales remain relevant.
- No inventory per-component bookkeeping, crafting ratio, upkeep schedule,
  automatic Condition, or separate production Capacity is introduced here.

## Finding and Recommendation

The user's productive-stock interpretation strengthens the 5,000 candidate.
The comparison should be finished supplies now versus a stocked facility
that can support repeated future work, not finished supplies versus bare tools.

Recommend retaining 5,000 for testing a stocked productive workshop whose
initial supplies support at least ten ordinary package equivalents of
trade-appropriate completed output under ordinary working conditions. Exact
mixed stock contents and any higher output expectation remain Profile work.
This is a proposed provisioning guarantee, not ten free completed packages,
a fixed production rate, or guaranteed profitable sales.

The fixed 3,000/stock 2,000 split is an explanatory test, not a required split
for every workshop. It demonstrates coherence but does not independently
validate premises prices or construction-point balance.

Next decision: whether the five-Rank workshop provision should explicitly be
a stocked productive operation with this initial-output expectation, replacing
the earlier narrow materials-for-one-job description. Do not design a full
crafting or business-income procedure merely to answer this package question.
