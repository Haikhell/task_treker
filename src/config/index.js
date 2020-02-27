require('dotenv').config({ path: `${__dirname}/.env` });

const ENV = process.env;

const REQUIRED_CONFIG = [ 'HOST_DB', 'USER_DB', 'PASSWORD_DB', 'DB_NAME', 'DB_PORT' ];

REQUIRED_CONFIG.forEach((field) => {
  if (!ENV.hasOwnProperty(field)) {
    throw new Error('Missing required config!');
  }
});

module.exports = Object.freeze({
  HOST: ENV.HOST || '127.0.0.1',
  PORT: ENV.PORT ? +ENV.PORT : 4040,

  HOST_DB: ENV.HOST_DB,
  USER_DB: ENV.USER_DB,
  PASSWORD_DB: ENV.PASSWORD_DB,
  DB_NAME: ENV.DB_NAME,
  DB_PORT: ENV.DB_PORT
});
