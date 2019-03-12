import React from 'react'
import { NavLink } from 'react-router-dom';
import './home.css'
const Navigate = () => {
    return (
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
            <div className='container'>
                <NavLink to='/' className='navbar-brand'>Assignment</NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" target="#collapsibleNavbar">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="collapsibleNavbar">
                    <ul className="nav nav-pills ml-auto">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/home">Home</NavLink>
                        </li>
                        <li class="nav-item">
                            <NavLink className="nav-link" to="/about">About</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navigate
