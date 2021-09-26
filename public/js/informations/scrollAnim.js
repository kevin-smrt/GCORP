// Récupère les éléments qui vont s'activer au scroll
const weddingPicture = document.querySelector('#mariage .picture-container');
const weddingText = document.querySelector('#mariage .text-container');
const weddingTestimonial = document.querySelector('.wedding-slider');

const familyPicture = document.querySelector('#famille .picture-container');
const familyText = document.querySelector('#famille .text-container');
const familyTestimonial = document.querySelector('.family-slider');

const portraitPicture = document.querySelector('#portrait .picture-container');
const portraitText = document.querySelector('#portrait .text-container');
const portraitTestimonial = document.querySelector('.portrait-slider');

// Création d'une instance de l'API intersection observer
const observer = new IntersectionObserver((entries, observer) => {
    // Pour chaque élément obsérvé
    entries.forEach((entry) => {
        // Si l'élément rentre dans le viewport
        if (entry.isIntersecting) {
            // Par rapport à son nom de classe, effectue une action
            switch (entry.target.className) {
                case "picture-container":
                    entry.target.classList.add('slide_left');
                    break;

                case "text-container":
                    entry.target.classList.add('slide_right');
                    break;

                case "wedding-slider":
                    entry.target.classList.add('slide_bot');
                    break;

                case "family-slider":
                    entry.target.classList.add('slide_bot');
                    break;

                case "portrait-slider":
                    entry.target.classList.add('slide_bot');
                    break;

                default:
                    break;
            }
        }
    });
}, {
    // Definit le pourcentage de visibilité pour déclenché l'action
    threshold: 0.01
});

observer.observe(weddingPicture);
observer.observe(weddingText);
observer.observe(weddingTestimonial);

observer.observe(familyPicture);
observer.observe(familyText);
observer.observe(familyTestimonial);

observer.observe(portraitPicture);
observer.observe(portraitText);
observer.observe(portraitTestimonial);