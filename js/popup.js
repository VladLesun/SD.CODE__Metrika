// ! константы
const POPUP_OPENED_CLASS_NAME = 'popup_open',
	BODY_OPENED_CLASS_NAME = 'body_fixed';

const bodyNode = document.querySelector('body'),
	popupNode = document.querySelector('.js-popup'),
	popupContentNode = document.querySelector('.js-popup__content'),
	popupSubmit = document.querySelector('.js-popup__submit'),
	openBtnNode = document.querySelector('.services__btn'),
	closeBtnNode = document.querySelector('.js-popup__close');

// ! работа с popup
const popupToggle = () => {
	popupNode.classList.toggle(POPUP_OPENED_CLASS_NAME);
	bodyNode.classList.toggle(BODY_OPENED_CLASS_NAME);
};

openBtnNode.addEventListener('click', popupToggle);
closeBtnNode.addEventListener('click', popupToggle);
popupNode.addEventListener('click', event => {
	const isClickOutsideContent = !event
		.composedPath()
		.includes(popupContentNode);

	if (isClickOutsideContent) popupToggle();
});

popupSubmit.addEventListener('submit', event => {
	event.preventDefault();
});
