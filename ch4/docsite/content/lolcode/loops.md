+++
date = "2016-05-05T08:55:44-04:00"
draft = true
title = "Loops"
categories = ["Flow Control"]
categories_weight = 2
+++


_Loops are currently defined more or less as they were in the original examples. Further looping constructs will be added to the language soon._

Simple loops are demarcated with `IM IN YR <label>` and `IM OUTTA YR <label>`. Loops defined this way are infinite loops that must be explicitly exited with a GTFO break. Currently, the `<label>` is required, but is unused, except for marking the start and end of the loop.

_Immature spec – *_subject to change*_:_

Iteration loops have the form:

``` html
IM IN YR <label> <operation> YR <variable> [TIL|WILE <expression>]
  <code block>
IM OUTTA YR <label>
```

Where may be UPPIN (increment by one), NERFIN (decrement by one), or any unary function. That operation/function is applied to the , which is temporary, and local to the loop. The TIL evaluates the expression as a TROOF: if it evaluates as FAIL, the loop continues once more, if not, then loop execution stops, and continues after the matching IM OUTTA YR . The WILE is the converse: if the expression is WIN, execution continues, otherwise the loop exits.

