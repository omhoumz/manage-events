import styled from 'styled-components'

import { blue500, blue800 } from '../theme/colors'

export const NavbarWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 60px;
  padding: 0 1em;

  color: white;
  background-color: ${blue500};
  border-bottom: 2px solid ${blue800};
`

export const NavLinksWrapper = styled.nav`
  display: flex;

  > *:not(:first-child) {
    margin-inline-start: 1em;
  }
`

export const NavLink = styled.a`
  color: inherit;

  text-decoration: none;

  :hover {
    text-decoration: underline;
  }
`

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
`

export const Logo = styled.div`
  margin-inline-start: 0.5em;

  font-size: 1.3em;
  font-weight: 300;
`
