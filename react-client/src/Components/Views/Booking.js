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

	submitHandler = (e) => {
		e.preventDefault();
	}

	render() {

		return (
      <div>
				<form onSubmit={ this.submitHandler }>
					<input type="text" name="name" />
					<input type="email" name="email" />
					<input type="text" name="persons" />
					<input type="text" name="start_date" />
					<input type="text" name="end_date" />
					<input type="submit" onClick={ this.submitHandler } />
				</form>
			</div>
    )
	}
}

export default Booking;
