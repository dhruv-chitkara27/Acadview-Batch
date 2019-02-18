import React, { Component } from 'react';
import Display from './Display';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="main">
        <h1>Hi,I am React App!</h1>

        <br/><br/>
        <div className="cards">
         <Display name='Dhruv' age='21' Birthmonth='October' />
        <br />
        <input type="text" />
        </div>
        <br/>
        <div className="cards">
         <Display name='John' age='31' Birthmonth='January' />
        <br />
        <input type="text" />
        </div>
      </div>
    );
  }
}
export default App;
