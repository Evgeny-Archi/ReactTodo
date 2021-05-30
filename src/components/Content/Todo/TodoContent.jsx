import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Wrap, TodosWrap } from './TodoContent.elements'
import Todos from './Todos/Todos'
import Form from './Form'
import Statistic from './Statistic'
import {
  toggleCompletedAC,
  deleteTodoAC,
  saveTodoAC,
} from '../../../redux/actions/actions'

const Todo = () => {
  const todosState = useSelector((state) => state.todos)
  const todos = [...todosState].reverse()
  const dispatch = useDispatch()

  const handleCompleted = (id) => {
    dispatch(toggleCompletedAC(id))
  }

  const handleDelete = (id) => {
    dispatch(deleteTodoAC(id))
  }

  const handleSaveEditing = (id, text) => {
    dispatch(saveTodoAC(id, text))
  }

  return (
    <Wrap>
      <Form />
      <Statistic />
      <TodosWrap>
        {todos &&
          todos.map((item, i) => (
            <Todos
              key={item.id}
              id={item.id}
              text={item.text}
              completed={item.completed}
              length={todos.length}
              index={i}
              toggleCompleted={handleCompleted}
              handleDelete={handleDelete}
              saveEdit={handleSaveEditing}
            />
          ))}
      </TodosWrap>
    </Wrap>
  )
}

export default Todo
