const ProductsSlider = new Swiper('.bestsellers-products__swiper', {
    speed: 800,
    spaceBetween: 50,
    slidesPerView: 4,
    pagination: {
        el: '.bestsellers-products__pagination'
    }
});