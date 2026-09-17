$ErrorActionPreference='Stop'
$checks=0
function Get-Effects([int]$Rating,[int]$Adjusted) {
    if ($Adjusted -gt $Rating) { return 0 }
    return 1+[int][math]::Floor(($Rating-$Adjusted)/10)
}
# Enumerate finite prefixes; the omitted geometric tail is explicitly bounded.
$q=0.01; $maxRepeats=6; $tail=[math]::Pow($q,$maxRepeats+1)
$rows=foreach ($rating in @(0,20,40,80,160,320)) {
    $mass=0.0; $literalMean=0.0; $mirrorMean=0.0
    $literalRepeat=0.0; $mirrorRepeat=0.0
    $literalRaw=0.0; $mirrorRaw=0.0
    foreach ($k in 0..$maxRepeats) {
        $weight=[math]::Pow($q,$k)/100
        foreach ($terminal in 2..100) {
            $literal=1-$k-$terminal
            $mirror=1-100*$k-$terminal
            $le=Get-Effects $rating $literal
            $me=Get-Effects $rating $mirror
            if ($mirror -gt $literal -or $me -lt $le) { throw 'Comparison ordering failed' }
            if ($k -eq 0 -and ($literal -ne $mirror -or $le -ne $me)) { throw 'No-repeat equality failed' }
            if ($me -ne (Get-Effects $rating (1-$terminal))+10*$k) { throw 'Hundred-point step failed' }
            $checks+=3
            $mass+=$weight; $literalMean+=$weight*$le; $mirrorMean+=$weight*$me
            $literalRaw+=$weight*($k+$terminal); $mirrorRaw+=$weight*(100*$k+$terminal)
            if ($k -ge 1) { $literalRepeat+=$weight*$le; $mirrorRepeat+=$weight*$me }
        }
    }
    $bound=$tail*(1+$rating/10+10*($maxRepeats+1+$q/(1-$q))+10.1)
    $terminalMean=0.0
    foreach ($terminal in 2..100) { $terminalMean+=(Get-Effects $rating (1-$terminal))/99 }
    $exactMirror=$terminalMean+10*$q/(1-$q)
    if ([math]::Abs($mass-(1-$tail)) -gt 1e-12) { throw 'Probability mass failed' }
    if ([math]::Abs($exactMirror-$mirrorMean) -gt $bound+1e-11) { throw 'Analytic mean comparison failed' }
    if ([math]::Abs($literalRaw-(51+$q/(1-$q))) -gt 1e-9 -or [math]::Abs($mirrorRaw-(51+100*$q/(1-$q))) -gt 1e-9) { throw 'Raw total mean failed' }
    $checks+=3
    $single=0.0
    foreach ($extra in 1..100) { $single+=(Get-Effects $rating (1-$extra))/100 }
    [pscustomobject]@{
        Rating=$rating;ApprovedOneDieMean=$single;LiteralContinuationMean=$literalMean
        MirroredContinuationMean=$mirrorMean;OmittedMeanUpperBound=$bound
        MeanIfAnother01OccursLiteral=$literalRepeat/$q
        MeanIfAnother01OccursMirrored=$mirrorRepeat/$q
    }
}
$examples=foreach ($k in 0..3) {
    $l=1-$k-50; $m=1-100*$k-50
    [pscustomobject]@{Additional01s=$k;Terminal=50;LiteralAdjusted=$l;MirrorAdjusted=$m;LiteralEffectsAt80=(Get-Effects 80 $l);MirrorEffectsAt80=(Get-Effects 80 $m)}
}
if ($examples[1].LiteralEffectsAt80 -ne 14 -or $examples[1].MirrorEffectsAt80 -ne 23) { throw 'Repeated example failed' }
$checks++
[pscustomobject]@{
    Status='Repeated-01 candidates only; neither adopted'
    Checks=$checks;PrefixTerminalCases=6*7*99;Additional01PrefixesEnumerated='0 through 6'
    OmittedConditionalProbability=$tail;Results=$rows;Examples=$examples
    MeanAdditionalDiceExact=1/(1-$q)
    TwoInitial01sOneIn=10000;ThreeInitial01sOneIn=1000000
    Controls='Conditional on initial01, except named initial prefix odds. Terminal die02-00 valued2-100. No paid rerolls, mitigation, change to Ratings, Scale, permission, or Effect formula. Finite enumeration is not a rule cap.'
} | ConvertTo-Json -Depth 5
