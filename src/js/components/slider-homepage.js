///slider
const swiper = new Swiper('.slider-homepage__swiper');


///Add span
const slider__heading = document.querySelectorAll(".slider-homepage__title");
slider__heading.forEach(element => {
    let text = element.innerHTML.split(' ');
    let first = text.splice(0, 2);
    element.innerHTML = ` ${first.join(' ')} <br><span>${text.join(' ')}</span>`;
});