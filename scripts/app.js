
$(document).ready(function () {
    var about = 0;
    var projects = 1000;
    var skills = 2100;
    var contact = 3200;
    var currentActive, prevActive = null;

    $('.nav-button').click(function (e) {
        var yValue = 0;
        var clickedRef = $(this).attr('href');
        currentActive = clickedRef;
        switch (clickedRef) {
            case "#About":
                yValue = about;
                break;
            case "#Projects":
                yValue = projects;
                break;
            case "#Skills":
                yValue = skills;
                break;
            case "#Contact":
                yValue = contact;
                break;
        }

        if (currentActive != prevActive) {
            $(currentActive).addClass('.clicked');
            $(prevActive).removeClass('.clicked');
        }
        prevActive = currentActive;

        $('html,body').stop().animate(
            {
                scrollTop: yValue
            }, 800
        );

        e.preventDefault();
        console.log(currentActive);
    });

});

