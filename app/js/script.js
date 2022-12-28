// Hamburger menu show hide

const nav = document.querySelector("nav");
const menu = document.querySelector('#nav-menu');
const hamburger = document.querySelector('#hamburger');
const hamLogo = document.querySelector('#ham-logo')

hamburger.addEventListener('click', openMenu);

function openMenu() {

    nav.classList.toggle('active');
    menu.classList.toggle('active');

    if(nav.classList.contains('active')) {
        hamLogo.src = './images/icon-close.svg';
    } else {
        hamLogo.src = './images/icon-hamburger.svg';
    }
}