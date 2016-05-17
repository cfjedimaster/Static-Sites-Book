+++
date = "2016-05-04T17:35:01-04:00"
draft = true
title = "Comments"
categories = ["formatting"]
categories_weight = 2
+++

_(from 1.1)_

Single line comments are begun by `BTW`, and may occur either after a line of code, on a separate line, or following a line of code following a line separator (,).

All of these are valid single line comments:

``` ruby
I HAS A VAR ITZ 12          BTW VAR = 12
```

``` ruby
I HAS A VAR ITZ 12,         BTW VAR = 12
```

``` ruby
I HAS A VAR ITZ 12
                BTW VAR = 12
```

Multi-line comments are begun by `OBTW` and ended with `TLDR`, and should be started on their own lines, or following a line of code after a line separator.

These are valid multi-line comments:

``` ruby
I HAS A VAR ITZ 12
            OBTW this is a long comment block
                 see, i have more comments here
                 and here
            TLDR
I HAS A FISH ITZ BOB
```

``` ruby
I HAS A VAR ITZ 12,  OBTW this is a long comment block
      see, i have more comments here
      and here
TLDR, I HAS A FISH ITZ BOB
```