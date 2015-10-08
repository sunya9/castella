import {$, forEach} from './utils';

export default class Files{
  constructor(){
    this.reload();
  }

  reload(){
    var files = $('.rich-file-button');
    forEach(files, fileWrapper =>{
      // file.addEventListener('click', openFileDialog);
      var file = fileWrapper.querySelector('input[type="file"]');
      console.log('file:', file);
      file.addEventListener('change', change);
    });
  }
}

function openFileDialog(){
  console.log('open');
  var file = this.querySelector('input[type="file"]');
  console.log('file:', file);
  file.addEventListener('onchange', change);
}

function change(e){
  var files = e.target.files;
  var name = files.length > 0 ? files[0].name : '';
  if(files.length > 1) name += ', …';
  this.parentNode.setAttribute('data-path', name);
}