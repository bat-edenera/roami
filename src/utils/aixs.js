//坐标轴
// import * as Area from '../base/area';
// import * as Bar from '../base/bar'
const Aixs = {
  areaXAxis(Base){
    let svg = `<line x1="0" y1="0" x2="${Base.chart_width}" y2="0" style="stroke:${Base.color};stroke-width:2"/>`;
    svg += '<g class="xPix_title">';
  
    Base.mainK.forEach((val,i) => {
      svg += `
      <g class="cord" transform="translate(${Base.gapX*i},0)">
        <line style="stroke:#000;" x1="0" x2="0" y1="5" y2="15"/>
        <text text-rendering="geometricPrecision" font-family="Microsoft YaHei" dy="40" style="text-anchor:middle;font-size:14px">${val}</text>
      </g>`
    })
    svg += '</g>';
    return svg;
  },
  barXAxis(Base){
    let svg = `<line x1="0" y1="0" x2="${Base.chart_width}" y2="0" style="stroke:${Base.color};stroke-width:2"/>`;
    svg += '<g class="xPix_title">';
  
    Base.mainK.forEach((val,i) => {
      svg += `
      <g class="cord" transform="translate(${Base.gapBarX*i},0)">
        <line style="stroke:#000;" x1="0" x2="0" y1="5" y2="15"/>
        <text text-rendering="geometricPrecision" font-family="Microsoft YaHei" x="${Base.gapBarX/2}" dy="30" style="text-anchor:middle;font-size:14px">${val}</text>
      </g>`
    })
    svg += `
    <g class="cord" transform="translate(${Base.gapBarX * Base.stepX},0)">
      <line style="stroke:#000;" x1="0" x2="0" y1="5" y2="15"/>
    </g>`;
    svg += '</g>';
    return svg;
  },
  yAxis(Base){
    let svg = `<line x1="0" y1="-10" y2="${Base.chart_height}" x2="0" style="stroke:${Base.color};stroke-width:2"/>`;
    svg += '<g class="yPix_title">';
    Base.gapY.forEach((val,i)=> {
      i = Base.stepY-i;
      svg += `
      <g class="cord" transform="translate(0,${Base.chart_height*i/Base.stepY})">
        <line x1="0" y1="0" x2="${Base.chart_width}" y2="0" style="stroke:${Base.color};stroke-width:1" stroke-dasharray="4,4"/>
        <text text-rendering="geometricPrecision" font-family="Microsoft YaHei" x="-25" dy="${.4*16}" style="text-anchor:end;font-size:14px" >${val}</text>
      </g>`
    })
    svg += '</g>';
    return svg;
  },
}
export default Aixs;