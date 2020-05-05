import React from 'react'
import styled from 'styled-components'

const PageBody = (props) => {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: props.content.childMarkdownRemark.html,
      }}
    />
  )
}

export default PageBody
