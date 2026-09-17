$ErrorActionPreference = 'Stop'
$script:Checks = 0

function Assert-Equal($Actual, $Expected, [string]$Label) {
    if ($Actual -ne $Expected) { throw "$Label : expected $Expected, got $Actual" }
    $script:Checks++
}

function Get-Result([int]$Rating, [int]$Initial, [int]$Completed) {
    $margin = $Rating - $Completed
    $success = ($Initial -eq 1) -or
        ($Initial -ne 100 -and $margin -ge 0)
    $effects = if ($success) { 1 + [int][math]::Floor([math]::Max(0,$margin)/10) } else { 0 }
    $severity = if ($Initial -eq 100) { [int][math]::Floor([math]::Max(0,-$margin)/10) } else { 0 }
    [pscustomobject]@{ Success=$success; Margin=$margin; Effects=$effects; Severity=$severity }
}

function Get-Placement($A, $B) {
    if ($A.Success -ne $B.Success) {
        if ($A.Success) { return 1 }
        return -1
    }
    return [math]::Sign($A.Margin - $B.Margin)
}

function Get-Remainder($A, $B) { return [math]::Max(0, $A.Effects - $B.Effects) }
function Get-Counter($A, $B) { return [math]::Min(1, [math]::Max(0, $B.Effects - $A.Effects)) }

# Completed continuation values are the established arithmetic fixtures.
$a = Get-Result 90 60 60
$b = Get-Result 60 40 40
Assert-Equal (Get-Remainder $a $b) 1 'Four Effects against three'
$a = Get-Result 80 51 51
$b = Get-Result 80 59 59
Assert-Equal (Get-Placement $a $b) 1 'Sub-band comparative placement'
Assert-Equal (Get-Remainder $a $b) 0 'Placement cannot bypass cancellation'
Assert-Equal (Get-Counter $a $b) 0 'Equal Effects have no counter'
$a = Get-Result 40 50 50
$b = Get-Result 40 70 70
Assert-Equal (Get-Placement $a $b) 1 'Closer failed attempt'
Assert-Equal (Get-Remainder $a $b) 0 'Failed comparison winner has no attack Effects'
Assert-Equal (Get-Placement $a $a) 0 'Equal outcome and Margin tie'
$a = Get-Result 80 30 30
$b = Get-Result 20 98 98
Assert-Equal (Get-Remainder $a $b) 6 'Failed defense cannot amplify output'
$a = Get-Result 0 1 1
$b = Get-Result 40 41 41
Assert-Equal $a.Success $true 'Permitted Rating-zero natural01 succeeds'
Assert-Equal $a.Effects 1 'Negative Margin natural01 baseline only'
Assert-Equal (Get-Placement $a $b) 1 'Success first despite equal negative Margins'
$a = Get-Result 20 1 -49
$b = Get-Result 160 50 50
Assert-Equal (Get-Placement $a $b) -1 'Natural01 does not guarantee first place'
$a = Get-Result 160 100 150
$b = Get-Result 20 15 15
Assert-Equal $a.Success $false 'Positive-Margin natural00 still fails'
Assert-Equal $a.Severity 0 'No invented minimum00 severity'
Assert-Equal (Get-Placement $a $b) -1 'Successful attempt outranks positive-Margin failure'
$a = Get-Result 90 60 60
$b = Get-Result 80 100 150
Assert-Equal (Get-Remainder $a $b) 4 '00 severity not added to attack'
Assert-Equal $b.Severity 7 'Own00 severity preserved separately'
Assert-Equal (Get-Counter $a $b) 0 'Failed defense has no surplus counter'
$b = Get-Result 80 1 -49
Assert-Equal (Get-Counter $a $b) 1 'Exceptional defense counter capped'
Assert-Equal (Get-Remainder $a $b) 0 'Exceptional defense cancels fully'
$a = Get-Result 160 99 99
Assert-Equal $a.Success $true '99 is ordinary success at Rating160'
Assert-Equal $a.Effects 7 '99 uses ordinary successful Margin bands'
$b = Get-Result 80 20 20
Assert-Equal (Get-Placement $a $b) 1 'Ordinary99 Margin61 places ahead of Margin60'
Assert-Equal (Get-Remainder $a $b) 0 'Equal seven-Effect outputs still cancel'
$a = Get-Result 98 99 99
Assert-Equal $a.Success $false '99 still fails below its ordinary threshold'
Assert-Equal $a.Effects 0 'Failed ordinary99 produces no successful Effects'
$a = Get-Result 99 99 99
Assert-Equal $a.Success $true '99 succeeds at equal Final Rating'
Assert-Equal $a.Effects 1 'Zero-Margin ordinary99 gives baseline Effect'
$a = Get-Result 104 60 60
$b = Get-Result 80 60 60
Assert-Equal (Get-Remainder $a $b) 2 'Equipment already in final104 Rating'
Assert-Equal (Get-Remainder $a $a) 0 'Equal equipped output cancels without re-addition'

# Guard against leaving superseded active prose in the two updated references.
$root = Split-Path (Split-Path $PSScriptRoot -Parent) -Parent
$paths = @(
    (Join-Path $root 'docs/system/lens-system-baseline-draft-v0.1.md'),
    (Join-Path $root 'docs/system/lens-terminology-quick-reference-v0.1.md')
)
foreach ($path in $paths) {
    $content = Get-Content -LiteralPath $path -Raw
    Assert-Equal ([bool]($content -match 'complete 10 points of Net Margin')) $false 'No old Net-Margin Effect formula'
    Assert-Equal ([bool]($content -match 'Special-result opposition remains unresolved')) $false 'No stale opposition status'
    Assert-Equal ([bool]($content -match 'by00 leaves1 and fails')) $false 'No stale Rating-zero failure'
    Assert-Equal ([bool]($content -match '(?:Natural 99 is|99:) failure regardless')) $false 'No stale automatic99 failure'
    $fences = [regex]::Matches($content, '(?m)^```').Count
    Assert-Equal ($fences % 2) 0 'Balanced code fences'
}
[pscustomobject]@{ Status='Passed'; Assertions=$script:Checks; Scope='Adopted independent-Effects rules and active-reference checks; not full continuation probabilities' } | ConvertTo-Json
