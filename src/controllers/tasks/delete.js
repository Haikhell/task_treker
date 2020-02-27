const client = require('../../db');
const util = require('util');

const asyncQuery = util.promisify(client.query);
module.exports = async (task_id) => {
  const query = `DELETE FROM tasks WHERE task_id=${task_id} `;
  await asyncQuery.call(client, query);

  return {
    status: 200,
    data: { message: 'task is delete' }
  };
};
