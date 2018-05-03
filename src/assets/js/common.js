import '../css/main.scss';
import $ from 'jquery';
$(function(){
  //折叠导航栏
  $('.j-nav>li').on('click',function(){
    if($(this).is('.open')){
      $(this).removeClass('open');
    }else{
      $(this).addClass('open');
    }
  })
  //
  $('.j-username').on('click',function(e){
    e.stopPropagation();
    $('.j-dropdown').show();
  })
  $('body').on('click',function(){
    $('.j-dropdown').hide();
  })
})