import $ from 'jquery';
import { Link } from './modal/modal';
import Clipboard from 'clipboard';

var modal = {
  link: new Link().open
}
$(function () {
  $('.j-cateLink').on('click',modal.link)
  new Clipboard('.j-btn');
})