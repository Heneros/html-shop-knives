$(function () {
  //Increment quantity products
    $(document).on("click", '.js-quantity-plus', function () {
        var btn = $(this);
        var block = btn.closest('.js-quantity');
        var kol = block.find('.js-quantity-input').val();
        //If bigger than 100. you need to stop
        if (kol <= 1000) {
            kol++;
        }
        block.find('.js-quantity-input').val(kol);
        block.find('.js-quantity-input').trigger('change');
    });

  //Decreament quantity products
    $(document).on("click", '.js-quantity-minus', function () {
        var btn = $(this);
        var block = btn.closest('.js-quantity');
        var kol = block.find('.js-quantity-input').val();
        if (kol > 1) {
            kol--;
        }
        block.find('.js-quantity-input').val(kol);
        block.find('.js-quantity-input').trigger('change');
    });

});

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

