$ErrorActionPreference = 'Stop'

function Assert-Equal($Actual, $Expected, [string]$Label) {
    if ($Actual -ne $Expected) { throw "$Label : expected $Expected, got $Actual" }
}
function Get-Band([int]$Load) {
    if ($Load -ge 10) { return 0 }
    if ($Load -ge 8) { return 0.25 }
    if ($Load -ge 6) { return 0.50 }
    if ($Load -ge 3) { return 0.75 }
    return 1.0
}

# Net delivered Load is an input AFTER resolution and mitigation, not damage
# inferred from an unopposed success or a newly invented defense formula.
function Invoke-DeliveredTrace([int]$Packet, [string]$Model) {
    $order = switch ($Model) {
        'One' { @('A','B') }
        'Two passes' { @('A','B','A','B') }
        'Two consecutive' { @('A','A','B','B') }
    }
    $loads = @{ A=0; B=0 }
    $counts = @{ A=0; B=0 }
    $events = [System.Collections.Generic.List[object]]::new()
    $round = 0
    $stopped = $false
    while (-not $stopped) {
        $round++
        if ($round -gt 10) { throw 'Unexpected trace length.' }
        foreach ($actor in $order) {
            $target = if ($actor -eq 'A') { 'B' } else { 'A' }
            $counts[$actor]++
            $band = Get-Band $loads[$actor]
            $loads[$target] += $Packet
            $events.Add([pscustomobject]@{
                Round=$round; Actor=$actor; ActionNumber=$counts[$actor]
                ActorLoad=$loads[$actor]; ActorBand=$band
                IllustrativeCurrentRating=[math]::Floor(80*$band)
                DeliveredLoad=$Packet; TargetLoad=$loads[$target]
                TargetBand=(Get-Band $loads[$target])
            })
            if ($loads[$target] -ge 10) { $stopped=$true; break }
        }
    }
    Assert-Equal $counts.A ([math]::Ceiling(10/$Packet)) 'Hits needed for function loss'
    [pscustomobject]@{
        Packet=$Packet; Model=$Model; Rounds=$round
        AActions=$counts.A; BActions=$counts.B
        TotalCompletedAttackResolutions=$events.Count
        AFinalLoad=$loads.A; BFinalLoad=$loads.B
        Events=$events.ToArray()
    }
}

$thresholds = foreach ($packet in @(1,2,3,5)) {
    $hits = [int][math]::Ceiling(10/$packet)
    [pscustomobject]@{
        NetLoadPerHit=$packet; HitsToFunctionLoss=$hits
        OneAttackRounds=$hits; TwoAttackRounds=[math]::Ceiling($hits/2)
    }
}
$traces = foreach ($packet in @(1,2,3,5)) {
    foreach ($model in @('One','Two passes','Two consecutive')) {
        Invoke-DeliveredTrace $packet $model
    }
}
foreach ($packet in @(1,2,3,5)) {
    $one = $traces | Where-Object { $_.Packet -eq $packet -and $_.Model -eq 'One' }
    $passes = $traces | Where-Object { $_.Packet -eq $packet -and $_.Model -eq 'Two passes' }
    Assert-Equal $passes.TotalCompletedAttackResolutions $one.TotalCompletedAttackResolutions 'Same conditional resolutions across passes'
    Assert-Equal $passes.AFinalLoad $one.AFinalLoad 'Same conditional return pressure across passes'
    Assert-Equal $passes.Rounds ([math]::Ceiling($one.Rounds/2)) 'Compressed round count'
}
$three = $traces | Where-Object { $_.Packet -eq 3 -and $_.Model -eq 'Two passes' }
Assert-Equal $three.Events[2].IllustrativeCurrentRating 60 'Second action uses current impairment'
Assert-Equal $three.Events[3].IllustrativeCurrentRating 40 'Second responder uses current impairment'
$fivePass = $traces | Where-Object { $_.Packet -eq 5 -and $_.Model -eq 'Two passes' }
$fiveTogether = $traces | Where-Object { $_.Packet -eq 5 -and $_.Model -eq 'Two consecutive' }
Assert-Equal $fivePass.BActions 1 'Response exists between two hits'
Assert-Equal $fiveTogether.BActions 0 'Consecutive hits prevent ordinary physical turn'
foreach ($pair in @(@(0,1.0),@(2,1.0),@(3,0.75),@(5,0.75),@(6,0.5),@(7,0.5),@(8,0.25),@(9,0.25),@(10,0),@(12,0))) {
    Assert-Equal (Get-Band $pair[0]) $pair[1] 'Capacity boundary'
}
[pscustomobject]@{ Thresholds=$thresholds; Traces=$traces } | ConvertTo-Json -Depth 7
'PASS: 4 packet sizes, 12 conditional duel traces, 10 band boundaries; current-rating and action-order assertions.'
