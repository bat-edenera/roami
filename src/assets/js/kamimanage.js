import $ from 'jquery';
import {Confirm,Export} from './modal/modal';
var modal = {
  confirm: new Confirm().open,
  export:new Export().open
}
$(function(){
  $('.j-delKami').on('click',function(e){
    e.preventDefault();
    modal.confirm({
      text:'确定要删除该商品所有未售卡密码？',
      sure:function(){
        console.log('del')
      }
    })
  })

  $('.j-exportKami').on('click', function (e) {
    e.preventDefault();
    modal.export({
      title: '导出WPP未售卡密',
      sure:function(){
        console.log('hehe')
      }
    })
  })
})