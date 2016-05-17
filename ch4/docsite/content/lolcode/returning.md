+++
date = "2016-05-05T08:57:54-04:00"
draft = true
title = "Returning"
categories = ["Functions"]
categories_weight = 2
+++

Return from the function is accomplished in one of the following ways:

*   `FOUND YR <expression>` returns the value of the expression.
*   `GTFO` returns with no value (NOOB).
*   in the absence of any explicit break, when the end of the code block is reached (`IF U SAY SO`), the value in `IT` is returned.

### Calling

A function of given arity is called with:

``` html
I IZ <function name> [YR <expression1> [AN YR <expression2> [AN YR <expression3> ...]]] MKAY
```

That is, an expression is formed by the function name followed by any arguments. Those arguments may themselves be expressions. The expressions' values are obtained before the function is called. The arity of the functions is determined in the definition.
