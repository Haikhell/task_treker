const client = require('../../db');
const util = require('util');

const asyncQuery = util.promisify(client.query);
module.exports = async () => {
  const query = 'SELECT * FROM tasks';
  let temp = await asyncQuery.call(client, query);
  return {
    status: 200,
    data: temp
  };
};
