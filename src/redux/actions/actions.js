import axios from 'axios'
import {
  SET_LOADING,
  SET_TODOS,
  ADD_TODO,
  TOGGLE_COMPLETED,
  DELETE_TODO,
  SAVE_TODO,
  SET_ERROR,
} from './actionTypes'

export function fetchTodosAC() {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        'https://todo-a1539-default-rtdb.firebaseio.com/todos.json'
      )
      const data = Object.values(response.data)
      dispatch(setTodoFromData(...data))
    } catch (e) {
      console.log(e)
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
    payload: todos,
  }
}

export function addTodoAC(text) {
  return {
    type: ADD_TODO,
    payload: {
      id: Date.now(),
      text: text,
      completed: false,
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
