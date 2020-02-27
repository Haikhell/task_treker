const mysql = require('mysql');

const client = require('../client');

let sql =
  'CREATE TABLE tasks(title VARCHAR(255) NOT NULL,description TEXT NOT NULL,status VARCHAR(20),user_id INT(255), task_id INT AUTO_INCREMENT PRIMARY KEY)';
client.query(sql, function(err, res) {
  if (err) throw err;
  console.log('user table created');
});
