const express = require('express');
const chalk = require('chalk');

const app = express();
const port = process.env.PORT || 3333;

app.listen(port, () => {
  console.log(`Server is running on port ${chalk.green(port)}`);
});
