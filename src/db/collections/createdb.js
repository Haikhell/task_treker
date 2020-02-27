var mysql = require('mysql');
const config = require('../../config');

var con = mysql.createConnection({
  host: config.HOST_DB,
  user: config.USER_DB,
  password: config.PASSWORD_DB
});

con.connect(function(err) {
  if (err) throw err;
  console.log('Connected!');
  con.query(`CREATE DATABASE ${config.DB_NAME}`, function(err, result) {
    if (err) throw err;
    console.log('Database created');
  });
});
