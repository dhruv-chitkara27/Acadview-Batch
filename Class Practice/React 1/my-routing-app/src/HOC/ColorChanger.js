import React from 'react';

const ColorChanger = (WrappedComponent) => {

    const colors = ['red','blue','pink','purple','green','yellow'];
    const randomColor = colors[Math.floor(Math.random() * 5)];
    const className = randomColor + '-text';

    return () => {
      return (
        <div className={className}>
            <WrappedComponent/>
        </div>
      )
    }
}


export default ColorChanger;
