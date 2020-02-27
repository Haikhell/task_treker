const client = require('../../db');
const util = require('util');

const asyncQuery = util.promisify(client.query);
module.exports = async (body) => {
  const query = `UPDATE users SET first_name='${body.first_name}' , last_name='${body.last_name}' WHERE user_id = '${body.user_id}'`;

  await asyncQuery.call(client, query);
  return {
    status: 200,
    data: { message: 'user is updated' }
  };
};
