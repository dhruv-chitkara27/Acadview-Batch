import React, { Component } from 'react';
import {Navbar,Nav,Form,FormControl,Button} from 'react-bootstrap';

class MyNavbar extends Component {
  render() {
    return (
      <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">C O D I N I A</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Home</Nav.Link>
      <Nav.Link href="#features">&nbsp;&nbsp;&nbsp;About Us</Nav.Link>
      <Nav.Link href="#pricing">&nbsp;&nbsp;&nbsp;What we Do ?</Nav.Link>
    </Nav>
    <Button variant="outline-primary">Sign Up</Button>&nbsp;&nbsp;&nbsp;
    <Button variant="outline-primary">Login</Button>
  </Navbar>
    );
  }
}

export default MyNavbar;
