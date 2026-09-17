$ErrorActionPreference = 'Stop'

function Assert-Equal($Actual, $Expected, [string]$Label) {
    if ($Actual -ne $Expected) { throw "$Label : expected $Expected, got $Actual" }
}
function Get-Effects([int]$Margin) {
    if ($Margin -le 0) { return 0 }
    return 1 + [int][math]::Floor($Margin / 10)
}

# Ordinary faces only: special-result opposition is a separate unresolved rule.
$cases = @(
    @(0,0), @(20,20), @(40,40), @(80,80), @(160,160), @(320,320),
    @(80,60), @(80,20), @(20,80), @(160,80), @(320,80)
)
$comparisons = 0
$rows = foreach ($case in $cases) {
    $a = $case[0]; $b = $case[1]
    $wins = 0; $gatedWins = 0; $ties = 0; $bothFailedWins = 0
    $oldSum = 0; $signedGatedSum = 0; $relativeSum = 0
    $oldTen = 0; $signedTen = 0; $relativeTen = 0
    foreach ($ra in 2..98) {
        foreach ($rb in 2..98) {
            $comparisons++
            $ma = $a - $ra; $mb = $b - $rb
            $net = $ma - $mb
            Assert-Equal $net (($a-$b)+($rb-$ra)) 'Expanded subtraction'
            Assert-Equal $net ((($a+100)-$ra)-(($b+100)-$rb)) 'Equal-rating shift'
            Assert-Equal $net (-($mb-$ma)) 'Antisymmetry'
            if ($net -eq 0) { $ties++ }
            $relative = Get-Effects $net
            $old = 0; $signedGated = 0
            if ($relative -gt 0) {
                $wins++; $relativeSum += $relative
                if ($relative -ge 10) { $relativeTen++ }
                if ($ma -lt 0 -and $mb -lt 0) { $bothFailedWins++ }
                if ($ma -ge 0) {
                    $gatedWins++
                    $signedGated = $relative
                    $signedGatedSum += $signedGated
                    if ($signedGated -ge 10) { $signedTen++ }
                    $oldMargin = $ma - [math]::Max(0,$mb)
                    $old = 1 + [int][math]::Floor($oldMargin/10)
                    $oldSum += $old
                    if ($old -ge 10) { $oldTen++ }
                    if ($old -gt $signedGated) { throw 'Signed margin reduced output.' }
                    if ($mb -ge 0) { Assert-Equal $old $signedGated 'Both-success agreement' }
                }
            }
        }
    }
    $n = 97*97
    [pscustomobject]@{
        Ratings = "$a/$b"
        OldOrGatedWinPct = [math]::Round(100*$gatedWins/$n,2)
        RelativeWinPct = [math]::Round(100*$wins/$n,2)
        TiesPct = [math]::Round(100*$ties/$n,2)
        BothFailedRelativeWinPct = [math]::Round(100*$bothFailedWins/$n,2)
        OldMeanEffectsPerWin = $(if ($gatedWins) { [math]::Round($oldSum/$gatedWins,2) } else { $null })
        SignedGatedMeanEffectsPerWin = $(if ($gatedWins) { [math]::Round($signedGatedSum/$gatedWins,2) } else { $null })
        RelativeMeanEffectsPerWin = $(if ($wins) { [math]::Round($relativeSum/$wins,2) } else { $null })
        OldTenPlusPctAllPairs = [math]::Round(100*$oldTen/$n,2)
        SignedGatedTenPlusPctAllPairs = [math]::Round(100*$signedTen/$n,2)
        RelativeTenPlusPctAllPairs = [math]::Round(100*$relativeTen/$n,2)
    }
}
Assert-Equal (Get-Effects (50-20)) 4 'Both succeed'
Assert-Equal (Get-Effects (50-(-30))) 9 'One succeeds'
Assert-Equal (Get-Effects ((-50)-(-80))) 4 'Both fail, relative outcome'
Assert-Equal (Get-Effects 0) 0 'Tie test control'
Assert-Equal $comparisons (11*97*97) 'Enumeration size'
[pscustomobject]@{
    Status = 'Diagnostic only; no rule adoption'
    Faces = '02 through 98; percentages conditional on both rolls being ordinary'
    Comparisons = $comparisons
    Rows = $rows
} | ConvertTo-Json -Depth 4
