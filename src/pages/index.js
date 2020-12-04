import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PostCard from "../components/post-card"

import { graphql } from "gatsby"

export default function IndexPage({data, location}) {
  const cards = data.allMarkdownRemark.edges;

  return (
    <Layout location={location.pathname}>
      <SEO
        lang="fr"
        title="Blog - Céline Ung"
      />
      <div className="post-cards">
        {cards.map(({node: card}, index) => (
          <Link
            to={card.frontmatter.slug}
            key={index}
          >
            <PostCard
              title={card.frontmatter.title}
              date={card.frontmatter.date}
              category={card.frontmatter.category}
              excerpt={card.excerpt}
              content={card.html}
            ></PostCard>
          </Link>
        ))}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark (
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          id
          frontmatter {
            category
            date(
              formatString: "DD MMMM YYYY"
              locale: "fr-FR"
            )
            slug
            title
          }
          excerpt
          html
        }
      }
    }
  }
`
