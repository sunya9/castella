export function forEach(arrayLike, iteratee){
  return Array.prototype.forEach.call(arrayLike, iteratee);
}

export function $(selector){
  return document.querySelectorAll(selector);
}

export function px(value){
  return value + 'px';
}