(function ($, window) {

    'use strict';

    var $window = $(window);


    function hamburgerInit() {
        var $nav = $('nav'),
            $ul = $nav.find('ul');
        if(!$nav.find('.icon-menu').is(':visible')){
            return;
        }
        $nav.find('h1').on('click', function () {
            $ul.slideToggle();
        });
        $nav.find('a, span').on('click', function () {
            $ul.slideToggle();
        });
    }

    function navHeightInit() {

        var $nav = $('nav');

        $nav.css({
            minHeight: $window.height() - $nav.offset().top - $('footer').height()
        });
    }


    hamburgerInit();
    navHeightInit();

    $window.on('resize orientationchange', navHeightInit);

    $window.on('resize orientationchange', navHeightInit);
    (function() {

        var $activeLi = $('nav li.active');

        $activeLi.find('ul').animate({ opacity: 1 });

    }());




}(jQuery, window));
