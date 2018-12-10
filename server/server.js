const express = require('express');
const path = require('path');
const parser = require('body-parser');
const Router = require('./routes');

var app = express();
require('./database');


app.use(express.static(path.join(__dirname, '../react-client/build')));
app.use(Router);

app.get('/', (req, res) => {
  console.log("HOME");
  res.redirect('/home');
});

app.get('*', (req,res) => {
  console.log("Some route enterned");
  res.sendFile(path.join(__dirname, '../react-client/build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log("Server started on: " + port);
});
