// + import _ from 'lodash';
const _ = require('lodash');
import printMe from './print';

function component() {
    var element = document.createElement('div');
    var btn = document.createElement('button');
  
    // Lodash, now imported by this script
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    btn.innerHTML = 'Click me';
    btn.onclick = printMe;

    element.appendChild(btn);

    return element;
  }
  
  document.body.appendChild(component());