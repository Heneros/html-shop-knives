const ProductsSlider = new Swiper('.bestsellers-products__swiper', {
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



// (function () {

//     'use strict';

//     // breakpoint where swiper will be destroyed
//     // and switches to a dual-column layout
//     const breakpoint = window.matchMedia('(min-width:650px)');

//     // keep track of swiper instances to destroy later
//     let mySwiper;

//     //////////////////////////////////////////////////////////////////
//     //////////////////////////////////////////////////////////////////
//     //////////////////////////////////////////////////////////////////

//     const breakpointChecker = function () {

//         // if larger viewport and multi-row layout needed
//         if (breakpoint.matches === true) {

//             // clean up old instances and inline styles when available
//             if (mySwiper !== undefined) mySwiper.destroy(true, true);

//             // or/and do nothing
//             return;

//             // else if a small viewport and single column layout needed
//         } else if (breakpoint.matches === false) {

//             // fire small viewport version of swiper
//             return enableSwiper();

//         }

//     };

//     //////////////////////////////////////////////////////////////////
//     //////////////////////////////////////////////////////////////////
//     //////////////////////////////////////////////////////////////////

//     const enableSwiper = function () {

//         mySwiper = new Swiper('.bestsellers-products__swiper', {

//             loop: true,

//             slidesPerView: 'auto',

//             centeredSlides: true,

//             a11y: true,
//             keyboardControl: true,
//             grabCursor: true,

//             // pagination
//             pagination: '.swiper-pagination',
//             paginationClickable: true,

//         });

//     };

//     //////////////////////////////////////////////////////////////////
//     //////////////////////////////////////////////////////////////////
//     //////////////////////////////////////////////////////////////////

//     // keep an eye on viewport size changes
//     breakpoint.addListener(breakpointChecker);

//     // kickstart
//     breakpointChecker();



// })(); /* IIFE end */