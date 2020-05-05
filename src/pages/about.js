import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import PageBanner from '../components/PageBanner/index'
import { Grid, Section } from '../components/Globals/index.style'
import IntroPitch from '../components/IntroPitch/index'
import PageBody from '../components/PageBody'

const AboutPage = ({ data }) => {
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

export default AboutPage

export const pageQuery = graphql`
  query AboutUsPageQuery {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulPage(
      filter: { id: { eq: "0ea85eb2-7036-5c91-91c4-0ca1bfcf6ae2" } }
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
