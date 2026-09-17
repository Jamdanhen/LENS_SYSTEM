$ErrorActionPreference = 'Stop'
function Assert-Equal($Actual, $Expected, [string]$Label) {
    if ($Actual -ne $Expected) { throw "$Label : expected $Expected, got $Actual" }
}
function Get-Effects([int]$Rating, [int]$Roll) {
    if ($Roll -gt $Rating) { return 0 }
    return 1 + [math]::Floor(($Rating-$Roll)/10)
}
function Get-EffectTail([int]$Rating, [int]$RequiredEffects) {
    if ($RequiredEffects -le 0) { return 1.0 }
    $limit = $Rating - 10*($RequiredEffects-1)
    $probability = [math]::Max(0,[math]::Min(98,$limit)-1)/100
    $prefix = 0.01
    $repeats = 0
    # For n extra 01s followed by terminal r=02..00, adjusted roll is
    # r-99-99*n. Once all terminal faces qualify, the entire remaining
    # prefix qualifies, including all longer chains; no chain cap is imposed.
    while ($true) {
        $largestTerminal = $limit + 99 + 99*$repeats
        if ($largestTerminal -ge 100) { return $probability+$prefix }
        $count = [math]::Max(0,[math]::Min(100,$largestTerminal)-1)
        $probability += $prefix*$count/100
        $prefix *= 0.01
        $repeats++
    }
}
function Get-MedianExtra([int]$Rating) {
    $extra = 0
    while ((1-(Get-EffectTail $Rating ($extra+1))) -lt 0.5) { $extra++ }
    return $extra
}
$builds = @(
    @{ Name='Modest'; Ranks=@(5,5,5,5,0,0); ExpectedRaw=[decimal]16.875 },
    @{ Name='Highly trained'; Ranks=@(7,7,7,7,7,7); ExpectedRaw=[decimal]99.38999 },
    @{ Name='Peak'; Ranks=@(10,10,10,10,10,10); ExpectedRaw=[decimal]320 }
)
$faces = 0
$rows = foreach ($build in $builds) {
    $raw = [decimal]$build.Ranks[0]
    foreach ($rank in $build.Ranks[1..5]) { $raw *= 1+[decimal]$rank/10 }
    Assert-Equal $raw $build.ExpectedRaw 'Build product'
    $difficulty = [decimal]0.98
    foreach ($d in 1..4) {
        foreach ($n in @(1,2)) {
            $base = if ($n -eq 1) { 12 } else { 6 }
            $rating = [int][math]::Floor($raw*$difficulty/$n)
            $ordinary = @(foreach ($roll in 2..98) {
                $faces++
                $effects = Get-Effects $rating $roll
                if ($effects -gt 0) { $effects }
            })
            $bounds = $ordinary | Measure-Object -Minimum -Maximum
            $success = Get-EffectTail $rating 1
            if ([math]::Abs($success-[math]::Min($rating,98)/100) -gt 1e-12) { throw 'Success tail mismatch.' }
            $median = Get-MedianExtra $rating
            if ((1-(Get-EffectTail $rating ($median+1))) -lt 0.5) { throw 'Invalid median.' }
            if ($median -gt 0 -and (1-(Get-EffectTail $rating $median)) -ge 0.5) { throw 'Median not minimal.' }
            [pscustomobject]@{
                Build=$build.Name; Ranks=($build.Ranks -join '/'); Raw=$raw
                Difficulty=$d; DifficultyMultiplier=$difficulty
                Mode=$(if ($n -eq 1) { 'Movement only' } else { 'Push and attack' })
                Divisor=$n; BaseUnits=$base; FinalRating=$rating
                SuccessPercent=[math]::Round(100*$success,6)
                OrdinarySuccessfulMin=$(if ($ordinary.Count -gt 0) { $base+$bounds.Minimum } else { $null })
                OrdinarySuccessfulMax=$(if ($ordinary.Count -gt 0) { $base+$bounds.Maximum } else { $null })
                MedianTotal=$base+$median
                Reach18Percent=[math]::Round(100*(Get-EffectTail $rating (18-$base)),6)
                Reach24Percent=[math]::Round(100*(Get-EffectTail $rating (24-$base)),6)
                Reach30Percent=[math]::Round(100*(Get-EffectTail $rating (30-$base)),6)
                TotalAt01Then06=$base+(Get-Effects $rating (-93))
            }
        }
        $difficulty *= [decimal]0.6
    }
}
Assert-Equal $faces 2328 'Ordinary faces'
Assert-Equal (Get-Effects 16 16) 1 'Existing inclusive executable convention'
Assert-Equal (Get-MedianExtra 16) 0 'Low Rating median'
Assert-Equal (Get-MedianExtra 313) 27 'Peak D1 median'
Assert-Equal (Get-MedianExtra 188) 14 'Peak D2 median'
Assert-Equal (Get-Effects 313 (-93)) 41 '01 continuation fixture'
$rows | ConvertTo-Json -Depth 4
'PASS: 24 build/difficulty/mode cases, 2328 ordinary faces, exact continuation-tail and median checks.'
