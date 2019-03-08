import React, { Component } from 'react';
import Todo from './Todo';
import AddTodo from './AddTodo';

class App extends Component {
  state = {
    todos: [
      {id: 1, item: 'Play Badminton'},
      {id: 2, item: 'Evaluate Assignment'}
    ]
  }

  deleteTodo =  (id) => {
    //console.log(id);
    let todos = this.state.todos.filter( todo => {
      return todo.id !== id
    })

    this.setState({
      todos: todos
    })
  }

  addTodo = (item) => {
    //console.log('In App.js', item);
    item.id = Math.random();
    const todos = [...this.state.todos, item];
    console.log(todos);

    this.setState({
      todos
    })
  }

  componentDidMount() {
    console.log('Component has been mounted');
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('Component has been updated');
    console.log(prevProps, prevState);
  }

  render() {
    return (
      <div className="App container">
        <h3 className='center red-text'>My TODOs</h3>
        <Todo todos={this.state.todos} deleteTodo={this.deleteTodo}/>
        <AddTodo addTodo={this.addTodo}/>
      </div>
    );
  }
}

export default App;
