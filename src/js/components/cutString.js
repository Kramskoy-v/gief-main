import { cutString } from "../_functions";

//обрезка длинных строк на главной странице в слайдере новостей

const trimNewObjStrings = document.querySelectorAll('.news-swiper__description[data-shear]');
cutString(trimNewObjStrings);
