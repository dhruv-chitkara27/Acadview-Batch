import React, { Component } from 'react';
import './App.css';

class Display extends Component {
    render() {
        //console.log(this.props);
        return (
           <div>
            <h3>Hi! This is react.</h3>
               <div>Name:{this.props.name}</div>
                <div>Age:{this.props.age}</div>
                <div>Birthmonth:{this.props.Birthmonth}</div>
            </div>
        )
    }
}
export default Display;
