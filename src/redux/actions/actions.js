import {
  SET_TODOS,
  ADD_TODO,
  TOGGLE_COMPLETED,
  DELETE_TODO,
  SAVE_TODO,
} from './actionTypes'

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
