var mongoose = require('mongoose');

var bookingSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    confirmed: {
      type: Boolean,
      default: false
    }
	}
);

var Booking = mongoose.model('Booking', bookingSchema);

module.exports = Booking;
