import '../css/main.scss';
import Swiper from 'swiper/dist/js/swiper';
$(function () {
 new Swiper('.swiper1', {
    // autoplay: true,//可选选项，自动滑动
    loop: true,
    effect: 'fade',
    fadeEffect: true,
    speed: 1000,
    pagination: {
      el: '.swiper-pagination',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  })

  new Swiper('.swiper2', {
    slidesPerView: 3,
    spaceBetween: 20,
    autoplay: true,//可选选项，自动滑动
    loop: true,
    speed: 1000,
    navigation: {
      nextEl: '.snext',
      prevEl: '.sprev',
    },
  })
  $('.to-top').click(function(){
    $('html,body').animate({scrollTop: '0px'}, 500);
  })
  $(window).on('scroll',checkScroll);
  checkScroll();
})
function checkScroll(){
  var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  if(scrollTop > 750) {
    $('.fixed-nav').add('.to-top').show()
  }else{
    $('.fixed-nav').add('.to-top').hide()
  }
}