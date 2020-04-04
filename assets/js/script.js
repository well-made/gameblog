/**
* Change myApplication to the projectname
*/

var wellMadeGameBlog = (function($, window, undefined) {

    /**
    * Declare all your methods here
    */

    var init;

    init = function() {

        /**
         * Variables
         */

         body = $('body');

        /**
         * Change body class for header on scroll
         */

         scrollTrigger = 1;

        $(window).scroll(function(){
            if ($(this).scrollTop() >= scrollTrigger) {
                body.addClass('body--scrolled');
            } else {
                body.removeClass('body--scrolled');
            }
        });

        /**
         * Toggle navigation
         * Toggles body class
         */

         $('.page-header__nav-toggle').click(function(){
            body.toggleClass('nav--visible');
         });

    };

    /**
    * Put the methods you want to be public in this object
    */

    return {
        init: init
    };

}(jQuery, window));

$(function() {
    wellMadeGameBlog.init();
});
