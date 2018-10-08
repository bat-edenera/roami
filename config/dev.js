const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const hotMiddleware = require('webpack-hot-middleware');
var opn = require('opn')
const app = express();
const config = require('./webpack.dev.js');
var port = 8080;
const compiler = webpack(config);
var page = '/index.html';

// Tell express to use the webpack-dev-middleware and use the webpack.config.js
// configuration file as a base.
var devMiddleware = webpackDevMiddleware(compiler,{
	publicPath: config.output.publicPath,
	quiet:true
});
var devHotMiddleware = hotMiddleware(compiler, {
  log: () => {}
})
// force page reload when html-webpack-plugin template changes
compiler.plugin('compilation', function (compilation) {
  compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
    devHotMiddleware.publish({ action: 'reload' })
    cb()
  })
})

// handle fallback for HTML5 history API
app.use(require('connect-history-api-fallback')())

// serve webpack bundle output
app.use(devMiddleware)

// enable hot-reload and state-preserving
// compilation error display
app.use(devHotMiddleware)

// serve pure static assets
// var staticPath = path.posix.join(config.dev.assetsPublicPath, config.dev.assetsSubDirectory)
// app.use(staticPath, express.static('./static'))

var uri = 'http://localhost:' + port + page;

var _resolve
var readyPromise = new Promise(resolve => {
  _resolve = resolve
})

console.log('> Starting dev server...')
devMiddleware.waitUntilValid(() => {
  console.log('> looking at ' + uri + '\n')
  // when env is testing, don't need open it
  opn(uri)
  _resolve()
})

var server = app.listen(port)

module.exports = {
  ready: readyPromise,
  close: () => {
    server.close()
  }
}
