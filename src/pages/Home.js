import React, { useContext, useState } from "react";
import { RecipesContext } from "../contexts/RecipesContext";
import RecipeCard from "../components/RecipeCard";

function Home() {
  const { recipes } = useContext(RecipesContext);

  const [recipeFilters, setRecipeFilters] = useState({
    searchBy: "name",
    searchString: "",
  });

  const onChangeHandler = (e) => {
    setRecipeFilters((prev) => ({
      ...prev,
      searchBy: e.target.value,
    }));
  };

  const filteredRecipes =
    recipeFilters.searchString.length > 0
      ? recipeFilters.searchBy === "ingredients"
        ? recipes.filter((eachRecipe) =>
            eachRecipe[recipeFilters.searchBy]
              .join("")
              .toLowerCase()
              .includes(recipeFilters.searchString.toLowerCase())
          )
        : recipes.filter((eachRecipe) =>
            eachRecipe[recipeFilters.searchBy]
              .toLowerCase()
              .includes(recipeFilters.searchString.toLowerCase())
          )
      : recipes;

  return (
    <div className="flex-column">
      <div className="filters-and-search-div flex-row gap-1">
        <div className="search-div">
          <input
            type="text"
            placeholder="Search the item you want"
            onChange={(e) => {
              setRecipeFilters((prev) => ({
                ...prev,
                searchString: e.target.value,
              }));
            }}
          />
        </div>
        <div className="filters-div flex-row-center gap-point-2">
          <label>Filters:</label>
          <label>
            <input
              type="radio"
              name="filters"
              value="name"
              checked={recipeFilters.searchBy === "name"}
              onChange={(e) => onChangeHandler(e)}
            />
            Name
          </label>
          <label>
            <input
              type="radio"
              name="filters"
              value="ingredients"
              checked={recipeFilters.searchBy === "ingredients"}
              onChange={(e) => onChangeHandler(e)}
            />
            Ingredients
          </label>
          <label>
            <input
              type="radio"
              name="filters"
              value="cuisine"
              checked={recipeFilters.searchBy === "cuisine"}
              onChange={(e) => onChangeHandler(e)}
            />
            Cuisine
          </label>
        </div>
      </div>
      <h1>All Recipes:</h1>
      <div className="flex-row-center flex-wrap gap-1">
        {filteredRecipes.map((eachRecipe) => (
          <RecipeCard key={eachRecipe.id} recipeDetails={eachRecipe} />
        ))}
      </div>
    </div>
  );
}

export default Home;
