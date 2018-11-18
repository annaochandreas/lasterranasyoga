var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser');
const Booking = require('../schemas/Booking');
const functions = require('../modules/module');


//Middleware
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));

router.get('/api/bookings', function(req, res, next) {
  Booking.find({}, (err, booking) => {
      if (err) return res.status(400).json({message: "Error", error: err});
      res.json(booking);
  });
});


router.get('/api/bookings/:id', function(req, res, next) {
  const id = req.params.id;
  Booking.find({_id: id}, (err, booking) => {
      if (err) return res.status(400).json({message: "Error", error: err});
      res.json(booking);
  });
});


router.post('/api/bookings', (req, res, next) => {
  const data = {
    name: req.body.name,
    email: req.body.email,
    persons: parseInt(req.body.persons),
    booking_date: new Date(),
    start_date: new Date(req.body.start_date),
    end_date: new Date(req.body.end_date),
    booked_dates: functions.getDates(new Date(req.body.start_date), new Date(req.body.end_date))
  }

  Booking.create(data, (err, booking) => {
    if (err) return res.status(400).json({message: "Error", error: err});
    res.json(booking);
  });
});

module.exports = router;
