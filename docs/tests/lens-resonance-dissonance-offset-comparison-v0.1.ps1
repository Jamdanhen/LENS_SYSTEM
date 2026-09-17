$ErrorActionPreference = 'Stop'
$checks = 0
function Get-Comparison([decimal]$Base, [decimal]$Help, [decimal]$Reduction) {
    $separateFactor = (1 + $Help) * [math]::Max([decimal]0, 1 - $Reduction)
    $netFactor = [math]::Max([decimal]0, 1 + $Help - $Reduction)
    $separateRaw = $Base * $separateFactor
    $netRaw = $Base * $netFactor
    $separate = [math]::Floor($separateRaw)
    $net = [math]::Floor($netRaw)
    [pscustomobject]@{
        Base=$Base; Help=$Help; Reduction=$Reduction
        SeparateRaw=$separateRaw; NetRaw=$netRaw
        SeparateRating=$separate; NetRating=$net
        SeparateEffectsOn30=if ($separate -ge 30) { 1 + [math]::Floor(($separate - 30) / 10) } else { 0 }
        NetEffectsOn30=if ($net -ge 30) { 1 + [math]::Floor(($net - 30) / 10) } else { 0 }
    }
}
[decimal[]]$helps = 0, 0.2, 0.5, 0.9, 1, 1.5, 2
[decimal[]]$reductions = 0, 0.2, 0.5, 0.9, 1, 1.1, 1.5, 2
$rows = foreach ($base in @([decimal]20, [decimal]60, [decimal]120, [decimal]200)) {
    foreach ($help in $helps) {
        foreach ($reduction in $reductions) {
            $row = Get-Comparison $base $help $reduction
            if ($row.NetRaw -lt $row.SeparateRaw) { throw 'Ordering' }
            if (($help -eq 0 -or $reduction -eq 0) -and $row.NetRaw -ne $row.SeparateRaw) { throw 'One-sided control' }
            if ($help -eq $reduction -and $row.NetRaw -ne $base) { throw 'Equal contributions' }
            if ($reduction -le 1 -and ($row.NetRaw - $row.SeparateRaw) -ne $base * $help * $reduction) { throw 'Cross-product difference' }
            if ($row.NetRaw -lt 0 -or $row.SeparateRaw -lt 0) { throw 'Negative result' }
            $checks += 5
            $row
        }
    }
}
$reference = foreach ($pair in @(@(0,0), @(0.2,0.2), @(0.5,0.5), @(0.9,0.9), @(0.2,1), @(0.5,1), @(1,1.5), @(0.5,1.5))) {
    Get-Comparison 60 ([decimal]$pair[0]) ([decimal]$pair[1])
}
$boost = foreach ($reduction in @([decimal]0.5, [decimal]1, [decimal]1.5)) {
    $before = Get-Comparison 60 0 $reduction
    $after = Get-Comparison 60 ([decimal]0.2) $reduction
    [pscustomobject]@{ Reduction=$reduction; SeparateBefore=$before.SeparateRating; SeparateBoost=$after.SeparateRating; NetBefore=$before.NetRating; NetBoost=$after.NetRating }
}
# Preserve excess before calculating the one net factor, not separate clamping first.
$full = Get-Comparison 60 ([decimal]0.5) ([decimal]1.3)
$removed = Get-Comparison 60 ([decimal]0.5) ([decimal]1.1)
if ($full.NetRating -ne 12 -or $removed.NetRating -ne 24) { throw 'Retained excess' }
$checks++
$withBand = Get-Comparison (60 * [decimal]0.5) ([decimal]0.5) ([decimal]0.5)
if ($withBand.NetRating -ne 30) { throw 'Function Band preservation' }
$checks++
$rounding = Get-Comparison ([decimal]40.9) ([decimal]0.2) ([decimal]0.1)
if ($rounding.NetRaw -ne [decimal]44.99 -or $rounding.NetRating -ne 44) { throw 'Final-only floor' }
$checks++
$result01 = 1 - (100 - 6)
if ($result01 -ne -93 -or $result01 -gt 0) { throw 'Permitted zero-Rating exceptional route' }
$checks++
[pscustomobject]@{
    Cases=$rows.Count; Checks=$checks; Reference60=$reference; PaidBoost=$boost
    ExcessBefore=$full.NetRating; ExcessAfterRemovingPointTwo=$removed.NetRating
    IndependentHalfFunctionBand=$withBand.NetRating
    Limits='Both nonnegative floors are candidate comparison boundaries. No new Access, condition recovery, matched-counter requirement, or full percentile simulation. Existing named contributions remain distinct even if numerical amounts offset.'
} | ConvertTo-Json -Depth 5
