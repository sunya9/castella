export function forEach(arrayLike, iteratee){
  return Array.prototype.forEach.call(arrayLike, iteratee);
}

export function $(selector){
  return document.querySelectorAll(selector);
}

export function px(value){
  return value + 'px';
}

export function createElement(type, className){
  var e = document.createElement(type);
  e.className = className;
  return e;
}

export function removeClass(element, className){
  if(!element) return;
  if(!className){
    element.className = '';
    return;
  }
  if(typeof className === 'string')
    className = className.split(' ');
   element.className = element.className.split(' ').filter(name => {
    return className.indexOf(name) == -1;
  }).join(' ');
}

export function addClass(element, className){
  if(!element || !className) return;
  if(typeof className === 'string')
    className = className.split(' ');
  element.className = element.className.split(' ').concat(className).join(' ');
}