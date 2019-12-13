import md5 from 'md5'
import jwtUtil from '../utils/jwtUtil'
import resUtil from '../utils/resUtil'
import accountModule from '../modules/account'
import {isNotEmptyArray} from '../utils/validateUtil'

class loginController {

  /**
   * 登录
   *
   * @param {Object} ctx http上下文
   * */
  static async login(ctx) {

    try {
      ctx.response.status = 200;
      const data = await accountModule.getAccountInfo(ctx.request.body.accNumber, md5(ctx.request.body.password));
      if (isNotEmptyArray(data)) {
        const item = data[0];
        const token = jwtUtil.sign(item);
        ctx.cookies.set('token', token);
        ctx.body = resUtil.successJson({
          token: token, id: item.id, accNumber: item.acc_number, nickName: item.nick_name, phone: item.phone
        });
      } else {
        ctx.body = resUtil.errorJson('账号或密码错误')
      }
    } catch (e) {
      ctx.body = resUtil.errorJson(e.stack);
    }
  }

  static async checkLogin(ctx) {
    ctx.response.status = 200;
    ctx.body = resUtil.successJson(null)
  }
}

module.exports = loginController;
