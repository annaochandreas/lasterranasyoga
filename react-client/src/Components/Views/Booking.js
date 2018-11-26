import React from 'react';


class Booking extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			bookings: {}
		}
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}


	handleSubmit = (e) => {
		e.preventDefault();
		const data = this.state.bookings;
		fetch('/api/bookings', {
			method: 'POST',
			body: JSON.stringify(data),
			headers: {
				'Content-Type': 'application/json'
			}
		})
		.then(res => res.json())
		.then(response => {
			console.log('Success: ', JSON.stringify(response))
    })
		.catch(error => console.error('Error:', error));
	}


	handleChange = (e) => {
		let name=e.target.name;
		let bookings = this.state.bookings;
		bookings[name] = e.target.value;
		this.setState(bookings);
	}

	render() {

		return (
      <div>
				<form onSubmit={ this.handleSubmit }>
					<input type="text" name="name" placeholder="Name" value={ this.state.bookings.name } onChange={ this.handleChange } /><br />
					<input type="email" name="email" placeholder="Email" value={ this.state.bookings.email } onChange={ this.handleChange } /><br />
					<input type="text" name="persons" placeholder="Number of persons" value={ this.state.bookings.persons } onChange={ this.handleChange } /><br />
					<input type="date" name="start_date" placeholder="Start Date" value={ this.state.bookings.start_date } onChange={ this.handleChange } /><br />
					<input type="date" name="end_date" placeholder="End Date" value={ this.state.bookings.end_date } onChange={ this.handleChange } /><br />
					<input type="submit" />
				</form>
			</div>
	  )
	}
}

export default Booking;
