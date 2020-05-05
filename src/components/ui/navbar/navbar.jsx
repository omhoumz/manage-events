import React from 'react'
import MenuIcons from '@material-ui/icons/Menu'

import {
  NavLink,
  NavLinksWrapper,
  NavbarWrapper,
  LogoWrapper,
  Logo,
} from './navbar.styled'
import Button from '../button/button'

const Navbar = () => {
  return (
    <NavbarWrapper>
      <LogoWrapper>
        <Button onClick={() => console.log('clicked')}>
          <MenuIcons />
        </Button>
        <Logo>EvenManager</Logo>
      </LogoWrapper>
      <NavLinksWrapper>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='#!'>Product</NavLink>
        <NavLink to='#!'>Pricing</NavLink>
      </NavLinksWrapper>
    </NavbarWrapper>
  )
}

export default Navbar
