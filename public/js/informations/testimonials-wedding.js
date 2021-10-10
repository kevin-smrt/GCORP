// Récupération des elements
const testimonialText = document.querySelector('#mariage .testimonial-text');
const testimonialBloc = document.querySelector('#mariage .testimonial-bloc');
const testimonialName = document.querySelector('#mariage .testimonial-name');
const testimonialDate = document.querySelector('#mariage .testimonial-date');

const testimonialPrevious = document.querySelector('#mariage .previous');
const testimonialNext = document.querySelector('#mariage .next');

// Création des textes
const text1 = "Merveilleuse rencontre. Dès nos premiers échanges, Nous avons su que nous faisions le bon choix. Mégane a été évidement très professionnelle, la qualité et la  de ses photos en sont les parfaits exemples mais elle nous a aussi accompagné et suivi durant ces 2 années préparatifs. Elle nous a rassuré,conseillé a respecté nos personnalités, et s’est adaptée à nos envies. Elle a veillé a ce que la mariée mange le jour J  :) Mégane est une photographe talentueuse, attachante, elle exerce métier avec passion et sublime merveilleux moments que l’on peut vivre durant un mariage. Recommandation ++++";
const text2 = "Dès le premier rendez-vous Mégane a pris le temps de cerner notre couple, notre histoire et nos attentes. Lors de notre séance engagement nous n’étions pas les plus à l’aise avec les photos de couple et Mégane a tout de suite su nous mettre en confiance et nous nous sommes finalement pris au jeu. Les photos reflètent tellement toutes les émotions du mariage, des fous rires aux pleurs, que lorsque nous les avons vues les larmes n’ont cessés de remonter. Elle a su capter tous les moments tout en restant discrète et disponible. Alors que dire de plus, si vous recherchez une photographe professionnelle, attentionnée, soucieuse du détail et surtout à l’écoute de vos envies, n’hésitez pas une seule seconde. Merci encore mille fois pour ce superbe travail et d’avoir rendu cette journée si importante pour nous tout simplement magique!";
const text3 = "Nous sommes 2 timides qui ne sommes pas spécialement du genre à exposer notre amour facilement mais Mégane à su capter le moindre regard, l'émotion et tous les moments pour que cela reflète bien notre relation et l'esprit intimiste de notre mariage. Ses photos sont magnifiques et ont émues tous nos invités ! De plus, tout le monde a apprécié Megane, tant elle est gentille et bienveillante envers les invités et les mariés ! Merci encore à toi !";

// Création des noms
const name1 = "Mélanie & Damien";
const name2 = "Amandine & Kévin";
const name3 = "Noémie & Nicolas";

// Créations des dates
const date1 = "Mariage : 26 Juine 2021";
const date2 = "Mariage : 12 Septembre 2020";
const date3 = "Mariage : 7 Aout 2021";

// Par défaut, les éléments 1 seront affichés
testimonialText.textContent = text1;
testimonialName.textContent = name1;
testimonialDate.textContent = date1;

// Fonction pour afficher le prochain avis
const nextTestimonial = () => {
    // Par rapport au contenu de l'avis
    switch (testimonialText.textContent) {
        // Si il est égale au text 1 etc..
        case text1:
            // Enlève la class show pour un effet de disparition
            testimonialBloc.classList.remove('show');
            
            // Met les bonnes valeurs aux bons endroits
            setTimeout(() => {
                testimonialText.textContent = text2;
                testimonialName.textContent = name2;
                testimonialDate.textContent = date2;
                // Ajoute la class show pour un effet d'apparition
                testimonialBloc.classList.add('show');
            }, 300);
            break;

        case text2:
            testimonialBloc.classList.remove('show');
            setTimeout(() => {
                testimonialText.textContent = text3;
                testimonialName.textContent = name3;
                testimonialDate.textContent = date3;
                testimonialBloc.classList.add('show');
            }, 300);
            break;

        case text3:
            testimonialBloc.classList.remove('show');
            setTimeout(() => {
                testimonialText.textContent = text1;
                testimonialName.textContent = name1;
                testimonialDate.textContent = date1;
                testimonialBloc.classList.add('show');
            }, 300);
            break;
    
        default:
            break;
    }
}

// Fonction pour afficher l'avis précedent
const previousTestimonial = () => {
    // Même fonctionnement que nextTestimonial
    switch (testimonialText.textContent) {
        case text1:
            testimonialBloc.classList.remove('show');
            setTimeout(() => {
                testimonialText.textContent = text3;
                testimonialName.textContent = name3;
                testimonialDate.textContent = date3;
                testimonialBloc.classList.add('show');
            }, 300);
            break;

        case text2:
            testimonialBloc.classList.remove('show');
            setTimeout(() => {
                testimonialText.textContent = text1;
                testimonialName.textContent = name1;
                testimonialDate.textContent = date1;
                testimonialBloc.classList.add('show');
            }, 300);
            break;

        case text3:
            testimonialBloc.classList.remove('show');
            setTimeout(() => {
                testimonialText.textContent = text2;
                testimonialName.textContent = name2;
                testimonialDate.textContent = date2;
                testimonialBloc.classList.add('show');
            }, 300);
            break;

        default:
            break;
    }
}

// Ajout d'un écouteur d'evenement sur le bouton qui correspond à next ou previous
testimonialNext.addEventListener("click", nextTestimonial);
testimonialPrevious.addEventListener("click", previousTestimonial);