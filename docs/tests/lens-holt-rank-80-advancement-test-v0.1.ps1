$ErrorActionPreference = 'Stop'
$holtCost = 80
$axisCost = 35
$award = 25
$checks = 0

function Get-DevelopmentCost($StartHolt, $EndHolt, $StartAxes, $EndAxes) {
    if ($StartAxes.Count -ne $EndAxes.Count) { throw 'Mismatched Axis lists' }
    if ($StartHolt -lt 1 -or $EndHolt -gt 10 -or $EndHolt -lt $StartHolt) {
        throw 'Invalid HOLT advancement'
    }
    $axisRanks = 0
    for ($i = 0; $i -lt $StartAxes.Count; $i++) {
        if ($StartAxes[$i] -lt 0 -or $StartAxes[$i] -gt $StartHolt -or
            $EndAxes[$i] -lt $StartAxes[$i] -or $EndAxes[$i] -gt $EndHolt) {
            throw 'Invalid Axis advancement or parent cap'
        }
        $axisRanks += $EndAxes[$i] - $StartAxes[$i]
    }
    ($EndHolt - $StartHolt) * $holtCost + $axisRanks * $axisCost
}

$cases = @(
    @{ Name='First Axis after acquisition'; H0=1; H1=1; A0=@(0); A1=@(1); Expected=35 },
    @{ Name='Axis below ceiling'; H0=5; H1=5; A0=@(2); A1=@(3); Expected=35 },
    @{ Name='Ceiling only'; H0=3; H1=4; A0=@(3); A1=@(3); Expected=80 },
    @{ Name='One capped Axis'; H0=3; H1=4; A0=@(3); A1=@(4); Expected=115 },
    @{ Name='Three capped Axes'; H0=3; H1=4; A0=@(3,3,3); A1=@(4,4,4); Expected=185 },
    @{ Name='Five capped Axes'; H0=3; H1=4; A0=@(3,3,3,3,3); A1=@(4,4,4,4,4); Expected=255 },
    @{ Name='New HOLT to Rank 5 and one Axis 5'; H0=1; H1=5; A0=@(0); A1=@(5); Expected=495 },
    @{ Name='New HOLT to Rank 10 and one Axis 10'; H0=1; H1=10; A0=@(0); A1=@(10); Expected=1070 },
    @{ Name='New HOLT to Rank 10 and three Axes 10'; H0=1; H1=10; A0=@(0,0,0); A1=@(10,10,10); Expected=1770 }
)
$rows = foreach ($case in $cases) {
    $cost = Get-DevelopmentCost $case.H0 $case.H1 $case.A0 $case.A1
    if ($cost -ne $case.Expected) { throw "Cost mismatch: $($case.Name)" }
    $checks++
    [pscustomobject]@{
        Case=$case.Name; Points=$cost
        SessionsFromZero=[math]::Ceiling($cost / $award)
    }
}

# Check the recurring ceiling cost at every supported starting Rank and breadth.
foreach ($rank in 1..9) {
    foreach ($count in @(1,3,5,20)) {
        $before = @(for ($i=0; $i -lt $count; $i++) { $rank })
        $after = @(for ($i=0; $i -lt $count; $i++) { $rank+1 })
        $cost = Get-DevelopmentCost $rank ($rank+1) $before $after
        if ($cost -ne 80+35*$count) { throw 'Flat advancement mismatch' }
        $checks++
    }
}
$rejected = $false
try { $null = Get-DevelopmentCost 3 3 @(3) @(4) } catch { $rejected = $true }
if (-not $rejected) { throw 'Parent cap was not enforced' }
$checks++

[pscustomobject]@{
    Status='Cost and parent-cap test only; no initial acquisition price'
    Checks=$checks; HOLTPerAddedRank=$holtCost; CandidateAxisPerRank=$axisCost
    SessionReference=$award; Rows=@($rows)
} | ConvertTo-Json -Depth 5
