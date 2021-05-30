import React from 'react'
import { InputElement } from './Input.elements'

const Input = (props) => {
  return (
    <InputElement
      type={props.type}
      value={props.value}
      placeholder={props.placeholder}
      onChange={props.onChange}
      ref={props.inputRef}
    />
  )
}

export default Input
