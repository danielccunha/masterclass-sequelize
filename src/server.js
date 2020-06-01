require('dotenv/config');
require('./database');
const express = require('express');
const chalk = require('chalk');
const morgan = require('morgan');
const routes = require('./routes');

const app = express();
const port = process.env.PORT || 3000;

app.use(morgan('dev'));
app.use(express.json());
app.use(routes);

app.listen(port, () => {
  console.log(`Server is running on port ${chalk.green(port)}`);
});
