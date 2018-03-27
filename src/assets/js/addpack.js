import $ from 'jquery';
$(function(){
  //初始化
  var a = $('.j-select li').length -1;
  var h ;
  var active = +$('.j-select li.active').index();
  var i;
  var move = -h*active;
  //打开模态
  $('.j-selector').on('click',function(){
    $('.modal').show();
    h = +$('.j-select li:not(".active")').eq(0).height();
    active = +$('.j-select li.active').index();
    move = -h*active;
    movement(move);
  })

  //滑动事件
  var x;
  $('.j-select').on('touchstart',function(e){
    x = e.touches[0].clientY;
  })
  $('.j-select').on('touchmove',function(e){
    e.preventDefault();
    move += e.touches[0].clientY - x;
    x = e.touches[0].clientY;
    movement(move);
  })
  $('.j-select').on('touchend',function(){
    i = -move/h;
    i = Math.round(i);
    i<1&&(i=0);
    i>a&&(i=a);
    $('.j-select li').removeClass('active');
    $('.j-select li').eq(i).addClass('active');
    move = -h*i;
    movement(move);
  })
  //取消
  $('.j-cancle').on('click',function(){
    $('.modal').hide();
  })
  //确认
  $('.j-sure').on('click',function(){
    $('.modal').hide();
  })
})
var movement = function(x){
  $('.j-select ul').css('transform','translateY('+x+'px)');
}