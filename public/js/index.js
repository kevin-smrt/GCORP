// Récupètre tout les slides du carousel
const slides = document.querySelectorAll('.carousel__slider__slide');

const auto = true;
const intervalTime = 4000;
let slideInterval;

const nextSlide = () => {
    // Récupère le slide avec la classe --curent
    const current = document.querySelector('.carousel__slider__slide--current');
    // Supprime cette classe
    current.classList.remove('carousel__slider__slide--current');

    // Si le slide (qui avait la classe --current) a un element qui le suit
    if (current.nextElementSibling) {
        // La classe --current lui est ajouté
        current.nextElementSibling.classList.add('carousel__slider__slide--current');
    } else {
        // Sinon la classe --current est ajouté au premier enfant pour recommencer la boucle
        slides[0].classList.add('carousel__slider__slide--current');
    }
}

if (auto) {
    slideInterval = setInterval(nextSlide, intervalTime)
}