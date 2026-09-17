$ErrorActionPreference = 'Stop'
function Assert-Equal($Actual, $Expected, [string]$Label) {
    if ($Actual -ne $Expected) { throw "$Label : expected $Expected, got $Actual" }
}
function Get-Output([int]$Rating, [int]$Initial, [int]$Completed) {
    if ($Initial -eq 99 -or $Initial -eq 100) { return 0 }
    $margin = $Rating-$Completed
    if ($Initial -ne 1 -and $margin -lt 0) { return 0 }
    return 1 + [int][math]::Floor([math]::Max(0,$margin)/10)
}
function Get-Complication([int]$Rating, [int]$Initial, [int]$Completed) {
    if ($Initial -ne 100) { return 0 }
    return [int][math]::Floor([math]::Max(0,$Completed-$Rating)/10)
}

Assert-Equal (Get-Output 0 1 1) 1 'Candidate guaranteed 01 success'
Assert-Equal (Get-Output 80 1 -49) 13 '01,50 at Rating 80'
Assert-Equal (Get-Output 160 100 150) 0 '00 remains failure above cumulative result'
Assert-Equal (Get-Complication 160 100 150) 0 'No additional severity at high Rating'
Assert-Equal (Get-Complication 80 100 150) 7 '00 severity at Rating 80'
Assert-Equal (Get-Output 160 99 99) 0 '99 retained as test control, not newly adopted'
Assert-Equal ((Get-Output 90 60 60)-(Get-Output 60 40 40)) 1 'User example'
Assert-Equal ((Get-Output 90 60 60)-(Get-Output 60 100 150)) 4 'Failed defense does not amplify attack'
Assert-Equal ((Get-Output 80 1 -49)-(Get-Output 60 1 -69)) 0 'Two 01 outcomes can tie'

$rows = foreach ($pair in @(@(20,20),@(80,80),@(80,20),@(160,160),@(320,320))) {
    $signedWins=0; $independentWins=0; $signedSum=0; $independentSum=0
    foreach ($ra in 2..98) {
        foreach ($rb in 2..98) {
            $ma=$pair[0]-$ra; $mb=$pair[1]-$rb
            $signed = if ($ma -ge 0 -and $ma -gt $mb) { 1+[int][math]::Floor(($ma-$mb)/10) } else { 0 }
            $a = Get-Output $pair[0] $ra $ra
            $b = Get-Output $pair[1] $rb $rb
            $independent = [math]::Max(0,$a-$b)
            if ($independent -gt $a) { throw 'Opposition increased acting output.' }
            if ($independent -gt $signed) { throw 'Unexpected comparative increase.' }
            if ($ma -lt 0 -and $independent -ne 0) { throw 'Failed action produced successful Effects.' }
            if ($signed -gt 0) { $signedWins++; $signedSum += $signed }
            if ($independent -gt 0) { $independentWins++; $independentSum += $independent }
        }
    }
    [pscustomobject]@{
        Ratings="$($pair[0])/$($pair[1])"
        SignedWinPct=[math]::Round(100*$signedWins/9409,2)
        IndependentWinPct=[math]::Round(100*$independentWins/9409,2)
        SignedMeanEffectsPerWin=[math]::Round($signedSum/$signedWins,2)
        IndependentMeanEffectsPerWin=[math]::Round($independentSum/$independentWins,2)
    }
}
[pscustomobject]@{
    Status='Candidate; ordinary paired-roll probabilities conditional on faces 02-98; special cases checked separately'
    Pairs=47045
    SpecialAndExampleAssertions=9
    Rows=$rows
} | ConvertTo-Json -Depth 4
