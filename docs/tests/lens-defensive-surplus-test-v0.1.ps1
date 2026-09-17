$ErrorActionPreference = 'Stop'
function Assert-Equal($Actual, $Expected, [string]$Name) {
    if ($Actual -ne $Expected) { throw "$Name : expected $Expected, got $Actual" }
}
function Get-Effects([int]$Rating, [int]$Roll) {
    if ($Roll -gt $Rating) { return 0 }
    return 1 + [int][math]::Floor(($Rating-$Roll)/10)
}
function Get-Exchange([int]$Offense, [int]$Defense) {
    $matched = [math]::Min($Offense,$Defense)
    [pscustomobject]@{
        Matched=$matched
        OffensiveRemainder=$Offense-$matched
        DefensiveSurplus=$Defense-$matched
    }
}
$fixtures = @(
    @{Name='Defense exceeds offense'; A=3; D=5; AR=0; DS=2},
    @{Name='Offense exceeds defense'; A=5; D=3; AR=2; DS=0},
    @{Name='Equal output'; A=3; D=3; AR=0; DS=0},
    @{Name='Attack fails'; A=0; D=5; AR=0; DS=5},
    @{Name='Defense fails'; A=4; D=0; AR=4; DS=0},
    @{Name='Both fail'; A=0; D=0; AR=0; DS=0},
    @{Name='Large 01 defense'; A=4; D=13; AR=0; DS=9},
    @{Name='Small incoming reflected source'; A=1; D=10; AR=0; DS=9}
)
foreach ($f in $fixtures) {
    $x = Get-Exchange $f.A $f.D
    Assert-Equal $x.OffensiveRemainder $f.AR $f.Name
    Assert-Equal $x.DefensiveSurplus $f.DS $f.Name
    Assert-Equal ($x.Matched+$x.OffensiveRemainder) $f.A 'Offensive accounting'
    Assert-Equal ($x.Matched+$x.DefensiveSurplus) $f.D 'Defensive accounting'
}

$rows = foreach ($pair in @(@(80,80),@(20,80),@(80,20),@(160,160))) {
    $surplusCount=0; $totalSurplus=0; $tenPlus=0
    foreach ($aRoll in 2..98) {
        foreach ($dRoll in 2..98) {
            $x = Get-Exchange (Get-Effects $pair[0] $aRoll) (Get-Effects $pair[1] $dRoll)
            if ($x.DefensiveSurplus -gt 0) { $surplusCount++; $totalSurplus += $x.DefensiveSurplus }
            if ($x.DefensiveSurplus -ge 10) { $tenPlus++ }
            if ($x.OffensiveRemainder -gt 0 -and $x.DefensiveSurplus -gt 0) { throw 'Both sides have surplus.' }
        }
    }
    [pscustomobject]@{
        AttackDefenseRatings="$($pair[0])/$($pair[1])"
        DefenseSurplusPct=[math]::Round(100*$surplusCount/9409,2)
        MeanSurplusWhenPositive=[math]::Round($totalSurplus/$surplusCount,3)
        MeanSurplusPerExchange=[math]::Round($totalSurplus/9409,3)
        ThreeUnchangedExchangesExpectedSurplus=[math]::Round(3*$totalSurplus/9409,3)
        TenPlusSurplusPct=[math]::Round(100*$tenPlus/9409,2)
    }
}
Assert-Equal ((Get-Exchange 2 5).DefensiveSurplus * 3) 9 'Three eligible reactions, no accumulation cap assumed'
[pscustomobject]@{
    Status='Diagnostic only. Ordinary 02-98 pairs; surplus is arithmetic potential, not automatic applied harm or permission.'
    FixtureCount=$fixtures.Count
    OrdinaryPairs=37636
    Rows=$rows
} | ConvertTo-Json -Depth 4
