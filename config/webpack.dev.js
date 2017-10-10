const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');


module.exports = merge(common, {
	entry:{
		index: ['./src/index', 'webpack-hot-middleware/client?reload=true']
	},
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
