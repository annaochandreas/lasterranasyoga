var express = require('express');
var router = express.Router();
var path = require('path');

/* GET home page. */
router.get('/api/admin', function(req, res, next) {
	res.json({info: "info", contact: "contact", home: "home"})
});


module.exports = router;
