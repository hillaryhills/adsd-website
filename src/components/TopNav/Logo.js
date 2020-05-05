import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import ReactLogo from '../../assets/logo.svg'

const LogoWrap = styled.div`
  margin: auto 0;
  flex: 0 1 36px;

  @media (max-width: 768px) and (orientation: landscape) {
    flex: 0 1 25px;
  }

  img {
    width: 166px;
  }
`

const Logo = () => {
  return (
    <LogoWrap as={Link} to="/">
      <div>
        <img src={ReactLogo} alt="Logo" />
      </div>
    </LogoWrap>
  )
}

export default Logo
