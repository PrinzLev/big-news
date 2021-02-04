import React from "react"
import { Link, graphql } from "gatsby"
import Image from "gatsby-image"
import Layout from "../components/Layout"
import Head from "../components/Head"

export const query = graphql`
  {
    allContentfulArticles(sort: { order: DESC, fields: date }) {
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
  }
`

const ArticlesPage = ({ data }) => {
  const {
    allContentfulArticles: { nodes },
  } = data
  return (
    <Layout>
      <Head title="Articles" />
      <section className="page">
        <h1>All Articles</h1>
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

export default ArticlesPage
