import React from 'react';

class Admin extends React.Component {
  constructor(props) {
		super(props);
		this.state = {
			bookings: []
		}
	}


	componentDidMount() {
		fetch('/api/bookings')
  	.then(res => res.json())
  	.then(bookings =>  {
  		this.setState({
				bookings: bookings
  		});
  	});
	}


	render() {

		let bookings = (
			<div>No bookings</div>
		)

		if (this.state.bookings.length !== 0) {

		bookings = this.state.bookings.map((booking, index) => {
			console.log(booking);
			return (
				<div key={index}>
					<ul><li>Name:</li><li>{ booking.name }</li></ul>
          <ul><li>Email:</li><li>{ booking.email }</li></ul>
					<ul><li>Number of persons: </li><li>{ booking.persons }</li></ul>
					<ul><li>Booking date: </li><li></li>{ booking.booking_date }</ul>
				</div>
			)
		});
	}



		console.log(this.state.bookings);

		return (
			<div>{ bookings }</div>
		)
	}

}

export default Admin;
