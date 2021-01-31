import React from "react"
import Layout from "../components/Layout"
import Header from "../components/Header"
import CategoriesSection from "../components/CategoriesSection"
import LatestNews from "../components/LatestNews"
import NewsletterForm from "../components/NewsletterForm"
import Head from "../components/Head"

export default function Home() {
  return (
    <Layout>
      <Head title="Home" />
      <Header />
      <hr />
      <CategoriesSection />
      <hr />
      <LatestNews />
      <NewsletterForm />
    </Layout>
  )
}
