const addPreload = (elem) => {
    elem.classList.add('preload')
};

const removePreload = (elem) => {
    elem.classList.remove('preload');
};

const startSlider = () => {
    const sliderItems= document.querySelectorAll('.slider__item');
    const sliderList = document.querySelector('.slider__list');
    const btnNext = document.querySelector('.slider__arrow_next');
    const btnPrev = document.querySelector('.slider__arrow_prev');

    let activeSlide = 1;
    let position = 0;

    const checkSlider = () => {
        if (
            (activeSlide + 2 === sliderItems.length &&
            document.documentElement.offsetWidth > 560) ||
            activeSlide === sliderItems.length
        ) {
            btnNext.style.display = 'none';
        } else {
            btnNext.style.display = '';
        }

        if (activeSlide === 1) {
            btnPrev.style.display = 'none';
        } else {
            btnPrev.style.display = '';
        }
    };

    checkSlider();

    const nextSlide = () => {
        sliderItems[activeSlide]?.classList.remove('slider__item_active');
        position = -sliderItems[0].clientWidth * activeSlide;

        sliderList.style.transform = `translateX(${position}px)`;
        activeSlide += 1;
        sliderItems[activeSlide]?.classList.add('slider__item_active');
        checkSlider();
    };

    const prevSlide = () => {
        sliderItems[activeSlide]?.classList.remove('slider__item_active');
        position = -sliderItems[0].clientWidth * (activeSlide - 2);

        sliderList.style.transform = `translateX(${position}px)`;
        activeSlide -= 1;
        sliderItems[activeSlide]?.classList.add('slider__item_active');
        checkSlider();
    };

    btnNext.addEventListener('click', nextSlide);
    btnPrev.addEventListener('click', prevSlide);



    window.addEventListener('resize', () => {
        if (activeSlide + 2 > sliderItems.length &&
            document.documentElement.offsetWidth > 560) {
            activeSlide = sliderItems.length - 2;
            sliderItems[activeSlide]?.classList.add('.slider__item_active');
        }

        position = -sliderItems[0].clientWidth * (activeSlide - 1);
        sliderList.style.transform = `translateX(${position}px)`;
        checkSlider();
    })
};

const initSlider = () => {
    const slider = document.querySelector('.slider');
    const sliderContainer = document.querySelector('.slider__container');

    sliderContainer.style.display = 'none';
    addPreload(slider);

    window.addEventListener('load', () => {
        sliderContainer.style.display = '';
        removePreload(slider);

        startSlider();
    });
};

window.addEventListener('DOMContentLoaded', initSlider);
