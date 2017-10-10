const webpack = require('webpack');
const  ora = require('ora');
const chalk = require('chalk');
const config = require('./webpack.prod.js');


const path = require('path');

var spinner = ora('building ...')
spinner.start();
const compiler = webpack(config)
webpack(config,(err,info)=>{
	spinner.stop();
	if(err) throw err;
	process.stdout.write(info.toString({
		colors: true,
		modules: false,
		children: false,
		chunks: false,
		chunkModules: false
	}) + '\n\n');
	console.log(chalk.cyan('build complete!'))
})
