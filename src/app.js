const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(cors());
app.use(bodyParser.json({ limit: '500kb' }));
app.use(bodyParser.urlencoded({ extended: false }));
const routes = require('./routes');
app.use(routes);

module.exports = app;
