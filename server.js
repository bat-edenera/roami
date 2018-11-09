const Koa = require('koa');
const http = require('http');
const app = new Koa();
// const router = require('koa-router')();
const static = require('koa-static');
const path = require('path');

http.createServer(app.callback()).listen('3000',() => {
  console.log('server is starting at port 3000')
});

app.use(async (ctx,next) => {
  await next();
  console.log(ctx.request.url,ctx.url)
})
app.use(static(path.join(__dirname, './dist')))

// app.use(router.routes()).use(router.allowedMethods());