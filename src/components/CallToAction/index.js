import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const CtaWrapper = styled.div`
  display: flex;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #3b0670;
  padding: 2em;
  color: #ffffff;
  line-height: 0.5;
`

const CtaButton = styled.button`
  padding: 15px 20px;
  font-size: 20px;
  border-radius: 4px;
  cursor: pointer;
`

const Excerpt = styled.p`
  margin: 0 1rem 1rem 1rem;
  line-height: 1.6;
  max-width: 768px;
  text-align: center;
  font-size: 18px;
`

const CtaTitle = styled.h2`
  font-weight: 700;
`

const CallToAction = (props) => {
  return (
    <CtaWrapper>
      <CtaTitle>{props.title}</CtaTitle>
      <Excerpt
        dangerouslySetInnerHTML={{
          __html: props.descriptions.childMarkdownRemark.html,
        }}
      />
      <CtaButton>{props.actionText}</CtaButton>
    </CtaWrapper>
  )
}

CallToAction.propTypes = {
  title: PropTypes.string,
  descriptions: PropTypes.string,
  actionText: PropTypes.string,
}

export default CallToAction
