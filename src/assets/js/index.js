import '../css/main.scss';
import Swiper from 'swiper';
$(function(){
  $('.j-list').addClass('active');
  $('.j-tab').on('click','li',function(){
    if($(this).is('.active')){
      return;
    }
    var i = $(this).index();
    $(this).siblings().removeClass('active').end().addClass('active');

    $('.j-list').removeClass('active').eq(i).addClass('active');
    if(i==1){
      $('.j-wanpi').addClass('active');
    }else{
      $('.j-wanpi').removeClass('active');
    }
    
  })

  var vedioSwiper = new Swiper('.j-vedioSwiper', {
    navigation: {
      nextEl: '.vedio-list .swiper-button-next',
      prevEl: '.vedio-list .swiper-button-prev',
    },
    loop: true,
    slidesPerView: 3,
    spaceBetween: 25,
  });
  var picSwiper = new Swiper('.j-picSwiper', {
    navigation: {
      nextEl: '.pic-list .swiper-button-next',
      prevEl: '.pic-list .swiper-button-prev',
    },
    loop: true,
    slidesPerView: 3,
    spaceBetween: 60,
  });
  $('.j-list').removeClass('active').eq(0).addClass('active');
})