import React from 'react'

const TodoListComponent = ({ todos }) => (
    <ul>
      {todos.map((todo, index) =>
        <li key={index}>
            {todo.text}
        </li>
      )}
    </ul>
  );

  export default TodoListComponent;