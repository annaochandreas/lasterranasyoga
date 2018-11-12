const mongoose = require('mongoose');
const mongodb = require('../config/secrets');
const connectionString = 'mongodb://'+mongodb.username+':'+mongodb.password+'@'+mongodb.host;

mongoose.connect(connectionString, { useNewUrlParser: true }, function(err, db) {

  if (err) {
    console.log('Failed connecting to MongoDB!');
    console.log(err);
  }
  else {
    console.log('Successfully connected to MongoDB!');
  }
});
