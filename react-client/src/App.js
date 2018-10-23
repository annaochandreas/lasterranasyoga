import React, { Component } from 'react';
import './App.css';

class App extends Component {

  getContact = () => {
    console.log("GET Contact");
    fetch('/contact')
    .then(res => res.json())
    .then(contact => console.log(contact))
  }

  componentDidMount() {
    this.getContact();
  }

  render() {
    return (
      <div className="App">
      </div>
    );
  }
}

export default App;
