let burgerMenuWrapper = document.querySelector('.burger-menu-wrapper');
let burgerMenu = burgerMenuWrapper.querySelector('.burger-menu');
let navMenu = document.querySelector('.nav-menu');
let logoText = document.querySelector('.company-attr__text');
let body = document.querySelector('body');

burgerMenuWrapper.addEventListener('click', evt => {
    burgerMenu.classList.toggle('burger-menu-active');
    navMenu.classList.toggle('nav-menu-open');
    logoText.classList.toggle('company-attr__text-open');
    body.classList.toggle('scroll-lock')
})

