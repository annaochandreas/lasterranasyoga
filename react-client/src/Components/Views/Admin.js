import React from 'react';
import { Table } from 'antd';

class Admin extends React.Component {
  constructor(props) {
		super(props);
		this.state = {
			bookings: [],
      columns: [
        {title: 'Order nr', dataIndex: 'order_nr', key: 'order_nr'},
				{title: 'Name', dataIndex: 'name', key: 'name'},
				{title: 'Email', dataIndex: 'email', key: 'email'},
				{title: 'Persons', dataIndex: 'persons', key: 'persons'},
				{title: 'Booking Date', dataIndex: 'booking_date', key: 'booking_date'},
				{title: 'Start Date', dataIndex: 'start_date', key: 'start_date'},
				{title: 'End Date', dataIndex: 'end_date', key: 'end_date'}
      ]
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
				let modifiedList = this.state.bookings.map((booking, index) => {
					return {
						key: index,
						order_nr: booking._id,
						name: booking.name,
						email: booking.email,
						persons: booking.persons,
						booking_date: booking.booking_date,
						start_date: booking.start_date,
						end_date: booking.end_date
					}
				});
				return (
					<Table dataSource={modifiedList} columns={this.state.columns} />
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
