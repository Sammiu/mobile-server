import Koa from 'koa'
import koaJson from 'koa-json'
import bodyParser from 'koa-bodyparser'

import router from './routes'
import {SERVICE} from './config'

const app = new Koa();

app.proxy = true;
app.use(koaJson());
app.use(bodyParser());
app.use(router.routes());

app.use(async (ctx, next) => {
  try {
    await next()
  } catch (err) {
    ctx.body = {message: err.message};
    ctx.status = err.status || 500
  }
});

app.on('error', (error) => {
  console.log(error)
});

app.listen(SERVICE.PORT);

