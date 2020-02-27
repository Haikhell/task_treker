const mysql = require('mysql');

const client = require('../client');

let sql =
  'CREATE TABLE users(first_name VARCHAR(255) NOT NULL,last_name VARCHAR(255) NOT NULL, user_id INT AUTO_INCREMENT PRIMARY KEY)';
client.query(sql, function(err, res) {
  if (err) throw err;
  console.log('user table created');
});
