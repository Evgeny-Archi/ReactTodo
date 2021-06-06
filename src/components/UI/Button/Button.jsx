import React from 'react'
import { ButtonElement } from './Button.elements'
import Icon from '../../UI/SVG/Icon'

const Button = (props) => {
  return (
    <ButtonElement onClick={props.onClick} disabled={props.disabled}>
      {props.children} {props.isLoading && <Icon />}
    </ButtonElement>
  )
}

export default Button
