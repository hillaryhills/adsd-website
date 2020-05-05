import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Layout from '../components/layout'
import PageBanner from '../components/PageBanner/index'
import IntroPitch from '../components/IntroPitch/index'
import CardList from '../components/Card/CardList'
import Card from '../components/Card/Card'
import { Grid, Section } from '../components/Globals/index.style'
import FeaturedCard from '../components/FeaturedCard/index'
import CallToAction from '../components/CallToAction/index'

const Index = ({ data }) => {
  const products = data.allContentfulProducts.edges

  return (
    <>
      <Layout>
        <PageBanner
          image={data.allContentfulBanner.edges[0].node.image.file.url}
          title={data.allContentfulBanner.edges[0].node.title}
          subtitle={data.allContentfulBanner.edges[0].node.subtitle}
        />
        <Section>
          <Grid>
            <IntroPitch
              intro={data.allContentfulIntroduction.edges[0].node.title}
              descriptions={
                data.allContentfulIntroduction.edges[0].node.descriptions
              }
            />
          </Grid>
        </Section>
        <Section>
          <Grid>
            <CardList>
              {products.map(({ node: product }) => (
                <Card
                  key={product.id}
                  slug={product.slug}
                  image={product.heroImage}
                  title={product.title}
                  excerpt={product.descriptions}
                />
              ))}
            </CardList>
          </Grid>
        </Section>
        <Section>
          <CallToAction
            title={data.allContentfulCallToAll.edges[0].node.title}
            descriptions={
              data.allContentfulCallToAll.edges[0].node.descriptions
            }
            actionText={data.allContentfulCallToAll.edges[0].node.actionText}
          />
        </Section>
        <Section>
          <Grid>
            <FeaturedCard
              title={data.allContentfulFeaturedCard.edges[0].node.title}
              image={data.allContentfulFeaturedCard.edges[0].node.heroImage}
              descriptions={
                data.allContentfulFeaturedCard.edges[0].node.descriptions
              }
            />
          </Grid>
        </Section>
      </Layout>
    </>
  )
}

export default Index

export const pageQuery = graphql`
  query LandingPageQuery {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulBanner {
      edges {
        node {
          image {
            file {
              url
            }
          }
          subtitle
          title
        }
      }
    }
    allContentfulIntroduction {
      edges {
        node {
          title
          descriptions {
            childMarkdownRemark {
              html
              excerpt(pruneLength: 80)
            }
          }
        }
      }
    }
    allContentfulFeaturedCard {
      edges {
        node {
          title
          descriptions {
            childMarkdownRemark {
              html
              excerpt(pruneLength: 80)
            }
          }
          heroImage {
            sizes(maxWidth: 380, resizingBehavior: SCALE) {
              ...GatsbyContentfulSizes_withWebp_noBase64
            }
          }
        }
      }
    }
    allContentfulCallToAll {
      edges {
        node {
          title
          descriptions {
            childMarkdownRemark {
              html
              excerpt(pruneLength: 80)
            }
          }
          actionText
        }
      }
    }
    allContentfulProducts {
      edges {
        node {
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
              ...GatsbyContentfulSizes_withWebp_noBase64
            }
          }
        }
      }
    }
  }
`
