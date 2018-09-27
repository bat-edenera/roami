const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');
const path = require('path');

for(var key in common.entry){
	common.entry[key] = [common.entry[key],'webpack-hot-middleware/client?reload=true']
}
module.exports = merge(common, {
	devtool: 'inline-source-map',
	output: {
		filename: 'js/[name][hash:4].js',
		path: path.resolve(__dirname, '../dist'),
		// publicPath: '/static/'
	},
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
			{
				test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
				loader: 'url-loader',
				options: {
					limit: 512,
					name: "images/[name][hash:4].[ext]"
				}
			},
		]
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin()
	]
});
