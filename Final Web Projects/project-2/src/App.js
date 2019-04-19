import React, { Component } from 'react';
import logo from './logo.svg';
import MyNavbar from './Components/MyNavbar';
import './App.css';
import Home from './Components/Home';
import Type from './Components/Type';
import About from './Components/About';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MyNavbar /><br />
        <Type />
        <Home />
        <About />
      </div>
    );
  }
}

export default App;
