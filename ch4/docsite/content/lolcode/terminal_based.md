+++
date = "2016-05-05T08:48:38-04:00"
draft = true
title = "Terminal-Based"
categories = ["Input/Output"]
categories_weight = 1
+++

The print (to STDOUT or the terminal) operator is `VISIBLE`. It has infinite arity and implicitly concatenates all of its arguments after casting them to YARNs. It is terminated by the statement delimiter (line end or comma). The output is automatically terminated with a carriage return (:)), unless the final token is terminated with an exclamation point (!), in which case the carriage return is suppressed.

``` html
VISIBLE <expression> [<expression> ...][!]
```

There is currently no defined standard for printing to a file.

To accept input from the user, the keyword is

``` html
GIMMEH <variable>
```

which takes YARN for input and stores the value in the given variable.

_`GIMMEH` is defined minimally here as a holdover from 1.0 and because there has not been any detailed discussion of this feature. We count on the liberal casting capabilities of the language and programmer inventiveness to handle input restriction. `GIMMEH` may change in a future version._