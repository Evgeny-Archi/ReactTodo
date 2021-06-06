import {
  SET_LOADING,
  SET_TODOS,
  ADD_TODO,
  TOGGLE_COMPLETED,
  DELETE_TODO,
  SAVE_TODO,
  SET_ERROR,
} from './actionTypes'

import { fetchTodos } from './axios-todo'

export function fetchTodosAC() {
  return async (dispatch) => {
    dispatch(setLoadingAC(true))

    try {
      const response = await fetchTodos({
        url: 'https://todo-a1539-default-rtdb.firebaseio.com/todos.json',
      })

      const data = []
      Object.keys(response.data || []).forEach((key) => {
        data.push({
          id: key,
          text: response.data[key].text,
          completed: response.data[key].completed,
        })
      })

      dispatch(setTodoFromData(data))

      window.localStorage.setItem('todo', JSON.stringify(data))
    } catch (e) {
      dispatch(setLoadingAC(false))
      dispatch(setError(e))
    }
  }
}

export function fetchAddTodoAC(text) {
  return async (dispatch) => {
    const data = {
      text: text,
      completed: false,
    }

    try {
      const response = await fetchTodos({
        method: 'post',
        url: 'https://todo-a1539-default-rtdb.firebaseio.com/todos.json',
        data: { ...data },
      })

      data.id = response.data.name
      dispatch(addTodoAC(data))

      const localData = JSON.parse(window.localStorage.getItem('todo'))
      localData.push(data)
      window.localStorage.setItem('todo', JSON.stringify(localData))
    } catch (e) {
      dispatch(setError(e))
    }
  }
}

export function fetchDeleteTodoACC(id) {
  return async (dispatch) => {
    try {
      await fetchTodos({
        method: 'delete',
        url:
          'https://todo-a1539-default-rtdb.firebaseio.com/todos/' +
          id +
          '.json',
      })
      dispatch(deleteTodoAC(id))

      const localData = JSON.parse(window.localStorage.getItem('todo')).filter(
        (todo) => todo.id !== id
      )
      window.localStorage.setItem('todo', JSON.stringify(localData))
    } catch (e) {
      dispatch(setError(e))
    }
  }
}

export function fetchCompletedTodoAC(id, completed) {
  return async (dispatch) => {
    dispatch(toggleCompletedAC(id))

    const localData = JSON.parse(window.localStorage.getItem('todo')).map(
      (todo) => {
        if (todo.id === id) {
          todo.completed = completed
        }
        return todo
      }
    )
    window.localStorage.setItem('todo', JSON.stringify(localData))

    try {
      await fetchTodos({
        method: 'patch',
        url:
          'https://todo-a1539-default-rtdb.firebaseio.com/todos/' +
          id +
          '.json',
        data: {
          completed,
        },
      })
    } catch (e) {
      dispatch(setError(e))
    }
  }
}

export function fetchSaveEditTodo(id, text) {
  return async (dispatch) => {
    try {
      await fetchTodos({
        method: 'patch',
        url:
          'https://todo-a1539-default-rtdb.firebaseio.com/todos/' +
          id +
          '.json',
        data: {
          text,
        },
      })

      dispatch(saveTodoAC(id, text))

      const localData = JSON.parse(window.localStorage.getItem('todo')).map(
        (todo) => {
          if (todo.id === id) {
            todo.text = text
          }
          return todo
        }
      )
      window.localStorage.setItem('todo', JSON.stringify(localData))
    } catch (e) {
      dispatch(setError(e))
    }
  }
}

export function setError(error) {
  return {
    type: SET_ERROR,
    payload: error,
  }
}

export function setLoadingAC(isLoading) {
  return {
    type: SET_LOADING,
    payload: isLoading,
  }
}

export function setTodoFromData(todos) {
  return {
    type: SET_TODOS,
    payload: {
      todos,
    },
  }
}

export function addTodoAC(data) {
  return {
    type: ADD_TODO,
    payload: {
      ...data,
    },
  }
}

export function toggleCompletedAC(id) {
  return {
    type: TOGGLE_COMPLETED,
    payload: {
      id: id,
    },
  }
}

export function deleteTodoAC(id) {
  return {
    type: DELETE_TODO,
    payload: {
      id: id,
    },
  }
}

export function saveTodoAC(id, text) {
  return {
    type: SAVE_TODO,
    payload: {
      id: id,
      text: text,
    },
  }
}
