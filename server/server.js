const express = require('express');
const path = require('path');
const parser = require('body-parser');
const port = process.env.PORT || 8000;

var app = express();

app.use('/', (req, res) => {
  res.send("Started!");
})

app.listen(port, () => {
  console.log("Server started on: " + port);
});
