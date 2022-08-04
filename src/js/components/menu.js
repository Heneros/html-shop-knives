const btnLink = document.querySelectorAll('.js-select');
const menuOpen = document.querySelector('.select-header__main');
const menuDropdown = document.querySelector('.header__menu-dropdown');
// btnLink.forEach(el => {
//     el.addEventListener('click', () => {
//         menuOpen.classList.toggle('select-header__visible');
//     })
// })

btnLink.forEach(el => {
    el.addEventListener('click', (e) => {
        // let activeClass = document.querySelector('select-header__visible');
        // let menuOpenDrop = document.querySelector('.header__menu-dropdown');
        // let menuOpenContainer = document.querySelector('.select-header__main');
        document.querySelectorAll('.header__menu-dropdown').forEach(el => {
            el.classList.remove('select-header__visible')
        });
        let parent = e.currentTarget.closest('.header__menu-dropdown');
        parent.classList.add('select-header__visible');
    });
})

