const noveltySlider = new Swiper('.novelty-slider', {
    slidesPerView: 1,
    spaceBetween: 20,
    pagination: {
        el: '.novelty__pagination'
    },
    breakpoints: {
        1160: {
            slidesPerView: 3,
        },
        756: {
            slidesPerView: 2,
        },
    }


});