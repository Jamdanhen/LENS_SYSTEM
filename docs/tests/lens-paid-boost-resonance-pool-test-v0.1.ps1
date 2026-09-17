$ErrorActionPreference = 'Stop'
$checks = 0
function Measure-Rating([decimal]$Raw) {
    $rating = [int][math]::Floor($Raw)
    $wins = 0; $effects = 0
    foreach ($roll in 1..100) {
        if ($roll -le 98 -and $roll -le $rating) {
            $wins++
            $effects += 1+[math]::Floor(($rating-$roll)/10)
        }
    }
    [pscustomobject]@{ Rating=$rating; SuccessPercent=$wins; MeanGeneratedEffects=$effects/100 }
}
# R is an already-assessed pool fixture; this does not price its sources.
# D is one fixed, distinct applicable factor, not a new Dissonance aggregation rule.
$rows = foreach ($base in @([decimal]20,[decimal]60,[decimal]120,[decimal]40.9)) {
    foreach ($r in @([decimal]1,[decimal]1.1,[decimal]1.25,[decimal]1.5,[decimal]2)) {
        foreach ($d in @([decimal]1,[decimal]0.75,[decimal]0.5)) {
            $before = $base*$r*$d
            $addPool = $r+[decimal]0.2
            $multiplyPool = $r*[decimal]1.2
            $addRaw = $base*$addPool*$d
            $multiplyRaw = $base*$multiplyPool*$d
            if ($multiplyRaw -ne $before*[decimal]1.2) { throw 'Twenty-percent continuity failed' }
            if ($addRaw-$before -ne $base*$d*[decimal]0.2) { throw 'Additive contribution failed' }
            if ($multiplyRaw -lt $addRaw -or $addRaw -lt $before) { throw 'Ordering failed' }
            if ($r -eq 1 -and $addRaw -ne $multiplyRaw) { throw 'Isolated control failed' }
            $checks += 4
            [pscustomobject]@{
                Base=$base; ExistingResonance=$r; FixedDissonance=$d
                Before=(Measure-Rating $before)
                AddPool=$addPool; AddRaw=$addRaw; AddRelativeGain=($addRaw/$before-1)
                Add=(Measure-Rating $addRaw)
                MultiplyPool=$multiplyPool; MultiplyRaw=$multiplyRaw
                MultiplyRelativeGain=($multiplyRaw/$before-1)
                Multiply=(Measure-Rating $multiplyRaw)
            }
        }
    }
}
$fixture = $rows | Where-Object { $_.Base -eq 60 -and $_.ExistingResonance -eq 1.5 -and $_.FixedDissonance -eq 1 }
if ($fixture.Before.Rating -ne 90 -or $fixture.Add.Rating -ne 102 -or $fixture.Multiply.Rating -ne 108) { throw 'Reference comparison failed' }
$checks++
$rounding = $rows | Where-Object { $_.Base -eq 40.9 -and $_.ExistingResonance -eq 1 -and $_.FixedDissonance -eq 1 }
if ($rounding.Multiply.Rating -ne 49) { throw 'Final-only rounding failed' }
$checks++
[pscustomobject]@{
    Status='Completed arithmetic comparison; no pool arithmetic adopted'
    Cases=$rows.Count; Checks=$checks; Rows=$rows
    Limits='Uncertain unopposed probes, 01-98 ordinary-success convention; special outcomes not defined. No new Difficulty, opposed combat, permission, pricing, pool-source valuation, or Dissonance aggregation rule.'
} | ConvertTo-Json -Depth 5
