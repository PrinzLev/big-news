import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { ImLocation } from "react-icons/im"
import Head from "../components/Head"

export const query = graphql`
  query CareerQuery($career: String!) {
    contentfulCareers(slug: { eq: $career }) {
      title
      location
      description {
        raw
      }
    }
  }
`

const CareerTemplate = ({
  data: {
    contentfulCareers: { title, location, description },
  },
}) => {
  return (
    <Layout>
      <Head title={`${title} Job`} />
      <section className="career-template">
        <section>
          <h1>{title}</h1>
          <span>
            <ImLocation /> {location}
          </span>
          <article className="career-desc">
            {documentToReactComponents(JSON.parse(description.raw))}
            <strong style={{ fontSize: "1.2rem" }}>
              CONTACT us at <u>careers@bignews.com</u>, if you fit bill.
            </strong>
          </article>
        </section>
      </section>
    </Layout>
  )
}

export default CareerTemplate
