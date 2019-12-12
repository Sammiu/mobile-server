import postgresUtil from '../utils/postgresUtil'

const TABLE_NAME = 'ms_account';

export default class accountDao {

  static getAccountInfo(accNumber, password) {
    return postgresUtil.execSql(`select * from ${TABLE_NAME} where acc_number=$1 and password=$2`, [accNumber, password])
  }
}
