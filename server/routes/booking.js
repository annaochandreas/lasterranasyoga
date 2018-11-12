var express = require('express');
var router = express.Router();

const Booking = require('../schemas/Booking');

/* GET home page. */
router.get('/api/booking', function(req, res, next) {
  //res.sendFile('');
  Booking.create({name: "Andreas"}, (err, booking) => {
      if (err) return res.status(400).json({message: "Error", error: err});
      res.json(booking);
  });
});

module.exports = router;
