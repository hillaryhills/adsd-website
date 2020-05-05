import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
  border=radius: 4px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);

  @media (min-width: 768px) {
    flex-direction: row;
  }
`

const ImgWrapper = styled.div`
  display: inline-block;
  position: relative;
  overflow: hidden;
  height: 160px;
  max-height: 50vw;
  @supports (display: flex) {
    flex: 1;
  }

  @media (min-width: 320px) {
    flex: 1;
    height: auto;
    min-height: 45vh;
    max-height: 100%;

    @supports (display: flex) {
      min-height: auto;
    }
  }
`

const Excerpt = styled.p`
  margin: 0 1rem 1rem 1rem;
  line-height: 1.6;
`
const FeaturedCardImg = styled(Img)`
  width: 100%;
  height: 100%;
  flex: 1;

  @supports (object-fit: cover) {
    object-fit: cover;
`

const Text = styled.div`
  @supports (display: flex) {
    flex: 1;
  }
  padding: 32px;

  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    flex: 1;
    justify-content: center;
    margin: 34px 0;
    padding: 48px;
  }
`

const FeaturedCard = (props) => {
  return (
    <Wrapper>
      <ImgWrapper>
        <FeaturedCardImg sizes={props.image.sizes} />
      </ImgWrapper>
      <Text>
        <p>{props.title}</p>
        <Excerpt
          dangerouslySetInnerHTML={{
            __html: props.descriptions.childMarkdownRemark.html,
          }}
        />
      </Text>
    </Wrapper>
  )
}

FeaturedCard.propTypes = {
  title: PropTypes.string,
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  descriptions: PropTypes.string,
}

export default FeaturedCard
