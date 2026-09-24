const express = require('express');
const app = express();

app.get('/', (req, res) => {
  // success:
  res.send(     'Works on my machine.');

  // failure:
  // res.send('Hello world');
});

module.exports = app;
