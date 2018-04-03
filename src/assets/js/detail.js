import '../css/main.scss';

$('.j-preview').on('click','li',function(){
  $('.j-preview li').removeClass('active');
  $(this).addClass('active');
  $('.j-preview .img img')[0].src = $(this).find('img')[0].src;
})