var chart = {
	props:{
		width:800,
		height:600,
		type:'chart'
	},
	options:{
		type:'bar',
		data:[{
			name:'起亚悦享',
			type:0,
			color:'#00a2eb',
			values: [10,26,30,],
		},{
			name:'日产蓝鸟',
			type:0,
			color:'red',
			values: [20,10,15,],
		},{
			name:'丰田极光',
			type:0,
			color:'green',
			values: [42,28,12,],
		}],
		mainK:['2012','2013','2014',],
	}
};

let bottom = 100;

//数据信息
export const {mainK,data,type} = chart.options;
//svg size
export const {width,height} = chart.props;
export const padding = [80,50];
//坐标轴颜色
export const color = '#afafaf';
//绘图区域尺寸
export const chart_width = width - padding[0]*2;
export const chart_height = height - padding[1]*2 - bottom;
export const stepY = 6;
export const stepX = mainK.length;

let _val = [];
data.forEach(val => _val = _val.concat(val.values));
let _max = Math.max.apply(null,_val);
//maxY = _calc(_max+minY)
export const maxY = _calcY(_max);
export const minY = 0;

let gapY =[];
for(let i=0;i<=stepY;i++){
	let c = i*maxY/6;
	if(c.toString().indexOf('.')>0){
		gapY.push(c.toFixed(1))
	}else{
		gapY.push(c.toFixed(0))
	}
}
export {gapY};
export const gapX = chart_width/(stepX - 1);
export const gapBarX = chart_width/stepX;


function _calcY(max){
	let total = ~~(max);
	let divider = Math.pow(10,total.toString().length-1);
	return Math.ceil(total/divider)*divider;
}


