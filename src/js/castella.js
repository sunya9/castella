import globalNav from './global-nav';
import dropdowns from './dropdowns';
import tabs from './tabs';
import modals from './modals';

class Castella{
  constructor(){
    var components = {
      globalNav,
      dropdowns,
      tabs,
      modals,
    };
    this.components = {};
    Object.keys(components).forEach((name) => {
      this[name] = new components[name]();
    });
  }
  setPreviousCastella(castella){
    this.previousCastella = castella;
  }
  noConflict(){
    window.Castella = this.previousCastella;
    return this;
  }
  static get version(){
    return '1.0.0';
  }
}

document.addEventListener('DOMContentLoaded', ready);

function ready(){
  var app = new Castella();
  if(typeof window.Castella !== null){
    app.setPreviousCastella(window.Castella);
  }
  window.Castella = app;
}