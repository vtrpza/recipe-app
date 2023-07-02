import React, { useEffect, useRef } from "react";

function Recipe({ recipe, theme }) {
  const ref = useRef();

  useEffect(() => {
    const boxShadow = getComputedStyle(ref.current)
      .getPropertyValue("--primary-glow")
      .trim();
    ref.current.style.boxShadow = boxShadow;
  }, [theme]);

  return (
    <div
      ref={ref}
      style={{
        width: { xs: "100%", sm: "85%", md: "70%" },
        minHeight: "252px",
        marginBottom: "2px",
        borderRadius: "12px",
      }}
    >
      <div>
        <h5>{recipe.name}</h5>
        <p>Tempo de preparo: {recipe.preparation_time}</p>
        <p>Porções: {recipe.portions}</p>
        <p>Autor: {recipe.author}</p>
        <p>Likes: {recipe.likes}</p>
      </div>
    </div>
  );
}

export default Recipe;
