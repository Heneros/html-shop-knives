///slider
const swiper = new Swiper('.slider-homepage__swiper', {
    speed: 800,
    spaceBetween: 100,
    // on: {
    //     slideChange: function () {
    //         const index_currentSlide = swiper.realIndex;
    //         const currentSlide = swiper.slides[index_currentSlide]
    //         //
    //         currentSlide.style.background = "red";
    //     },
    // },
    pagination: {
        el: '.swiper-pagination',
        // type: 'custom',
        // renderCustom: function (swiper, current, total, curClas) {
        //     let indT = total >= 10 ? total : `0${total}`
        //     let indC = current >= 10 ? current : `0${current}`

        //     const index_currentSlide = swiper.realIndex;
        //     const currentSlide = swiper.slides[index_currentSlide];

        //     let curClass = currentSlide ? 'swiper-pagination-bullet-active' : 'swiper-pagination-bullet';
        //     let index_curreentSlid = index_currentSlide ? 'swiper-pagination-bullet' : '';

        //     return `<b>${indC}</b><span></span> ${indT}`
        //     +
        //     total
           
        // }
    },
    // scrollbar:{
    //     el: '.slider-homepage__scrollbar'
    // }

});
///<span class='swiper-pagination-bullet'></span>
// `<span class='swiper-pagination-bullet ${indC}: swiper-pagination-bullet-active'></span>`
// +
//     `<span class='${index_curreentSlid} ${curClass}'></span>
//                <span class='${index_curreentSlid}'></span>
//                 `

///Add span
const slider__heading = document.querySelectorAll(".slider-homepage__title");
slider__heading.forEach(element => {
    let text = element.innerHTML.split(' ');
    let first = text.splice(0, 2);
    element.innerHTML = ` ${first.join(' ')} <br><span>${text.join(' ')}</span>`;
});