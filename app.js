import Koa from 'koa'
import koaJson from 'koa-json'
import bodyParser from 'koa-bodyparser'

import router from './routes'
import {SERVICE} from './config'
import passport from './routes/passport'
import resUtil from "./utils/resUtil";

const app = new Koa();

app.use(koaJson());
app.use(bodyParser());
app.proxy = true;

app.use(async (ctx, next) => {
  try {
    if (await passport(ctx)) {
      await next();
    }
  } catch (err) {
    ctx.body = resUtil.errorJson(err.message);
    ctx.status = err.status || 500
  }
});
app.use(router.routes());


app.on('error', (error) => {
  console.log(error)
});

app.listen(SERVICE.PORT);

