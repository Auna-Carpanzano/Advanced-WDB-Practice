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
    let inputs = ingredients.map((ing, i) => (
      <div
        className="recipe-form-line"
        key={`ingredient-${i}`}
      >
        <label>
          <input
            type="text"
            name={`ingredient-${i}`}
            value={ing}
            size={45}
            autoComplete="off"
            placeholder="Ingredient"
            onChange={() => {}} />
        </label>
      </div>
    ));
    return(
      <div className="recipe-form-container">
        <form className="recipe-form" onSubmit={this.handleSubmit}>
          <button
            type="button"
            className="close-button"
            onClick={onClose}
          >
            X
          </button>
          <div className="recipe-form-line">
            <label htmlFor="recipe-title-input">Title</label>
            <input
              id="recipe-title-input"
              key="title"
              name="title"
              type="text"
              value={title}
              size={42}
              autoComplete="off"
              onChange={this.handleChange}
            />
          </div>
        </form>
      </div>
    )
  }
}

export default RecipeInput;