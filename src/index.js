import common from './common.js';

if(process.env.NODE_ENV!=='production'){
	console.log('start roami dev')
}

function component() {
	var element = document.createElement('p');
  var btn = document.createElement('button');

	element.innerHTML ='hello shit!  ..';
  btn.innerHTML = 'Click haha';
  btn.onclick = common;
  element.appendChild(btn);

	return element;
}

document.body.appendChild(component());
