import '../css/main.scss';
import $ from 'jquery';
//折叠导航栏
$('.j-nav>li').on('click',function(){
  if($(this).is('.open')){
    $(this).removeClass('open');
  }else{
    $(this).addClass('open');
  }
})