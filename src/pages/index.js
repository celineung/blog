import React from "react"
import { Link, graphql } from "gatsby"
import { sortBy, uniq } from 'lodash';

import Layout from "../components/layout"
import PostCard from "../components/post-card"

export default function IndexPage({data, location}) {
  const cards = data.allMarkdownRemark.edges;
  const sortedCards = sortBy(cards, (card) => card.node.frontmatter.category);
  
  const sortedCategories = uniq(sortedCards.map(({node: card}) => card.frontmatter.category));

  return (
    <Layout
      location={location.pathname}
      pageTitle="Accueil"
      pathname="/">
      <div>
          {sortedCategories.map((category) => (
              <div>{category}</div>
          ))}
      </div>
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
              gatsyImage={card.frontmatter.illustration.childImageSharp.fluid}
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
            date
            illustration {
              childImageSharp {
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
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
