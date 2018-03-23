var html = require('../../view/index.html');
import '../css/swiper.css';
import $ from 'jquery';
import Swiper from 'swiper';
import SomeVideo from '-!file-loader!../video/a.mp4';
$(function(){
  $('.j-video').find('video').on('loadeddata',function(){
    // var canvas = document.createElement("canvas");
    // canvas.width = $(this).width();
    // canvas.height = $(this).height();
    // canvas.getContext('2d').drawImage(this, 0, 0, canvas.width, canvas.height)

    // var src = canvas.toDataURL("image/png");
    // $('.j-video').find('.poster').css({
    //   background: 'url(' + src+') no-repeat 50% 50%/contain'
    // })
    var time = this.duration;
    $('.j-video').find('.play i').html(parseInt(time/60)+':'+parseInt(time%60));
  })

  $('.j-video .play').on('click',function(){
    if ($('.j-video').is('.playing')){
      $('.j-video').removeClass('playing');
      $('.j-video').find('video')[0].pause();
    }else{
      $('.j-video').addClass('playing');
      $('.j-video').find('video')[0].play();
    }
  })

  var minSwiper = new Swiper('.j-mainSwiper', {
    // effect:'cube',
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });

})


