import React from 'react'
import { Route, Switch } from 'react-router-dom'
import TodoContent from './Todo/TodoContent'

const Content = () => {
  return (
    <Switch>
      <Route exact path="/" component={TodoContent} />
      <Route path="/daily">Second</Route>
      <Route>No match</Route>
    </Switch>
  )
}

export default Content
