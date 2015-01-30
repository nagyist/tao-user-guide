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

    function initSearch() {
        var $searchBox = $('.search-area'),
            $content = $('.guide-content'),
            $form = $searchBox.find('form');

        $.ajax({
            url: $form.attr('action'),
            success: function(){
                $searchBox.show();
            }
        });

        $form.on('submit', search);

        function search() {

            $.get($form.attr('action'), $form.serialize(), function (result) {
                $content.html($('<h1/>').text('Search results'));
                $.each(result,function(i,e){
                    var $result = $('<div />');
                    $('<h2/>').append($('<a />', {href: e.href, text: e.name})).appendTo($result);
                    $('<div />').html(e.preview).appendTo($result);
                    $result.appendTo($content);
                });
                if (!result.length){
                    $content.append($('<h2/>').text('Nothing to display'));
                }
            });
            return false;
        }
    }


    function hideFallbackVideo() {
        $('.hidden-video').hide();
    }

    hideFallbackVideo();
    hamburgerInit();
    navHeightInit();
    initSearch();
    $window.on('resize orientationchange', navHeightInit);

    $window.on('resize orientationchange', navHeightInit);
    (function() {

        var $activeLi = $('nav li.active');

        $activeLi.find('ul').animate({ opacity: 1 });

    }());




}(jQuery, window));
