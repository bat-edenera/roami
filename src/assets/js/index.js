import '../css/main.scss';
import Swiper from 'swiper/dist/js/swiper';
$(function(){
  var mySwiper = new Swiper('.swiper-container', {
    autoplay: true,//可选选项，自动滑动
    loop: true
  })
})