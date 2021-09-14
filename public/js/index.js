const slides = document.querySelectorAll('.carousel__slider__slide');

const auto = true;
const intervalTime = 4000;
let slideInterval;

const nextSlide = () => {
    const current = document.querySelector('.carousel__slider__slide--current');
    current.classList.remove('carousel__slider__slide--current');
    if (current.nextElementSibling) {
        current.nextElementSibling.classList.add('carousel__slider__slide--current');
    } else {
        slides[0].classList.add('carousel__slider__slide--current');
    }
}

if (auto) {
    slideInterval = setInterval(nextSlide, intervalTime)
}