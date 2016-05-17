+++
date = "2016-05-05T08:46:10-04:00"
draft = true
title = "Boolean"
categories = ["Operators"]
categories_weight = 3
+++

Boolean operators working on TROOFs are as follows:

``` ruby
BOTH OF <x> [AN] <y>          BTW and: WIN iff x=WIN, y=WIN
EITHER OF <x> [AN] <y>        BTW or: FAIL iff x=FAIL, y=FAIL
WON OF <x> [AN] <y>           BTW xor: FAIL if x=y
NOT <x>                       BTW unary negation: WIN if x=FAIL
ALL OF <x> [AN] <y> ... MKAY  BTW infinite arity AND
ANY OF <x> [AN] <y> ... MKAY  BTW infinite arity OR
```

`<x>` and `<y>` in the expression syntaxes above are automatically cast as TROOF values if they are not already so.