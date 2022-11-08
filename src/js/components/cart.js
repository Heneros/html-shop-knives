$(function () {

    $(document.body).on("click", ".js-open-cart", function () {
        $(".sidebar").addClass("active");
        $("body").addClass("activeBody");
    });

    $(document.body).on("click", ".main-wrapperOverflow", function () {
        $(".sidebar").removeClass("active");
        $("body").removeClass("activeBody");
    });
})