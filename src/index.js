import $ from 'jquery';

//base
import * as Area from './base/area';
import * as Bar from './base/bar';
import * as GroupBar from './base/groupBar';
import * as Pie from './base/pie';
import * as MultiPie from './base/multiPie';
//utils
import Aixs from './utils/aixs';
import Chart from './utils/core';
import Info from './utils/info';

let type = [];
type.push(Area.type);
type.push(Bar.type);
type.push(Pie.type);
type.push(MultiPie.type);
type.push(GroupBar.type);
//html
let _base = '';
type.forEach(t => {
	switch(t){
		case 'area':
		{
			let base = Area;
			_base += 
			`<svg width="800" height="600" viewbox="0 0 ${base.width} ${base.height}" preserveAspectRatio="none" version="1.1" xmlns="http://www.w3.org/2000/svg" style="user-select:none; background:#ececec">
			<defs><filter id="ff" width="1000%" height="1000%"><feGaussianBlur in="SourceAlpha" stdDeviation="4"></feGaussianBlur> <feOffset dx="1" dy="1" result="offsetblur"></feOffset><feComponentTransfer><feFuncA type="linear" slope="0.3"></feFuncA></feComponentTransfer><feMerge><feMergeNode></feMergeNode><feMergeNode in="SourceGraphic"></feMergeNode></feMerge></filter></defs>
				<g transform="translate(${base.padding[0]},${base.padding[1]})">
			`;
			
			_base += `<g class="xPix" transform="translate(0,${base.chart_height})">`;
			_base += Aixs.areaXAxis(Area);
			_base += '</g>'
			_base += `<g class="yPix">`;
			_base += Aixs.yAxis(Area);
			_base += '</g>'
			_base += Chart.drawArea(Area);
			_base += Info.drawAixs(Area);

			_base += '</g></svg>';
			break;
		}
		case 'bar':
		{
			let base = Bar;
			_base += 
			`<svg width="800" height="600" transform="translate(20,0)" viewbox="0 0 ${base.width} ${base.height}" preserveAspectRatio="none" version="1.1" xmlns="http://www.w3.org/2000/svg" style="user-select:none; background:#ececec">
			<defs><filter id="ff" width="1000%" height="1000%"><feGaussianBlur in="SourceAlpha" stdDeviation="4"></feGaussianBlur> <feOffset dx="1" dy="1" result="offsetblur"></feOffset><feComponentTransfer><feFuncA type="linear" slope="0.3"></feFuncA></feComponentTransfer><feMerge><feMergeNode></feMergeNode><feMergeNode in="SourceGraphic"></feMergeNode></feMerge></filter></defs>
				<g transform="translate(${base.padding[0]},${base.padding[1]})">
			`;
			_base += `<g class="xPix" transform="translate(0,${base.chart_height})">`;
			_base += Aixs.barXAxis(Bar);
			_base += '</g>'
			_base += `<g class="yPix">`;
			_base += Aixs.yAxis(Bar);
			_base += '</g>';
			_base += Chart.drawBar(Bar);
			_base += Info.drawAixs(Bar);

			_base += '</g></svg>';
			break;
		}
		case 'pie':
		{
			let base = Pie;
			_base += `<svg width="800" height="600" transform="translate(0,20)" viewbox="0 0 ${base.width} ${base.height}" preserveAspectRatio="none" version="1.1" xmlns="http://www.w3.org/2000/svg" style="user-select:none; background:#ececec">
				<g transform="translate(${base.padding[0]},${base.padding[1]})">
			`;
			_base += Chart.drawPie(Pie);
			_base += Info.drawPie(Pie);

			_base += '</g></svg>';
			break;
		}
		case 'multiPie':
		{
			let base = MultiPie;
			_base += `<svg width="800" height="600" transform="translate(20,20)" viewbox="0 0 ${base.width} ${base.height}" preserveAspectRatio="none" version="1.1" xmlns="http://www.w3.org/2000/svg" style="user-select:none; background:#ececec">
				<g transform="translate(${base.padding[0]},${base.padding[1]})">
			`;
			_base += Chart.drawMultiPie(MultiPie);
			_base += Info.drawPie(MultiPie);

			_base += '</g></svg>';
			break;
		}
		case 'groupBar':
		{
			let base = GroupBar;
			_base += 
			`<svg width="800" height="600" transform="translate(0,40)" viewbox="0 0 ${base.width} ${base.height}" preserveAspectRatio="none" version="1.1" xmlns="http://www.w3.org/2000/svg" style="user-select:none; background:#ececec">
			<defs><filter id="ff" width="1000%" height="1000%"><feGaussianBlur in="SourceAlpha" stdDeviation="4"></feGaussianBlur> <feOffset dx="1" dy="1" result="offsetblur"></feOffset><feComponentTransfer><feFuncA type="linear" slope="0.3"></feFuncA></feComponentTransfer><feMerge><feMergeNode></feMergeNode><feMergeNode in="SourceGraphic"></feMergeNode></feMerge></filter></defs>
				<g transform="translate(${base.padding[0]},${base.padding[1]})">
			`;
			_base += `<g class="xPix" transform="translate(0,${base.chart_height})">`;
			_base += Aixs.barXAxis(GroupBar);
			_base += '</g>'
			_base += `<g class="yPix">`;
			_base += Aixs.yAxis(GroupBar);
			_base += '</g>';
			_base += Chart.drawGroupBar(GroupBar);
			_base += Info.drawAixs(GroupBar);

			_base += '</g></svg>';
			break;
		}
	}
})


$('body').append(_base); 





