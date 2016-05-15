+++
date = "2016-05-05T08:41:21-04:00"
draft = true
title = "Strings"
categories = ["Types"]
categories_weight = 5
+++

String literals (YARN) are demarked with double quotation marks ("). Line continuation and soft-command-breaks are ignored inside quoted strings. An unterminated string literal (no closing quote) will cause an error.

Within a string, all characters represent their literal value except the colon (:), which is the escape character. Characters immediately following the colon also take on a special meaning.

*   :) represents a newline (\n)
*   :> represents a tab (\t)
*   :o represents a bell (beep) (\g)
*   :" represents a literal double quote (")
*   :: represents a single literal colon (:)

The colon may also introduce more verbose escapes enclosed within some form of bracket.

*   :(`<hex>`) resolves the hex number into the corresponding Unicode code point.
*   :{`<var>`} interpolates the current value of the enclosed variable, cast as a string.
*   :[`<char name>`] resolves the `<char name>` in capital letters to the corresponding Unicode [normative name](http://www.unicode.org/Public/4.1.0/ucd/NamesList.txt).