$ErrorActionPreference = 'Stop'
[decimal[]]$steps = 0, 0.10, 0.20, 0.25, 0.30, 0.50, 0.75, 0.90
$checks = 0
$rows = foreach ($base in @([decimal]20, [decimal]60, [decimal]120, [decimal]200)) {
    foreach ($r in @([decimal]1, [decimal]1.5)) {
        foreach ($d in @([decimal]1, [decimal]0.75)) {
            foreach ($step in $steps) {
                $before = $base * $r * $d
                $help = $base * ($r + $step) * $d
                $remainingD = $d - $step
                $hinder = $base * $r * $remainingD
                if ($help - $before -ne $base * $step * $d) { throw 'Resonance delta' }
                if ($before - $hinder -ne $base * $r * $step) { throw 'Dissonance delta' }
                if ($help -lt $before -or $hinder -gt $before) { throw 'Ordering' }
                $checks += 3
                [pscustomobject]@{
                    Base = $base; ExistingR = $r; ExistingD = $d; Contribution = $step
                    Before = $before; HelpRaw = $help; HelpRating = [math]::Floor($help)
                    RemainingD = $remainingD; HinderRaw = $hinder
                    HinderRating = if ($remainingD -ge 0) { [math]::Floor($hinder) } else { $null }
                    Boundary = if ($remainingD -lt 0) { 'Negative pool: unresolved, not clamped' }
                        elseif ($remainingD -eq 0) { 'Zero pool: preserve permission distinction' }
                        else { 'Positive pool' }
                }
            }
        }
    }
}
$reference = @($rows | Where-Object { $_.Base -eq 60 -and $_.ExistingR -eq 1 -and $_.ExistingD -eq 1 })
$expectedHelp = 60, 66, 72, 75, 78, 90, 105, 114
$expectedHinder = 60, 54, 48, 45, 42, 30, 15, 6
for ($i = 0; $i -lt $steps.Count; $i++) {
    if ($reference[$i].HelpRating -ne $expectedHelp[$i]) { throw 'Reference help' }
    if ($reference[$i].HinderRating -ne $expectedHinder[$i]) { throw 'Reference hindrance' }
    $checks += 2
}
# One ordinary rolled result shows Effect changes without inventing special-face probabilities.
$effectProbe = foreach ($row in $reference) {
    $roll = 30
    [pscustomobject]@{
        Contribution = $row.Contribution; Roll = $roll
        HelpEffects = if ($row.HelpRating -ge $roll) { 1 + [math]::Floor(($row.HelpRating - $roll) / 10) } else { 0 }
        HinderEffects = if ($row.HinderRating -ge $roll) { 1 + [math]::Floor(($row.HinderRating - $roll) / 10) } else { 0 }
    }
}
$symmetry = foreach ($step in $steps) {
    $combined = (1 + $step) * (1 - $step)
    if ($combined -ne 1 - $step * $step) { throw 'Separate pools' }
    $checks++
    [pscustomobject]@{ Contribution = $step; CombinedFactor = $combined }
}
[pscustomobject]@{
    Cases = $rows.Count; Checks = $checks
    ZeroPools = @($rows | Where-Object { $_.RemainingD -eq 0 }).Count
    NegativePools = @($rows | Where-Object { $_.RemainingD -lt 0 }).Count
    Reference = $reference; OrdinaryRollEffects = $effectProbe; EqualMagnitudePools = $symmetry
    Scope = 'Rating arithmetic only. B already includes fixed noncontextual factors. D magnitudes are subtractive reductions for this candidate test. No special-result distribution, new Difficulty, valuation adoption, pool floor, or ceiling.'
} | ConvertTo-Json -Depth 5
