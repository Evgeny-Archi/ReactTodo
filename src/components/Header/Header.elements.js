import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const Navigation = styled.nav`
  width: 60%;
  text-align: center;
`

export const NavigationLink = styled(NavLink)`
  margin: 0 10px;

  &.active {
    color: #fe4a49;
  }
`
