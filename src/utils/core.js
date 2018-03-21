// import * as Base from './base2';
// import * as Pie from './base1';
var Color = require('color');
const Chart = {
  //area chart
  drawArea:function(Base){
    //所有点
    let pos =[];
    //draw line
    let svg = '<g class="main">';
    Base.data.forEach((data,i) => {
      svg += '<g class="line">'
      pos[i] = [];
      data.values.forEach((a,b)=>{
        let x = Base.gapX*b;
        let y = (Base.maxY - a)*Base.chart_height/Base.maxY;
        pos[i].push([x,y])
        //标关键点
        svg += `<circle cx="${x}" cy="${y}" r="4" fill="${data.color}"/>`;
        //显示数据
        let l = a.toString().length;
        l===1&&(l++);
        svg += `<g filter="url(#ff)"><rect x="${x - l*15/2}" y="${y - 10 - 13}" width="${l*14}" height="14"  rx="7" fill="#fff"/></g>`;
        svg += `<text font-family="Microsoft YaHei" text-rendering="geometricPrecision" x="${x}" y="${y - 10}" style="text-anchor:middle;font-size:14px">${a}</text>`;
      })
      //画线
      svg += `<polyline stroke="${data.color}" fill="none" stroke-width="2" points="`;
      pos[i].forEach(p=>{
        svg += `${p[0]},${p[1]} `;
      })
      svg += `"/></g>`;
    })
    svg += '</g>';
    //draw area
    let svgArea = '<g class="area">';
    
    Base.data.forEach((data,i) => {
      svgArea += `<polygon fill="${data.color}" opacity=".3" points="`;
      pos[i].forEach(p => {
        svgArea += `${p[0]},${p[1]} `;
      })
      svgArea += `${Base.chart_width},${Base.chart_height} 0,${Base.chart_height}"/>`
    })
    svgArea += '</g>';


    return svgArea + svg;
  },
  //pie chart
  drawPie:function(Pie){
    let r1 = 80,r2 = 150;
    let svg = '<g class="main">'
    svg += `<g class="pie" transform="translate(${Pie.chart_width/2},${Pie.chart_height/2})">`;
    // svg += `<circle cx="0" cy="0" r="170" fill="none" stroke="${Pie.color}"/>`;
    let sum = Pie.data.reduce((a,b)=>(a+b.values),0);
    let angle = 0; 
    Pie.data.forEach(data => {
      let ang = 2 * Math.PI * data.values/sum;
      //偏移
      let da = angle + ang/2;
      let dx = 5*Math.sin(da),
      dy = -5*Math.cos(da);
      svg += `<g transform="translate(${dx},${dy})">`;
      //路径计算
      let d = this._calcArcPath(angle,ang+angle,0,0,r1,r2);
      svg += `<path fill="${data.color}"  d="${d}"/>`
      //标注信息
      svg += this._calcInfoPath(r2,da,data.color,data.name,data.values,sum);
      svg += '</g>';
      
      angle += ang;
      
    })
    svg += '</g>';
    svg += '</g>';
    return svg;
  },
  //multiPie chart
  drawMultiPie:function(Pie){
    let svg ='<g class="main">';
    let sum = Pie.data.reduce((a,b)=>(a+b.values),0);
    Pie.data.forEach((data,i) => {
      let ang = 2 * Math.PI * data.values/sum;
      let row = ~~(i/3);
      let col = i%3;

      //pie 尺寸 => Pie.width>100
      let r = Pie.chart_width/10,
      d = Pie.chart_width/10;

      svg += `<g transform="translate(${d+r+col*(d+2*r)},${d+r+row*(d+2*r)})">`;
      svg += `<path d="${this._calcArcPath(0,Math.PI,0,0,r-20,r)}" fill="${Pie.color}"/>`;
      svg += `<path d="${this._calcArcPath(Math.PI,2*Math.PI,0,0,r-20,r)}" fill="${Pie.color}"/>`;
      svg += `<path stroke-width="0" d="${this._calcArcPath(0,ang,0,0,r-20,r)}" fill="${data.color}" />`;
      //标注信息
      svg += `<text font-family="Microsoft YaHei" text-rendering="geometricPrecision" x="0" y="0" dy="${-.75*14}" fill="${data.color}" stroke="none" style="font-size:14px;text-anchor:middle;dominant-baseline: middle;">${data.name}</text>`
      svg += `<text font-family="Microsoft YaHei" text-rendering="geometricPrecision" x="0" y="0" dy="${.75*14}" fill="${data.color}" stroke="none" style="font-size:14px;text-anchor:middle;dominant-baseline: middle;">${(data.values*100/sum).toFixed(1)}%</text>`
      svg += '</g>';
      
    })
    svg += '</g>';
    return svg;
  },
  //bar chart
  drawBar(Base){
    let svg = '<g class="main">';
    Base.data.forEach((data,i) => {
      //一组中数据的个数
      let length = Base.mainK.length;
      let space = 8;
      let bar_width = (Base.gapBarX - space * (length+3))/3;
      let darkColor = Color(data.color).darken(.1).rgb();
      data.values.forEach((a,b)=>{
        let bar_height = a*Base.chart_height/Base.maxY;
        let offsetX =Base.gapBarX * b + space + (space + bar_width)*(i + 1) - bar_width/2;
        let x = -bar_width/2;
        let y = -bar_height;

        svg += `<g class="bar" transform="translate(${offsetX},${Base.chart_height})">`;
        //bar
        svg +=  `<rect x="${x}" y="${y}" width="${bar_width}" height="${bar_height}" fill="${data.color}"/>`
        //ellipse
        svg += `<ellipse cx="0" cy="${y}" rx="${-x}" ry="4" fill="${darkColor}"/>`;
        //标注信息
        let l = a.toString().length;
        l===1&&(l++);
        svg += `<g filter="url(#ff)"><rect x="${- l*16/2}" y="${y - 25}" width="${l*16}" height="14"  rx="7" fill="#fff"/></g>`;
        svg += `<text font-family="Microsoft YaHei" text-rendering="geometricPrecision" dy="${y-16}" style="dominant-baseline: middle;text-anchor:middle;font-size:14px;" stroke="none" fill="${data.color}">${a}</text>`;
        svg += '</g>';
      })
    })
    svg += '</g>';
    return svg;
  },
  //groupBar chart
  drawGroupBar(Base){
    let svg = '<g class="main">';
    //关键点，用于线条类
    let pos = [];
    Base.data.forEach((data,i) => {
      let x = 15;
      let width = Base.gapBarX - x * 2;
      let darkColor = Color(data.color).darken(.2).rgb();
      data.values.forEach((a,b) => {
        let height = a * Base.chart_height / Base.maxY;
        if(i===0){
          svg +=`
          <g class="bar" transform="translate(${Base.gapBarX*(b + .5)},${Base.chart_height})">
            <rect fill="${data.color}" x="${-width/2}" y="${-height}" width="${width}" height="${height}"/>
            <ellipse cx="0" cy="${-height}" rx="${width/2}" ry="${width/(2*12)}" fill="${darkColor}"/>
            <text font-family="Microsoft YaHei" text-rendering="geometricPrecision" fill="#fff" style="dominant-baseline: middle;text-anchor:middle;" dy="${2-height/2}">${a}</text>
          </g>`;
        }else if(i===1){
          let x = Base.gapBarX*(b + .5);
          let y = (Base.maxY - a) * Base.chart_height / Base.maxY;
          pos.push([x,y]);
          svg += `<circle cx="${x}" cy="${y}" r="5" fill="${data.color}"/>`;
          //显示数据
          let l = a.toString().length;
          l===1&&(l++);
          svg += `<g filter="url(#ff)"><rect x="${x - l*15/2}" y="${y - 24}" width="${l*16}" height="16"  rx="7" fill="#fff"/></g>`;
          svg += `<text font-family="Microsoft YaHei" text-rendering="geometricPrecision" x="${x}" y="${y - 10}" fill="${data.color}" style="text-anchor:middle;font-size:14px">${a}</text>`;
        }
      })
      if(i===1){
        //画线
        svg += `<polyline stroke="${data.color}" fill="none" stroke-width="2" points="`;
        pos.forEach(p=>{
          svg += `${p[0]},${p[1]} `;
        })
        svg += `"/>`;
      }
    })
    svg += '</g>';
    return svg;
  },
  _calcArcPath(ang1,ang2,x,y,r1,r2){
    let pos = [];
    pos[0] = [r1*Math.sin(ang1),-r1*Math.cos(ang1)];
    pos[1] = [r1*Math.sin(ang2),-r1*Math.cos(ang2)];
    pos[2] = [r2*Math.sin(ang1),-r2*Math.cos(ang1)];
    pos[3] = [r2*Math.sin(ang2),-r2*Math.cos(ang2)];
    let flag = ang2 - ang1 > Math.PI ? 1 : 0;
    return `M${pos[1][0]},${pos[1][1]} A${r1},${r1},0,${flag},0,${pos[0][0]},${pos[0][1]} M${pos[0][0]},${pos[0][1]} L${pos[2][0]},${pos[2][1]} A${r2},${r2},0,${flag},1,${pos[3][0]},${pos[3][1]} L${pos[1][0]},${pos[1][1]}`;
  },
  _calcInfoPath(r,ang,color,name,val,sum){
    let pos = [];
    pos[0] = [r*Math.sin(ang),-r*Math.cos(ang)];
    pos[1] = [(r+15)*Math.sin(ang),-(r+15)*Math.cos(ang)];
    let svg = `<path fill="none" stroke="${color}" stroke-width="2" d="M${pos[0][0]},${pos[0][1]} L${pos[1][0]},${pos[1][1]} `;
    if(0<ang && ang< Math.PI){
      svg += `l20,0"/><text font-family="Microsoft YaHei" text-rendering="geometricPrecision" fill="${color}" style="dominant-baseline: middle;text-anchor: start;" x="${pos[1][0]}" y="${pos[1][1]}" dx="30">${name} ${val} (${(val*100/sum).toFixed(1)}%)</text>`
    }
    if(Math.PI<ang && ang< 2*Math.PI){
      svg += `l-20,0"/><text font-family="Microsoft YaHei" text-rendering="geometricPrecision" fill="${color}" style="dominant-baseline: middle;text-anchor: end;" x="${pos[1][0]}" y="${pos[1][1]}" dx="-30">${name} ${val} (${(val*100/sum).toFixed(1)}%)</text>`
    }
    return svg;
  }

};
export default Chart;