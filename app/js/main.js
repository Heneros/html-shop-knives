"use strict";var intervalId,findMyState=function(){var e=document.querySelector(".location");navigator.geolocation.getCurrentPosition((function(t){var r=t.coords.latitude,a=t.coords.longitude,n="https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=".concat(r,"&longitude==").concat(a,"&localityLanguage=en");fetch(n).then((function(e){return e.json()})).then((function(t){e.textContent=t.principalSubdivision}))}),(function(){e.textContent="Odessa"}))};function _createForOfIteratorHelper(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=_unsupportedIterableToArray(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var a=0,n=function(){};return{s:n,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,o=!0,s=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return o=e.done,e},e:function(e){s=!0,i=e},f:function(){try{o||null==r.return||r.return()}finally{if(s)throw i}}}}function _unsupportedIterableToArray(e,t){if(e){if("string"==typeof e)return _arrayLikeToArray(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?_arrayLikeToArray(e,t):void 0}}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,a=new Array(t);r<t;r++)a[r]=e[r];return a}findMyState(),document.querySelectorAll(".js-select").forEach((function(e){e.addEventListener("click",(function(e){var t=e.currentTarget.dataset.path;document.querySelectorAll(".select-header__main").forEach((function(e){document.querySelector("[data-target=".concat(t,"]")).classList.contains("open")||(e.classList.remove("select-header__visible"),e.classList.remove("open"),document.querySelector("[data-target=".concat(t,"]")).classList.add("select-header__visible"),intervalId=setTimeout((function(){document.querySelector("[data-target=".concat(t,"]")).classList.add("open")}),0)),document.querySelector("[data-target=".concat(t,"]")).classList.contains("open")&&(clearTimeout(intervalId),document.querySelector("[data-target=".concat(t,"]")).classList.remove("select-header__visible"),intervalId=setTimeout((function(){document.querySelector("[data-target=".concat(t,"]")).classList.remove("open")}),0)),window.onclick=function(e){e.target!=document.querySelector("[data-target=".concat(t,"]"))&&e.target!=document.querySelector("[data-path=".concat(t,"]")||e.target==document.querySelector("select-header__main"))&&(document.querySelector("[data-target=".concat(t,"]")).classList.remove("select-header__visible"),document.querySelector("[data-target=".concat(t,"]")).classList.remove("open"))}}))}))}));var header__logo=document.querySelector(".header__logo"),pageHeader=document.querySelector(".page-header"),header__search=document.querySelector(".header__search-field"),toggleMenu=document.querySelector(".hamburger"),menuWrapper=document.querySelector(".menu-wrapper"),level1Links=document.querySelectorAll(".level-1 > li > a"),listWrapper2=document.querySelector(".list-wrapper:nth-child(2)"),listWrapper3=document.querySelector(".list-wrapper:nth-child(3)"),subMenuWrapper2=listWrapper2.querySelector(".sub-menu-wrapper"),subMenuWrapper3=listWrapper3.querySelector(".sub-menu-wrapper"),backOneLevelBtns=document.querySelectorAll(".back-one-level"),isVisibleClass="is-visible",isActiveClass="is-active";toggleMenu.addEventListener("click",(function(){if(menuWrapper.classList.toggle(isVisibleClass),toggleMenu.classList.toggle(isActiveClass),header__logo.classList.toggle("hidden"),header__search.classList.toggle("visible"),!this.classList.contains(isVisibleClass)){listWrapper2.classList.remove(isVisibleClass),listWrapper3.classList.remove(isVisibleClass);var e,t=_createForOfIteratorHelper(menuWrapper.querySelectorAll("a"));try{for(t.s();!(e=t.n()).done;){e.value.classList.remove(isActiveClass)}}catch(e){t.e(e)}finally{t.f()}}}));var _step2,_iterator2=_createForOfIteratorHelper(level1Links);try{var _loop=function(){var e=_step2.value;e.addEventListener("click",(function(t){var r=e.nextElementSibling;if(r){t.preventDefault(),this.classList.add(isActiveClass);var a=r.cloneNode(!0);subMenuWrapper2.innerHTML="",subMenuWrapper2.append(a),listWrapper2.classList.add(isVisibleClass)}}))};for(_iterator2.s();!(_step2=_iterator2.n()).done;)_loop()}catch(e){_iterator2.e(e)}finally{_iterator2.f()}listWrapper2.addEventListener("click",(function(e){var t=e.target;if("a"===t.tagName.toLowerCase()&&t.nextElementSibling){var r=t.nextElementSibling;e.preventDefault(),t.classList.add(isActiveClass);var a=r.cloneNode(!0);subMenuWrapper3.innerHTML="",subMenuWrapper3.append(a),listWrapper3.classList.add(isVisibleClass)}}));var _step3,_iterator3=_createForOfIteratorHelper(backOneLevelBtns);try{for(_iterator3.s();!(_step3=_iterator3.n()).done;){var backOneLevelBtn=_step3.value;backOneLevelBtn.addEventListener("click",(function(){var e=this.closest(".list-wrapper");e.classList.remove(isVisibleClass),e.previousElementSibling.querySelector(".is-active").classList.remove(isActiveClass)}))}}catch(e){_iterator3.e(e)}finally{_iterator3.f()}var swiper=new Swiper(".slider-homepage__swiper",{speed:800,spaceBetween:100,pagination:{el:".swiper-pagination",type:"custom",renderCustom:function(e,t,r,a){var n=r>=10?r:"0".concat(r),i=t>=10?t:"0".concat(t);return"<b>".concat(i,"</b><span></span> ").concat(n)}},scrollbar:{el:".slider-homepage__scrollbar"},breakpoints:{}}),slider__heading=document.querySelectorAll(".slider-homepage__title");slider__heading.forEach((function(e){var t=e.innerHTML.split(" "),r=t.splice(0,2);e.innerHTML=" ".concat(r.join(" ")," <br><span>").concat(t.join(" "),"</span>")}));var noveltySlider=new Swiper(".novelty-slider",{slidesPerView:3,spaceBetween:20,pagination:{el:".novelty__pagination"}}),ProductsSlider=new Swiper(".bestsellers-products__swiper",{speed:800,spaceBetween:50,slidesPerView:4,pagination:{el:".bestsellers-products__pagination"}});
//# sourceMappingURL=main.js.map
