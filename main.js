$(document).ready(function ()
{
    // Variables for when header bar will become fixed.
    var elementPosition = $('.title-container').offset();
    var headerBackgroundPosition = $('#full-page-container').offset();

    /**
     * Fixed header bar.
     */
    $(window).scroll(function ()
    {
        // Fix position for "Kevin Tan."
        if ($(window).scrollTop() + 10 > elementPosition.top) {
            $('#main-title').css('position', 'fixed').css('top', '10px');
            $('.description-container').fadeOut();
        }
        else {
            $('#main-title').css('position', 'static');
            $('.description-container').fadeIn();
        }

        // Fix position for contact links.
        if ($(window).scrollTop() + 20 > elementPosition.top){
            $('#main-links').css('position', 'fixed').css('top', '20px');
        }
        else {
            $('#main-links').css('position', 'static');
        }

        // Fix position of the header.
        if ($(window).scrollTop() + 150 > headerBackgroundPosition.top) {
            $('#header-container').css('position', 'fixed').css('margin-top', '-260px');
            $('#full-page-container').css('padding-top', '250px'); // To adjust for displacement of header.
        }
        else {
            $('#header-container').css('position', 'static').css('margin-top', '0');
            $('#full-page-container').css('padding-top', '0');
        }
    });
});

// Smooth Scrolling from CSS-Tricks (https://css-tricks.com/snippets/jquery/smooth-scrolling/)
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 500);
        return false;
      }
    }
  });
});
