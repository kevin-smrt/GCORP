// Récupération des elements
const testimonialTextPortrait = document.querySelector('#portrait .testimonial-text');
const testimonialBlocPortrait = document.querySelector('#portrait .testimonial-bloc');
const testimonialNamePortrait = document.querySelector('#portrait .testimonial-name');

const testimonialPreviousPortrait = document.querySelector('#portrait .previous');
const testimonialNextPortrait = document.querySelector('#portrait .next');

// Création des textes
const textPortrait1 = "J'avais besoin de photos dans un cadre professionnel et finalement Mégane m'a convaincu de faire aussi des photos plus décontractée. Etant totalement novice, Mégane a su me guider et me mettre en confiance devant l'appareil. Résultat: j'ai passé un moment tellement agréable. Et que dire des photos... Elles sont incroyables et pour la première fois, j'apprécie de m'y voir.";
const textPortrait2 = "Voila maintenant plusieurs années que j'accompagne Mégane dans sa passion et maintenant son métier de photographe.Ayant comme beaucoup de femmes, certains complexes, Mégane a bien su me diriger pour les différentes photos que l'on a pu prendre ensemble. Elle a su me mettre à l'aise et est toujours restée calme, détendue en m'indiquant quelles postures adopter. Après ces séances, le travail ensemble et sur moi même, j'ai fini par me trouver jolie. Elle a su me rendre vivante sur ses portraits. Je la félicite pour son professionnalisme et la qualité de ses clichés.";
const textPortrait3 = "Avant de faire la séance photo, nous avons longuement discuté ensemble afin de choisir le lieu idéal qui me correspondait, ainsi que la tenue.Le jour de la séance, malgrè le stress, elle a su me mettre en confiance par ses paroles et sa bienveillance.Toutes les photos étaient très belles, il fut difficile de choisir entre toutes!! Ce fut une expérience très gratifiante et je recommanderai avec plaisir!";

// Création des noms
const namePortrait1 = "Colleen";
const namePortrait2 = "Camille";
const namePortrait3 = "Laurie";

// Par défaut, les éléments 1 seront affichés
testimonialTextPortrait.textContent = textPortrait1;
testimonialNamePortrait.textContent = namePortrait1;

// Fonction pour afficher le prochain avis
const nextTestimonialPortrait = () => {
    // Par rapport au contenu de l'avis
    switch (testimonialTextPortrait.textContent) {
        // Si il est égale au text 1 etc..
        case textPortrait1:
            // Enlève la class show pour un effet de disparition
            testimonialBlocPortrait.classList.remove('show');
            
            // Met les bonnes valeurs aux bons endroits
            setTimeout(() => {
                testimonialTextPortrait.textContent = textPortrait2;
                testimonialNamePortrait.textContent = namePortrait2;
                // Ajoute la class show pour un effet d'apparition
                testimonialBlocPortrait.classList.add('show');
            }, 300);
            break;

        case textPortrait2:
            testimonialBlocPortrait.classList.remove('show');
            setTimeout(() => {
                testimonialTextPortrait.textContent = textPortrait3;
                testimonialNamePortrait.textContent = namePortrait3;
                testimonialBlocPortrait.classList.add('show');
            }, 300);
            break;

        case textPortrait3:
            testimonialBlocPortrait.classList.remove('show');
            setTimeout(() => {
                testimonialTextPortrait.textContent = textPortrait1;
                testimonialNamePortrait.textContent = namePortrait1;
                testimonialBlocPortrait.classList.add('show');
            }, 300);
            break;
    
        default:
            break;
    }
}

// Fonction pour afficher l'avis précedent
const previousTestimonialPortrait = () => {
    // Même fonctionnement que nextTestimonial
    switch (testimonialTextPortrait.textContent) {
        case textPortrait1:
            testimonialBlocPortrait.classList.remove('show');
            setTimeout(() => {
                testimonialTextPortrait.textContent = textPortrait3;
                testimonialNamePortrait.textContent = namePortrait3;
                testimonialBlocPortrait.classList.add('show');
            }, 300);
            break;

        case textPortrait2:
            testimonialBlocPortrait.classList.remove('show');
            setTimeout(() => {
                testimonialTextPortrait.textContent = textPortrait1;
                testimonialNamePortrait.textContent = namePortrait1;
                testimonialBlocPortrait.classList.add('show');
            }, 300);
            break;

        case textPortrait3:
            testimonialBlocPortrait.classList.remove('show');
            setTimeout(() => {
                testimonialTextPortrait.textContent = textPortrait2;
                testimonialNamePortrait.textContent = namePortrait2;
                testimonialBlocPortrait.classList.add('show');
            }, 300);
            break;

        default:
            break;
    }
}

// Ajout d'un écouteur d'evenement sur le bouton qui correspond à next ou previous
testimonialNextPortrait.addEventListener("click", nextTestimonialPortrait);
testimonialPreviousPortrait.addEventListener("click", previousTestimonialPortrait);