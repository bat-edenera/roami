const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
var pages = ['index','addgood','addpack','login','tag','list'];
var confs = {
	entry: {
		main: path.resolve(__dirname, '../src/assets/js/common.js')
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
				test: /\.(htm|html)$/i,
        loader: 'html-withimg-loader'
			},
			{
				test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
				loader: 'url-loader',
				options: {
					limit: 1,
					name: "images/[name][hash:4].[ext]"
				}
			},
			{
				test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
				loader: 'url-loader',
				options: {
					limit: 1,
					name: 'css/font/[name].[hash:4].[ext]'
				}
			},
			{
				test: /\.mp4$/,
				loader: 'url-loader',
				options: {
					name: 'vedio/[name].[hash:4].[ext]'
				} 
			}
		]
	},
	plugins: [
		new CleanWebpackPlugin('dist',{
			root:path.resolve(__dirname, '../'),
		})
	]
}
pages.forEach(key=>{
	confs.entry[key] = path.resolve(__dirname, '../src/assets/js/'+key+'.js');
	confs.plugins.push(new HtmlWebpackPlugin({
		filename:path.resolve(__dirname,'../dist/'+key+'.html'),
		template: './src/view/'+key+'.html',
		inject: true,
		chunks: ['main',key],
		chunksSortMode: function (chunk1, chunk2) {
			var order = ['main', key];
			var order1 = order.indexOf(chunk1.names[0]);
			var order2 = order.indexOf(chunk2.names[0]);
			return order1 - order2;
		},
		minify: {
			removeComments: false,
			collapseWhitespace: false,
			removeAttributeQuotes: false
		},
	}))
})
module.exports = confs;
