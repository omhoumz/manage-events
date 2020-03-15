import React from 'react'
import MenuIcons from '@material-ui/icons/Menu'
import Link from 'next/link'

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
        <Link href='/' passHref>
          <NavLink>Home</NavLink>
        </Link>
        <NavLink href='#!'>Product</NavLink>
        <NavLink href='#!'>Pricing</NavLink>
      </NavLinksWrapper>
    </NavbarWrapper>
  )
}

export default Navbar
