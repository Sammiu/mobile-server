'use strict';

export function errorJson(message = '失败', code = -1) {
  return {success: false, error: {message, code}}
}

export function successJson(data = {}) {
  return {success: true, data: data}
}

export default {errorJson, successJson}
