+++
date = "2016-05-05T08:46:10-04:00"
draft = true
title = "Math"
categories = ["Operators"]
categories_weight = 2
+++

### Math

The basic math operators are binary prefix operators.

``` ruby
SUM OF <x> AN <y>       BTW +
DIFF OF <x> AN <y>      BTW -
PRODUKT OF <x> AN <y>   BTW *
QUOSHUNT OF <x> AN <y>  BTW /
MOD OF <x> AN <y>       BTW modulo
BIGGR OF <x> AN <y>     BTW max
SMALLR OF <x> AN <y>    BTW min
```

`<x>` and `<y>` may each be expressions in the above, so mathematical operators can be nested and grouped indefinitely.

Math is performed as integer math in the presence of two NUMBRs, but if either of the expressions are NUMBARs, then floating point math takes over.

If one or both arguments are a YARN, they get interpreted as NUMBARs if the YARN has a decimal point, and NUMBRs otherwise, then execution proceeds as above.

If one or another of the arguments cannot be safely cast to a numerical type, then it fails with an error.