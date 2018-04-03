import '../css/main.scss';
import Swiper from 'swiper';
import '../css/swiper.css';

var indexSwiper = new Swiper('.j-mainSwiper', {
  loop:true,
  slidesPerView: 5,
  spaceBetween: 10,
  pagination: {
    el: '.j-mainSwiper .swiper-pagination',
    clickable: true,
  },
})