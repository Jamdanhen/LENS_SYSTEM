$ErrorActionPreference = 'Stop'

$cases = 0
foreach ($rank in 0..10) {
    $allowance = [decimal](10 + $rank)
    foreach ($actions in 1..10) {
        foreach ($moves in 0..$actions) {
            $attacks = $actions - $moves
            $distance = $allowance * (1 + $moves)
            $attackRating = [math]::Floor([decimal]60 / $actions)
            if ($moves -eq 0 -and $distance -ne $allowance) {
                throw 'Additional attacks duplicated ordinary movement.'
            }
            if ($moves -gt 0 -and ($distance - $allowance) -ne $moves * $allowance) {
                throw 'Candidate did not grant one full allowance per movement action.'
            }
            if ($attacks -gt 0 -and $attackRating -ne [math]::Floor([decimal]60 / $actions)) {
                throw 'Attack did not use the declared action divisor.'
            }
            $cases++
        }
    }
}
if ($cases -ne 715) { throw 'Unexpected matrix size.' }

$fixtures = @(
    @{ Label='One attack'; Moves=0; Attacks=1; ExpectedDistance=15; ExpectedRating=60 },
    @{ Label='One movement action'; Moves=1; Attacks=0; ExpectedDistance=30; ExpectedRating=$null },
    @{ Label='Two attacks'; Moves=0; Attacks=2; ExpectedDistance=15; ExpectedRating=30 },
    @{ Label='Movement and attack'; Moves=1; Attacks=1; ExpectedDistance=30; ExpectedRating=30 },
    @{ Label='Two movement actions'; Moves=2; Attacks=0; ExpectedDistance=45; ExpectedRating=$null },
    @{ Label='Two movements and attack'; Moves=2; Attacks=1; ExpectedDistance=45; ExpectedRating=20 },
    @{ Label='Three movement actions'; Moves=3; Attacks=0; ExpectedDistance=60; ExpectedRating=$null },
    @{ Label='Ten movement actions'; Moves=10; Attacks=0; ExpectedDistance=165; ExpectedRating=$null }
)
foreach ($fixture in $fixtures) {
    $actions = $fixture.Moves + $fixture.Attacks
    $distance = 15 * (1 + $fixture.Moves)
    $rating = if ($fixture.Attacks -gt 0) { [math]::Floor([decimal]60 / $actions) } else { $null }
    if ($distance -ne $fixture.ExpectedDistance -or $rating -ne $fixture.ExpectedRating) {
        throw "Fixture failed: $($fixture.Label)"
    }
    [pscustomobject]@{ Activity=$fixture.Label; Actions=$actions; Meters=$distance; AttackRating=$rating }
}
"PASS: $cases arithmetic combinations and $($fixtures.Count) fixed fixtures. This does not establish fictional feasibility."
