import React from 'react'
import { useSelector } from 'react-redux'
import { Wrap, Item } from './Statistic.elements'

const CompletedTodos = ({ completed }) => {
  const completedTodos = useSelector((state) => {
    return state.todos.filter((todo) => todo.completed === completed).length
  })

  return <span style={{ color: '#000' }}>{completedTodos}</span>
}

const Statistic = () => {
  return (
    <Wrap>
      <Item>
        Done Todos: <CompletedTodos completed={true} />
      </Item>
      <Item>
        Unfinished Todos: <CompletedTodos completed={false} />
      </Item>
    </Wrap>
  )
}

export default Statistic
