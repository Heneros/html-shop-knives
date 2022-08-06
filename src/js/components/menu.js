
const menuOpen = document.querySelector('.select-header__main');



const menuDropdown = document.querySelectorAll('.header__menu-dropdown');
// btnLink.forEach(el => {
//     el.addEventListener('click', () => {
//         menuOpen.classList.toggle('select-header__visible');
//     })
// })


const btnLink = document.querySelectorAll('.js-select');
btnLink.forEach(el => {
    el.addEventListener('click', (e) => {

        let parent = e.currentTarget.closest('.header__menu-dropdown');
        parent.classList.add('select-header__visible');
        document.querySelectorAll('.header__menu-dropdown').forEach(el => {
            el.classList.remove('select-header__visible')
        });


    });
})

// window.addEventListener('click', function (e) {
//     if (!document.querySelector('.header__menu-dropdown').contains(e.target) && !document.querySelector('.js-select').contains(e.target) ) {
//         alert(1223)
//         document.querySelector('.header__menu-dropdown').classList.remove('select-header__visible');
//     }
// })

