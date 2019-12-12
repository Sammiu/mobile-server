'use strict';

class notFoundController {

  static async notFoundService(ctx) {
    ctx.code = 404;
    ctx.body = '找不到服务';
    ctx.set('Content-Type', 'text/html;charset=utf-8')
  }
}


module.exports = notFoundController;
