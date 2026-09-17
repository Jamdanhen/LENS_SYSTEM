$ErrorActionPreference='Stop'
function Outcome($Rating,$Roll) {
    if ($Roll -gt 98 -or $Roll -gt $Rating) { return 0 }
    return 1+[math]::Floor(($Rating-$Roll)/10)
}
$checks=0
$rows=foreach ($raw in @(40,60,80)) {
    foreach ($boost in @($false,$true)) {
        $rating=if ($boost) { [math]::Floor($raw*1.2) } else { $raw }
        $outcomes=@(0)+@(1..100 | ForEach-Object { Outcome $rating $_ })
        foreach ($specialRerollable in @($true,$false)) {
            $wins=0; $effectSum=0; $rerolls=0; $bestSum=0
            foreach ($first in 1..100) { foreach ($second in 1..100) {
                $original=$outcomes[$first]
                $useReroll=($original -eq 0 -and ($specialRerollable -or $first -le 98))
                $result=if ($useReroll) { $outcomes[$second] } else { $original }
                $kept=if ($useReroll) { [math]::Max($original,$outcomes[$second]) } else { $original }
                if ($result -gt 0) { $wins++ }
                if ($useReroll) { $rerolls++ }
                $effectSum+=$result; $bestSum+=$kept
            } }
            $single=@($outcomes | Select-Object -Skip 1 | Where-Object { $_ -gt 0 }).Count/100
            $expected=if ($specialRerollable) { $single+(1-$single)*$single } else { $single+(0.98-$single)*$single }
            if ([math]::Abs($wins/10000-$expected) -gt 0.00000001) { throw 'Pair enumeration disagrees with probability' }
            if ($effectSum -ne $bestSum) { throw 'Failure-only replacement differs from best under ordinary effects' }
            $checks+=2
            [pscustomobject]@{Raw=$raw;Boost=$boost;Rating=$rating;SpecialFacesRerollable=$specialRerollable;FirstSuccessPercent=100*$single;WithFailureRerollPercent=$wins/100;MeanGeneratedEffects=$effectSum/10000;ExpectedRerollCount=$rerolls/10000;TrialExpectedPointCost=([int]$boost)+$rerolls/10000}
        }
    }
}
$rating=72; $firstRoll=50
$firstEffect=Outcome $rating $firstRoll
$replaceSuccess=0; $replaceWorse=0; $replaceBetter=0; $replaceSum=0; $keepSum=0
foreach ($second in 1..100) {
    $effect=Outcome $rating $second
    if ($effect -gt 0) { $replaceSuccess++ }
    if ($effect -lt $firstEffect) { $replaceWorse++ }
    if ($effect -gt $firstEffect) { $replaceBetter++ }
    $replaceSum+=$effect
    $keepSum += [math]::Max($firstEffect,$effect)
}
if ($firstEffect -ne 3 -or $replaceSuccess -ne 72 -or $replaceWorse -ne 48 -or $replaceBetter -ne 42) { throw 'Successful-reroll fixture failed' }
$checks++
[pscustomobject]@{Status='Timing continuity accepted; prices and reroll result selection still candidates';Checks=$checks;FailureRerolls=$rows;SuccessfulReroll=@{Rating=$rating;FirstRoll=$firstRoll;OriginalEffects=$firstEffect;ReplacementSuccessPercent=$replaceSuccess;ReplacementWorseEffectsPercent=$replaceWorse;BetterEffectsPercent=$replaceBetter;ReplacementMeanEffects=$replaceSum/100;KeepBetterMeanEffects=$keepSum/100};Controls='One optional reroll per tested attempt, not a universal cap. One-point prices are fixtures. No opposition, mitigation, changed Difficulty, extra boost, or Automatic-action roll.'} | ConvertTo-Json -Depth 5
