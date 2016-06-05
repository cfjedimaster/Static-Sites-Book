$(document).ready(function () {
    var AFFIX_TOP_LIMIT = 130,
        AFFIX_OFFSET = 49,
        aOffset = AFFIX_OFFSET
        lastScroll = 0,
        scrollDirection = "down";

    var $menu = $("#menu"),
		$btn = $("#menu-toggle");

    $("#menu-toggle").on("click", function () {
        $menu.toggleClass("open");
        return false;
    });


    $(".docs-nav").each(function () {
        var $affixNav = $(this),
			$container = $affixNav.parent(),
			affixNavfixed = false,
			originalClassName = this.className,
			current = null,
			$links = $affixNav.find("a");

        function getClosestHeader(top) {
            var last = $links.first();

            if (top < AFFIX_TOP_LIMIT) {
                return last;
            }

            for (var i = 0; i < $links.length; i++) {
                var $link = $links.eq(i),
					href = $link.attr("href");

                if (href.charAt(0) === "#" && href.length > 1) {
                    var $anchor = $(href).first();

                    if ($anchor.length > 0) {
                        var offset = $anchor.offset();

                        if (top < offset.top - aOffset) {
                            return last;
                        }

                        last = $link;
                    }
                }
            }
            return last;
        }


        $(window).on("scroll", function (evt) {
            var top = window.scrollY,
		    	height = $affixNav.outerHeight(),
		    	bottom = top + height + aOffset,
                max_bottom = $container.offset().top + $container.outerHeight(),
                $current = getClosestHeader(top),
                thisScroll = $(this).scrollTop();
            if (thisScroll > lastScroll) {
                scrollDirection = "down";
            }
            else {
                scrollDirection = "up";
            }
            lastScroll = thisScroll;

            if (affixNavfixed) {
                if (($current.position().top > window.innerHeight - 100) && (scrollDirection == "down")) {
                    aOffset = aOffset - 2;
                }
                else if (aOffset < AFFIX_OFFSET) {
                    aOffset += 2;
                }
                else {
                    aOffset = AFFIX_OFFSET;
                }
                if (top <= AFFIX_TOP_LIMIT) {
                    $affixNav.removeClass("fixed");
                    $affixNav.css("top", 0);
                    affixNavfixed = false;
                } else if (bottom > max_bottom) {
                    $affixNav.css("top", (max_bottom - height) - top);
                } else {
                    $affixNav.css("top", aOffset);
                }
            } else if (top > AFFIX_TOP_LIMIT) {
                $affixNav.addClass("fixed");
                affixNavfixed = true;
            }

            if (current !== $current) {
                $affixNav.find(".active").removeClass("active");
                $current.addClass("active");
                current = $current;
            }
        });
    });
});
