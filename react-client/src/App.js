import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      view: "home"
    }
  }

  homeView = () => {
    fetch('/home')
    .then(res => res.json())
    .then(home =>  {
      this.setState(home)
    });
  }


  contactView = () => {
    fetch('/contact')
    .then(res => res.json())
    .then(contact =>  {
      this.setState(contact)
    });
  }

  bookingView = () => {
    fetch('/booking')
    .then(res => res.json())
    .then(booking =>  {
      this.setState(booking)
    });
  }


  render() {
    return (
      <div className="App">
        <button onClick={this.homeView}>Home</button>
        <button onClick={this.contactView}>Contact</button>
        <button onClick={this.bookingView}>Booking</button>
        <span>{this.state.view}</span>
      </div>
    );
  }
}

export default App;
