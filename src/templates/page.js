import React from 'react'
import { Helmet } from 'react-helmet'
import config from '../utils/siteConfig'
import PageBody from '../components/PageBody'
import SEO from '../components/SEO'
import Hero from '../components/Hero'
import Layout from '../components/layout'

const PageTemplate = ({ data }) => {
  const { title, heroImage, content } = data.contentfulPage
  const postNode = data.contentfulPage

  return (
    <Layout>
      <Helmet>
        <title>{`${title} - ${config.siteTitle}`}</title>
      </Helmet>
      <SEO pagePath={slug} postNode={postNode} pageSEO />
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
