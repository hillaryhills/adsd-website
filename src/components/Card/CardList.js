import React from 'react'
import { Row, Col } from 'react-flexbox-grid'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  margin: 0 auto;
  padding: 10px;
  &::after {
    content: '';
    flex: 0 0 32%;
  }
`

const CardList = (props) => {
  return <Wrapper>{props.children}</Wrapper>
}

export default CardList
