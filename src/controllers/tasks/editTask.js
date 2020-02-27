const client = require('../../db');
const util = require('util');

const asyncQuery = util.promisify(client.query);

module.exports = async (body, task_id) => {
  console.log(body);
  try {
    let strUpdate = 'UPDATE tasks SET ';
    if (!body) {
      throw new Error('body is empty');
    }
    let i = 1;
    let len = Object.keys(body).length;
    for (let temp in body) {
      strUpdate = strUpdate + `${temp}='${body[temp]}'`;
      if (i < len) {
        strUpdate += ',';
        i++;
      }
    }

    const query = strUpdate + ` WHERE task_id='${task_id}'`;
    await asyncQuery.call(client, query);
    return {
      status: 200,
      data: { message: 'task is updated' }
    };
  } catch (error) {
    return {
      data: { message: 'bad parameters' }
    };
  }
};
