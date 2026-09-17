$ErrorActionPreference = 'Stop'
$checks = 0
function Get-RemainingFactor([decimal]$Reduction) {
    [math]::Max([decimal]0, [decimal]1 - $Reduction)
}
[decimal[]]$totals = 0, 0.5, 0.9, 1, 1.1, 1.3, 1.5, 2
$rows = foreach ($base in @([decimal]20, [decimal]60, [decimal]120, [decimal]200)) {
    foreach ($r in @([decimal]1, [decimal]1.5, [decimal]2)) {
        $previous = $base * $r
        foreach ($total in $totals) {
            $factor = Get-RemainingFactor $total
            $raw = $base * $r * $factor
            if ($factor -lt 0 -or $raw -lt 0) { throw 'Negative result' }
            if ($raw -gt $previous) { throw 'Increasing penalty improved result' }
            if ($total -lt 1 -and $factor -ne 1 - $total) { throw 'Subthreshold changed' }
            if ($total -ge 1 -and $factor -ne 0) { throw 'Floor failed' }
            $checks += 4
            $previous = $raw
            [pscustomobject]@{ Base=$base; Resonance=$r; Reduction=$total; Factor=$factor; Rating=[math]::Floor($raw) }
        }
    }
}
# Reassess actual applicable Lenses; never replace their sum with a capped stored burden.
[decimal[]]$sources = 0.6, 0.5, 0.2
$total = ($sources | Measure-Object -Sum).Sum
$remaining = [decimal]$total - [decimal]0.2
$afterRemoval = Get-RemainingFactor $remaining
$incorrectDiscard = Get-RemainingFactor ([decimal]1 - [decimal]0.2)
if ($afterRemoval -ne 0 -or $incorrectDiscard -ne [decimal]0.2) { throw 'Excess preservation' }
$checks++
if ((Get-RemainingFactor ([decimal]$total - [decimal]0.5)) -ne [decimal]0.2) { throw 'Restored function' }
$checks++
$sumForward = [decimal]0.6 + [decimal]0.5 + [decimal]0.2
$sumReverse = [decimal]0.2 + [decimal]0.5 + [decimal]0.6
if ((Get-RemainingFactor $sumForward) -ne (Get-RemainingFactor $sumReverse)) { throw 'Order dependence' }
$checks++
if ([math]::Floor(60 * [decimal]0.75 * (Get-RemainingFactor ([decimal]0.5))) -ne 22) { throw 'Separate Function Band' }
$checks++
$adjusted = 1 - (100 - 6)
$effectsAtZero = 1 + [math]::Floor((0 - $adjusted) / 10)
if ($adjusted -ne -93 -or $effectsAtZero -ne 10) { throw 'Existing 01 rule' }
$checks++
if ((1 - (100 - 100)) -le 0) { throw '01 then 00 must still fail at zero' }
$checks++
[pscustomobject]@{
    Status='Candidate floor tested, not adopted'
    Cases=$rows.Count; Checks=$checks
    Reference60=@($rows | Where-Object { $_.Base -eq 60 -and $_.Resonance -eq 1 })
    Sources=$sources; InitialReduction=$total
    RemovePointTwo=@{ Reduction=$remaining; Factor=$afterRemoval }
    RemovePointFive=@{ Reduction=([decimal]$total - [decimal]0.5); Factor=(Get-RemainingFactor ([decimal]$total - [decimal]0.5)) }
    ZeroRating01Then06=@{ AdjustedRoll=$adjusted; GeneratedEffects=$effectsAtZero }
    Limits='No netting of pools, new Load track, contribution ceiling, Access closure, or probability simulation. Existing paid boost cannot multiply a zero factor into positive effectiveness.'
} | ConvertTo-Json -Depth 5
