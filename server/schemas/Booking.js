var mongoose = require('mongoose');

var bookingSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    persons: {
      type: Number,
      required: true
    },
    booking_date: {
      type: Date,
      required: true
    },
    start_date: {
      type: Date,
      required: true
    },
    end_date: {
      type: Date,
      required: true
    },
    booked_dates: {
      type: Array,
      required: true
    },
    confirmed: {
      type: Boolean,
      default: false
    },
    payed: {
      type: Boolean,
      default: false
    }
	}
);

var Booking = mongoose.model('Booking', bookingSchema);

module.exports = Booking;
