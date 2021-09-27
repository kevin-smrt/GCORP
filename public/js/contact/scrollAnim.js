// Récupère les éléments qui vont s'activer au scroll
const mainHeader = document.querySelector('.main__header');
const form = document.querySelector('.form-container');
const contactInfos = document.querySelector('.contact');

// Création d'une instance de l'API intersection observer
const observer = new IntersectionObserver((entries, observer) => {
    // Pour chaque élément obsérvé
    entries.forEach((entry) => {
        // Si l'élément rentre dans le viewport
        if (entry.isIntersecting) {
            // Par rapport à son nom de classe, effectue une action
            switch (entry.target.className) {
                case "main__header":
                    entry.target.classList.add('slide_top');
                    break;

                case "form-container":
                    entry.target.classList.add('slide_left');
                    break;

                case "contact":
                    entry.target.classList.add('slide_right');

                default:
                    break;
            }
        }
    });
}, {
    // Definit le pourcentage de visibilité pour déclenché l'action
    threshold: 0.5,
});

observer.observe(mainHeader);
observer.observe(form);
observer.observe(contactInfos);