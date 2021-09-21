// Récupère la photo
const profilPicture = document.querySelector('.intro__img');
const headerIntro = document.querySelector('.intro__about');
const galeries = document.querySelector('.galeries');

// Ajout d'un événement sur le la fenêtre de type scroll
window.addEventListener('scroll', () => {
    // Prend la valeur qui correspond au scroll sur l'axe Y
    let offset = window.scrollY;

    // Si offset est supérieur à 100, ajoute la classe slide_left, sinon la retire
    offset > 100 ? profilPicture.classList.add('slide_left') : profilPicture.classList.remove('slide_left');

    offset > 100 ? headerIntro.classList.add('slide_right') : headerIntro.classList.remove('slide_right');

    offset > 700 ? galeries.classList.add('slide_bot') : galeries.classList.remove('slide_bot');
});