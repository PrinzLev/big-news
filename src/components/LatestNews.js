import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import Image from "gatsby-image"
import Carousel from "@brainhubeu/react-carousel"
import "@brainhubeu/react-carousel/lib/style.css"
import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io"

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
      <Carousel
        arrowLeft={<IoMdArrowDropleft className="arrow-icon" />}
        arrowRight={<IoMdArrowDropright className="arrow-icon" />}
        addArrowClickHandler
        slidesPerPage={3}
        slidesPerScroll={3}
        animationSpeed={1500}
        infinite
        itemWidth={420}
      >
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
      </Carousel>
      <Link to="/articles" className="btn">
        See All Articles
      </Link>
    </section>
  )
}

export default LatestNews
