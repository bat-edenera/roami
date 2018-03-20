var html = require('../../view/index.html');
import '../css/swiper.css';
import $ from 'jquery';
import Swiper from 'swiper';

var indexSwiper = new Swiper('.j-mainSwiper', {
  loop:true,
  pagination: {
    el: '.j-mainSwiper .swiper-pagination',
    clickable: true,
  },
})

var productSwiper = new Swiper('.j-productSwiper', {
  loop: true,
  slidesPerView: 4,
  spaceBetween: 10,
  navigation: {
    nextEl: '.inner .next',
    prevEl: '.inner .prev',
  },
})
