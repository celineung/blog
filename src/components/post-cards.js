import React from "react";
import {  Link } from "gatsby";

import { sortBy, uniqBy } from 'lodash';
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import PostCard from "./post-card";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: [],
      cards: this.props.cards,
      displayedCards: this.props.cards
    };
  }

  componentDidMount() {
    const sortedCards = sortBy(this.state.cards, (card) => card.frontmatter.category);
    const categories = uniqBy(sortedCards.map((card) => {
      return {
        name: card.frontmatter.category,
        selected: false
      }
    }), 'name');

    this.setState({ categories: categories });
  };

  selectCategory = (categoryToUpdate) => {
    const updatedCategories = this.state.categories.map((category) => {
      if (category.name === categoryToUpdate) {
        category.selected = !category.selected;
      }
      return category;
    });
    this.setState({ categories: updatedCategories });
    const selectedCategories = this.getSelectedCategoryNames();
    this.filterCardsByCategories(selectedCategories)
  };

  getSelectedCategoryNames() {
    let selectedCategoriesNames = this.state.categories
      .filter((category) => category.selected)
      .map((category) => category.name);

    if(selectedCategoriesNames.length === 0) {
      selectedCategoriesNames = this.state.categories
        .map((category) => category.name);
    }
  
    return selectedCategoriesNames;
  }

  filterCardsByCategories(categories) {
    const updatedCards = this.state.cards.filter((card) => {
      return categories.includes(card.frontmatter.category);
    });
    this.setState({ displayedCards: updatedCards });
  }

  render() {
    return (
      <div className="post-cards">
        <div className="post-cards__categories">
          {this.state.categories.map((category) => (
             <button key={category.name}
                     type="button"
                     onClick={() => this.selectCategory(category.name)}
                     aria-pressed={category.selected}
                     className={`post-cards-categories__category post-cards-categories__category--${category.selected ? "selected" : "no-selected"}`}>
               <span>{category.name}</span>
               { category.selected && <FontAwesomeIcon icon={faTimes} aria-hidden="true"/> }
             </button>
          ))}
        </div>
        <div className="post-cards__main">
          {this.state.displayedCards.map((card) => (
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
}
