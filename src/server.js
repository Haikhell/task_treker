const http = require('http');

const dbHelper = require('./db');
const config = require('./config');

(async () => {
  const app = require('./app');
  const httpServer = http.createServer(app);
  httpServer.listen(config.PORT, config.HOST);
  console.log('good');
})();
