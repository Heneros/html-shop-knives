// $(function () {

//     const findMyState = () => {
//         const status = document.querySelector('.location');

//         const success = (position) => {
//             // console.log(position);
//             const latitude = position.coords.latitude;
//             const longitude = position.coords.longitude;
//             // console.log('latitude ' + latitude + ' longitude ' + longitude);

//             const geoApiUrl = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude==${longitude}&localityLanguage=en`;

//             fetch(geoApiUrl)
//                 .then(res => res.json())
//                 .then(data => {
//                     // console.log(data);
//                     status.textContent = data.principalSubdivision;
//                 })
//         }

//         const error = () => {
//             status.textContent = "Odessa";
//         }

//         navigator.geolocation.getCurrentPosition(success, error);
//     }
//     findMyState();

//     /////menu
//     let intervalId;
//     document.querySelectorAll('.js-select').forEach(e => {
//         e.addEventListener('click', e => {
//             const menu = e.currentTarget.dataset.path;

//             document.querySelectorAll('.select-header__main').forEach(e => {
//                 if (!document.querySelector(`[data-target=${menu}]`).classList.contains('open')) {
//                     e.classList.remove('select-header__visible');
//                     e.classList.remove('open');
//                     document.querySelector(`[data-target=${menu}]`).classList.add('select-header__visible');
//                     intervalId = setTimeout(() => {
//                         document.querySelector(`[data-target=${menu}]`).classList.add('open');
//                     }, 0);
//                 }

//                 if (document.querySelector(`[data-target=${menu}]`).classList.contains('open')) {
//                     clearTimeout(intervalId);
//                     document.querySelector(`[data-target=${menu}]`).classList.remove('select-header__visible');
//                     intervalId = setTimeout(() => {
//                         document.querySelector(`[data-target=${menu}]`).classList.remove('open');
//                     }, 0);
//                 }

//                 window.onclick = e => {
//                     if (e.target == document.querySelector(`[data-target=${menu}]`) || e.target == document.querySelector(`[data-path=${menu}]` || e.target == document.querySelector('select-header__main'))) {
//                         return
//                     } else {
//                         document.querySelector(`[data-target=${menu}]`).classList.remove('select-header__visible');
//                         document.querySelector(`[data-target=${menu}]`).classList.remove('open');
//                     }
//                 }
//             })
//         })
//     });

//     // console.log(window.scrollY);
//     // window.addEventListener('scroll', function () {
//     //     var header = document.querySelector('.header');
//     //     if (window.scrollY > 35) {
//     //         header.classList.add("sticky");
//     //     } else if (window.scrollY < 50) {
//     //         header.classList.remove("sticky");
//     //     }
//     // })



//     ///mobile burger menu



//     // const menu_btn = document.querySelector('.hamburger');
//     // const mobile_menu = document.querySelector('.mobile-nav');



//     // const header__cart = document.querySelector('.header__cart-link');
//     // const header__favorites = document.querySelector('.header-mobile__favorites');
//     // const header__mobileCall = document.querySelector('.header-mobile__call');
//     // const header__mobileAccount = document.querySelector('.header-mobile__account');
//     // // const heade__FirstLine = document.querySelector('.header__first-line');

//     // const header__logoWhite = document.querySelector('.header__logo-white');




//     // menu_btn.addEventListener('click', function () {
//     //     menu_btn.classList.toggle('is-active');
//     //     mobile_menu.classList.toggle('is-active');
//     //     header__logo.classList.toggle('hidden');
//     //     header__search.classList.toggle('visible');
//     //     header__cart.classList.toggle('hidden');
//     //     header__favorites.classList.toggle('hidden');
//     //     header__mobileCall.classList.toggle('hidden');
//     //     header__mobileAccount.classList.toggle('hidden');
//     //     header__logoWhite.classList.toggle('visible');
//     //     // heade__FirstLine.classList.toggle('visible');
//     // });



//     const header__logo = document.querySelector('.header__logo');


//     const pageHeader = document.querySelector(".page-header");
//     const header__search = document.querySelector('.header__search-field');
//     // const toggleMenu = document.querySelector(".toggle-menu");
//     const toggleMenu = document.querySelector(".hamburger");
//     const menuWrapper = document.querySelector(".menu-wrapper");
//     const level1Links = document.querySelectorAll(".level-1 > li > a");
//     const listWrapper2 = document.querySelector(".list-wrapper:nth-child(2)");
//     const listWrapper3 = document.querySelector(".list-wrapper:nth-child(3)");
//     const subMenuWrapper2 = listWrapper2.querySelector(".sub-menu-wrapper");
//     const subMenuWrapper3 = listWrapper3.querySelector(".sub-menu-wrapper");
//     const backOneLevelBtns = document.querySelectorAll(".back-one-level");
//     const isVisibleClass = "is-visible";
//     const isActiveClass = "is-active";

//     toggleMenu.addEventListener("click", function () {
//         menuWrapper.classList.toggle(isVisibleClass);
//         toggleMenu.classList.toggle(isActiveClass);
//         header__logo.classList.toggle('hidden');
//         header__search.classList.toggle('visible');

//         if (!this.classList.contains(isVisibleClass)) {
//             listWrapper2.classList.remove(isVisibleClass);
//             listWrapper3.classList.remove(isVisibleClass);
//             const menuLinks = menuWrapper.querySelectorAll("a");
//             for (const menuLink of menuLinks) {
//                 menuLink.classList.remove(isActiveClass);
//             }
//         }
//     });

//     for (const level1Link of level1Links) {
//         level1Link.addEventListener("click", function (e) {
//             const siblingList = level1Link.nextElementSibling;
//             if (siblingList) {
//                 e.preventDefault();
//                 this.classList.add(isActiveClass);
//                 const cloneSiblingList = siblingList.cloneNode(true);
//                 subMenuWrapper2.innerHTML = "";
//                 subMenuWrapper2.append(cloneSiblingList);
//                 listWrapper2.classList.add(isVisibleClass);
//             }
//         });
//     }

//     listWrapper2.addEventListener("click", function (e) {
//         const target = e.target;
//         if (target.tagName.toLowerCase() === "a" && target.nextElementSibling) {
//             const siblingList = target.nextElementSibling;
//             e.preventDefault();
//             target.classList.add(isActiveClass);
//             const cloneSiblingList = siblingList.cloneNode(true);
//             subMenuWrapper3.innerHTML = "";
//             subMenuWrapper3.append(cloneSiblingList);
//             listWrapper3.classList.add(isVisibleClass);
//         }
//     });

//     for (const backOneLevelBtn of backOneLevelBtns) {
//         backOneLevelBtn.addEventListener("click", function () {
//             const parent = this.closest(".list-wrapper");
//             parent.classList.remove(isVisibleClass);
//             parent.previousElementSibling
//                 .querySelector(".is-active")
//                 .classList.remove(isActiveClass);
//         });
//     }

//     ///slider
//     const swiper = new Swiper('.slider-homepage__swiper', {
//         speed: 800,
//         spaceBetween: 100,
//         pagination: {
//             el: '.swiper-pagination',
//             type: 'custom',
//             renderCustom: function (swiper, current, total, curClas) {
//                 let indT = total >= 10 ? total : `0${total}`
//                 let indC = current >= 10 ? current : `0${current}`
//                 return `<b>${indC}</b><span></span> ${indT}`
//             }
//         },
//         scrollbar: {
//             el: '.slider-homepage__scrollbar',
//             draggable: true,
//         },
//         breakpoints: {

//         }

//     });

//     ///Add span
//     const slider__heading = document.querySelectorAll(".slider-homepage__title");
//     slider__heading.forEach(element => {
//         let text = element.innerHTML.split(' ');
//         let first = text.splice(0, 2);
//         element.innerHTML = ` ${first.join(' ')} <br><span>${text.join(' ')}</span>`;
//     });

//     const noveltySlider = new Swiper('.novelty-slider', {
//         slidesPerView: 1,
//         spaceBetween: 20,
//         pagination: {
//             el: '.novelty__pagination'
//         },
//         breakpoints: {
//             1160: {
//                 slidesPerView: 3,
//             },
//             756: {
//                 slidesPerView: 2,
//             },
//         }
//     });

//     const ProductsSlider = new Swiper('.bestsellers-products-swiper', {
//         speed: 800,
//         // spaceBetween: 20,
//         // slidesPerView: 4,
//         slidesPerView: 1,
//         spaceBetween: 30,
//         pagination: {
//             el: '.bestsellers-products__pagination'
//         },
//         breakpoints: {
//             650: {
//                 slidesPerView: 2,
//             },
//             991: {
//                 slidesPerView: 3,
//             },
//             1500: {
//                 slidesPerView: 4,
//                 spaceBetween: 30,
//             },

//         }
//     });



//     $('.filter-style').styler();
// });