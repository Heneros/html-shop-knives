$(function () {
    $('.filter-style').styler();

    $(".js-range-slider").ionRangeSlider({
        type: "double",
        min: 100,
        max: 5000,
    });
});