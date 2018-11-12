var express = require('express');
var router = express.Router();
const home = require('./home');
const booking = require('./booking');
const contact = require('./contact');
const admin = require('./admin');

router.use(home);
router.use(booking);
router.use(contact);
router.use(admin);

module.exports = router;
