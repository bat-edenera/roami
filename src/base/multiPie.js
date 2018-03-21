var chart = {
	props:{
		width:800,
		height:600,
		type:'chart'
	},
	options:{
		type:'multiPie',
		data:[{
			name:'A',
			color:'#038cc4',
			values: 10
		},{
			name:'B',
			color:'#1bb2d8',
			values: 50
		},{
			name:'C',
			color:'#038cc4',
			values: 62
		},{
			name:'D',
			color:'#1bb2d8',
			values: 32
		},{
			name:'E',
			color:'#038cc4',
			values: 34
		},{
			name:'F',
			color:'#1bb2d8',
			values: 42
		}]
	}
}

let bottom = 100;
//数据信息
export const {data,type} = chart.options;
//svg size
export const {width,height} = chart.props;
export const padding = [80,50];
//边颜色
// export const color = '#afafaf';
export const color = '#dcdddd';
//绘图区域尺寸
export const chart_width = width - padding[0]*2;
export const chart_height = height - padding[1]*2 - bottom;