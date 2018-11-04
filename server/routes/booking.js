var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/api/booking', function(req, res, next) {
  //res.sendFile('');
  console.log(__dirname);
  let date = new Date();
  res.json({"date": date})
});

module.exports = router;
