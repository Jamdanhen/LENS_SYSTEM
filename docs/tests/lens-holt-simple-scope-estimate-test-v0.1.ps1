$ErrorActionPreference = 'Stop'

function Measure-Scope([string[]]$Areas) {
    $count = @($Areas | Sort-Object -Unique).Count
    [pscustomobject]@{ Areas = $count; EstimateUnits = 5 * $count }
}

$strength = @('Strength', 'Movement', 'Stability', 'Projection')
$sea = @('Movement', 'Awareness', 'Connection', 'Control', 'Assets')
$might = @('Strength', 'Toughness', 'Resistance', 'Vigor', 'Resilience')
$mobility = @('Movement', 'Maneuverability', 'Stability', 'Coordination', 'Responsiveness')
$psyche = @('Cognition', 'Learning', 'Awareness', 'Insight', 'Resolve')
$influence = @('Presence', 'Projection', 'Connection', 'Manipulation', 'Control')
$leverage = @('Assets', 'Network', 'Authority', 'Reputation', 'Background')

$cases = @(
    @{ Name = 'Strength: four listed baseline routes only'; Areas = $strength; Expected = 20 }
    @{ Name = 'Sea: five listed baseline routes only'; Areas = $sea; Expected = 25 }
    @{ Name = 'Strength: narrower two-route test package'; Areas = @('Strength', 'Stability'); Expected = 10 }
    @{ Name = 'Physical-only ten-route test package'; Areas = $might + $mobility; Expected = 50 }
    @{ Name = 'Leverage-only five-route test package'; Areas = $leverage; Expected = 25 }
    @{ Name = 'Original twenty-route reference'; Areas = $might + $mobility + $psyche + $influence; Expected = 100 }
    @{ Name = 'All twenty-five-route test package'; Areas = $might + $mobility + $psyche + $influence + $leverage; Expected = 125 }
)

$results = foreach ($case in $cases) {
    $result = Measure-Scope $case.Areas
    if ($result.EstimateUnits -ne $case.Expected) { throw "Failed: $($case.Name)" }
    [pscustomobject]@{ Case = $case.Name; Count = $result.Areas; Estimate = $result.EstimateUnits }
}

if ((Measure-Scope ($strength + 'Strength')).EstimateUnits -ne 20) {
    throw 'Repeated applications through one area must not inflate the count.'
}
if ((Measure-Scope ($strength + 'Toughness')).EstimateUnits -ne 25) {
    throw 'One additional permitted area must add five units.'
}
if ((Measure-Scope ($strength + $sea)).EstimateUnits -ne 40) {
    throw 'One combined eight-area package must count its shared Movement route once.'
}

[pscustomobject]@{
    Status = 'Estimate candidate only; not adopted pricing'
    Results = @($results)
    Sensitivity = @(
        'Four areas plus or minus one: 15-25 units around 20.'
        'Twenty areas plus or minus one: 95-105 units around 100.'
    )
    ChecksPassed = 10
    Note = 'The combined-package check is not a rule for buying or compounding separate HOLTs.'
} | ConvertTo-Json -Depth 5
