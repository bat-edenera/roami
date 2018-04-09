import '../css/main.scss';
// import swiper from 'swiper';
$(function(){
  $('.j-tab').on('click','li',function(){
    if($(this).is('.active')){
      return;
    }
    var i = $(this).index();
    $(this).siblings().removeClass('active').end().addClass('active');

    $('.j-list li').removeClass('active').eq(i).addClass('active');
    
  })
})