const Promise = require('bluebird')
const path = require('path')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  const cards = new Promise((resolve, reject) => {
    graphql(
      `
        {
          allContentfulProducts {
            edges {
              node {
                title
                slug
              }
            }
          }
        }
      `
    ).then((result) => {
      result.data.allContentfulProducts.edges.map(({ node }) => {
        createPage({
          path: `${node.slug}/`,
          component: path.resolve('./src/templates/post.js'),
          context: {
            slug: node.slug,
          },
        })
      })
      resolve()
    })
  })

  const loadPages = new Promise((resolve, reject) => {
    graphql(`
      {
        allContentfulPage {
          edges {
            node {
              slug
            }
          }
        }
      }
    `).then((result) => {
      result.data.allContentfulPage.edges.map(({ node }) => {
        createPage({
          path: `${node.slug}/`,
          component: path.resolve(`./src/templates/page.js`),
          context: {
            slug: node.slug,
          },
        })
      })
      resolve()
    })
  })

  exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
    if (stage === 'build-html') {
      actions.setWebpackConfig({
        module: {
          rules: [
            {
              test: /bad-module/,
              use: loaders.null(),
            },
          ],
        },
      })
    }
  }

  return Promise.all([cards, loadPages])
}
