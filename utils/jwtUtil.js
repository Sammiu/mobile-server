import jwt from 'jsonwebtoken'
import {TOKEN_SECRET} from '../config'

export function sign(data) {
  return jwt.sign(data, TOKEN_SECRET, {expiresIn: '48h'})
}

export function verify(token) {
  return new Promise((resolve, reject) => {
    jwt.verify(token, TOKEN_SECRET, (err, decoded) => {
      err ? reject(err) : resolve(decoded)
    })
  })
}


export default {
  sign, verify
}
