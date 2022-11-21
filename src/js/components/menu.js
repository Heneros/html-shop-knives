/////menu
AOS.init({
    easing: 'ease-out-back',
    duration: 2700
});


let intervalId;
document.querySelectorAll('.js-select').forEach(e => {
    e.addEventListener('click', e => {
        const menu = e.currentTarget.dataset.path;

        document.querySelectorAll('.select-header__main').forEach(e => {
            if (!document.querySelector(`[data-target=${menu}]`).classList.contains('open')) {
                e.classList.remove('select-header__visible');
                e.classList.remove('open');
                document.querySelector(`[data-target=${menu}]`).classList.add('select-header__visible');

                intervalId = setTimeout(() => {
                    document.querySelector(`[data-target=${menu}]`).classList.add('open');
                }, 0);
            }

            if (document.querySelector(`[data-target=${menu}]`).classList.contains('open')) {
                clearTimeout(intervalId);
                document.querySelector(`[data-target=${menu}]`).classList.remove('select-header__visible');
                intervalId = setTimeout(() => {
                    document.querySelector(`[data-target=${menu}]`).classList.remove('open');
                }, 0);
            }

            window.onclick = e => {
                if (e.target == document.querySelector(`[data-target=${menu}]`) || e.target == document.querySelector(`[data-path=${menu}]` || e.target == document.querySelector('select-header__main'))) {
                    return
                } else {
                    document.querySelector(`[data-target=${menu}]`).classList.remove('select-header__visible');
                    document.querySelector(`[data-target=${menu}]`).classList.remove('open');
                }
            }
        })
    })
});

window.addEventListener('scroll', function () {
    var header = document.querySelector('.header');
    if (window.scrollY > 135) {
        header.classList.add("sticky");
    } else if (window.scrollY < 50) {
        header.classList.remove("sticky");
    }
})






// console.log(window.scrollY);
// window.addEventListener('scroll', function () {
//     var header = document.querySelector('.header');
//     if (window.scrollY > 35) {
//         header.classList.add("sticky");
//     } else if (window.scrollY < 50) {
//         header.classList.remove("sticky");
//     }
// })



///mobile burger menu



// const menu_btn = document.querySelector('.hamburger');
// const mobile_menu = document.querySelector('.mobile-nav');



// const header__cart = document.querySelector('.header__cart-link');
// const header__favorites = document.querySelector('.header-mobile__favorites');
// const header__mobileCall = document.querySelector('.header-mobile__call');
// const header__mobileAccount = document.querySelector('.header-mobile__account');
// // const heade__FirstLine = document.querySelector('.header__first-line');

// const header__logoWhite = document.querySelector('.header__logo-white');




// menu_btn.addEventListener('click', function () {
//     menu_btn.classList.toggle('is-active');
//     mobile_menu.classList.toggle('is-active');
//     header__logo.classList.toggle('hidden');
//     header__search.classList.toggle('visible');
//     header__cart.classList.toggle('hidden');
//     header__favorites.classList.toggle('hidden');
//     header__mobileCall.classList.toggle('hidden');
//     header__mobileAccount.classList.toggle('hidden');
//     header__logoWhite.classList.toggle('visible');
//     // heade__FirstLine.classList.toggle('visible');
// });



const header__logo = document.querySelector('.header__logo');

const body = document.querySelector('body');
const pageHeader = document.querySelector(".page-header");
const header__search = document.querySelector('.header__search-field');
// const toggleMenu = document.querySelector(".toggle-menu");
const toggleMenu = document.querySelector(".hamburger");
const menuWrapper = document.querySelector(".menu-wrapper");
const level1Links = document.querySelectorAll(".level-1 > li > a");
const listWrapper2 = document.querySelector(".list-wrapper:nth-child(2)");
const listWrapper3 = document.querySelector(".list-wrapper:nth-child(3)");
const subMenuWrapper2 = listWrapper2.querySelector(".sub-menu-wrapper");
const subMenuWrapper3 = listWrapper3.querySelector(".sub-menu-wrapper");
const backOneLevelBtns = document.querySelectorAll(".back-one-level");
const isVisibleClass = "is-visible";
const isActiveClass = "is-active";

toggleMenu.addEventListener("click", function () {
    menuWrapper.classList.toggle(isVisibleClass);
    toggleMenu.classList.toggle(isActiveClass);
    header__logo.classList.toggle('hidden');
    header__search.classList.toggle('visible');
    body.classList.toggle('noOverflow');


    if (!this.classList.contains(isVisibleClass)) {
        listWrapper2.classList.remove(isVisibleClass);
        listWrapper3.classList.remove(isVisibleClass);
        const menuLinks = menuWrapper.querySelectorAll("a");
        for (const menuLink of menuLinks) {
            menuLink.classList.remove(isActiveClass);
        }
    }
});

for (const level1Link of level1Links) {
    level1Link.addEventListener("click", function (e) {
        const siblingList = level1Link.nextElementSibling;
        if (siblingList) {
            e.preventDefault();
            this.classList.add(isActiveClass);
            const cloneSiblingList = siblingList.cloneNode(true);
            subMenuWrapper2.innerHTML = "";
            subMenuWrapper2.append(cloneSiblingList);
            listWrapper2.classList.add(isVisibleClass);

        }
    });
}

listWrapper2.addEventListener("click", function (e) {
    const target = e.target;
    if (target.tagName.toLowerCase() === "a" && target.nextElementSibling) {
        const siblingList = target.nextElementSibling;
        e.preventDefault();
        target.classList.add(isActiveClass);
        const cloneSiblingList = siblingList.cloneNode(true);
        subMenuWrapper3.innerHTML = "";
        subMenuWrapper3.append(cloneSiblingList);
        listWrapper3.classList.add(isVisibleClass);
    }
});

for (const backOneLevelBtn of backOneLevelBtns) {
    backOneLevelBtn.addEventListener("click", function () {
        const parent = this.closest(".list-wrapper");
        parent.classList.remove(isVisibleClass);
        parent.previousElementSibling
            .querySelector(".is-active")
            .classList.remove(isActiveClass);
    });
}
