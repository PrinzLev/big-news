const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(
    `
      {
        allContentfulArticles {
          distinct(field: category)
          nodes {
            article: slug
          }
        }
        allContentfulCareers {
          nodes {
            career: slug
          }
        }
      }
    `
  )
  result.data.allContentfulArticles.nodes.forEach(({ article }) => {
    createPage({
      path: `/articles/${article}`,
      component: path.resolve(`./src/templates/article-template.js`),
      context: {
        article,
      },
    })
  })
  result.data.allContentfulArticles.distinct.forEach(category => {
    createPage({
      path: `/${category.toLowerCase()}`,
      component: path.resolve(`./src/templates/category-template.js`),
      context: {
        category,
      },
    })
  })
  result.data.allContentfulCareers.nodes.forEach(({ career }) => {
    createPage({
      path: `/careers/${career}`,
      component: path.resolve(`./src/templates/career-template.js`),
      context: {
        career,
      },
    })
  })
}
exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === "build-html") {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /tiny-slider-react/,
            use: loaders.null(),
          },
        ],
      },
    })
  }
}
