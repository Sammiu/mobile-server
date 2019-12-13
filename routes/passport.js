import jwtUtil from '../utils/jwtUtil'
import resUtil from '../utils/resUtil'

export default async function (ctx) {
  if (!ctx.url.match(/\/public\/+/)) {
    let token = ctx.req.headers.authorization || ctx.cookies.get('token');

    if (!token) {
      ctx.response.status = 200;
      ctx.body = resUtil.errorJson('未登录', 1001);
      return false;
    } else {
      return await jwtUtil.verify(token).then(decoded => {
        ctx.authInfo = decoded;
        return true;
      }, () => {
        ctx.response.status = 200;
        ctx.body = resUtil.errorJson('会话失效了', 1001);
        return false;
      })
    }
  }
  return true;
}
