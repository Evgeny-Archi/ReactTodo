import {
  ADD_TODO,
  TOGGLE_COMPLETED,
  DELETE_TODO,
  SAVE_TODO,
} from '../actions/actionTypes'

const initialState = {
  todos: [
    { id: 1, text: 'First todo', completed: false },
    { id: 2, text: 'todo second', completed: true },
    { id: 3, text: 'todo third', completed: false },
    { id: 4, text: 'Another todo.', completed: true },
  ],
}

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
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
