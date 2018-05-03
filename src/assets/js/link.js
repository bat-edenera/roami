import Clipboard from 'clipboard';
import $ from 'jquery';
new Clipboard('.btn');
$(function() {
  $('.j-closeLink').on('click',function(){
    $('.linked').hide();
    $('.unlink').show();
  })
})

