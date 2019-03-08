import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import about from './Components/about';
import contact from './Components/contact';
import Post from './Components/Post';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <Navbar/>
        <Route exact path='/' component={Home}/>
        <Route path='/about' component={about}/>
        <Route path='/contact' component={contact}/>
        <Route path='/:post_id' component={Post}/>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
