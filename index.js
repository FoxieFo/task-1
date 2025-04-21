window.addEventListener('scroll', function () {
    const header = document.querySelector('.header');
    if (window.scrollY > 15) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

const burger = document.getElementById('burger');
const nav = document.getElementById('nav');

burger.addEventListener('click', () => {
    burger.classList.toggle('open');
    nav.classList.toggle('show');
});