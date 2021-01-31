import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Helmet } from "react-helmet"

const query = graphql`
  {
    site {
      siteMetadata {
        author
        siteTitle: title
      }
    }
  }
`
const Head = ({ title }) => {
  const {
    site: {
      siteMetadata: { siteTitle },
    },
  } = useStaticQuery(query)
  return <Helmet title={`${title} | ${siteTitle}`} />
}

export default Head
