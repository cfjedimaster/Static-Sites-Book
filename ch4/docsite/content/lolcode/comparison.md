+++
date = "2016-05-05T08:46:10-04:00"
draft = true
title = "Comparison"
categories = ["Operators"]
categories_weight = 4
+++

Comparison is (currently) done with two binary equality operators:

``` ruby
BOTH SAEM <x> [AN] <y>   BTW WIN iff x == y
DIFFRINT <x> [AN] <y>    BTW WIN iff x != y
```

Comparisons are performed as integer math in the presence of two NUMBRs, but if either of the expressions are NUMBARs, then floating point math takes over. Otherwise, there is no automatic casting in the equality, so `BOTH SAEM "3" AN 3` is FAIL.

There are (currently) no special numerical comparison operators. Greater-than and similar comparisons are done idiomatically using the minimum and maximum operators.

``` ruby
BOTH SAEM <x> AN BIGGR OF <x> AN <y>   BTW x >= y
BOTH SAEM <x> AN SMALLR OF <x> AN <y>  BTW x <= y
DIFFRINT <x> AN SMALLR OF <x> AN <y>   BTW x > y
DIFFRINT <x> AN BIGGR OF <x> AN <y>    BTW x < y
```

If `<x>` in the above formulations is too verbose or difficult to compute, don't forget the automatically created IT temporary variable. A further idiom could then be:

``` ruby
<expression>, DIFFRINT IT AN SMALLR OF IT AN <y>
```

_Suggestions are being accepted for coherently and convincingly english-like prefix operator names for greater-than and similar operators._