import {
  SET_LOADING,
  SET_TODOS,
  ADD_TODO,
  TOGGLE_COMPLETED,
  DELETE_TODO,
  SAVE_TODO,
  SET_ERROR,
} from '../actions/actionTypes'

const initialState = {
  todos: [],
  isLoading: false,
  error: null,
}

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      }
    case SET_ERROR:
      return {
        ...state,
        error: action.payload,
      }
    case SET_TODOS:
      return {
        todos: [...state.todos, ...action.payload],
      }
    case ADD_TODO:
      return {
        todos: [...state.todos, action.payload],
      }
    case TOGGLE_COMPLETED:
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id === +action.payload.id) {
            return { ...todo, completed: !todo.completed }
          }
          return todo
        }),
      }
    case DELETE_TODO:
      return {
        todos: [...state.todos.filter((todo) => todo.id !== action.payload.id)],
      }
    case SAVE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id === +action.payload.id) {
            return { ...todo, text: action.payload.text }
          }
          return todo
        }),
      }
    default:
      return state
  }
}

export default todoReducer
