+++
date = "2016-05-05T08:46:10-04:00"
draft = true
title = "Casting"
categories = ["Operators"]
categories_weight = 6
+++

Operators that work on specific types implicitly cast parameter values of other types. If the value cannot be safely cast, then it results in an error.

An expression's value may be explicitly cast with the binary `MAEK` operator.

``` html
MAEK <expression> [A] <type>
```

Where `<type>` is one of TROOF, YARN, NUMBR, NUMBAR, or NOOB. This is only for local casting: only the resultant value is cast, not the underlying variable(s), if any.

To explicitly re-cast a variable, you may create a normal assignment statement with the `MAEK` operator, or use a casting assignment statement as follows:

``` html
<variable> IS NOW A <type>         BTW equivalent to
<variable> R MAEK <variable> [A] <type>
```
