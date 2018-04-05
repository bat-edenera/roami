const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const glob = require('glob');

var confs = {
	entry: {
		// jquery:"jquery"
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
					limit: 100,
					name: "images/[name][hash:4].[ext]"
				}
			},
			{
				test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
				loader: 'url-loader',
				options: {
					limit: 100,
					name: 'css/font/[name].[hash:4].[ext]'
				}
			}
		]
	},
	plugins: [
		new webpack.ProvidePlugin({ 
			$: "jquery"
	  }),
		new CleanWebpackPlugin('dist',{
			root:path.resolve(__dirname, '../'),
		}),
		new webpack.optimize.CommonsChunkPlugin({
			// name: ['vendor','jquery'],
			name:'vendor',
			minChunks: function (module, count) {
				// 指定范围是js文件来自node_modules
				return (module.resource && /\.js$/.test(module.resource) &&module.resource.indexOf(path.join(__dirname, '../node_modules')) === 0 && count>2);
			},
		}),
	]
}
//dpa
var pages = getPage();
pages.forEach(key=>{
	confs.entry[key] = path.resolve(__dirname, '../src/assets/js/'+key+'.js');
	confs.plugins.push(new HtmlWebpackPlugin({
		filename:path.resolve(__dirname,'../dist/'+key+'.html'),
		template: './src/view/'+key+'.html',
		inject: true,
		chunks: ['vendor',key],
		// chunksSortMode: function (chunk1, chunk2) {
		// 	var order = ['common', key];
		// 	var order1 = order.indexOf(chunk1.names[0]);
		// 	var order2 = order.indexOf(chunk2.names[0]);
		// 	return order1 - order2;
		// },
		minify: {
			removeComments: false,
			collapseWhitespace: false,
			removeAttributeQuotes: false
		},
	}))
})
function getPage(){
	let pages = [];
	var files = glob.sync(path.resolve(__dirname,'../src/view/*.html'));
	files.forEach(filepath=>{
		let extname = path.extname(filepath);//后缀
		let basename = path.basename(filepath, extname);
		pages.push(basename);
	})
	return pages;
}
module.exports = confs;
