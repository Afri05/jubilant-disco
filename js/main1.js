$(window).on('scroll', function () {
    var scroll = $(window).scrollTop();
    if (scroll < 200) {
        $("#sticky-header").removeClass("sticky");
    } else {
        $("#sticky-header").addClass("sticky");
    }
});


