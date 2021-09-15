// Récupère la photo
const profilPicture = document.querySelector('.intro__img img');

// Ajout d'un événement sur le la fenêtre de type scroll
window.addEventListener('scroll', () => {
    // Prend la valeur qui correspond au scroll sur l'axe Y
    let offset = window.scrollY;

    // Déplace la photo selon la valeur du scroll
    profilPicture.style.top = `${offset * 0.1}px`
    profilPicture.style.left = `${offset * 0.08}px`
});