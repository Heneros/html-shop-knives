///slider
const swiper = new Swiper('.slider-homepage__swiper', {
    speed: 800,
    spaceBetween: 100,
    pagination: {
        el: '.swiper-pagination',
        type: 'custom',
        renderCustom: function (swiper, current, total, curClas) {
            let indT = total >= 10 ? total : `0${total}`
            let indC = current >= 10 ? current : `0${current}`
            return `<b>${indC}</b><span></span> ${indT}`
        }
    },
    scrollbar:{
        el: '.slider-homepage__scrollbar'
    }

});

///Add span
const slider__heading = document.querySelectorAll(".slider-homepage__title");
slider__heading.forEach(element => {
    let text = element.innerHTML.split(' ');
    let first = text.splice(0, 2);
    element.innerHTML = ` ${first.join(' ')} <br><span>${text.join(' ')}</span>`;
});