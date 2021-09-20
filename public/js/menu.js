const navSlide = () => {
    const mobile = document.querySelector('.menu__mobile');
    const menu = document.querySelector('.menu');
    // const navLinks = document.querySelectorAll('.menu');
    // const prev = document.querySelector('.buttons_prev');
    // const next = document.querySelector('.buttons_next');

    mobile.addEventListener('click', () => {
        menu.classList.toggle('active');
        // prev.classList.toggle('button_disable');
        // next.classList.toggle('button_disable');
        // navLinks.forEach((link, index) => {
        //     if (link.style.animation) {
        //         link.style.animation = '';
        //     } else {
        //         link.style.animation = `navLinkFade 0.5s ease forwards ${index / 4 + 0.5}s`;
        //     }
        // });
        mobile.classList.toggle('toggle');
    });
}

navSlide();