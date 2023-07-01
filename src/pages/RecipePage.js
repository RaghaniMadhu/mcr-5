import React, { useContext } from "react";
import { RecipesContext } from "../contexts/RecipesContext";
import { useParams } from "react-router-dom";

function RecipePage() {
  const { recipes } = useContext(RecipesContext);
  const { recipeId } = useParams();

  const ourRecipe = recipes.find(({ _id }) => _id === recipeId);

  return (
    <div className="flex-column-center-center recipe-card-page">
      <h1>{ourRecipe.name}</h1>
      <div className="flex-row gap-1  recipe-card-details">
        <img
          src={
            ourRecipe.image === undefined || ourRecipe.image === ""
              ? "https://source.unsplash.com/random/?food&" + ourRecipe.id
              : ourRecipe.image
          }
          alt={ourRecipe.name}
          className="recipe-card-image"
        />
        <div className="flex-column gap-1 recipe-card-info">
          <div className="flex-row gap-point-2">
            <p className="margin-block-0 font-weight-bold">Cuisine:</p>
            <p className="margin-block-0">{ourRecipe.cuisine}</p>
          </div>
          <div className="flex-row">
            <p className="margin-block-0">
              <span className=" font-weight-bold">Ingredients: </span>
              {ourRecipe.ingredients.join(", ")}.
            </p>
          </div>
          <div className="flex-column">
            <p className="margin-block-0 font-weight-bold">Instructions:</p>
            <ol className="margin-block-0">
              {ourRecipe.instructions.map((instruction) => (
                <li key={instruction}>{instruction}</li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecipePage;
