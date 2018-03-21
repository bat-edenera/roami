var chart = {
	props:{
		width:800,
		height:600,
		type:'chart'
	},
	options:{
		type:'groupBar', 
		data:[{
			name:'预算分配',
			color:'#37bef0',
			values: [180,400,1000,2100,1600],
		},{
			name:'实际开销',
			color:'#f3b800',
			values: [399,540,980,1900,1400],
		}],
		mainK:['鼠标','键盘','显示器','CPU','显卡'],
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


