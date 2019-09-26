const Koa = require('koa');
const app = new Koa();
app.use(async (ctx, next) => {
  ctx.set('Access-Control-Allow-Origin', '*');
  ctx.set('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
  ctx.set('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
  await next()
  ctx.response.type = "text/html";
  if (ctx.path === '/') {
    ctx.body = { code: 200, msg: 'success', data: { name: 'xxx' } }
  } else if (ctx.path === '/aa') {
    ctx.body = { code: 200, msg: 'success', data: { name: 'aa' } }
  }

})
app.listen(3000)
