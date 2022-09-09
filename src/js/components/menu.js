/////menu
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

// console.log(window.scrollY);
window.addEventListener('scroll', function () {
    // header.classList.toggle("sticky", window.scrollY > 32);
    var header = document.querySelector('.header');
    if (window.scrollY > 35) {
        header.classList.add("sticky");
    } else if (window.scrollY < 50) {
        header.classList.remove("sticky");
    }
})



///mobile burger menu



const menu_btn = document.querySelector('.hamburger');
const mobile_menu = document.querySelector('.mobile-nav');

const header__logo = document.querySelector('.header__logo');
const header__search = document.querySelector('.header__search-field');


menu_btn.addEventListener('click', function () {
    menu_btn.classList.toggle('is-active');
    mobile_menu.classList.toggle('is-active');
    header__logo.classList.toggle('hidden');
    header__search.classList.toggle('visible');
});
