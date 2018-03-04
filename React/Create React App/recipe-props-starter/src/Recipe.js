import React, { Component } from "react";

class Recipe extends Component {
  render() {
    const {title} = this.props;
    const {ingredients} = this.props.ingredients.map((ing, index) => (
      <li key={index}>{ing}</li>
    ));
    return (
      <div>Recipe {title}</div>
    )
  }
}

export default Recipe;