import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left

  @media (min-width: 992px) {
    padding 0 5em;
    max-width: 948px
  }
`

const Excerpt = styled.p`
  margin: 0 1rem 1rem 1rem;
  line-height: 1.6;
`

const Header = styled.h1`
  border-bottom: solid 1px #673ab7;
  padding: 18px 0;
`

const IntroPitch = (props) => {
  return (
    <Wrapper>
      <Header>{props.intro}</Header>
      <Excerpt
        dangerouslySetInnerHTML={{
          __html: props.descriptions.childMarkdownRemark.html,
        }}
      />
    </Wrapper>
  )
}

export default IntroPitch

IntroPitch.propTypes = {
  intro: PropTypes.string,
  descriptions: PropTypes.string,
}
