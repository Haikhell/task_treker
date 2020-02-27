const client = require('../../db');
const util = require('util');

const asyncQuery = util.promisify(client.query);
module.exports = async (user_id) => {
  const query = `DELETE FROM users WHERE user_id=${user_id} `;
  await asyncQuery.call(client, query);

  return {
    status: 200,
    data: { message: 'user is delete' }
  };
};
