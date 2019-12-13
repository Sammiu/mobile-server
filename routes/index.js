'use strict';

import {API} from '../config'
import Router from 'koa-router'
import LoginController from '../controllers/login'
import AccountController from '../controllers/account'
import NotFoundController from '../controllers/notFound'

const router = new Router();
const mobilePrefix = API.MOBILE_INTERFACE_PREFIX;

router.get('/', NotFoundController.notFoundService);

router.post(`${mobilePrefix}/public/login`, LoginController.login);
router.get(`${mobilePrefix}/getAccountAll`, AccountController.getAccountAll);
router.get(`${mobilePrefix}/checkLogin`, LoginController.checkLogin);

export default router;
