"use client";
/** @jsxImportSource theme-ui */
import React, { useEffect, useState } from "react";
import { useColorMode } from "theme-ui";
import Recipe from "./Recipe";

function RecipeList() {
  const [recipes, setRecipes] = useState([]);
  const [colorMode, setColorMode] = useColorMode();

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/recipes`)
      .then((response) => response.json())
      .then((data) => setRecipes(data));
  }, []);

  const toggleColorMode = () => {
    setColorMode(colorMode === "default" ? "dark" : "default");
  };

  return (
    <div
      sx={{
        maxWidth: "1100px",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "background",
        color: "text",
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
      <button onClick={toggleColorMode}>
        {colorMode === "default"
          ? "Switch to Dark Mode"
          : "Switch to Light Mode"}
      </button>
    </div>
  );
}

export default RecipeList;
