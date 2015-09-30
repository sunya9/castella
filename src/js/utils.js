export function forEach(arrayLike, iteratee){
  Array.prototype.forEach.call(arrayLike, iteratee);
}