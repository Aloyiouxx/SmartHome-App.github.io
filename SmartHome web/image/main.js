/* ===================== NAV MENU ===================== */

const menuBtn = document.querySelector('#menu-btn');
const closeBtn = document.querySelector('#close-btn');
const menu = document.querySelector('.nav__items');


const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');

menuToggle.addEventListener('click', () => {
  navMenu.classList.toggle('hidden');
});





const openNavMenu = () => {
    menu.classList.add('show');
    menuBtn.style.display = 'none';
    closeBtn.style.display = 'inline-block';
};

const closeNavMenu = () => {
    menu.classList.remove('show');
    menuBtn.style.display = 'inline-block';
    closeBtn.style.display = 'none';
};

menuBtn.addEventListener('click', openNavMenu);
closeBtn.addEventListener('click', closeNavMenu);


/* ===================== FAQ TOGGLE ===================== */

const faqs = document.querySelectorAll('.faqs');

faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('open');

        const icon = faq.querySelector('.faqs__icon i');
        if (icon) {
            icon.classList.toggle('uil-plus');
            icon.classList.toggle('uil-minus');
        }
    });
});


/* ===================== NAV SCROLL EFFECT ===================== */

window.addEventListener('scroll', () => {
    document
        .querySelector('nav')
        .classList.toggle('window-scroll', window.scrollY > 50);
});


/* ===================== CLOSE MENU ON LINK CLICK (MOBILE) ===================== */

const navLinks = document.querySelectorAll('.nav__items a');

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth <= 1024) {
            closeNavMenu();
        }
    });
});


/* ===================== RESET MENU ON RESIZE ===================== */

window.addEventListener('resize', () => {
    if (window.innerWidth > 1024) {
        menu.classList.remove('show');
        menuBtn.style.display = 'none';
        closeBtn.style.display = 'none';
    } else {
        menuBtn.style.display = 'inline-block';
    }
});




















document.getElementById('menu-btn').onclick = () => alert('MENU CLICKED');
document.getElementById('close-btn').onclick = () => alert('CLOSE CLICKED');
