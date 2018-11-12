var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/api/home', function(req, res, next) {
  res.json({"view": "home"});
});

module.exports = router;
