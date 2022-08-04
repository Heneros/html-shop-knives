const btnLink = document.querySelectorAll('.js-select');
const menuOpen = document.querySelector('.select-header__main');


btnLink.forEach(el => {
    el.addEventListener('click', () =>{
        menuOpen.classList.toggle('select-header__visible');
    })
})
