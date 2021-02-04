import React from "react"
import { Link, graphql } from "gatsby"
import Image from "gatsby-image"
import Layout from "../components/Layout"
import Head from "../components/Head"

export const query = graphql`
  query CategoryTemplate($category: String!) {
    allContentfulArticles(
      filter: { category: { eq: $category } }
      sort: { fields: date, order: DESC }
    ) {
      nodes {
        slug
        excerpt
        title
        image {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
        date(formatString: "MMMM Do, YYYY")
        author
        category
      }
    }
    contentfulArticles(category: { eq: $category }) {
      category
    }
  }
`

const CategoryTemplate = ({ data }) => {
  const {
    allContentfulArticles: { nodes },
    contentfulArticles: { category: categoryTitle },
  } = data
  return (
    <Layout>
      <Head title={categoryTitle} />
      <section className="page">
        <h1>{categoryTitle}</h1>
        {nodes.map(
          ({ excerpt, title, image, date, author, category, slug, index }) => {
            return (
              <section className="article" key={index}>
                <div className="article-img">
                  <Image fluid={image.fluid} />
                </div>
                <article className="article-info">
                  <h3>{title}</h3>
                  <span className="article-category">{category}</span>
                  <div className="article-identifiers">
                    <span>by {author}</span>
                    <span>{date}</span>
                  </div>
                  <p>
                    {excerpt}{" "}
                    <Link to={`/articles/${slug}`}>Continue Reading</Link>
                  </p>
                </article>
              </section>
            )
          }
        )}
      </section>
    </Layout>
  )
}

export default CategoryTemplate
