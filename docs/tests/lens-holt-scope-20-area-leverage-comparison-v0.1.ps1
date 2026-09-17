$ErrorActionPreference = 'Stop'

$script:Checks = 0
function Assert-Equal($Actual, $Expected, [string]$Label) {
    if ($Actual -ne $Expected) {
        throw "$Label expected $Expected, got $Actual"
    }
    $script:Checks++
}

function Get-ScopeRow([string]$Name, [int]$OriginalAreas, [int]$LeverageAreas) {
    if ($OriginalAreas -lt 0 -or $OriginalAreas -gt 20 -or
        $LeverageAreas -lt 0 -or $LeverageAreas -gt 5) {
        throw 'Scope outside the twenty original and five Leverage areas.'
    }
    $total = $OriginalAreas + $LeverageAreas
    [pscustomobject]@{
        Name = $Name
        OriginalAreas = $OriginalAreas
        LeverageAreas = $LeverageAreas
        TotalAreas = $total
        OriginalTwentyOnly = 5 * $OriginalAreas
        ExtendedTwentyReference = 5 * $total
        NormalizedTwentyFive = 4 * $total
        ExtendedButCappedAt100 = [Math]::Min(100, 5 * $total)
    }
}

$states = 0
for ($original = 0; $original -le 20; $original++) {
    for ($leverage = 0; $leverage -le 5; $leverage++) {
        $row = Get-ScopeRow 'Count combination' $original $leverage
        Assert-Equal ($row.ExtendedTwentyReference * 4) ($row.NormalizedTwentyFive * 5) 'Rescaling identity'
        Assert-Equal $row.ExtendedTwentyReference (5 * $original + 5 * $leverage) 'Additivity'
        Assert-Equal $row.OriginalTwentyOnly (5 * $original) 'Exclusion control'
        if ($leverage -lt 5) {
            $next = Get-ScopeRow 'Next Leverage area' $original ($leverage + 1)
            Assert-Equal ($next.ExtendedTwentyReference - $row.ExtendedTwentyReference) 5 'Extended marginal area'
            Assert-Equal ($next.NormalizedTwentyFive - $row.NormalizedTwentyFive) 4 'Normalized marginal area'
        }
        $states++
    }
}

$rows = @(
    (Get-ScopeRow 'One original Attribute family' 5 0)
    (Get-ScopeRow 'Physical two-family illustration' 10 0)
    (Get-ScopeRow 'Four original families' 20 0)
    (Get-ScopeRow 'Leverage-only illustration' 0 5)
    (Get-ScopeRow 'Mixed five-area illustration' 3 2)
    (Get-ScopeRow 'Original twenty plus one Leverage area' 20 1)
    (Get-ScopeRow 'All twenty-five areas' 20 5)
)

Assert-Equal $states 126 'Complete count grid'
Assert-Equal $rows[1].ExtendedTwentyReference 50 'Original physical reference'
Assert-Equal $rows[3].OriginalTwentyOnly 0 'Leverage exclusion exposes missing valuation'
Assert-Equal $rows[6].ExtendedTwentyReference 125 'Extended full scope'
Assert-Equal $rows[6].NormalizedTwentyFive 100 'Normalized full scope'
Assert-Equal $rows[5].ExtendedButCappedAt100 $rows[2].ExtendedButCappedAt100 'Cap hides added coverage'
Assert-Equal $rows[4].ExtendedTwentyReference $rows[3].ExtendedTwentyReference 'Same count across families'

[pscustomobject]@{
    Status = 'Arithmetic experiment only; no pricing rule adopted'
    Units = 'Reference units, not XP, Rank modifiers, or Condition Capacity'
    CountCombinations = $states
    AssertionsPassed = $script:Checks
    Rows = $rows
    Findings = @(
        'Five units per area survives if twenty areas remains the 100-unit reference and twenty-five may total 125.'
        'Four units per area instead makes all twenty-five total 100; that alternative is not assumed accepted.'
        'The two inclusive formulas differ only by a uniform factor of 1.25.'
        'Ignoring Leverage leaves Leverage-only scope unpriced, not proved worthless.'
        'Capping the extended formula at 100 makes added areas beyond twenty numerically free.'
        'Ten physical areas cost half the twenty-area reference, but two-fifths of all twenty-five.'
    )
} | ConvertTo-Json -Depth 6
