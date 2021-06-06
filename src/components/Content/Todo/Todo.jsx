import React from 'react'
import { Wrap, TodosWrap, EmptyTodos } from './Todo.elements'
import Form from './AddForm/Form'
import Statistic from './Statistic/Statistic'

const Todo = (Component) => {
  return function LoadingComponent(props) {
    if (props.isLoading) return <div>Loading...</div>
    if (props.error)
      return (
        <div>
          Ошибка:
          <div
            style={{
              background: '#ccc',
              borderRadius: '5px',
              padding: '10px 20px',
            }}
          >
            {props.error.toString()}
          </div>
          <br />
          Пожалуйста, обновите страницу.
        </div>
      )

    return (
      <Wrap>
        <Form
          AddNewTodo={props.AddNewTodo}
          isLoadingAtAdd={props.isLoadingAtAdd}
        />
        <Statistic todos={props.todos} />
        <TodosWrap>
          {props.todos.length !== 0 ? (
            props.todos.map((item, i) => (
              <Component
                key={item.id}
                id={item.id}
                text={item.text}
                completed={item.completed}
                length={props.todos.length}
                index={i}
                toggleCompleted={props.handleCompleted}
                handleDelete={props.handleDelete}
                saveEdit={props.handleSaveEditing}
              />
            ))
          ) : (
            <EmptyTodos>Ваш список задач пуст.</EmptyTodos>
          )}
        </TodosWrap>
      </Wrap>
    )
  }
}

export default Todo
