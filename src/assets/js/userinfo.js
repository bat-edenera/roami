import $ from 'jquery';
$(function () {
  $('.j-toEdit').on('click', function(){
    $('.j-base').hide();
    $('.j-edit').show();
  });
})