import React, { useState } from "react";
import { useTheme } from "../pages/_app";

function Recipe({ recipe }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const { theme } = useTheme();
  const { text, background, primary, secondary } = theme;

  const recipeStyle = {
    width: {
      xs: "100%",
      sm: "85%",
      md: "70%",
    }[recipe.breakpoints],
    minHeight: "252px",
    marginBottom: "16px",
    borderRadius: "16px",
    backgroundColor: background,
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    padding: "16px",
  };

  const titleStyle = {
    marginBottom: "8px",
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

  const descriptionStyle = {
    marginTop: "8px",
    color: text,
    fontSize: "14px",
  };

  const expandButtonStyle = {
    marginTop: "8px",
    padding: "4px 8px",
    borderRadius: "4px",
    backgroundColor: primary,
    color: background,
    border: "none",
    cursor: "pointer",
    fontSize: "12px",
  };

  const ingredientListStyle = {
    marginTop: "8px",
    color: text,
    fontSize: "14px",
  };

  const handleExpand = () => {
    setIsExpanded(!isExpanded);
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
        {isExpanded && (
          <>
            <p style={descriptionStyle}>{recipe.description}</p>
            <h6 style={{ ...titleStyle, marginTop: "16px" }}>Ingredientes:</h6>
            <ul style={ingredientListStyle}>
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
          </>
        )}
      </div>
      <div style={{ textAlign: "right" }}>
        {!isExpanded && (
          <button style={expandButtonStyle} onClick={handleExpand}>
            Ver mais
          </button>
        )}
      </div>
    </div>
  );
}

export default Recipe;
