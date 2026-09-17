$ErrorActionPreference = 'Stop'
$tolerance = [decimal]0.000000001
$builds = @(
    @{ Ranks=@(5,0,0,0,0,0); E=5 },
    @{ Ranks=@(5,5,5,5,0,0); E=16 },
    @{ Ranks=@(5,5,5,5,5,5); E=37 },
    @{ Ranks=@(7,7,7,7,7,7); E=99 },
    @{ Ranks=@(8,8,8,8,8,8); E=151 },
    @{ Ranks=@(9,9,9,9,9,9); E=222 },
    @{ Ranks=@(10,10,10,10,10,5); E=240 },
    @{ Ranks=@(10,10,10,10,10,10); E=320 }
)
$outputs = 0
foreach ($build in $builds) {
    $raw = [decimal]$build.Ranks[0]
    if ($build.Ranks[1] -gt $build.Ranks[0]) { throw 'Parent cap failed.' }
    foreach ($rank in $build.Ranks[1..5]) { $raw *= 1 + [decimal]$rank / 10 }
    if ([math]::Floor($raw) -ne $build.E) { throw 'Build Rating mismatch.' }
    $row = [ordered]@{ Ranks=($build.Ranks -join '/'); Expression=$build.E }
    foreach ($floor in @(0,2,4,6)) {
        $distance3 = [decimal]$floor + (24 - $floor) * [decimal]$build.E / 320
        $row["Floor$floor"] = $distance3
        foreach ($seconds in @(3,4)) {
            $ordinary = $distance3 * $seconds / 3
            $fullMove = $ordinary * 2
            if ($fullMove -le $ordinary) { throw 'Dedicated movement did not improve distance.' }
            if ($build.E -eq 320 -and [math]::Abs($ordinary - 8 * $seconds) -gt $tolerance) {
                throw 'Upper anchor changed between candidates.'
            }
            if ($floor -eq 4 -and [math]::Abs($ordinary - (4 + [decimal]$build.E / 16) * $seconds / 3) -gt $tolerance) {
                throw 'Simplified four-meter formula mismatch.'
            }
            $outputs += 2
        }
    }
    [pscustomobject]$row | ConvertTo-Json -Compress
}
if ($outputs -ne 128) { throw 'Wrong output count.' }
foreach ($band in @([decimal]0,[decimal]0.25,[decimal]0.5,[decimal]0.75,[decimal]1)) {
    [pscustomobject]@{
        Band=$band
        FloorAfterReducedExpression=(4 + 320 * $band / 16)
        EntireAllowanceReduced=(24 * $band)
    } | ConvertTo-Json -Compress
}
'PASS: eight reused builds; 128 distance outputs with equal upper anchors; five impairment-order comparisons.'
