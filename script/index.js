const hamburger = document.querySelector(".nav__menu");
const menu = document.querySelector(".top-nav");


hamburger.addEventListener('click', () => {
    if (menu.classList.contains('hidden')) {
        menu.classList.remove('hidden');
    } else {
        menu.classList.add('hidden');
    }
})