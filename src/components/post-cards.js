import React from "react";
import { graphql, Link, useStaticQuery } from "gatsby";
import PostCard from "./post-card";
import { sortBy, uniq } from 'lodash';

export default function PostCards() {
  const data = useStaticQuery(graphql`
    query PostsQuery {
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
  `);
  const cards = data.allMarkdownRemark.edges;
  const sortedCards = sortBy(cards, (card) => card.node.frontmatter.category);

  const sortedCategories = uniq(sortedCards.map(({node: card}) => card.frontmatter.category));

  return (
    <div className="post-cards">
      <div className="post-cards__categories">
        {sortedCategories.map((category) => (
           <button key={category} type="button">{category}</button>
        ))}
      </div>
      <div className="post-cards__main">
        {cards.map(({node: card}) => (
          <Link
            key={card.frontmatter.slug}
            to={card.frontmatter.slug}
          >
            <PostCard
              title={card.frontmatter.title}
              date={card.frontmatter.date}
              category={card.frontmatter.category}
              excerpt={card.excerpt}
              gatsyImage={card.frontmatter.illustration.childImageSharp.fluid}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
