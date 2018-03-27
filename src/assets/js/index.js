import $ from 'jquery';
$('.j-more').on('click',function(){
  $('.j-cover').slideDown();
})
$('.j-cover').on('click',function(){
  $(this).slideUp();
})