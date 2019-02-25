import greeting from './greeting.js';

function component() {
  let element = document.createElement('div');

  element.innerHTML = greeting("webpack user");

  return element;
}

document.body.appendChild(component());