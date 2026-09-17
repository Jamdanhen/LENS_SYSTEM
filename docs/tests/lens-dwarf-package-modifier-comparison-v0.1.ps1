$ErrorActionPreference = 'Stop'

function Measure-Rating([decimal]$Rating) {
    $successes = 0
    $effects = 0
    foreach ($roll in 1..100) {
        if ($roll -le 98 -and $roll -le $Rating) {
            $successes++
            $effects += 1 + [math]::Floor(($Rating - $roll) / 10)
        }
    }
    if ($successes -ne [math]::Min(98, [math]::Floor($Rating))) {
        throw 'Success enumeration mismatch'
    }
    [pscustomobject]@{
        Rating = $Rating
        SuccessPercent = $successes
        ExpectedGeneratedEffects = $effects / [decimal]100
    }
}

$variants = @(
    @{ Name = 'Control'; Resonance = [decimal]1; Dissonance = [decimal]1 }
    @{ Name = 'Ten-percent candidate'; Resonance = [decimal]1.10; Dissonance = [decimal]0.90 }
    @{ Name = 'Twenty-percent candidate'; Resonance = [decimal]1.20; Dissonance = [decimal]0.80 }
)

$rows = foreach ($base in @(30, 60, 90)) {
    foreach ($variant in $variants) {
        $neutral = Measure-Rating $base
        $support = Measure-Rating ($base * $variant.Resonance)
        $burden = Measure-Rating ($base * $variant.Dissonance)
        if ($support.SuccessPercent -lt $neutral.SuccessPercent -or
            $burden.SuccessPercent -gt $neutral.SuccessPercent -or
            $support.ExpectedGeneratedEffects -lt $neutral.ExpectedGeneratedEffects -or
            $burden.ExpectedGeneratedEffects -gt $neutral.ExpectedGeneratedEffects) {
            throw 'Modifier direction mismatch'
        }
        [pscustomobject]@{
            Base = $base
            Candidate = $variant.Name
            NaturalPoisonResistanceOrStoneObservation = $support
            JumpingOrBuoyancyOrWeightSensitiveCrossing = $burden
            UnrelatedExpression = $neutral
        }
    }
}

[pscustomobject]@{
    Status = 'Candidate trait modifiers; no adopted amounts or package balance claim'
    Method = 'Enumerate percentile rolls 1-100; success at or below rating, excluding 99-100; one baseline Effect plus one per complete ten margin'
    RatingEvaluations = 27
    RollEvaluations = 2700
    Rows = @($rows)
} | ConvertTo-Json -Depth 6
