import {$, forEach, createElement, px} from './utils';

var d = document;

export default class Modals{
  constructor(){
    this.reload();
  }

  reload(){
    var bg = d.getElementById('modal-bg');
    if(bg === null){
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
  var opnedModal = $('.modal');
  forEach(opnedModal, modal => modal.style.display = 'none');
  d.getElementById('modal-bg').style.display = 'none';
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
    d.getElementById('modal-bg').style.display = 'block';
    d.body.appendChild(target);
    target.style.display = 'block';
    target.style.top = px(document.body.scrollTop);
    target.style.left = px((window.innerWidth - target.offsetWidth) / 2);
  }
}