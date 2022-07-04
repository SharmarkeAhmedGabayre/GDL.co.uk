
$(document).ready(function () {
    $('.nav-button').click(function (e) {

        var navBarHeight = $('.nav-bar').outerHeight();
        var clickedRef = $(this).attr('href');
        var anchor = clickedRef.replace('#', '');
        var yValue = $(clickedRef).offset().top;

        $('html,body').stop().animate(
            {
                scrollTop: yValue - navBarHeight
            }, 800
        );

        console.log(yValue);
        console.log(anchor);
        e.preventDefault();
    });
});
