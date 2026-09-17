$ErrorActionPreference = 'Stop'
$checks = 0
function Get-GeneratedEffects([decimal]$Rating, [decimal]$Roll) {
    if ($Roll -gt $Rating) { return 0 }
    1 + [math]::Floor(($Rating - $Roll) / 10)
}
function Get-Followup([decimal]$Base, [decimal]$Preparation, [decimal]$OtherR, [decimal]$D) {
    [math]::Floor($Base * [math]::Max([decimal]0, 1 + $OtherR + $Preparation - $D))
}
$rows = foreach ($prepRating in @(20, 60, 120, 200)) {
    foreach ($roll in 2..98) {
        $effects = Get-GeneratedEffects $prepRating $roll
        [decimal]$earned = [decimal]$effects / 10
        foreach ($followBase in @(20, 60, 120)) {
            foreach ($d in @([decimal]0, [decimal]0.5)) {
                $assessedEstablished = Get-Followup $followBase ([decimal]0.2) 0 $d
                $assessed = if ($effects -gt 0) { $assessedEstablished } else { Get-Followup $followBase 0 0 $d }
                $resolved = Get-Followup $followBase $earned 0 $d
                if ($effects -lt 0 -or $resolved -lt 0) { throw 'Negative output' }
                if ($roll -le $prepRating -and $effects -lt 1) { throw 'Baseline effect' }
                if ($roll -gt $prepRating -and $earned -ne 0) { throw 'Failed preparation conversion' }
                if ($effects -eq 0 -and $assessed -ne $resolved) { throw 'Unequal failed-setup control' }
                $checks += 4
                [pscustomobject]@{ PreparationRating=$prepRating; Roll=$roll; Effects=$effects; Earned=$earned; FollowBase=$followBase; D=$d; AssessedRating=$assessed; ResolvedRating=$resolved }
            }
        }
    }
}
$worked = foreach ($prepRating in @(20, 60, 120, 200)) {
    foreach ($roll in @(10, 30, 70)) {
        $e = Get-GeneratedEffects $prepRating $roll
        [pscustomobject]@{ PrepRating=$prepRating; Roll=$roll; Effects=$e; Resonance=([decimal]$e/10); Followup60=(Get-Followup 60 ([decimal]$e/10) 0 0) }
    }
}
$exceptional = foreach ($adjusted in @(-93, -192)) {
    $e = Get-GeneratedEffects 60 $adjusted
    [pscustomobject]@{ PrepRating=60; AdjustedRoll=$adjusted; Effects=$e; Resonance=([decimal]$e/10); Followup60=(Get-Followup 60 ([decimal]$e/10) 0 0) }
}
if ((Get-Followup 60 ([decimal]0.2) ([decimal]0.2) ([decimal]0.5)) -ne 54) { throw 'Distinct paid boost' }
$checks++
if ((Get-Followup ([decimal]40.9) ([decimal]0.2) 0 0) -ne 49) { throw 'Final-only floor' }
$checks++
if ((Get-GeneratedEffects 60 30) -ne 4 -or (Get-GeneratedEffects 120 30) -ne 10) { throw 'Reference effects' }
$checks++
$summaries = foreach ($prepRating in @(20, 60, 120, 200)) {
    $subset = @($rows | Where-Object { $_.PreparationRating -eq $prepRating -and $_.FollowBase -eq 60 -and $_.D -eq 0 })
    [pscustomobject]@{ PreparationRating=$prepRating; OrdinaryFaces=97; PositivePreparationFaces=@($subset | Where-Object { $_.Effects -gt 0 }).Count; MinResonance=($subset.Earned | Measure-Object -Minimum).Minimum; MaxResonance=($subset.Earned | Measure-Object -Maximum).Maximum }
}
[pscustomobject]@{
    Cases=$rows.Count; Checks=$checks; Worked=$worked; Exceptional=$exceptional; OrdinaryFaceRanges=$summaries
    Limits='The assessed +0.20 is a success-contingent fixture, not a universal preparation value or a free success. Rolls 02-98 isolate ordinary uncertain unopposed resolution; exceptional examples are separate, not a probability distribution. Automatic preparation has no generated-margin comparison. No new action cost, duration, accumulation, or field-wide applicability.'
} | ConvertTo-Json -Depth 5
