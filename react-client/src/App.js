import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
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
    
    const Home = () => (
      <div>
        <h2>Home</h2>
      </div>
    )
    
    const Contact = () => (
      <div>
        <h2>Contact</h2>
      </div>
    )
    
    const Booking = () => (
      <div>
        <h2>Booking</h2>
      </div>
    )

    return (
      <div className="App">

        <ul>
          <li><Link to='/home'>Home</Link></li>
          <li><Link to='/contact'>Contact</Link></li>
          <li><Link to='/booking'>Booking</Link></li>
        </ul>

        <Header menu={ this.state.menu } logo={ logo } />
        <span>{this.state.view}</span>
        <Route path='/home' component={ Home } />
        <Route path='/contact' component={ Contact } />
        <Route path='/booking' component={ Booking } />
      </div>
    );
  }
}

export default App;
