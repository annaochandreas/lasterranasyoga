import React from 'react';


class Booking extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			bookings: null
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
		let bookings = this.state.bookings;
		if (bookings !== null) {
			bookings = this.state.bookings.map((booking, index) => {
				return <tr key={index}><td>{booking._id}</td><td>{booking.name}</td></tr>
			})
		}
		return (
			<table>
				<thead><tr><td>ID</td><td>Booked By</td></tr></thead>
				<tbody>
					{ bookings }
				</tbody>
			</table>
		)
	}
}

export default Booking;
