const webpack = require('webpack');
const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const common = require('./webpack.common.js');

const extractCSS = new ExtractTextPlugin('css/common[contenthash:4].css');
const extractSASS = new ExtractTextPlugin('css/main[contenthash:4].css');
module.exports = merge(common, {
	devtool: "cheap-module-source-map",
	module:{
		rules:[
			{
				test: /\.css$/,
				use: extractCSS.extract({
					fallback: 'style-loader',
					//resolve-url-loader may be chained before sass-loader if necessary
					use: ['css-loader']
				})
			},
			{
				test: /\.scss$/,
				use: extractSASS.extract({
					fallback: 'style-loader',
					//resolve-url-loader may be chained before sass-loader if necessary
					use: ['css-loader', 'sass-loader']
				})
			},
			{
				test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
				loader: 'url-loader',
				options: {
					limit: 512,
					name: "/images/[name][hash:4].[ext]"
				}
			}
		]
	},
	plugins: [
		new UglifyJSPlugin(),
		new webpack.DefinePlugin({
			'process.env':{
				'NODE_ENV': JSON.stringify('production')
			}
		}),
		extractCSS,
		extractSASS
	]
});
