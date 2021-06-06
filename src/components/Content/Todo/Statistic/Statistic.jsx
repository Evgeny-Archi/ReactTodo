import React from 'react'
import { Wrap, Item } from './Statistic.elements'

const CompletedTodos = ({ completed, todos }) => {
  const completedTodos = todos.filter(
    (todo) => todo.completed === completed
  ).length

  return <span style={{ color: '#000' }}>{completedTodos}</span>
}

const Statistic = ({ todos }) => {
  return (
    <Wrap>
      <Item>
        Завершенные: <CompletedTodos completed={true} todos={todos} />
      </Item>
      <Item>
        В процессе: <CompletedTodos completed={false} todos={todos} />
      </Item>
    </Wrap>
  )
}

export default Statistic
