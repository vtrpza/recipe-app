"use client";
import React, { useEffect, useState } from "react";
import Recipe from "./Recipe";
import { useTheme } from "../pages/_app";

function RecipeList() {
  const [recipes, setRecipes] = useState([]);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/recipes`)
      .then((response) => response.json())
      .then((data) => setRecipes(data));
  }, []);

  const containerStyle = {
    maxWidth: "1100px",
    margin: "0 auto",
    paddingTop: "64px",
    backgroundColor: theme.colors.background,
    color: theme.colors.text,
  };

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
    gap: theme.spacing.medium,
  };

  const buttonStyle = {
    marginTop: theme.spacing.large,
    padding: `${theme.spacing.small} ${theme.spacing.medium}`,
    borderRadius: "4px",
    backgroundColor: theme.colors.primary,
    color: theme.colors.background,
    border: "none",
    cursor: "pointer",
  };

  return (
    <div style={containerStyle}>
      <div style={gridStyle}>
        {recipes.map((recipe) => (
          <Recipe key={recipe.id} recipe={recipe} />
        ))}
      </div>
      <button style={buttonStyle} onClick={toggleTheme}>
        {theme === "light" ? "Switch to Dark Mode" : "Switch to Light Mode"}
      </button>
    </div>
  );
}

export default RecipeList;
