import React from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import config from '../utils/siteConfig'
import IntroPitch from '../components/IntroPitch/index'
import PageBody from '../components/PageBody'
import Layout from '../components/layout'
import { Grid, Section } from '../components/Globals/index.style'
import Hero from '../components/Hero'

const PostTemplate = ({ data }) => {
  const {
    title,
    heroImage,
    intro,
    descriptions,
    content,
  } = data.contentfulProducts
  console.log(data)
  return (
    <Layout>
      <Helmet>
        <title>{`${title} - ${config.siteTitle}`}</title>
      </Helmet>
      <Hero title={title} image={heroImage} />
      <Section>
        <Grid>
          <IntroPitch intro={intro} descriptions={descriptions} />
          <PageBody content={content} />
        </Grid>
      </Section>
    </Layout>
  )
}

export default PostTemplate

export const pageQuery = graphql`
  query PostQuery($slug: String!) {
    contentfulProducts(slug: { eq: $slug }) {
      title
      id
      slug
      intro
      descriptions {
        childMarkdownRemark {
          html
          excerpt(pruneLength: 80)
        }
      }
      heroImage {
        title
        sizes(maxWidth: 1800) {
          srcSet
        }
      }
      content {
        childMarkdownRemark {
          html
          excerpt(pruneLength: 80)
        }
      }
    }
  }
`
