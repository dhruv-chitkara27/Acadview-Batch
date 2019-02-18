import React from 'react';

    const Display = (props) => {
    const displayInfos = props.displayInfos;
    const displayList = displayInfos.map( info => {
      if (info.age > 25) {
      return (
        <div key={info.id}>
          <h3>This is {info.name} Display Component</h3>
          <div> Name: { info.name } </div>
          <div> Age: { info.age } </div>
          <div> Birthmonth: { info.birthMonth } </div>
        </div>
      )
    }else {
      return null;
    }
    });
    return (
      <div>
        { displayList }
      </div>
    );
//  }
}

export default Display;
