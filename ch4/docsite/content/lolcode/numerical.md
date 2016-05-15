+++
date = "2016-05-05T08:41:21-04:00"
draft = true
title = "Numerical Types"
categories = ["Types"]
categories_weight = 4
+++

A NUMBR is an integer as specified in the host implementation/architecture. Any contiguous sequence of digits outside of a quoted YARN and not containing a decimal point (.) is considered a NUMBR. A NUMBR may have a leading hyphen (-) to signify a negative number.

A NUMBAR is a float as specified in the host implementation/architecture. It is represented as a contiguous string of digits containing exactly one decimal point. Casting a NUMBAR to a NUMBR truncates the decimal portion of the floating point number. Casting a NUMBAR to a YARN (by printing it, for example), truncates the output to a default of two decimal places. A NUMBAR may have a leading hyphen (-) to signify a negative number.

Casting of a string to a numerical type parses the string as if it were not in quotes. If there are any non-numerical, non-hyphen, non-period characters, then it results in an error. Casting WIN to a numerical type results in "1" or "1.0"; casting FAIL results in a numerical zero.