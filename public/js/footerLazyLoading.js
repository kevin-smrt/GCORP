// Récupère les éléments qui vont s'activer au scroll
const instaPictures = document.querySelector('.footer__insta');

// Création d'une instance de l'API intersection observer
const footerObserver = new IntersectionObserver((entries, observer) => {
    // Pour chaque élément obsérvé
    entries.forEach((entry) => {
        // Si l'élément rentre dans le viewport
        if (entry.isIntersecting) {
            entry.target.querySelectorAll('img').forEach((img) => {
                img.src = img.dataset.src;
            });
        }
    })
}, {
    // Definit le pourcentage de visibilité pour déclenché l'action
    threshold: 0.01
});

// Elements que l'API obeserve
footerObserver.observe(instaPictures);