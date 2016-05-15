+++
date = "2016-05-05T08:50:24-04:00"
draft = true
title = "Expression Statements"
categories = ["Statements"]
categories_weight = 1
+++

### Expression Statements

A bare expression (e.g. a function call or math operation), without any assignment, is a legal statement in LOLCODE. Aside from any side-effects from the expression when evaluated, the final value is placed in the temporary variable `IT`. `IT`'s value remains in local scope and exists until the next time it is replaced with a bare expression.