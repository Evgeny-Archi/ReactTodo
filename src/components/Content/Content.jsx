import React from 'react'
import { Route, Switch } from 'react-router-dom'
import TodoContent from './Todo/TodoContent'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { setTodoFromData } from '../../redux/actions/actions'

const Content = () => {
  const dispatch = useDispatch()
  React.useEffect(() => {
    axios
      .get('https://todo-a1539-default-rtdb.firebaseio.com/todos.json')
      .then((response) => {
        const data = Object.values(response.data)
        dispatch(setTodoFromData(...data))
      })
  })

  return (
    <Switch>
      <Route exact path="/">
        <TodoContent />
      </Route>
      <Route path="/daily">Second</Route>
      <Route>No match</Route>
    </Switch>
  )
}

export default Content
