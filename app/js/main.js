"use strict";var intervalId,findMyState=function(){var e=document.querySelector(".location");navigator.geolocation.getCurrentPosition((function(t){var n=t.coords.latitude,a=t.coords.longitude,c="https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=".concat(n,"&longitude==").concat(a,"&localityLanguage=en");fetch(c).then((function(e){return e.json()})).then((function(t){e.textContent=t.principalSubdivision}))}),(function(){e.textContent="Kyiv"}))};findMyState(),document.querySelectorAll(".js-select").forEach((function(e){e.addEventListener("click",(function(e){var t=e.currentTarget.dataset.path;document.querySelectorAll(".select-header__main").forEach((function(e){document.querySelector("[data-target=".concat(t,"]")).classList.contains("open")||(e.classList.remove("select-header__visible"),e.classList.remove("open"),document.querySelector("[data-target=".concat(t,"]")).classList.add("select-header__visible"),intervalId=setTimeout((function(){document.querySelector("[data-target=".concat(t,"]")).classList.add("open")}),0)),document.querySelector("[data-target=".concat(t,"]")).classList.contains("open")&&(clearTimeout(intervalId),document.querySelector("[data-target=".concat(t,"]")).classList.remove("select-header__visible"),intervalId=setTimeout((function(){document.querySelector("[data-target=".concat(t,"]")).classList.remove("open")}),0)),window.onclick=function(e){e.target!=document.querySelector("[data-target=".concat(t,"]"))&&e.target!=document.querySelector("[data-path=".concat(t,"]")||e.target==document.querySelector("select-header__main"))&&(document.querySelector("[data-target=".concat(t,"]")).classList.remove("select-header__visible"),document.querySelector("[data-target=".concat(t,"]")).classList.remove("open"))}}))}))}));var swiper=new Swiper(".slider-homepage__swiper",{speed:800,spaceBetween:100,pagination:{el:".swiper-pagination",type:"custom",renderCustom:function(e,t,n,a){var c=n>=10?n:"0".concat(n),o=t>=10?t:"0".concat(t);return"<b>".concat(o,"</b><span></span> ").concat(c)}},scrollbar:{el:".slider-homepage__scrollbar"}}),slider__heading=document.querySelectorAll(".slider-homepage__title");slider__heading.forEach((function(e){var t=e.innerHTML.split(" "),n=t.splice(0,2);e.innerHTML=" ".concat(n.join(" ")," <br><span>").concat(t.join(" "),"</span>")}));var noveltySlider=new Swiper(".novelty-slider",{slidesPerView:3,spaceBetween:20,pagination:{el:".novelty__pagination"}}),ProductsSlider=new Swiper(".bestsellers-products__swiper",{speed:800,spaceBetween:50,slidesPerView:4,pagination:{el:".bestsellers-products__pagination"}});
//# sourceMappingURL=main.js.map
