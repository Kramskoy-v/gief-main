import { Swiper } from "swiper/bundle";

const swiperCaption = new Swiper('.caption-swiper', {
  navigation: {
    nextEl: '.caption-swiper__swiper-button-next',
    prevEl: '.caption-swiper__swiper-button-prev'
  },

  slidesPerView: 1,
  spaceBetween: 50,
});


const swiperNews = new Swiper('.news-swiper', {
  navigation: {
    nextEl: '.news-swiper__swiper-button-next',
    prevEl: '.news-swiper__swiper-button-prev'
  },

  noSwiping: true,
  noSwipingClass: 'swiper-no-swiping',

  slidesPerView: 1,
  spaceBetween: 20,
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 15
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 20
    },
    1280: {
      spaceBetween: 40,
      slidesPerView: 4,
    },
  }
});


const swiperFaculty = new Swiper('.faculty-swiper', {
  navigation: {
    nextEl: '.faculty-swiper__swiper-button-next',
    prevEl: '.faculty-swiper__swiper-button-prev'
  },

  noSwiping: true,
  noSwipingClass: 'swiper-no-swiping',

  slidesPerView: 1,
  spaceBetween: 20,
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 15
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 20
    },
    1280: {
      spaceBetween: 25,
      slidesPerView: 4,
    },
  }
});


const swiperSponsors = new Swiper('.sponsors-swiper', {
  navigation: {
    nextEl: '.sponsors-swiper__swiper-button-next',
    prevEl: '.sponsors-swiper__swiper-button-prev'
  },

  slidesPerView: 1,
  spaceBetween: 30,
  breakpoints: {

    600: {
      slidesPerView: 32,

    },

    768: {
      slidesPerView: 3,

    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 45
    },

  }
});

