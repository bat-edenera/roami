import '../css/main.scss';
$(function(){
    $('.j-nav>li').on('click',function(){
      $('.j-nav>li').removeClass('active');
      $(this).addClass('active');
    })

  $('.j-button').on('click',function(e){
    e.stopPropagation();
    $(this).siblings().show();
  })
  $(document).on('click',function(){
    $('.j-button').siblings().hide();
  })
})