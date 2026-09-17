$ErrorActionPreference = 'Stop'
function Assert-Near([double]$Actual, [double]$Expected, [string]$Name) {
    if ([math]::Abs($Actual-$Expected) -gt 1e-12) {
        throw "$Name : expected $Expected, got $Actual"
    }
}
function Get-CompletedRoll([int[]]$Dice) {
    $first = $Dice[0]
    if ($first -ne 1 -and $first -ne 100) {
        if ($Dice.Count -ne 1) { throw 'Ordinary roll has continuation.' }
        return $first
    }
    $total = $first
    for ($i=1; $i -lt $Dice.Count; $i++) {
        $die = $Dice[$i]
        if ($die -lt 1 -or $die -gt 100) { throw 'Invalid die.' }
        if ($first -eq 1) { $total -= 100-$die } else { $total += $die }
        $again = ($first -eq 1 -and $die -eq 1) -or ($first -eq 100 -and $die -eq 100)
        if (-not $again) {
            if ($i -ne $Dice.Count-1) { throw 'Dice follow terminal result.' }
            return $total
        }
    }
    throw 'Unfinished continuation.'
}
function Get-ZeroTailSuccess([int]$Rating) {
    $sum = 0.0
    # k initial/consecutive 00s followed by terminal 01..99. For a finite
    # Rating, longer prefixes cannot succeed; this is not a continuation cap.
    for ($k=1; 100*$k -lt $Rating; $k++) {
        $terminalCount = [math]::Min(99,$Rating-100*$k)
        $sum += $terminalCount * [math]::Pow(0.01,$k+1)
    }
    return $sum
}

$rows = foreach ($rating in @(0,20,80,98,99,100,120,160,200,250,320)) {
    $one = if ($rating -eq 0) { 0.0099 } else { 0.01 }
    $old = $one + [math]::Max(0,[math]::Min(98,$rating)-1)/100
    $drop99 = $one + [math]::Max(0,[math]::Min(99,$rating)-1)/100
    $candidate = $drop99 + (Get-ZeroTailSuccess $rating)
    [pscustomobject]@{
        Rating = $rating
        CurrentSuccessPct = [math]::Round(100*$old,8)
        Ordinary99OnlySuccessPct = [math]::Round(100*$drop99,8)
        NumericalEdgesSuccessPct = [math]::Round(100*$candidate,8)
        NumericalEdgesFailurePct = [math]::Round(100*(1-$candidate),8)
    }
}
Assert-Near (Get-ZeroTailSuccess 160) 0.006 '160 continuation success'
Assert-Near (Get-ZeroTailSuccess 200) 0.0099 '200 continuation success'
Assert-Near (Get-ZeroTailSuccess 320) 0.0099992 '320 continuation success'
Assert-Near (Get-CompletedRoll @(1,6)) -93 '01,06'
Assert-Near (Get-CompletedRoll @(1,1,6)) -192 '01,01,06'
Assert-Near (Get-CompletedRoll @(1,100)) 1 '01,00'
Assert-Near (Get-CompletedRoll @(100,100,50)) 250 '00,00,50'

$fixtures = @(
    @{Name='Ordinary 99 can defend'; A=80; AD=@(30); B=160; BD=@(99); Net=-11; Effects=0},
    @{Name='00 below Rating can defend'; A=80; AD=@(30); B=160; BD=@(100,20); Net=10; Effects=2},
    @{Name='00 above Rating fails defense'; A=80; AD=@(30); B=80; BD=@(100,50); Net=120; Effects=13},
    @{Name='Low Rating 01 beats ordinary'; A=20; AD=@(1,50); B=80; BD=@(30); Net=19; Effects=2},
    @{Name='01 does not automatically win'; A=20; AD=@(1,50); B=160; BD=@(30); Net=-61; Effects=0},
    @{Name='Both 01'; A=80; AD=@(1,50); B=60; BD=@(1,30); Net=0; Effects=0},
    @{Name='Both 00, one succeeds'; A=160; AD=@(100,20); B=80; BD=@(100,50); Net=110; Effects=12},
    @{Name='Both 00, both fail'; A=80; AD=@(100,20); B=60; BD=@(100,50); Net=50; Effects=0},
    @{Name='Both 00, both succeed'; A=320; AD=@(100,50); B=250; BD=@(100,20); Net=40; Effects=5},
    @{Name='01 versus 00'; A=20; AD=@(1,50); B=160; BD=@(100,20); Net=29; Effects=3},
    @{Name='Zero Rating 01 then 00'; A=0; AD=@(1,100); B=0; BD=@(50); Net=49; Effects=0},
    @{Name='Repeated 00 still defeats high Rating'; A=320; AD=@(100,100,100,50); B=20; BD=@(80); Net=30; Effects=0}
)
$checks = foreach ($f in $fixtures) {
    $aRoll = Get-CompletedRoll $f.AD
    $bRoll = Get-CompletedRoll $f.BD
    $am = $f.A-$aRoll; $bm = $f.B-$bRoll; $net = $am-$bm
    $effects = if ($am -ge 0 -and $net -gt 0) { 1+[math]::Floor($net/10) } else { 0 }
    Assert-Near $net $f.Net $f.Name
    Assert-Near $effects $f.Effects $f.Name
    [pscustomobject]@{Name=$f.Name; AMargin=$am; BMargin=$bm; Net=$net; AEffects=$effects}
}
[pscustomobject]@{
    Status='Candidate only. Exact unopposed probabilities, no paid spending; opposed fixtures are checks, not a probability distribution.'
    Rates=$rows
    OpposedChecks=$checks
} | ConvertTo-Json -Depth 5
