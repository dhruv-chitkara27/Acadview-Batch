import React from 'react';
import ColorChanger from '../HOC/ColorChanger';

const contact = (props) => {
  // console.log(props);
  // setTimeout(() => {
  //   props.history.push('/about');
  // },2000);
    return (
      <div>
        <h4 className='container center'>Contactpage</h4>
        <p className='container center'>This is our Contact page!</p>
      </div>
    )
}

export default ColorChanger(contact);
