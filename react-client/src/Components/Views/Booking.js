import React from 'react';


class Booking extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {
			date: null
		}
	}


	componentDidMount() {
		fetch('/api/booking')
    	.then(res => res.json())
    	.then(booking =>  {
    		console.log(booking);
    		this.setState({
    			date: booking.date
    		});
    	});
	}
	
	render() {
		return (
			<div>{ this.state.date }</div>
		)
	}
}

export default Booking;