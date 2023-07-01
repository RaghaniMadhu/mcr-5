import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { RecipesContext } from "../contexts/RecipesContext";

function RecipeCard({ recipeDetails }) {
  const navigate = useNavigate();
  const { deleteARecipe } = useContext(RecipesContext);

  return (
    <div className="recipe-card flex-column gap-point-5">
      <div style={{ position: "relative" }}>
        <img
          src={
            recipeDetails.image === undefined || recipeDetails.image === ""
              ? "https://source.unsplash.com/random/?food&" + recipeDetails.id
              : recipeDetails.image
          }
          alt={recipeDetails.name}
          className="image"
        />
        <AiOutlineEdit className="icons icon-1" />
        <AiOutlineDelete
          className="icons icon-2 cursor-pointer"
          onClick={() => {
            deleteARecipe(recipeDetails._id);
          }}
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
