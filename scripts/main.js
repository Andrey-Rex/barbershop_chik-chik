
const addPreload = (elem) => {
    elem.classList.add('preload')
};

const removePreload = (elem) => {
    elem.classList.remove('preload')
};

const startSlider = (slider) => {
    removePreload(slider);
};

const initSlider = () => {
    const slider = document.querySelector('.slider');
    const sliderContainer = document.querySelector('.slider__container');
    sliderContainer.style.display = 'none';

    addPreload(slider)
    window.addEventListener('load', () => {
        startSlider(slider);
        sliderContainer.style.display = ''
    });
};

window.addEventListener('DOMContentLoaded', initSlider);
