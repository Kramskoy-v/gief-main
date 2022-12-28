import {cutString} from "../_functions";

//обрезка длинных строк на главной странице в слайдере новостей

const trimNewsStrings = document.querySelectorAll('.news-swiper__description[data-shear]');
cutString(trimNewsStrings);

//обрезка длинных строк на главной странице в блоке объявлений


const trimAdsListStrings = document.querySelectorAll('.ads__aside-list [data-shear]');
cutString(trimAdsListStrings);
