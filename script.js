(function(d, w) {
    var hash = w.location.hash,
        $nav = $('.nav'),
        $navLinks = $('.nav__link', $nav),
        $sections = $('.section'),
        PAGE_PADDING = 22,
        TOP_OFFSET = $('logo').height() + PAGE_PADDING;

    hash && $('[href="' + hash + '"]', $nav).addClass('nav__link_state_current');
    w.scrollY > TOP_OFFSET && $nav.addClass('nav_state_fixed');

    $navLinks.click(function(e) {
        var $self = $(this),
            OFFSET = 50,
            destination = $($self.attr('href')).offset().top - OFFSET;

        e.preventDefault();

        $navLinks.removeClass('nav__link_state_current');
        $self.addClass('nav__link_state_current');

        $('html, body').animate({ scrollTop: destination }, 500);
    });

    $(w).scroll(function() {
        $nav.toggleClass('nav_state_fixed', w.scrollY > TOP_OFFSET);
    });

    $sections.waypoint({
        handler: function(direction) {
            var $currentSection = $(this),
                $currentSection = direction === 'up' ? $currentSection.prev() : $currentSection,
                $activeLink = $('.nav__link[href="#' + $currentSection.attr('id') + '"]');

            $navLinks.removeClass('nav__link_state_current');
            $activeLink.addClass('nav__link_state_current');
        },
        offset: '55'
    });

})(document, window);