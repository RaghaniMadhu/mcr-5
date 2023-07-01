import React, { useContext, useState } from "react";
import Modal from "react-modal";
import { RecipesContext } from "../contexts/RecipesContext";

function RecipeModal() {
  const { addARecipe } = useContext(RecipesContext);

  const [isOpen, setIsOpen] = useState(false);
  const [recipe, setRecipe] = useState({
    name: "",
    cusine: "",
    ingredients: "",
    instructions: "",
    image: "https://source.unsplash.com/random/?food&29",
  });

  Modal.setAppElement("body");

  const openModal = () => {
    setIsOpen(true);
  };

  const cancelHandler = () => {
    setIsOpen(false);
  };

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  return (
    <div>
      <button className="cursor-pointer" onClick={openModal}>
        Add A Recipe
      </button>
      <Modal style={customStyles} isOpen={isOpen}>
        <div className="flex-column gap-1">
          <h2 className="margin-block-0">Add A New Recipe</h2>
          <div className="flex-column gap-point-5">
            <label>
              Name:{" "}
              <input
                type="text"
                placeholder="Name"
                onChange={(e) => {
                  setRecipe((prev) => ({ ...prev, name: e.target.value }));
                }}
              />
            </label>
            <label>
              Cusine Type:{" "}
              <input
                type="text"
                placeholder="Cuisine"
                onChange={(e) => {
                  setRecipe((prev) => ({ ...prev, cuisine: e.target.value }));
                }}
              />{" "}
            </label>
            <label>
              Ingredients:{" "}
              <input
                type="text"
                placeholder="Separated by ;"
                className="insrtuct"
                onChange={(e) => {
                  setRecipe((prev) => ({
                    ...prev,
                    ingredients: e.target.value.split(";"),
                  }));
                }}
              />
            </label>
            <label>
              Instructions:{" "}
              <input
                type="text"
                placeholder="Separated by ;"
                className="insrtuct"
                onChange={(e) => {
                  setRecipe((prev) => ({
                    ...prev,
                    instructions: e.target.value.split(";"),
                  }));
                }}
              />
            </label>
            <label>
              Image: <input type="text" placeholder="Image Link" />
            </label>
          </div>
          <div className="flex-row gap-point-5">
            <button
              className="cursor-pointer"
              onClick={() => {
                if (recipe.name === "") {
                  setRecipe((prev) => ({ ...prev, name: "Random Name" }));
                }
                if (recipe.cuisine === "") {
                  setRecipe((prev) => ({ ...prev, cuisine: "Random Cuisine" }));
                }
                if (recipe.ingredients === "") {
                  setRecipe((prev) => ({
                    ...prev,
                    ingredients: [
                      "Random Ingredient 1,Random Ingredient 2,Random Ingredient 3",
                    ],
                  }));
                }
                if (recipe.instructions === "") {
                  setRecipe((prev) => ({
                    ...prev,
                    instructions: [
                      "Random Instructions 1,Random Instructions 2,Random Instructions 3",
                    ],
                  }));
                }
                addARecipe(recipe);
                cancelHandler();
              }}
            >
              Save
            </button>
            <button
              className="cursor-pointer"
              onClick={() => {
                cancelHandler();
              }}
            >
              Cancel
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default RecipeModal;
