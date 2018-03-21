//chart info
// import * as Base from './base2';
// import * as Pie from './base1'
const Info = {
  drawAixs:function(Base){
    let svg = `<g class="info" transform="translate(${-Base.padding[0]},${Base.chart_height + 80})">`;
    let width = 0;
    Base.data.forEach(data => {
      width += data.name.length*10 + 50;
    })
    let space = (Base.width - width)/2;
    let w = 0;
    Base.data.forEach(data => {
      svg += `<g transform="translate(${space + w})">
        <rect x="0" y="0" width="15" height="15" rx="7.5" fill="${data.color}"/>
        <text text-rendering="geometricPrecision" font-family="Microsoft YaHei" x="25" y="0" dy="${.6*16}" style="font-size:14px;dominant-baseline: middle;">${data.name}</text>
      </g>`;
      w += data.name.length*14 + 50;
    })
    svg += '</g>';
    return svg;
  },
  drawPie:function(Base){
    let svg = `<g class="info" transform="translate(${-Base.padding[0]},${Base.chart_height + 80})">`;
    let width = 0;
    Base.data.forEach(data => {
      width += data.name.length*10 + 50;
    })
    let space = (Base.width - width)/2;
    let w = 0;
    Base.data.forEach(data => {
      svg += `<g transform="translate(${space + w})">
        <rect x="0" y="0" width="15" height="15" fill="${data.color}"/>
        <text text-rendering="geometricPrecision" font-family="Microsoft YaHei" x="25" y="0" dy="${.6*16}" style="font-size:14px;dominant-baseline: middle;">${data.name}</text>
      </g>`;
      w += data.name.length*14 + 50;
    })
    svg += '</g>';
    return svg;
  }
}
export default Info;