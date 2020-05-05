import React from 'react'

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
