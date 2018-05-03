import $ from 'jquery';
import { Infomation } from './modal/modal';
var modal = {
  info : new Infomation().open
}
$(function(){
  $('tbody tr').on('click', modal.info)
})