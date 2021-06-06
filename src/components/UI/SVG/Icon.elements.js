import styled, { keyframes } from 'styled-components'

const rotate = keyframes`
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
`

export const SvgIcon = styled.svg`
  width: 14px;
  height: 14px;
  animation: ${rotate} 1s linear infinite;
`
