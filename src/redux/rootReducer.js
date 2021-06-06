import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import todoReducer from './reducers/todos'

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose

const reducers = combineReducers({
  todos: todoReducer,
})

const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)))

export default store
