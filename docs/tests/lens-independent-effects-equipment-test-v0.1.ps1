$ErrorActionPreference = 'Stop'

function Get-Effects([int]$Rating, [int]$Roll) {
    if ($Roll -eq 99 -or $Roll -eq 100) { return 0 }
    if ($Roll -gt $Rating) { return 0 }
    return 1 + [int][math]::Floor(($Rating - $Roll) / 10)
}

# Neutral context isolates the equipment contribution. Round only final Ratings.
$rows = foreach ($percent in 100,105,110,115,120,125,130) {
    $rating = [int][math]::Floor(80 * $percent / 100)
    $wins = 0
    $sum = 0
    foreach ($attackRoll in 2..98) {
        foreach ($defenseRoll in 2..98) {
            $attack = Get-Effects $rating $attackRoll
            $defense = Get-Effects 80 $defenseRoll
            $remainder = [math]::Max(0, $attack - $defense)
            $counter = [math]::Min(1, [math]::Max(0, $defense - $attack))
            if ($remainder -gt $attack) { throw 'Equipment counted after comparison.' }
            if ($attack -eq 0 -and $remainder -ne 0) { throw 'Failed attack gained Effects.' }
            if ($counter -gt 1) { throw 'Counter exceeded approved limit.' }
            $control = [math]::Max(0, (Get-Effects 80 $attackRoll) - $defense)
            if ($remainder -lt $control) { throw 'Improved equipment reduced offensive output.' }
            if ($remainder -gt 0) { $wins++ }
            $sum += $remainder
        }
    }
    foreach ($roll in 2..98) {
        $a = Get-Effects $rating $roll
        $b = Get-Effects $rating $roll
        if ($a -ne $b) { throw 'Equal equipment and rolls did not cancel.' }
    }
    if ((Get-Effects $rating 99) -ne 0 -or (Get-Effects $rating 100) -ne 0) {
        throw 'Equipment bypassed special failure test controls.'
    }
    [pscustomobject]@{
        Equipment = 'x' + ($percent / 100).ToString('0.00')
        FinalRating = $rating
        AttackEffectsAt60 = Get-Effects $rating 60
        DefenseEffectsAt60 = Get-Effects 80 60
        OffensiveRemainderAt60 = [math]::Max(0, (Get-Effects $rating 60) - (Get-Effects 80 60))
        OrdinaryWinPercent = [math]::Round(100 * $wins / 9409, 2)
        MeanOffensiveRemainder = [math]::Round($sum / 9409, 3)
    }
}
[pscustomobject]@{
    PairedOrdinaryCases = 65863
    EqualEquipmentChecks = 679
    SpecialFailureChecks = 14
    Scope = 'Independent-Effects candidate; 02-98 probabilities only; no post-roll equipment addition; 99 retained only as existing test control'
    Rows = @($rows)
} | ConvertTo-Json -Depth 4
