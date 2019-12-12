/**
 * 服务器配置
 * */
export const SERVICE = {HOST: '', PORT: '9996'};

/**
 * 数据库配置
 * */
export const DATABASE = {
  HOST: '49.233.149.56',
  PORT: 5432,
  USER: 'postgres',
  PASSWORD: '123456peng',
  DATABASE: 'postgres',
  CONNECTION_LIMIT: 10
};

/**
 * 接口地址配置
 * */
export const API = {
  /** 项目接口前缀 */
  PROJECT_INTERFACE_PREFIX: '/testApi',
  /** 后台接口前缀 */
  ADMIN_INTERFACE_PREFIX: '/adminApi',
  /** 移动端接口前缀 */
  MOBILE_INTERFACE_PREFIX: '/api/mobile'
};

/** 路径配置 */
export const PATH = {UPLOAD_PATH: 'public/upload'};

/** 限制条件配置 */
export const LIMIT = {UPLOAD_IMG_SIZE: 200 * 1024 * 1024};

/** token 加密秘钥 */
export const TOKEN_SECRET = 'jsonwebtoken20191212';

