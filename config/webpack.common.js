const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
var pages = ['index','other'];
var confs = {
	entry: {
		main: path.resolve(__dirname, '../src/common.js')
	},
	output: {
		filename: 'js/[name][hash:4].js',
		path: path.resolve(__dirname, '../dist'),
		publicPath: '/'
	},
	module:{
		rules:[
			{
				test:/.js$/,
				use:{
					loader:"babel-loader",
				},
				exclude:/node_modules/
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
		new CleanWebpackPlugin('dist',{
			root:path.resolve(__dirname, '../'),
		})
	]
}
pages.forEach(key=>{
	confs.entry[key] = path.resolve(__dirname, '../src/'+key+'.js');
	confs.plugins.push(new HtmlWebpackPlugin({
		filename:path.resolve(__dirname,'../dist/'+key+'.html'),
		template: key+'.html',
		inject: true,
		chunks: ['main',key],
		minify: {
			removeComments: true,
			collapseWhitespace: false,
			removeAttributeQuotes: true
		},
	}))
})
module.exports = confs;
