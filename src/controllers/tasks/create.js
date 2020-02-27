const client = require('../../db');
const util = require('util');

const asyncQuery = util.promisify(client.query);

module.exports = async (body) => {
  let query = `INSERT INTO tasks (title,description,status) VALUES ('${body.title}','${body.descrioption}','${body.status ||
    'View'}')`;
  console.log(query);
  await asyncQuery.call(client, query);
  return { status: 200, data: { message: 'task is created' } };
};
