$ErrorActionPreference='Stop'
$checks=0
function Effects([int]$Rating,[int]$Result) {
    if ($Result -gt $Rating) { return 0 }
    return 1+[int][math]::Floor(($Rating-$Result)/10)
}
$rows=foreach ($rating in @(1,5,10,20,40,60,80,98,120,160,200,320)) {
    $ordinary01=Effects $rating 1
    $cases=@(foreach ($extra in 1..100) {
        $adjusted=1-$extra
        $effect=Effects $rating $adjusted
        $gain=$effect-$ordinary01
        if ($adjusted -lt -99 -or $adjusted -gt 0) { throw 'Adjusted range failed' }
        if ($gain -lt 0 -or $gain -gt 10) { throw 'Unexpected Effect gain' }
        if ($effect -ne 1+[math]::Floor(($rating-1+$extra)/10)) { throw 'Margin formula failed' }
        $checks+=3
        [pscustomobject]@{Extra=$extra;Adjusted=$adjusted;Effects=$effect;Gain=$gain}
    })
    $ordinaryTotal=0
    foreach ($roll in 1..100) {
        if ($roll -le 98) { $ordinaryTotal += Effects $rating $roll }
    }
    $continuedTotal=0
    foreach ($roll in 1..100) { foreach ($extra in 1..100) {
        $effect=if ($roll -eq 1) { Effects $rating (1-$extra) }
            elseif ($roll -le 98) { Effects $rating $roll } else { 0 }
        $continuedTotal+=$effect
    } }
    $gainMean=($cases.Gain | Measure-Object -Average).Average
    if ([math]::Abs(($continuedTotal/10000-$ordinaryTotal/100)-$gainMean/100) -gt 0.000000001) { throw 'All-initial-roll weighting failed' }
    $checks++
    [pscustomobject]@{
        Rating=$rating;Ordinary01Effects=$ordinary01
        ContinuationMin=($cases.Effects | Measure-Object -Minimum).Minimum
        ContinuationMax=($cases.Effects | Measure-Object -Maximum).Maximum
        ContinuationMean=($cases.Effects | Measure-Object -Average).Average
        MeanAdditionalEffects=$gainMean
        ConditionalTenOrMorePercent=@($cases | Where-Object Effects -ge 10).Count
        OrdinaryMeanEffectsPerInitialRoll=$ordinaryTotal/100
        ContinuedMeanEffectsPerInitialRoll=$continuedTotal/10000
        Extra50=Effects $rating -49
    }
}
$boundary=[pscustomobject]@{Rating=0;Ordinary01Effects=(Effects 0 1);LiteralExtra50Effects=(Effects 0 -49);Successful01OnlyControlEffects=0}
if ($boundary.Ordinary01Effects -ne 0 -or $boundary.LiteralExtra50Effects -ne 5) { throw 'Zero-Rating boundary failed' }
$checks++
if (($rows | Where-Object Rating -eq 80).Extra50 -ne 13) { throw 'Approved proposal example failed' }
$checks++
[pscustomobject]@{
    Status='Candidate natural-01 subtraction comparison; no adoption or repeated-01 decision'
    Checks=$checks;ConditionalCases=1200;InitialDiePairCases=120000
    Rows=$rows;ZeroRatingBoundary=$boundary
    Limits='Open Access, uncertain unopposed attempts only. One additional die, 00 valued at 100 as data and 01 valued at 1 with no further continuation. Ordinary 99/00 award no successful Effects; complication severity excluded. No paid rerolls, extra Scale, automatic damage, or new permission.'
} | ConvertTo-Json -Depth 5
