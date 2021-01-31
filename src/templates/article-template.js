import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Image from "gatsby-image"
import Head from "../components/Head"

export const query = graphql`
  query MyQuery($article: String!) {
    contentfulArticles(slug: { eq: $article }) {
      author
      category
      content {
        content
      }
      date(formatString: "MMMM Do, YYYY")
      title
      image {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
    }
  }
`

const articleTemplate = ({
  data: {
    contentfulArticles: {
      author,
      category,
      content: { content },
      date,
      title,
      image,
    },
  },
}) => {
  return (
    <Layout>
      <Head title={title} />
      <section className="article-template">
        <div className="template-img">
          <Image fluid={image.fluid} />
        </div>
        <h1>{title}</h1>
        <article>
          <p style={{ whiteSpace: "pre-line" }}>{content}</p>
        </article>
        <hr />
        <div className="template-identifier">
          <span>by {author}</span>
          <span className="category">{category}</span>
          <span>{date}</span>
        </div>
      </section>
    </Layout>
  )
}

export default articleTemplate
