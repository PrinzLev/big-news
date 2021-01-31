import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import CareerList from "../components/CareerList"
import { FaSearch } from "react-icons/fa"
import Head from "../components/Head"

export const query = graphql`
  {
    allContentfulCareers {
      nodes {
        title
        location
        slug
      }
    }
  }
`

const CareersPage = ({
  data: {
    allContentfulCareers: { nodes: careers },
  },
}) => {
  const [search, setSearch] = React.useState("")
  const handleChange = e => {
    setSearch(e.target.value)
  }
  const filteredCareers = careers.filter(career => {
    return career.title.toLowerCase().includes(search.toLowerCase())
  })
  return (
    <Layout>
      <Head title="Careers" />
      <section className="careers-page">
        <div className="search-field">
          <input
            type="search"
            name="searchfield"
            placeholder="Search Jobs"
            autoComplete="off"
            onChange={handleChange}
          />
          <FaSearch className="search-icon" />
        </div>
        <CareerList careers={filteredCareers} />
      </section>
    </Layout>
  )
}

export default CareersPage
