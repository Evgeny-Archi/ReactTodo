import React, { useState } from 'react'
import { TodoItem, TodoCheckbox } from './Todos.elements'
import Button from '../../../UI/Button/Button'
import TodoEdit from './TodoEdit'

const Todos = (props) => {
  const [editing, setEditing] = useState(false)
  const [isLoading, setLoading] = useState(false)

  const handleEditTodo = () => {
    setEditing(true)
  }

  const handleCancelEditing = () => {
    setEditing(false)
  }

  const handleSaveEdit = (id, text) => {
    props.saveEdit(id, text)
  }

  const deleteHandler = () => {
    setLoading(true)
    props.handleDelete(props.id)
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
          <div style={{ display: 'flex' }}>
            <Button onClick={handleEditTodo}>Изменить</Button>&nbsp;
            <Button onClick={deleteHandler} isLoading={isLoading}>
              Удалить
            </Button>
          </div>
        </>
      )}
    </TodoItem>
  )
}

export default Todos
