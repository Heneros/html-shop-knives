const noveltySlider = new Swiper('.novelty-slider', {
    slidesPerView: 1,
    spaceBetween: 20,
    pagination: {
        el: '.novelty__pagination'
    },
    breakpoints: {
        756: {
            slidesPerView: 3,
        },
        650: {
            slidesPerView: 2,
        },
    }


});