import '../css/main.scss';
import Swiper from 'swiper/dist/js/swiper';
$(function () {
 new Swiper('.swiper-container', {
    // autoplay: true,//可选选项，自动滑动
    loop: true,
    effect: 'fade',
    fadeEffect: true,
    speed: 1000,
    // height:500,
    pagination: {
      el: '.swiper-pagination',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  })
})