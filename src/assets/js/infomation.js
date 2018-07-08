import $ from 'jquery';
import { Infomation, NewInfo } from './modal/modal';
var modal = {
  info : new Infomation().open,
  newInfo: new NewInfo().open
}
$(function(){
  $('tbody tr').on('click', modal.info);
  $('.j-newInfo').on('click',modal.newInfo);
})