const mysql = require('mysql');

const connection = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'andp1228',
  database: 'estore',
  port: 3306,
  multipleStatements: true
})


module.exports.connection = connection;