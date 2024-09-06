// ! Константа активного класса
const ACTIVE_SLIDE_CLASS_NAME = 'gallery__slide_active';

// ! кнопки для слайдера
const nextBtn = document.querySelector('.gallery__controls-btn_next'),
	prevBtn = document.querySelector('.gallery__controls-btn_prev');

// ! слайдер
const slides = Array.from(document.querySelectorAll('.gallery__slide'));

let activeId;

const getPrevId = () => (activeId === 0 ? slides.length - 1 : activeId - 1);
const getNextId = () => (activeId === slides.length - 1 ? 0 : activeId + 1);

const setActiveSlideById = id => {
	const currentId = activeId;
	activeId = id;

	slides[currentId].classList.remove(ACTIVE_SLIDE_CLASS_NAME);
	slides[activeId].classList.add(ACTIVE_SLIDE_CLASS_NAME);
};

const init = () => {
	activeId = 0;

	prevBtn.addEventListener('click', () => {
		setActiveSlideById(getPrevId());
	});
	nextBtn.addEventListener('click', () => {
		setActiveSlideById(getNextId());
	});
};

init();
