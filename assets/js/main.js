(function ($, window) {

    'use strict';

    var $window = $(window);

    function navHeightInit() {

        var $nav = $('nav');

        $nav.css({
            minHeight: $window.height() - $nav.offset().top - $('footer').height()
        });
    }

    function initSearch() {
        var $searchBox = $('.search-area'),
            $guideContent = $('.guide-content'),
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
                var $resultsContainer = $('<div id="search-results"/>');
                $resultsContainer.html($('<h1/>').text('Search results'));
                $.each(result,function(i,e){
                    var $result = $('<div />');
                    $('<h2/>').append($('<a />', {href: e.href, text: e.name})).appendTo($result);
                    $('<div />').html(e.preview).appendTo($result);
                    $result.appendTo($resultsContainer);
                });
                if (!result.length){
                    $resultsContainer.append($('<h2/>').text('Nothing to display'));
                }
                $guideContent.html($resultsContainer);
            });
            return false;
        }
    }


    function hideFallbackVideo() {
        $('.hidden-video').hide();
    }

    function menuToggleInit() {
        $('.menu').on('click', function() {
            $('body').toggleClass('navi-open');
        })
    }



    hideFallbackVideo();
    menuToggleInit();
    navHeightInit();
    initSearch();
    $window.on('resize orientationchange', navHeightInit);

    $window.on('resize orientationchange', navHeightInit);
    (function() {

        var $activeLi = $('nav li.active');

        $activeLi.find('ul').animate({ opacity: 1 });

    }());




}(jQuery, window));
