import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Input from '../../UI/Input/Input'
import Button from '../../UI/Button/Button'
import { Wrap } from './Form.elements'
import { addTodoAC } from '../../../redux/actions/actions'

const Form = () => {
  const [value, setValue] = useState('')
  const [disabled, setDisabled] = useState(true)
  const dispatch = useDispatch()

  const handleAdd = () => {
    if (value !== 0) {
      dispatch(addTodoAC(value))
      setValue('')
    }
  }

  useEffect(() => {
    value.length !== 0 ? setDisabled(false) : setDisabled(true)
  }, [value])

  return (
    <Wrap>
      <Input
        type="text"
        placeholder="What todo?.."
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <Button onClick={handleAdd} disabled={disabled}>
        Add
      </Button>
    </Wrap>
  )
}

export default Form
