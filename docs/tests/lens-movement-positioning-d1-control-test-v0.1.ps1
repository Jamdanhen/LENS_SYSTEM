$ErrorActionPreference = 'Stop'

function Get-Reach([int]$rating, [int]$distance) {
    if ($distance -le 6) {
        return [pscustomobject]@{ OrdinaryPercent=100; SpecialPercent=0; TotalPercent=100 }
    }
    $neededEffects = $distance - 6
    $threshold = $rating - 10 * ($neededEffects - 1)
    $ordinary = 0
    foreach ($roll in 2..98) {
        if ($roll -le $rating) {
            $effects = 1 + [math]::Floor(($rating - $roll) / 10)
            if (6 + $effects -ge $distance) { $ordinary++ }
        }
    }
    $formulaCount = [math]::Max(0, [math]::Min(98, $threshold) - 1)
    if ($ordinary -ne $formulaCount) { throw 'Threshold count differs from face enumeration.' }

    # Account for all initial-01 chains. Once every remaining continuation
    # succeeds, add that whole prefix mass rather than truncate the tail.
    [decimal]$prefix = 0.01
    [decimal]$special = 0
    $repeats = 0
    while ($true) {
        $terminalLimit = $threshold + 99 + 99 * $repeats
        if ($terminalLimit -ge 100) {
            $special += $prefix
            break
        }
        $terminalCount = [math]::Max(0, [math]::Min(100, $terminalLimit) - 1)
        $special += $prefix * $terminalCount / 100
        $prefix /= 100
        $repeats++
        if ($repeats -gt 10) { throw 'Unexpected threshold outside test scope.' }
    }
    [pscustomobject]@{
        OrdinaryPercent=$ordinary
        SpecialPercent=100 * $special
        TotalPercent=$ordinary + 100 * $special
    }
}

$builds = @(
    @{ Ranks=@(5,5,5,5,0,0); Label='Broad 5' },
    @{ Ranks=@(5,5,5,5,5,5); Label='All 5' },
    @{ Ranks=@(7,7,7,7,7,7); Label='All 7' },
    @{ Ranks=@(8,8,8,8,8,8); Label='All 8' },
    @{ Ranks=@(10,10,10,10,10,10); Label='All 10' }
)
$cases = 0
foreach ($build in $builds) {
    [decimal]$raw = $build.Ranks[0]
    foreach ($rank in $build.Ranks[1..5]) { $raw *= 1 + [decimal]$rank / 10 }
    foreach ($actions in @(1,2)) {
        $rating = [math]::Floor($raw * [decimal]0.98 / $actions)
        [decimal]$previous = 100
        foreach ($distance in @(6,12,20,30)) {
            $result = Get-Reach $rating $distance
            if ($result.TotalPercent -gt $previous) { throw 'Farther destination became easier to reach.' }
            $previous = $result.TotalPercent
            if ($distance -gt 6 -and $previous -gt 98) { throw 'Failure faces became successful pushes.' }
            [pscustomobject]@{
                Build=$build.Label; Actions=$actions; Rating=$rating; Distance=$distance
                OrdinaryPercent=$result.OrdinaryPercent
                SpecialPercent=$result.SpecialPercent
                ReachPercent=$result.TotalPercent
            } | ConvertTo-Json -Compress
            $cases++
        }
    }
}
if ((Get-Reach 156 20).TotalPercent -ne 26) { throw 'Twenty-unit attack approach fixture failed.' }
if ((Get-Reach 313 30).TotalPercent -ne 83) { throw 'Thirty-unit dedicated approach fixture failed.' }
if ((Get-Reach 156 30).TotalPercent -ne [decimal]0.25) { throw 'Thirty-unit exceptional approach fixture failed.' }
if ($cases -ne 40) { throw 'Unexpected case count.' }
'PASS: 40 build/action/distance cases; ordinary faces enumerated; complete initial-01 tail accounted for.'
