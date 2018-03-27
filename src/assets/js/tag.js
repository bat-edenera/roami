import $ from 'jquery';
$(function(){
  $('.j-list').on('click','li',function(){
    $(this).toggleClass('active');
    $(this).siblings().removeClass('active');
  })
})