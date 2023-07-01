import React from "react";
import { useNavigate } from "react-router-dom";

function RecipeCard({ recipeDetails }) {
  const navigate = useNavigate();

  return (
    <div className="recipe-card flex-column gap-point-5">
      <div>
        <img
          src={"https://source.unsplash.com/random/?food&" + recipeDetails.id}
          alt={recipeDetails.name}
          className="image"
        />
      </div>
      <h3 className="margin-block-0">{recipeDetails.name}</h3>
      <div className="flex-column-center">
        <div className="flex-row justify-content-space-between width-100">
          <p className="margin-block-0 font-weight-bold">Cuisine Type:</p>
          <p className="margin-block-0">{recipeDetails.cuisine}</p>
        </div>
        <div className="flex-row justify-content-space-between width-100">
          <p className="margin-block-0 font-weight-bold">Ingredients:</p>
          <p
            className="margin-block-0 cursor-pointer"
            onClick={() => {
              navigate("/recipes/" + recipeDetails._id);
            }}
          >
            See Recipe {">"}
          </p>
        </div>
        <div className="flex-row justify-content-space-between width-100">
          <p className="margin-block-0 font-weight-bold">Instructions:</p>
          <p
            className="margin-block-0 cursor-pointer"
            onClick={() => {
              navigate("/recipes/" + recipeDetails._id);
            }}
          >
            See Recipe {">"}
          </p>
        </div>
      </div>
    </div>
  );
}

export default RecipeCard;
