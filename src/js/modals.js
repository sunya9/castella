import {$, forEach, createElement, px, removeClass, addClass} from './utils';

var d = document;

export default class Modals{
  constructor(){
    this.reload();
  }

  reload(){
    var bg = $('.modal-bg')[0];
    if(!bg){
      bg = createElement('div', 'modal-bg');
      bg.addEventListener('click', outside);
      document.body.appendChild(bg);
    }
    var modalTriggers = $('[data-modal]');
    forEach(modalTriggers, trigger => trigger.addEventListener('click', openModal));

    var modalClose = $('.modal-close');
    forEach(modalClose, close => close.addEventListener('click', closeModal));
  }
}

function closeModal(e){
  e.stopPropagation();
  e.preventDefault();
  var openedModal = $('.modal');
  forEach(openedModal, modal =>{
    removeClass(modal, 'slideIn');
  });
  var bg = $('.modal-bg')[0];
  removeClass(bg, 'fadeIn');
  return false;
}

function outside(e){
  closeModal(e);
}

function openModal(e){
  e.stopPropagation();
  e.preventDefault();
  this.blur();
  var target = d.getElementById(this.hash.substring(1));
  if(target){
    d.body.appendChild(target);
    addClass($('.modal-bg')[0], 'fadeIn');
    setTimeout(() =>{
      addClass($('.modal-bg')[0], '');
      addClass(target, 'slideIn');
    }, 0);
    target.style.top = px(document.body.scrollTop);
  }
}