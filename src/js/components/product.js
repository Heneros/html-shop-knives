// $(function () {

// })

const prodSlider1 = new Swiper('.mySwiperGallery1', {
    spaceBetween: 7,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
});

const prodSlider2 = new Swiper('.mySwiperGallery2', {
    slidesPerView: 1,
    thumbs: {
        swiper: prodSlider1
    }
});