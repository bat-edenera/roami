import $ from 'jquery';
$(function(){
  $('input.chooseType').on('change',function(){
    var v = this.value;
    if(v=='txt'){
      $('.j-way.way1').show();
      $('.j-way.way2').hide();
    }else{
      $('.j-way.way2').show();
      $('.j-way.way1').hide();
    }
  })

  $('.j-save').on('click',function(e){
    e.preventDefault();
    $('form').hide();
    $('.j-success').show();
    $('.j-fail').show();
  })
})