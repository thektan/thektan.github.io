$(document).ready(function ()
{
    // Scroll down to project section.
    $(".projects-nav-button").click(function ()
    {
        $('html, body').animate
        (
            { scrollTop: $("#project-header").offset().top }, 
            500
        );
    });

    // Toggle contact box.
    $('.contact-toggle').click(function()
    {
        $('#contact-more-container').css(
            {
                'visibility': 'visible',
                'margin-top': '-200px',
                'opacity': '1'
            }
        );
        $('.contact-more-container-bg').css(
            {
                'visibility': 'visible',
                'opacity': '0.5'
            }
        );
        $("body").css('overflow', 'hidden');
    });

    // Contact box back button.
    $('.back-button').click(function()
    {
        $('#contact-more-container').css(
            {
                'visibility': 'hidden',
                'margin-top': '-220px',
                'opacity': '0'
            }
        );
        $('.contact-more-container-bg').css(
            {
                'visibility': 'hidden',
                'opacity': '0'
            }
        );
        $("body").css('overflow', 'auto');
    });

    // Clicking the back background also dismisses the contact box.
    $('.contact-more-container-bg').click(function()
    {
        $('#contact-more-container').css(
            {
                'visibility': 'hidden',
                'margin-top': '-220px',
                'opacity': '0'
            }
        );
        $('.contact-more-container-bg').css(
            {
                'visibility': 'hidden',
                'opacity': '0'
            }
        );
        $("body").css('overflow', 'auto');
    });
});

