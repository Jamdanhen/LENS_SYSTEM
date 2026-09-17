$ErrorActionPreference = 'Stop'
$checks=0
function Severity([int]$Rating,[int]$Extra) {
    if ($Extra -lt 1 -or $Extra -gt 100) { throw 'Extra die outside percentile range' }
    $total=100+$Extra
    $margin=$total-$Rating
    $steps=[int][math]::Max(0,[math]::Floor($margin/10))
    [pscustomobject]@{Rating=$Rating;Extra=$Extra;Total=$total;Failed=$true;Margin=$margin;MarginOnly=$steps;BaselinePlusMargin=1+$steps}
}
$rows=foreach ($rating in @(20,40,60,80,98,120,150,180,200,240,320)) {
    $cases=@(foreach ($extra in 1..100) { Severity $rating $extra })
    foreach ($case in $cases) {
        if ($case.Total -ne 100+$case.Extra -or -not $case.Failed) { throw 'Cumulative failure control failed' }
        if ($case.BaselinePlusMargin -ne $case.MarginOnly+1 -or $case.MarginOnly -lt 0) { throw 'Severity mapping failed' }
        $checks+=2
    }
    [pscustomobject]@{
        Rating=$rating
        MarginOnlyMin=($cases.MarginOnly | Measure-Object -Minimum).Minimum
        MarginOnlyMax=($cases.MarginOnly | Measure-Object -Maximum).Maximum
        MarginOnlyMean=($cases.MarginOnly | Measure-Object -Average).Average
        ZeroStepsPercent=@($cases | Where-Object MarginOnly -eq 0).Count
        AtLeastTenStepsPercent=@($cases | Where-Object MarginOnly -ge 10).Count
        BaselineMin=($cases.BaselinePlusMargin | Measure-Object -Minimum).Minimum
        BaselineMax=($cases.BaselinePlusMargin | Measure-Object -Maximum).Maximum
        BaselineMean=($cases.BaselinePlusMargin | Measure-Object -Average).Average
        BaselineAtLeastTenPercent=@($cases | Where-Object BaselinePlusMargin -ge 10).Count
        SameExtra50=(Severity $rating 50)
    }
}
# Higher capability may reduce severity, never turn the natural 00 into success.
foreach ($extra in 1..100) {
    $previous=1000
    foreach ($rating in @(20,40,60,80,98,120,150,180,200,240,320)) {
        $current=Severity $rating $extra
        if ($current.MarginOnly -gt $previous -or -not $current.Failed) { throw 'Capability monotonicity failed' }
        $previous=$current.MarginOnly
        $checks++
    }
}
$fixture=Severity 80 50
if ($fixture.Total -ne 150 -or $fixture.Margin -ne 70 -or $fixture.MarginOnly -ne 7) { throw 'User example failed' }
$checks++
[pscustomobject]@{
    Status='Candidate cumulative 00 mechanism; mappings and consequences not adopted'
    ConditionalCases=1100;Checks=$checks;Results=$rows
    Limits='One natural initial 00 followed by one extra d100. Initial 99 stays failure without an extra die. No repeated-00 continuation, automatic self-harm, opposition formula, paid-reroll timing within the sequence, or compulsory roll for routine actions adopted.'
} | ConvertTo-Json -Depth 5
