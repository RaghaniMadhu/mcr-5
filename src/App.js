import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import RecipePage from "./pages/RecipePage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipes/:recipeId" element={<RecipePage />} />
      </Routes>
    </div>
  );
}

export default App;
