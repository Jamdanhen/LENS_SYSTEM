$ErrorActionPreference = 'Stop'
function Assert-Equal($Actual, $Expected, [string]$Name) {
    if ($Actual -ne $Expected) { throw "$Name : expected $Expected, got $Actual" }
}
function Get-NormalizedMargin([int]$Margin, [bool]$Success) {
    if ($Success) { return $Margin }
    return [math]::Min(0,$Margin)
}
function Get-AEffects([int]$AMargin, [bool]$ASuccess, [int]$BMargin, [bool]$BSuccess, [bool]$SuccessPriority) {
    $a = Get-NormalizedMargin $AMargin $ASuccess
    $b = Get-NormalizedMargin $BMargin $BSuccess
    if (-not $ASuccess) { return 0 }
    $wins = if ($SuccessPriority -and -not $BSuccess) { $true } else { $a -gt $b }
    if (-not $wins) { return 0 }
    return 1 + [int][math]::Floor(($a-$b)/10)
}

# Success flags describe completed outcomes. Positive raw margins on natural
# 99/00 remain failures only within this uncertainty-retaining candidate.
$cases = @(
    @{Name='Ordinary success versus success'; A=50; AS=$true; B=20; BS=$true; Literal=4; Priority=4},
    @{Name='Ordinary success versus failure'; A=50; AS=$true; B=-30; BS=$false; Literal=9; Priority=9},
    @{Name='High-Rating 99 defense'; A=50; AS=$true; B=61; BS=$false; Literal=6; Priority=6},
    @{Name='Low-Rating 99 defense'; A=50; AS=$true; B=-19; BS=$false; Literal=7; Priority=7},
    @{Name='High-Rating 00 defense'; A=50; AS=$true; B=10; BS=$false; Literal=6; Priority=6},
    @{Name='Low-Rating 00 defense'; A=50; AS=$true; B=-70; BS=$false; Literal=13; Priority=13},
    @{Name='Exact success versus high-Rating 99'; A=0; AS=$true; B=61; BS=$false; Literal=0; Priority=1},
    @{Name='Exact success versus high-Rating 00'; A=0; AS=$true; B=10; BS=$false; Literal=0; Priority=1},
    @{Name='Two exact successes'; A=0; AS=$true; B=0; BS=$true; Literal=0; Priority=0},
    @{Name='Positive-margin failed attack'; A=61; AS=$false; B=50; BS=$true; Literal=0; Priority=0},
    @{Name='Two special failures below Ratings'; A=61; AS=$false; B=21; BS=$false; Literal=0; Priority=0},
    @{Name='Two special failures above Ratings'; A=-40; AS=$false; B=-90; BS=$false; Literal=0; Priority=0},
    @{Name='01 succeeds against automatic failure'; A=69; AS=$true; B=61; BS=$false; Literal=7; Priority=7},
    @{Name='01 loses to greater successful margin'; A=69; AS=$true; B=130; BS=$true; Literal=0; Priority=0},
    @{Name='Zero-Rating 01 then 00 fails'; A=-1; AS=$false; B=-50; BS=$false; Literal=0; Priority=0}
)
$rows = foreach ($c in $cases) {
    $literal = Get-AEffects $c.A $c.AS $c.B $c.BS $false
    $priority = Get-AEffects $c.A $c.AS $c.B $c.BS $true
    Assert-Equal $literal $c.Literal $c.Name
    Assert-Equal $priority $c.Priority $c.Name
    [pscustomobject]@{Case=$c.Name; RawAMargin=$c.A; RawBMargin=$c.B; LiteralEffects=$literal; SuccessPriorityEffects=$priority}
}

$checks = 0
foreach ($aMargin in @(0,1,9,10,50,100,200)) {
    foreach ($completedRoll in @(99,101,150,199,250,350)) {
        $previous = [int]::MaxValue
        foreach ($bRating in 0..320) {
            $bMargin = $bRating-$completedRoll
            $effects = Get-AEffects $aMargin $true $bMargin $false $true
            if ($effects -lt 1) { throw 'Failed defense defeated a successful action.' }
            if ($effects -gt $previous) { throw 'More capability worsened same failed defense.' }
            if ($bMargin -ge 0) {
                Assert-Equal $effects (1+[int][math]::Floor($aMargin/10)) 'Zero opposing contribution'
            }
            $previous = $effects
            $checks++
        }
    }
}
Assert-Equal $checks 13482 'Sweep size'

# Compare old complication severity with the extra attack Effects supplied
# by one failed 00. Equal size is not by itself proof of double counting.
$severity = foreach ($aMargin in @(0,5,50,55)) {
    foreach ($failureMagnitude in @(5,15,70,75)) {
        $base = 1+[int][math]::Floor($aMargin/10)
        $attack = Get-AEffects $aMargin $true (-$failureMagnitude) $false $true
        $complication = [int][math]::Floor($failureMagnitude/10)
        [pscustomobject]@{AttackMargin=$aMargin; Failed00Margin=$failureMagnitude; TotalAttackEffects=$attack; AddedAttackEffects=($attack-$base); SeparateComplicationEffects=$complication}
    }
}
[pscustomobject]@{Status='Candidates only; arithmetic and boundary tests, not outcome probabilities'; FixtureResults=$rows; MonotonicChecks=$checks; ComplicationComparisons=$severity} | ConvertTo-Json -Depth 5
