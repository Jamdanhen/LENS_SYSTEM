$ErrorActionPreference = 'Stop'

function Assert-Equal($Actual, $Expected, [string]$Label) {
    if ($Actual -ne $Expected) { throw "$Label : expected $Expected, got $Actual" }
}
function Test-Success([int]$Rating, [int]$Roll) {
    if ($Roll -eq 1) { return $true }
    if ($Roll -ge 99) { return $false }
    return $Roll -le $Rating
}
function Get-OrdinaryEffects([int]$Rating, [int]$Roll) {
    if ($Roll -lt 2 -or $Roll -gt 98) { throw 'Ordinary Effect probe only.' }
    if ($Roll -gt $Rating) { return 0 }
    return 1 + [math]::Floor(($Rating - $Roll) / 10)
}

$base = 6
$movement = @(
    [pscustomobject]@{ Model='Previous'; Attacks=1; Portions=1; Units=$base },
    [pscustomobject]@{ Model='Previous'; Attacks=0; Portions=2; Units=2*$base },
    [pscustomobject]@{ Model='Proposed'; Attacks=2; Portions=2; Units=2*$base },
    [pscustomobject]@{ Model='Proposed'; Attacks=1; Portions=3; Units=3*$base },
    [pscustomobject]@{ Model='Proposed'; Attacks=0; Portions=4; Units=4*$base }
)
foreach ($row in $movement) { Assert-Equal $row.Units ($base*$row.Portions) 'Movement accounting' }
$reach = foreach ($distance in @(6,12,18,24,30)) {
    foreach ($row in $movement) {
        [pscustomobject]@{ Distance=$distance; Model=$row.Model; Attacks=$row.Attacks; Reaches=($row.Units -ge $distance) }
    }
}
$pace = foreach ($seconds in @(3,4)) {
    foreach ($units in @(12,24)) {
        [pscustomobject]@{ Units=$units; Seconds=$seconds; UnitsPerSecond=$units/$seconds }
    }
}
$closing = foreach ($distance in @(6,12,18,24,30)) {
    $old = if ($distance -le 6) { 1 } elseif ($distance -le 12) { 0 } else { -1 }
    $new = if ($distance -le 6) { 2 } elseif ($distance -le 18) { 1 } elseif ($distance -le 24) { 0 } else { -1 }
    [pscustomobject]@{ DistanceToEngagement=$distance; PreviousMeleeAttacks=$old; ProposedMeleeAttacks=$new }
}
Assert-Equal $closing[1].ProposedMeleeAttacks 1 'Paired movement cannot precede both melee attacks'

# Complete initial-face enumeration. At these positive Ratings, every 01
# continuation succeeds; its unbounded Effect magnitude is not averaged here.
$attacks = foreach ($rating in @(40,80,120,160)) {
    foreach ($model in @('One full','Two divided','Two full')) {
        $n = if ($model -eq 'One full') { 1 } else { 2 }
        $eachRating = if ($model -eq 'Two divided') { [int]($rating/2) } else { $rating }
        $successfulExpressions = 0
        $anySuccess = 0
        $bothSuccess = 0
        foreach ($first in 1..100) {
            foreach ($second in 1..100) {
                $count = [int](Test-Success $eachRating $first)
                if ($n -eq 2) { $count += [int](Test-Success $eachRating $second) }
                $successfulExpressions += $count
                if ($count -gt 0) { $anySuccess++ }
                if ($count -eq 2) { $bothSuccess++ }
            }
        }
        $expected = $n * [math]::Min($eachRating,98)/100
        Assert-Equal ($successfulExpressions/10000) $expected 'Success enumeration'
        [pscustomobject]@{
            InputRating=$rating; Model=$model; EachRating=$eachRating
            ExpectedSuccesses=$successfulExpressions/10000
            AnySuccessPercent=$anySuccess/100
            BothSuccessPercent=$bothSuccess/100
            TotalOrdinaryEffectsAtRoll30=$n*(Get-OrdinaryEffects $eachRating 30)
        }
    }
}
Assert-Equal (Get-OrdinaryEffects 80 30) 6 'Full ordinary margin'
Assert-Equal (Get-OrdinaryEffects 40 30) 2 'Divided ordinary margin'
Assert-Equal (Test-Success 160 99) $false 'Natural 99'
Assert-Equal (Test-Success 160 100) $false 'Natural 00'
Assert-Equal (Test-Success 40 40) $true 'Existing executable tie convention'
[pscustomobject]@{ Movement=$movement; Reach=$reach; Closing=$closing; Pace=$pace; AttackProbes=$attacks } | ConvertTo-Json -Depth 5
'PASS: 5 movement allocations, 25 reach cases, 5 sequential closing cases, 4 pace cases, 120000 initial-roll pairs; no opposed-hit or damage simulation.'
