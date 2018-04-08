import '../css/swiper.css';
import $ from 'jquery';
import Swiper from 'swiper';

var indexSwiper = new Swiper('.j-mainSwiper', {
  loop: true,
  pagination: {
    el: '.j-mainSwiper .swiper-pagination',
    clickable: true,
  },
})
var sub1 = new Swiper('.j-subSwiper1', {
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
})
var sub2 = new Swiper('.j-subSwiper2', {
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
})
var sub3 = new Swiper('.j-subSwiper3', {
  loop: true,
  spaceBetween :20,
  pagination: {
    el: '.j-subSwiper3 .swiper-pagination',
    clickable: true,
  },
})