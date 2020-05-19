import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Head from "../components/head"

const IndexPage = () => {
  return (
    <Layout>
      <Head title="Home" />
      <h1>Hello.</h1>
      <h2>Haloasdasdas</h2>
      <p>
        Hubungi saya <Link to="/contact">disini</Link>
      </p>
    </Layout>
  )
}

export default IndexPage
