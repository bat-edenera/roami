import '../css/main.scss';
import $ from 'jquery';

$(function(){
  $('.j-button').on('click',function(){
    $(this).toggleClass('open');
  })
})
