import React, { useState, useEffect, useRef } from 'react'
import Button from '../../../UI/Button/Button'
import Input from '../../../UI/Input/Input'

const TodoEdit = (props) => {
  const [value, setValue] = useState(props.text)
  const [isLoading, setLoading] = useState(false)
  const inputEl = useRef(null)

  useEffect(() => {
    inputEl.current.focus()
  }, [])

  const handleChange = (e) => {
    setValue(e.target.value)
  }

  const saveEditText = () => {
    setLoading(true)
    props.saveEdit(props.id, value)
  }

  return (
    <>
      <Input
        type="text"
        value={value}
        onChange={handleChange}
        inputRef={inputEl}
      />
      &nbsp;
      <Button onClick={saveEditText} isLoading={isLoading}>
        Сохранить
      </Button>
      &nbsp;
      <Button onClick={props.cancelEditing}>Отмена</Button>
    </>
  )
}

export default TodoEdit
