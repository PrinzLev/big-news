import React from "react"
import Layout from "../components/Layout"
import { Link } from "gatsby"
import { AiFillWarning } from "react-icons/ai"
import Head from "../components/Head"
const ErrorPage = () => {
  return (
    <Layout>
      <Head title="Error" />
      <section className="error-page">
        <section>
          <h2>
            <AiFillWarning className="error-icon" /> <br />
            Sorry, this page is either under maintainance or does not exist.
          </h2>
          <Link to="/" className="btn">
            Back To Home
          </Link>
        </section>
      </section>
    </Layout>
  )
}

export default ErrorPage
