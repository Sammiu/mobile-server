'use strict';

import {API} from '../config'
import Router from 'koa-router'
import LoginController from '../controllers/login'
import NotFoundController from '../controllers/notFound'

const router = new Router();
const mobilePrefix = API.MOBILE_INTERFACE_PREFIX;

router.get('/', NotFoundController.notFoundService);

router.post(`${mobilePrefix}/login`, LoginController.login);

export default router;
