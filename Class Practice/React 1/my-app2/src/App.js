import React, { Component } from 'react';
import './App.css'
import Display from './Display';
import StatelessDisplay from './StatelessDisplay';
import AddInfo from './AddInfo';


// The App component is getting rendered at the DOM.
// It's the mother of all components.
// Let's se how we nest a component.
// We create a Display component and then import it here
// We are nesting the Display component here.
class App extends Component {
  state= {
    /*
      We are creating a property called displayInfos and we are creating an array of the property objects.
      We are going to pass this list as property to Display component.
      Display component will recieve this property as a list and then we will cycle through and display it.
      To pass this array to the Display component:
            --> <Display displayInfos={this.state.displayInfos} />
    */

    displayInfos: [
      { name: 'Jim', birthMonth:'June', id: 1 },
      { name: 'Pam', age: 31, birthMonth:'January', id: 2 },
      { name: 'Richard', age: 42, birthMonth:'August', id: 3 }
    ]
  }

  addInfo = (info) => {
    console.log('Inside App Component', info);
    /*
      We have state of AddInfo component here (i.e 'info' argument of the function)
      and now we need to update the state of App Component here with the 'info' object.
      For that we need to setState.

      But notice that displayInfos state has id: attribute but the info object we get doesn't have id.
      If we give user to input the id then they can input same id's and that would be bad and generate some duplicate id.
      We can add the id attribute by assinging it some value.
    */
    info.id = Math.floor(Math.random() * 10);
    console.log(info.id);
    /*
      Now remember we can't alter the state Directly so we can't push directly tothe array like:
          this.setState({
            displayInfos: this.displayInfos.push(info) --- we can't do this because push method alter's the original array.
          })
      So the way would be:
        -- Make a copy of the displayInfos array. That we will not push the info directly into the displayInfos array
        -- Now push the new info into the copy of the array and assign that array to the setState method.
        -- We create the copy of the displayInfos array using the SPREAD OPERATORS like:

              let displayInfos = [...this.state.displayInfos] -- this creates the copy of the array.

        -- The displayInfos will be the exact copy of the displayInfos array from initial state.
        -- Now we can just add the info from AddInfo component to the above newly created array like:
              let displayInfos = [...this.state.displayInfos, info]
        -- So now we are not directly updating the array outside setState().
    */
    let displayInfos = [...this.state.displayInfos, info];

    this.setState({
      displayInfos: displayInfos
    })
  }

  render() {

    /*
      We are outputting only one Display content to dom for every element.
      Instead of passing down the props for each component we can pass the list of props
          A better way of doing this would be we pass each Display with props as a list and
          cycle them in the Display.js (Display component) and then display each info in the component.
      So we will use only one Display component and pass the list to them so we can cycle through it.
      We will use state to pass the list of Display props.
    */

    return (
      <div className="App">
        <h1>This is our first react App</h1>
        <p>Let's Begin</p>
        <StatelessDisplay displayInfos={this.state.displayInfos} />
        <AddInfo addInfo={this.addInfo} />
      </div>
    );
  }
}

export default App;
