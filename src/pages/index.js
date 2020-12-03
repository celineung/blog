import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PostCard from "../components/post-card"

import { graphql } from "gatsby"

export const query = graphql`
  query {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            category
            date
            title
          }
          excerpt
          html
        }
      }
    }
  }
`

export default function IndexPage({data}) {
  const cards = data.allMarkdownRemark.edges;
console.log(cards)
  return (
    <Layout>
      <SEO title="Home" />
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
      <div className="post-cards">
        {cards.map(({node: card}, index) => (
          <PostCard
            key={index}
            title={card.frontmatter.title}
            date={card.frontmatter.date}
            category={card.frontmatter.category}
            excerpt={card.excerpt}
            content={card.html}
          ></PostCard>
        ))}
      </div>
    </Layout>
  )
}
