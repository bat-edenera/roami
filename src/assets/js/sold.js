import $ from 'jquery';
import { Kami } from './modal/modal';
import Clipboard from 'clipboard';
new Clipboard('.j-btn');
var modal = {
  kami: new Kami().open
}
$(function () {
  $('.j-kami').on('click',  modal.kami)
})