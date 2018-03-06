import React, { Component } from 'react';
import Recipe from "./Recipe";
import RecipeInput from "./RecipeInput";
import Navbar from "./Navbar";
import RecipeList from "./RecipeList";
import './RecipeApp.css';

class RecipeApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: [
        {
          id: 0,
          title: "Spaghetti",
          instructions: "Open jar of Spaghetti sauce.  Bring to simmer.  Boil water.  Cook pasta until done.  Combine pasta and sauce",
          ingredients: ["pasta", "8 cups water", "1 box spaghetti"],
          img: "https://images.unsplash.com/photo-1518675219903-c682c4b16b1d?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=28d9da11bbd83f4bab4cbeb1a8c6ad0b&auto=format&fit=crop&w=800&q=80"
        },
        {
          id: 1,
          title: "Milkshake",
          instructions: "Combine ice cream and milk.  Blend until creamy",
          ingredients: ["2 Scoops Ice cream", "8 ounces milk"],
          img: "https://images.unsplash.com/photo-1472555794301-77353b152fb7?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b83af9eebc5b20ce552e75f917d3009d&auto=format&fit=crop&w=677&q=80"
        },
        {
          id: 2,
          title: "Avocado Toast",
          instructions: "Toast bread.  Slice avocado and spread on bread.  Add salt, oil, and pepper to taste.",
          ingredients: ["2 slices of bread", "1 avocado", "1 tablespoon olive oil", "1 pinch of salt", "pepper"],
          img: "https://images.unsplash.com/photo-1490323814405-4aa634235c2b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=3c4012b5d286bb886843f4128ebc83d6&auto=format&fit=crop&w=1050&q=80"
        }
      ],
      nextRecipeId: 3,
    }
    this.handleSave = this.handleSave.bind(this);
  }
  
  handleSave(recipe) {
    this.setState((prevState, props) => {
      const newRecipe = {...recipe, id: this.state.nextRecipeId};
      return {
        nextRecipeId: prevState.nextRecipeId + 1,
        recipes: [...this.state.recipes, newRecipe]
      }
    });
  }
  
  render() {
    return (
      <div className="App">
        <Navbar />
        <RecipeInput onSave={this.handleSave} />
        <RecipeList recipes={this.state.recipes} />
      </div>
    );
  }
}

export default RecipeApp;
