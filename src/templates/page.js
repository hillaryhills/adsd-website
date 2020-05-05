import React from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import config from '../utils/siteConfig'
import PageBody from '../components/PageBody'
import Hero from '../components/Hero'
import Layout from '../components/layout'
import IntroPitch from '../components/IntroPitch/index'

const PageTemplate = ({ data }) => {
  const { title, heroImage, intro, descriptions, content } = data.contentfulPage

  return (
    <Layout>
      <Helmet>
        <title>{`${title} - ${config.siteTitle}`}</title>
      </Helmet>
      <Hero title={title} image={heroImage} />
      <IntroPitch intro={intro} descriptions={descriptions} />
      <PageBody content={content} />
    </Layout>
  )
}

export const query = graphql`
  query pageQuery {
    contentfulPage {
      title
      id
      slug
      intro
      descriptions {
        childMarkdownRemark {
          excerpt
        }
      }
      heroImage {
        title
        sizes(maxWidth: 1800) {
          src
        }
      }
      content {
        childMarkdownRemark {
          excerpt
        }
      }
    }
  }
`
export default PageTemplate
