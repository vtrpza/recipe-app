"use client";
import React, { useEffect, useState } from "react";
import Recipe from "./Recipe";
import { useTheme } from "../pages/_app";

function RecipeList() {
  const [recipes, setRecipes] = useState([]);
  const { theme: currentTheme, toggleTheme } = useTheme();

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/recipes`)
      .then((response) => response.json())
      .then((data) => setRecipes(data));
  }, []);

  return (
    <div
      sx={{
        maxWidth: "1100px",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: theme === "light" ? "white" : "black",
        color: theme === "light" ? "black" : "white",
      }}
    >
      <div
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill,minmax(300px,1fr))",
          gap: "2px",
          justifyContent: "center",
        }}
      >
        {recipes.map((recipe) => (
          <Recipe key={recipe.id} recipe={recipe} />
        ))}
      </div>
      <button onClick={toggleTheme}>
        {theme === "light" ? "Switch to Dark Mode" : "Switch to Light Mode"}
      </button>
    </div>
  );
}

export default RecipeList;
