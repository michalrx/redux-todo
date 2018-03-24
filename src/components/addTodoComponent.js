import React from 'react'
 
const AddTodoComponent = ({ addTodo }) => {
  let input
 
  return (
    <form className="check-add"
        onSubmit={e => {
          e.preventDefault();
          if (!input.value.trim()) {
            return
          }
          addTodo(input.value)
          input.value = ''
        }}
      >
        <input className="check-add__input" ref={node => input = node} />
        <button className="check-add__submit" type="submit">
          Add
        </button>
      </form>
  )
}
 
export default AddTodoComponent;