import styled from 'styled-components'

export const NavbarWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 60px;
  padding: 0 1em;

  background-color: #0d66aa;
  color: white;
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
`

export const Logo = styled.div`
  margin-inline-start: 0.5em;

  font-size: 1.3em;
  font-weight: 300;
`
