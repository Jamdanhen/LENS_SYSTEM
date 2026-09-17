$ErrorActionPreference = 'Stop'
function Assert-Equal($Actual, $Expected, [string]$Name) {
    if ($Actual -ne $Expected) { throw "$Name : expected $Expected, got $Actual" }
}
function Get-Load($Character) { return $Character.Staggered + $Character.Wounded }
function Get-Band([int]$Load) {
    if ($Load -le 2) { return 1.0 }
    if ($Load -le 5) { return 0.75 }
    if ($Load -le 7) { return 0.5 }
    if ($Load -le 9) { return 0.25 }
    return 0.0
}
function Get-Rating($Character) {
    return [int][math]::Floor(80 * (Get-Band (Get-Load $Character)))
}
function Get-Effects([int]$Rating, [int]$Roll) {
    if ($Roll -gt $Rating) { return 0 }
    return 1 + [int][math]::Floor(($Rating-$Roll)/10)
}
function Get-Counter([int]$Offense, [int]$Defense, [int]$Limit) {
    return [math]::Min($Limit,[math]::Max(0,$Defense-$Offense))
}
function Invoke-Exchange([bool]$Surplus, [bool]$Recover, [int]$WoundMitigation, [string]$Name,
    [int]$CounterLimit=[int]::MaxValue, [int]$Rounds=2, [int]$RecoveryRound=2) {
    $actors = @{
        A=@{Staggered=0; Wounded=0}
        B=@{Staggered=0; Wounded=0}
    }
    $events = @(foreach ($round in 1..$Rounds) {
        if ($round % 2 -eq 1) {
            @{Round=$round; Actor='A'; Target='B'; Roll=50; Defense=20}
            @{Round=$round; Actor='B'; Target='A'; Roll=40; Defense=40}
        } else {
            @{Round=$round; Actor='A'; Target='B'; Roll=40; Defense=30}
            @{Round=$round; Actor='B'; Target='A'; Roll=50; Defense=20}
        }
    })
    $trace = foreach ($e in $events) {
        $actor = $actors[$e.Actor]; $target = $actors[$e.Target]
        if ((Get-Load $actor) -ge 10 -or (Get-Load $target) -ge 10) { break }
        $ar = Get-Rating $actor; $dr = Get-Rating $target
        $ae = Get-Effects $ar $e.Roll
        $de = $null; $surplusAmount=0; $harm=0; $removed=0
        if ($Recover -and $e.Round -eq $RecoveryRound -and $e.Actor -eq 'A') {
            $removed = [math]::Min($actor.Staggered,$ae)
            $actor.Staggered -= $removed
            $activity = 'A recovers footing'
        } else {
            $de = Get-Effects $dr $e.Defense
            $harm = [math]::Max(0,$ae-$de-$WoundMitigation)
            $target.Wounded += $harm
            if ($Surplus) {
                $surplusAmount = Get-Counter $ae $de $CounterLimit
                $actor.Staggered += $surplusAmount
            }
            $activity = "$($e.Actor) attacks $($e.Target)"
        }
        [pscustomobject]@{
            Round=$e.Round; Activity=$activity; ActingRating=$ar
            DefendingRating=$(if ($null -ne $de) { $dr } else { $null })
            ActingRoll=$e.Roll; DefendingRoll=$(if ($null -ne $de) { $e.Defense } else { $null })
            ActingEffects=$ae; DefendingEffects=$de
            WoundedAdded=$harm; StaggeredAdded=$surplusAmount; StaggeredRemoved=$removed
            ALoad=(Get-Load $actors.A); ABand=(Get-Band (Get-Load $actors.A))
            BLoad=(Get-Load $actors.B); BBand=(Get-Band (Get-Load $actors.B))
        }
    }
    [pscustomobject]@{Name=$Name; Trace=@($trace); FinalA=$actors.A; FinalB=$actors.B}
}
$control = Invoke-Exchange $false $false 0 'No surplus Conditions'
$persistent = Invoke-Exchange $true $false 0 'Surplus Conditions; continue attacking'
$armor = Invoke-Exchange $true $false 1 'Surplus Conditions; Wounded mitigation 1'
$recovery = Invoke-Exchange $true $true 0 'Surplus Conditions; A recovers on round 2'
$capped = Invoke-Exchange $true $false 0 'One-Effect counter; four rounds' 1 4
$cappedRecovery = Invoke-Exchange $true $true 0 'One-Effect counter; recovery on round 4' 1 4 4
$longControl = Invoke-Exchange $false $false 0 'No surplus Conditions; four rounds' 1 4
Assert-Equal (Get-Load $control.FinalA) 0 'Control A load'
Assert-Equal (Get-Load $control.FinalB) 0 'Control B load'
Assert-Equal $persistent.FinalA.Staggered 6 'Persistent stagger'
Assert-Equal $persistent.FinalA.Wounded 5 'Persistent wounds'
Assert-Equal (Get-Load $persistent.FinalA) 11 'Persistent functional loss'
Assert-Equal (Get-Load $armor.FinalA) 7 'Matching armor changes outcome'
Assert-Equal $recovery.FinalA.Staggered 0 'Recovery only clears stagger'
Assert-Equal $recovery.FinalA.Wounded 2 'Recovery preserves wounds'
Assert-Equal $recovery.FinalB.Staggered 3 'Recovered A turns final defense'
Assert-Equal $capped.Trace[3].ALoad 2 'Capped A after two rounds'
Assert-Equal $capped.Trace[3].BLoad 1 'Capped B after two rounds'
Assert-Equal $capped.FinalA.Staggered 4 'Capped A final stagger'
Assert-Equal $capped.FinalA.Wounded 3 'Capped A final wounds'
Assert-Equal (Get-Load $capped.FinalA) 7 'Capped A after four rounds'
Assert-Equal (Get-Load $capped.FinalB) 1 'Capped B after four rounds'
Assert-Equal $cappedRecovery.FinalA.Staggered 0 'Late recovery clears matching stagger'
Assert-Equal $cappedRecovery.FinalA.Wounded 2 'Late recovery preserves wounds'
Assert-Equal $cappedRecovery.FinalB.Staggered 2 'Late recovery permits second counter'
Assert-Equal (Get-Load $longControl.FinalA) 0 'Four-round control'

$counterChecks=0
foreach ($offense in 0..30) {
    foreach ($defense in 0..30) {
        $counter = Get-Counter $offense $defense 1
        Assert-Equal $counter ([int]($defense -gt $offense)) 'Positive surplus gives at most one'
        if ($counter -gt 0 -and [math]::Max(0,$offense-$defense) -gt 0) { throw 'Counter despite incoming remainder.' }
        $counterChecks++
    }
}
Assert-Equal (Get-Counter 4 (Get-Effects 80 -49) 1) 1 '01 defense produces thirteen, counter capped at one'
Assert-Equal ([math]::Max(0,7-4)) 3 'Offensive remainder not capped'
Assert-Equal ([math]::Max(0,(Get-Counter 4 7 1)-1)) 0 'Matching mitigation applies to capped output'
[pscustomobject]@{
    Status='Illustrative fixed-roll stress sequence; candidate Staggered mapping, no adoption or expected-duration claim'
    CounterArithmeticChecks=$counterChecks
    Cases=@($control,$persistent,$armor,$recovery,$capped,$cappedRecovery,$longControl)
} | ConvertTo-Json -Depth 6
