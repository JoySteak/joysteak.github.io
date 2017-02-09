$(document).ready(function(){

    // Setup for smoothScroll.js and scrollReveal.js
    window.sr = ScrollReveal();
    sr.reveal('.about-content', { duration: 1000 });
    sr.reveal('.our-games-content', { duration: 1000 });
    sr.reveal('.the-team-content', { duration: 1000 });
    sr.reveal('.ask-us-anything-content', { duration: 1000 });
    smoothScroll.init();

    // Navbar fading in/out behavior 
    $(".navbar").hide();
    $(function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 100) {
                $('.navbar').fadeIn();
            } else {
                $('.navbar').fadeOut();
            }
        });
    });

    // Collapse navbar dropdown menu when an item is clicked
    $('.nav a').on('click', function(){
        var _opened = $(".navbar-collapse").hasClass("in");
        if (_opened) {
            $('.btn-navbar').click(); //bootstrap 2.x
            $('.navbar-toggle').click() //bootstrap 3.x by Richard
        }
    });

    // Thumbnail behavior
    $('.thumbnail-overlay').hide();
    $('.thumbnail').hover(
        function() {
            $(this).find('.thumbnail-overlay').fadeIn();
        }, function() {
            $(this).find('.thumbnail-overlay').fadeOut();
    });

});