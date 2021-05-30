import React, { useState, useEffect, useRef } from 'react'
import Button from '../../../UI/Button/Button'
import Input from '../../../UI/Input/Input'

const TodoEdit = (props) => {
  const [value, setValue] = useState(props.text)
  const inputEl = useRef(null)

  useEffect(() => {
    inputEl.current.focus()
  }, [])

  const handleChange = (e) => {
    setValue(e.target.value)
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
      <Button onClick={() => props.saveEdit(props.id, value)}>Save</Button>
      &nbsp;
      <Button onClick={props.cancelEditing}>Cancel</Button>
    </>
  )
}

export default TodoEdit
