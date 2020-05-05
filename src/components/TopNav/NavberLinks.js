import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const NavItem = styled(Link)`
  text-decoration: none;
  color: #673ab7;
  display: inline-block;
  white-space: nowrap;
  margin: 0 1vw;
  transition: all 200ms ease-in;
  position: relative;

  :after {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 0%;
    content: '.';
    color: transparent;
    background: #373f49;
    height: 1px;
    transition: all 0.4s ease-in;
  }

  :hover {
    color: #373f49;
    ::after {
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    padding: 20px 0;
    font-size: 1.5rem;
    z-index: 6;
  }
`

const NavbarLinks = () => {
  return (
    <>
      <NavItem to="/">Home</NavItem>
      <NavItem to="/about">About</NavItem>
      <NavItem to="/services">Services</NavItem>
      <NavItem to="/resources">Resources</NavItem>
    </>
  )
}

export default NavbarLinks
