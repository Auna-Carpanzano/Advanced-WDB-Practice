import React, {Component} from "react";

class RecipeInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      instructions: "",
      ingredients: [""],
      img: ""
    };
  }
  render() {
    const {title, instructions, ingredients, img} = this.state;
  }
}

export default RecipeInput;