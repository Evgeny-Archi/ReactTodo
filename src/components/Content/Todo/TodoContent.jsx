import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Wrap, TodosWrap, EmptyTodos } from './TodoContent.elements'
import Todos from './Todos/Todos'
import Form from './Form'
import Statistic from './Statistic'
import {
  toggleCompletedAC,
  deleteTodoAC,
  saveTodoAC,
  fetchTodosAC,
} from '../../../redux/actions/actions'

const TodoContent = () => {
  const dispatch = useDispatch()

  // React.useEffect(() => {
  //   dispatch(fetchTodosAC())
  // })

  const todosState = useSelector((state) => state.todos)
  const isLoading = useSelector((state) => state.isLoading)
  const error = useSelector((state) => state.error)
  const todos = [...todosState].reverse()

  const handleCompleted = (id) => {
    dispatch(toggleCompletedAC(id))
  }

  const handleDelete = (id) => {
    dispatch(deleteTodoAC(id))
  }

  const handleSaveEditing = (id, text) => {
    dispatch(saveTodoAC(id, text))
  }

  if (isLoading) {
    return <p>Loading...</p>
  }

  if (error) {
    return <p>{error.toString()}</p>
  }

  return (
    <Wrap>
      <Form />
      <Statistic />
      <TodosWrap>
        {todos.length !== 0 ? (
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
          ))
        ) : (
          <EmptyTodos>No todos</EmptyTodos>
        )}
      </TodosWrap>
    </Wrap>
  )
}

export default TodoContent
