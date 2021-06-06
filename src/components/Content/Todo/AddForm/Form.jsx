import React, { useState, useEffect, useRef } from 'react'
import Input from '../../../UI/Input/Input'
import Button from '../../../UI/Button/Button'
import { Wrap } from './Form.elements'

const Form = (props) => {
  const [value, setValue] = useState('')
  const [disabled, setDisabled] = useState(true)
  const [isLoading, setLoading] = useState(false)
  const addInput = useRef(null)

  const handleAdd = () => {
    if (value !== 0) {
      setLoading(true)
      props.AddNewTodo(value)
      setValue('')
    }
  }

  useEffect(() => {
    addInput.current.focus()
    value.length !== 0 ? setDisabled(false) : setDisabled(true)
  }, [value])

  return (
    <Wrap>
      <Input
        type="text"
        placeholder="Что сделать?.."
        value={value}
        onChange={(e) => setValue(e.target.value)}
        inputRef={addInput}
      />
      <Button onClick={handleAdd} disabled={disabled} isLoading={isLoading}>
        Добавить
      </Button>
    </Wrap>
  )
}

export default Form
