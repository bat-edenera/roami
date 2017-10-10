const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');

for(var key in common.entry){
	common.entry[key] = [common.entry[key],'webpack-hot-middleware/client?reload=true']
}
module.exports = merge(common, {
	devtool: 'inline-source-map',
	module:{
		rules:[
			{
				test: /\.css$/,
				use: ['style-loader','css-loader']
			},
			{
				test: /\.scss$/,
				use: ['style-loader','css-loader','sass-loader']
			},
		]
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin()
	]
});
