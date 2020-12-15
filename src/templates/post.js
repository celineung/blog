import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";

export default function Post({ data }) {
  const { markdownRemark } = data;
  const { frontmatter, html, excerpt } = markdownRemark;

  const postDate = frontmatter.date;
  const dateTimeFormat = new Intl.DateTimeFormat('fr', { dateStyle: 'long' });
  const formattedPostDate = dateTimeFormat.format(new Date(postDate));
  const pathname = '/' + frontmatter.slug;
  const image = frontmatter.illustration
    ? frontmatter.illustration.childImageSharp.resize
    : null;

  return (
    <Layout
      pageTitle={frontmatter.title}
      pathname={pathname}
      image={image}
      description={excerpt}
    >
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
      excerpt
      frontmatter {
        date
        slug
        title
        illustration {
          childImageSharp {
            resize(width: 1200) {
              src
              height
              width
            }
          }
        }
      }
    }
  }
`
