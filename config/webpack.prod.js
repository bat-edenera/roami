const webpack = require('webpack');
const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const common = require('./webpack.common.js');
module.exports = merge(common, {
	devtool: "cheap-module-source-map",
	module:{
		rules:[
			{
				test: /\.css$/,
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					//resolve-url-loader may be chained before sass-loader if necessary
					use: ['css-loader']
				})
			},
			{
				test: /\.scss$/,
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					//resolve-url-loader may be chained before sass-loader if necessary
					use: ['css-loader', 'sass-loader']
				})
			},
		]
	},
	plugins: [
		new UglifyJSPlugin(),
		new webpack.DefinePlugin({
			'process.env':{
				'NODE_ENV': JSON.stringify('production')
			}
		}),
		new ExtractTextPlugin({
			filename: 'css/main[hash:4].css',
			allChunks: true
		})

	]
});
