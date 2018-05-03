import $ from 'jquery';
import { Annouce } from './modal/modal';
var modal = {
  annouce: new Annouce().open
}
$(function () {
  $('.j-annouceBox').on('click','li',modal.annouce)
})