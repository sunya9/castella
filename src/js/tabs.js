import {$, forEach} from './utils';

export default class Tabs{
  constructor(){
    this.reload();
  }

  reload(){
    var anchors = $('.tabs > li > a[href^="#"]:not([data-dropdown])');
    forEach(anchors, a =>{
      a.addEventListener('click', change);
    });
  }
}

function change(event){
  event.preventDefault();
  this.blur();
  if(this.parentNode.getAttribute('data-disabled') !== null) return;
  var target = this.hash.substring(1);
  var lists = this.parentNode.parentNode.children;
  forEach(lists, list =>{
    list.removeAttribute('data-active');
  });
  var targetEle = document.getElementById(target);
  if(!targetEle) return;
  var tabContents = targetEle.parentNode.children;
  forEach(tabContents, tabContent => {
    tabContent.style.display = 'none';
  });
  targetEle.style.display = 'block';
  this.parentNode.setAttribute('data-active', '');
}