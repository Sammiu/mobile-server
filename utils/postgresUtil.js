import pg from 'pg'
import {DATABASE} from '../config'

const pgConfig = {
  user: DATABASE.USER, /** 数据库用户名 */
  database: DATABASE.DATABASE, /** 数据库 */
  password: DATABASE.PASSWORD, /** 数据库密码 */
  host: DATABASE.HOST, /** 数据库所在IP */
  port: DATABASE.PORT, /** 连接端口 */
  max: DATABASE.CONNECTION_LIMIT,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000
};


const pool = pg.Pool(pgConfig);

class postgresUtil {

  static execSql(sqlStr, params = []) {
    return new Promise((resolve, reject) => {
      pool.connect((error, client, done) => {
        client.query(sqlStr, params, (err, response) => {
          done();
          err ? reject(err) : resolve(response.rows)
        })
      })
    })
  }
}


module.exports = postgresUtil;
