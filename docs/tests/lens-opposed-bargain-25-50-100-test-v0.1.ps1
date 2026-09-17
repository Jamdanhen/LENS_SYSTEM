$ErrorActionPreference = 'Stop'
$source = Get-Content -LiteralPath (Join-Path $PSScriptRoot 'lens-concept-led-25-50-100-rebuild-test-v0.1.json') -Raw | ConvertFrom-Json
$merchant = $source.builds[0]
$attributes = [ordered]@{ Might=3; Mobility=4; Psyche=5; Influence=8; Leverage=5 }
$derived = [ordered]@{
    Might=@(1,1,1,2,1)
    Mobility=@(2,1,1,2,2)
    Psyche=@(3,2,3,3,2)
    Influence=@(3,3,3,6,2)
    Leverage=@(1,2,1,1,1)
}
$tasks = [ordered]@{
    Persuade=8; Convey=6; Observation=5; Inference=4; Planning=4
    Deceive=4; Command=3; Pilot=3; Navigate=2; Traverse=3
    Block=3; Dodge=3; Research=2; Teaching=2
}
$fields = [ordered]@{
    'Retail commerce'=8; English=6; Music=4; 'Passenger vehicles'=4
    'Local geography'=4; Bookkeeping=4; Survival=4; Medicine=3; Cooking=3
}
$specialty = 8 # Secondhand goods, under Retail commerce; no Precision purchased.
function Sum($values) { ($values | Measure-Object -Sum).Sum }
if ((Sum $attributes.Values) -ne 25) { throw 'Attribute budget' }
$derivedTotal = 0
foreach ($parent in $derived.Keys) {
    foreach ($rank in $derived[$parent]) {
        if ($rank -lt 0 -or $rank -gt $attributes[$parent]) { throw 'Derived cap' }
        $derivedTotal += $rank
    }
}
if ($derivedTotal -ne 50) { throw 'Derived budget' }
if ((Sum $tasks.Values) + (Sum $fields.Values) + $specialty -ne 100) { throw 'Training budget' }
foreach ($rank in @($attributes.Values) + @($tasks.Values) + @($fields.Values) + @($specialty)) {
    if ($rank -lt 1 -or $rank -gt 10) { throw 'Rank horizon' }
}
function Mult([int]$rank) { [decimal]1 + [decimal]$rank / 10 }
$m = [decimal]$merchant.attributes.Psyche * (Mult $merchant.derived.Cognition) * (Mult $merchant.tasks.Persuade) * (Mult $merchant.fields.'Retail commerce')
$s = [decimal]$attributes.Influence * (Mult $derived.Influence[3]) * (Mult $tasks.Persuade) * (Mult $fields.'Retail commerce') * (Mult $specialty)
if ($m -ne [decimal]29.184 -or $s -ne [decimal]74.6496) { throw 'Stack mismatch' }
function Contest([decimal]$a, [decimal]$b) {
    $counts = [ordered]@{ SpecialistOnly=0; MerchantOnly=0; BothSpecialistWins=0; BothMerchantWins=0; BothFail=0; Tie=0 }
    for ($x=1; $x -le 100; $x++) {
        for ($y=1; $y -le 100; $y++) {
            $ax = $x -le $a -and $x -le 98
            $by = $y -le $b -and $y -le 98
            if ($ax -and -not $by) { $counts.SpecialistOnly++ }
            elseif ($by -and -not $ax) { $counts.MerchantOnly++ }
            elseif (-not $ax -and -not $by) { $counts.BothFail++ }
            elseif (($a-$x) -gt ($b-$y)) { $counts.BothSpecialistWins++ }
            elseif (($a-$x) -lt ($b-$y)) { $counts.BothMerchantWins++ }
            else { $counts.Tie++ }
        }
    }
    if ((Sum $counts.Values) -ne 10000) { throw 'Outcome partition' }
    [pscustomobject]@{ SpecialistRating=$a; MerchantRating=$b; Counts=$counts }
}
$main = Contest $s $m
$fallback = Contest ($s / (Mult $specialty)) $m
if ($main.Counts.SpecialistOnly + $main.Counts.BothSpecialistWins -ne 6994) { throw 'Main result mismatch' }
if ($fallback.Counts.SpecialistOnly + $fallback.Counts.BothSpecialistWins -ne 3694) { throw 'Fallback result mismatch' }
[pscustomobject]@{
    Budgets=@{ Attributes=25; Derived=$derivedTotal; Tasks=(Sum $tasks.Values); Fields=(Sum $fields.Values); Specialty=$specialty; Precision=0; Training=100 }
    Main=$main
    OutsideSpecialty=$fallback
} | ConvertTo-Json -Depth 6
