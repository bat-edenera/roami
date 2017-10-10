const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: {
    index: path.resolve(__dirname, '../src/index.js'),
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
					name: "images/[name].[ext]"
				}
			},
		]
	},
	plugins: [
		new CleanWebpackPlugin('dist',{
			root:path.resolve(__dirname, '../'),
		}),
		new HtmlWebpackPlugin({
			filename:path.resolve(__dirname,'../dist/index.html'),
			template: 'index.html',
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true
      },
		})
	]
};
