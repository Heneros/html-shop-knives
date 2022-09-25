const ProductsSlider = new Swiper('.bestsellers-products-swiper', {
    speed: 800,
    // spaceBetween: 20,
    // slidesPerView: 4,
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
        el: '.bestsellers-products__pagination'
    },
    breakpoints: {
        650: {
            slidesPerView: 2,
        },
        991: {
            slidesPerView: 3,
        },
        1500: {
            slidesPerView: 4,
            spaceBetween: 30,
        },

    }
});
