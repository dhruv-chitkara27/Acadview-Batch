import React from 'react';

const Todo = ({ todos, deleteTodo }) => {
  const todoList = todos.length ? todos.map( todo => {
    return (
      <div className='collection-item' key = {todo.id}>
        <span onClick={() => {deleteTodo(todo.id)}}>{todo.item}</span>
      </div>
    )
  }) : (
    <p>Yay!I dont have anything to do!</p>
  )
  return (
    <div className='todos collection'>
      { todoList }
    </div>
  )
}

export default Todo;
