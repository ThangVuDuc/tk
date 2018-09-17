import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ContactForm from './components/ContactForm';
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends Component {
  render() {
    return (
      <ContactForm/>
    );
  }
}

export default App;
