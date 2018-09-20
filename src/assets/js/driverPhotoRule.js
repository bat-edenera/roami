import '../css/main.scss';
$('.top span').on('click',function(){
  if(!$(this).is('.active')){
    $('.top span').removeClass('active');
    $(this).addClass('active');
    let i = $(this).index();

    $('.content').removeClass('active');
    $('.content').eq(i).addClass('active');
  }
})