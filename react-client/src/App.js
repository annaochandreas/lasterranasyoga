import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header';
import { logo } from './images/logo.png';

class App extends Component {

  constructor() {
    super();
    this.state = {
      view: "home",
      menu: [
        {
          name: "Home",
          key: "home",
          changeView: this.homeView
        },
        {
          name: "Contact",
          key: "contact",
          changeView: this.contactView
        },
        {
          name: "Booking",
          key: "booking",
          changeView: this.bookingView
        }
      ]
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
        <Header menu={ this.state.menu } logo={ logo } />
        <span>{this.state.view}</span>
      </div>
    );
  }
}

export default App;
