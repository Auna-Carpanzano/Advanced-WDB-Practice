import React, { Component } from 'react';
import Recipe from "./Recipe";
import Navbar from "./Navbar";
import RecipeList from "./RecipeList";
import './RecipeApp.css';

class RecipeApp extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Recipe title="pasta" 
                ingredients={["flour", "water"]}
                instructions="Mix ingredients"
                img="https://images.unsplash.com/photo-1518675219903-c682c4b16b1d?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=28d9da11bbd83f4bab4cbeb1a8c6ad0b&auto=format&fit=crop&w=800&q=80"
        />
      </div>
    );
  }
}

export default RecipeApp;
