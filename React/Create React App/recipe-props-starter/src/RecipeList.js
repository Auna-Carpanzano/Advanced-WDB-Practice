import React, {Component} from "react";
import Recipe from "./Recipe";
import PropTypes from "prop-types";
import "./RecipeList.css";

class RecipeList extends Component {
  static defaultProps = {
    recipes: [
      {
        title: "Spaghetti",
        instructions: "Open jar of Spaghetti sauce.  Bring to simmer.  Boil water.  Cook pasta until done.  Combine pasta and sauce",
        ingredients: ["pasta", "8 cups water", "1 box spaghetti"],
        img: "https://images.unsplash.com/photo-1518675219903-c682c4b16b1d?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=28d9da11bbd83f4bab4cbeb1a8c6ad0b&auto=format&fit=crop&w=800&q=80"
      },
      {
        title: "Milkshake",
        instructions: "Combine ice cream and milk.  Blend until creamy",
        ingredients: ["2 Scoops Ice cream", "8 ounces milk"],
        img: "https://images.unsplash.com/photo-1472555794301-77353b152fb7?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b83af9eebc5b20ce552e75f917d3009d&auto=format&fit=crop&w=677&q=80"
      },
      {
        title: "Avocado Toast",
        instructions: "Toast bread.  Slice avocado and spread on bread.  Add salt, oil, and pepper to taste.",
        ingredients: ["2 slices of bread", "1 avocado", "1 tablespoon olive oil", "1 pinch of salt", "pepper"],
        img: "https://images.unsplash.com/photo-1490323814405-4aa634235c2b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=3c4012b5d286bb886843f4128ebc83d6&auto=format&fit=crop&w=1050&q=80"
      }
    ]
  }

  static propTypes = {
    recipes: PropTypes.arrayOf(PropTypes.object)
  }

  render() {
    const recipes = this.props.recipes.map((r, index) => (
      <Recipe key={index} {...r} />
    ));
    return (
      <div className="recipe-list">
        {recipes}
      </div>
    )
  }
}

export default RecipeList;