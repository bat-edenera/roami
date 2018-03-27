import $ from 'jquery';
$(function(){
  var img = new Image();
  $('.j-eye').on('click','img',function(){
    $(this).addClass('hidden').siblings().removeClass('hidden');
    if($(this).index()==0){
      $(this).parent().siblings('input').prop('type','text');
    }else{
      $(this).parent().siblings('input').prop('type','password');
    }
  })
})