$ErrorActionPreference = 'Stop'

$builds = @(
    @{ Name='Mobility only'; Ranks=@(5,0,0,0,0,0); Expected=5 },
    @{ Name='Broad training at 5'; Ranks=@(5,5,5,5,0,0); Expected=16 },
    @{ Name='Same build, narrow training at 5'; Ranks=@(5,5,5,5,5,5); Expected=37 },
    @{ Name='All six at 7'; Ranks=@(7,7,7,7,7,7); Expected=99 },
    @{ Name='All six at 8'; Ranks=@(8,8,8,8,8,8); Expected=151 },
    @{ Name='All six at 9'; Ranks=@(9,9,9,9,9,9); Expected=222 },
    @{ Name='Five at 10, Precision 5'; Ranks=@(10,10,10,10,10,5); Expected=240 },
    @{ Name='Ranked maximum'; Ranks=@(10,10,10,10,10,10); Expected=320 }
)

$pairs = 0
foreach ($build in $builds) {
    $r = $build.Ranks
    if ($r[1] -gt $r[0]) { throw 'Movement exceeds Mobility.' }
    $raw = [decimal]$r[0]
    foreach ($rank in $r[1..5]) { $raw *= 1 + [decimal]$rank / 10 }
    $rating = [math]::Floor($raw)
    if ($rating -ne $build.Expected) { throw "Unexpected Rating: $($build.Name)" }
    foreach ($seconds in @(3,4)) {
        $moveAndAct = $rating * $seconds / 40
        $dedicatedMovement = $rating * $seconds / 20
        if ($dedicatedMovement -ne 2 * $moveAndAct) { throw 'Doubling failed.' }
        if ($seconds -eq 4 -and $moveAndAct -ne $rating / 10) { throw 'Four-second conversion failed.' }
        $pairs++
    }
    [pscustomobject]@{
        Build=$build.Name
        Ranks=($r -join '/')
        Raw=$raw
        Rating=$rating
        Walk3=($rating * 3 / 40)
        Sprint3=($rating * 3 / 20)
        Walk4=($rating / 10)
        Sprint4=($rating / 5)
    } | ConvertTo-Json -Compress
}
if ($pairs -ne 16) { throw 'Unexpected case count.' }
'PASS: eight build Ratings and 16 duration/pace pairs, yielding 32 distance outputs.'
