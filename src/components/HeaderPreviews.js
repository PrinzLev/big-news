import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

const query = graphql`
  {
    allContentfulArticles(
      filter: { slug: { ne: "flights-cancelled-due-to-covid" } }
      sort: { order: DESC, fields: date }
      limit: 3
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
      }
    }
  }
`
const HeaderPreviews = () => {
  const {
    allContentfulArticles: { nodes },
  } = useStaticQuery(query)
  return (
    <section className="header-previews">
      {nodes.map(({ slug, excerpt, title, image }) => {
        return (
          <Link to={`/articles/${slug}`}>
            <Image fluid={image.fluid} />
            <h2>{title}</h2>
            <p>{excerpt}</p>
          </Link>
        )
      })}
    </section>
  )
}

export default HeaderPreviews
