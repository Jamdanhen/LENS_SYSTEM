# LENS Scale Test Record

Version: 0.1
Status: Working math test record
Date: 2026-06-30
Subject: Exponential x1.6 Scale candidate
Reference: lens-system-working-reference-v0.2.md

---

## Purpose

This record tests Exponential x1.6 as the current leading Scale candidate.

The test compares x1.6 against:

- Exponential x1.5
- Exponential x1.75

The purpose is not to final-lock Scale.

The purpose is to determine whether x1.6 deserves to remain the leading candidate for the next development pass.

---

## Locked Test Inputs

Difficulty curve:

```text
D1  = 98
D2  = 58.8
D3  = 35.28
D4  = 21.168
D5  = 12.7008
D6  = 7.62048
D7  = 4.572288
D8  = 2.7433728
D9  = 1.64602368
D10 = 0.987614208
```

Human baselines:

```text
Common Specialized = 16.875
Elite Specialized  = 46.656
Peak Specialized   = 61.731
Max Specialized    = 80
```

Rounding:

```text
Carry full precision through all multiplication.
Floor only the final displayed value.
```

Formula:

```text
Human Capability
x Scale Modifier
x Difficulty Multiplier
= Final displayed value
```

---

## Scale Values Tested

Exponential x1.5:

```text
M1  = x1.000000
M2  = x1.500000
M3  = x2.250000
M4  = x3.375000
M5  = x5.062500
M6  = x7.593750
M7  = x11.390625
M8  = x17.085938
M9  = x25.628906
M10 = x38.443359
```

Exponential x1.6:

```text
M1  = x1.000000
M2  = x1.600000
M3  = x2.560000
M4  = x4.096000
M5  = x6.553600
M6  = x10.485760
M7  = x16.777216
M8  = x26.843546
M9  = x42.949673
M10 = x68.719477
```

Exponential x1.75:

```text
M1  = x1.000000
M2  = x1.750000
M3  = x3.062500
M4  = x5.359375
M5  = x9.378906
M6  = x16.413086
M7  = x28.722900
M8  = x50.265076
M9  = x87.963882
M10 = x153.936794
```

---

## Exponential x1.6 Selected Results

### Magnitude 1

Scale modifier:

```text
x1.000000
```

```text
Build                 D1   D2   D3   D4   D5   D6   D7   D8   D9   D10
Common Specialized    16    9    5    3    2    1    0    0    0     0
Elite Specialized     45   27   16    9    5    3    2    1    0     0
Peak Specialized      60   36   21   13    7    4    2    1    1     0
Max Specialized       78   47   28   16   10    6    3    2    1     0
```

Assessment:

Scale 1 preserves ordinary human limits.

Even Max Specialized cannot reach D10 without additional Lenses.

---

### Magnitude 3

Scale modifier:

```text
x2.560000
```

```text
Build                 D1   D2   D3   D4   D5   D6   D7   D8   D9   D10
Common Specialized    42   25   15    9    5    3    1    1    0     0
Elite Specialized    117   70   42   25   15    9    5    3    1     1
Peak Specialized     154   92   55   33   20   12    7    4    2     1
Max Specialized      200  120   72   43   26   15    9    5    3     2
```

Assessment:

Magnitude 3 creates a meaningful lift but does not erase high Difficulty.

Max Specialized becomes dominant at low Difficulty, strong at middle Difficulty, and still weak at the top end.

---

### Magnitude 5

Scale modifier:

```text
x6.553600
```

```text
Build                 D1   D2   D3   D4   D5   D6   D7   D8   D9   D10
Common Specialized   108   65   39   23   14    8    5    3    1     1
Elite Specialized    299  179  107   64   38   23   13    8    5     3
Peak Specialized     396  237  142   85   51   30   18   11    6     3
Max Specialized      513  308  184  110   66   39   23   14    8     5
```

Assessment:

Magnitude 5 is where x1.6 starts to clearly separate from x1.5.

Max Specialized reaches 100+ through D4, but still falls sharply across D5-D10.

This is promising if Magnitude 5 is meant to represent a major order-of-being jump, not ordinary advancement.

---

### Magnitude 7

Scale modifier:

```text
x16.777216
```

```text
Build                 D1   D2   D3   D4   D5   D6   D7   D8   D9   D10
Common Specialized   277  166   99   59   35   21   12    7    4     2
Elite Specialized    767  460  276  165   99   59   35   21   12     7
Peak Specialized    1014  608  365  219  131   78   47   28   17    10
Max Specialized     1315  789  473  284  170  102   61   36   22    13
```

Assessment:

Magnitude 7 is very strong.

Difficulty still matters, but low and mid Difficulty become overwhelmingly favorable for high baselines.

This supports treating high Scale as rare, setting-facing, and not ordinary advancement.

---

### Magnitude 10

Scale modifier:

```text
x68.719477
```

```text
Build                 D1    D2    D3    D4   D5   D6   D7   D8   D9   D10
Common Specialized  1136   681   409   245  147   88   53   31   19    11
Elite Specialized   3142  1885  1131   678  407  244  146   87   52    31
Peak Specialized    4157  2494  1496   897  538  323  193  116   69    41
Max Specialized     5387  3232  1939  1163  698  418  251  150   90    54
```

Assessment:

Magnitude 10 is far beyond normal play math.

This is acceptable only if Magnitude 10 is reserved for extreme cosmological or setting-defining expression.

If Magnitude 10 is expected to appear frequently, x1.6 may be too hot.

---

## Max Specialized Comparison

This comparison uses Max Specialized = 80.

```text
Model  Scale   D1    D2    D3    D4   D5   D6   D7   D8   D9   D10
x1.5   M1      78    47    28    16   10    6    3    2    1     0
x1.5   M3     176   105    63    38   22   13    8    4    2     1
x1.5   M5     396   238   142    85   51   30   18   11    6     3
x1.5   M7     893   535   321   192  115   69   41   24   14     8
x1.5   M10   3013  1808  1085   651  390  234  140   84   50    30

x1.6   M1      78    47    28    16   10    6    3    2    1     0
x1.6   M3     200   120    72    43   26   15    9    5    3     2
x1.6   M5     513   308   184   110   66   39   23   14    8     5
x1.6   M7    1315   789   473   284  170  102   61   36   22    13
x1.6   M10   5387  3232  1939  1163  698  418  251  150   90    54

x1.75  M1      78    47    28    16   10    6    3    2    1     0
x1.75  M3     240   144    86    51   31   18   11    6    4     2
x1.75  M5     735   441   264   158   95   57   34   20   12     7
x1.75  M7    2251  1351   810   486  291  175  105   63   37    22
x1.75  M10  12068  7241  4344  2606 1564  938  563  337  202   121
```

---

## Threshold Comparison

Thresholds mean the highest Difficulty Rank at which Max Specialized reaches at least the listed final displayed value.

```text
Model  Scale   >=1   >=25   >=75   >=100
x1.5   M1       9      3      1      0
x1.5   M3      10      4      2      2
x1.5   M5      10      6      4      3
x1.5   M7      10      7      5      5
x1.5   M10     10     10      8      7

x1.6   M1       9      3      1      0
x1.6   M3      10      5      2      2
x1.6   M5      10      6      4      4
x1.6   M7      10      8      6      6
x1.6   M10     10     10      9      8

x1.75  M1       9      3      1      0
x1.75  M3      10      5      3      2
x1.75  M5      10      7      5      4
x1.75  M7      10      9      7      7
x1.75  M10     10     10     10     10
```

---

## Findings

1. Scale 1 remains stable.

Scale 1 produces the same values across all exponential models because all tested models begin at x1.

This preserves the current lock:

```text
Scale Magnitude 1 = x1
```

2. x1.6 is meaningfully hotter than x1.5.

The difference is modest at low Scale and substantial by high Scale.

This matters because x1.6 is not just a slight flavor change. It creates a real mechanical shift by Magnitude 5 and above.

3. x1.6 still preserves high Difficulty resistance.

At Max Specialized, Magnitude 5 under x1.6 still produces:

```text
D7  = 23
D8  = 14
D9  = 8
D10 = 5
```

This means high Difficulty remains meaningful unless additional Lenses are added.

4. x1.75 remains aggressive.

At Max Specialized, Magnitude 10 under x1.75 reaches:

```text
D10 = 121
```

That means even the highest tested Difficulty becomes a 100+ result before additional Lenses.

This supports keeping x1.75 on the watchlist rather than promoting it.

5. x1.6 is viable only if Scale remains rare and setting-facing.

The model works if Scale represents order of being, channel magnitude, artifact magnitude, infrastructure magnitude, or similar high-order fiction.

The model becomes dangerous if Scale can be purchased as ordinary character advancement.

---

## Current Assessment

Status:

```text
Exponential x1.6 remains the current leading Scale candidate.
```

Reason:

```text
x1.6 gives stronger separation than x1.5 without reaching the runaway behavior of x1.75.
```

Risk:

```text
x1.6 may become too hot if high Scale is common or easy to access.
```

Design guardrail:

```text
Scale is not ordinary advancement.
Scale is magnitude of being, channel, artifact, infrastructure, or force.
```

---

## Next Test

The next test should add simple non-Scale Lenses while keeping x1.6 fixed.

Recommended test:

```text
Base Expression
x Scale x1.6
x Difficulty
x one Resonance
x one Dissonance
```

Suggested scenarios:

```text
Strength only vs. Strength + Protection
Frost expression in ice palace vs. volcanic chamber
Human sight in darkness
Tool / preparation / terrain as Resonance
```

