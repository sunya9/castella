import {$, forEach} from './utils';

export default class Files{
  constructor(){
    this.reload();
  }

  reload(){
    var richFileButton = $('.rich-file-button');
    forEach(richFileButton, button =>{
      var file = button.querySelector('input[type="file"]');
      file.addEventListener('change', change);
    });
  }
}

function change(e){
  var files = e.target.files;
  var name = files.length > 0 ? files[0].name : '';
  if(files.length > 1) name += ', …';
  this.parentNode.setAttribute('data-path', name);
}