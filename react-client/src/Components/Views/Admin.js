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
			let bookings = this.state.bookings.map((booking, index) => {
				return (
					<tr key = { index }>
						<td>{ booking._id }</td>
						<td>{ booking.name }</td>
						<td>{ booking.email }</td>
						<td>{ booking.persons }</td>
						<td>{ booking.booking_date }</td>
						<td>{ booking.start_date }</td>
						<td>{ booking.end_date }</td>
					</tr>
				)
			});
			return (
				<table>
					<thead>
						<tr>
							<td>Order nr:</td>
							<td>Name</td>
							<td>Email</td>
							<td>Persons</td>
							<td>Booking date:</td>
							<td>Start</td>
							<td>End</td>
						</tr>
					</thead>
					<tbody>
						{ bookings }
					</tbody>
				</table>
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
