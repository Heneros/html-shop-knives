$(function () {

    $(document.body).on("click", ".js-open-cart", function () {
        $(".sidebar").addClass("active");
        $("body").addClass("activeBody");
    });

    $(document.body).on("click", ".main-wrapperOverflow", function () {
        $(".sidebar").removeClass("active");
        $("body").removeClass("activeBody");
    });


    setTimeout(function () {
        $('.loader-screen').animate({
            height: '100%',
            top: '-100vh'
        }, 1000, function () {
            $(".loader-screen").css("display", 'none');
        })
    }, 200);

})