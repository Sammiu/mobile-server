import resUtil from '../utils/resUtil'
import accountModule from '../modules/account'

class accountController {

  static async getAccountAll(ctx) {
    try {
      ctx.response.status = 200;
      const data = await accountModule.getAccountAll();
      ctx.body = resUtil.successJson(data)
    } catch (e) {
      ctx.body = resUtil.errorJson(e.stack)
    }
  }
}


module.exports = accountController;
