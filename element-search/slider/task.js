const sliders = Array.from(document.getElementsByClassName('slider__item'));

const arrowPrev = document.getElementsByClassName('slider__arrow_prev')[0];

const arrowNext = document.getElementsByClassName('slider__arrow_next')[0];



arrowPrev.onclick = () => {
	const activeSlider = sliders.findIndex(currentSlide => currentSlide.classList.contains('slider__item_active'));
	sliders[activeSlider].classList.remove('slider__item_active');
	const nextSlider = activeSlider > 0 ? activeSlider - 1 : sliders.length - 1;
	sliders[nextSlider].classList.add('slider__item_active');
}

arrowNext.onclick = () => {
	const activeSlider = sliders.findIndex(currentSlide => currentSlide.classList.contains('slider__item_active'));
	sliders[activeSlider].classList.remove('slider__item_active');
	const nextSlider = activeSlider < sliders.length - 1 ? activeSlider + 1 : 0;
	sliders[nextSlider].classList.add('slider__item_active');
}