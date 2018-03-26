var fs = require('fs');
var size = 640,
css_text = `html{
	font-family: 'Microsoft YaHei',Arial,'宋体',sans-serif;
	font-size:625%;
}\n`;

for (var i = size; i >= 320; i=i-5) {
	css_text += `@media (max-width:${i}px){
	html{
		font-size:${i*625/size}% !important;
	}
}\n`;
};

fs.writeFile('../src/assets/css/media.css',css_text,function(a,b){
  console.log(a,b)
})
