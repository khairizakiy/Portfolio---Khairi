window.onscroll = function () { // jika web di scroll
    const header = document.querySelector('header'); // carikan elemen namanya header
    const fixedNav = header.offsetTop; // variable fixedNav ngambil dari header offsetTop

    if (window.pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed');
    } else {
        header.classList.remove('navbar-fixed');
    }
};


// Hamburger
const hamburger = document.querySelector('#hamburger'); // carikan elemen yg idnya hamburger
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function(){ // jika di click
    hamburger.classList.toggle('hamburger-active'); // maka muncul/ditambahkan hamburge-active di click tersebut
    navMenu.classList.toggle('hidden');
});