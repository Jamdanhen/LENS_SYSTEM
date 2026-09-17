$ErrorActionPreference = 'Stop'
$builds = @(
    @{ Ranks=@(5,0,0,0,0,0); Single=4; Split=2 },
    @{ Ranks=@(5,5,5,5,0,0); Single=16; Split=8 },
    @{ Ranks=@(5,5,5,5,5,5); Single=37; Split=18 },
    @{ Ranks=@(7,7,7,7,7,7); Single=97; Split=48 },
    @{ Ranks=@(8,8,8,8,8,8); Single=148; Split=74 },
    @{ Ranks=@(9,9,9,9,9,9); Single=218; Split=109 },
    @{ Ranks=@(10,10,10,10,10,5); Single=235; Split=117 },
    @{ Ranks=@(10,10,10,10,10,10); Single=313; Split=156 }
)
function Get-Effects([decimal]$rating, [decimal]$roll) {
    if ($roll -gt $rating) { return 0 }
    return 1 + [math]::Floor(($rating - $roll) / 10)
}
$ordinaryCases = 0
$rows = foreach ($build in $builds) {
    $raw = [decimal]$build.Ranks[0]
    if ($build.Ranks[1] -gt $build.Ranks[0]) { throw 'Parent cap violation.' }
    foreach ($rank in $build.Ranks[1..5]) { $raw *= 1 + [decimal]$rank / 10 }
    foreach ($actions in @(1,2)) {
        $rating = [math]::Floor($raw * [decimal]0.98 / $actions)
        $expected = if ($actions -eq 1) { $build.Single } else { $build.Split }
        if ($rating -ne $expected) { throw 'Unexpected final-only Rating.' }
        $effects = foreach ($roll in 2..98) {
            $ordinaryCases++
            $e = Get-Effects $rating $roll
            if ($e -gt 0 -and $roll -gt $rating) { throw 'Failed push generated distance.' }
            if ($e -eq 0 -and $roll -le $rating) { throw 'Successful push lost baseline Effect.' }
            if ((20 + 10 * $e) -lt 20) { throw 'Ordinary failure removed base travel.' }
            $e
        }
        $successful = @($effects | Where-Object { $_ -gt 0 })
        # Every tested Rating is at least 1, so every initial-01 chain succeeds.
        $successPercent = $successful.Count + 1
        if ($successPercent -ne [math]::Min($rating,98)) { throw 'Success count mismatch.' }
        $bounds = $successful | Measure-Object -Minimum -Maximum
        [pscustomobject]@{
            Ranks=($build.Ranks -join '/')
            Raw=$raw
            Actions=$actions
            Rating=$rating
            NeutralRating=[math]::Floor($raw / $actions)
            SuccessPercent=$successPercent
            OrdinaryExtraMinFt=10 * $bounds.Minimum
            OrdinaryExtraMaxFt=10 * $bounds.Maximum
            EffectsAtRoll20=Get-Effects $rating 20
            ExtraFtAtRoll20=10 * (Get-Effects $rating 20)
            ExtraFtAt01Then06=10 * (Get-Effects $rating (-93))
            ExtraFtAt01Then01Then06=10 * (Get-Effects $rating (-192))
            SeverityAt00Then50=[math]::Max([decimal]0,[math]::Floor((150 - $rating) / 10))
        }
    }
}
if ($ordinaryCases -ne 1552) { throw 'Unexpected ordinary-face count.' }
$rows | ConvertTo-Json -Depth 4
if ((Get-Effects 16 16) -ne 1) { throw 'Inclusive tie convention failed.' }
if ((Get-Effects 16 17) -ne 0) { throw 'Failure boundary failed.' }
if ((Get-Effects 313 98) -ne 22 -or (Get-Effects 313 2) -ne 32) { throw 'Maximum fixture bounds failed.' }
'PASS: 16 build/action cases, 1552 ordinary faces, inclusive success boundary, and special-result fixtures.'
