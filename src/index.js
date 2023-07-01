import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import RecipesContextProvider from "./contexts/RecipesContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <RecipesContextProvider>
      <App />
    </RecipesContextProvider>
  </BrowserRouter>
);
