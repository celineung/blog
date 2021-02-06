import React from "react"
import { graphql } from "gatsby";

import Layout from "../components/layout"
import PostCards from "../components/post-cards";

export default function IndexPage({data, location}) {

  const cards = data.allMarkdownRemark.edges.map((card) => card.node);

  return (
    <Layout
      location={location.pathname}
      pageTitle="Accueil"
      pathname="/">
      <PostCards cards={cards}/>
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
`;
