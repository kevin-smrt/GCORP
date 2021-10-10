// Récupération des elements
const testimonialTextFamily = document.querySelector('#famille .testimonial-text');
const testimonialBlocFamily = document.querySelector('#famille .testimonial-bloc');
const testimonialNameFamily = document.querySelector('#famille .testimonial-name');

const testimonialPreviousFamily = document.querySelector('#famille .previous');
const testimonialNextFamily = document.querySelector('#famille .next');

// Création des textes
const textFamily1 = "Merci Megane d’avoir immortalisé ces précieux moments en famille avec notre tout petit, en les sublimants au travers de ton objectif. Megane est d’un professionnalisme rare, très disponible, à l’écoute et très douce. Elle sait capturer les moments intimes et se faire oublier pour immortaliser le naturel et la pureté d’un instant.";
const textFamily2 = "Je voulais offrir à mes sœurs un cadeau de Noël particulier : une séance photo de toutes les trois pour qu'on garde à jamais des souvenirs de notre unicité. Mégane a su comprendre mon envie et avec sa grande créativité nous avons organisé le décor, le lieu, la date... La météo ne semblait pas idéale et finalement Mégane connaissait un lieu parfait pour le rendu que je voulais des photos. Le but n'était pas de poser comme des modèles mais juste d'avoir de magnifiques souvenirs. Mégane est discrète mais efficace et douce. J'ai adoré le résultat. Je vous conseille d'aller voir sa page Instagram qui est vraiment magnifique.";
const textFamily3 = "Nous avons eu un shooting grossesse ainsi qu'un shooting naissance en cadeau. Ca a été deux moments très agréable avec Mégane, elle est professionnelle très à l'écoute de nos envies et de nos ressentis. Bienveillante. Mégane est disponible et avons pu la joindre très facilement pour échanger sur les séances, avoir ses avis sur les tenues et possibles poses. Les photos sont d'une qualité sublime et le concept de choisir sur la plateforme les photos souhaitées pour les retouches est très apréciable. Nous avons pu prendre le temps pour les séances, tout se fait dans une super ambiance ça restera de très beaux souvenirs. Merci à Mégane pour ces moments et photos!";

// Création des noms
const nameFamily1 = "Margot, Anthony & Leandre";
const nameFamily2 = "Sandra & ses soeurs";
const nameFamily3 = "Louise, Titouan & Charlie";

// Par défaut, les éléments 1 seront affichés
testimonialTextFamily.textContent = textFamily1;
testimonialNameFamily.textContent = nameFamily1;

// Fonction pour afficher le prochain avis
const nextTestimonialFamily = () => {
    // Par rapport au contenu de l'avis
    switch (testimonialTextFamily.textContent) {
        // Si il est égale au text 1 etc..
        case textFamily1:
            // Enlève la class show pour un effet de disparition
            testimonialBlocFamily.classList.remove('show');
            
            // Met les bonnes valeurs aux bons endroits
            setTimeout(() => {
                testimonialTextFamily.textContent = textFamily2;
                testimonialNameFamily.textContent = nameFamily2;
                // Ajoute la class show pour un effet d'apparition
                testimonialBlocFamily.classList.add('show');
            }, 300);
            break;

        case textFamily2:
            testimonialBlocFamily.classList.remove('show');
            setTimeout(() => {
                testimonialTextFamily.textContent = textFamily3;
                testimonialNameFamily.textContent = nameFamily3;
                testimonialBlocFamily.classList.add('show');
            }, 300);
            break;

        case textFamily3:
            testimonialBlocFamily.classList.remove('show');
            setTimeout(() => {
                testimonialTextFamily.textContent = textFamily1;
                testimonialNameFamily.textContent = nameFamily1;
                testimonialBlocFamily.classList.add('show');
            }, 300);
            break;
    
        default:
            break;
    }
}

// Fonction pour afficher l'avis précedent
const previousTestimonialFamily = () => {
    // Même fonctionnement que nextTestimonial
    switch (testimonialTextFamily.textContent) {
        case textFamily1:
            testimonialBlocFamily.classList.remove('show');
            setTimeout(() => {
                testimonialTextFamily.textContent = textFamily3;
                testimonialNameFamily.textContent = nameFamily3;
                testimonialBlocFamily.classList.add('show');
            }, 300);
            break;

        case textFamily2:
            testimonialBlocFamily.classList.remove('show');
            setTimeout(() => {
                testimonialTextFamily.textContent = textFamily1;
                testimonialNameFamily.textContent = nameFamily1;
                testimonialBlocFamily.classList.add('show');
            }, 300);
            break;

        case textFamily3:
            testimonialBlocFamily.classList.remove('show');
            setTimeout(() => {
                testimonialTextFamily.textContent = textFamily2;
                testimonialNameFamily.textContent = nameFamily2;
                testimonialBlocFamily.classList.add('show');
            }, 300);
            break;

        default:
            break;
    }
}

// Ajout d'un écouteur d'evenement sur le bouton qui correspond à next ou previous
testimonialNextFamily.addEventListener("click", nextTestimonialFamily);
testimonialPreviousFamily.addEventListener("click", previousTestimonialFamily);