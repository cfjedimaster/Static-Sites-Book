+++
date = "2016-05-05T08:55:44-04:00"
draft = true
title = "Conditionals"
categories = ["Flow Control"]
categories_weight = 1
+++

#### If-Then

The traditional if/then construct is a very simple construct operating on the implicit `IT` variable. In the base form, there are four keywords: `O RLY?`, `YA RLY`, `NO WAI`, and `OIC`.

`O RLY?` branches to the block begun with `YA RLY` if `IT` can be cast to WIN, and branches to the `NO WAI` block if `IT` is FAIL. The code block introduced with `YA RLY` is implicitly closed when `NO WAI` is reached. The `NO WAI` block is closed with `OIC`. The general form is then as follows:

``` ruby
<expression>
O RLY?
  YA RLY
    <code block>
  NO WAI
    <code block>
OIC
```

while an example showing the ability to put multiple statements on a line separated by a comma would be:

``` ruby
BOTH SAEM ANIMAL AN "CAT", O RLY?
  YA RLY, VISIBLE "J00 HAV A CAT"
  NO WAI, VISIBLE "J00 SUX"
OIC
```

The elseif construction adds a little bit of complexity. Optional `MEBBE <expression>` blocks may appear between the YA RLY and NO WAI blocks. If the `<expression>` following `MEBBE` is WIN, then that block is performed; if not, the block is skipped until the following `MEBBE`, `NO WAI`, or `OIC`. The full expression syntax is then as follows:

``` ruby
<expression>
O RLY?
  YA RLY
    <code block>
 [MEBBE <expression>
    <code block>
 [MEBBE <expression>
    <code block>
  ...]]
 [NO WAI
    <code block>]
OIC
```

An example of this conditional is then:

``` ruby
BOTH SAEM ANIMAL AN "CAT"
O RLY?
  YA RLY, VISIBLE "J00 HAV A CAT"
  MEBBE BOTH SAEM ANIMAL AN "MAUS"
    VISIBLE "NOM NOM NOM. I EATED IT."
OIC
```

#### Case

_(modified from 1.1)_

The LOLCODE keyword for switches is `WTF?`. The `WTF?` operates on `IT` as being the expression value for comparison. A comparison block is opened by `OMG` and must be a literal, not an expression. (A literal, in this case, excludes any YARN containing variable interpolation (`:{var}`).) Each literal must be unique. The `OMG` block can be followed by any number of statements and may be terminated by a `GTFO`, which breaks to the end of the the `WTF` statement. If an `OMG` block is not terminated by a `GTFO`, then the next `OMG` block is executed as is the next until a `GTFO` or the end of the `WTF` block is reached. The optional default case, if none of the literals evaluate as true, is signified by `OMGWTF`.

``` ruby
WTF?
  OMG <value literal>
    <code block>
 [OMG <value literal>
    <code block> ...]
 [OMGWTF
    <code block>]
OIC
```

``` ruby
COLOR, WTF?
  OMG "R"
    VISIBLE "RED FISH"
    GTFO
  OMG "Y"
    VISIBLE "YELLOW FISH"
  OMG "G"
  OMG "B"
    VISIBLE "FISH HAS A FLAVOR"
    GTFO
  OMGWTF
    VISIBLE "FISH IS TRANSPARENT"
OIC
```

In this example, the output results of evaluating the variable `COLOR` would be:

"R":


``` ruby
RED FISH
```

"Y":

``` ruby
YELLOW FISH
FISH HAS A FLAVOR
```

"G":

``` ruby
FISH HAS A FLAVOR
```

"B":

``` ruby
FISH HAS A FLAVOR
```

none of the above:

``` ruby
FISH IS TRANSPARENT
```

#### Loops

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

