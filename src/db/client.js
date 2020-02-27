const mysql = require('mysql');
const config = require('../config');

const client = mysql.createConnection({
  host: config.HOST_DB,
  user: config.USER_DB,
  database: config.DB_NAME,
  password: config.PASSWORD_DB,
  port: config.DB_PORT
});
client.connect(function(err) {
  if (err) throw err;
  console.log('Connected!');
});
module.exports = client;
