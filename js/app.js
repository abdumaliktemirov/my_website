const bars = document.querySelector('.bars');
const navBar = document.querySelector('.main-navigation');
const body = document.querySelector('body');

bars.addEventListener('click', () => {
    bars.classList.toggle('bars-active')
    navBar.classList.toggle('main-navigation__items-active')
    body.classList.toggle('body-active')
});