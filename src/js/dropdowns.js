import {$, forEach, px} from './utils';

var d = document;

export default class Dropdowns{
  constructor(){
    this.reload();
  }

  reload(){
    var dropdownLinks = $('[data-dropdown]');
    forEach(dropdownLinks, link => link.addEventListener('click', toggle));
    d.body.addEventListener('click', outside);
  }
}

function outside(){
  var dropdowns = $('.dropdown');
  forEach(dropdowns, dropdown => dropdown.style.display = 'none');
}

function toggle(e){
  e.stopPropagation();
  e.preventDefault();
  this.blur();
  var id = this.getAttribute('data-dropdown');
  var target = d.getElementById(id);
  var isFull = this.getAttribute('data-dropdown-full') !== null;
  var offset = this.parentNode.previousElementSibling === null ? 1 : 0;
  if(target){
    target.style.display = target.style.display === 'inline-block' ? 'none' : 'inline-block';
    target.style.minWidth = isFull ? px(this.offsetWidth - 1  - offset) : 'auto';
    target.style.top = px(this.offsetTop + this.offsetHeight - 1);
    target.style.left = px(this.offsetLeft + this.offsetWidth - target.offsetWidth);
    }
  return false;
}