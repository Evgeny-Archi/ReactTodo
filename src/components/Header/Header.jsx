import React from 'react'
import { Navigation, NavigationLink } from './Header.elements'

const Header = () => {
  return (
    <Navigation>
      <NavigationLink exact to="/" activeClassName="active">
        Todo
      </NavigationLink>
      <NavigationLink to="/daily" activeClassName="active">
        Something
      </NavigationLink>
    </Navigation>
  )
}

export default Header
