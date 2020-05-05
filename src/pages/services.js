import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Layout from '../components/layout'
import PageBanner from '../components/PageBanner/index'
import { Grid, Section } from '../components/Globals/index.style'
import IntroPitch from '../components/IntroPitch/index'
import PageBody from '../components/PageBody'

const ServicePage = ({ data }) => {
  console.log(data)
  return (
    <>
      <Layout>
        <PageBanner
          image={data.allContentfulPage.edges[0].node.heroImage.file.url}
          title={data.allContentfulPage.edges[0].node.title}
          subtitle={data.allContentfulPage.edges[0].node.subtitle}
        />
        <Section>
          <Grid>
            <IntroPitch
              intro={data.allContentfulPage.edges[0].node.intro}
              descriptions={data.allContentfulPage.edges[0].node.descriptions}
            />
            <PageBody content={data.allContentfulPage.edges[0].node.content} />
          </Grid>
        </Section>
      </Layout>
    </>
  )
}

export default ServicePage

export const pageQuery = graphql`
  query ServicePageQuery {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulPage(
      filter: { id: { eq: "dddc03b7-44f0-52f1-93b5-b41ed0ea8b78" } }
    ) {
      edges {
        node {
          id
          title
          slug
          intro
          subtitle
          descriptions {
            childMarkdownRemark {
              html
              excerpt(pruneLength: 80)
            }
          }
          heroImage {
            file {
              url
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
    }
  }
`
