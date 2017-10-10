import printMe from './print.js';
import './assets/css/main.scss';

if(process.env.NODE_ENV!=='production'){
	console.log('start roami dev')
}

function component() {
	var element = document.createElement('p');
  var btn = document.createElement('button');

	element.innerHTML ='hello kick';
  btn.innerHTML = 'Click haha';
  btn.onclick = printMe;
  element.appendChild(btn);

	return element;
}

document.body.appendChild(component());
