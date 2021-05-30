import React, { useState } from 'react'
import { TodoItem, TodoCheckbox } from './Todos.elements'
import Button from '../../../UI/Button/Button'
import TodoEdit from './TodoEdit'

const Todos = (props) => {
  const [editing, setEditing] = useState(false)

  const handleEditTodo = () => {
    setEditing(true)
  }

  const handleCancelEditing = () => {
    setEditing(false)
  }

  const handleSaveEdit = (id, text) => {
    props.saveEdit(id, text)
    setEditing(false)
  }

  return (
    <TodoItem last={props.length - 1 === props.index}>
      {editing ? (
        <TodoEdit
          id={props.id}
          text={props.text}
          cancelEditing={handleCancelEditing}
          saveEdit={handleSaveEdit}
        />
      ) : (
        <>
          <div>
            <TodoCheckbox
              type="checkbox"
              id={props.id}
              checked={props.completed}
              onChange={props.toggleCompleted.bind(null, props.id)}
            />
            <label htmlFor={props.id}>{props.text}</label>
          </div>
          <div>
            <Button onClick={handleEditTodo}>Edit</Button>&nbsp;
            <Button onClick={props.handleDelete.bind(null, props.id)}>
              Delete
            </Button>
          </div>
        </>
      )}
    </TodoItem>
  )
}

export default Todos
