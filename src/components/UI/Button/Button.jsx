import React from 'react'
import { ButtonElement } from './Button.elements'

const Button = (props) => {
  return (
    <ButtonElement onClick={props.onClick} disabled={props.disabled}>
      {props.children}
    </ButtonElement>
  )
}

export default Button
