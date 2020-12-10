import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout";

export default function Post({ data }) {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;
  const postDate = frontmatter.date;
  const dateTimeFormat = new Intl.DateTimeFormat('fr', { dateStyle: 'long' });
  const formattedPostDate = dateTimeFormat.format(new Date(postDate));

  return (
    <Layout pageTitle={ frontmatter.title }>
      <article className="post">
        <header className="post__header">
          <h1>{ frontmatter.title }</h1>
          <time dateTime={frontmatter.date} className="post__date">{ formattedPostDate }</time>
        </header>
        <section className="post" dangerouslySetInnerHTML={{ __html: html }}></section>
      </article>
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
