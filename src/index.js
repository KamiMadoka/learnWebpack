// + import _ from 'lodash';
const _ = require('lodash');
import './style.css';
import Icon from './icon.svg';
import Data from './data.xml';

function component() {
    var element = document.createElement('div');
  
    // Lodash, now imported by this script
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');
  
    const myIcon = new Image()
    myIcon.src = Icon;
    element.appendChild(myIcon);

    console.log(Data)
    return element;
  }
  
  document.body.appendChild(component());