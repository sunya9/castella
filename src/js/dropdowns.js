import {forEach} from './utils';

var d = document;

export default class Dropdowns{
  constructor(){
    this.reload();
  }

  reload(){
    var dropdownLinks = d.querySelectorAll('[data-dropdown]');
    forEach(dropdownLinks, link => link.addEventListener('click', toggle));
    d.body.addEventListener('click', outside);
  }
}

function outside(){
  var dropdowns = d.querySelectorAll('.dropdown');
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
    target.style.minWidth = isFull ? (this.offsetWidth - 1  - offset) + 'px' : 'auto';
    target.style.top = (this.offsetTop + this.offsetHeight - 1) + 'px';
    target.style.left = (this.offsetLeft + this.offsetWidth - target.offsetWidth) + 'px';
    }
  return false;
}