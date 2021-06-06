import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Todos from './TodoItem/Todos'
import {
  fetchCompletedTodoAC,
  fetchDeleteTodoACC,
  fetchSaveEditTodo,
  fetchTodosAC,
  fetchAddTodoAC,
  setTodoFromData,
} from '../../../redux/actions/actions'
import Todo from './Todo'

const TodoContent = () => {
  const LoadingTodo = Todo(Todos)

  const dispatch = useDispatch()
  const cached = useSelector((state) => state.todos.isCached)

  React.useEffect(() => {
    if (cached) {
      const data = window.localStorage.getItem('todo')
      dispatch(setTodoFromData(JSON.parse(data)))
    } else {
      dispatch(fetchTodosAC())
    }
  }, [dispatch, cached])

  const todosState = useSelector((state) => state.todos.items)
  const isLoading = useSelector((state) => state.todos.isLoading)
  const error = useSelector((state) => state.todos.error)
  const isLoadingAtAdd = useSelector((state) => state.todos.addLoading)
  const todos = [...todosState].reverse()

  const handleCompleted = (id) => {
    let completed = null
    todos.forEach((todo) => {
      if (todo.id === id) {
        completed = !todo.completed
      }
    })
    dispatch(fetchCompletedTodoAC(id, completed))
  }

  const handleDelete = (id) => {
    dispatch(fetchDeleteTodoACC(id))
  }

  const handleSaveEditing = (id, text) => {
    dispatch(fetchSaveEditTodo(id, text))
  }

  const AddNewTodo = (text) => {
    dispatch(fetchAddTodoAC(text))
  }

  return (
    <LoadingTodo
      isLoading={isLoading}
      error={error}
      todos={todos}
      isLoadingAtAdd={isLoadingAtAdd}
      handleCompleted={handleCompleted}
      handleDelete={handleDelete}
      handleSaveEditing={handleSaveEditing}
      AddNewTodo={AddNewTodo}
    />
  )
}

export default TodoContent
