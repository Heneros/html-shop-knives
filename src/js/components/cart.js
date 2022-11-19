$(function () {

    $(document.body).on("click", ".js-open-cart", function () {
        $(".cart-products").toggleClass("active");
        // alert(123);
    });

    $(document.body).on("click", function (e) {
        if (!$(e.target).closest(".cart-products").length && !$(e.target).closest(".js-open-cart").length) {
            $(".cart-products").removeClass("active");
        }
        e.stopPropagation();
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