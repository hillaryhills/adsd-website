import React from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'
import styled from 'styled-components'

const Content = styled.div`
  border-radius: 2px;
  margin: 0 0 1em 0;
  width: 100%;
  display: flex;
  flex-direction: row;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
  transition: all 200ms ease-in;

  @media screen and (min-width: 320px) {
    flex: 0 0 100%;
    margin: 0 0 2vw 0;
  }
  @media screen and (min-width: 520px) {
    flex: 0 0 50%;
    margin: 0 -6px 2vw 0;
  }
  @media screen and (min-width: 768px) {
    flex: 0 0 32%;
  }
  &:hover {
    box-shadow: 0 16px 32px rgba(0, 0, 0, 0.09);
    transform: translateY(-4px);
    transition: all 0.4s ease-in;
  }
  a {
    display: flex;
    flex-flow: column;
    height: 100%;
    width: 100%;
    color: #000000;
    text-decoration: none;
    .gatsby-image-wrapper {
      height: 0;
      padding-bottom: 60%;
    }
  }
`

const Title = styled.h2`
  font-size: 18px;
  font-weight: 500;
  text-transform: capitalize;
  padding: 1em;
`

const Excerpt = styled.p`
  margin: 0 1rem 1rem 1rem;
  line-height: 1.6;
`

const Card = (props) => {
  return (
    <Content>
      <Link to={`/${props.slug}/`}>
        <Img sizes={props.image.sizes} />
        <Title>{props.title}</Title>
        <Excerpt
          dangerouslySetInnerHTML={{
            __html: props.description,
          }}
        />
      </Link>
    </Content>
  )
}

export default Card
