import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import Image from "gatsby-image"
import TinySlider from "tiny-slider-react"

const settings = {
  container: "#gutter",
  lazyload: true,
  mouseDrag: true,
  nav: false,
  controls: true,
  controlsText: ["&#10096;", "&#10097;"],
  rewind: true,
  slideBy: "page",
  items: 3,
  gutter: 10,
  responsive: {
    400: {
      items: 3,
      gutter: 10,
    },
  },
}

const query = graphql`
  {
    allContentfulArticles(sort: { order: DESC, fields: date }, limit: 15) {
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

const LatestNews = () => {
  const {
    allContentfulArticles: { nodes },
  } = useStaticQuery(query)
  return (
    <section className="latest-news">
      <h1>Latest News</h1>
      <TinySlider settings={settings}>
        {nodes.map(({ excerpt, title, image, slug }) => {
          return (
            <article>
              <Link to={`/articles/${slug}`}>
                <Image fluid={image.fluid} />
                <h2>{title}</h2>
                <p>{excerpt}</p>
              </Link>
            </article>
          )
        })}
      </TinySlider>
      <Link to="/articles" className="btn">
        See All Articles
      </Link>
    </section>
  )
}

export default LatestNews
