import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

const query = graphql`
  {
    contentfulArticles(slug: { eq: "flights-cancelled-due-to-covid" }) {
      author
      category
      excerpt
      date(formatString: "MMMM Do, YYYY")
      slug
      title
      image {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
    }
  }
`
const HeaderMain = () => {
  const data = useStaticQuery(query)
  const {
    contentfulArticles: {
      author,
      category,
      excerpt,
      date,
      slug,
      title,
      image: { fluid },
    },
  } = data
  return (
    <section className="header-main">
      <div className="main-img">
        <Image fluid={fluid} />
      </div>
      <article className="main-desc">
        <Link to={`articles/${slug}`}>
          <h2>{title}</h2>
        </Link>
        <span className="category">{category}</span>
        <div className="identifiers">
          <span>by {author}</span>
          <span>{date}</span>
        </div>
        <p>{excerpt}</p>
        <div className="main-btn">
          <Link to={`articles/${slug}`}>Read More</Link>
        </div>
      </article>
    </section>
  )
}

export default HeaderMain
