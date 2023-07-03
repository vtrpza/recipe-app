import React from "react";
import { useTheme } from "../pages/_app";

function Recipe({ recipe }) {
  const { theme } = useTheme();
  const { text, background, primary, secondary, backgroundCard } = theme.colors;

  const recipeStyle = {
    width: {
      xs: "100%",
      sm: "85%",
      md: "70%",
    }[recipe.breakpoints],
    minHeight: "252px",
    marginBottom: theme.spacing.medium,
    borderRadius: "16px",
    backgroundColor: backgroundCard,
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    padding: theme.spacing.medium,
  };

  const titleStyle = {
    marginBottom: theme.spacing.small,
    color: text,
    fontWeight: "bold",
    fontSize: "16px",
  };

  const infoStyle = {
    display: "flex",
    justifyContent: "space-between",
    color: secondary,
    fontSize: "14px",
  };

  const authorStyle = {
    color: secondary,
    fontStyle: "italic",
    fontSize: "12px",
  };

  const likesStyle = {
    textAlign: "right",
  };

  return (
    <div style={recipeStyle}>
      <div>
        <h5 style={titleStyle}>{recipe.name}</h5>
        <div style={infoStyle}>
          <p>Tempo de preparo: {recipe.preparation_time}</p>
          <p>Porções: {recipe.portions}</p>
        </div>
        <p style={authorStyle}>Autor: {recipe.author}</p>
      </div>
      <div style={likesStyle}>
        <p>Likes: {recipe.likes}</p>
      </div>
    </div>
  );
}

export default Recipe;
