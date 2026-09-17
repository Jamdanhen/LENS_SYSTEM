$ErrorActionPreference = 'Stop'
[decimal[]]$steps = 0..10 | ForEach-Object { [decimal]$_ / 10 }
[decimal[]]$oldAnchors = 0, 0.10, 0.25, 0.50, 0.75, 0.90
$checks = 0
$rows = foreach ($base in @([decimal]20, [decimal]60, [decimal]120, [decimal]200)) {
    foreach ($step in $steps) {
        $help = $base * (1 + $step)
        $hinder = $base * (1 - $step)
        if ($help - $base -ne $base * $step) { throw 'Helpful delta' }
        if ($base - $hinder -ne $base * $step) { throw 'Obstructive delta' }
        if ($step -eq 1 -and ($help -ne 2 * $base -or $hinder -ne 0)) { throw 'Endpoint' }
        $checks += 3
        $helpRating = [math]::Floor($help)
        $hinderRating = [math]::Floor($hinder)
        [pscustomobject]@{
            Base = $base; Contribution = $step; Help = $helpRating; Hinder = $hinderRating
            HelpEffectsOn30 = if ($helpRating -ge 30) { 1 + [math]::Floor(($helpRating - 30) / 10) } else { 0 }
            HinderEffectsOn30 = if ($hinderRating -ge 30) { 1 + [math]::Floor(($hinderRating - 30) / 10) } else { 0 }
        }
    }
}
$representation = foreach ($anchor in $oldAnchors) {
    $distances = $steps | ForEach-Object { [math]::Abs($_ - $anchor) }
    $distance = ($distances | Measure-Object -Minimum).Minimum
    if ($distance -gt [decimal]0.05) { throw 'Anchor distance' }
    $checks++
    [pscustomobject]@{
        PreviousAnchor = $anchor
        NearestTenths = @($steps | Where-Object { [math]::Abs($_ - $anchor) -eq $distance })
        Difference = $distance
        RatingDifferenceAt200 = 200 * $distance
    }
}
# Preserve established non-tenth contributions; do not quantize the completed pool.
$r = 1 + [decimal]0.25 + [decimal]0.2 + [decimal]0.1
$d = 1 - [decimal]0.25 - [decimal]0.2
if ($r -ne [decimal]1.55 -or $d -ne [decimal]0.55) { throw 'Established values changed' }
if ([math]::Floor(60 * $r * $d) -ne 51) { throw 'Final-only floor' }
$checks += 2
$endpointRoll = 1 - (100 - 6)
if ($endpointRoll -ne -93 -or $endpointRoll -gt 0) { throw 'Permitted zero-rating continuation' }
$checks++
$stackedD = 1 - [decimal]0.6 - [decimal]0.5
if ($stackedD -ne [decimal](-0.1)) { throw 'Overfull pool flag' }
$checks++
[pscustomobject]@{
    Cases = $rows.Count; Checks = $checks
    Reference60 = @($rows | Where-Object { $_.Base -eq 60 })
    OldAnchorComparison = $representation
    ExistingValueControl = @{ Resonance = $r; Dissonance = $d; FinalRating = 51 }
    ZeroRatingPermitted01Then06 = $endpointRoll
    UnresolvedOverfullDissonance = $stackedD
    Scope = 'Isolated contextual increments with fixed noncontextual factors. No success-probability model, valuation adoption, Access override, automatic preparation accrual, or pool floor.'
} | ConvertTo-Json -Depth 5
