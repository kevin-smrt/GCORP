// Récupère les éléments qui vont s'activer au scroll
const profilPicture = document.querySelector('.intro__img__profil');
const bgPicture = document.querySelector('.intro__img__bg');
const headerIntro = document.querySelector('.intro__about');

// Création d'une instance de l'API intersection observer
const observer = new IntersectionObserver((entries, observer) => {
    // Pour chaque élément obsérvé
    entries.forEach( (entry) => {
        // Si l'élément rentre dans le viewport
        if (entry.isIntersecting) {
            // Par rapport à son nom de classe, effectue une action
            switch (entry.target.className) {
                case "intro__img__profil":
                    entry.target.src = entry.target.dataset.src;
                    bgPicture.src = bgPicture.dataset.src;
                    bgPicture.classList.add('slide_bot');
                    entry.target.classList.add('slide_left');
                    break;

                case "intro__about":
                    entry.target.classList.add('slide_right');
            
                default:
                    break;
            }
        }
    })
}, {
    // Definit le pourcentage de visibilité pour déclenché l'action
    threshold: 0.01
});

// Elements que l'API obeserve
observer.observe(profilPicture);
observer.observe(headerIntro);








// // Récupère la photo
// const profilPicture = document.querySelector('.intro__img');
// const headerIntro = document.querySelector('.intro__about');
// const galeries = document.querySelector('.galeries');

// // Ajout d'un événement sur le la fenêtre de type scroll
// window.addEventListener('scroll', () => {
//     // Prend la valeur qui correspond au scroll sur l'axe Y
//     let offset = window.scrollY;

//     // Si offset est supérieur à 100, ajoute la classe slide_left, sinon la retire
//     offset > 100 ? profilPicture.classList.add('slide_left') : profilPicture.classList.remove('slide_left');

//     offset > 100 ? headerIntro.classList.add('slide_right') : headerIntro.classList.remove('slide_right');

//     offset > 700 ? galeries.classList.add('slide_bot') : galeries.classList.remove('slide_bot');
// });