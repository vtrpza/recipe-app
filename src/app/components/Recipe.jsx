/** @jsxImportSource theme-ui */

function Recipe({ recipe }) {
  return (
    <div
      sx={{
        width: { xs: "100%", sm: "85%", md: "70%" },
        minHeight: "252px",
        marginBottom: "2px",
        borderRadius: "12px",
        backgroundColor: "primary",
        color: "background",
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
