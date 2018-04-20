var html = require('../../view/index.html');
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

var productSwiper = new Swiper('.j-productSwiper', {
  loop: true,
  slidesPerView: 4,
  spaceBetween: 10,
  navigation: {
    nextEl: '.inner .next',
    prevEl: '.inner .prev',
  },
})
// <!-- 成功案例 -->
$('.j-taber').on('click', '.tab .t1', function (e) {
  var i = $(this).siblings().removeClass('active').end()
    .addClass('active').index();
  $('.j-taber').find('.list ul').removeClass('active')
    .eq(i - 1).addClass('active');
})
// <!-- 四大优势 -->
$('.j-formTab').on('click', '.tab li', function (e) {
  var i = $(this).siblings().removeClass('active').end()
    .addClass('active').index();

  $('.j-formTab').find('.info form').removeClass('active')
    .eq(i).addClass('active');
})

$('.j-toTop').on('click', function () {
  console.log('top')
  $("body,html").animate({
    scrollTop: 0
  }, 600);
})