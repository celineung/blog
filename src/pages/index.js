import React from "react"

import Layout from "../components/layout"
import PostCards from "../components/post-cards";

export default function IndexPage({location}) {

  return (
    <Layout
      location={location.pathname}
      pageTitle="Accueil"
      pathname="/">
      <PostCards/>
    </Layout>
  )
}
