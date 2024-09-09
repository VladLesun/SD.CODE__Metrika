// ! константы
const BURGER_OPENED_CLASS_NAME = 'burger_open',
	BURGER_BTN_OPENED_CLASS_NAME = 'burger-btn_open',
	BURGER_CONTENT_OPENED_CLASS_NAME = 'burger__content_open',
	BODY_OPENED_CLASS_NAME_2 = 'body_fixed';

const bodyNode2 = document.querySelector('body'),
	burgerBtnNode = document.querySelector('.js-burger-btn'),
	burgerNode = document.querySelector('.js-burger'),
	burgerContentNode = document.querySelector('.js-burger__content'),
	burgerActionLinks = document.querySelectorAll('.burger__link');

// ! работа с burger
const burgerToggle = () => {
	bodyNode2.classList.toggle(BODY_OPENED_CLASS_NAME_2);
	burgerBtnNode.classList.toggle(BURGER_BTN_OPENED_CLASS_NAME);
	burgerNode.classList.toggle(BURGER_OPENED_CLASS_NAME);
	burgerContentNode.classList.toggle(BURGER_CONTENT_OPENED_CLASS_NAME);
};

burgerBtnNode.addEventListener('click', burgerToggle);
