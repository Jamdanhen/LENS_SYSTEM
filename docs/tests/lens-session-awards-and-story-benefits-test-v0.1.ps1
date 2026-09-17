$ErrorActionPreference = 'Stop'
$checks = 0
# Previously earned points allow first-session expenditure before its award.
# This is not a creation-carryover rule or a new free grant.
$openingBank = 4
$cards = @(
    @{ Name='Current'; Participation=5; Meaningful=2.5; Exceptional=5 },
    @{ Name='Near-conversion'; Participation=5; Meaningful=3; Exceptional=5 },
    @{ Name='Contribution-weighted'; Participation=4; Meaningful=3; Exceptional=6 }
)
# Tiers follow Progress, Discovery, Character Expression, Narrative Engagement.
# Small provision values are fixtures, not adopted prices; Assets +1 uses its price.
$sessions = @(
    @{ Name='Quiet character interlude'; Tiers=@(0,0,1,1); Delivered=0; Benefit='None'; Credit=0 },
    @{ Name='Route opened and backing earned'; Tiers=@(1,1,0,1); Delivered=1; Benefit='Defined dependable support'; Credit=0 },
    @{ Name='Failed rescue with consequential choices'; Tiers=@(0,1,1,1); Delivered=0; Benefit='None'; Credit=1 },
    @{ Name='Full session; prior language study reaches fluency'; Tiers=@(1,1,1,1); Delivered=1; Benefit='Language Access'; Credit=0 },
    @{ Name='Major objective resolved'; Tiers=@(2,0,1,0); Delivered=0; Benefit='None'; Credit=0 },
    @{ Name='Finale and enduring material gain'; Tiers=@(2,1,1,2); Delivered=20; Benefit='Assets +1'; Credit=0 }
)
function Award($Card,$Tiers) {
    $sum = $Card.Participation
    foreach ($tier in $Tiers) {
        if ($tier -eq 1) { $sum += $Card.Meaningful }
        elseif ($tier -eq 2) { $sum += $Card.Exceptional }
        elseif ($tier -ne 0) { throw 'Invalid award tier' }
    }
    return $sum
}
$table = foreach ($session in $sessions) {
    $entry = [ordered]@{Session=$session.Name;Tiers=$session.Tiers;Delivered=$session.Delivered;Benefit=$session.Benefit;EarmarkedSurvivalCredit=$session.Credit}
    foreach ($card in $cards) { $entry[$card.Name] = Award $card $session.Tiers }
    [pscustomobject]$entry
}
$cardChecks = foreach ($card in $cards) {
    $values = @()
    foreach ($p in 0..2) { foreach ($d in 0..2) { foreach ($c in 0..2) { foreach ($n in 0..2) {
        $values += Award $card @($p,$d,$c,$n)
    } } } }
    if ($values.Count -ne 81) { throw 'Incomplete tier enumeration' }
    if (($values | Measure-Object -Minimum).Minimum -ne $card.Participation) { throw 'Incorrect floor' }
    if (($values | Measure-Object -Maximum).Maximum -ne $card.Participation+4*$card.Exceptional) { throw 'Incorrect top total' }
    $checks += 3
    [pscustomobject]@{Name=$card.Name;Floor=$card.Participation;ThreeMeaningful=(Award $card @(1,1,1,0));AllMeaningful=(Award $card @(1,1,1,1));AllExceptional=(Award $card @(2,2,2,2));TierCombinations=$values.Count}
}
$results = foreach ($card in $cards) {
    foreach ($spend in @(0,2,4)) {
        foreach ($includeStory in @($false,$true)) {
            foreach ($milestone in @(0,12.5)) {
                $cash=$openingBank; $delivered=0; $credit=0; $regular=0; $first50=$null; $ledger=@()
                for ($i=0; $i -lt $sessions.Count; $i++) {
                    $session=$sessions[$i]
                    $award=Award $card $session.Tiers
                    $extra=if ($i -eq 5) { $milestone } else { 0 }
                    $gain=if ($includeStory) { $session.Delivered } else { 0 }
                    $earnedCredit=if ($includeStory) { $session.Credit } else { 0 }
                    if ($cash -lt $spend) { throw 'Immediate expenditure borrows the end-of-session award' }
                    $regular += $award
                    $cash += $award+$extra-$spend
                    $delivered += $gain
                    $credit += $earnedCredit
                    if ($cash -lt 0) { throw 'Borrowing future awards' }
                    if ($null -eq $first50 -and $cash -ge 50) { $first50=$i+1 }
                    $ledger += [pscustomobject]@{Session=$i+1;RegularAward=$award;Milestone=$extra;ImmediateSpent=$spend;Cash=$cash;DeliveredThisSession=$gain;EarmarkedThisSession=$earnedCredit}
                    $checks++
                }
                if ($cash+$spend*6 -ne $openingBank+$regular+$milestone) { throw 'Cash reconciliation failed' }
                if ($includeStory -and ($delivered -ne 22 -or $credit -ne 1)) { throw 'Story reconciliation failed' }
                if (-not $includeStory -and ($delivered -ne 0 -or $credit -ne 0)) { throw 'Story-off control failed' }
                $checks += 3
                [pscustomobject]@{Card=$card.Name;SpendPerSession=$spend;StoryBenefits=$includeStory;Milestone=$milestone;OpeningBank=$openingBank;RegularAwardTotal=$regular;ImmediateSpent=$spend*6;UnspentCash=$cash;NetCashAdded=$cash-$openingBank;DeliveredDevelopmentValue=$delivered;EarmarkedSurvivalCredit=$credit;NetRetainedPricedValue=$cash-$openingBank+$delivered+$credit;SessionFirstAffording50=$first50;Ledger=$ledger}
            }
        }
    }
}
# Earning a provision adds development, not fungible cash or a session deduction.
foreach ($with in $results | Where-Object StoryBenefits) {
    $without=$results | Where-Object { -not $_.StoryBenefits -and $_.Card -eq $with.Card -and $_.SpendPerSession -eq $with.SpendPerSession -and $_.Milestone -eq $with.Milestone }
    if ($with.UnspentCash -ne $without.UnspentCash -or $with.SessionFirstAffording50 -ne $without.SessionFirstAffording50) { throw 'Story award incorrectly treated as cash' }
    if ($with.NetRetainedPricedValue-$without.NetRetainedPricedValue -ne 23) { throw 'Story value lost or counted twice' }
    $checks += 2
}
[pscustomobject]@{Status='Candidate award and expenditure comparison, no rules adopted';Checks=$checks;Sessions=$table;Cards=$cardChecks;Results=$results;Limit='Constructed awards, not observed player frequencies or validated small-purchase prices'} | ConvertTo-Json -Depth 8
