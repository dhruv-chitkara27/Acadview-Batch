import React, { Component } from 'react';
import './App.css';
import Display from './Display';

class App extends Component {
  state = {
    displayInfos : [
      { name:'John', age:'27' , birthMonth:'July', id: 1 },
      { name:'Wick', age:'30' , birthMonth:'June', id: 2 },
      { name:'Richard', age:'42' , birthMonth:'September', id:3 }
    ]
  }
  render() {
    return (
      <div className="App">
        <h1>This is my App</h1>
        <p>React!</p>
        <Display displayInfos = {this.state.displayInfos}/>
      </div>
    );
  }
}

export default App;
