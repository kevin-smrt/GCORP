// Récupère la photo
const profilPicture = document.querySelector('.intro__img');
const headerIntro = document.querySelector('.header__intro');
const mainIntro = document.querySelector('.main__intro');
const galeries = document.querySelector('.galeries');

// Ajout d'un événement sur le la fenêtre de type scroll
window.addEventListener('scroll', () => {
    // Prend la valeur qui correspond au scroll sur l'axe Y
    let offset = window.scrollY;

    // Déplace la photo selon la valeur du scroll
    profilPicture.style.top = `${offset * 0.1}px`
    profilPicture.style.left = `${offset * 0.08}px`

    // Si offset est supérieur à 100, ajoute la classe slide_left, sinon la retire
    offset > 100 ? profilPicture.classList.add('slide_left') : profilPicture.classList.remove('slide_left');

    offset > 100 ? headerIntro.classList.add('slide_left') : headerIntro.classList.remove('slide_left');

    offset > 600 ? mainIntro.classList.add('slide_right') : mainIntro.classList.remove('slide_right');

    offset > 1100 ? galeries.classList.add('slide_bot') : galeries.classList.remove('slide_bot');
});