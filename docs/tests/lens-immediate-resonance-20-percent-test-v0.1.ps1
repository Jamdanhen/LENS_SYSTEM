$ErrorActionPreference = 'Stop'
$checks = 0
# Isolate one prospective spend on an already permitted, uncertain Expression.
# No other Resonance, new Difficulty, opposition, or mitigation is introduced.
function Probe($RawRating,$Factor) {
    $rating=[math]::Floor($RawRating*$Factor)
    $success=0; $effects=0
    foreach ($roll in 1..100) {
        if ($roll -le 98 -and $roll -le $rating) {
            $success++
            $effects += 1+[math]::Floor(($rating-$roll)/10)
        }
    }
    [pscustomobject]@{Factor=$Factor;FinalRating=$rating;SuccessPercent=$success;MeanGeneratedEffectsPerAttempt=$effects/100}
}
$rows=foreach ($raw in @(20,40,60,80,95,120)) {
    $control=Probe $raw 1
    $ten=Probe $raw 1.1
    $twenty=Probe $raw 1.2
    if ($twenty.FinalRating -lt $ten.FinalRating -or $ten.FinalRating -lt $control.FinalRating) { throw 'Rating ordering failed' }
    if ($twenty.SuccessPercent -lt $ten.SuccessPercent -or $ten.SuccessPercent -lt $control.SuccessPercent) { throw 'Success ordering failed' }
    if ($twenty.MeanGeneratedEffectsPerAttempt -lt $ten.MeanGeneratedEffectsPerAttempt) { throw 'Effect ordering failed' }
    $checks+=3
    [pscustomobject]@{RawRating=$raw;Control=$control;Ten=$ten;Twenty=$twenty;SuccessGainPoints=$twenty.SuccessPercent-$control.SuccessPercent}
}
$examples=foreach ($case in @(@{Rating=60;Roll=50},@{Rating=60;Roll=65},@{Rating=80;Roll=50},@{Rating=120;Roll=50})) {
    $before=[math]::Floor($case.Rating)
    $after=[math]::Floor($case.Rating*1.2)
    $baseEffect=if ($case.Roll -le $before) { 1+[math]::Floor(($before-$case.Roll)/10) } else { 0 }
    $boostEffect=if ($case.Roll -le $after) { 1+[math]::Floor(($after-$case.Roll)/10) } else { 0 }
    [pscustomobject]@{Rating=$before;Roll=$case.Roll;BoostedRating=$after;ControlEffects=$baseEffect;BoostedEffects=$boostEffect}
}
$narrowComparison=foreach ($rank in @(0,5,9)) {
    $old=1+$rank/10
    $new=1+($rank+1)/10
    [pscustomobject]@{FromRank=$rank;ToRank=$rank+1;OldFactor=$old;NewFactor=$new;RelativeExpressionGainPercent=100*($new/$old-1);Cost=5}
}
# Final-only flooring: never boost an already truncated intermediate value.
$correct=[math]::Floor(40.9*1.2)
$premature=[math]::Floor([math]::Floor(40.9)*1.2)
if ($correct -ne 49 -or $premature -ne 48) { throw 'Rounding diagnostic failed' }
$checks++
if ($examples[0].ControlEffects -ne 2 -or $examples[0].BoostedEffects -ne 3) { throw 'Successful effect example failed' }
if ($examples[1].ControlEffects -ne 0 -or $examples[1].BoostedEffects -ne 1) { throw 'Rescued success example failed' }
$checks+=2
[pscustomobject]@{Status='One-point x1.20 candidate, not adopted spending rules';Checks=$checks;Rows=$rows;SameRollExamples=$examples;NarrowRankComparison=$narrowComparison;FinalOnlyRounding=@{Raw=40.9;Correct=$correct;Premature=$premature};Limits='98-ceiling percentile test convention; high-rating rows apply only if resolution is required; no Automatic action forced to roll, no opposed-combat balance claim'} | ConvertTo-Json -Depth 6
