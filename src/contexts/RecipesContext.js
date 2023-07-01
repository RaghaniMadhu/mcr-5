import { createContext, useState } from "react";
import { recipesData } from "../db/RecipesData";
import { v4 as uuid } from "uuid";

export const RecipesContext = createContext();

function RecipesContextProvider({ children }) {
  const [recipes, setRecipes] = useState(recipesData);

  const deleteARecipe = (recipeId) => {
    setRecipes(recipes.filter(({ _id }) => recipeId !== _id));
  };

  const addARecipe = (recipe) => {
    setRecipes([...recipes, { _id: uuid(), id: recipe.length, ...recipe }]);
  };

  return (
    <RecipesContext.Provider value={{ recipes, deleteARecipe, addARecipe }}>
      {children}
    </RecipesContext.Provider>
  );
}

export default RecipesContextProvider;
