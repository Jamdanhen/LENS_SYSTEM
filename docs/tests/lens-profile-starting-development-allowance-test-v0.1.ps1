$ErrorActionPreference = 'Stop'
$source = Get-Content (Join-Path $PSScriptRoot 'lens-concept-led-25-50-100-rebuild-test-v0.1.json') -Raw | ConvertFrom-Json
$base = $source.builds | Where-Object { $_.id -eq 'B' }
$baseSnapshot = $base | ConvertTo-Json -Depth 12
$costs = @{ attributes=120; derived=40; tasks=30; fields=20; specialties=10; precisions=10 }
$checks = 0

$cases = @(
    @{ Name='120 ordinary'; Budget=120; Changes=@(@{Layer='attributes';Name='Mobility';To=8}); Holts=@() },
    @{ Name='120 extraordinary'; Budget=120; Changes=@(@{Layer='specialties';Name='Arctic';To=7}); Holts=@(
        @{Name='Water Travel';Rank=1;Axes=@{Movement=1};Allowed=@('Movement')}
    ) },
    @{ Name='360 ordinary'; Budget=360; Changes=@(
        @{Layer='attributes';Name='Mobility';To=8},
        @{Layer='derived';Name='Coordination';To=8},
        @{Layer='derived';Name='Awareness';To=5},
        @{Layer='tasks';Name='Observation';To=8},
        @{Layer='fields';Name='Firearms';To=10},
        @{Layer='fields';Name='Logistics';To=5}
    ); Holts=@() },
    @{ Name='360 extraordinary'; Budget=360; Changes=@(); Holts=@(
        @{Name='Sea';Rank=3;Axes=@{Movement=3;Awareness=1};Allowed=@('Movement','Awareness','Control')}
    ) },
    @{ Name='720 ordinary'; Budget=720; Changes=@(
        @{Layer='attributes';Name='Mobility';To=9},
        @{Layer='attributes';Name='Psyche';To=6},
        @{Layer='derived';Name='Coordination';To=9},
        @{Layer='derived';Name='Awareness';To=6},
        @{Layer='derived';Name='Movement';To=5},
        @{Layer='tasks';Name='Discharge';To=10},
        @{Layer='fields';Name='Firearms';To=9}
    ); Holts=@() },
    @{ Name='720 extraordinary'; Budget=720; Changes=@(); Holts=@(
        @{Name='Sea';Rank=3;Axes=@{Movement=3;Awareness=1};Allowed=@('Movement','Awareness','Control')},
        @{Name='Strength';Rank=3;Axes=@{Strength=3;Stability=1};Allowed=@('Strength','Stability')}
    ) }
)

$rows = foreach ($case in $cases) {
    $character = $base | ConvertTo-Json -Depth 12 | ConvertFrom-Json
    # Base construction totals do not describe the additionally developed build.
    $character.PSObject.Properties.Remove('totals')
    $spent = 0
    $ledger = @()
    foreach ($change in $case.Changes) {
        if ($change.Layer -in @('specialties','precisions')) {
            $entry = $character.($change.Layer) | Where-Object { $_.name -eq $change.Name }
            if (-not $entry) { throw 'Missing existing training entry' }
            $old = $entry.rank
            $entry.rank = $change.To
        } else {
            $property = $character.($change.Layer).PSObject.Properties[$change.Name]
            if ($null -eq $property) { throw 'Missing existing entry' }
            $old = $property.Value
            $property.Value = $change.To
        }
        if ($change.To -lt $old -or $change.To -gt 10) { throw 'Invalid Rank increase' }
        $price = ($change.To-$old)*$costs[$change.Layer]
        $spent += $price
        $ledger += [pscustomobject]@{Purchase=$change.Name;From=$old;To=$change.To;Cost=$price}
        $checks++
    }
    foreach ($parent in $source.parents.PSObject.Properties) {
        foreach ($child in $parent.Value) {
            if ($character.derived.$child -gt $character.attributes.($parent.Name)) { throw 'Derived parent cap exceeded' }
            $checks++
        }
    }
    foreach ($holt in $case.Holts) {
        $axisSum = 0
        foreach ($axis in $holt.Axes.GetEnumerator()) {
            if ($axis.Value -gt $holt.Rank -or $axis.Value -lt 1 -or $axis.Name -notin $holt.Allowed) {
                throw 'Invalid Axis Rank or Access'
            }
            $axisSum += $axis.Value
            $checks++
        }
        $acquisition = 80
        $parentDevelopment = ($holt.Rank-1)*80
        $axisDevelopment = $axisSum*30
        $price = $acquisition+$parentDevelopment+$axisDevelopment
        $spent += $price
        $ledger += [pscustomobject]@{Purchase=$holt.Name;Rank=$holt.Rank;Axes=$holt.Axes;Acquisition=$acquisition;ParentDevelopment=$parentDevelopment;AxisDevelopment=$axisDevelopment;Cost=$price}
    }
    if ($spent -ne $case.Budget) { throw "Budget mismatch: $($case.Name) spent $spent" }
    $checks++
    [pscustomobject]@{Name=$case.Name;Allowance=$case.Budget;Spent=$spent;Remainder=$case.Budget-$spent;Ledger=$ledger;FinalOrdinaryCharacter=$character;Holts=$case.Holts}
}

# Buying restricted Themes cheaply cannot itself enforce a one-Theme profile.
$accessOnlyCount = [math]::Floor(120/20)
if ($accessOnlyCount -ne 6) { throw 'Access-only arithmetic mismatch' }
$checks++
if (($base | ConvertTo-Json -Depth 12) -ne $baseSnapshot) { throw 'Base character changed' }
$checks++
[pscustomobject]@{Status='Diagnostic allowances, not adopted Campaign Profiles';Checks=$checks;BaseBudgets=$source.budgets;SevereAccessOnlyPurchasesAt120=$accessOnlyCount;Builds=@($rows)} | ConvertTo-Json -Depth 15
