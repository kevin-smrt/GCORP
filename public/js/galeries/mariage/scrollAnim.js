// Récupère les éléments qui vont s'activer au scroll
const secondSection = document.querySelectorAll('#section2 img');
const thirdSection = document.querySelectorAll('#section3 img');
const fourthSection = document.querySelectorAll('#section4 img');

// Création d'une instance de l'API intersection observer
const observer = new IntersectionObserver((entries, observer) => {
    // Pour chaque élément obsérvé
    entries.forEach((entry) => {
        // Si l'élément rentre dans le viewport
        if (entry.isIntersecting) {
            // Si l'element n'a pas d'attribut src
            // Evite le lag
            if (!entry.target.src) {
                entry.target.src = entry.target.dataset.src;
            }
            entry.target.classList.add('appears');
        }
    });
}, {
    // Definit le pourcentage de visibilité pour déclenché l'action
    threshold: 0.5,
});

secondSection.forEach((img) => observer.observe(img));
thirdSection.forEach((img) => observer.observe(img));
fourthSection.forEach((img) => observer.observe(img));