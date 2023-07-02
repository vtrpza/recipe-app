"use client";

import React, { useEffect, useState, useRef } from "react";
import Recipe from "./Recipe";

function RecipeList() {
  const [recipes, setRecipes] = useState([]);
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/recipes`)
      .then((response) => response.json())
      .then((data) => setRecipes(data));
  }, []);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <div
      style={{
        maxWidth: "1100px",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill,minmax(300px,1fr))",
          gap: "2px",
          justifyContent: "center",
        }}
      >
        {recipes.map((recipe) => (
          <Recipe key={recipe.id} recipe={recipe} theme={theme} />
        ))}
      </div>
      <button onClick={toggleTheme}>
        {theme === "light" ? "Switch to Dark Mode" : "Switch to Light Mode"}
      </button>
    </div>
  );
}

export default RecipeList;
