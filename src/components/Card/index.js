import React from 'react'
import PropTypes from 'prop-types'
import { Content, Wrapper } from './styles'
import { Row, Col } from 'react-flexbox-grid'
//import Img from 'gatsby-image'

const Cards = ({ cardgrids }) => {
  return (
    <Wrapper className="columns is-multiline">
      <Row>
        {cardgrids.map((card, i) => (
          <Col xs={12} md={6} lg={4} key={i}>
            <Content>{card.title}</Content>
          </Col>
        ))}
      </Row>
    </Wrapper>
  )
}

Cards.propTypes = {
  cardgrids: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
    })
  ),
}
export default Cards
