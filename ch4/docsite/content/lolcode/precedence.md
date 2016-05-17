+++
date = "2016-05-05T08:46:10-04:00"
draft = true
title = "Calling Syntax and Precedence"
categories = ["Operators"]
categories_weight = 1
+++

Mathematical operators and functions in general rely on prefix notation. By doing this, it is possible to call and compose operations with a minimum of explicit grouping. When all operators and functions have known arity, no grouping markers are necessary. In cases where operators have variable arity, the operation is closed with `MKAY`. An `MKAY` may be omitted if it coincides with the end of the line/statement, in which case the EOL stands in for as many `MKAYs` as there are open variadic functions.

Calling unary operators then has the following syntax:

``` html
<operator> <expression1>
```

The `AN` keyword can optionally be used to separate arguments, so a binary operator expression has the following syntax:

``` html
<operator> <expression1> [AN] <expression2>
```

An expression containing an operator with infinite arity can then be expressed with the following syntax:

``` html
<operator> <expr1> [[[AN] <expr2>] [AN] <expr3> ...] MKAY
```