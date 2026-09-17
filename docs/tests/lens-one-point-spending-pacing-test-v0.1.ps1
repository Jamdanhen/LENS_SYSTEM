$ErrorActionPreference = 'Stop'
$checks = 0
$prices = [ordered]@{ SpecialtyPrecision=5; TaskField=10; Axis=15; Derived=20; HOLT=40; Attribute=60 }
# Fixed spending is a sensitivity test, not a forecast of player behavior.
$pacing = foreach ($award in @(5,14,17,25,50)) {
    foreach ($spend in @(0,1,2,4,8,14,20)) {
        $net = $award-$spend
        $sessions = [ordered]@{}
        foreach ($purchase in $prices.Keys) {
            $sessions[$purchase] = if ($net -gt 0) { [int][math]::Ceiling($prices[$purchase]/$net) } else { $null }
            if ($net -gt 0) {
                $n = $sessions[$purchase]
                if ($n*$net -lt $prices[$purchase] -or ($n-1)*$net -ge $prices[$purchase]) { throw 'Affordability threshold failed' }
                $checks++
            }
        }
        [pscustomobject]@{ Award=$award; Spending=$spend; NetPerSession=$net; NetOverTenSessions=10*$net; AwardShareSpent=$spend/$award; SavingSessions=$sessions }
    }
}

# Only already-earned funds may be spent; end-session awards arrive afterward.
$ledgers = foreach ($award in @(5,14,25)) {
    foreach ($desired in @(2,8,20)) {
        $opening = 20; $bank = $opening; $spent = 0; $shortfall = 0
        foreach ($session in 1..12) {
            $actual = [math]::Min($bank,$desired)
            $shortfall += $desired-$actual
            $bank -= $actual
            if ($bank -lt 0) { throw 'Borrowed future award' }
            $bank += $award
            $spent += $actual
            $checks++
        }
        if ($bank+$spent -ne $opening+12*$award) { throw 'Ledger reconciliation failed' }
        $checks++
        [pscustomobject]@{Award=$award;DesiredSpend=$desired;OpeningPreviouslyEarned=$opening;Sessions=12;ActualSpent=$spent;UnfundedRequestedSpending=$shortfall;EndingBank=$bank}
    }
}

# Reuse the exhaustive probability test, including both special-face controls.
$rollTest = & "$PSScriptRoot/lens-boost-and-reroll-test-v0.1.ps1" | ConvertFrom-Json
$checks += $rollTest.Checks
$usage = foreach ($row in $rollTest.FailureRerolls) {
    foreach ($attempts in @(5,10)) {
        $expected = $attempts*$row.TrialExpectedPointCost
        if ($expected -lt 0 -or $expected -gt 2*$attempts) { throw 'Expression spending exceeded one of each' }
        $checks++
        [pscustomobject]@{Rating=$row.Raw;BoostEveryAttempt=$row.Boost;SpecialFacesRerollable=$row.SpecialFacesRerollable;UncertainAttempts=$attempts;ExpectedSpending=$expected;ExpectedRemainderFrom14=14-$expected;SuccessPercent=$row.WithFailureRerollPercent}
    }
}
if (($pacing | Where-Object { $_.Award -eq 14 -and $_.Spending -eq 4 }).SavingSessions.Attribute -ne 6) { throw 'Reference Attribute pacing failed' }
if (($pacing | Where-Object { $_.Award -eq 14 -and $_.Spending -eq 0 }).SavingSessions.Attribute -ne 5) { throw 'Unspent reference failed' }
$checks += 2
[pscustomobject]@{
    Status='Completed one-point price sensitivity test; no new caps or award changes'
    Checks=$checks
    PacingCases=$pacing.Count
    BankCases=$ledgers.Count
    UsageCases=$usage.Count
    Pacing=$pacing
    BankLedgers=$ledgers
    FailureOnlyRerollUsage=$usage
    Limits='Constructed spending, not observed play. Fractional values are expectations, not purchase prices. Affordability assumes banked spending funds; no free starting bank is granted. Rank eligibility, special-result policy, and other Resonance combinations are not decided here.'
} | ConvertTo-Json -Depth 7
