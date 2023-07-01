import { createContext, useState } from "react";
import { recipesData } from "../db/RecipesData";

export const RecipesContext = createContext();

function RecipesContextProvider({ children }) {
  const [recipes, setRecipes] = useState(recipesData);

  return (
    <RecipesContext.Provider value={{ recipes, setRecipes }}>
      {children}
    </RecipesContext.Provider>
  );
}

export default RecipesContextProvider;
