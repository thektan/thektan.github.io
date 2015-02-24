$(document).ready(function ()
{
    // Set the header height to the window height.
    $('#header-container').css({ 'height': $(window).height() });

    // Set title container to middle of screen.
    $('.title-container').css(
        {
            'margin-top': $('#header-container').height()/2 
                        - $('.title-container').height()/2
        }
    );

    // When window gets resized, update height and margin of header/title.
    $(window).resize(function () 
    {
        $('#header-container').css({ 'height': $(window).height() });

        $('.title-container').css(
            {
                'margin-top': $('#header-container').height()/2 
                            - $('.title-container').height()/2
            }
        );
    });
    
    // Change opacity of arrow helper to scroll down if not at top of page.
    $(window).scroll(function() 
    {
        if ($(window).scrollTop() > 0)
        {
            $('.scroll-down-arrow').css(
                {
                    'opacity': 0,
                    'visibility': 'hidden'
                }
            );
        }
        else
        {
            $('.scroll-down-arrow').css(
                {
                    'opacity': 1,
                    'visibility': 'visible'
                }
            );
        }
    });
    
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

