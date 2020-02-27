const client = require('../../db');
const util = require('util');

const asyncQuery = util.promisify(client.query);
module.exports = async (body) => {
  let query = `INSERT INTO users (first_name,last_name) VALUES ('${body.first_name}','${body.last_name}')`;
  await asyncQuery.call(client, query);

  return {
    status: 200,
    data: { message: 'user is created' }
  };
};
