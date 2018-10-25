import '../css/main.scss';
import Swiper from 'swiper/dist/js/swiper';
$(function () {
  var thumbsSwiper = new Swiper('.swiper-thumb',{
    spaceBetween: 15,
    slidesPerView: 5,
    watchSlidesVisibility: true,//防止不可点击
  })
  new Swiper('.swiper-main',{
    spaceBetween: 10,
    thumbs: {
      swiper: thumbsSwiper,
    }
  })
  $('.j-cate').on('click','li',function() {
    $(this).siblings().removeClass('active').end()
    .addClass('active');
  })
//nums
  $('.j-nums').on('click',function(){
    var $input = $(this).siblings('input');
    var num = +$input.val();
    if($(this).is('.plus')){
      num++
    }else {
      num--
    }
    num == 0 && (num = 1)
    $input.val(num);
  })
  //nav
  $('.j-nav').on('click','li',function() {
    $(this).siblings().removeClass('active').end()
    .addClass('active');
    var i = $(this).index();
    console.log(i)
    $('.j-list>li').removeClass('active').eq(i).addClass('active');
  })
})