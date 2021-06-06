import React from 'react'
import { Route, Switch } from 'react-router-dom'
import TodoContainer from './Todo/TodoContainer'

const Content = () => {
  return (
    <Switch>
      <Route exact path="/">
        <TodoContainer />
      </Route>
      <Route path="/daily">New feature coming soon...</Route>
      <Route>No match</Route>
    </Switch>
  )
}

export default Content
