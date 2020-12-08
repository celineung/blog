import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout";

export default function Post({ data }) {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark

  return (
    <Layout pageTitle={ frontmatter.title }>
      <div className="post">
        <header className="post__header">
          <h1>{ frontmatter.title }</h1>
          <div className="post__date">{ frontmatter.date }</div>
        </header>
        <article className="post" dangerouslySetInnerHTML={{ __html: html }}></article>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String) {
    markdownRemark(frontmatter: { slug: {eq: $slug} } ) {
      html
      frontmatter {
        date
        slug
        title
      }
    }
  }
`
