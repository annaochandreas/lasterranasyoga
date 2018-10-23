var express = require('express');
var router = express.Router();
const home = require('./home');
const booking = require('./booking');
const contact = require('./contact');

router.use(home);
router.use(booking);
router.use(contact);

module.exports = router;
