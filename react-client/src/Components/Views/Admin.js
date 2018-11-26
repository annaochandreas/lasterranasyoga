import React from 'react';
import Table from '../Table/Table';


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
		if (this.state.bookings.length !== 0) {
				const tableHeader = ["Order nr", "Name", "Email", "Persons", "Booking date", "Start", "End"];
				let tableBody = this.state.bookings;
				let modifiedList = this.state.bookings.map(booking => {
					return {
						order_nr: booking._id,
						name: booking.name,
						email: booking.email,
						persons: booking.persons,
						booking_date: booking.booking_date,
						start_date: booking.start_date,
						end_date: booking.end_date
					}
				});
				console.log(modifiedList);
				return (
					<Table
						title={ "Bookings" }
						tableHeader={ tableHeader }
						tableBody={ modifiedList }
						defaultRows={10}
					/>
				)

		}
		else {
			return (
				<div>No bookings</div>
			)
		}
	}
}

export default Admin;
