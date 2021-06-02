import React from 'react'
import { Route, Switch } from 'react-router-dom'
import TodoContainer from './Todo/TodoContent'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import {
  setTodoFromData,
  setLoadingAC,
  setError,
} from '../../redux/actions/actions'

const Content = () => {
  const dispatch = useDispatch()
  React.useEffect(() => {
    dispatch(setLoadingAC(true))
    axios
      .get('https://todo-a1539-default-rtdb.firebaseio.com/todos.json')
      .then((response) => {
        const data = Object.values(response.data)
        dispatch(setTodoFromData(...data))
        dispatch(setLoadingAC(false))
      })
      .catch((e) => {
        dispatch(setLoadingAC(false))
        dispatch(setError(e))
      })
  })

  return (
    <Switch>
      <Route exact path="/">
        <TodoContainer />
      </Route>
      <Route path="/daily">Second</Route>
      <Route>No match</Route>
    </Switch>
  )
}

export default Content
