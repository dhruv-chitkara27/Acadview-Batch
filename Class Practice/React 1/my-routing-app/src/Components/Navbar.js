import React from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';

const Navbar = (props) => {
    // console.log(props);
    // setTimeout(() => {
    //   props.history.push('/contact');
    // },2000);
  return (
    <nav className='nav-wrapper blue darken-4'>
      <a href='/' className='brand-logo'>MERN Masters</a>
      <ul className='right'>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><NavLink to='/contact'>Contact</NavLink></li>
      </ul>
    </nav>
  )
}

export default withRouter(Navbar);
